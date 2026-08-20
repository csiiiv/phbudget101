import type { GlossaryEntry } from './types';

/**
 * 04-the-budget-cycle.
 * Migrated from the former single-file src/data/glossary.ts (union of lesson PRs #6-#35).
 */
export const entries: GlossaryEntry[] = [
  {
    id: 'dbcc',
    term: 'Development Budget Coordination Committee',
    acronym: 'DBCC',
    short: 'The inter-agency committee that recommends macroeconomic assumptions, fiscal targets, and overall government expenditure levels for budget planning.',
  },
  {
    id: 'dbm',
    term: 'Department of Budget and Management',
    acronym: 'DBM',
    short: 'The executive department that leads national budget preparation, supports execution, and manages related budget policies and systems.',
  },
  {
    id: 'gab',
    term: 'General Appropriations Bill',
    acronym: 'GAB',
    short: 'The proposed annual appropriations measure considered by Congress before it can become the General Appropriations Act.',
  },
  {
    id: 'bicameral-conference',
    term: 'Bicameral conference committee',
    short: 'A panel of House and Senate members formed to reconcile differences between the versions of a bill approved by the two chambers.',
  },
  {
    id: 'line-item-veto',
    term: 'Line-item veto',
    short: 'The President’s constitutional power to veto a particular item in an appropriations bill without rejecting the other items.',
  },
  {
    id: 'notice-of-cash-allocation',
    term: 'Notice of Cash Allocation',
    acronym: 'NCA',
    short: 'Cash authority issued by DBM to cover an agency’s cash requirements through authorized government servicing banks.',
  },
  {
    id: 'coa',
    term: 'Commission on Audit',
    acronym: 'COA',
    short: 'The constitutional commission that examines, audits, and settles government accounts involving public revenue, spending, funds, and property.',
  },
  {
    id: 'internal-control',
    term: 'Internal control',
    short: 'Policies and processes within an organization that help protect resources, keep records reliable, follow rules, and manage operational risks.',
  },
  {
    id: 'transparency-seal',
    term: 'Transparency Seal',
    short: 'A section of a government agency website that indexes required public disclosures such as approved budgets, targets, reports, procurement information, and implementation status.',
  },
];
