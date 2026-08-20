import { Figure } from '@/components/content/Figure';
import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { defineLesson } from '@/lib/sections';

const PARTICIPATION_POINTS = [
  {
    phase: 'Preparation',
    action:
      'Document a need and submit a proposal before the executive draft is settled.',
    result: 'A concern may enter the proposal that goes to the legislature.',
  },
  {
    phase: 'Legislation',
    action:
      'Send evidence or testimony while lawmakers examine and amend the proposal.',
    result: 'A proposed item may be questioned, changed, retained, or removed.',
  },
  {
    phase: 'Execution',
    action:
      'Compare releases and implementation with what the enacted budget authorized.',
    result:
      'Delays and delivery problems can be identified while action is still possible.',
  },
  {
    phase: 'Accountability',
    action:
      'Compare spending and results, then feed the findings into the next cycle.',
    result:
      'Evidence from delivery can improve the next plan and budget proposal.',
  },
];

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'Does participation change anything?',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <p className="text-lg text-muted-foreground">
          The budget process is technical, but its choices affect public
          services. Where can a citizen&apos;s evidence make a useful
          difference?
        </p>
      ),
    },
    {
      id: 'why-participate',
      title: 'Participation improves the questions',
      shortTitle: 'Why engage',
      type: 'concept',
      content: (
        <>
          <p>
            Participation connects budget decisions with information held
            outside government: which needs are urgent, who is being missed, and
            whether a funded service is working on the ground. It also lets
            people examine public choices and ask decision-makers to explain
            them.
          </p>
          <p>
            Participation does not mean that every request must be funded.
            Public money is limited, institutions have different powers, and
            proposals compete with other needs. Useful participation makes a
            specific claim, supports it with evidence, directs it to an
            institution that can act, and arrives while the relevant decision is
            still open.
          </p>
        </>
      ),
    },
    {
      id: 'cycle',
      title: 'A door in every phase',
      shortTitle: 'Across the cycle',
      type: 'concept',
      content: (
        <>
          <p>
            The four budget phases create different participation opportunities.
            The same concern must be framed differently as the decision changes.
          </p>
          <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
            {PARTICIPATION_POINTS.map((point, index) => (
              <section
                key={point.phase}
                className="rounded-lg border bg-card p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Phase {index + 1}
                </p>
                <h3 className="mt-1 font-semibold">{point.phase}</h3>
                <p className="mt-3 text-sm leading-relaxed">{point.action}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Possible shift:
                  </span>{' '}
                  {point.result}
                </p>
              </section>
            ))}
          </div>
          <p>
            This is a static engagement-outcomes strip: it remains usable when
            enhanced interactive features are unavailable.
          </p>
        </>
      ),
    },
    {
      id: 'transport-example',
      title: 'From an ask to an enacted amount',
      shortTitle: 'Example',
      type: 'example',
      content: (
        <>
          <p>
            Consider the active-transport example introduced in Module 04.
            During preparation for the 2022 national budget, a civil-society
            proposal asked for support for public-transport service contracting:
          </p>
          <Figure module="mod-04" id="mao-ask" />
          <p>The enacted budget contained a smaller amount for the program:</p>
          <Figure module="mod-04" id="mao-service-contracting-outcome" />
          <p>
            This does not prove that participation alone caused the enacted
            amount, and the outcome did not match the request. It does show the
            realistic unit of analysis: compare a documented ask with the later
            public decision, then examine what changed and continue monitoring
            delivery.
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
          title="Match the participation claim to the phase"
          moduleId="mod-09"
          lessonId="09.1"
          items={[
            {
              prompt:
                'Residents have documented an unmet transport need and want it considered before the executive sends its proposal to the legislature. Which phase is the best match?',
              options: [
                'Preparation',
                'Legislation',
                'Execution',
                'Accountability',
              ],
              correct: 0,
              explanation:
                'Preparation is when agencies and the executive assemble the proposal. Evidence submitted before that draft is settled can inform what is proposed.',
              wrong: {
                1: 'Legislation begins after the executive proposal is submitted. The residents want to act before that handoff.',
                2: 'Execution concerns carrying out an enacted budget, not assembling the first proposal.',
                3: 'Accountability examines spending and results after implementation; this concern is about entering the proposal.',
              },
            },
            {
              prompt:
                'A program has already been enacted. Community monitors compare its releases and actual service delivery with the authorized budget. Which phase is the best match?',
              options: [
                'Preparation',
                'Legislation',
                'Execution',
                'Revenue forecasting',
              ],
              correct: 2,
              explanation:
                'During execution, agencies release, spend, procure, and deliver. Monitoring can identify delays or gaps while implementation is under way.',
              wrong: {
                0: 'Preparation concerns the proposed budget before enactment; this program is already authorized.',
                1: 'Legislation decides what to authorize. The scenario asks what happens after authorization.',
                3: "Revenue forecasting estimates resources; it is not the phase for checking an enacted program's delivery.",
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
          Participation is most useful when it is specific, evidence-based,
          directed to an institution that can act, and timed to the right budget
          phase. It can shape questions and decisions, but it does not guarantee
          that a proposal will be adopted in full.
        </KeyTakeaway>
      ),
    },
  ],
});
