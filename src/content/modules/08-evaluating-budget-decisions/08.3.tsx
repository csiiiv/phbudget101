import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { defineLesson } from '@/lib/sections';

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'A quick screen before deep analysis',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <>
          <p className='text-lg text-muted-foreground'>
            How do you quickly test a proposal before deep analysis?
          </p>
          <p>
            Use three questions in order: <em>Tama ba?</em> Is it the right
            response? <em>Kaya ba?</em> Is it feasible?{' '}
            <em>Susuportahan ba?</em> Can enough support be built to adopt and
            sustain it? The screen organizes inquiry; it does not replace
            evidence.
          </p>
        </>
      ),
    },
    {
      id: 'three-gates',
      title: 'The three-question screen',
      shortTitle: 'Three gates',
      type: 'interactive',
      content: (
        <div className='not-prose my-6 grid gap-4 sm:grid-cols-3'>
          <section className='rounded-lg border bg-card p-5'>
            <p className='text-xs font-semibold uppercase text-primary'>
              Gate 1
            </p>
            <h3 className='mt-1 font-semibold'>
              <em>Tama ba?</em>
            </h3>
            <p className='mt-2 text-sm text-muted-foreground'>
              Is the proposal technically sound, ethically defensible,
              responsive to the need, and attentive to equity?
            </p>
          </section>
          <section className='rounded-lg border bg-card p-5'>
            <p className='text-xs font-semibold uppercase text-primary'>
              Gate 2
            </p>
            <h3 className='mt-1 font-semibold'>
              <em>Kaya ba?</em>
            </h3>
            <p className='mt-2 text-sm text-muted-foreground'>
              Can institutions finance, administer, procure, staff, and monitor
              it under realistic conditions?
            </p>
          </section>
          <section className='rounded-lg border bg-card p-5'>
            <p className='text-xs font-semibold uppercase text-primary'>
              Gate 3
            </p>
            <h3 className='mt-1 font-semibold'>
              <em>Susuportahan ba?</em>
            </h3>
            <p className='mt-2 text-sm text-muted-foreground'>
              Will decision-makers, implementers, and affected groups provide
              enough support for adoption and continued delivery?
            </p>
          </section>
          <p className='text-xs text-muted-foreground sm:col-span-3'>
            Static three-gate visual. A “no” or “uncertain” answer identifies
            work to do; it is not an automatic final verdict.
          </p>
        </div>
      ),
    },
    {
      id: 'transport-screen',
      title: 'Four proposals through the screen',
      shortTitle: 'Example',
      type: 'example',
      content: (
        <>
          <p>
            <strong>Illustrative policy analysis.</strong> The guidebook applies
            the screen to four responses to urban mobility problems. These
            summaries show the method, not a universal ranking.
          </p>
          <div className='not-prose my-6 grid gap-3 sm:grid-cols-2'>
            <section className='rounded-lg border bg-card p-4'>
              <h3 className='font-semibold'>Protected bike-lane networks</h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Strong case on need and feasibility; supportability depends on
                design, enforcement, consultation, and tradeoffs in road space.
              </p>
            </section>
            <section className='rounded-lg border bg-card p-4'>
              <h3 className='font-semibold'>Car-lane widening</h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                May be administratively feasible and politically familiar, but
                must first show that it addresses the defined mobility need
                fairly and effectively.
              </p>
            </section>
            <section className='rounded-lg border bg-card p-4'>
              <h3 className='font-semibold'>Number coding</h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Can be implemented through regulation, but its effects,
                distribution, enforcement capacity, and adaptation by travelers
                require evidence.
              </p>
            </section>
            <section className='rounded-lg border bg-card p-4'>
              <h3 className='font-semibold'>Elevated expressways</h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Require close examination of problem fit, cost, implementation
                capacity, long-term effects, and support among affected
                communities.
              </p>
            </section>
          </div>
        </>
      ),
    },
    {
      id: 'use-the-screen',
      title: 'A gate opens into evidence',
      shortTitle: 'Use it well',
      type: 'concept',
      content: (
        <>
          <p>
            Do not answer a gate with confidence alone. Write the claim,
            evidence, uncertainty, and next question. A technically attractive
            proposal may fail administratively; a feasible proposal may be
            poorly matched to the need; a popular proposal may still be
            inequitable.
          </p>
          <p>
            The seven criteria from the previous lesson deepen the screen.
            Adequacy, effectiveness, and equity help test <em>Tama ba?</em>;
            efficiency and sustainability sharpen <em>Kaya ba?</em>;
            transparency and accountability help examine how support and
            implementation can be maintained and reviewed.
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
          title='Choose the next gate'
          moduleId='mod-08'
          lessonId='08.3'
          items={[
            {
              prompt:
                'A proposal addresses the right need, but no agency has staff, systems, or a workable delivery schedule. Which gate is weakest?',
              options: ['Tama ba?', 'Kaya ba?', 'Susuportahan ba?'],
              correct: 1,
              explanation:
                'Kaya ba? tests administrative, financial, and operational feasibility.',
              wrong: {
                0: 'The scenario says the proposal fits the need; the stated gap is delivery capacity.',
                2: 'Support may matter, but the evidence given directly concerns implementation capacity.',
              },
            },
            {
              prompt:
                'A proposal is feasible and popular, but evidence suggests its benefits bypass the people with the greatest need. Which gate should be revisited first?',
              options: ['Tama ba?', 'Kaya ba?', 'Susuportahan ba?'],
              correct: 0,
              explanation:
                'Tama ba? asks whether the response is appropriate, ethical, effective, and equitable—not merely feasible or popular.',
              wrong: {
                1: 'The proposal is already described as feasible; the problem is fairness and fit.',
                2: 'Popularity does not resolve whether the proposal is equitable or technically appropriate.',
              },
            },
          ]}
        />
      ),
    },
    {
      id: 'takeaway',
      title: 'Screen first, investigate next',
      shortTitle: 'Takeaway',
      type: 'takeaway',
      content: (
        <KeyTakeaway>
          Ask <em>Tama ba? Kaya ba? Susuportahan ba?</em> in sequence. Treat
          each answer as a claim that needs evidence, record uncertainty, and
          use a weak gate to identify the next question—not to manufacture a
          quick verdict.
        </KeyTakeaway>
      ),
    },
  ],
});
