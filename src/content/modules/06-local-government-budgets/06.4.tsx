import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

const PARTICIPATION_POINTS = [
  {
    stage: 'Planning',
    route: 'Local development council and sector committees',
    action:
      'Bring evidence about needs, compare priorities, and ask that proposals enter the development and investment plans.',
  },
  {
    stage: 'Preparation',
    route: 'Executive consultations and budget-preparation activities',
    action:
      'Check whether planned priorities have a responsible office, target, schedule, and proposed funding.',
  },
  {
    stage: 'Authorization',
    route: 'Sanggunian deliberations and hearings when opened',
    action:
      'Submit a concise position, ask about changes, and trace whether the item remains in the appropriation ordinance.',
  },
  {
    stage: 'Execution',
    route: 'Implementing offices and relevant local special bodies',
    action:
      'Monitor procurement, staffing, service availability, and physical progress against the authorized plan.',
  },
  {
    stage: 'Accountability',
    route: 'Reports, public meetings, complaints, and audit follow-up',
    action:
      'Compare spending and outputs with commitments, document gaps, and feed lessons into the next planning round.',
  },
] as const;

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'Where can you plug in locally?',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <p className="text-lg text-muted-foreground">
          The useful question is not only whether citizens can participate. Ask
          which body is handling the issue, what decision is still open, and when
          that body will act.
        </p>
      ),
    },
    {
      id: 'bodies',
      title: 'Choose the body that matches the issue',
      shortTitle: 'Bodies',
      type: 'concept',
      content: (
        <>
          <p>
            A <Term id="local-development-council" expand /> helps formulate
            local development plans and investment priorities. Its sectoral
            committees can provide a more focused route for evidence on health,
            livelihoods, infrastructure, or other local concerns.
          </p>
          <p>
            A <Term id="local-special-body" expand /> has a defined sector or
            governance function. Examples include local school boards,{' '}
            <Term id="local-health-board" expand />, local peace and order
            councils, and local development councils. Their memberships and
            powers differ, so a seat in one body does not create authority over
            every local decision.
          </p>
          <p>
            <Term id="cso-accreditation" expand /> is the formal process used
            for civil society organizations seeking eligibility for selection to
            local special bodies under current DILG guidance. Accreditation and
            selection are separate steps. An organization can still use public
            consultations, hearings, records requests, monitoring, and written
            submissions where applicable; not every participation route requires
            a formal seat.
          </p>
        </>
      ),
    },
    {
      id: 'timing-map',
      title: 'Match the route to the budget stage',
      shortTitle: 'Timing',
      type: 'interactive',
      content: (
        <>
          <div className="not-prose my-8 space-y-3">
            {PARTICIPATION_POINTS.map((point, index) => (
              <div
                key={point.stage}
                className="grid gap-3 rounded-lg border bg-card p-5 sm:grid-cols-[7rem_1fr]"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Stage {index + 1}
                  </p>
                  <h3 className="mt-1 font-semibold">{point.stage}</h3>
                </div>
                <div>
                  <p className="font-medium">{point.route}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {point.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p>
            Timing changes the useful request. Early participation can shape
            priorities. During authorization, the question is whether a proposal
            survives deliberation. During execution and accountability, the
            evidence shifts to releases, contracts, staffing, outputs, and
            service experience.
          </p>
          <p className="text-sm text-muted-foreground">
            Deeper reading:{' '}
            <a href="https://lawphil.net/statutes/repacts/ra1991/ra_7160_1991.html">
              Local Government Code provisions on local development councils,
              school boards, and health boards
            </a>
            ;{' '}
            <a href="https://www.dbm.gov.ph/index.php/dbm-issuances/local-budget-circulars">
              DBM Handbook on CSO Participation in the Local Budget Process
            </a>
            ; and current DILG Memorandum Circular No. 2025-060 on accreditation
            and selection to local special bodies.
          </p>
        </>
      ),
    },
    {
      id: 'health-response',
      title: 'Illustrative case: from listening to monitoring',
      shortTitle: 'Health case',
      type: 'example',
      content: (
        <>
          <p>
            <strong>
              Illustrative composite. The sequence combines common participation
              methods for teaching; it does not describe a named city,
              organization, or actual set of results.
            </strong>
          </p>
          <ol>
            <li>
              <strong>Listen.</strong> Residents and health workers document
              clinic closures, medicine stockouts, and travel barriers across
              several neighborhoods.
            </li>
            <li>
              <strong>Define the problem.</strong> The findings become a short
              people&apos;s agenda that separates immediate operating gaps from
              longer-term facility needs.
            </li>
            <li>
              <strong>Choose the routes.</strong> Community representatives
              bring planning priorities to the local development council and
              technical health concerns to the local health board.
            </li>
            <li>
              <strong>Package the request.</strong> Each proposal names the
              responsible office, requested decision, possible budget source,
              delivery target, and indicator.
            </li>
            <li>
              <strong>Stay through execution.</strong> Accredited
              representatives join the appropriate local task group while other
              residents monitor publicly available procurement and service
              reports.
            </li>
            <li>
              <strong>Measure and report.</strong> Follow-up tracks clinic days
              open, medicine-stockout reports, referral times, and households
              reached, then returns the evidence to the next planning cycle.
            </li>
          </ol>
          <p>
            The lesson is the chain, not the label of a group: listening creates
            evidence; the correct body creates a decision route; specific
            indicators make later accountability possible.
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
          title="Choose the route and timing"
          moduleId="mod-06"
          lessonId="06.4"
          items={[
            {
              prompt:
                'Residents want a health-service need considered before annual priorities and investments are fixed. Which route is most direct?',
              options: [
                'Raise evidence through the local development council or its relevant sector committee',
                'Wait until every contract is completed',
                'Ask the audit team to write the development plan',
                'Treat accreditation as automatic appointment to every board',
              ],
              correct: 0,
              explanation:
                'The local development council and relevant sector work are early routes for connecting evidence to plans and investment priorities.',
              wrong: {
                1: 'Waiting until completion removes the chance to shape the priority before budgeting.',
                2: 'Audit examines accountability; it does not replace local development planning.',
                3: 'Accreditation creates eligibility under the rules, not automatic selection or universal membership.',
              },
            },
            {
              prompt:
                'A funded clinic program is already being implemented. What evidence is now most useful?',
              options: [
                'Procurement, staffing, service-availability, and output information',
                'Only the original campaign message',
                'A new national tax law',
                'Whether every participant holds a formal board seat',
              ],
              correct: 0,
              explanation:
                'During execution, evidence should show whether inputs move and services arrive as authorized.',
              wrong: {
                1: 'The original message does not show whether implementation is working.',
                2: 'A national tax-law change is not the direct evidence needed to monitor this local program.',
                3: 'Monitoring can use public records and service evidence even when participants do not hold formal seats.',
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
          Local participation works when you match the issue to the body, the
          request to the decision, and the evidence to the budget stage. A
          formal seat can help, but consultations, submissions, records,
          monitoring, and follow-up are also important routes.
        </KeyTakeaway>
      ),
    },
  ],
});
