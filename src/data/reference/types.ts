/** Shared shapes for Phase 1 reference pages. */

export interface ReferenceLink {
  label: string;
  href: string;
}

export interface DocumentEntry {
  id: string;
  name: string;
  acronym?: string;
  phases: string[];
  answers: string;
  contents: string;
  where: string;
  link?: ReferenceLink;
  note?: string;
}

export interface InstitutionEntry {
  id: string;
  name: string;
  acronym?: string;
  group: "executive" | "legislative" | "oversight" | "local" | "other";
  role: string;
  produces: string;
  link?: ReferenceLink;
}

export interface CalendarRow {
  id: string;
  period: string;
  national: string;
  local: string;
  note?: string;
  /**
   * Inclusive month range this stage covers (1–12), used to mark the current
   * point in the cycle. Omitted for cross-cutting rows that run all year.
   */
  months?: [number, number];
}

export interface ClassificationBlock {
  id: string;
  title: string;
  summary: string;
  levels: { id: string; label: string; meaning: string }[];
  example?: string;
}

export interface LocalConstraint {
  id: string;
  topic: string;
  rule: string;
  basis: string;
}

export interface LocalSequenceStep {
  id: string;
  step: string;
  detail: string;
}

export interface LocalDocumentEntry {
  id: string;
  name: string;
  role: string;
}

export interface LocalTimingRow {
  id: string;
  milestone: string;
  when: string;
}

export interface LegalEntry {
  id: string;
  name: string;
  governs: string;
  relevant: string;
  link: ReferenceLink;
}

export interface DataSourceEntry {
  id: string;
  name: string;
  group: string;
  contains: string;
  cadence: string;
  caution?: string;
  link: ReferenceLink;
}

export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
  links?: { label: string; to: string }[];
}

/** Shared verification stamp for time-sensitive reference tables. */
export const REFERENCE_VERIFIED_AS_OF = "2026-08";
