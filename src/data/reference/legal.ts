import type { LegalEntry } from "./types";

/** Legal and policy references used across the course (ref-07). */
export const legalEntries: LegalEntry[] = [
  {
    id: "constitution-art-vi",
    name: "1987 Philippine Constitution, Article VI (Legislative Department)",
    governs:
      "Congressional power over appropriations and the principle that no money may be paid out of the Treasury except in pursuance of an appropriation made by law.",
    relevant:
      "Article VI, Section 24 (appropriations originate in the House) and Section 29 (no money paid out without appropriation; special funds rules).",
    link: {
      label: "Official Gazette — 1987 Constitution",
      href: "https://www.officialgazette.gov.ph/constitutions/1987-constitution/",
    },
  },
  {
    id: "admin-code",
    name: "Administrative Code of 1987",
    governs:
      "Executive organization and authorities that frame how national agencies prepare and execute budgets.",
    relevant:
      "Provisions on budget execution authority and agency organization used as background to the execution chain.",
    link: {
      label: "Official Gazette — Administrative Code",
      href: "https://www.officialgazette.gov.ph/1987/07/25/executive-order-no-292-s-1987/",
    },
  },
  {
    id: "lgc",
    name: "Local Government Code of 1991 (Republic Act No. 7160)",
    governs:
      "Local government structure, taxing and spending powers, local budget process, and shares in national taxes.",
    relevant:
      "Books on local taxation, local budgeting, and local special bodies; basis for Module 6 and local reference pages.",
    link: {
      label: "LawPhil — RA 7160",
      href: "https://lawphil.net/statutes/repacts/ra1991/ra_7160_1991.html",
    },
  },
  {
    id: "ra-10351",
    name: "Sin Tax Reform Law (Republic Act No. 10351)",
    governs:
      "Restructuring of excise taxes on alcohol and tobacco, including earmarks for stated health uses.",
    relevant:
      "Worked example in Module 2 on how tax design can direct incremental revenue.",
    link: {
      label: "LawPhil — RA 10351",
      href: "https://lawphil.net/statutes/repacts/ra2012/ra_10351_2012.html",
    },
  },
  {
    id: "train",
    name: "Tax Reform for Acceleration and Inclusion (TRAIN) (Republic Act No. 10963)",
    governs: "Major national tax policy changes affecting revenue structure.",
    relevant:
      "Background for revenue-side discussion; use official text and BIR/DOF primers for current rates.",
    link: {
      label: "LawPhil — RA 10963",
      href: "https://lawphil.net/statutes/repacts/ra2017/ra_10963_2017.html",
    },
  },
  {
    id: "ra-9184",
    name: "Government Procurement Reform Act (Republic Act No. 9184)",
    governs:
      "Legacy national procurement framework long used for public bidding and related modes.",
    relevant:
      "Historical reference for procurement discussion; check current governing law and IRR in force.",
    link: {
      label: "GPPB — RA 9184 materials",
      href: "https://www.gppb.gov.ph/",
    },
  },
  {
    id: "ra-12009",
    name: "New Government Procurement Act (Republic Act No. 12009)",
    governs:
      "Updated national procurement statute and fit-for-purpose modes, subject to its IRR.",
    relevant:
      "Primary statute referenced in Module 5 for the modern procurement framework.",
    link: {
      label: "GPPB — New Government Procurement Act",
      href: "https://www.gppb.gov.ph/new-government-procurement-act-or-republic-act-no-12009/",
    },
  },
  {
    id: "gaa",
    name: "Annual General Appropriations Act (GAA)",
    governs:
      "Year-specific national spending authority, general provisions, and special provisions.",
    relevant:
      "The enacted budget law for each fiscal year; always read the year you are studying.",
    link: {
      label: "DBM budget documents",
      href: "https://www.dbm.gov.ph/index.php/budget-documents",
    },
  },
];
