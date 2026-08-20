import type { DocumentEntry } from "./types";

/** Budget documents commonly cited in the course (ref-02). */
export const documents: DocumentEntry[] = [
  {
    id: "nep",
    name: "National Expenditure Program",
    acronym: "NEP",
    phases: ["Preparation", "Legislation"],
    answers:
      "What spending does the President propose to Congress for the coming fiscal year?",
    contents:
      "The executive’s proposed national budget, organized by agency and program, submitted to Congress as the starting document for legislation.",
    where: "Published by DBM with the proposed budget package each year.",
    link: {
      label: "DBM budget documents",
      href: "https://www.dbm.gov.ph/index.php/budget-documents",
    },
  },
  {
    id: "besf",
    name: "Budget of Expenditures and Sources of Financing",
    acronym: "BESF",
    phases: ["Preparation", "Legislation"],
    answers:
      "How do proposed or programmed expenditures line up with revenues, borrowing, and other financing?",
    contents:
      "Tables that present estimated expenditures together with the financing that supports them.",
    where: "Part of the annual budget documents published by DBM.",
    link: {
      label: "DBM BESF volumes",
      href: "https://www.dbm.gov.ph/index.php/budget-documents",
    },
  },
  {
    id: "gab",
    name: "General Appropriations Bill",
    acronym: "GAB",
    phases: ["Legislation"],
    answers:
      "What appropriations measure is Congress deliberating before enactment?",
    contents:
      "The proposed annual appropriations bill considered by the House and Senate before it can become the GAA.",
    where:
      "Legislative versions appear through Congress; enacted form becomes the GAA.",
  },
  {
    id: "gaa",
    name: "General Appropriations Act",
    acronym: "GAA",
    phases: ["Legislation", "Execution"],
    answers:
      "What spending did Congress authorize for the fiscal year, and under what conditions?",
    contents:
      "The annual appropriations law, including agency budgets, special-purpose funds, and general and special provisions.",
    where: "Official Gazette and DBM budget document archives.",
    link: {
      label: "DBM budget documents archives",
      href: "https://www.dbm.gov.ph/index.php/budget-documents-archives",
    },
  },
  {
    id: "veto-message",
    name: "President’s veto message",
    phases: ["Legislation"],
    answers:
      "Which appropriation items did the President veto, and on what stated grounds?",
    contents:
      "The message listing line-item or other vetoes applied to the enrolled appropriations bill.",
    where: "Published with the enacted appropriations package when vetoes occur.",
  },
  {
    id: "far-1",
    name: "Financial Accountability Report No. 1",
    acronym: "FAR No. 1",
    phases: ["Execution", "Accountability"],
    answers:
      "How much was appropriated, allotted, obligated, and disbursed for a reporting period?",
    contents:
      "Agency report of appropriations, allotments, obligations, disbursements, and balances.",
    where: "Agency Transparency Seal pages and DBM reporting portals.",
    link: {
      label: "DBM SAODB / related reports",
      href: "https://www.dbm.gov.ph/index.php/statement-of-appropriations-allotments-obligations-disbursements-and-balances",
    },
  },
  {
    id: "nca",
    name: "Notice of Cash Allocation",
    acronym: "NCA",
    phases: ["Execution"],
    answers:
      "Has cash authority been issued so an agency can settle eligible obligations?",
    contents:
      "Cash authority released through the government banking system to cover eligible cash needs.",
    where: "Agency finance records; aggregate release information may appear in DBM reports.",
  },
  {
    id: "aar",
    name: "Annual Audit Report",
    acronym: "AAR",
    phases: ["Accountability"],
    answers:
      "What did COA find about an entity’s accounts, compliance, and operations for the year?",
    contents:
      "Year-end COA report including financial statements and audit observations.",
    where: "Commission on Audit website and entity Transparency Seal pages.",
    link: {
      label: "COA website",
      href: "https://www.coa.gov.ph/",
    },
  },
  {
    id: "aip",
    name: "Annual Investment Program",
    acronym: "AIP",
    phases: ["Preparation (local)", "Legislation (local)"],
    answers:
      "Which local programs and projects are proposed for funding in the budget year?",
    contents:
      "The LGU’s approved annual list of programs, projects, and activities drawn from its investment planning documents.",
    where: "Local planning and budget offices; often posted with local budget documents.",
  },
  {
    id: "appropriation-ordinance",
    name: "Appropriation ordinance",
    acronym: "AO",
    phases: ["Legislation (local)", "Execution (local)"],
    answers:
      "What spending did the sanggunian authorize for the LGU, and under what conditions?",
    contents:
      "The ordinance authorizing the LGU’s annual or supplemental budget.",
    where: "Sanggunian records and local government websites.",
  },
];
