# Task list

Master work list for PH Budget 101. Specs remain the source of truth for *what the course is*; this file tracks *what still has to be built*. Update statuses here when work starts or finishes — do not invent new scope in this file.

**Status vocabulary:** `done` · `in progress` · `next` · `blocked` · `later`

Related docs: [`build_spec.md`](build_spec.md) (conventions, registries), [`tech_stack.md`](tech_stack.md) (stack), [`styleguide.md`](styleguide.md) (UI), [`ADRs.md`](ADRs.md) (decisions), [`notes/self_paced_lesson_format.md`](notes/self_paced_lesson_format.md) (lesson presentation).

---

## Now

**in progress — content first:** Finish Module 00 as **static orientation** (no int-06 / int-07).

1. Complete [00.1](../src/content/modules/00-start-here/00.1.tsx) to spec (PFM-first framing, who it is for, three paths; path choice at the end).
2. Author **00.2** as a headline-only flow (revenue → budget decisions → services) with a **static** diagram or linked list of modules (Phase 2 concept map later).
3. Author **00.3** as a **three-question self-check list** recommending quick vs full path (Phase 2 diagnostic later).

Then the next content slice is **Module 02** (02.1–02.3 prose + `src/data/modules/02.json`; no int-10). Agents: **one lesson per PR**.

---

## Platform and product (done unless noted)

| Item | Status | Notes |
| --- | --- | --- |
| Vite + React + Tailwind + TypeScript SPA | done | GitHub Pages at `/phbudget101/` |
| shadcn/ui (Button, Card, Badge, Tabs, Input, Dialog, Separator) | done | Copy-in components under `src/components/ui/` |
| Routing + 404.html SPA fallback | done | `createBrowserRouter`, basename `/phbudget101` |
| CI (lint, typecheck, data validate, tests) + deploy on `main` | done | `.github/workflows/` |
| Progress: localStorage, export/import, Zod schema | done | Includes `readingMode` and `mistakes` |
| Swappable figures (`src/data/modules/*.json` + `<Figure />`) | done | Schema-validated in CI; only `04.json` seeded |
| Lesson section schema (`defineLesson`) | done | Powers both reading modes |
| Guided + full reading modes, preference remembered | done | Toggle beside subway map; default guided |
| Subway-style section map | done | Horizontal desktop; expandable vertical on mobile |
| Knowledge check: one-at-a-time, retry, per-wrong reasons, persisted misses | done | Advisory, not gating |
| Lesson footer: complete + prev/next cards; Course Home on last section of last lesson | done | |
| Home, module, lesson, settings, about, 404 pages | done | Glossary and acronyms reference pages seeded; other reference pages are placeholders |
| Custom domain | later | Two config lines when decided |
| Analytics | later | None by default; cookieless only if added |
| Playwright / visual regression | later | Add if UI regressions justify it |
| i18n (Filipino first) | later | English only; keep strings and `Intl` formatting ready |

---

## Content — modules

Authoring status from the module registry. "Scaffolded" means a lesson file exists but is not a full draft.

| Module | Spec status | Lessons authored | Next content work |
| --- | --- | --- | --- |
| 00 Start Here | outline | 00.1 scaffolded | 00.2, 00.3; diagnostic and concept map are Phase 2 interactives |
| 01 Why PFM Matters | content-draft | 01.1, 01.2, 01.3 **done** | Accuracy-gate review before `review` / `final` |
| 02 The Government's Money | outline | none | Author 02.1–02.3; seed `src/data/modules/02.json` |
| 03 Anatomy of the Budget | outline | 03.1 authored | Author 03.2–03.4 |
| 04 The Budget Cycle | outline | 04.1 scaffolded | Finish 04.1; author 04.2–04.4; see notes on int-03 |
| 05 Appropriation → Service | outline | none | Author 05.1–05.3 |
| 06 Local Government Budgets | outline | none | Author 06.1–06.4 |
| 07 Reading Budget Documents | outline | none | Author 07.1–07.4 |
| 08 Evaluating Decisions | outline | none | Author 08.1–08.5 |
| 09 Participating | outline | none | Author 09.1–09.5 |
| 10 Capstone | outline | none | Phase 2 — after Modules 1–9 exist |

Lesson files live at `src/content/modules/<slug>/<lesson-id>.tsx` and must `export default defineLesson({ sections })`.

---

## Interactives

| ID | Element | Phase | Status |
| --- | --- | --- | --- |
| int-01 | Trace-a-concern | 1 | done (embedded in 01.3) |
| int-02 | Annotated budget entry | 1 | not started |
| int-03 | Budget cycle timeline | 1 | not started — options in [`notes/budget-cycle-interactive-options.md`](notes/budget-cycle-interactive-options.md) |
| int-04 | School-building step-through | 1 | not started (reuse step-through pattern from int-01) |
| int-05 | Engagement plan builder | 1 | not started |
| int-06 | Money concept map | 2 | not started |
| int-07 | Diagnostic quiz | 2 | not started |
| int-08 | Proposal comparison | 2 | not started |
| int-09 | Capstone workbook | 2 | not started |
| int-10 | Budget balancer | 3 | later |
| int-11 | Municipal budget builder | 3 | later |
| int-12 | Guided document explorer | 3 | later — blocked on sample document corpus |

Phase 1 interactives must degrade to static content.

---

## Reference section

All components are specced in [`reference-section.md`](reference-section.md). App routes exist; bodies are placeholders.

| ID | Component | Phase | Status |
| --- | --- | --- | --- |
| ref-01 | Glossary | 1 | seed (terms used in authored lessons; grows with modules) |
| ref-02 | Document library | 1 | not started |
| ref-03 | Institutional map | 1 | not started |
| ref-04 | Budget calendar | 1 | not started |
| ref-05 | Classification reference | 1 | not started |
| ref-05b | Local budget structures | 1 | not started |
| ref-06 | Acronyms | 1 | seed (generated from glossary) |
| ref-07 | Legal and policy references | 1 | not started |
| ref-07b | Sources and attribution | 1 | not started |
| ref-08 | Data-source directory | 1 | not started |
| ref-09 | FAQ | 1 | not started |
| ref-10 | Search | 2 | later |

---

## Blocked / needs a named owner

| Item | Why it is blocked |
| --- | --- |
| SME reviewer for the accuracy gate | Name a person or commission a review before any module reaches `final` (`build_spec.md`) |
| Sample NEP/GAA corpus for int-12 | Which volumes, rights-cleared how |
| Capstone datasets | Authoring owner and figure-review process |
| Module 01 → `review` | Waiting on accuracy gate |

---

## How to use this file

1. Pick the next slice from **Now** (one **lesson** of module content). Agents: see [`AGENTS.md`](../AGENTS.md).
2. Set it to `in progress` when work starts; `done` when it is on `main` (or merged from the agent PR).
3. Scope changes still go through `outline_for_web.md` first, then the module spec — this list only reflects that scope.
4. After finishing a module's lessons, bump the module spec status (`outline` → `content-draft`) and the row in this file together.
