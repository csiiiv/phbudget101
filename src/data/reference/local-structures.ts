import type {
  LocalConstraint,
  LocalDocumentEntry,
  LocalSequenceStep,
  LocalTimingRow,
} from "./types";

/** Local budget structures and statutory constraints (ref-05b). */
export const localSequence: LocalSequenceStep[] = [
  {
    id: "plan",
    step: "Plan",
    detail:
      "Local development planning and the investment program identify priorities before annual costing.",
  },
  {
    id: "prepare",
    step: "Prepare",
    detail:
      "Department and office heads submit proposals; the local finance committee advises; the local chief executive assembles the executive budget.",
  },
  {
    id: "authorize",
    step: "Authorize",
    detail:
      "The sanggunian enacts the annual (or supplemental) budget through an appropriation ordinance.",
  },
  {
    id: "review",
    step: "Review",
    detail:
      "The reviewing authority specified by law checks the enacted budget for compliance.",
  },
  {
    id: "execute-account",
    step: "Execute and account",
    detail:
      "Offices implement authorized spending; reporting and audit follow the applicable rules.",
  },
];

export const localDocuments: LocalDocumentEntry[] = [
  {
    id: "ldp",
    name: "Local development plan / investment program",
    role: "States medium-term priorities and the projects that implement them.",
  },
  {
    id: "aip",
    name: "Annual Investment Program (AIP)",
    role: "Lists programs, projects, and activities proposed for the budget year.",
  },
  {
    id: "executive-budget",
    name: "Local executive budget",
    role: "The LCE’s annual proposal submitted to the sanggunian.",
  },
  {
    id: "appropriation-ordinance",
    name: "Appropriation ordinance",
    role: "The sanggunian’s authorization of the annual or supplemental budget.",
  },
];

/**
 * Constraint descriptions stay high-level and point readers to the LGC text.
 * Exact percentage applications can depend on LGU type and later issuances —
 * verify against the current Code and DBM/DILG guidance before relying on a figure.
 */
export const localConstraints: LocalConstraint[] = [
  {
    id: "development-fund",
    topic: "Development fund",
    rule: "A portion of the LGU’s share in national taxes is earmarked for development projects under rules set in the Local Government Code and related issuances.",
    basis: "Local Government Code of 1991 (RA 7160) and related budget operations guidance",
  },
  {
    id: "calamity-fund",
    topic: "Calamity / disaster risk fund",
    rule: "LGUs set aside a calamity or disaster-risk reduction and management fund as required by law for disaster-related needs.",
    basis: "Local Government Code and disaster-risk reduction statutes / issuances",
  },
  {
    id: "personal-services",
    topic: "Personal services limits",
    rule: "Personal services spending is subject to statutory ceilings that vary by LGU income classification and related rules.",
    basis: "Local Government Code provisions on personal services limitations",
  },
  {
    id: "debt-service",
    topic: "Debt service",
    rule: "Local borrowing and debt service must follow authorization and limit rules in the Code and related finance regulations.",
    basis: "Local Government Code borrowing and debt-service provisions",
  },
  {
    id: "levels",
    topic: "Province / city / municipality / barangay",
    rule: "Each LGU level has its own taxing powers, expenditure responsibilities, and review chain. Barangay budgets feed into the broader local structure but are distinct ordinances.",
    basis: "Local Government Code titles on each LGU level",
  },
];

export const localTiming: LocalTimingRow[] = [
  {
    id: "proposals-to-lce",
    milestone: "Office proposals to LCE",
    when: "On or before 15 July (Local Government Code target)",
  },
  {
    id: "budget-to-sanggunian",
    milestone: "Executive budget to sanggunian",
    when: "On or before 16 October (Local Government Code target)",
  },
  {
    id: "enactment",
    milestone: "Enactment of annual budget",
    when: "Targeted before the start of the fiscal year",
  },
];
