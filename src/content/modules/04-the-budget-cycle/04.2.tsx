import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'From proposal to law',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <>
          <p className='text-lg text-muted-foreground'>
            What happens between the President’s proposed budget and the signed
            annual appropriations law?
          </p>
          <p>
            Legislation is the phase in which Congress examines, debates,
            amends, and votes on the proposed national budget. The House of
            Representatives, the Senate, and the President each have a distinct
            part before the proposal can become law.
          </p>
        </>
      ),
    },
    {
      id: 'legislation-route',
      title: 'The legislation route',
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
                President submits the proposal
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                The <Term id='nep' expand /> gives Congress the executive’s
                proposed allocations and supporting budget information.
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Step 2
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                House review begins
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                House committees hold hearings and scrutinize agency budgets.
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Step 3
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                House approves its bill
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                The appropriations measure originates in the House as the{' '}
                <Term id='gab' expand />.
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Step 4
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                Senate reviews and amends
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Senate committees and the full chamber consider the measure and
                may propose or concur with amendments.
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Step 5
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                Both chambers reconcile
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                A <Term id='bicameral-conference' /> works out one common
                version, which both chambers vote to ratify.
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Step 6
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                President acts on the bill
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Presidential approval enacts the <Term id='gaa' expand />;
                vetoed items are identified in the veto message.
              </p>
            </li>
          </ol>
          <p className='mt-3 text-xs text-muted-foreground'>
            Static fallback for the legislation portion of the shared
            budget-cycle timeline. The numbered sequence remains printable and
            keyboard-readable.
          </p>
        </div>
      ),
    },
    {
      id: 'two-chambers',
      title: 'The chambers do different work on one bill',
      shortTitle: 'Two chambers',
      type: 'concept',
      content: (
        <>
          <p>
            The Constitution requires appropriations bills to originate in the
            House of Representatives, while allowing the Senate to propose or
            concur with amendments. That is why the House version moves first
            even though Senate committees may begin examining the proposed
            budget while House deliberations are under way.
          </p>
          <p>
            In each chamber, committee hearings let legislators question
            agencies and examine requests in detail. Plenary deliberations bring
            the bill before the full chamber for debate, amendments under its
            rules, and a vote. Approval by one chamber alone is not enough: both
            must ultimately agree to the same text.
          </p>
        </>
      ),
    },
    {
      id: 'one-bill',
      title: 'One common bill goes to the President',
      shortTitle: 'One bill',
      type: 'concept',
      content: (
        <>
          <p>
            When the House and Senate versions differ, the{' '}
            <Term id='bicameral-conference' /> reconciles them. The agreed
            version returns to both chambers for ratification before it is
            presented to the President.
          </p>
          <p>
            The President may approve the bill or use a{' '}
            <Term id='line-item-veto' /> on a particular appropriation item. An
            item veto does not reject the items to which the President does not
            object. The signed bill, subject to any valid vetoes, becomes the{' '}
            <Term id='gaa' />. The veto message records the President’s
            objections.
          </p>
          <p>
            This is the key change from preparation: the <Term id='nep' /> is a
            proposal, the <Term id='gab' /> is a bill under legislative
            consideration, and the <Term id='gaa' /> is law.
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
          title='Match the legislation step to the institution'
          moduleId='mod-04'
          lessonId='04.2'
          items={[
            {
              prompt:
                'Which statement correctly distinguishes the House and Senate roles?',
              options: [
                'The appropriations bill originates in the House; the Senate may propose or concur with amendments.',
                'The appropriations bill originates in the Senate; the House may only approve it unchanged.',
                'Each chamber can enact a separate appropriations law for the same fiscal year.',
              ],
              correct: 0,
              explanation:
                'The Constitution places origination in the House while preserving the Senate’s amendment role. Both chambers must agree to one bill.',
              wrong: {
                1: 'The constitutional origination rule points the other way: appropriations bills originate in the House.',
                2: 'The chambers may approve different versions during deliberation, but those differences must be reconciled into one bill.',
              },
            },
            {
              prompt:
                'The House and Senate approve versions with different provisions. What comes next?',
              options: [
                'Both versions automatically become law.',
                'The President chooses one chamber’s version without further congressional action.',
                'A bicameral conference committee reconciles the differences, and both chambers vote on the common version.',
              ],
              correct: 2,
              explanation:
                'The bicameral conference produces a common version for ratification before the bill goes to the President.',
              wrong: {
                0: 'Two conflicting versions cannot both become the annual appropriations law.',
                1: 'Congress must first agree to one text; the President acts on the bill presented after that agreement.',
              },
            },
          ]}
        />
      ),
    },
    {
      id: 'takeaway',
      title: 'Legislation turns a proposal into law',
      shortTitle: 'Takeaway',
      type: 'takeaway',
      content: (
        <KeyTakeaway>
          The House originates and approves the appropriations bill, the Senate
          reviews and may amend it, both chambers reconcile and ratify one
          version, and the President acts on that bill. The result is the{' '}
          <Term id='gaa' />
          —the legal authorization for national government spending, subject to
          any valid item vetoes.
        </KeyTakeaway>
      ),
    },
  ],
});
