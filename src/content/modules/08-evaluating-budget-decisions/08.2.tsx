import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'Good according to what?',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <>
          <p className='text-lg text-muted-foreground'>
            What makes a budget decision good?
          </p>
          <p>
            There is no useful one-word verdict. A decision can be large but
            poorly targeted, economical but ineffective, or transparent but
            unfair. Seven criteria help you state which quality you are judging
            and what evidence you would need.
          </p>
        </>
      ),
    },
    {
      id: 'results-criteria',
      title: 'Is the response enough, economical, and successful?',
      shortTitle: 'Results',
      type: 'concept',
      content: (
        <>
          <p>
            <strong>Illustrative examples.</strong> These first three criteria
            examine the scale of the response and what it produces.
          </p>
          <div className='not-prose my-6 grid gap-4 sm:grid-cols-3'>
            <section className='rounded-lg border bg-card p-5'>
              <h3 className='font-semibold text-foreground'>
                <Term id='adequacy' />
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Ask: Is the response sufficient for the size and nature of the
                need?
              </p>
              <p className='mt-3 text-sm'>
                A clinic program reaches every planned site, but the number of
                service days remains far below documented demand.
              </p>
            </section>
            <section className='rounded-lg border bg-card p-5'>
              <h3 className='font-semibold text-foreground'>
                <Term id='efficiency' />
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Ask: Were quality services produced with a reasonable use of
                money, time, and capacity?
              </p>
              <p className='mt-3 text-sm'>
                A revised delivery schedule serves the same communities with
                less travel time and no reduction in service quality.
              </p>
            </section>
            <section className='rounded-lg border bg-card p-5'>
              <h3 className='font-semibold text-foreground'>
                <Term id='effectiveness' />
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Ask: Did the program achieve the result it was meant to achieve?
              </p>
              <p className='mt-3 text-sm'>
                Training sessions were completed, but the targeted operating
                error occurred just as often afterward.
              </p>
            </section>
          </div>
        </>
      ),
    },
    {
      id: 'fairness-future',
      title: 'Who benefits, and can the response last?',
      shortTitle: 'Fairness',
      type: 'concept',
      content: (
        <div className='not-prose my-6 grid gap-4 sm:grid-cols-2'>
          <section className='rounded-lg border bg-card p-5'>
            <h3 className='font-semibold text-foreground'>
              <Term id='equity' />
            </h3>
            <p className='mt-2 text-sm text-muted-foreground'>
              Ask: Are benefits, burdens, and access distributed fairly in light
              of different needs and circumstances?
            </p>
            <p className='mt-3 text-sm'>
              Equal funding per site may still leave remote communities with
              less access when reaching them costs more.
            </p>
          </section>
          <section className='rounded-lg border bg-card p-5'>
            <h3 className='font-semibold text-foreground'>
              <Term id='sustainability' />
            </h3>
            <p className='mt-2 text-sm text-muted-foreground'>
              Ask: Can financing, staffing, operations, and benefits be
              maintained without weakening future capacity or needs?
            </p>
            <p className='mt-3 text-sm'>
              New equipment is delivered, but no recurring provision supports
              maintenance, supplies, or trained operators.
            </p>
          </section>
        </div>
      ),
    },
    {
      id: 'governance-criteria',
      title: 'Can the decision be seen and answered for?',
      shortTitle: 'Governance',
      type: 'concept',
      content: (
        <div className='not-prose my-6 grid gap-4 sm:grid-cols-2'>
          <section className='rounded-lg border bg-card p-5'>
            <h3 className='font-semibold text-foreground'>
              <Term id='transparency' />
            </h3>
            <p className='mt-2 text-sm text-muted-foreground'>
              Ask: Can people access timely, understandable information about
              the decision, resources, implementation, and results?
            </p>
            <p className='mt-3 text-sm'>
              A summary amount is posted, but its purpose, targets, changes, and
              implementation status cannot be found.
            </p>
          </section>
          <section className='rounded-lg border bg-card p-5'>
            <h3 className='font-semibold text-foreground'>
              <Term id='accountability' />
            </h3>
            <p className='mt-2 text-sm text-muted-foreground'>
              Ask: Must responsible actors explain decisions and results,
              respond to review, and correct problems or answer for failures?
            </p>
            <p className='mt-3 text-sm'>
              Reports identify repeated delays, but no responsible office
              explains the cause or records a corrective action.
            </p>
          </section>
        </div>
      ),
    },
    {
      id: 'check',
      title: 'Check your understanding',
      shortTitle: 'Check',
      type: 'knowledge-check',
      content: (
        <KnowledgeCheck
          title='Choose the criterion that fits the question'
          moduleId='mod-08'
          lessonId='08.2'
          items={[
            {
              prompt:
                'A program delivers the same quality and reach after reducing avoidable processing time and material waste. Which criterion is most directly illustrated?',
              options: ['Efficiency', 'Adequacy', 'Transparency'],
              correct: 0,
              explanation:
                'Efficiency examines how well resources, time, and capacity are converted into useful services without avoidable waste.',
              wrong: {
                1: 'Adequacy asks whether the response is sufficient relative to the need, not primarily whether waste was reduced.',
                2: 'Transparency asks whether relevant information is accessible and understandable; the scenario concerns resource use.',
              },
            },
            {
              prompt:
                'Remote communities receive more support per site because service delivery there costs more and access gaps are larger. Which criterion is most directly illustrated?',
              options: ['Effectiveness', 'Equity', 'Accountability'],
              correct: 1,
              explanation:
                'Equity considers different needs and circumstances. Fair distribution does not always mean identical amounts.',
              wrong: {
                0: 'Effectiveness asks whether intended results were achieved; this scenario focuses on fair distribution of support.',
                2: 'Accountability concerns explanation, review, correction, and answerability; the scenario concerns who receives resources.',
              },
            },
            {
              prompt:
                'An agency publishes clear reports, but no responsible office must explain repeated failures or record corrective action. What is present, and what is weak?',
              options: [
                'Transparency is present; accountability is weak.',
                'Adequacy is present; efficiency is weak.',
                'Sustainability is present; equity is weak.',
              ],
              correct: 0,
              explanation:
                'Accessible reports support transparency. Requiring explanation, review, and correction is the separate accountability question.',
              wrong: {
                1: 'The scenario gives no evidence about the scale of the response or how resources became outputs.',
                2: 'The scenario gives no evidence about long-term viability or fair distribution.',
              },
            },
          ]}
        />
      ),
    },
    {
      id: 'takeaway',
      title: 'Name the standard behind the judgment',
      shortTitle: 'Takeaway',
      type: 'takeaway',
      content: (
        <KeyTakeaway>
          A budget decision can perform well under one criterion and poorly
          under another. Judge it explicitly through adequacy, efficiency,
          effectiveness, equity, sustainability, transparency, and
          accountability, then state the evidence supporting each conclusion.
        </KeyTakeaway>
      ),
    },
  ],
});
