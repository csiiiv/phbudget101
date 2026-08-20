import type { FaqEntry } from "./types";

/** Common learner questions (ref-09). */
export const faqEntries: FaqEntry[] = [
  {
    id: "budget-vs-gaa",
    question: "What’s the difference between “the budget” and the GAA?",
    answer:
      "People often say “the budget” for the whole proposal-to-spending story. The General Appropriations Act (GAA) is the annual law that authorizes national government spending for a fiscal year. The National Expenditure Program (NEP) is the President’s proposal before Congress acts.",
    links: [
      { label: "Glossary: GAA", to: "/reference/glossary#gaa" },
      { label: "Glossary: NEP", to: "/reference/glossary#nep" },
      { label: "Document library", to: "/reference/document-library" },
    ],
  },
  {
    id: "why-next-year",
    question: "Why is next year’s budget debated this year?",
    answer:
      "The Philippines runs a budget cycle. Preparation and legislation for the coming fiscal year happen in the prior calendar year so authority can be in place when January begins. Execution and accountability then run through (and beyond) that fiscal year.",
    links: [
      { label: "Budget calendar", to: "/reference/budget-calendar" },
      { label: "Module 4 overview", to: "/modules/04-the-budget-cycle" },
    ],
  },
  {
    id: "is-nep-law",
    question: "Is the NEP already law?",
    answer:
      "No. The NEP is the executive’s proposed national budget. It becomes spending authority only after Congress enacts appropriations and the measure becomes law (typically as the GAA), subject to any vetoes.",
    links: [
      { label: "Document library: NEP", to: "/reference/document-library#nep" },
      { label: "Document library: GAA", to: "/reference/document-library#gaa" },
    ],
  },
  {
    id: "late-budget",
    question: "What happens if the budget is late?",
    answer:
      "If a new GAA is not yet in place, government follows the reenactment and related rules that apply for that situation. The exact effects depend on constitutional and statutory rules and on what Congress and the executive have enacted. Check the current year’s official guidance rather than assuming a single outcome.",
    links: [
      { label: "Legal references", to: "/reference/legal-references" },
      { label: "Institutional map", to: "/reference/institutional-map" },
    ],
  },
  {
    id: "barangay-share",
    question: "Can I see how much went to my barangay?",
    answer:
      "Local budgets are authorized through appropriation ordinances and related local documents. National Tax Allotment shares and local own-source revenues appear in local budget papers, not only in the national GAA. Start with your LGU’s posted budget documents and the local reference page.",
    links: [
      { label: "Local budget structures", to: "/reference/local-budget-structures" },
      { label: "Module 6", to: "/modules/06-local-government-budgets" },
    ],
  },
  {
    id: "disagree",
    question: "What can I do if I disagree with a budget decision?",
    answer:
      "Budget literacy helps you locate which stage and which actor holds the decision you care about — proposal, legislation, execution, or accountability — and which document states it. Participation options differ for national and local processes; Module 9 covers listening, targeting, proposals, and working with others without prescribing a single campaign.",
    links: [
      { label: "Module 9", to: "/modules/09-participating-in-the-budget-process" },
      { label: "Institutional map", to: "/reference/institutional-map" },
    ],
  },
  {
    id: "suspicious",
    question: "Where do I report suspicious spending?",
    answer:
      "Oversight channels include agency internal controls, Commission on Audit processes, and other lawful complaint mechanisms provided by government. This course explains how money is supposed to move; it does not replace legal advice. Use official reporting channels and keep copies of documents that support your concern.",
    links: [
      { label: "COA", to: "/reference/institutional-map#coa" },
      { label: "Sources and attribution", to: "/reference/sources" },
    ],
  },
];
