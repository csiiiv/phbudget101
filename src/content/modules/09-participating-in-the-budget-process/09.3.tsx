import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

const TARGET_MAP = [
  [
    'National program proposal',
    'Implementing agency and executive budget authorities',
    'Preparation',
    'Change what enters the executive proposal',
  ],
  [
    'National appropriation',
    'House and Senate',
    'Legislation',
    'Change what the annual appropriations law authorizes',
  ],
  [
    'National program delivery',
    'Implementing agency',
    'Execution',
    'Resolve release, procurement, or delivery issues',
  ],
  [
    'Local service or project',
    'Local chief executive and responsible local office',
    'Planning, preparation, or execution',
    'Include, design, or implement the local response',
  ],
  [
    'Local budget authorization',
    'Sanggunian',
    'Authorization',
    'Approve or amend the local appropriation ordinance',
  ],
  [
    'Use of public funds',
    'Implementing office, auditors, and legislative oversight bodies',
    'Accountability',
    'Explain records, findings, and corrective action',
  ],
] as const;

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'Who can actually act?',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <p className="text-lg text-muted-foreground">
          A strong proposal sent to the wrong office is still unlikely to move.
          Who holds the decision you need?
        </p>
      ),
    },
    {
      id: 'define-decision',
      title: 'Name the decision before the person',
      shortTitle: 'The decision',
      type: 'concept',
      content: (
        <>
          <p>
            Start by writing the desired decision as a verb: include a program
            in a proposal, authorize an <Term id="appropriation" />, release
            funds, complete procurement, publish records, or correct a delivery
            problem. The institution with legal or administrative power over
            that action is the primary target.
          </p>
          <p>
            Then separate the <strong>decision-maker</strong>, who can approve
            or carry out the action, from an <strong>influencer</strong>, who
            can provide evidence, advice, public attention, or access. An
            influencer may help, but cannot substitute for the institution that
            owns the decision.
          </p>
        </>
      ),
    },
    {
      id: 'three-filters',
      title: 'Use three filters',
      shortTitle: 'Three filters',
      type: 'concept',
      content: (
        <ol>
          <li>
            <strong>Level:</strong> Is the concern national or local?
          </li>
          <li>
            <strong>Function:</strong> Is the needed action executive,
            legislative, implementation, or oversight?
          </li>
          <li>
            <strong>Timing:</strong> Which budget phase currently holds the
            decision?
          </li>
        </ol>
      ),
    },
    {
      id: 'mapping-grid',
      title: 'Static institution-mapping grid',
      shortTitle: 'Target map',
      type: 'interactive',
      content: (
        <>
          <p>
            Use this grid when the enhanced budget-cycle widget is unavailable.
            Read across from the concern to the institution, timing, and
            requested action.
          </p>
          <div className="not-prose my-8 overflow-x-auto rounded-lg border">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3">Concern</th>
                  <th className="p-3">Start with</th>
                  <th className="p-3">Timing</th>
                  <th className="p-3">Ask</th>
                </tr>
              </thead>
              <tbody>
                {TARGET_MAP.map(([concern, target, timing, ask]) => (
                  <tr key={concern} className="border-t align-top">
                    <th className="p-3 font-medium">{concern}</th>
                    <td className="p-3">{target}</td>
                    <td className="p-3">{timing}</td>
                    <td className="p-3">{ask}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            The grid gives a starting point, not a mailing list. Confirm the
            office's current mandate, process, submission rules, and calendar
            before engaging.
          </p>
        </>
      ),
    },
    {
      id: 'check',
      title: 'Route the concern',
      shortTitle: 'Check',
      type: 'knowledge-check',
      content: (
        <KnowledgeCheck
          title="Choose the institution that owns the decision"
          moduleId="mod-09"
          lessonId="09.3"
          items={[
            {
              prompt:
                'A city budget proposal includes a new health-center project, but residents want the amount changed before the local appropriation ordinance is approved. Who owns the authorization decision?',
              options: [
                'The sanggunian',
                'The Commission on Audit',
                'A national implementing agency',
                'The project contractor',
              ],
              correct: 0,
              explanation:
                'The sanggunian authorizes the local budget through the appropriation ordinance. The local executive proposes and implements, but the legislative body owns authorization.',
              wrong: {
                1: 'Auditors review the use of funds; they do not enact the local appropriation ordinance.',
                2: 'This is a city authorization decision, not a national agency proposal.',
                3: 'A contractor does not authorize public appropriations.',
              },
            },
            {
              prompt:
                'A national program is already enacted, but procurement has not begun. Which institution should receive the first implementation question?',
              options: [
                'The implementing agency',
                'The Senate acting alone',
                'The sanggunian',
                'A private commentator',
              ],
              correct: 0,
              explanation:
                'The implementing agency owns procurement and delivery. Ask it what milestone is delayed and what action is required.',
              wrong: {
                1: 'Congress provides oversight, but it does not ordinarily run an agency procurement.',
                2: 'A sanggunian authorizes a local budget; this is a national program.',
                3: 'A commentator may influence attention but does not own implementation.',
              },
            },
            {
              prompt:
                'A group wants a new national program included before the executive budget proposal goes to Congress. Where should engagement start?',
              options: [
                'The responsible national agency during preparation',
                'An audit team after year-end',
                'A local contractor',
                'The sanggunian',
              ],
              correct: 0,
              explanation:
                'During preparation, the responsible agency develops its proposal within the executive process. That is the earliest matching entry point.',
              wrong: {
                1: 'Year-end audit occurs after the proposal and enactment decisions.',
                2: 'A contractor neither writes nor authorizes the national proposal.',
                3: 'A sanggunian handles local legislative decisions.',
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
          Define the exact decision, then match its level, function, and timing
          to the institution that can act. Treat influencers as support, not as
          substitutes for the decision-maker.
        </KeyTakeaway>
      ),
    },
  ],
});
