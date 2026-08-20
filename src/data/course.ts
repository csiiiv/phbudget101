export interface CourseModule {
  id: string;
  slug: string;
  title: string;
  purpose: string;
  lessons: { id: string; title: string }[];
}

/**
 * Course structure mirroring docs/modules/*.md (source of truth: the specs).
 * Content (lesson bodies) will live as MDX under src/content/modules/<slug>/.
 */
export const courseModules: CourseModule[] = [
  {
    id: 'mod-00',
    slug: '00-start-here',
    title: 'Start Here',
    purpose: 'Orient the learner and establish a baseline.',
    lessons: [
      { id: '00.1', title: 'Welcome to PH Budget 101' },
      { id: '00.2', title: 'Where the Money Comes From and Where It Goes' },
      { id: '00.3', title: 'Find Your Starting Point' },
    ],
  },
  {
    id: 'mod-01',
    slug: '01-why-pfm-matters',
    title: 'Why Public Financial Management Matters',
    purpose: 'Connect budgets to public services and everyday outcomes.',
    lessons: [
      { id: '01.1', title: 'What Is Public Financial Management?' },
      { id: '01.2', title: 'Four Ways to Read a Budget' },
      { id: '01.3', title: 'From Concern to Expenditure' },
    ],
  },
  {
    id: 'mod-02',
    slug: '02-the-governments-money',
    title: "The Government's Money",
    purpose: 'Explain the resource side of the budget.',
    lessons: [
      { id: '02.1', title: 'Where the Money Comes From' },
      { id: '02.2', title: 'National and Local Purses' },
      { id: '02.3', title: 'Why the Money Runs Out' },
    ],
  },
  {
    id: 'mod-03',
    slug: '03-anatomy-of-the-budget',
    title: 'Anatomy of the Philippine Budget',
    purpose: 'Teach how budget information is organized.',
    lessons: [
      { id: '03.1', title: 'The Three Core Documents' },
      { id: '03.2', title: 'How a Budget Line Is Built' },
      { id: '03.3', title: 'The Four Expense Classes' },
      { id: '03.4', title: 'From Authority to Spending' },
    ],
  },
  {
    id: 'mod-04',
    slug: '04-the-budget-cycle',
    title: 'The Philippine Budget Cycle',
    purpose: 'Provide the main organizing framework for the course.',
    lessons: [
      { id: '04.1', title: 'Preparation: Building the Proposal' },
      { id: '04.2', title: 'Legislation: Congress Decides' },
      { id: '04.3', title: 'Execution: Money Moves' },
      { id: '04.4', title: 'Accountability: Closing the Loop' },
    ],
  },
  {
    id: 'mod-05',
    slug: '05-from-appropriation-to-public-service',
    title: 'From Appropriation to Public Service',
    purpose: 'Show that an approved budget does not automatically produce results.',
    lessons: [
      { id: '05.1', title: 'The Expenditure Chain' },
      { id: '05.2', title: 'Procurement: The Long Middle' },
      { id: '05.3', title: 'Reading Performance Fairly' },
    ],
  },
  {
    id: 'mod-06',
    slug: '06-local-government-budgets',
    title: 'Understanding Local Government Budgets',
    purpose: 'Introduce the distinct PFM structure of LGUs.',
    lessons: [
      { id: '06.1', title: 'The Local Purse' },
      { id: '06.2', title: 'The Local Budget Process' },
      { id: '06.3', title: 'Devolution and Mandanas' },
      { id: '06.4', title: 'Participating Locally' },
    ],
  },
  {
    id: 'mod-07',
    slug: '07-reading-budget-documents',
    title: 'How to Read Budget Documents and Data',
    purpose: 'Develop practical budget literacy.',
    lessons: [
      { id: '07.1', title: 'The Right Document for the Question' },
      { id: '07.2', title: 'Reading the Fine Print' },
      { id: '07.3', title: 'Comparing Amounts Honestly' },
      { id: '07.4', title: 'Avalanches and Increments' },
    ],
  },
  {
    id: 'mod-08',
    slug: '08-evaluating-budget-decisions',
    title: 'Evaluating Budget Decisions',
    purpose: 'Move from reading figures to assessing their meaning.',
    lessons: [
      { id: '08.1', title: 'From Numbers to Judgment' },
      { id: '08.2', title: 'Seven Ways to Judge a Budget' },
      { id: '08.3', title: 'The Three-Question Screen' },
      { id: '08.4', title: 'Evidence Versus Assumption' },
      { id: '08.5', title: 'Weighing Competing Proposals' },
    ],
  },
  {
    id: 'mod-09',
    slug: '09-participating-in-the-budget-process',
    title: 'Participating in the Budget Process',
    purpose: 'Translate budget literacy into meaningful engagement.',
    lessons: [
      { id: '09.1', title: 'Why Participate' },
      { id: '09.2', title: 'Start by Listening' },
      { id: '09.3', title: 'Find Your Target' },
      { id: '09.4', title: 'Build the Proposal' },
      { id: '09.5', title: 'Advocate with Others' },
    ],
  },
  {
    id: 'mod-10',
    slug: '10-capstone-follow-the-money',
    title: 'Capstone: Follow the Money',
    purpose: 'Integrate the entire course.',
    lessons: [{ id: '10.1', title: 'The Investigation' }],
  },
];
