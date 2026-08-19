# Style guide

How PH Budget 101 looks and reads. This describes **what we have built**, not a future redesign. When UI or lesson presentation changes, update this file in the same PR.

Related: [`notes/self_paced_lesson_format.md`](notes/self_paced_lesson_format.md) (sectioning and modes), [`build_spec.md`](build_spec.md) (tone, numbers, neutrality), [`ADRs.md`](ADRs.md) (why these choices).

---

## Product voice

* **Matter-of-fact.** Teach the PFM system. Advocacy is an application of literacy, not the frame.
* **Second person, plain English.** Adult general audience; no economics background assumed.
* **No named advocacy organizations, campaigns, or personalities** in learner-facing lessons. Name government institutions, laws, documents, and public programs. Attribution belongs on the sources reference page.
* **Label illustrative content** at first use: “Illustrative example. Details are simplified for clarity.”
* Expand acronyms at first use per module (NEP, GAA, BESF, …), then the acronym alone.

### Numbers and dates

* Philippine peso: `₱` with locale-aware grouping via `Intl.NumberFormat('en-PH')`. Never invent a ₱ webfont; system fonts already have the glyph.
* Write “₱69 billion” / “₱4.2 million”, not `PHP 69B`.
* Fiscal years: “FY 2023” or “the 2023 budget” — never “last year’s budget”.
* Year-specific figures never live in prose. Use `<Figure module="mod-NN" id="kebab-id" />` backed by `src/data/modules/NN.json` (`value`, `unit`, `asOf`, `source`).

---

## Layout

* **Reading measure:** `max-w-3xl` for header, main, and footer. One column. Do not widen lesson bodies to “use the desktop.”
* **Page padding:** `px-4 sm:px-6`, main `py-10`.
* **Sticky header** (`app-header`) with wordmark (₱ tile + “PH Budget 101”) and Home / Course / Reference / Settings.
* **Footer** (`app-footer`) is a one-line device-progress reminder; hide with `.no-print` chrome on print.

### Hierarchy (do not invent a fourth nav)

| Level | What it is |
| --- | --- |
| Module | Subject group |
| Lesson | One learning objective, one URL |
| Section / station | 4–6 steps inside the lesson (subway map) |

Cards, tabs, and quiz questions live **inside** a section. They are not another navigation level.

---

## Color and type

Tokens live in `src/styles/index.css` (`:root` / `@theme inline`). Use Tailwind semantic classes (`bg-background`, `text-muted-foreground`, `border-primary`) — not raw hex.

| Role | Typical class |
| --- | --- |
| Page | `bg-background text-foreground` |
| Surfaces | `bg-card`, `border`, `rounded-lg` |
| Brand / emphasis | `text-primary`, `bg-primary text-primary-foreground` |
| Quiet text | `text-muted-foreground` |
| Highlight / takeaway wash | `bg-accent/40`, takeaway left border `border-primary` |
| Danger (wrong pick) | `border-destructive`, `bg-destructive/10` |

**Type:** Geist Variable (`@fontsource-variable/geist`) with system-ui fallback. One family only (performance budget).

**Lesson prose:** wrap bodies in `lesson-prose prose prose-slate max-w-none`. Headings use `prose-headings:tracking-tight`; links `prose-a:text-primary`.

### `not-prose` (hard rule)

Any interactive, card, quiz, or subway map nested in a lesson **must** set `not-prose` on its root. Tailwind Typography otherwise restyles descendant `p` / `h3` / `ol` and breaks component layout. Precedent: `TraceConcern` leaked until this was added.

---

## Components

**Use shadcn/ui** from `src/components/ui/` (`Button`, `Card`, `Badge`, `Tabs`, `Input`, `Dialog`, `Separator`). Do not restyle variants ad hoc; compose with `className` for layout only (`w-full sm:w-auto`, flex wrappers).

**Buttons**

* Default = primary action (Continue, Mark complete).
* Outline = secondary (Previous).
* Ghost = tertiary (Reset, Mark reviewed).
* Pair Previous / Continue in **matching wrappers** so CSS grid does not stretch one and hug the other.
* Do not put full lesson titles inside a `Button`; use labeled nav **cards** in the lesson footer.

**Lesson-pattern slots**

| Slot | Component | Notes |
| --- | --- | --- |
| Figures | `Figure` | Always shows as-of + source unless `inline` |
| Knowledge check | `KnowledgeCheck` | One question at a time; `moduleId` + `lessonId` required |
| Takeaway | `KeyTakeaway` | Left-border accent card; the one thing to remember |
| Step-through | `TraceConcern` (int-01) | Label illustrative; `not-prose` |

**Knowledge checks**

* Immediate feedback; explain why the pick is wrong (`wrong` map) and why the right answer is right (`explanation`).
* Retry; after two misses, reveal the correct option.
* Advisory — never gates Continue.
* Persist misses to progress; recap is “Review your misses”, dismiss with Mark reviewed.
* Progress copy: “Question 2 of 3”, then first-try summary.

**Subway map** (`SubwayMap`)

* Desktop: horizontal dots + short labels.
* Mobile: compact current station; expands to a vertical list. Do not squeeze many labeled stations into a narrow horizontal row.
* Stations are never locked.

**Reading modes**

* Default **Guided** (one section, Previous / Continue, “Section N of M”).
* **Full lesson** is the same sections as a continuous page; map becomes a TOC with scroll-spy.
* Toggle sits beside the map, not inside it. Preference is `progress.readingMode`.
* No “choose your mode” modal on entry.

**Lesson footer**

1. Centered Mark lesson complete.
2. Two-column prev/next **cards** (full-width stack on mobile; Next stays in the right column on desktop).
3. **Course home** only when: no next lesson, lesson marked complete, **and** the learner is on the last guided station (full mode: footer after all sections counts as the end).

---

## Motion, print, bandwidth

* Transitions: color/opacity only; no decorative animation.
* `.no-print` on chrome, mode toggle, quiz controls, subway. Print CSS already hides `app-header` / `app-footer`.
* Interactives must work without hover as the only affordance.
* Lazy-load lesson chunks (already via glob registry). Keep reading routes lean; diagrams SVG-first.

---

## Authoring a lesson

```tsx
export default defineLesson({
  sections: [
    { id: 'start', title: '…', shortTitle: 'Start', type: 'introduction', content: … },
    { id: 'check', title: 'Check your understanding', shortTitle: 'Check', type: 'knowledge-check', content: <KnowledgeCheck moduleId="mod-01" lessonId="01.1" items={[…]} /> },
    { id: 'takeaway', title: 'Key takeaway', shortTitle: 'Takeaway', type: 'takeaway', content: <KeyTakeaway>…</KeyTakeaway> },
  ],
});
```

* About **four to six** sections per lesson. Sections are ideas, not paragraphs.
* `id` is kebab-case, unique in the lesson (anchor + station key).
* `shortTitle` is the subway label; keep it short.
* Types: `introduction` | `concept` | `example` | `interactive` | `knowledge-check` | `takeaway`.
* React remounts lesson bodies by `lesson.id` and guided sections by `section.id` so interactive state does not leak across navigation. Do not fight that with leftover global quiz state.

Canonical example: `src/content/modules/01-why-pfm-matters/01.1.tsx`.
