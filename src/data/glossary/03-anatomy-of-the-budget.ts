import type { GlossaryEntry } from './types';

/**
 * 03-anatomy-of-the-budget.
 * Migrated from the former single-file src/data/glossary.ts (union of lesson PRs #6-#35).
 */
export const entries: GlossaryEntry[] = [
  {
    id: 'allotment',
    term: 'Allotment',
    short: 'The share of an appropriation made available to an agency as its limit and basis for incurring obligations for the authorized purpose.',
  },
  {
    id: 'expenditure',
    term: 'Expenditure',
    short: 'The use or cost of public resources recognized in the relevant financial records under applicable accounting rules.',
  },
  {
    id: 'current-appropriation',
    term: 'Current appropriation',
    short: 'Spending authority provided for the current fiscal year under the applicable budget law or other authorized source.',
  },
  {
    id: 'continuing-appropriation',
    term: 'Continuing appropriation',
    short: 'Prior-year spending authority that remains legally valid in the current fiscal year under the rules governing that appropriation.',
  },
];
