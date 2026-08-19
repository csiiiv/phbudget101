# Architecture decision records

Key decisions for PH Budget 101, in the order they were made. Each record is the **current** decision unless marked superseded. Detail and rejected alternatives also live in [`tech_stack.md`](tech_stack.md) and [`build_spec.md`](build_spec.md); this file is the index.

Status: `accepted` · `superseded` · `proposed`

---

## ADR-001 — Fully static SPA, no backend

* Status: accepted
* Date: 2026-08

**Context.** The course is a self-paced public site with yearly content refresh, no accounts in MVP, and a solo builder.

**Decision.** Ship a client-only SPA. No server, database, or runtime API. All interactives use bundled data. Progress lives in the browser.

**Consequences.** Zero hosting cost beyond GitHub Pages; no PII pipeline. Progress is device-bound unless exported. Live budget feeds are out of scope (refresh JSON and rebuild). Adding a backend later is an additive API, not a rewrite, if the progress schema stays versioned.

---

## ADR-002 — Vite + React + Tailwind + shadcn/ui

* Status: accepted
* Date: 2026-08

**Context.** Need one language for pages and interactives, mobile-first CSS, and a component kit that can be forked in-repo.

**Decision.** Vite, React 19, Tailwind CSS 4, shadcn/ui (Radix + CVA copy-in components). TypeScript throughout.

**Rejected.** Astro (better SEO, two templating models). Next.js (SSR unused on Pages).

**Consequences.** Every route ships JS (mitigate with route-level splitting). shadcn components are ours to edit. Usage-site layout bugs are ours, not “shadcn being broken.”

---

## ADR-003 — GitHub Pages + Actions; SPA 404 fallback

* Status: accepted
* Date: 2026-08

**Context.** Free hosting on the same platform as the repo (`csiiiv/phbudget101`).

**Decision.** Deploy `dist/` on push to `main`. Vite `base` and React Router `basename` are `/phbudget101/`. Copy `index.html` → `404.html` so clean URLs survive refresh.

**Rejected.** Netlify/Cloudflare (better preview deploys; extra vendor). HashRouter unless the 404 trick fails.

**Consequences.** No native PR preview deploys. Custom domain later is two config lines. `main` must stay shippable.

---

## ADR-004 — Git-based content; TSX-first lessons

* Status: accepted (supersedes MDX-as-default)
* Date: 2026-08

**Context.** Accuracy gate needs an audit trail. Early MDX stubs were blamed for “bad UI”; the real issue was missing typography and `not-prose` on widgets.

**Decision.** Lessons are TypeScript modules: `export default defineLesson({ sections })`. MDX remains supported as a legacy continuous article. No CMS.

**Consequences.** Full typecheck of lesson bodies; components import directly. Authors need TSX fluency. Registry globs `*.tsx` then `*.mdx`.

---

## ADR-005 — Dual reading modes from one section list

* Status: accepted
* Date: 2026-08
* See: [`notes/self_paced_lesson_format.md`](notes/self_paced_lesson_format.md)

**Context.** Long articles feel long on mobile; duplicating guided vs long-form content would drift.

**Decision.** Each lesson is an ordered `LessonSection[]`. Guided mode paginates it; full mode renders it as one page. A subway map is step nav in guided mode and a scroll-spy TOC in full mode. Default is guided; preference is stored as `readingMode`. Same URL.

**Consequences.** New lessons must use `defineLesson`. Interactive state must remount on lesson id and section id so checks do not leak across stations or lessons.

---

## ADR-006 — Progress in localStorage with file export/import

* Status: accepted
* Date: 2026-08

**Context.** No accounts. Learners still need backup and device transfer.

**Decision.** Versioned JSON in `localStorage` (`phbudget101:progress`), Zod-validated. Settings: export download, import replace, clear. Schema fields include path, per-lesson status, diagnostic, drafts, `readingMode`, and `mistakes`.

**Consequences.** Clearing site data loses progress unless exported. Unknown future `version` values are rejected with a human message. Additive fields should `.default(...)` so older files still import.

---

## ADR-007 — Year-specific figures as swappable JSON

* Status: accepted
* Date: 2026-08

**Context.** GAA amounts change every year; lessons should not be rewritten for a fiscal-year refresh.

**Decision.** Per-module JSON under `src/data/modules/`. Every figure has `id`, `value`, `unit`, `asOf`, `source`. CI (`validate:data`) fails the build if provenance is missing. `<Figure />` is the only way amounts appear in lessons.

**Consequences.** Authoring is slightly more ceremony. Invented teaching numbers stay out of this pipeline and must be labeled illustrative in the interactive instead.

---

## ADR-008 — PFM-first course; editorial neutrality in lessons

* Status: accepted
* Date: 2026-08

**Context.** Source material is an advocacy guidebook. The product goal is a general Budget 101, later forkable for CSOs or officials.

**Decision.** Teach the PFM system first; participation is later modules applying literacy. Learner-facing lessons name no advocacy orgs, coalitions, campaigns, or personalities. Guidebook cases become methods, public facts, or unlabeled composites. Attribution lives in ref-07b.

**Consequences.** Worked examples must be rewritten, not copied. Accuracy review includes a neutrality check.

---

## ADR-009 — English now; localization-ready mechanics

* Status: accepted
* Date: 2026-08

**Context.** Filipino (and others) are planned; idioms and hardcoded number strings would block it.

**Decision.** English-only UI and lessons for the initial build. No untranslatable idioms. `Intl` for numbers/dates. UI strings should stay out of one-off literals as we go (dictionaries not fully extracted yet).

**Consequences.** A later i18n pass still has to extract strings. Do not add a second locale until that extraction exists.

---

## ADR-010 — Knowledge checks are advisory; misses are study material

* Status: accepted
* Date: 2026-08

**Context.** Self-paced tool, not a credential. Wrong answers are often more instructive than right ones.

**Decision.** Checks never block Continue or lesson completion. One question at a time, retry, explain each distractor. Persist misses (prompt, picked option, reason) in progress for review and export; “Mark reviewed” dismisses them.

**Consequences.** Completion means “learner marked done,” not “passed a quiz.” Do not add scores to the progress file without a new ADR.

---

## ADR-011 — Linear default, no hard gates except capstone availability

* Status: accepted
* Date: 2026-08

**Context.** Three paths (quick, full, reference) and mobile drop-in use.

**Decision.** Any lesson URL is reachable. Capstone requires Modules 1–9 **content** to exist, not completion scores. Stations inside a lesson are not locked.

**Consequences.** Home and module pages show progress but do not enforce order. Quick-path highlighting in Module 0 is still to be wired.

---

## Open (not yet ADRs)

* Custom domain
* Analytics (none unless we choose a cookieless counter)
* Named SME for the accuracy gate
* Sample document corpus and rights for int-12
