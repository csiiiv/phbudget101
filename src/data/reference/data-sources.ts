import type { DataSourceEntry } from "./types";

/** Where public budget numbers and reports live (ref-08). */
export const dataSources: DataSourceEntry[] = [
  {
    id: "dbm-docs",
    name: "DBM budget documents (NEP, GAA, BESF)",
    group: "National budget proposals and laws",
    contains:
      "Proposed and enacted national budget volumes, BESF tables, and related documents for each fiscal year.",
    cadence: "Annual budget season; archives retained by year.",
    caution: "Always note which fiscal year and whether you are reading proposal or enacted figures.",
    link: {
      label: "DBM budget documents",
      href: "https://www.dbm.gov.ph/index.php/budget-documents",
    },
  },
  {
    id: "dbm-execution",
    name: "DBM execution and accountability reports",
    group: "National budget execution",
    contains:
      "Statements and portals covering appropriations, allotments, obligations, disbursements, and balances.",
    cadence: "Periodic within the fiscal year and after year-end.",
    caution: "Utilization ratios depend on the formula and cutoff date — read the report notes.",
    link: {
      label: "DBM SAODB page",
      href: "https://www.dbm.gov.ph/index.php/statement-of-appropriations-allotments-obligations-disbursements-and-balances",
    },
  },
  {
    id: "transparency-seal",
    name: "Agency Transparency Seal pages",
    group: "National budget execution",
    contains:
      "Agency-posted approved budgets, targets, financial and physical reports, and procurement information.",
    cadence: "Updated by each agency; quality and completeness vary.",
    caution: "Treat missing or late posts as a documentation gap, not as proof that nothing happened.",
    link: {
      label: "DBM Transparency Seal guidance hub",
      href: "https://www.dbm.gov.ph/",
    },
  },
  {
    id: "coa-aar",
    name: "COA Annual Audit Reports",
    group: "Audit and oversight",
    contains:
      "Entity-level audit reports, financial statements, and audit observations.",
    cadence: "Annual, with publication lag after the audited year.",
    link: {
      label: "coa.gov.ph",
      href: "https://www.coa.gov.ph/",
    },
  },
  {
    id: "btr",
    name: "Bureau of the Treasury statistics",
    group: "Revenue, cash, and debt",
    contains:
      "National government cash operations, debt, and related Treasury statistics.",
    cadence: "Monthly and annual releases.",
    link: {
      label: "treasury.gov.ph",
      href: "https://www.treasury.gov.ph/",
    },
  },
  {
    id: "bir",
    name: "Bureau of Internal Revenue collection data",
    group: "Revenue, cash, and debt",
    contains: "Tax collection performance and related taxpayer information.",
    cadence: "Periodic collection reports.",
    link: {
      label: "bir.gov.ph",
      href: "https://www.bir.gov.ph/",
    },
  },
  {
    id: "psa-cpi",
    name: "PSA Consumer Price Index",
    group: "Prices and population",
    contains:
      "CPI series used to compare purchasing power across years (real vs nominal amounts).",
    cadence: "Monthly CPI releases; base year revisions occur periodically.",
    caution: "State the CPI series and base year when adjusting budget amounts.",
    link: {
      label: "PSA CPI",
      href: "https://psa.gov.ph/price-indices/cpi-ir",
    },
  },
  {
    id: "philgeps",
    name: "PhilGEPS / procurement portals",
    group: "Procurement",
    contains:
      "Public procurement notices, awards, and related bid information for covered entities.",
    cadence: "Ongoing as procurements are posted.",
    caution: "Portal coverage and search tools change; confirm the official site in use for the year you need.",
    link: {
      label: "philgeps.gov.ph",
      href: "https://www.philgeps.gov.ph/",
    },
  },
];
