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

/**
 * Course glossary. Single source of truth for hover text and the glossary
 * reference page. Add a term here before wrapping it with <Term /> in a lesson.
 */
export const glossary: GlossaryEntry[] = [
  {
    id: 'pfm',
    term: 'Public Financial Management',
    acronym: 'PFM',
    short:
      'The system by which government plans, directs, and controls public money to deliver public services.',
  },
  {
    id: 'appropriation',
    term: 'Appropriation',
    short:
      'Legal authority, usually in an appropriations law, to spend public money for a stated purpose. No public money may be spent without it.',
  },
  {
    id: 'obligation',
    term: 'Obligation',
    short:
      'A commitment to pay — for example entering a contract — against an appropriation. Obligating funds is not the same as paying them out.',
  },
  {
    id: 'disbursement',
    term: 'Disbursement',
    short:
      'The actual payment of public money. A budget line can be appropriated and obligated long before it is disbursed.',
  },
  {
    id: 'gaa',
    term: 'General Appropriations Act',
    acronym: 'GAA',
    short:
      'The annual law Congress enacts that authorizes national government spending for the fiscal year.',
  },
  {
    id: 'nep',
    term: 'National Expenditure Program',
    acronym: 'NEP',
    short:
      'The President’s proposed national budget submitted to Congress — the starting document for legislation.',
  },
  {
    id: 'baseline',
    term: 'Baseline',
    short:
      'The documented starting value or condition against which later performance or change is compared.',
  },
  {
    id: 'target',
    term: 'Target',
    short:
      'A defined level of performance intended by a stated date, assessed against a specified indicator.',
  },
  {
    id: 'performance-indicator',
    term: 'Performance indicator',
    short:
      'A quantitative or qualitative measure used to track an output, outcome, or other aspect of performance.',
  },  {
    id: 'budget-call',
    term: 'Budget call',
    short:
      'The instruction the executive issues to agencies to submit budget proposals for the next fiscal year, usually with ceilings and priorities.',
  },
  {
    id: 'procurement',
    term: 'Procurement',
    short:
      'The process of buying goods, works, or services with public funds — typically through bidding or other authorized methods.',
  },
  {
    id: 'sanggunian',
    term: 'Sanggunian',
    short:
      'The local legislative body (for example a city or municipal council) that authorizes the local budget.',
  },
  {
    id: 'personnel-services',
    term: 'Personnel services',
    acronym: 'PS',
    short:
      'The expense class for salaries, wages, and other compensation of government personnel.',
  },
  {
    id: 'fiscal-year',
    term: 'Fiscal year',
    acronym: 'FY',
    short:
      'The twelve-month period a budget covers. In the Philippines the fiscal year is the calendar year.',
  },
];

const byId = new Map(glossary.map((e) => [e.id, e]));

export function getTerm(id: string): GlossaryEntry | null {
  return byId.get(id) ?? null;
}

export function acronyms(): GlossaryEntry[] {
  return glossary.filter((e) => e.acronym).sort((a, b) => a.acronym!.localeCompare(b.acronym!));
}
