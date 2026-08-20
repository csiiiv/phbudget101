# Static sections inventory

## Purpose

Every learner-facing section whose body copy self-describes as "static", as of 2026-08-20. Most of these are deliberate **fallbacks for registry interactives** that have not been built yet (or await a scope decision, such as the int-12 document corpus); a few are **static by design** per their module spec. The user-facing intuition is correct: "static" in these pages almost always means "an interactive is planned here, but its specifics are not settled."

Use this list when an interactive ships, so the fallback copy ("Static fallback for…", "replaces the Phase 3…") is updated or removed together with the widget. Lesson sections live in `src/content/modules/<module-slug>/<lesson-id>.tsx`.

Companion: [`illustrative-examples-inventory.md`](illustrative-examples-inventory.md) — sections built on labeled illustrative composites, candidates for real-world sourced examples. Several sections appear on both lists.

How this list was built: full-text search for "static" in `src/content/modules/`, then each match attributed to its enclosing `defineLesson` section.

## Summary

- **24 sections** across Modules 00–09 self-label as static.
- **15 sections** are fallbacks for **8 named registry interactives** (int-02, int-03, int-04, int-05, int-06, int-08, int-10, int-12).
- **9 sections** implement specced visuals that have no registry ID — some static by design, others with an unspecified future enhancement.
- Per the task list, Phase 1 interactives must degrade to static content; these are those degradation paths.

## Sections awaiting a named interactive

### int-03 Budget cycle timeline (Phase 1, not started — options in `notes/budget-cycle-interactive-options.md`)

The largest cluster: five sections render the static phase-by-phase fallback for the shared timeline.

| Lesson | Section `id` | Section title | What the lesson says |
| --- | --- | --- | --- |
| 04.1 | `cycle-position` | Preparation starts the four-phase cycle | "Static fallback for the shared budget-cycle timeline." |
| 04.2 | `legislation-route` | The legislation route | "Static fallback for the legislation portion of the shared budget-cycle timeline." |
| 04.3 | `execution-route` | The execution route | "Static fallback for the execution portion of the budget-cycle timeline." |
| 04.4 | `accountability-loop` | The accountability loop | "Static fallback for the accountability portion of the budget-cycle timeline." |
| 09.3 | `mapping-grid` | Static institution-mapping grid | Spec places this grid "on the int-03 mini-widget"; currently a static grid. |

### int-02 Annotated budget entry (Phase 1, not started)

| Lesson | Section `id` | Section title | What the lesson says |
| --- | --- | --- | --- |
| 03.3 | `annotated-entry` | Read a labeled budget entry | "This static diagram is not a facsimile…" — the spec's fallback ("fully labeled static diagram of the same entry") for the hotspot annotator. |
| 07.2 | `annotated-excerpt` | Static practice: trace every marker | Spec: "annotated table excerpt (reuses int-02 hotspot component)". |

### int-04 School-building step-through (Phase 1, not started)

| Lesson | Section `id` | Section title | What the lesson says |
| --- | --- | --- | --- |
| 05.1 | `school-storyboard` | Static storyboard: follow a school building | "This is the static fallback for the school-building step-through." |
| 05.2 | `milestone-strip` | Static milestone strip: the school-building procurement | "This static strip extends the school-building storyboard." — spec ties the milestone strip to the int-04 storyline. |

### int-05 Engagement plan builder (Phase 1, not started)

| Lesson | Section `id` | Section title | What the lesson says |
| --- | --- | --- | --- |
| 09.4 | `worksheet` | Build a one-page engagement plan | "This static worksheet is the fallback for the engagement plan builder." |

### int-06 Money concept map (Phase 2, not started)

| Lesson | Section `id` | Section title | What the lesson says |
| --- | --- | --- | --- |
| 00.2 | `headline-flow` | The whole course in one flow | "Static course map. The interactive concept map is planned for a later phase." |

### int-08 Proposal comparison (Phase 2, not started)

| Lesson | Section `id` | Section title | What the lesson says |
| --- | --- | --- | --- |
| 08.5 | `static-worksheet` | Static worksheet: two mobility proposals | "…the static fallback for the Phase 2 proposal comparator. It contains no scoring behavior, saved response, evidence dossier, or model-answer reveal." |

### int-10 Budget balancer (Phase 3, later)

| Lesson | Section `id` | Section title | What the lesson says |
| --- | --- | --- | --- |
| 02.3 | `static-balancer` | Static activity: choose within the limit | Worksheet activity designed as int-10's fallback ("the 02.3 worksheet activity plus static before/after charts"). |

### int-12 Guided document explorer (Phase 3, blocked on sample-document corpus)

| Lesson | Section `id` | Section title | What the lesson says |
| --- | --- | --- | --- |
| 07.1 | `decision-tree` | Static document selector | "This static selector replaces the Phase 3 guided document explorer." |
| 07.4 | `static-scan` | Static avalanche-spotting exercise | Static two-year comparison table; also named in the spec as an int-12 fallback alongside 07.2. |

## Sections with specced visuals but no registry ID

These label themselves static, but the module spec does not attach an interactive ID. Treat the first three as static by design until a spec changes.

| Lesson | Section `id` | Section title | Spec / lesson note |
| --- | --- | --- | --- |
| 02.1 | `revenue-mix` | Taxes carry most of the national purse | Spec: "revenue composition bar/stacked chart (**static, dated figures**)" — static by design; figures swap via `src/data/modules/02.json`. |
| 07.3 | `static-toggle` | Static view: the toggle you should imagine | Spec: "nominal-vs-real toggle chart… data static and dated." The interactive toggle is proposed but unnumbered; the section shows the index-only view. |
| 08.4 | `static-sort` | Static exercise: sort the claim before judging it | Lesson: "This static sort is the appropriate Phase 1 treatment." Spec's sorting exercise is unnumbered; no upgrade is promised. |
| 05.3 | `contrast` | Static contrast: two utilization stories | Spec: "two-panel contrast card" — no ID assigned. |
| 08.1 | `evaluation-chain` | Follow the whole evaluation chain | "Static evaluation-chain diagram." Spec: "evaluation chain diagram" — no ID assigned. |
| 08.3 | `three-gates` | The three-question screen | "Static three-gate visual." Spec: "three-gate visual" — no ID assigned. |
| 09.1 | `cycle` | A door in every phase | "This is a static engagement-outcomes strip: it remains usable when enhanced interactive features are unavailable." Spec: "engagement-outcomes timeline strip" — no ID assigned. |
| 09.2 | `six-steps` | The six-step listening method | "Use this sequence as a static planning guide." Spec: "six-step listening method card sequence" — no ID assigned. |
| 09.5 | `anatomy` | Anatomy of a working coalition | "This static diagram shows six connected functions." Spec: "coalition anatomy diagram" — no ID assigned. |

## Not included

- `src/pages/AboutPage.tsx` says "The site is a static app" — that means no backend or accounts, not a pending interactive.
- Module spec and task-list mentions of static fallbacks (e.g. `docs/modules/*.md`, `docs/tasklist.md`) — this inventory covers learner-facing section copy only.

## Notes for upgrade work

1. When an interactive ships, update the fallback sentence in the same PR — several sections promise a replacement ("planned for a later phase", "replaces the Phase 3 guided document explorer").
2. int-03's fallback spans five sections across two modules (04.1–04.4 and the 09.3 mini-widget); its options note remains open.
3. int-12 is blocked on the sample NEP/GAA corpus decision (see the task list's blocked items) — 07.1, 07.2, and 07.4 all serve as its fallback surface.
4. 02.1 and 07.3 carry dated, swappable figure data; their charts stay static by design, so "upgrading" them means refreshing figures, not adding widgets.
5. If any unnumbered visual above should become interactive, add it to the registry in `docs/tasklist.md` via `docs/outline_for_web.md` and the module spec first — this file only reflects current scope.
