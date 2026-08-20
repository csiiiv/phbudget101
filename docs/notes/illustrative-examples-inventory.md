# Illustrative-examples inventory

## Purpose

Every learner-facing section built on an **illustrative example** — a labeled teaching composite rather than a real, sourced event — as of 2026-08-20. These are the natural candidates for upgrading to actual real-world examples as sourcing capacity grows: the label "illustrative" almost always means "we taught the pattern here; a documented public record could teach it better."

Companion to [`static-sections-inventory.md`](static-sections-inventory.md) (sections awaiting interactives). The two lists overlap — several sections are both a static interactive fallback *and* an illustrative example.

How this list was built: full-text search for "illustrative" in `src/content/modules/`, then each match attributed to its enclosing `defineLesson` section. Body text that merely *instructs* learners to label estimates as illustrative (09.4 `proposal`) or uses the word inside a knowledge-check explanation (09.4 `example-and-check`) is excluded.

## Summary

- **20 sections** across 18 lessons (Modules 02–09) carry illustrative examples.
- **11** are pure teaching composites with no real-world referent (units, replicas, simplified stories).
- **4** adapt the guidebook's real policy analyses but are framed as illustrative in the lesson.
- **5** are illustrative teaching numbers or index tables inside otherwise conceptual sections.

## Pure teaching composites (strongest real-world upgrade candidates)

Invented scenarios kept deliberately generic — no peso amounts, no named agencies, no calendar claims.

| Lesson | Section `id` | Section title | The illustrative device |
| --- | --- | --- | --- |
| 02.3 | `static-balancer` | Static activity: choose within the limit | 100-unit revenue forecast, 25-unit fiscal space, three proposals costing 37 — "simplified resource units, not pesos or public records." A real revenue forecast (BIR/DBCC published data) could ground it. |
| 03.2 | `drill-down` | A simplified agency drill-down | Fictional agency → program → work-item hierarchy. |
| 03.3 | `annotated-entry` | Read a labeled budget entry | "Illustrative Public Health Office" replica GAA/NEP entry; spec's fallback for int-02. A rights-cleared real excerpt (blocked on the int-12 corpus decision) would replace it. |
| 03.4 | `pipeline` | Follow authority through the pipeline | Five-stage authority-to-record chain, no amounts. |
| 05.1 | `school-storyboard` | Static storyboard: follow a school building | Illustrative composite school-building project; spec's fallback for int-04. Spec already authorizes "static, illustrative figures with a realistic timeline." |
| 05.2 | `milestone-strip` | Static milestone strip: the school-building procurement | Extends the same composite through procurement. |
| 05.3 | `contrast` | Static contrast: two utilization stories | High-utilization/weak-evidence vs low-utilization/legitimate-reason panels. Spec's open question names the COVID-era extended-validity years as a documented candidate. |
| 06.1 | `illustrative-mix` | A local purse is a mix | Teaching composition of an LGU revenue mix. A real municipality's published budget could ground it (spec open question: which one). |
| 06.4 | `health-response` | Illustrative case: from listening to monitoring | Composite participation sequence; reprised in 09.2. |
| 07.2 | `annotated-excerpt` | Static practice: trace every marker | "Illustrative agency schedule" replica table; also an int-02/int-12 fallback. |
| 09.4 | `example-and-check` | Test a sectoral proposal | Illustrative composite of a sectoral proposal routed to officials — deliberately no peso amount until a sourced costing exists. |

## Guidebook-derived illustrative analyses

Real policy options from the source guidebook's completed analyses, taught under an illustrative frame.

| Lesson | Section `id` | Section title | Note |
| --- | --- | --- | --- |
| 08.3 | `transport-screen` | Four proposals through the screen | The guidebook's real three-gate analyses (bike lanes, car-lane widening, number coding, elevated expressways) — the strongest neutrality-compliant worked examples in the source. Already real-world policy content; only the framing label is illustrative. |
| 08.5 | `static-worksheet` | Static worksheet: two mobility proposals | Bike-lanes vs car-lane-widening pair from the guidebook; also the int-08 fallback. Upgrading means building the comparator, not new sourcing. |
| 08.1 | `weak-link` | Locate the weak link before judging | Illustrative mobile-clinic chain (need → policy → allocation → implementation → outcome). A documented program evaluation could ground it. |
| 09.2 | `health-example` | A city health-emergency listening exercise | Illustrative composite of the listening method. |

## Illustrative numbers and index tables inside conceptual sections

| Lesson | Section `id` | Section title | The illustrative device |
| --- | --- | --- | --- |
| 05.3 | `start` | An agency spent 95%—did it perform well? | "Illustrative teaching number" — the 95% utilization hook. A real agency's published utilization rate could replace it. |
| 07.3 | `static-toggle` | Static view: the toggle you should imagine | Nominal/real comparison on an illustrative index (110 ÷ 110 × 100 = 100). A real series needs PSA CPI data per the spec. |
| 07.4 | `static-scan` | Static avalanche-spotting exercise | "Illustrative transport line" two-year comparison table; the method is real but the table is a replica. The real transport year-series is public record per the spec. |
| 08.1 | `start` | The same rate, different results | "Illustrative comparison" of two agencies at 90%. |
| 08.2 | `results-criteria` | Is the response enough, economical, and successful? | Illustrative one-line examples under the first three criteria. |

## Real examples already in the course (the pattern to follow)

| Lesson | Section | What makes it real |
| --- | --- | --- |
| 02.1 | `sin-tax-example` | Republic Act No. 10351 (2012) — the law, its 80/20 earmark split, and a source link to lawphil.net. Public record, no invented amounts. |
| 04.1 | `proposal-example` | Move As One coalition's 2022 budget ask vs the enacted service-contracting amount, both via `<Figure />` from `src/data/modules/04.json` with `asOf` + `source`. Named proponent under the factual-event exception (ADR-008). |

09.1's `transport-example` section continues the same Move As One thread per its module spec; 06.3's Mandanas ruling content is likewise public record.

## Rules for upgrading an illustrative section to a real example

1. **Sourcing.** Year-specific pesos only via `<Figure />` + `src/data/modules/NN.json` (`asOf` + `source` required). No invented GAA amounts; if no verified figure exists, keep the composite.
2. **Neutrality (ADR-008).** Real examples may name proponents only under the factual-event exception, described neutrally — no advocacy framing.
3. **Accuracy gate.** Module content is `content-draft`; substantive example swaps should ride the pending accuracy pass or follow its verification standard (task list **Now**).
4. **Scope.** Upgrading an example is a content change to one lesson — one lesson per PR per `AGENTS.md`; update the module spec's "Worked examples used" if the referent changes.
5. **Labeling.** If a real example replaces a composite, remove the "Illustrative example. Details are simplified…" label; if it replaces a static-fallback section, also update [`static-sections-inventory.md`](static-sections-inventory.md).
