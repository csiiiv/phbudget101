import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

const CLASSES = [
  { name: 'Personnel Services', acronym: 'PS', termId: 'personnel-services', buys: 'Compensation and other authorized personnel benefits', examples: 'Salaries, wages, and government personnel benefits' },
  { name: 'Maintenance and Other Operating Expenses', acronym: 'MOOE', termId: 'mooe', buys: 'Goods and services used in regular operations', examples: 'Utilities, supplies, travel, training, and contracted services' },
  { name: 'Financial Expenses', acronym: 'FinEx', termId: 'financial-expenses', buys: 'Costs arising from financial transactions', examples: 'Interest expense, bank charges, and other authorized financial charges' },
  { name: 'Capital Outlays', acronym: 'CO', termId: 'capital-outlays', buys: 'Assets or improvements whose benefits extend beyond the fiscal year', examples: 'Buildings, equipment, infrastructure, and other capital assets' },
] as const;

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'Why separate salaries from buildings?',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Two programs can have the same authorized total but very different
            operating needs. One may mainly pay staff; another may construct
            facilities or buy equipment.
          </p>
          <p>
            Expense classes show what kind of input government expects to buy.
            That distinction helps you ask whether a budget can both create an
            asset and operate the service that depends on it.
          </p>
        </>
      ),
    },
    {
      id: 'four-classes',
      title: 'The four general expense classes',
      shortTitle: 'Four classes',
      type: 'concept',
      content: (
        <>
          <p>
            National budget documents commonly group an item of appropriation
            into four general expense or allotment classes. The class describes
            the economic kind of input, not the policy sector or responsible
            agency.
          </p>
          <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
            {CLASSES.map((expenseClass) => (
              <div key={expenseClass.acronym} className="rounded-lg border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {expenseClass.acronym}
                </p>
                <h3 className="mt-1 font-semibold">
                  <Term id={expenseClass.termId}>{expenseClass.name}</Term>
                </h3>
                <p className="mt-2 text-sm leading-relaxed">{expenseClass.buys}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Examples: {expenseClass.examples}
                </p>
              </div>
            ))}
          </div>
          <p>
            On first use in a budget document, always check its definitions and
            notes. Detailed object codes decide where a particular cost belongs;
            the examples here are a reading guide, not a substitute for those
            rules.
          </p>
        </>
      ),
    },
    {
      id: 'why-it-matters',
      title: 'Capital and operating needs travel together',
      shortTitle: 'Why it matters',
      type: 'concept',
      content: (
        <>
          <p>
            <Term id="capital-outlays" /> can create or improve a long-lived asset,
            such as a building or major equipment. But opening the asset may also
            require <Term id="personnel-services" /> for staff and{' '}
            <Term id="mooe" /> for supplies, utilities, maintenance, and services.
            A capital allocation alone does not show that the finished facility
            can operate.
          </p>
          <p>
            The classes also matter because funds are authorized and managed for
            stated purposes. Moving requirements between compensation, operations,
            financial costs, and capital is not merely relabeling a spreadsheet;
            applicable budget rules and authority still govern the change.
          </p>
        </>
      ),
    },
    {
      id: 'annotated-entry',
      title: 'Read a labeled budget entry',
      shortTitle: 'Budget entry',
      type: 'example',
      content: (
        <>
          <p>
            <strong>Illustrative example. Details are simplified for clarity.</strong>{' '}
            This static diagram is not a facsimile of an official document and
            contains no teaching amount.
          </p>
          <div className="not-prose my-8 overflow-hidden rounded-lg border bg-card" aria-label="Fully labeled illustrative budget entry">
            <div className="border-b bg-secondary/50 px-5 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Agency</p>
              <p className="font-semibold">Illustrative Public Health Office</p>
            </div>
            <dl className="grid sm:grid-cols-2">
              <div className="border-b p-5 sm:border-r"><dt className="text-xs font-semibold uppercase tracking-wide text-primary">Program</dt><dd className="mt-1 text-sm">Preventive Health Services</dd></div>
              <div className="border-b p-5"><dt className="text-xs font-semibold uppercase tracking-wide text-primary">Activity</dt><dd className="mt-1 text-sm">Operate community health sessions</dd></div>
              <div className="border-b p-5 sm:border-b-0 sm:border-r"><dt className="text-xs font-semibold uppercase tracking-wide text-primary">Expense class</dt><dd className="mt-1 text-sm">MOOE — operating supplies and services</dd></div>
              <div className="p-5"><dt className="text-xs font-semibold uppercase tracking-wide text-primary">Amount and conditions</dt><dd className="mt-1 text-sm">Read from the applicable official budget entry and special provisions; omitted here</dd></div>
            </dl>
          </div>
          <p>
            The expense-class label answers <em>what kind of input?</em> The agency,
            program, and activity answer <em>who is responsible and for what
            work?</em> The amount and special provisions answer <em>how much
            authority and under what conditions?</em>
          </p>
          <p className="text-sm text-muted-foreground">
            Source note: Department of Budget and Management guidance in the{' '}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/BESF/BESF2025/GLOSSARY.pdf">
              BESF Glossary of Terms
            </a>{' '}
            and the{' '}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/Issuances/Issuances/2013/Joint%20Circular%202013/DBM-COA-DOF/UACS%20Manual.pdf">
              Unified Accounts Code Structure Manual
            </a>.
          </p>
        </>
      ),
    },
    {
      id: 'check',
      title: 'Check your understanding',
      shortTitle: 'Check',
      type: 'knowledge-check',
      content: (
        <KnowledgeCheck
          title="Identify the field and classify the cost"
          moduleId="mod-03"
          lessonId="03.3"
          items={[
            {
              prompt:
                'In the labeled entry, which field tells you whether the item pays for compensation, operations, financial costs, or capital assets?',
              options: ['Agency', 'Program', 'Expense class', 'Special provision'],
              correct: 2,
              explanation:
                'The expense class identifies the economic kind of input: PS, MOOE, FinEx, or CO.',
              wrong: {
                0: 'The agency identifies who is responsible, not what kind of input is purchased.',
                1: 'The program groups work toward an objective; it can contain several expense classes.',
                3: 'A special provision states conditions or rules. It does not replace the expense-class field.',
              },
            },
            {
              prompt: 'Which expense class normally covers salaries and authorized personnel benefits?',
              options: ['Personnel Services', 'MOOE', 'Financial Expenses', 'Capital Outlays'],
              correct: 0,
              explanation:
                'Personnel Services covers compensation and other authorized benefits for government personnel.',
              wrong: {
                1: 'MOOE generally covers goods and services used in operations, not employee compensation.',
                2: 'Financial Expenses covers costs from financial transactions, such as interest or bank charges.',
                3: 'Capital Outlays covers assets and improvements with benefits extending beyond the fiscal year.',
              },
            },
            {
              prompt: 'A project will purchase major diagnostic equipment expected to serve for several years. Which class is the best starting point?',
              options: ['Personnel Services', 'MOOE', 'Financial Expenses', 'Capital Outlays'],
              correct: 3,
              explanation:
                'Long-lived equipment is generally a capital asset, so Capital Outlays is the best starting classification. The detailed object code remains authoritative.',
              wrong: {
                0: 'Personnel Services pays compensation and benefits, not equipment purchases.',
                1: 'MOOE supports regular operations, but long-lived major equipment is generally treated as capital.',
                2: 'Financial Expenses concerns financial transaction costs, not diagnostic equipment.',
              },
            },
          ]}
        />
      ),
    },
    {
      id: 'takeaway',
      title: 'Key takeaway',
      shortTitle: 'Takeaway',
      type: 'takeaway',
      content: (
        <KeyTakeaway>
          The four expense classes answer what kind of input government plans to
          buy: people through PS, operations through MOOE, financial costs through
          FinEx, and long-lived assets through CO. Read the classes together—a
          service may need both an asset and the recurring resources to operate it.
        </KeyTakeaway>
      ),
    },
  ],
});