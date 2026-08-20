# Agent instructions — PH Budget 101

Standing orders for Cloud Agents and local agents. Human source of truth for *what the course is*: [`docs/outline_for_web.md`](docs/outline_for_web.md). *How to build a slice*: this file + [`docs/tasklist.md`](docs/tasklist.md), [`docs/styleguide.md`](docs/styleguide.md), [`docs/ADRs.md`](docs/ADRs.md).

## What to work on

**Content first.** Until Modules 0–9 have authored lesson bodies, do not start new UI chrome, Phase 2–3 interactives, or search. Ship **prose + sections + knowledge checks + glossary terms**. If a spec names an interactive that is Phase 2 or 3, use the **static fallback** described in that module spec.

1. Read **Now** in [`docs/tasklist.md`](docs/tasklist.md).
2. If Now is empty, take the next unfinished **lesson** in the content table (00 → 02 → 03 … 09). Skip Module 01 unless fixing a defect — it is already `content-draft`.
3. **One lesson per run** (or one small module if every lesson is a stub of similar size). Stop when that lesson is done.

## Slice definition of done

- `export default defineLesson({ sections })` with about 4–6 stations ([`docs/notes/self_paced_lesson_format.md`](docs/notes/self_paced_lesson_format.md)).
- New jargon: add an entry to your module's file in [`src/data/glossary/`](src/data/glossary/) (create it if absent; course-wide terms go in `core.ts`), then wrap with `<Term />`. Never edit another module's glossary file.
- Year-specific pesos only via `<Figure />` + `src/data/modules/NN.json` (`asOf` + `source` required). Do **not invent** GAA amounts; omit the figure or label a teaching number illustrative.
- Neutrality: no advocacy organizations, campaigns, or personalities in lessons (ADR-008).
- Interactives: `not-prose` on the root.
- `npm run build:check` green.
- Update **Now** / the module row in the task list and the module spec status if the module is now a full draft.

## Git (unattended)

- Branch from `main`. Open a **pull request**. Do **not** merge, force-push, or skip hooks.
- PR body: what shipped, what you did not touch, checklist against this file.

## Do not

- Phase 2/3 interactives (int-06, int-07, int-10, int-11, int-12, capstone workbook).
- Accuracy-gate / marking a module `final`.
- Expanding scope beyond the one lesson.
- Pushing straight to `main` when running unattended.

## Prompt (Cloud Agent / scheduled run)

> Work only in this repo. Read `AGENTS.md` and `docs/tasklist.md`. Implement the **Now** slice — **one lesson of module content**. Static fallback if the interactive is Phase 2+. Update the task list. Run `npm run build:check`. Open a PR to `main`. Do not merge. Do not invent budget figures. Do not name advocacy organizations in lessons.
