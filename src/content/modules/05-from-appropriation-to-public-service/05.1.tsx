import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

const CHAIN = [
  { name: 'Appropriation', termId: 'appropriation', question: 'Is there legal authority?', controller: 'Congress and the President through the enacted national budget', record: 'GAA and applicable provisions' },
  { name: 'Allotment', termId: 'allotment', question: 'How much authority may the agency obligate?', controller: 'DBM and the implementing agency within the applicable release rules', record: 'GAA as Allotment Order or a separate allotment release document' },
  { name: 'Obligation', termId: 'obligation', question: 'Has government made a valid commitment?', controller: 'The authorized implementing agency', record: 'Contract, purchase order, or other obligation record' },
  { name: 'Disbursement', termId: 'disbursement', question: 'Has the obligation been paid?', controller: 'The agency finance function using the applicable disbursement authority and controls', record: 'Disbursement and accounting records' },
  { name: 'Delivery', termId: 'delivery', question: 'Did the output become usable?', controller: 'The implementing and operating units, suppliers or contractors, and inspectors', record: 'Inspection, acceptance, completion, and service records' },
] as const;

const STORYBOARD = [
  { scene: 'GAA line', timing: 'Annual authorization', actor: 'Congress and the President', trail: 'GAA entry and provisions', meaning: 'The project has spending authority for a stated purpose; no building exists yet.' },
  { scene: 'Allotment', timing: 'After enactment and applicable release requirements', actor: 'DBM and agency budget office', trail: 'GAAAO or allotment release record', meaning: 'The agency has authority available to incur obligations within the release.' },
  { scene: 'Procurement and award', timing: 'After planning, readiness checks, and solicitation', actor: 'Procuring entity and its Bids and Awards Committee', trail: 'Procurement plan, bid records, notice of award, and contract', meaning: 'A valid contract creates a commitment and identifies who will perform the work.' },
  { scene: 'Construction', timing: 'During contract implementation', actor: 'Contractor and implementing unit', trail: 'Program of work, progress reports, and inspection records', meaning: 'Physical output is being produced; progress must be verified, not assumed from the contract.' },
  { scene: 'Payment', timing: 'When verified payment conditions are met', actor: 'Implementing agency finance function', trail: 'Billing, inspection or acceptance support, disbursement voucher, and accounting records', meaning: 'Government settles all or part of its obligation. Infrastructure payments may occur in stages.' },
  { scene: 'Students use the building', timing: 'After completion, acceptance, and operational readiness', actor: 'School and responsible operating units', trail: 'Completion and acceptance records, asset records, and school-use records', meaning: 'The output is delivered and operating. Whether learning improves is a separate outcome question.' },
] as const;

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'A school building is in the GAA—does it exist?',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            An enacted budget line is evidence of authority, not a photograph of
            a finished classroom. Several decisions, records, and physical steps
            still stand between appropriation and students using the building.
          </p>
          <p>
            To locate progress or delay fairly, ask which stage the project has
            actually reached and what evidence supports that conclusion.
          </p>
        </>
      ),
    },
    {
      id: 'chain',
      title: 'The five-stage chain',
      shortTitle: 'The chain',
      type: 'concept',
      content: (
        <>
          <p>
            The execution chain moves from permission to authority made available,
            then to commitment, payment, and usable output:
          </p>
          <ol>
            <li><Term id="appropriation" expand /> authorizes spending by law for a stated purpose.</li>
            <li><Term id="allotment" expand /> makes obligational authority available to the agency within a limit.</li>
            <li><Term id="obligation" expand /> records a valid commitment that government will need to settle.</li>
            <li><Term id="disbursement" expand /> settles an obligation through an authorized cash or non-cash transaction.</li>
            <li><Term id="delivery" expand /> means the required good, work, or service has been produced, accepted, and made usable.</li>
          </ol>
          <p>
            These stages do not guarantee one another. An appropriation can remain
            unreleased, an allotment unobligated, an obligation unpaid, and a paid
            contract incomplete or unusable. Delivery evidence therefore belongs
            beside the financial records.
          </p>
        </>
      ),
    },
    {
      id: 'control-and-records',
      title: 'Who controls each transition?',
      shortTitle: 'Controls',
      type: 'concept',
      content: (
        <>
          <p>
            No single actor controls the whole chain. Each transition has a
            different decision-maker and paper trail.
          </p>
          <div className="not-prose my-8 space-y-3">
            {CHAIN.map((stage, index) => (
              <div key={stage.name} className="grid gap-3 rounded-lg border bg-card p-5 md:grid-cols-[auto_1fr_1fr]">
                <div className="flex items-start gap-3 md:col-span-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground" aria-hidden="true">{index + 1}</span>
                  <div><h3 className="font-semibold"><Term id={stage.termId}>{stage.name}</Term></h3><p className="mt-1 text-sm font-medium text-primary">{stage.question}</p></div>
                </div>
                <div className="md:col-start-2"><p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Main control</p><p className="mt-1 text-sm leading-relaxed">{stage.controller}</p></div>
                <div><p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Evidence</p><p className="mt-1 text-sm leading-relaxed">{stage.record}</p></div>
              </div>
            ))}
          </div>
          <p>
            National agencies report appropriations, allotments, obligations,
            disbursements, and balances in Financial Accountability Report No. 1.
            Physical completion and service use require additional implementation
            and accomplishment records.
          </p>
        </>
      ),
    },
    {
      id: 'school-storyboard',
      title: 'Static storyboard: follow a school building',
      shortTitle: 'Storyboard',
      type: 'interactive',
      content: (
        <>
          <p>
            <strong>Illustrative example. Details are simplified for clarity.</strong>{' '}
            This is the static fallback for the school-building step-through. It
            uses no project amount or invented calendar; actual sequencing and
            payment arrangements depend on the contract and applicable rules.
          </p>
          <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
            {STORYBOARD.map((step, index) => (
              <article key={step.scene} className="rounded-lg border bg-card p-5">
                <div className="flex items-center gap-3"><span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground" aria-hidden="true">{index + 1}</span><h3 className="font-semibold">{step.scene}</h3></div>
                <dl className="mt-4 space-y-3 text-sm">
                  <div><dt className="font-medium text-muted-foreground">Relative timing</dt><dd>{step.timing}</dd></div>
                  <div><dt className="font-medium text-muted-foreground">Responsible actor</dt><dd>{step.actor}</dd></div>
                  <div><dt className="font-medium text-muted-foreground">Paper trail</dt><dd>{step.trail}</dd></div>
                </dl>
                <p className="mt-4 border-t pt-4 text-sm leading-relaxed">{step.meaning}</p>
              </article>
            ))}
          </div>
          <p>
            <Term id="procurement" expand /> appears between available authority
            and delivery. Planning and competition lead to award and contract;
            contract implementation produces the work; verified obligations are
            then paid according to the contract. Lesson 05.2 opens this long middle.
          </p>
          <p className="text-sm text-muted-foreground">
            Source note: Department of Budget and Management{' '}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/AboutDBM/Budget%20101_Reader%20View.pdf">Budget 101 definitions</a>{' '}
            and COA-DBM{' '}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/Issuances/2019/Joint-Circular/COA-DBM-JOINT-CIRCULAR-NO-2019-1-DATED-JANUARY-1-2019.pdf">FAR No. 1 instructions</a>.
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
          title="Identify the stage from the evidence"
          moduleId="mod-05"
          lessonId="05.1"
          items={[
            {
              prompt: 'The agency has signed a valid construction contract, but no billing has been paid. Which stage has the project reached?',
              options: ['Appropriation only', 'Allotment only', 'Obligation', 'Disbursement'],
              correct: 2,
              explanation: 'The signed valid contract binds government to a commitment, so an obligation exists even though payment has not yet occurred.',
              wrong: {
                0: 'Appropriation is earlier legal authority. The scenario provides stronger evidence: a contract now commits government.',
                1: 'Allotment made authority available, but the signed contract shows the agency has already incurred an obligation.',
                3: 'Disbursement is payment. The scenario explicitly says no billing has been paid.',
              },
            },
            {
              prompt: 'A disbursement record shows a progress payment to the contractor. What does that prove by itself?',
              options: ['The full building is complete and usable', 'A verified obligation was paid to the extent supported by the payment', 'Students are already enrolled in the building', 'The project achieved better learning outcomes'],
              correct: 1,
              explanation: 'A progress payment is evidence of disbursement for supported work. Completion, use, and outcomes need separate physical and service records.',
              wrong: {
                0: 'Infrastructure contracts may use progress payments, so one payment does not by itself prove full completion.',
                2: 'Enrollment or use requires operational records beyond a contractor payment.',
                3: 'A financial transaction cannot by itself establish an education outcome.',
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
          An approved budget is the start of the evidence trail, not the delivered
          service. Trace appropriation → allotment → obligation → disbursement →
          delivery, and match each claim to the actor and record that can prove it.
        </KeyTakeaway>
      ),
    },
  ],
});