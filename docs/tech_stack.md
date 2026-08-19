# Tech Stack — Budget 101

| Field | Value |
| --- | --- |
| Status | decided |
| Decides | the "tech stack, hosting, and content pipeline" open decision in `build_spec.md` |

## Verdict: fully static SPA, no backend

Single-page app, built once, served from GitHub Pages. No server, no database, no API at runtime.

* Every spec'd feature is client-side: all 12 interactives run on static data with browser logic; progress is local (localStorage) with **export/import as a file** for device transfer; search indexes the bundled content client-side; downloadable outputs generate in-browser.
* Content changes at a predictable cadence (yearly budget-season refresh) — build-time publishing fits.
* Solo build: one framework, one language, one deploy target, zero vendors.

### Accepted trade-offs

* **SPA, not SSG:** every page ships JS. Mitigated by route-level code splitting (reading pages stay light); SEO is weaker than static HTML — acceptable for a course app, revisit if discoverability matters later.
* **Progress is device-bound** — solved without a backend: settings page offers **Export progress** (downloads a versioned JSON file) and **Import progress** (file picker, validates schema version, replaces current data after confirmation).
* **All data ships at build time.** Budget figures are dated snapshots ("last verified"), matching the swappable-data model; no live feeds.
* **No PR preview deploys** (GitHub Pages has none natively). Solo workflow: review builds locally before merge; the accuracy-gate SME reviews a local build or the live deploy. Keep content merges to `main` deliberate — `main` deploys automatically.

## Stack

| Layer | Choice | Notes |
| --- | --- | --- |
| Build | **Vite** | Dev server + build; route-level code splitting via dynamic imports. |
| UI | **React** (SPA) | One codebase for pages and interactives. |
| Components | **shadcn/ui** | Copy-in components (Radix + Tailwind) — forms, dialogs, tabs, cards cover the interactive patterns; code lives in-repo so it's hackable for course-specific widgets. |
| Styling | **Tailwind CSS** | Pairs with shadcn; mobile-first utilities. |
| Routing | **react-router** + GH Pages `404.html` trick | Clean URLs (`/modules/04/…`) that survive refresh: build step copies `index.html` → `404.html`. Fallback if it ever misbehaves: switch to `HashRouter` — no other changes. |
| Content | **MDX in repo** (`@mdx-js/rollup`) | Lessons are markdown + embedded React components; git history is the content audit trail for the accuracy gate. No CMS. |
| Swappable data | **JSON per module** under `src/data/` | Year-specific figures never inline in prose; referenced by key from MDX/components; schema-validated in CI. |
| Progress | **localStorage** (versioned schema) + **export/import JSON file** | Import validates the version field and replaces data after a confirm dialog. No cookies. |
| Search | **MiniSearch** over the content index (Phase 2) | Bundled JSON index, client-side, no server. |
| PDF/downloads | Print CSS + browser print | One-pagers (engagement plan, capstone brief) print cleanly; add a PDF lib only if print proves insufficient. |
| i18n groundwork | UI strings in JSON dictionaries + `Intl` formatting | English-only now; structure honors the localization requirement. |
| Testing | **Vitest** for interactive logic, data schemas, progress import/export | Add Playwright later only if regressions justify it. |
| Hosting | **GitHub Pages** via GitHub Actions | Free; deploy on push to `main`. |

Pin exact versions at scaffold time (note: shadcn/ui tracks Tailwind major versions — check compatibility when initializing).

## Repository layout

```
budget-natin-web-app/
├── docs/                      # specs (this documentation set)
├── sources/                   # source PDFs (never deployed)
├── public/                    # static assets, document replicas (int-12 corpus)
├── src/
│   ├── content/               # MDX lessons + reference pages
│   │   ├── modules/04-the-budget-cycle/   # one folder per module
│   │   └── reference/                     # ref-01…ref-10
│   ├── components/
│   │   ├── ui/                # shadcn components
│   │   └── interactives/      # int-01 … int-12
│   ├── data/                  # swappable JSON per module + capstone datasets
│   ├── pages/                 # route components
│   ├── layouts/
│   ├── lib/                   # progress store, search, i18n, utils
│   └── styles/
├── tests/
├── vite.config.ts             # base path set for GH Pages (see below)
└── .github/workflows/         # build+validate on PR; deploy on main
```

Routes mirror spec IDs: `/modules/04-the-budget-cycle/lesson-4-1`, `/reference/glossary`. IDs are permanent, so URLs are too.

**GitHub Pages base path: resolved.** Repo is `csiiiv/phbudget101`, so the site serves at `https://csiiiv.github.io/phbudget101/` — Vite `base` and the router `basename` are both set to `/phbudget101/`. A custom domain later means changing these two lines.

## Content pipeline

Git-based, in-repo — no CMS, no vendor.

* Author MDX/JSON in the repo; push to deploy. For a solo builder the IDE *is* the editor.
* CI on every push: build, JSON schema validation (figures must carry `asOf` + `source` — missing fields fail the build, mechanically enforcing the "dated and swappable" convention), link check.
* Merge to `main` → GitHub Actions builds and deploys to Pages.

### Swappable-data representation

* `src/data/modules/04.json` — figures referenced by key (a `<Figure id="mao-ask" />` component renders amount + as-of date + source), never typed into prose.
* Capstone datasets: `src/data/capstone/<sector>.json`, same schema requirements.
* A fiscal-year refresh touches only JSON files.

## Progress tracking

localStorage, versioned schema:

```json
{
  "version": 1,
  "path": "full",
  "modules": { "mod-04": { "04.1": "completed", "04.2": "visited" } },
  "diagnostic": { "taken": true, "suggested": "quick" },
  "drafts": { "capstone": { "sector": "transport", "step": 4 } }
}
```

* Keyed by permanent spec IDs.
* **Export:** settings page → download `budget101-progress-<date>.json`.
* **Import:** file picker → validate `version` (migrate or reject with a clear message) → show summary of what changes → confirm replaces the store.
* Import/export is also the backup story (before clearing browser data, switching devices, or sharing progress across a classroom's machines).

## Performance budget (mobile, low-bandwidth requirement)

* Route-level code splitting: module chunks load on navigation; interactives load their own chunk only when opened.
* Target: ≤ 150 KB gzipped JS for a reading route; ≤ 250 KB for an interactive route (island data included).
* Diagrams SVG-first and lazy-loaded; document replicas (int-12) paginated.
* One web-font family max with system fallbacks; the ₱ glyph must render from system fonts.
* Check with Lighthouse locally on each interactive before merge (no paid CI needed at this scale).

## CI and deploy (GitHub Actions)

1. On PR/push: install, build, schema validation, lint, unit tests.
2. On push to `main`: build → deploy to GitHub Pages (official `actions/deploy-pages` flow).
3. Accuracy gate happens before merge: SME reviews a local build (`npm run dev` / `npm run build && preview`) or the live deploy.

## What was considered and set aside

* **Astro (SSG):** zero-JS reading pages and better SEO, but a second templating model to maintain for one builder; React-everywhere is simpler. Revisit if SEO becomes a requirement.
* **Next.js:** SSR machinery the site never uses; heavier than needed on Pages.
* **Netlify/Cloudflare Pages:** better preview deploys, but GitHub Pages keeps everything on one platform for zero cost; preview need is low for a solo workflow.
* **Headless CMS:** the IDE + git already is the pipeline.
* **Backend "just in case":** every spec'd feature — including progress transfer — is client-side.

## Escape hatches

| Trigger | Path |
| --- | --- |
| Progress sync across devices becomes a real need | The export/import file already covers most cases; if not, add a thin API later — the schema is versioned for migration, and the SPA stays as-is. |
| Live budget data | Rebuild the site on a schedule with fresh JSON, or fetch a static JSON from a repo/CDN at runtime — still no backend. |
| SEO/discoverability matters | Add prerendering (vite-plugin-ssr or a later Astro port of content pages) without changing the content model. |
| LMS/classroom integration | Wrap as xAPI export target; static content is a prerequisite, not an obstacle. |

## Open decisions remaining

* ~~Repo name / base path~~ — resolved: `csiiiv/phbudget101`; base path `/phbudget101/` set in Vite and router config.
* **Custom domain** — optional later; two config lines when ready.
* **Analytics** — none by default; if needed, a cookieless hosted counter is a conscious add-on (no backend, no PII).
* **SME reviewer for the accuracy gate** — still to name (from `build_spec.md` open decisions).
