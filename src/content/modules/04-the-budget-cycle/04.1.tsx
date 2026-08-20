import { Figure } from '@/components/content/Figure';
import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'Who writes the first draft?',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <>
          <p className='text-lg text-muted-foreground'>
            Who writes the first draft of the national budget?
          </p>
          <p>
            The short answer is the executive branch. It builds the proposal
            from fiscal targets, government priorities, and agency submissions.
            The President then sends the proposed national budget to Congress,
            where the legislation phase begins.
          </p>
        </>
      ),
    },
    {
      id: 'cycle-position',
      title: 'Preparation starts the four-phase cycle',
      shortTitle: 'The cycle',
      type: 'interactive',
      content: (
        <div className='not-prose my-6'>
          <ol className='grid gap-3 sm:grid-cols-4'>
            <li className='rounded-lg border-2 border-primary bg-accent/40 p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Phase 1 · This lesson
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                Plan the budget
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Preparation produces the executive proposal.
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
                Phase 2
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                Approve the budget
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Congress deliberates and legislation follows.
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
                Phase 3
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                Spend and deliver
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Agencies execute the enacted budget.
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>
                Phase 4
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                Check the results
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Reporting, review, and audit feed the next cycle.
              </p>
            </li>
          </ol>
          <p className='mt-3 text-xs text-muted-foreground'>
            Static fallback for the shared budget-cycle timeline. Phase names
            and numbers carry the meaning without relying on color.
          </p>
        </div>
      ),
    },
    {
      id: 'preparation-steps',
      title: 'How the executive builds the proposal',
      shortTitle: 'Build the NEP',
      type: 'concept',
      content: (
        <>
          <p>
            Preparation turns an overall resource plan into agency proposals
            and, finally, one executive budget. Follow the sequence:
          </p>
          <ol className='not-prose my-6 grid gap-3'>
            <li className='rounded-lg border bg-card p-4'>
              <strong className='text-foreground'>
                1. Set the fiscal frame.
              </strong>{' '}
              <span className='text-sm text-muted-foreground'>
                The <Term id='dbcc' expand /> recommends macroeconomic
                assumptions, fiscal targets, and the overall level of spending
                for the upcoming <Term id='fiscal-year' expand />.
              </span>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <strong className='text-foreground'>
                2. State priorities and instructions.
              </strong>{' '}
              <span className='text-sm text-muted-foreground'>
                The <Term id='dbm' expand /> issues the{' '}
                <Term id='budget-call' />, telling agencies how and when to
                prepare their proposals.
              </span>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <strong className='text-foreground'>
                3. Agencies prepare proposals.
              </strong>{' '}
              <span className='text-sm text-muted-foreground'>
                Each agency connects requested resources to its mandates,
                programs, priorities, and expected results.
              </span>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <strong className='text-foreground'>
                4. Proposals face technical review.
              </strong>{' '}
              <span className='text-sm text-muted-foreground'>
                In technical budget hearings, agencies explain their requests
                and answer questions about cost, need, readiness, and
                performance.
              </span>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <strong className='text-foreground'>
                5. The executive reconciles choices.
              </strong>{' '}
              <span className='text-sm text-muted-foreground'>
                Requests are reviewed against the fiscal frame and priorities;
                competing proposals cannot all be included at their requested
                level.
              </span>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <strong className='text-foreground'>
                6. The proposal becomes the NEP.
              </strong>{' '}
              <span className='text-sm text-muted-foreground'>
                Executive review produces the <Term id='nep' expand />, which
                the President submits to Congress for the next phase.
              </span>
            </li>
          </ol>
        </>
      ),
    },
    {
      id: 'proposal-example',
      title: 'A proposal is a starting point, not an outcome',
      shortTitle: 'Example',
      type: 'example',
      content: (
        <>
          <p>
            During preparation for the 2022 national budget, the{' '}
            <strong>Move As One</strong> coalition — a transport coalition of
            over a hundred organizations — submitted a documented proposal for
            active-transport and public-transport support. The recorded request
            included this amount:
          </p>
          <Figure module='mod-04' id='mao-ask' />
          <p>
            The enacted service-contracting amount recorded later in the budget
            process was different:
          </p>
          <Figure module='mod-04' id='mao-service-contracting-outcome' />
          <p>
            The two figures are not a simple before-and-after score. They refer
            to a proposal by a named, on-record proponent and an enacted item at
            different decision points. The useful preparation lesson is
            narrower: input can enter while the executive is building its
            proposal, but later review and legislation still shape what is
            authorized.
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
          title='Sequence the preparation phase'
          moduleId='mod-04'
          lessonId='04.1'
          items={[
            {
              prompt:
                'Which sequence correctly describes the core preparation steps?',
              options: [
                'Agency proposals → budget call → fiscal targets → NEP',
                'Fiscal frame and priorities → budget call → agency proposals and hearings → executive review and NEP',
                'NEP → agency proposals → technical budget hearings → budget call',
              ],
              correct: 1,
              explanation:
                'The executive first establishes the fiscal frame, then calls for and reviews agency proposals before consolidating the NEP.',
              wrong: {
                0: 'Agencies need the budget call and its instructions before they submit proposals.',
                2: 'The NEP is the output of preparation, so it comes after agency proposals, hearings, and executive review.',
              },
            },
            {
              prompt:
                'Who produces the first consolidated national budget proposal sent to Congress?',
              options: [
                'The executive branch, after reviewing agency proposals',
                'Congress, before agencies submit their requests',
                'The Commission on Audit, after auditing the current budget',
              ],
              correct: 0,
              explanation:
                'The executive branch consolidates the NEP. Congress considers the proposal during legislation; audit belongs to accountability.',
              wrong: {
                1: 'Congress deliberates on the proposal in the next phase; it does not produce the executive draft.',
                2: 'Audit findings can inform future preparation, but the audit institution does not consolidate the executive budget proposal.',
              },
            },
          ]}
        />
      ),
    },
    {
      id: 'takeaway',
      title: 'The first draft is an executive proposal',
      shortTitle: 'Takeaway',
      type: 'takeaway',
      content: (
        <KeyTakeaway>
          Preparation moves from a fiscal frame and priorities to a budget call,
          agency proposals, technical review, and executive choices. Its main
          output is the <Term id='nep' />
          —the President’s proposed national budget submitted to Congress, not
          yet the enacted budget.
        </KeyTakeaway>
      ),
    },
  ],
});
