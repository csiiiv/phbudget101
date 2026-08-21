import type { CalendarRow } from "./types";

/**
 * Typical timing for the national and local budget cycles (ref-04).
 * Dates vary by year; treat rows as orientation, not a substitute for the
 * current-year circulars and calendars.
 */
export const calendarRows: CalendarRow[] = [
  {
    id: "q4-prior",
    period: "Late prior year (often Nov–Dec)",
    months: [11, 12],
    national:
      "DBM issues the budget call and related ceilings so agencies can prepare proposals for the next fiscal year.",
    local:
      "Local planning and investment programming continue; offices prepare for the next proposal cycle.",
    note: "Exact budget-call timing is set in the year’s DBM issuance.",
  },
  {
    id: "q1",
    period: "January–March",
    months: [1, 3],
    national:
      "Agencies refine proposals; technical hearings and executive review continue toward the NEP.",
    local:
      "Ongoing execution of the current local budget; planning updates as needed.",
  },
  {
    id: "q2",
    period: "April–June",
    months: [4, 6],
    national:
      "Executive consolidation of the proposed national budget package.",
    local:
      "Departments and offices prepare budget proposals for submission to the local chief executive (LGC timing targets July 15).",
  },
  {
    id: "july",
    period: "July",
    months: [7, 7],
    national:
      "President submits the proposed national budget (NEP package) to Congress within the constitutional window tied to the opening of the regular session.",
    local:
      "Department and office heads submit proposals to the LCE (statutory target: on or before 15 July).",
  },
  {
    id: "aug-nov",
    period: "August–November",
    months: [8, 11],
    national:
      "House and Senate deliberation; committee hearings; eventual bicameral reconciliation of differing versions.",
    local:
      "LCE submits the executive budget to the sanggunian (statutory target: on or before 16 October).",
  },
  {
    id: "dec",
    period: "December",
    months: [12, 12],
    national:
      "Target enactment of the GAA before the fiscal year begins; veto message if items are vetoed.",
    local:
      "Sanggunian aims to enact the annual appropriation ordinance before year-end; review follows enactment.",
  },
  {
    id: "execution-year",
    period: "Fiscal year (Jan–Dec)",
    national:
      "Allotment and cash releases; obligation and disbursement; agency and DBM execution reporting.",
    local:
      "Execution of the appropriation ordinance; supplemental budgets if authorized.",
  },
  {
    id: "accountability",
    period: "During and after the fiscal year",
    national:
      "Financial and physical performance reporting; COA audit and Annual Audit Reports.",
    local:
      "Local reporting and audit follow the applicable rules for the LGU.",
  },
];
