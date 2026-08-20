import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

const STAGES = [
  { number: '1', name: 'Appropriation', termId: 'appropriation', question: 'May government spend?', description: 'A law or other authorized source grants spending authority for a stated purpose.' },
  { number: '2', name: 'Allotment', termId: 'allotment', question: 'How much authority is available to commit?', description: 'DBM authorizes an agency to incur obligations within the released amount and purpose.' },
  { number: '3', name: 'Obligation', termId: 'obligation', question: 'Has government committed to pay?', description: 'The agency incurs a valid commitment, such as accepting a contract for goods or works.' },
  { number: '4', name: 'Disbursement', termId: 'disbursement', question: 'Has cash been paid?', description: 'Public money is paid to settle an obligation, subject to cash and payment controls.' },
  { number: '5', name: 'Expenditure', termId: 'expenditure', question: 'How is the cost recorded?', description: 'The use or cost is recognized in the relevant financial records under applicable accounting rules.' },
] as const;

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'Is an appropriation money in the bank?',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            No. An appropriation is legal authority to spend for a stated purpose.
            It does not, by itself, prove that authority was released, a contract
            was made, a payment occurred, or a public service arrived.
          </p>
          <p>
            Budget records use different words for each transition. Keeping them
            separate prevents an enacted amount from being mistaken for actual
            spending or delivery.
          </p>
        </>
      ),
    },
    {
      id: 'five-stages',
      title: 'Five words, five different states',
      shortTitle: 'Five stages',
      type: 'concept',
      content: (
        <>
          <p>
            The chain begins with authority and narrows toward commitment,
            payment, and accounting recognition. Each stage answers a different
            question.
          </p>
          <ol>
            <li><Term id="appropriation" expand />: legal authority for a stated purpose.</li>
            <li><Term id="allotment" expand />: authority made available to an agency as a limit and basis for obligations.</li>
            <li><Term id="obligation" expand />: a valid commitment that government will need to settle.</li>
            <li><Term id="disbursement" expand />: payment of public money to settle an obligation.</li>
            <li><Term id="expenditure" expand />: the use or cost recorded under the applicable accounting framework.</li>
          </ol>
          <p>
            This is a teaching sequence for reading budget records. In accrual
            accounting, recognition of an expense and the movement of cash can
            occur at different times. Module 5 examines the operational mechanics
            in more detail.
          </p>
        </>
      ),
    },
    {
      id: 'pipeline',
      title: 'Follow authority through the pipeline',
      shortTitle: 'Pipeline',
      type: 'example',
      content: (
        <>
          <p>
            <strong>Illustrative example. Details are simplified for clarity.</strong>{' '}
            Follow the marker from legal authority toward the financial record.
            No amount is needed to see how the meaning changes.
          </p>
          <div className="not-prose my-8 grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch" aria-label="Five-stage authority-to-expenditure pipeline">
            {STAGES.map((stage, index) => (
              <div key={stage.name} className="contents">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2">
                    <span className="flex size-7 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground" aria-hidden="true">{stage.number}</span>
                    <h3 className="font-semibold">{stage.name}</h3>
                  </div>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-primary">{stage.question}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.description}</p>
                </div>
                {index < STAGES.length - 1 && (
                  <div className="flex items-center justify-center text-xl text-primary" aria-hidden="true">
                    <span className="lg:hidden">↓</span><span className="hidden lg:inline">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p>
            A later-stage number cannot be assumed from an earlier one. An
            appropriation may remain unreleased; an allotment may remain
            unobligated; an obligation may remain unpaid. Physical delivery is a
            further question beyond this financial chain.
          </p>
        </>
      ),
    },
    {
      id: 'validity',
      title: 'Current and continuing appropriations',
      shortTitle: 'Validity',
      type: 'concept',
      content: (
        <>
          <p>
            A <Term id="current-appropriation" expand /> comes from the budget for
            the current fiscal year. A <Term id="continuing-appropriation" expand /> is
            prior-year authority that remains valid into the current year under
            the law and rules that govern it.
          </p>
          <p>
            Recent annual budget rules commonly give Personnel Services a
            current-year obligation period while allowing specified Maintenance
            and Other Operating Expenses and Capital Outlays to remain available
            into a second year. That is the source of the useful “one-year versus
            two-year” shorthand—but it is not a universal rule for every item.
            Release, obligation, implementation, and payment deadlines can differ.
          </p>
          <p>
            Always check the applicable GAA, special provisions, and DBM release
            circular before deciding whether authority has expired. “Continuing”
            means still legally valid; it does not mean permanent.
          </p>
          <p className="text-sm text-muted-foreground">
            Source note: Department of Budget and Management{' '}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/BESF/BESF2026/GLOSSARY.pdf">
              BESF Glossary of Terms
            </a>,{' '}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/Issuances/2026/National-Budget-Circular/NATIONAL-BUDGET-CIRCULAR-NO-599.pdf">
              National Budget Circular No. 599
            </a>, and the{' '}
            <a href="https://www.dbm.gov.ph/index.php/statement-of-appropriations-allotments-obligations-disbursements-and-balances">
              Statement of Appropriations, Allotments, Obligations, Disbursements and Balances
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
          title="Put the stages in order and read validity carefully"
          moduleId="mod-03"
          lessonId="03.4"
          items={[
            {
              prompt: 'Which sequence best follows the lesson’s authority-to-spending chain?',
              options: [
                'Appropriation → allotment → obligation → disbursement → expenditure',
                'Allotment → appropriation → disbursement → obligation → expenditure',
                'Appropriation → disbursement → allotment → expenditure → obligation',
                'Obligation → appropriation → allotment → expenditure → disbursement',
              ],
              correct: 0,
              explanation:
                'Authority is appropriated, made available through allotment, committed through obligation, paid through disbursement, and reflected in the financial records.',
              wrong: {
                1: 'Legal authority must exist before an allotment can make it available, and an obligation comes before its payment.',
                2: 'Disbursement cannot come directly after appropriation; authority must be made available and a valid obligation incurred first.',
                3: 'An obligation cannot validly precede the appropriation and allotment that support it.',
              },
            },
            {
              prompt: 'A line appears in the enacted budget. What can you conclude from that fact alone?',
              options: [
                'The appropriation exists for its stated purpose',
                'The full amount has been allotted',
                'A contract has already created an obligation',
                'The service has been delivered and paid for',
              ],
              correct: 0,
              explanation:
                'An enacted line establishes appropriation authority. Later records are needed to establish allotment, obligation, payment, and delivery.',
              wrong: {
                1: 'Enactment does not by itself prove how much authority has been released or made available to the agency.',
                2: 'An obligation requires a later valid commitment; it is not created merely by enactment.',
                3: 'Delivery and payment occur downstream and require implementation and disbursement evidence.',
              },
            },
            {
              prompt: 'What is the safest way to determine whether a prior-year appropriation is still valid?',
              options: [
                'Assume every appropriation lasts exactly two years',
                'Check the applicable GAA, special provisions, and DBM release rules',
                'Assume it expired at the first year-end',
                'Treat any unpaid obligation as permanent authority',
              ],
              correct: 1,
              explanation:
                'Validity depends on the governing annual authority, allotment class, and applicable release and implementation rules.',
              wrong: {
                0: 'Two-year validity is a useful pattern for some items, not a universal rule for every appropriation or deadline.',
                2: 'Some prior-year appropriations continue legally into another year, so automatic expiry is unsafe.',
                3: 'An unpaid obligation and an appropriation’s validity are related records but not permanent authority.',
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
          An appropriation is permission, not cash or delivery. Trace the records
          through allotment, obligation, disbursement, and expenditure, and verify
          the governing validity period before calling prior-year authority
          available or expired.
        </KeyTakeaway>
      ),
    },
  ],
});