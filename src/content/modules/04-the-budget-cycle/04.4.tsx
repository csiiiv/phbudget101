import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'Checking promises against records',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <>
          <p className='text-lg text-muted-foreground'>
            Who checks whether public money did what it was supposed to do?
          </p>
          <p>
            Accountability is shared. Agencies record and report their own
            financial and physical performance. Managers and internal controls
            check work as it happens. Budget reviewers, legislators, auditors,
            and the public examine different parts of the record.
          </p>
        </>
      ),
    },
    {
      id: 'accountability-loop',
      title: 'The accountability loop',
      shortTitle: 'The loop',
      type: 'interactive',
      content: (
        <div className='not-prose my-6'>
          <ol className='grid gap-3 sm:grid-cols-2'>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Step 1
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                Agencies keep records
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Transactions, deliveries, and accomplishments create the
                evidence needed for later review.
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Step 2
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                Agencies report results
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Financial reports show what happened to funds; physical reports
                show outputs, activities, and progress against targets.
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Step 3
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                Performance is reviewed
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Agencies and budget managers compare financial use and physical
                performance with approved plans and targets.
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Step 4
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                Independent audit examines accounts
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                The <Term id='coa' expand /> audits government accounts and
                reports its findings.
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Step 5
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                Oversight uses the record
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Congress and the public can compare authority, spending,
                implementation, and reported results.
              </p>
            </li>
            <li className='rounded-lg border bg-card p-4'>
              <p className='text-xs font-semibold uppercase tracking-wide text-primary'>
                Step 6
              </p>
              <h3 className='mt-1 font-semibold text-foreground'>
                Findings shape the next plan
              </h3>
              <p className='mt-2 text-sm text-muted-foreground'>
                Lessons, risks, and unresolved problems can inform the next
                round of preparation and implementation.
              </p>
            </li>
          </ol>
          <p className='mt-3 text-xs text-muted-foreground'>
            Static fallback for the accountability portion of the budget-cycle
            timeline. The final step returns to preparation, completing the
            cycle.
          </p>
        </div>
      ),
    },
    {
      id: 'read-both',
      title: 'Read financial and physical results together',
      shortTitle: 'Two records',
      type: 'concept',
      content: (
        <>
          <p>
            Financial accomplishment answers questions such as how much was
            obligated or disbursed. Physical accomplishment answers questions
            such as how many activities, goods, facilities, or services were
            completed against a target. Each record is incomplete on its own.
          </p>
          <p>
            High spending does not prove that the intended output was delivered
            well. A completed output does not by itself prove a lasting outcome.
            And a spending delay is a signal to investigate, not an automatic
            finding of waste. Accountability starts by matching the question to
            the right evidence and then examining the context.
          </p>
        </>
      ),
    },
    {
      id: 'layers-of-review',
      title: 'Different reviewers answer different questions',
      shortTitle: 'Who checks?',
      type: 'concept',
      content: (
        <>
          <ul>
            <li>
              <strong>
                Agency management and <Term id='internal-control' />:
              </strong>{' '}
              Are resources protected, records reliable, risks managed, and work
              carried out under the applicable rules?
            </li>
            <li>
              <strong>Agency performance review:</strong> How do fund use and
              physical operations compare with the plans and targets in the
              budget?
            </li>
            <li>
              <strong>
                <Term id='coa' />:
              </strong>{' '}
              What does independent audit find when it examines government
              accounts and the use of public funds and property?
            </li>
            <li>
              <strong>Congressional oversight:</strong> What do reports and
              hearings show about implementation, compliance, and the need for
              future budget changes?
            </li>
            <li>
              <strong>Public oversight:</strong> What can people learn by
              comparing approved plans, procurement information, implementation
              status, and reports?
            </li>
          </ul>
          <p>
            One place to begin is an agency’s <Term id='transparency-seal' />{' '}
            page, which indexes required disclosures. Posting a document makes
            review possible; it does not guarantee that the program worked or
            that the document answers every question.
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
          title='Match the oversight actor to the mechanism'
          moduleId='mod-04'
          lessonId='04.4'
          items={[
            {
              prompt:
                'An agency manager wants processes that prevent errors, protect resources, and keep records reliable during implementation. Which mechanism fits best?',
              options: [
                'Internal control within the agency',
                'A bicameral conference committee',
                'A new revenue forecast',
              ],
              correct: 0,
              explanation:
                'Internal controls operate within the agency to manage risks, safeguard resources, support reliable records, and help work follow rules.',
              wrong: {
                1: 'A bicameral conference committee reconciles House and Senate versions of a bill; it does not manage agency operations.',
                2: 'A revenue forecast estimates resources for budget planning; it is not an operational control inside the agency.',
              },
            },
            {
              prompt:
                'Which institution independently examines and audits government accounts involving public funds and property?',
              options: [
                'The implementing agency alone',
                'The Commission on Audit',
                'The supplier that received payment',
              ],
              correct: 1,
              explanation:
                'COA is the constitutional audit institution with authority to examine, audit, and settle government accounts within its jurisdiction.',
              wrong: {
                0: 'Agencies keep records and conduct internal review, but external audit is not performed by the implementing agency alone.',
                2: 'A supplier may provide transaction documents, but it is not the constitutional public audit institution.',
              },
            },
          ]}
        />
      ),
    },
    {
      id: 'takeaway',
      title: 'Accountability closes and restarts the cycle',
      shortTitle: 'Takeaway',
      type: 'takeaway',
      content: (
        <KeyTakeaway>
          Accountability combines reliable agency records, financial and
          physical reporting, management review, internal control, independent
          audit, and legislative and public oversight. The findings matter most
          when they improve implementation and inform the next budget’s
          preparation.
        </KeyTakeaway>
      ),
    },
  ],
});
