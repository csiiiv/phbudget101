import type { ClassificationBlock } from "./types";

/** Classification systems behind budget tables (ref-05). */
export const classifications: ClassificationBlock[] = [
  {
    id: "expense-class",
    title: "Expense classes",
    summary:
      "National budget lines are grouped by what the money buys. The four expense classes separate people costs, day-to-day operations, financing costs, and capital assets.",
    levels: [
      {
        id: "ps",
        label: "Personnel Services (PS)",
        meaning: "Salaries, wages, and other compensation of government personnel.",
      },
      {
        id: "mooe",
        label: "Maintenance and Other Operating Expenses (MOOE)",
        meaning:
          "Goods and services used in regular operations — supplies, utilities, travel, maintenance, and similar running costs.",
      },
      {
        id: "finex",
        label: "Financial Expenses (FinEx)",
        meaning:
          "Costs arising from financial transactions, including interest and authorized bank or financial charges.",
      },
      {
        id: "co",
        label: "Capital Outlays (CO)",
        meaning:
          "Assets and improvements whose benefits extend beyond the fiscal year, such as infrastructure and major equipment.",
      },
    ],
    example:
      "A classroom-construction line is typically Capital Outlays; teachers’ salaries are Personnel Services; classroom supplies are MOOE.",
  },
  {
    id: "pap",
    title: "Program, activity, and project (PAP)",
    summary:
      "Within an agency, spending is organized so readers can see which recurring activities and specific projects carry out each program.",
    levels: [
      {
        id: "agency",
        label: "Agency",
        meaning: "The department, bureau, or office holding the appropriation.",
      },
      {
        id: "program",
        label: "Program",
        meaning: "A major grouping of related work toward an agency objective.",
      },
      {
        id: "activity",
        label: "Activity",
        meaning: "Recurring work that implements the program.",
      },
      {
        id: "project",
        label: "Project",
        meaning: "A time-bound undertaking with a defined output, often capital in nature.",
      },
    ],
    example:
      "The same peso can be read as belonging to an agency, a program, and either an activity or a project — those layers answer different questions.",
  },
  {
    id: "lenses",
    title: "Other common lenses",
    summary:
      "The same appropriation can be sliced by organization, sector, geography, or funding source. Each lens answers a different question about the same money.",
    levels: [
      {
        id: "organizational",
        label: "Organizational",
        meaning: "Which agency or operating unit holds the authority.",
      },
      {
        id: "sectoral",
        label: "Sectoral",
        meaning: "Which policy sector (for example education or health) the spending supports.",
      },
      {
        id: "geographic",
        label: "Geographic",
        meaning: "Where the spending is intended to take effect, when location is coded.",
      },
      {
        id: "funding-source",
        label: "Funding source",
        meaning: "Which fund or financing source supports the appropriation.",
      },
    ],
  },
  {
    id: "uacs",
    title: "Unified Accounts Code Structure (UACS)",
    summary:
      "UACS is the government-wide coding framework that identifies financial transactions consistently across budgeting, accounting, and reporting. Course lessons treat it at concept level; official UACS manuals define each code segment.",
    levels: [
      {
        id: "code-segments",
        label: "Code segments",
        meaning:
          "Each part of a UACS code points to a classification dimension (such as funding source, organization, or object) so systems can match the same transaction across reports.",
      },
      {
        id: "why-it-matters",
        label: "Why it matters",
        meaning:
          "Without consistent codes, the same spending can be hard to trace from proposal to allotment to disbursement across documents.",
      },
    ],
    example:
      "When comparing years, check whether codes or labels changed before treating two lines as the same item.",
  },
];
