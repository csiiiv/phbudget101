# PH Budget 101 — Build Spec

The overarching specification for the course build. The content outline (`outline_for_web.md`) defines *what* the course covers; this spec defines *how the build is organized*, and each module file in `docs/modules/` defines one module in authoring-ready detail.

## Document map

| File | Role | Status |
| --- | --- | --- |
| `AGENTS.md` | Standing orders for Cloud / local agents (content-first slices, PRs) | Current |
| `docs/outline_for_web.md` | Course-level content outline; source of truth for scope and sequence | Current |
| `docs/build_spec.md` | This file: architecture, conventions, registries | Current |
| `docs/tech_stack.md` | Tech stack, hosting, and content pipeline decision | Decided |
| `docs/tasklist.md` | Master list of done / in-progress / remaining work | Current |
| `docs/styleguide.md` | UI and lesson-presentation conventions as built | Current |
| `docs/ADRs.md` | Architecture decision records | Current |
| `docs/modules/NN-*.md` | Per-module specs (11 files, modules 0–10) | Draft |
| `docs/budget_natin_rough_layout.md` | Map of the source guidebook (reference only) | Frozen |
| `docs/reference-section.md` | Spec for the Supporting Reference Section (ref-01 to ref-10) | Current |
| `docs/notes/` | Working notes (lesson format, interactive options) | Current |
| `sources/*.pdf` | Source material | Frozen |

Rule: scope changes happen in the outline first, then propagate to the affected module spec. Module specs never introduce new scope.

## Course architecture

* **Spine:** Modules 0–10 in fixed order. Modules 1–9 each teach one stage of the arc: why budgets matter → where money comes from → how budgets are structured → how the cycle works → how funds become services → local budgets → how to read documents → how to evaluate decisions → how to participate. Module 10 integrates everything.
* **Learning paths** (chosen in Module 0, switchable anytime):
  * *Quick overview:* Modules 1, 3, 4, 5, plus the reference section.
  * *Full PH Budget 101:* Modules 0–10 in order.
  * *Topic-based reference:* free navigation; every lesson page is reachable and self-contained via the reference section.
* **Reference section:** separate area — glossary, document library, institutional map, budget calendar, classification reference, local budget structures, acronyms, legal references, sources and attribution, data-source directory, FAQ (full registry in `reference-section.md`). Lessons link into it; it never depends on lesson order.
* **Progression model:** linear default, but no hard gates except the capstone, which requires Modules 1–9 content availability (not completion scores).

## Module spec template

Every file in `docs/modules/` follows this structure. Sections are required unless marked optional; write `TBD` rather than deleting a section.

```markdown
# Module NN: <Title>

| Field | Value |
| --- | --- |
| ID | mod-NN |
| Slug | nn-kebab-case |
| Status | outline |
| Build phase | content phase, plus interactive phase if different (e.g., "1 (content); int-10 lands Phase 3") |
| Prerequisites | module IDs or "none" |
| Sourcing | strong / partial / new authoring |

## Purpose
One or two sentences.

## Learning objectives
"After this module, the learner can..." — 3–6 measurable objectives.

## Lessons
### NN.x <Lesson title>
* Guiding question: <the concrete public-service question that opens the lesson>
* Concepts: <bullet list>
* Interactive or visual: <element, or which lesson pattern slot it fills>
* Worked example: <public-fact example, anonymized guidebook case, or illustrative composite — per the neutrality rule, no named advocacy orgs or personalities; or "none">
* Activity and knowledge check: <one line each>

## Interactive element
Purpose, behavior, inputs/data needs, outputs, fallback if not built.

## Assessment
Module-level knowledge check plan.

## Worked examples used
Which examples appear here, their source (public fact, anonymized guidebook case, or illustrative composite), and why.

## Sourcing notes
Guidebook chapters/pages, external sources needed, and what requires new authoring.

## Open questions
Optional. Decisions needed before content authoring.
```

## Worked-example and method registry

Editorial neutrality rule (see content sourcing workflow): learner-facing content names no advocacy organizations, campaigns, or personalities. The guidebook's cases are reused as **methods and public facts**, generalized in presentation:

| Guidebook asset | Reused as | Appears in |
| --- | --- | --- |
| Community listening method (Ch. 1) | Six-step method; illustrative composite of a city health response | 09.2 |
| Local coalition health-response case (Ch. 1, anonymized) | End-to-end local participation example | 06.4 |
| Transport budget analysis: protected bike lanes vs car-lane widening (Ch. 5) | The policy analysis pyramid's worked examples — competing proposals for the same problem | 08.3, and int-08 dossiers |
| Avalanche/increment scanning method (Ch. 3) | Analysis technique with document examples | 07.4 |
| Completed Staff Work (Annex 3) | Proposal-packaging standard | 09.4 |
| Coalition anatomy: core group, secretariat, shared metrics (Annex 2) | Organizational model, presented generically | 09.5 |
| Sin Tax Reform Law revenue story | Public-fact example of revenue-side policy (law, rates, earmarked uses — no organization named) | 02.1 |
| Peso figures from budget campaigns (₱69B, ₱33B asks vs enacted outcomes) | Public record of civil-society engagement scale, attributed to "civil society coalitions" collectively | 09.1 |

When authoring, verify each fact against primary sources (GAA volumes, agency records) rather than the guidebook alone.

## Conventions

* **IDs and files:** modules are `mod-00` to `mod-10`; files are `docs/modules/NN-slug.md`. Lessons are `NN.x`. Reference components are `ref-01` to `ref-10` (see `reference-section.md`). IDs are permanent; never renumber.
* **Statuses:** `outline` (spec drafted from outline) → `spec-complete` (approved for authoring) → `content-draft` → `review` → `final`. `review` requires the accuracy gate below; `final` requires its sign-off.
* **Accuracy gate (review step):** before any content reaches `final`, a second reviewer verifies every peso figure, date, and legal claim against a primary source (GAA volume, official circular, law text) — not the guidebook alone — and checks neutrality compliance (no named organizations or personalities in lessons, attribution confined to ref-07b). Reviewer identity is a person, not a role placeholder; at least one reviewer must be a PFM subject-matter expert or the review must be externally commissioned. For MVP, one named SME reviewer is assumed; substitute a commissioned review if unavailable.
* **Lesson pattern:** every authored lesson follows the 8-part pattern from the outline (question → concept → visual/interactive → case → activity → check → takeaway → deeper reading). Module specs capture the first six slots; takeaway and deeper reading are authored at content time. The "case" slot is filled by a worked example per the neutrality rule.
* **Terminology:** every technical term is defined at first use and linked to the glossary entry. The glossary is the single source of truth for definitions; module specs reference, never redefine.
* **Numbers and currency:** Philippine peso formatted as ₱ with thousands separators; amounts in billions/millions written as "₱69 billion" or "₱4.2 million". Use locale-aware formatting in code from day one (localization requirement).
* **Fiscal years:** written as "FY 2023" or "the 2023 budget" — never ambiguous shorthands like "last year's budget".
* **Time estimates:** each lesson carries a reading-time estimate at authoring (guideline: 8–15 minutes per lesson; worked-example and interactive lessons up to 25). Modules display total estimated time; Module 0's "what this course covers" presents the full-course estimate (~10–12 hours) and quick-path estimate (~2–3 hours). Estimates are metadata, not narrative content, so they can be recomputed when lessons change.
* **Tone:** plain-language English, second person, no idioms that resist translation (localization requirement). Reading level: general adult audience, no economics background assumed.
* **Acronyms:** expanded at first use per module (NEP, GAA, BESF, NTA, CSW, etc.), then the acronym alone. The acronyms reference page mirrors all of them.
* **Illustrative content:** composites and simplified replicas are permitted for teaching mechanics but must be labeled as illustrative (e.g., "Illustrative example. Amounts are simplified for clarity.") at first use, and must never present invented figures as public record.
* **Mobile and low-bandwidth:** the primary audience is general public, predominantly mobile. Mobile-first layouts; interactive fallbacks must work over slow connections; no interactive may assume a desktop pointer (hover) as the only affordance. Images and interactive data must be lazy-loadable and small.

## Swappable-data requirement

Facts specific to a budget year (amounts, shares, dates tied to a fiscal year) are structured as swappable data, not hard-coded prose, so they can be updated without rewriting lessons. Representation is deferred to the tech-stack decision, but every module spec must flag which figures are year-specific (module specs already do this via "dated and swappable" sourcing notes). At content phase, year-specific figures live in one designated data location per module — never inline in lesson prose — so a fiscal-year refresh touches only data files.

## Content sourcing workflow

1. Author from the guidebook where coverage is strong (see sourcing notes in the outline).
2. Where the outline flags new authoring, source from official primers and published data: DBM, DOF, NEDA, DBCC, COA, BTr, PSA. Every figure carries a source citation; the reference section's data-source directory collects them.
3. **Editorial neutrality (hard rule):** learner-facing content names no advocacy organizations, coalitions, campaigns, fellowships, or personalities *as subjects of endorsement or critique*. Named entities are government institutions, laws, documents, and public programs — plus civil-society actors under the **factual-event exception** (ADR-008, amended 2026-08): when an actor is part of the verifiable public record of a budget event (a documented proposal, published ask, or filed petition), the lesson may name them as a factual detail, described neutrally, with no implied endorsement and no lesson about their virtue or merit. Where the guidebook teaches through a named campaign or individual without such public record, reuse the *method* and the *publicly verifiable facts*, anonymized or generalized ("a transport coalition" is not allowed either — use "civil society advocacy" or an illustrative composite). Attribution and full citations live in the reference section's sources page.
4. Facts specific to a budget year (amounts, shares) are dated in-text ("in the 2022 budget") and structured as swappable data, not hard-coded prose, so they can be updated.

## Interactive elements registry

| ID | Module | Element | Phase | Shared component |
| --- | --- | --- | --- | --- |
| int-01 | 1 | Trace-a-concern click-through | 1 | Step-through wizard |
| int-02 | 3 | Annotated budget entry (hotspots) | 1 | Hotspot annotator |
| int-03 | 4 | Budget cycle timeline | 1 | Labeled timeline |
| int-04 | 5 | School-building project step-through | 1 | Step-through wizard |
| int-05 | 9 | Engagement plan builder | 1 | Form → downloadable output |
| int-06 | 0 | Money concept map | 2 | Concept map |
| int-07 | 0 | Diagnostic quiz | 2 | Quiz engine |
| int-08 | 8 | Proposal comparison exercise | 2 | Side-by-side comparator |
| int-09 | 10 | Capstone investigation workbook | 2 | Multi-step form + brief generator |
| int-10 | 2 | Budget balancer simulation | 3 | Simulation |
| int-11 | 6 | Municipal budget builder | 3 | Simulation |
| int-12 | 7 | Guided document explorer | 3 | Document viewer (needs corpus) |

Phase definitions and rationale live in the outline (`Interactive elements: build phases`). Phase 1 interactives must degrade gracefully to static content so the course is complete without Phases 2–3.

## Module registry

| ID | Title | File | Content phase | Status |
| --- | --- | --- | --- | --- |
| mod-00 | Start Here | `modules/00-start-here.md` | 1 (welcome lesson); 2 (diagnostic and concept map) | outline |
| mod-01 | Why Public Financial Management Matters | `modules/01-why-pfm-matters.md` | 1 | content-draft |
| mod-02 | The Government's Money | `modules/02-the-governments-money.md` | 1 | outline |
| mod-03 | Anatomy of the Philippine Budget | `modules/03-anatomy-of-the-budget.md` | 1 | outline |
| mod-04 | The Philippine Budget Cycle | `modules/04-the-budget-cycle.md` | 1 | outline |
| mod-05 | From Appropriation to Public Service | `modules/05-from-appropriation-to-public-service.md` | 1 | outline |
| mod-06 | Understanding Local Government Budgets | `modules/06-local-government-budgets.md` | 1 | outline |
| mod-07 | How to Read Budget Documents and Data | `modules/07-reading-budget-documents.md` | 1 | outline |
| mod-08 | Evaluating Budget Decisions | `modules/08-evaluating-budget-decisions.md` | 1 | outline |
| mod-09 | Participating in the Budget Process | `modules/09-participating-in-the-budget-process.md` | 1 | outline |
| mod-10 | Capstone: Follow the Money | `modules/10-capstone-follow-the-money.md` | 2 | outline |

All course content (every module, static visuals, and interactive fallbacks) ships in Phase 1, except the capstone (Phase 2, since it presumes the full course). Phases otherwise apply only to interactive upgrades — see the interactive elements registry. Each module's interactive phase is listed there, not here.

## Reference-component registry

Detailed specs in `reference-section.md`. Phase 1 = static pages; Phase 2 adds search.

| ID | Component | Phase | Status |
| --- | --- | --- | --- |
| ref-01 | Glossary | 1 | outline |
| ref-02 | Budget document library | 1 | outline |
| ref-03 | Institutional map | 1 | outline |
| ref-04 | Budget calendar | 1 | outline |
| ref-05 | Classification reference | 1 | outline |
| ref-05b | Local government budget structures | 1 | outline |
| ref-06 | Acronyms | 1 | outline |
| ref-07 | Legal and policy references | 1 | outline |
| ref-07b | Sources and attribution | 1 | outline |
| ref-08 | Data-source directory | 1 | outline |
| ref-09 | FAQ | 1 | outline |
| ref-10 | Search | 2 | outline |

## Open decisions

* Tech stack, hosting, and content pipeline — **decided in `tech_stack.md`**: fully static React SPA (Vite + Tailwind + shadcn/ui), MDX content in repo, GitHub Pages hosting, git-based pipeline; progress in localStorage with export/import file transfer; swappable data as per-module JSON validated in CI.
* Progress tracking: anonymous local progress vs accounts. Assume local-only for MVP.
* Sample document corpus for int-12: which NEP/GAA volumes, and how rights-cleared.
* Capstone datasets (per-sector curated data for mod-10): authoring owner and review process for figures.
* SME reviewer for the accuracy gate: name the person or commission the review before first content reaches `final`.
