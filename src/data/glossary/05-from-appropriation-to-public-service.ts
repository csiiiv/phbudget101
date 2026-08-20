import type { GlossaryEntry } from './types';

/**
 * 05-from-appropriation-to-public-service.
 * Migrated from the former single-file src/data/glossary.ts (union of lesson PRs #6-#35).
 */
export const entries: GlossaryEntry[] = [
  {
    id: 'delivery',
    term: 'Delivery',
    short: 'The point at which the required public good, work, or service has been produced, accepted where required, and made usable for its intended purpose.',
  },
  {
    id: 'annual-procurement-plan',
    term: 'Annual Procurement Plan',
    acronym: 'APP',
    short: 'The procuring entity’s consolidated plan for the procurement projects it expects to undertake during the budget year.',
  },
  {
    id: 'approved-budget-contract',
    term: 'Approved Budget for the Contract',
    acronym: 'ABC',
    short: 'The budget approved for a procurement contract, which serves as the ceiling for bids and the resulting contract price under the applicable rules.',
  },
  {
    id: 'bids-awards-committee',
    term: 'Bids and Awards Committee',
    acronym: 'BAC',
    short: 'The committee that conducts key procurement proceedings, including solicitation and evaluation functions, and recommends award under the applicable rules.',
  },
  {
    id: 'budget-utilization-rate',
    term: 'Budget utilization rate',
    acronym: 'BUR',
    short: 'A financial ratio comparing two budget execution amounts, such as obligations to allotments or disbursements to obligations. The formula and cutoff date must be stated.',
  },
  {
    id: 'physical-accomplishment',
    term: 'Physical accomplishment',
    short: 'The actual quantity, quality, or timeliness of work delivered compared with the corresponding physical target.',
  },
  {
    id: 'output',
    term: 'Output',
    short: 'A good or service that an agency delivers to an intended population or client group.',
  },
  {
    id: 'outcome',
    term: 'Outcome',
    short: 'A change, effect, or result that an agency program or strategy seeks to produce for people, society, or the physical environment.',
  },
];
