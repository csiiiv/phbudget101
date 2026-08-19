import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

const FAIR_QUESTIONS = [
  'Which utilization ratio is being reported, and what are its numerator, denominator, and cutoff date?',
  'What outputs were delivered against quantity, quality, and timeliness targets?',
  'Are the outputs usable, reaching the intended people, and contributing to the stated outcome?',
  'What explains any gap, who controls the next step, and what corrective action is documented?',
] as const;

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'An agency spent 95%—did it perform well?',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            <strong>Illustrative teaching number:</strong> a 95% utilization rate
            says that a financial ratio is high. It does not yet say what was
            delivered, whether it worked, or who benefited.
          </p>
          <p>
            The reverse is also true. A low rate identifies a gap that needs an
            explanation; it does not, by itself, prove that money was wasted. Fair
            reading joins financial, physical, and results evidence.
          </p>
        </>
      ),
    },
    {
      id: 'two-scoreboards',
      title: 'Financial and physical performance answer different questions',
      shortTitle: 'Two scoreboards',
      type: 'concept',
      content: (
        <>
          <p>
            Financial accomplishment follows the money: how much authority was
            allotted, <Term id="obligation">obligated</Term>, and{' '}
            <Term id="disbursement">disbursed</Term>. A{' '}
            <Term id="budget-utilization-rate" expand /> summarizes one relationship
            among those amounts.
          </p>
          <p>
            Always read the formula. “Utilization” may refer to obligations against
            allotments or disbursements against obligations. Different formulas
            answer different questions and can produce different rates for the
            same program.
          </p>
          <p>
            <Term id="physical-accomplishment" expand /> compares actual work with
            a target using indicators such as quantity, quality, and timeliness.
            It asks whether classrooms were completed, met requirements, and were
            available when needed—not merely whether bills were processed.
          </p>
        </>
      ),
    },
    {
      id: 'outputs-and-outcomes',
      title: 'Outputs are not outcomes',
      shortTitle: 'Results',
      type: 'concept',
      content: (
        <>
          <p>
            An <Term id="output" expand /> is the good or service an agency
            delivers: a completed classroom, a vaccination session, or a processed
            permit. Outputs are relatively close to agency action and the budget.
          </p>
          <p>
            An <Term id="outcome" expand /> is the change the program seeks beyond
            delivery: less classroom congestion, improved disease protection, or
            shorter waiting time. Outcomes can depend on service quality, use,
            other programs, and conditions outside one agency&apos;s control.
          </p>
          <p>
            A completed building is therefore not the same as improved learning.
            The building must be safe, equipped, staffed, maintained, and used;
            learning also depends on teaching and other conditions. A fair review
            credits the output without claiming an outcome that has not been measured.
          </p>
        </>
      ),
    },
    {
      id: 'contrast',
      title: 'Static contrast: two utilization stories',
      shortTitle: 'Contrast',
      type: 'example',
      content: (
        <>
          <p>
            <strong>Illustrative examples. Details are simplified for clarity.</strong>{' '}
            Both panels require more evidence before a performance judgment.
          </p>
          <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-lg border bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">High utilization, weak result evidence</p>
              <h3 className="mt-2 font-semibold">Payments are high; some classrooms remain unusable</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                <li>Financial record: most obligations have been paid.</li>
                <li>Physical record: construction is reported complete.</li>
                <li>Missing test: whether rooms passed quality checks, opened on time, and are being used.</li>
                <li>Fair reading: high utilization shows money movement, not effectiveness.</li>
              </ul>
            </article>
            <article className="rounded-lg border bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Low utilization, context matters</p>
              <h3 className="mt-2 font-semibold">Obligations are low while a safety-related redesign is resolved</h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                <li>Financial record: much of the allotment remains unobligated.</li>
                <li>Physical record: construction has not started.</li>
                <li>Context: site findings require an approved design correction before procurement proceeds.</li>
                <li>Fair reading: pausing may avoid unsafe or wasteful work, but management still needs a credible corrective plan.</li>
              </ul>
            </article>
          </div>
          <p>
            Common causes of low obligation or delayed implementation include late
            releases, procurement delays, capacity gaps, unresolved right-of-way,
            and design changes. Some reflect weak planning or management; others
            reflect constraints or a responsible decision not to proceed with
            defective work. The cause and response—not the rate alone—support the judgment.
          </p>
          <div className="not-prose my-6 rounded-lg border bg-secondary/40 p-5">
            <h3 className="font-semibold">Four questions for a fair reading</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
              {FAIR_QUESTIONS.map((question) => <li key={question}>{question}</li>)}
            </ol>
          </div>
          <p className="text-sm text-muted-foreground">
            Source note: DBM guidance for{' '}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/Issuances/2025/Circular-Letter/CIRCULAR-LETTER-NO.-2025-2.pdf">financial and physical performance reporting</a>, the{' '}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/BESF/BESF2019/GLOSSARY.pdf">BESF definitions of outputs and outcomes</a>, and the Commission on Audit&apos;s{' '}
            <a href="https://www.coa.gov.ph/wp-content/uploads/transparency/citizen_charter/COA_Citizens_Charter__2024.pdf">performance-audit framework</a>.
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
          title="Choose the fairest performance reading"
          moduleId="mod-05"
          lessonId="05.3"
          items={[
            {
              prompt: 'An agency reports a very high disbursement-to-obligation rate. What is the strongest conclusion supported by that ratio alone?',
              options: ['Most recorded obligations in the denominator were paid', 'The program achieved its intended outcome', 'Every output met its quality standard', 'All intended beneficiaries received the service'],
              correct: 0,
              explanation: 'That formula measures payment relative to recorded obligations. Outcomes, quality, and reach require separate evidence.',
              wrong: {
                1: 'A payment ratio does not measure the change a program sought to create.',
                2: 'Quality is physical-performance evidence and cannot be inferred from payment alone.',
                3: 'Beneficiary reach requires service or outcome records, not only financial data.',
              },
            },
            {
              prompt: 'A school-building project has low obligation because a newly discovered site hazard requires redesign. Which reading is fairest?',
              options: ['Low utilization automatically proves waste', 'The delay is automatically good management', 'The safety issue may justify a pause, but reviewers should examine the corrective plan, authority, and revised schedule', 'Financial performance is irrelevant'],
              correct: 2,
              explanation: 'Context can justify not obligating funds immediately, while accountability still requires evidence of the issue and a credible response.',
              wrong: {
                0: 'The rate identifies a gap but does not establish why it occurred or whether avoiding unsafe work protected public money.',
                1: 'A stated reason is not enough; reviewers still need evidence and a workable response.',
                3: 'Financial performance remains relevant because authority may expire and delayed obligations affect implementation.',
              },
            },
            {
              prompt: 'Which pair correctly distinguishes an output from an outcome?',
              options: ['Output: classroom completed; outcome: reduced classroom congestion', 'Output: reduced congestion; outcome: construction contract signed', 'Output: allotment released; outcome: contractor paid', 'Output: utilization rate; outcome: disbursement voucher'],
              correct: 0,
              explanation: 'The completed classroom is a delivered good; reduced congestion is a change the program seeks through use of that output.',
              wrong: {
                1: 'Reduced congestion is the outcome, while a signed contract is an obligation-stage record, not a delivered output.',
                2: 'Allotment and payment are financial stages rather than output and outcome results.',
                3: 'Both choices are financial information, not a delivered service and its resulting change.',
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
          Utilization is a financial signal, not a performance verdict. Read the
          formula, compare physical targets with actual quantity, quality, and
          timeliness, distinguish outputs from outcomes, and investigate the cause
          and response behind any gap.
        </KeyTakeaway>
      ),
    },
  ],
});