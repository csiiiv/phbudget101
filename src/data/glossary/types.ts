export interface GlossaryEntry {
  /** Kebab-case id; used as URL hash and <Term id>. */
  id: string;
  /** Full name, e.g. "Public Financial Management". */
  term: string;
  /** Official short form, if any. */
  acronym?: string;
  /** Hover text — one or two sentences. */
  short: string;
}
