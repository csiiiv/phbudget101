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
    short: 'The system by which government plans, directs, and controls public money to deliver public services.',
  },
  {
    id: 'appropriation',
    term: 'Appropriation',
    short: 'Legal authority, usually in an appropriations law, to spend public money for a stated purpose. No public money may be spent without it.',
  },
  {
    id: 'obligation',
    term: 'Obligation',
    short: 'A commitment to pay — for example entering a contract — against an appropriation. Obligating funds is not the same as paying them out.',
  },
  {
    id: 'disbursement',
    term: 'Disbursement',
    short: 'The actual payment of public money. A budget line can be appropriated and obligated long before it is disbursed.',
  },
  {
    id: 'gaa',
    term: 'General Appropriations Act',
    acronym: 'GAA',
    short: 'The annual law Congress enacts that authorizes national government spending for the fiscal year.',
  },
  {
    id: 'nep',
    term: 'National Expenditure Program',
    acronym: 'NEP',
    short: 'The President’s proposed national budget submitted to Congress — the starting document for legislation.',
  },
  {
    id: 'budget-call',
    term: 'Budget call',
    short: 'The instruction the executive issues to agencies to submit budget proposals for the next fiscal year, usually with ceilings and priorities.',
  },
  {
    id: 'procurement',
    term: 'Procurement',
    short: 'The process of buying goods, works, or services with public funds — typically through bidding or other authorized methods.',
  },
  {
    id: 'sanggunian',
    term: 'Sanggunian',
    short: 'The local legislative body (for example a city or municipal council) that authorizes the local budget.',
  },
  {
    id: 'personnel-services',
    term: 'Personnel services',
    acronym: 'PS',
    short: 'The expense class for salaries, wages, and other compensation of government personnel.',
  },
  {
    id: 'fiscal-year',
    term: 'Fiscal year',
    acronym: 'FY',
    short: 'The twelve-month period a budget covers. In the Philippines the fiscal year is the calendar year.',
  },
  {
    id: 'tax-revenue',
    term: 'Tax revenue',
    short: 'Compulsory payments collected under tax law, including income tax, value-added tax, customs duties, and excise taxes.',
  },
  {
    id: 'excise-tax',
    term: 'Excise tax',
    short: 'A tax imposed on selected goods, products, or activities, such as alcohol and tobacco products.',
  },
  {
    id: 'non-tax-revenue',
    term: 'Non-tax revenue',
    short: 'Government receipts other than taxes, including fees and charges, Treasury income, and dividends from government-owned or controlled corporations.',
  },
  {
    id: 'grant',
    term: 'Grant',
    short: 'Funding received for an agreed purpose without an obligation to repay it as debt.',
  },
  {
    id: 'government-borrowing',
    term: 'Government borrowing',
    short: 'Financing raised through loans or government securities that creates an obligation to repay, generally with interest.',
  },
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
    id: 'local-government-unit',
    term: 'Local government unit',
    acronym: 'LGU',
    short: 'A territorial and political subdivision of the Philippines: a province, city, municipality, or barangay.',
  },
  {
    id: 'own-source-revenue',
    term: 'Own-source revenue',
    short: 'Revenue an LGU raises through its authorized local taxes, fees, charges, and economic enterprises.',
  },
  {
    id: 'intergovernmental-transfer',
    term: 'Intergovernmental transfer',
    short: 'Public money transferred from one level of government to another under law or a funding program.',
  },
  {
    id: 'national-tax-allotment',
    term: 'National Tax Allotment',
    acronym: 'NTA',
    short: 'The automatically released share of local government units in national taxes, formerly called the Internal Revenue Allotment.',
  },
  {
    id: 'delivery',
    term: 'Delivery',
    short: 'The point at which the required public good, work, or service has been produced, accepted where required, and made usable for its intended purpose.',
  },
  {
    id: 'revenue-forecast',
    term: 'Revenue forecast',
    short: 'An estimate of how much revenue government expects to collect in a future period, based on stated assumptions.',
  },
  {
    id: 'fiscal-deficit',
    term: 'Fiscal deficit',
    short: 'The shortfall when government expenditure is greater than government revenue during a period.',
  },
  {
    id: 'fiscal-surplus',
    term: 'Fiscal surplus',
    short: 'The excess when government revenue is greater than government expenditure during a period.',
  },
  {
    id: 'public-debt',
    term: 'Public debt',
    short: 'Outstanding financial obligations of government arising from past borrowing and other liabilities.',
  },
  {
    id: 'fiscal-space',
    term: 'Fiscal space',
    short: 'Room in the public finances for additional priorities after expected resources, fiscal limits, and existing commitments are considered.',
  },
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
  {
    id: 'local-chief-executive',
    term: 'Local chief executive',
    acronym: 'LCE',
    short: 'The governor, city mayor, municipal mayor, or punong barangay who heads the executive branch of an LGU.',
  },
  {
    id: 'local-finance-committee',
    term: 'Local finance committee',
    acronym: 'LFC',
    short: 'The local body that helps estimate income, recommend expenditure ceilings, and advise on LGU finances.',
  },
  {
    id: 'local-executive-budget',
    term: 'Local executive budget',
    short: 'The annual local budget proposal prepared by the local chief executive and submitted to the sanggunian.',
  },
  {
    id: 'notice-of-cash-allocation',
    term: 'Notice of Cash Allocation',
    acronym: 'NCA',
    short: 'Cash authority issued by DBM to cover an agency’s cash requirements through authorized government servicing banks.',
  },
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
    id: 'devolution',
    term: 'Devolution',
    short: 'The transfer or assignment of functions, services, facilities, authority, and responsibility from the national government to local government units.',
  },
  {
    id: 'fiscal-decentralization',
    term: 'Fiscal decentralization',
    short: 'The assignment of revenue powers, transfers, and spending responsibilities among national and subnational governments.',
  },
  {
    id: 'devolution-transition-plan',
    term: 'Devolution transition plan',
    acronym: 'DTP',
    short: 'A phased plan for transferring or assuming devolved functions, services, facilities, personnel, assets, and capacity requirements.',
  },
  {
    id: 'absorptive-capacity',
    term: 'Absorptive capacity',
    short: 'The ability to use added resources effectively through sufficient people, systems, facilities, implementation processes, and oversight.',
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
  {
    id: 'local-development-council',
    term: 'Local development council',
    acronym: 'LDC',
    short: 'A local body that helps formulate development plans, investment programs, and policy recommendations for the sanggunian.',
  },
  {
    id: 'local-special-body',
    term: 'Local special body',
    acronym: 'LSB',
    short: 'A council or board created by law or policy for a defined local governance function, with membership and powers specific to that body.',
  },
  {
    id: 'local-health-board',
    term: 'Local health board',
    acronym: 'LHB',
    short: 'A provincial, city, or municipal body that proposes health budget allocations and advises the sanggunian on local health matters.',
  },
  {
    id: 'cso-accreditation',
    term: 'Civil society organization accreditation',
    acronym: 'CSO accreditation',
    short: 'The formal LGU process that determines whether a civil society organization is eligible for selection as a representative to local special bodies.',
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
  {
    id: 'adequacy',
    term: 'Adequacy',
    short: 'Whether the scale and design of a budget response are sufficient relative to the identified need and intended standard.',
  },
  {
    id: 'efficiency',
    term: 'Efficiency',
    short: 'How well resources are converted into useful outputs or services, considering cost, time, quality, and avoidable waste.',
  },
  {
    id: 'effectiveness',
    term: 'Effectiveness',
    short: 'The extent to which a policy, program, or budget decision achieves its intended results.',
  },
  {
    id: 'equity',
    term: 'Equity',
    short: 'Whether benefits, burdens, and access are distributed fairly, taking account of differences in people’s needs and circumstances.',
  },
  {
    id: 'sustainability',
    term: 'Sustainability',
    short: 'Whether financing, implementation capacity, and intended benefits can be maintained over time without undermining future needs.',
  },
  {
    id: 'transparency',
    term: 'Transparency',
    short: 'Whether relevant information about decisions, resources, implementation, and results is accessible, timely, and understandable.',
  },
  {
    id: 'accountability',
    term: 'Accountability',
    short: 'Whether responsible actors must explain decisions and results, face review, and correct problems or answer for failures.',
  },
  {
    id: 'problem-owner',
    term: 'Problem owner',
    short: 'A person directly affected by a problem, policy, program, project, or proposed change and who therefore has first-hand knowledge and a direct stake in the outcome.',
  },
  {
    id: 'completed-staff-work',
    term: 'Completed Staff Work',
    acronym: 'CSW',
    short: 'A method for analyzing a problem and presenting a worked-out solution so the decision-maker can approve or disapprove a clear proposed action.',
  },
  {
    id: 'baseline',
    term: 'Baseline',
    short: 'The documented starting value or condition against which later performance or change is compared.',
  },
  {
    id: 'target',
    term: 'Target',
    short: 'A defined level of performance intended by a stated date, assessed against a specified indicator.',
  },
  {
    id: 'performance-indicator',
    term: 'Performance indicator',
    short: 'A quantitative or qualitative measure used to track an output, outcome, or other aspect of performance.',
  },
  {
    id: 'coalition',
    term: 'Coalition',
    short: 'Two or more groups or actors that agree on shared objectives, communicate, and coordinate joint action to pursue them.',
  },
  {
    id: 'trade-off',
    term: 'Trade-off',
    short: 'A choice in which gaining an advantage in one criterion involves accepting a cost, risk, or weaker result in another.',
  },
];

const byIdMap = new Map(glossary.map((e) => [e.id, e]));

export function getTerm(id: string): GlossaryEntry | null {
  return byIdMap.get(id) ?? null;
}

export function acronyms(): GlossaryEntry[] {
  return glossary.filter((e) => e.acronym).sort((a, b) => a.acronym!.localeCompare(b.acronym!));
}
