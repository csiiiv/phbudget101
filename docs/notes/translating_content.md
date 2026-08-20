# Quick guide: translating content

How to add or extend translations in PH Budget 101. The app supports **`en`** (default) and **`fil`** (Filipino). Routes and lesson IDs stay in English; locale changes display text only.

Related: [`styleguide.md`](../styleguide.md) (voice and numbers), [`self_paced_lesson_format.md`](self_paced_lesson_format.md) (lesson structure), Module 00 peer files under `src/content/modules/00-start-here/` (reference implementation).

---

## Three tiers — translate in this order

| Tier                             | What                                              | Where                                                           |
| -------------------------------- | ------------------------------------------------- | --------------------------------------------------------------- |
| **A — UI / chrome**              | Nav, settings, buttons, shared component labels   | `src/i18n/en/ui.ts` and `src/i18n/fil/ui.ts`                    |
| **B — Course metadata**          | Module title, purpose, lesson titles              | `src/i18n/fil/course.ts` (overlay on `src/data/course.ts`)      |
| **C — Lesson bodies & glossary** | Section prose, knowledge checks, term definitions | `<lesson-id>.fil.tsx` peers + `src/data/glossary/locale/fil.ts` |

Tier A is usually done once. Each new translated module adds Tier B entries for that module and Tier C peer files for its lessons.

---

## Tier A: shared UI strings

1. Add or edit the English string in `src/i18n/en/ui.ts`.
2. Add the matching key in `src/i18n/fil/ui.ts`.
3. Use `useT()` in components — do not hardcode new chrome copy in pages.

`npm run validate:data` runs `scripts/validate-locale.ts`, which fails if `en` and `fil` UI dictionaries drift (missing or extra keys).

---

## Tier B: module and lesson titles

English metadata lives in `src/data/course.ts` (stable IDs and slugs). Filipino labels are overlays:

```ts
// src/i18n/fil/course.ts
export const courseFil = {
  modules: {
    "mod-00": {
      title: "…",
      purpose: "…",
      lessons: {
        "00.1": "…",
        "00.2": "…",
        "00.3": "…",
      },
    },
  },
};
```

`getCourseModules(locale)` in `src/data/localizedCourse.ts` merges this onto the English structure. Modules without an entry keep English titles.

When you translate a new module, add a `mod-NN` block with every lesson id in that module.

---

## Tier C: lesson bodies

### File naming

Keep the English file as the default. Add a locale peer beside it:

```
src/content/modules/<slug>/
  01.1.tsx       ← English (default)
  01.1.fil.tsx   ← Filipino
```

The registry resolves `(moduleSlug, lessonId, locale)` with fallback **`fil` → `en`**. If `01.1.fil.tsx` is missing, learners still see the English lesson.

### Authoring steps

1. Copy the English lesson file to `<lesson-id>.fil.tsx`.
2. Translate learner-facing strings only:
   - section `title`, `shortTitle`
   - prose, headings, list items
   - `KnowledgeCheck` prompts, options, explanations, and `wrong` feedback
   - `CourseworkChooser` option `label` and `description` props
3. Leave unchanged:
   - section `id` values (routing, hashes, progress)
   - `moduleId`, `lessonId` on knowledge checks
   - internal `Link` `to` paths (English slugs)
   - `<Term id="…" />` ids and `<Figure module="…" id="…" />` keys
4. Keep the same section count and structure as the English file unless the spec explicitly changes.

### JSX spacing

When `<Term />` or other inline elements split across lines, add `{' '}` where JSX would otherwise glue words. `validate:data` checks this.

### Reference

Module 00 is the pilot: compare `00.1.tsx` / `00.1.fil.tsx` (and `.2`, `.3`) side by side.

---

## Glossary

Term **ids** and URLs stay English. Filipino **display text** goes in overrides:

```ts
// src/data/glossary/locale/fil.ts
export const glossaryFilOverrides = {
  pfm: {
    term: "…",
    acronym: "PFM", // keep if the acronym is still used in Filipino UI
    short: "…",
  },
};
```

Add an override when a term’s first-use or tooltip text should read differently in Filipino. `<Term />` picks this up via `getTerm(id, locale)` — no changes inside lesson files for terms that only differ in the glossary.

Do not edit another module’s glossary source file for a translation pass; use `locale/fil.ts` for cross-cutting overrides or the module’s own glossary file if the term is module-specific.

---

## Figures and numbers

- Year-specific amounts stay in `src/data/modules/NN.json` — never translate or invent figures in lesson prose.
- `<Figure />` uses locale-aware formatting from `formatFigureValue(fig, locale)` (`Intl` + unit labels like “billion” / “bilyon”).
- Fiscal years and source attribution stay as recorded in the data file.

---

## Routes and progress

- URLs do not include locale: `/modules/00-start-here/lessons/00.1` works for both languages.
- Locale is stored separately (`phbudget101:locale` in localStorage), not inside the progress export file.
- Completion and progress keys use module/lesson ids, not language — switching language does not reset progress.

---

## Validation checklist

Before opening a PR for a translated module:

- [ ] Every new UI key exists in both `src/i18n/en/ui.ts` and `src/i18n/fil/ui.ts`
- [ ] `src/i18n/fil/course.ts` has a full `mod-NN` block (title, purpose, all lesson titles)
- [ ] Each translated lesson has a `.fil.tsx` peer
- [ ] New glossary overrides added to `src/data/glossary/locale/fil.ts` where needed
- [ ] `npm run build:check` passes (includes `validate-locale.ts`)

When expanding Filipino coverage in CI, update `FILIPINO_COVERAGE` in `scripts/validate-locale.ts`. List every translated module's metadata titles and only the lesson-body peer files that currently exist.

---

## Voice reminders (Filipino)

Same editorial rules as English — see [`build_spec.md`](../build_spec.md) and ADR-008:

- Matter-of-fact; teach the system, do not advocate.
- No named advocacy organizations, campaigns, or personalities in learner-facing copy (factual-event exception applies where documented).
- Plain language; avoid idioms that do not carry over.
- Do not invent peso amounts; use `<Figure />` or omit.

Filipino lessons may use **Filipino** or **English terms** where that is normal for budget literacy in the Philippines (for example, “budget,” “module,” and “appropriation”). Translate based on context, not word by word. Keep an English term when its Filipino translation would sound forced, uncommon, or change the intended meaning. For example, use **“Reference”** for the app's reference section; **“sanggunian”** can mean a government council and is not interchangeable in that context. Stay consistent within a module.

---

## Suggested rollout per module

1. Metadata in `src/i18n/fil/course.ts`
2. Lesson peer files, one lesson per PR if large
3. Glossary overrides for terms first introduced in that module
4. Smoke-test: Settings → Filipino → module page → each lesson → knowledge checks → term tooltips
5. Bump module/tasklist status only when the full module draft exists in both languages (or document partial coverage)

---

## Reusable prompt: casual Filipino localization

Use this prompt for a Filipino lesson pass. It is a localization prompt, not a word-for-word translation prompt:

> Translate the learner-facing copy in this PH Budget 101 lesson from English to natural, conversational Filipino for a general Philippine audience. Preserve the lesson's meaning, neutral tone, structure, section IDs, component props that are not display copy, URLs, term IDs, figure keys, facts, figures, and legal references. Keep familiar English words when they are more natural or clearer in everyday Philippine use (for example: **budget**, **module**, **overview**, **self-check**, **feedback**, **program**, and **service delivery**). Prefer simple Filipino phrasing such as “alamin,” “tingnan,” “piliin,” and “gamitin” over formal or uncommon alternatives. Do not force deep Filipino, translate technical terms only when the Filipino is widely understood, and do not add facts, examples, advocacy, or amounts. Read the result aloud in your head: it should sound like a clear instructor speaking to a learner, not a government circular or machine translation. Keep terminology consistent within the lesson and retain JSX spacing around inline components.

Editorial choices:

- Prefer **“pera ng gobyerno”** or **“public money”** when clearer than a formal equivalent; use **“pampublikong budget”** when the formal term helps precision.
- Keep words such as **budget**, **module**, **overview**, **self-check**, and **program** in English when that makes the sentence easier to read.
- Use ordinary verb forms: **“tingnan”** rather than **“suriin”** when the learner is simply being asked to look; reserve technical language for a genuinely technical distinction.
- Aim for a warm, direct second-person voice: **“Makikita mo…”**, **“Piliin mo…”**, **“Pwede kang…”**.
