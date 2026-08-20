import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

const LENSES = [
  { label: 'Organizational', question: 'Who is responsible?', example: 'Department, agency, and operating unit' },
  { label: 'Sectoral', question: 'What public purpose does it serve?', example: 'Health, education, economic services, or another function' },
  { label: 'Geographic', question: 'Where is it intended to operate?', example: 'Nationwide or identified regions and localities' },
  { label: 'Funding source', question: 'What authority or source supports it?', example: 'The applicable fund and authorization classification' },
];

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'What exactly is a budget line?',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            A budget line is more than an amount. Its place in the document tells
            you who is responsible, what work the money supports, and how that
            spending can be grouped with other public expenditures.
          </p>
          <p>
            Before comparing two lines, read their labels and hierarchy. Similar
            amounts can pay for very different work, while one program can contain
            several activities and projects.
          </p>
        </>
      ),
    },
    {
      id: 'hierarchy',
      title: 'Read from agency to program to work item',
      shortTitle: 'Hierarchy',
      type: 'concept',
      content: (
        <>
          <p>
            National budget documents first identify the department or agency
            accountable for the funds. Inside an agency budget, related work is
            grouped into programs. Each program can then contain activities and
            projects—the specific recurring work or time-bounded undertakings
            used to carry it out.
          </p>
          <p>
            Budget practitioners often shorten this structure to{' '}
            <Term id="pap" expand />. Under the government&apos;s Program Expenditure
            Classification, activities and projects that contribute to a common
            objective or outcome are grouped under a program.
          </p>
        </>
      ),
    },
    {
      id: 'drill-down',
      title: 'A simplified agency drill-down',
      shortTitle: 'Drill down',
      type: 'example',
      content: (
        <>
          <p>
            <strong>Illustrative example. Details are simplified for clarity.</strong>{' '}
            This tree uses a real department and program name, but it is a teaching
            diagram rather than a replica of a particular fiscal year&apos;s budget.
          </p>
          <div className="not-prose my-8 rounded-lg border bg-card p-5 sm:p-6">
            <ol className="space-y-4" aria-label="Simplified Department of Health budget hierarchy">
              <li>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Agency</p>
                <p className="mt-1 font-semibold">Department of Health</p>
              </li>
              <li className="ml-4 border-l-2 border-primary/30 pl-4 sm:ml-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Program</p>
                <p className="mt-1 font-semibold">Health Facilities Enhancement Program</p>
              </li>
              <li className="ml-8 border-l-2 border-primary/30 pl-4 sm:ml-16">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Illustrative project</p>
                <p className="mt-1 font-semibold">Upgrade a public health facility</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  A real entry would include more identifiers, classifications,
                  conditions, and any authorized amount.
                </p>
              </li>
            </ol>
          </div>
          <p>
            Read the tree from the outside inward: responsible agency, program
            objective, then the activity or project that performs the work. Do not
            treat the project label alone as the entire agency budget.
          </p>
        </>
      ),
    },
    {
      id: 'four-lenses',
      title: 'The same line can be viewed four ways',
      shortTitle: 'Four lenses',
      type: 'concept',
      content: (
        <>
          <p>
            The hierarchy locates a line inside an agency. Classification systems
            let government group that same expenditure in other useful ways. The
            underlying spending does not multiply when the lens changes.
          </p>
          <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
            {LENSES.map((lens) => (
              <div key={lens.label} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{lens.label}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{lens.question}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{lens.example}</p>
              </div>
            ))}
          </div>
          <p>
            A <Term id="special-purpose-fund" expand /> is presented separately
            from a regular agency budget because it supports a purpose that may
            apply across agencies, recipients, or contingencies. It still needs
            clear authority and classification; “special purpose” does not mean
            unclassified or unrestricted.
          </p>
          <p className="text-sm text-muted-foreground">
            Source note: Department of Budget and Management, Commission on Audit,
            and Department of Finance guidance on{' '}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/Issuances/2017/Joint%20Circular/JOINT%20CIRCULAR%20NO.%201%20COA-DBM-DOF%20DATED%20AUGUST%2011%2C%202017.pdf">
              Program Expenditure Classification
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
          title="Place the line and choose the lens"
          moduleId="mod-03"
          lessonId="03.2"
          items={[
            {
              prompt:
                'A document lists Department of Health → a health-facilities program → upgrade of a named public facility. What does the last item represent in the simplified hierarchy?',
              options: [
                'The responsible agency',
                'A project under the program',
                'The entire health sector',
                'A funding source',
              ],
              correct: 1,
              explanation:
                'The facility upgrade is the specific undertaking nested under the program, which is itself inside the responsible agency budget.',
              wrong: {
                0: 'The Department of Health is the responsible agency; the facility upgrade is nested below it.',
                2: 'The health sector groups many agencies and expenditures. One facility project is not the whole sector.',
                3: 'A funding-source classification answers where the authority or financing comes from, not what undertaking will be carried out.',
              },
            },
            {
              prompt:
                'You want to compare how much budgeted work is intended for different regions, regardless of the responsible agency. Which lens should you use?',
              options: ['Organizational', 'Sectoral', 'Geographic', 'Funding source'],
              correct: 2,
              explanation:
                'The geographic lens groups expenditure by where it is intended to operate or benefit.',
              wrong: {
                0: 'The organizational lens tells you which department, agency, or unit is responsible.',
                1: 'The sectoral lens groups spending by public purpose, such as health or education.',
                3: 'The funding-source lens identifies the relevant fund or authorization, not the intended place.',
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
          Read a budget line in two directions: down the agency → program →
          activity/project hierarchy, and across the organizational, sectoral,
          geographic, and funding-source lenses. The hierarchy tells you where the
          work sits; the classifications help you compare it.
        </KeyTakeaway>
      ),
    },
  ],
});