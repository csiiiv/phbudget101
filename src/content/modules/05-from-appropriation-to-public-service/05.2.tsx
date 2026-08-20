import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

const MILESTONES = [
  { name: 'Plan and prepare', actor: 'End-user and procurement units', evidence: 'Project Procurement Management Plan, Annual Procurement Plan, technical specifications or scope, and cost estimate', test: 'Is the need clear, funded, scheduled, and ready for the chosen procurement approach?' },
  { name: 'Invite competition', actor: 'Procuring entity and BAC', evidence: 'Procurement notice, bidding documents, clarifications, and amendments', test: 'Can qualified suppliers or contractors understand the requirement and submit responsive offers?' },
  { name: 'Receive and evaluate offers', actor: 'BAC and technical support', evidence: 'Bid opening, evaluation, and qualification records', test: 'Which offer meets the stated legal, technical, and financial requirements?' },
  { name: 'Award and sign', actor: 'Head of procuring entity, authorized officials, and winning bidder', evidence: 'Notice of award, approved contract, and notice to proceed where applicable', test: 'Has a valid contract committed government and the supplier or contractor?' },
  { name: 'Implement and manage', actor: 'Contractor or supplier and contract-management team', evidence: 'Work program, progress records, inspections, change records, and performance reports', test: 'Is the contracted output being produced to the agreed quality, scope, and schedule?' },
  { name: 'Accept and pay', actor: 'End-user, inspectors, and finance function', evidence: 'Inspection and acceptance documents, billing support, and disbursement records', test: 'Was compliant work delivered and were payment conditions satisfied?' },
] as const;

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'Why can “funds released” still mean no construction?',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Available budget authority does not select a contractor, settle the
            design, test offers, or manage construction. Government must first buy
            the work through a lawful <Term id="procurement" /> process.
          </p>
          <p>
            That process protects competition, transparency, accountability, and
            value for money. It also creates a sequence of readiness checks and
            decisions that cannot be reduced to “release funds, then build.”
          </p>
        </>
      ),
    },
    {
      id: 'long-middle',
      title: 'Procurement spans commitment and delivery',
      shortTitle: 'Long middle',
      type: 'concept',
      content: (
        <>
          <p>
            Procurement begins with planning before a contract exists. Solicitation
            and evaluation identify a suitable offer. Award and contract signing
            create the commitment to pay, while contract implementation turns that
            commitment into goods, works, or services that can be inspected and
            accepted.
          </p>
          <p>
            This is why procurement sits across several links of the expenditure
            chain rather than at one instant. Planning prepares the purchase;
            award creates an <Term id="obligation" /> when the contract validly
            binds government; implementation moves toward delivery; accepted work
            supports <Term id="disbursement">payment</Term> under the contract.
          </p>
          <p>
            Competitive bidding is one procurement mode, not a synonym for the
            entire system. The New Government Procurement Act provides multiple
            fit-for-purpose modes, while preserving governing principles and
            documentation requirements.
          </p>
        </>
      ),
    },
    {
      id: 'readiness',
      title: 'Good procurement starts before posting',
      shortTitle: 'Readiness',
      type: 'concept',
      content: (
        <>
          <p>
            An <Term id="annual-procurement-plan" expand /> organizes the
            procuring entity&apos;s planned purchases. For each project, the agency
            also needs a clear scope or specifications, schedule, procurement
            approach, and an <Term id="approved-budget-contract" expand /> that
            sets the approved ceiling for the procurement.
          </p>
          <p>
            Weak preparation moves problems downstream. An unclear site, incomplete
            design, unrealistic schedule, or vague specification can trigger
            clarifications, failed competition, redesign, or contract changes.
            Time spent testing readiness is therefore part of implementation, not
            proof that nothing is happening.
          </p>
          <p>
            The <Term id="bids-awards-committee" expand /> manages key procurement
            proceedings, but end-users, technical staff, the head of the procuring
            entity, contract managers, inspectors, and finance personnel have
            distinct responsibilities across the full process.
          </p>
        </>
      ),
    },
    {
      id: 'milestone-strip',
      title: 'Static milestone strip: the school-building procurement',
      shortTitle: 'Milestones',
      type: 'interactive',
      content: (
        <>
          <p>
            <strong>Illustrative example. Details are simplified for clarity.</strong>{' '}
            This static strip extends the school-building storyboard. It uses no
            amount or invented day count; the applicable law, procurement mode,
            project complexity, and document quality affect actual timing.
          </p>
          <div className="not-prose my-8 space-y-3" aria-label="School-building procurement milestone strip">
            {MILESTONES.map((milestone, index) => (
              <article key={milestone.name} className="grid gap-3 rounded-lg border bg-card p-5 md:grid-cols-[auto_1fr_1fr]">
                <div className="flex items-start gap-3 md:col-span-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground" aria-hidden="true">{index + 1}</span>
                  <div><h3 className="font-semibold">{milestone.name}</h3><p className="mt-1 text-sm font-medium text-primary">{milestone.test}</p></div>
                </div>
                <div className="md:col-start-2"><p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Main actors</p><p className="mt-1 text-sm leading-relaxed">{milestone.actor}</p></div>
                <div><p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Paper trail</p><p className="mt-1 text-sm leading-relaxed">{milestone.evidence}</p></div>
              </article>
            ))}
          </div>
          <p>
            The strip is sequential, but real projects can loop. A failed
            procurement may require revised documents and a new solicitation.
            Contract implementation may uncover conditions that need an authorized
            response. Each loop consumes time while the budget&apos;s legal validity
            period continues to run.
          </p>
          <p>
            Procurement planning can begin early, but solicitation, award,
            obligation, implementation, and payment must respect the applicable
            authority and deadlines. Do not apply one universal deadline from
            memory: check the GAA, special provisions, DBM release rules, approved
            procurement schedule, and governing procurement rules.
          </p>
          <p className="text-sm text-muted-foreground">
            Source note: Government Procurement Policy Board—Technical Support
            Office materials on the{' '}
            <a href="https://www.gppb.gov.ph/new-government-procurement-act-or-republic-act-no-12009/">New Government Procurement Act</a>, the{' '}
            <a href="https://www.gppb.gov.ph/exciting-announcement-issuance-and-publication-of-the-irr-for-the-new-government-procurement-act/">GPPB-approved implementing rules</a>, and{' '}
            <a href="https://www.gppb.gov.ph/public-advisory-no-09-2026/">Public Advisory No. 09-2026</a> identifying the controlling IRR version.
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
          title="Put procurement milestones in order"
          moduleId="mod-05"
          lessonId="05.2"
          items={[
            {
              prompt: 'Which sequence best describes a typical school-building procurement at a high level?',
              options: [
                'Plan and prepare → invite competition → evaluate offers → award and sign → implement → accept and pay',
                'Award and sign → plan and prepare → invite competition → accept and pay → implement',
                'Invite competition → start construction → prepare specifications → evaluate offers → sign',
                'Pay contractor → evaluate offers → plan procurement → inspect completed work',
              ],
              correct: 0,
              explanation: 'Clear planning precedes solicitation; evaluation precedes award; contract implementation precedes final acceptance and supported payment.',
              wrong: {
                1: 'A procuring entity cannot validly award first and define the requirement afterward.',
                2: 'Specifications and readiness belong before solicitation and construction cannot start before a valid award and contract authority.',
                3: 'Payment must be supported by a valid contract, delivery or progress evidence, and the applicable controls.',
              },
            },
            {
              prompt: 'The budget authority is available, but the school site and technical specifications are incomplete. What is the fairest reading?',
              options: [
                'Construction should start immediately because funds exist',
                'The project has a procurement-readiness problem that should be resolved before solicitation',
                'The contractor is already obligated to build',
                'Payment should be released to save time',
              ],
              correct: 1,
              explanation: 'Available authority is necessary but not sufficient. Site and specification readiness affect competition, contract clarity, and implementability.',
              wrong: {
                0: 'Starting without a ready site and clear requirement transfers unresolved risks into procurement and construction.',
                2: 'No contractor is bound before a valid award and contract.',
                3: 'Payment requires a valid obligation and supported delivery or progress; it cannot substitute for readiness.',
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
          Procurement is the long middle because government must define the need,
          invite and evaluate offers, award a valid contract, manage performance,
          and verify delivery before payment. Available funds start the clock; they
          do not replace readiness, competition, or contract management.
        </KeyTakeaway>
      ),
    },
  ],
});