import type { GlossaryEntry } from './types';
import type { Locale } from '@/lib/locale';
import { glossaryFilOverrides } from './locale/fil';

const files = import.meta.glob(['./*.ts', '!./index.ts', '!./types.ts'], {
  eager: true,
}) as Record<string, { entries?: GlossaryEntry[] }>;

/**
 * Course glossary, assembled from per-module files in src/data/glossary/.
 * Lesson PRs add a term by creating or editing their module's file only —
 * no shared-file edits, no cross-PR conflicts.
 */
export const glossary: GlossaryEntry[] = Object.values(files)
  .flatMap((mod) => mod.entries ?? [])
  .sort((a, b) => a.term.localeCompare(b.term));

const byId = new Map(glossary.map((e) => [e.id, e]));

function localized(entry: GlossaryEntry, locale: Locale): GlossaryEntry {
  if (locale === 'fil') {
    const override = glossaryFilOverrides[entry.id];
    if (override) return { ...entry, ...override };
  }
  return entry;
}

export function getTerm(id: string, locale: Locale = 'en'): GlossaryEntry | null {
  const base = byId.get(id) ?? null;
  if (!base) return null;
  return localized(base, locale);
}

/** Full glossary listing with locale display overrides applied. */
export function getGlossary(locale: Locale = 'en'): GlossaryEntry[] {
  return glossary.map((entry) => localized(entry, locale));
}

export function acronyms(locale: Locale = 'en'): GlossaryEntry[] {
  return getGlossary(locale)
    .filter((e) => e.acronym)
    .sort((a, b) => a.acronym!.localeCompare(b.acronym!));
}
