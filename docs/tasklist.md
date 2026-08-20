# Task list

Master work list for PH Budget 101. Specs remain the source of truth for _what the course is_; this file tracks _what still has to be built_. Update statuses here when work starts or finishes — do not invent new scope in this file.

**Status vocabulary:** `done` · `in progress` · `next` · `blocked` · `later`

Related docs: [`build_spec.md`](build_spec.md) (conventions, registries), [`tech_stack.md`](tech_stack.md) (stack), [`styleguide.md`](styleguide.md) (UI), [`ADRs.md`](ADRs.md) (decisions), [`notes/self_paced_lesson_format.md`](notes/self_paced_lesson_format.md) (lesson presentation).

---

## Now

**next — Module 03 completeness pass:** All lesson bodies for Modules 00–09 are on `main` (batch 1 via #37, batch 2 via #39). Remaining content work, in priority order:

1. **Accuracy pass** over the merged drafts (Modules 00–09) — verify terms, figures, and law references before any module moves past `content-draft`.
2. **Module 10 Capstone** stays Phase 2 — do not start.
3. Reference-section bodies (ref-02 … ref-09) once content is stable.

Agents: **one lesson (or one accuracy pass per module) per PR**.

---

## Platform and product (done unless noted)

| Item                                                                                  | Status      | Notes                                                                                |
| ------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------ |
| Vite + React + Tailwind + TypeScript SPA                                              | done        | GitHub Pages at `/phbudget101/`                                                      |
| shadcn/ui (Button, Card, Badge, Tabs, Input, Dialog, Separator)                       | done        | Copy-in components under `src/components/ui/`                                        |
| Routing + 404.html SPA fallback                                                       | done        | `createBrowserRouter`, basename `/phbudget101`                                       |
| CI (lint, typecheck, data validate, tests) + deploy on `main`                         | done        | `.github/workflows/`                                                                 |
| Progress: localStorage, export/import, Zod schema                                     | done        | Includes `readingMode` and `mistakes`                                                |
| Swappable figures (`src/data/modules/*.json` + `<Figure />`)                          | done        | Schema-validated in CI; only `04.json` seeded                                        |
| Lesson section schema (`defineLesson`)                                                | done        | Powers both reading modes                                                            |
| Guided + full reading modes, preference remembered                                    | done        | Toggle beside subway map; default guided                                             |
| Subway-style section map                                                              | done        | Horizontal desktop; expandable vertical on mobile                                    |
| Knowledge check: one-at-a-time, retry, per-wrong reasons, persisted misses            | done        | Advisory, not gating                                                                 |
| Lesson footer: complete + prev/next cards; Course Home on last section of last lesson | done        |                                                                                      |
| Home, module, lesson, settings, about, 404 pages                                      | done        | Glossary and acronyms reference pages seeded; other reference pages are placeholders |
| Custom domain                                                                         | later       | Two config lines when decided                                                        |
| Analytics                                                                             | later       | None by default; cookieless only if added                                            |
| Playwright / visual regression                                                        | later       | Add if UI regressions justify it                                                     |
| i18n (Filipino first)                                                                 | done        | Filipino UI + Modules 00–09 lesson bodies; Module 10 metadata only (capstone body Phase 2) |

---

## Content — modules

Authoring status from the module registry. "Scaffolded" means a lesson file exists but is not a full draft.

| Module                      | Spec status   | Lessons authored                      | Next content work                                                                            |
| --------------------------- | ------------- | ------------------------------------- | -------------------------------------------------------------------------------------------- |
| 00 Start Here               | content-draft | 00.1, 00.2, 00.3 **done**             | Static orientation complete; diagnostic and concept map remain Phase 2                       |
| 01 Why PFM Matters          | content-draft | 01.1, 01.2, 01.3 **done**             | Filipino translation complete. Accuracy-gate review still required before `review` / `final` |
| 02 The Government's Money   | content-draft | 02.1, 02.2, 02.3 **done**             | Filipino translation complete. `src/data/modules/02.json` seeded                             |
| 03 Anatomy of the Budget    | content-draft | 03.1, 03.2, 03.3, 03.4 **done**       | Filipino translation complete                                                                |
| 04 The Budget Cycle         | content-draft | 04.1, 04.2, 04.3, 04.4 **done**       | Filipino translation complete; int-03 options note still open                                |
| 05 Appropriation → Service  | content-draft | 05.1, 05.2, 05.3 **done**             | Filipino translation complete                                                                |
| 06 Local Government Budgets | content-draft | 06.1, 06.2, 06.3, 06.4 **done**       | Filipino translation complete                                                                |
| 07 Reading Budget Documents | content-draft | 07.1, 07.2, 07.3, 07.4 **done**       | Filipino translation complete                                                                |
| 08 Evaluating Decisions     | content-draft | 08.1, 08.2, 08.3, 08.4, 08.5 **done** | Filipino translation complete                                                                |
| 09 Participating            | content-draft | 09.1, 09.2, 09.3, 09.4, 09.5 **done** | Filipino translation complete                                                                |
| 10 Capstone                 | outline       | none                                  | Phase 2 — after Modules 1–9 exist. Filipino metadata title present; no lesson body yet       |

Lesson files live at `src/content/modules/<slug>/<lesson-id>.tsx` and must `export default defineLesson({ sections })`.

---

## Interactives

| ID     | Element                      | Phase | Status                                                                                                            |
| ------ | ---------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------- |
| int-01 | Trace-a-concern              | 1     | done (embedded in 01.3)                                                                                           |
| int-02 | Annotated budget entry       | 1     | not started                                                                                                       |
| int-03 | Budget cycle timeline        | 1     | not started — options in [`notes/budget-cycle-interactive-options.md`](notes/budget-cycle-interactive-options.md) |
| int-04 | School-building step-through | 1     | not started (reuse step-through pattern from int-01)                                                              |
| int-05 | Engagement plan builder      | 1     | not started                                                                                                       |
| int-06 | Money concept map            | 2     | not started                                                                                                       |
| int-07 | Diagnostic quiz              | 2     | not started                                                                                                       |
| int-08 | Proposal comparison          | 2     | not started                                                                                                       |
| int-09 | Capstone workbook            | 2     | not started                                                                                                       |
| int-10 | Budget balancer              | 3     | later                                                                                                             |
| int-11 | Municipal budget builder     | 3     | later                                                                                                             |
| int-12 | Guided document explorer     | 3     | later — blocked on sample document corpus                                                                         |

Phase 1 interactives must degrade to static content.

---

## Reference section

All components are specced in [`reference-section.md`](reference-section.md). App routes exist; bodies are placeholders.

| ID      | Component                   | Phase | Status                                                    |
| ------- | --------------------------- | ----- | --------------------------------------------------------- |
| ref-01  | Glossary                    | 1     | seed (terms used in authored lessons; grows with modules) |
| ref-02  | Document library            | 1     | not started                                               |
| ref-03  | Institutional map           | 1     | not started                                               |
| ref-04  | Budget calendar             | 1     | not started                                               |
| ref-05  | Classification reference    | 1     | not started                                               |
| ref-05b | Local budget structures     | 1     | not started                                               |
| ref-06  | Acronyms                    | 1     | seed (generated from glossary)                            |
| ref-07  | Legal and policy references | 1     | not started                                               |
| ref-07b | Sources and attribution     | 1     | not started                                               |
| ref-08  | Data-source directory       | 1     | not started                                               |
| ref-09  | FAQ                         | 1     | not started                                               |
| ref-10  | Search                      | 2     | later                                                     |

---

## Blocked / needs a named owner

| Item                               | Why it is blocked                                                                        |
| ---------------------------------- | ---------------------------------------------------------------------------------------- |
| SME reviewer for the accuracy gate | Name a person or commission a review before any module reaches `final` (`build_spec.md`) |
| Sample NEP/GAA corpus for int-12   | Which volumes, rights-cleared how                                                        |
| Capstone datasets                  | Authoring owner and figure-review process                                                |
| Module 01 → `review`               | Waiting on accuracy gate                                                                 |

---

## How to use this file

1. Pick the next slice from **Now** (one **lesson** of module content). Agents: see [`AGENTS.md`](../AGENTS.md).
2. Set it to `in progress` when work starts; `done` when it is on `main` (or merged from the agent PR).
3. Scope changes still go through `outline_for_web.md` first, then the module spec — this list only reflects that scope.
4. After finishing a module's lessons, bump the module spec status (`outline` → `content-draft`) and the row in this file together.
