import type { GlossaryEntry } from './types';

/**
 * 07-reading-budget-documents.
 * Migrated from the former single-file src/data/glossary.ts (union of lesson PRs #6-#35).
 */
export const entries: GlossaryEntry[] = [
  {
    id: 'besf',
    term: 'Budget of Expenditures and Sources of Financing',
    acronym: 'BESF',
    short: 'The budget document that presents estimated government expenditures together with the revenues, borrowing, and other financing that support them.',
  },
  {
    id: 'far-1',
    term: 'Financial Accountability Report No. 1',
    acronym: 'FAR No. 1',
    short: 'The national agency report showing appropriations, allotments, obligations, disbursements, and balances for a reporting period.',
  },
  {
    id: 'nca',
    term: 'Notice of Cash Allocation',
    acronym: 'NCA',
    short: 'Cash authority issued to an agency or operating unit through the government banking system to cover eligible cash requirements.',
  },
  {
    id: 'annual-audit-report',
    term: 'Annual Audit Report',
    acronym: 'AAR',
    short: 'COA’s year-end report on its audit of a government entity’s accounts and operations, including the relevant financial statements and audit observations.',
  },
  {
    id: 'annual-investment-program',
    term: 'Annual Investment Program',
    acronym: 'AIP',
    short: 'An LGU’s approved annual list of programs, projects, and activities drawn from its local development investment program.',
  },
  {
    id: 'appropriation-ordinance',
    term: 'Appropriation ordinance',
    acronym: 'AO',
    short: 'The ordinance through which a sanggunian authorizes an LGU’s annual or supplemental budget for specified purposes and conditions.',
  },
  {
    id: 'uacs',
    term: 'Unified Accounts Code Structure',
    acronym: 'UACS',
    short: 'The Philippine government-wide coding framework that identifies financial transactions consistently across budgeting, accounting, and reporting.',
  },
  {
    id: 'general-provision',
    term: 'General provision',
    short: 'A provision in an appropriations law that states a rule applying across government or to the broad scope named in the provision.',
  },
  {
    id: 'special-provision',
    term: 'Special provision',
    short: 'A provision attached to a particular agency, fund, program, or item that may state its purpose, conditions, release rules, or reporting requirements.',
  },
  {
    id: 'nominal-value',
    term: 'Nominal value',
    short: 'An amount stated in the prices of the period when it was recorded, without adjustment for changes in the price level.',
  },
  {
    id: 'real-value',
    term: 'Real value',
    short: 'An amount adjusted to a common price basis so purchasing power can be compared across periods.',
  },
  {
    id: 'consumer-price-index',
    term: 'Consumer Price Index',
    acronym: 'CPI',
    short: 'An index measuring changes in the average retail prices of a fixed basket of goods and services relative to a base period.',
  },
  {
    id: 'avalanche-method',
    term: 'Avalanche method',
    short: 'A scanning method that flags unusually large increases, decreases, appearances, and disappearances across comparable budget years for further investigation.',
  },
  {
    id: 'increment',
    term: 'Increment',
    short: 'A smaller change in a budget line that may be modest in one year but meaningful when it persists or accumulates over time.',
  },
];
