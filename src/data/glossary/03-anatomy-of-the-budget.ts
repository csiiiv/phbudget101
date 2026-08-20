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
  {
    id: 'pap',
    term: 'Program, activity, and project',
    acronym: 'PAP',
    short: 'The hierarchy used to connect an agency program to the recurring activities and specific projects that carry it out.',
  },
  {
    id: 'special-purpose-fund',
    term: 'Special-purpose fund',
    acronym: 'SPF',
    short: 'A budget provision presented separately from regular agency budgets for a specified purpose that may apply across agencies, recipients, or contingencies.',
  },
  {
    id: 'mooe',
    term: 'Maintenance and Other Operating Expenses',
    acronym: 'MOOE',
    short: 'The expense class for goods and services used in regular government operations, such as supplies, utilities, travel, and maintenance.',
  },
  {
    id: 'financial-expenses',
    term: 'Financial expenses',
    acronym: 'FinEx',
    short: 'The expense class for costs arising from financial transactions, including interest expense and authorized bank or financial charges.',
  },
  {
    id: 'capital-outlays',
    term: 'Capital outlays',
    acronym: 'CO',
    short: 'The expense class for assets and improvements whose benefits extend beyond the fiscal year, such as infrastructure and major equipment.',
  },
];
