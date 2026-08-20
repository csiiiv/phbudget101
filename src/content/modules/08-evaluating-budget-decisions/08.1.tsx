import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'The same rate, different results',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <>
          <p className='text-lg text-muted-foreground'>
            Two agencies both used 90% of their budgets. Which one served the
            public better?
          </p>
          <p>
            <strong>Illustrative comparison.</strong> The percentage alone
            cannot answer the question. You need to know what need each agency
            addressed, what it planned to do, what it delivered, and what
            changed for people.
          </p>
        </>
      ),
    },
    {
      id: 'utilization-clue',
      title: 'Utilization is a clue, not a verdict',
      shortTitle: 'Not a verdict',
      type: 'concept',
      content: (
        <>
          <p>
            <Term id='budget-utilization-rate' expand /> compares selected
            execution amounts. Before interpreting a rate, check its numerator,
            denominator, and cutoff date. Obligations against allotments and
            disbursements against obligations answer different questions.
          </p>
          <p>
            Even a clearly defined rate tells you how money moved, not whether
            the original policy was appropriate, the service was delivered well,
            or the intended outcome occurred. A high rate can accompany weak
            results; a low rate can reflect delay, changed conditions, or a plan
            that should not have proceeded unchanged. Either pattern calls for
            more evidence.
          </p>
        </>
      ),
    },
    {
      id: 'evaluation-chain',
      title: 'Follow the whole evaluation chain',
      shortTitle: 'The chain',
      type: 'interactive',
      content: (
        <div className='not-prose my-6'>
          <ol className='grid gap-3 lg:grid-cols-5'>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Link 1
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>Need</h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                What public problem or gap requires attention, and for whom?
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Link 2
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>Policy</h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                What response was chosen, and how should it address the need?
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Link 3
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>Allocation</h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                What resources were authorized, for what purpose and scale?
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Link 4
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                Implementation
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                What was actually carried out, delivered, and paid for?
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Link 5
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>Outcome</h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                What <Term id='outcome'>change in people’s conditions</Term>{' '}
                followed, and what else may have influenced it?
              </p>
            </li>
          </ol>
          <p className='mt-3 text-xs text-muted-foreground'>
            Static evaluation-chain diagram. Read from need to outcome, then
            trace backward when a result is weak or uncertain.
          </p>
        </div>
      ),
    },
    {
      id: 'weak-link',
      title: 'Locate the weak link before judging',
      shortTitle: 'Weak link',
      type: 'example',
      content: (
        <>
          <div className='not-prose my-6 rounded-lg border bg-card p-5'>
            <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
              Illustrative example
            </p>
            <h3 className='mt-1 font-semibold text-foreground'>
              A mobile clinic reached fewer communities than planned
            </h3>
            <ul className='mt-3 space-y-2 text-sm text-muted-foreground'>
              <li>
                <strong className='text-foreground'>Need:</strong> missed
                prenatal visits in remote communities.
              </li>
              <li>
                <strong className='text-foreground'>Policy:</strong> bring
                scheduled mobile clinics closer to residents.
              </li>
              <li>
                <strong className='text-foreground'>Allocation:</strong> support
                was approved for vehicles, supplies, and operations.
              </li>
              <li>
                <strong className='text-foreground'>Implementation:</strong>{' '}
                vehicles and supplies were obtained, but staffing schedules left
                several communities without visits.
              </li>
              <li>
                <strong className='text-foreground'>Outcome:</strong> missed
                visits did not fall as expected.
              </li>
            </ul>
          </div>
          <p>
            The first weak link to investigate is implementation: obtaining
            inputs did not produce the planned coverage. But the chain also
            keeps the inquiry open. The staffing plan may reveal a design
            problem in the policy, and outcome evidence may reveal other
            barriers to prenatal care.
          </p>
          <p>
            Facts help you locate the link; evaluation criteria help you judge
            it. A criterion turns a broad reaction into a specific question—such
            as whether resources were sufficient, delivery was effective, or
            benefits reached the intended people. The next lesson introduces
            seven criteria for making those judgments explicit.
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
          title='Find what the evidence can support'
          moduleId='mod-08'
          lessonId='08.1'
          items={[
            {
              prompt:
                'Two programs report the same budget-utilization rate. What is the fairest conclusion from that fact alone?',
              options: [
                'They served the public equally well.',
                'The rate is one execution clue; compare their needs, policies, allocations, implementation, and outcomes before judging.',
                'The program with the larger total budget must have performed better.',
              ],
              correct: 1,
              explanation:
                'A utilization rate describes a stated relationship between execution amounts. It does not by itself measure service quality or outcomes.',
              wrong: {
                0: 'Equal utilization does not show equal delivery, quality, reach, or outcomes.',
                2: 'A larger allocation shows scale, not automatically stronger performance or public benefit.',
              },
            },
            {
              prompt:
                'A program was funded, but procurement delays meant the service began after the target period. Which link should be investigated first?',
              options: [
                'Need—the public problem could not have existed.',
                'Allocation—the program received no budget authority.',
                'Implementation—the funded plan was not carried out on schedule.',
              ],
              correct: 2,
              explanation:
                'The scenario identifies a delay between allocation and delivery, so implementation is the first weak link to examine.',
              wrong: {
                0: 'Nothing in the scenario disproves the public need; the stated failure is a delivery delay.',
                1: 'The program was funded, so the first identified problem is not absence of an allocation.',
              },
            },
          ]}
        />
      ),
    },
    {
      id: 'takeaway',
      title: 'Judge the chain, not one number',
      shortTitle: 'Takeaway',
      type: 'takeaway',
      content: (
        <KeyTakeaway>
          Move from numbers to judgment by following the whole chain: need →
          policy → allocation → implementation → outcome. Utilization describes
          part of implementation; criteria and evidence help you judge whether
          the links fit together and served the public need.
        </KeyTakeaway>
      ),
    },
  ],
});
