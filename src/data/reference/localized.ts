import type { Locale } from "@/lib/locale";
import {
  REFERENCE_VERIFIED_AS_OF,
  calendarRows,
  classifications,
  dataSources,
  documents,
  faqEntries,
  institutionGroups,
  institutions,
  legalEntries,
  localConstraints,
  localDocuments,
  localSequence,
  localTiming,
} from "./index";
import { referenceFil } from "./locale/fil";

function pick(override: string | undefined, base: string): string {
  return override ?? base;
}

function localizeLink(
  override: { label: string } | undefined,
  base: { label: string; href: string },
): { label: string; href: string } {
  return { ...base, label: pick(override?.label, base.label) };
}

export function getDocuments(locale: Locale) {
  if (locale !== "fil") return documents;
  return documents.map((doc) => {
    const o = referenceFil.documents[doc.id];
    if (!o) return doc;
    return {
      ...doc,
      ...o,
      phases: doc.phases.map(
        (phase) => referenceFil.documentPhases[phase] ?? phase,
      ),
      link: doc.link ? localizeLink(o.link, doc.link) : undefined,
    };
  });
}

export function getInstitutions(locale: Locale) {
  if (locale !== "fil") return institutions;
  return institutions.map((inst) => {
    const o = referenceFil.institutions[inst.id];
    if (!o) return inst;
    return {
      ...inst,
      ...o,
      link: inst.link ? localizeLink(o.link, inst.link) : undefined,
    };
  });
}

export function getInstitutionGroups(locale: Locale) {
  if (locale !== "fil") return institutionGroups;
  return institutionGroups.map((group) => ({
    ...group,
    title: pick(
      referenceFil.institutionGroups[group.id],
      group.title,
    ),
  }));
}

export function getCalendarRows(locale: Locale) {
  if (locale !== "fil") return calendarRows;
  return calendarRows.map((row) => ({
    ...row,
    ...(referenceFil.calendarRows[row.id] ?? {}),
  }));
}

export function getClassifications(locale: Locale) {
  if (locale !== "fil") return classifications;
  return classifications.map((block) => {
    const o = referenceFil.classifications[block.id];
    if (!o) return block;
    return {
      ...block,
      title: pick(o.title, block.title),
      summary: pick(o.summary, block.summary),
      example: o.example ?? block.example,
      levels: block.levels.map((level) => {
        const lo = o.levels[level.id];
        if (!lo) return level;
        return {
          ...level,
          label: pick(lo.label, level.label),
          meaning: pick(lo.meaning, level.meaning),
        };
      }),
    };
  });
}

export function getLocalSequence(locale: Locale) {
  if (locale !== "fil") return localSequence;
  return localSequence.map((step) => ({
    ...step,
    ...(referenceFil.localSequence[step.id] ?? {}),
  }));
}

export function getLocalDocuments(locale: Locale) {
  if (locale !== "fil") return localDocuments;
  return localDocuments.map((doc) => ({
    ...doc,
    ...(referenceFil.localDocuments[doc.id] ?? {}),
  }));
}

export function getLocalConstraints(locale: Locale) {
  if (locale !== "fil") return localConstraints;
  return localConstraints.map((c) => ({
    ...c,
    ...(referenceFil.localConstraints[c.id] ?? {}),
  }));
}

export function getLocalTiming(locale: Locale) {
  if (locale !== "fil") return localTiming;
  return localTiming.map((row) => ({
    ...row,
    ...(referenceFil.localTiming[row.id] ?? {}),
  }));
}

export function getLegalEntries(locale: Locale) {
  if (locale !== "fil") return legalEntries;
  return legalEntries.map((entry) => {
    const o = referenceFil.legalEntries[entry.id];
    if (!o) return entry;
    return {
      ...entry,
      ...o,
      link: localizeLink(o.link, entry.link),
    };
  });
}

export function getDataSources(locale: Locale) {
  if (locale !== "fil") return dataSources;
  return dataSources.map((source) => {
    const o = referenceFil.dataSources[source.id];
    if (!o) return source;
    return {
      ...source,
      ...o,
      group: pick(
        referenceFil.dataSourceGroups[source.group],
        source.group,
      ),
      link: localizeLink(o.link, source.link),
    };
  });
}

export function getFaqEntries(locale: Locale) {
  if (locale !== "fil") return faqEntries;
  return faqEntries.map((entry) => {
    const o = referenceFil.faqEntries[entry.id];
    if (!o) return entry;
    return {
      ...entry,
      ...o,
      links: entry.links?.map((link) => ({
        ...link,
        label: pick(o.linkLabels?.[link.label], link.label),
      })),
    };
  });
}

export const VERIFIED_AS_OF = REFERENCE_VERIFIED_AS_OF;
