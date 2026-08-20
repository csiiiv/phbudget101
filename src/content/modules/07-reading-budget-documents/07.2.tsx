import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

const TABLE_NOTES = [
  {
    label: '1 · Heading and scope',
    text: 'Confirm the office, fiscal year, document, and unit before reading any row.',
  },
  {
    label: '2 · Grouping',
    text: 'Indented rows belong to a program group. A subtotal is not a separate project to add again.',
  },
  {
    label: '3 · Classification',
    text: 'The column states the lens used here: program and expense class. Another table may group the same authority differently.',
  },
  {
    label: '4 · Footnote and cross-reference',
    text: 'The asterisk sends the reader to Special Provision 3. The table alone does not state the full condition.',
  },
];

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'The smallest mark on the page',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <p className="text-lg text-muted-foreground">
          A row appears to authorize a project, but its amount carries an
          asterisk. Is the number the whole instruction—or only the beginning?
        </p>
      ),
    },
    {
      id: 'table-anatomy',
      title: 'Read the frame before the figure',
      shortTitle: 'Table anatomy',
      type: 'concept',
      content: (
        <>
          <p>
            A budget table is a compact set of instructions. Before interpreting
            a value, identify the table title and fiscal year, the unit of
            measurement, the row label, the column heading, and the grouping or
            subtotal that contains it. A value without that frame can answer the
            wrong question.
          </p>
          <p>
            Watch indentation and labels such as <em>Total</em> or{' '}
            <em>of which</em>. A subtotal may already include the rows beneath it;
            adding both can double-count the same authority. Also check whether a
            blank, dash, or zero has a definition in the table notes—these marks
            are not automatically interchangeable.
          </p>
        </>
      ),
    },
    {
      id: 'classification-lenses',
      title: 'Classifications are different lenses',
      shortTitle: 'Classifications',
      type: 'concept',
      content: (
        <>
          <p>
            The same budget authority can be arranged by organization, program,
            expense class, funding source, or location. Each classification
            answers a different question: <em>Who administers it? What activity
            does it support? What kind of resource will it buy? Where does the
            authority come from? Where will it be used?</em>
          </p>
          <p>
            These views are not extra pots of money. They are ways of describing
            the same records. Philippine government reports use a common coding
            framework, the <Term id="uacs" expand />, so readers can connect
            classifications across planning, budgeting, accounting, and
            reporting. Compare only like with like, and trace the definition of
            each column before combining totals.
          </p>
        </>
      ),
    },
    {
      id: 'annotated-excerpt',
      title: 'Static practice: trace every marker',
      shortTitle: 'Annotated excerpt',
      type: 'example',
      content: (
        <>
          <p>
            This simplified, illustrative replica teaches the reading path. It
            is not an excerpt from an enacted budget, and amounts are
            intentionally omitted.
          </p>
          <div className="not-prose my-8 space-y-5">
            <div className="overflow-x-auto rounded-lg border bg-card">
              <div className="border-b bg-muted/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  1 · Illustrative agency schedule · fiscal year example
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Authorized amounts: omitted in this teaching replica
                </p>
              </div>
              <table className="w-full min-w-[36rem] text-left text-sm">
                <thead className="border-b bg-muted/20">
                  <tr>
                    <th className="p-3 font-semibold">Program / activity</th>
                    <th className="p-3 font-semibold">3 · Expense class</th>
                    <th className="p-3 font-semibold">Authorized amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-3 font-medium">2 · Community services</td>
                    <td className="p-3">—</td>
                    <td className="p-3">Subtotal omitted</td>
                  </tr>
                  <tr>
                    <td className="p-3 pl-8">Service delivery activity</td>
                    <td className="p-3">Operating expenses</td>
                    <td className="p-3">Amount omitted*</td>
                  </tr>
                  <tr>
                    <td className="p-3 pl-8">Facility improvement project</td>
                    <td className="p-3">Capital outlays</td>
                    <td className="p-3">Amount omitted</td>
                  </tr>
                </tbody>
              </table>
              <div className="border-t p-4 text-sm">
                <strong>4 · Note:</strong> *Use is subject to Special Provision 3.
                Read that provision for the complete purpose, conditions, and
                reporting requirement.
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {TABLE_NOTES.map((note) => (
                <div key={note.label} className="rounded-lg border bg-card p-4">
                  <h3 className="font-semibold">{note.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{note.text}</p>
                </div>
              ))}
            </div>
          </div>
          <p>
            In an actual <Term id="gaa" />, a <Term id="general-provision" />
            can govern broad parts of the law, while a{' '}
            <Term id="special-provision" /> can set conditions for a particular
            agency, fund, program, or item. Read the exact provision and its scope;
            a table amount does not by itself explain every rule on release, use,
            or reporting.
          </p>
          <p className="text-sm text-muted-foreground">
            Source note: structure and terminology are based on the Department of
            Budget and Management&apos;s published{' '}
            <a
              href="https://www.dbm.gov.ph/index.php/2026/general-appropriations-act-gaa-fy-2026"
              target="_blank"
              rel="noreferrer"
            >
              General Appropriations Act materials
            </a>{' '}
            and the{' '}
            <a
              href="https://www.dbm.gov.ph/wp-content/uploads/Issuances/Issuances/2013/Joint%20Circular%202013/DBM-COA-DOF/UACS%20Manual.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Unified Accounts Code Structure Manual
            </a>
            . The replica contains no official amount or agency entry.
          </p>
        </>
      ),
    },
    {
      id: 'check',
      title: 'Find the controlling text',
      shortTitle: 'Check',
      type: 'knowledge-check',
      content: (
        <KnowledgeCheck
          title="Follow the table's clues"
          moduleId="mod-07"
          lessonId="07.2"
          items={[
            {
              prompt:
                'A row carries an asterisk saying its use is “subject to Special Provision 3.” Where should you look for the complete condition?',
              options: [
                'Only at the number in the row',
                'At Special Provision 3 and the exact scope it names',
                'At the largest subtotal on the page',
                'At any general news summary of the budget',
              ],
              correct: 1,
              explanation:
                'The footnote is a cross-reference. Read the cited special provision and confirm which agency, fund, program, or item it governs.',
              wrong: {
                0: 'The amount states authority, but the asterisk signals that another text supplies important conditions.',
                2: 'A subtotal describes grouping; it does not replace the cited provision.',
                3: 'A summary may provide context, but the controlling condition is in the cited budget text.',
              },
            },
            {
              prompt:
                'A program subtotal appears above two indented activities. What should you verify before adding all three values?',
              options: [
                'Whether the subtotal already includes the indented activities',
                'Whether all labels use the same font size',
                'Whether another agency has a larger total',
                'Whether the table has a colorful heading',
              ],
              correct: 0,
              explanation:
                'Indentation and subtotal labels show hierarchy. If the subtotal includes its child rows, adding them again would double-count.',
              wrong: {
                1: 'Typography can help show hierarchy, but the question is what the subtotal includes.',
                2: 'Comparison with another agency does not resolve the grouping inside this table.',
                3: 'Color is not evidence of how totals are calculated.',
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
          Read a budget table as a connected document: establish its scope and
          units, follow its hierarchy and classifications, then trace every
          footnote to the provision it cites. Money is only part of the meaning.
        </KeyTakeaway>
      ),
    },
  ],
});