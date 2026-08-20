import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'An approved budget is ready for work',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <>
          <p className='text-lg text-muted-foreground'>
            What does an agency do after its budget has been approved?
          </p>
          <p>
            It moves from legal authority to implementation. That requires more
            than one release or payment: agencies plan their work and cash
            needs, receive the applicable authorities, procure goods or
            services, enter commitments, accept delivery, and pay valid claims.
          </p>
        </>
      ),
    },
    {
      id: 'execution-route',
      title: 'The execution route',
      shortTitle: 'The route',
      type: 'interactive',
      content: (
        <div className='not-prose my-6'>
          <ol className='grid gap-3 sm:grid-cols-2'>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Step 1
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                Authority is available
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                An <Term id='allotment' /> authorizes an agency to incur
                obligations against an approved <Term id='appropriation' />.
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Step 2
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                Cash needs are programmed
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                The government matches expected payments with available cash; a{' '}
                <Term id='notice-of-cash-allocation' expand /> provides cash
                authority for applicable agency requirements.
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Step 3
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                The agency arranges delivery
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Hiring, operations, and <Term id='procurement' /> turn the
                approved plan into contracts, orders, and scheduled work.
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Step 4
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                Commitments are recorded
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Entering a valid commitment creates an <Term id='obligation' />;
                this is not yet a payment.
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Step 5
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                Goods, work, or services arrive
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                The agency checks delivery and performance against the
                agreement.
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Step 6
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                Valid claims are paid
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                A <Term id='disbursement' /> is the actual payment of public
                money.
              </p>
            </li>
          </ol>
          <p className='mt-3 text-xs text-muted-foreground'>
            Static fallback for the execution portion of the budget-cycle
            timeline. Actual documents and release conditions vary by item and
            applicable rules.
          </p>
        </div>
      ),
    },
    {
      id: 'authority-and-cash',
      title: 'Authority and cash answer different questions',
      shortTitle: 'Authority ≠ cash',
      type: 'concept',
      content: (
        <>
          <p>
            An appropriation establishes legal spending authority for a stated
            purpose. An allotment makes authority available to incur
            obligations. Cash programming and the applicable disbursement
            authority address a different question: when can valid obligations
            be paid from available government cash?
          </p>
          <p>
            This distinction prevents a common mistake. A budget line can be
            appropriated, allotted, obligated, and disbursed at different
            points. Seeing one stage in a report does not prove that all later
            stages have happened—or that the intended service has reached
            people.
          </p>
        </>
      ),
    },
    {
      id: 'agency-responsibility',
      title: 'Agencies manage delivery within rules',
      shortTitle: 'Agency work',
      type: 'concept',
      content: (
        <>
          <p>
            The implementing agency is responsible for turning its approved
            budget into work: setting financial and physical targets, scheduling
            procurement, managing contracts, documenting obligations, inspecting
            delivery, processing payments, and reporting progress.
          </p>
          <p>
            Plans can change, but an agency cannot treat the enacted budget as
            an unrestricted pool. Adjustments and realignments must follow the
            legal authority, conditions, approvals, and reporting rules that
            apply to the specific funds.
          </p>
          <p>
            Appropriations also have validity rules. Those rules can differ by
            fiscal year and type of appropriation, so the correct question is
            not “Are budget funds available forever?” but “What validity and
            payment rules apply to this item under the relevant law and
            issuances?”
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
          title='Test two execution claims'
          moduleId='mod-04'
          lessonId='04.3'
          items={[
            {
              prompt:
                'True or false: Once an amount is appropriated, the agency has already paid it to a supplier.',
              options: ['True', 'False'],
              correct: 1,
              explanation:
                'False. Appropriation is legal authority. Allotment, obligation, delivery, cash authority, and disbursement are separate execution steps.',
              wrong: {
                0: 'Appropriation does not itself create a contract, confirm delivery, or make a payment.',
              },
            },
            {
              prompt:
                'True or false: An agency may freely move any approved amount to a new purpose whenever implementation plans change.',
              options: ['True', 'False'],
              correct: 1,
              explanation:
                'False. Adjustments and realignments must remain within the authority and conditions established by applicable law and rules.',
              wrong: {
                0: 'An enacted budget is not an unrestricted pool; changes require a valid basis and the applicable approvals and reporting.',
              },
            },
          ]}
        />
      ),
    },
    {
      id: 'takeaway',
      title: 'Execution is a chain, not one release',
      shortTitle: 'Takeaway',
      type: 'takeaway',
      content: (
        <KeyTakeaway>
          An approved budget becomes service delivery through distinct steps:
          authority, cash planning, procurement or operations, obligation,
          delivery, and disbursement. Agencies manage that chain within the
          purpose, validity, adjustment, and reporting rules that apply.
        </KeyTakeaway>
      ),
    },
  ],
});
