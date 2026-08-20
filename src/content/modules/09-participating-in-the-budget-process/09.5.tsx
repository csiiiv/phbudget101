import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

const COALITION_PARTS = [
  [
    'Shared purpose',
    'The specific budget result members agree to pursue together.',
  ],
  [
    'Core group',
    'Trusted representatives who provide direction and keep decisions connected to affected sectors.',
  ],
  [
    'Secretariat',
    'The coordinating function that schedules work, records decisions, circulates materials, and follows up.',
  ],
  [
    'Working roles',
    'Members contribute research, community knowledge, policy analysis, communications, or engagement.',
  ],
  [
    'Shared metrics',
    'Common signs of progress, from decision milestones to implementation and service results.',
  ],
  [
    'Care and accountability',
    'Agreed ways to share credit, handle disagreement, protect participants, and review commitments.',
  ],
] as const;

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'Why work with others?',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <p className="text-lg text-muted-foreground">
          Budget work needs community knowledge, technical analysis,
          communication, and persistence. How can different contributors act as
          one without losing their distinct roles?
        </p>
      ),
    },
    {
      id: 'why-coalitions',
      title: 'Combine knowledge and reach',
      shortTitle: 'Why combine',
      type: 'concept',
      content: (
        <>
          <p>
            A <Term id="coalition" /> lets people and groups pursue a shared
            objective while contributing different knowledge, relationships, and
            capabilities. Affected communities can define needs; researchers can
            test evidence; communicators can make findings understandable; and
            members familiar with institutions can help time engagement.
          </p>
          <p>
            Working together does not automatically make a claim correct or
            representative. A coalition still needs transparent decisions,
            credible evidence, clear roles, and ways for directly affected
            people to shape its agenda.
          </p>
        </>
      ),
    },
    {
      id: 'anatomy',
      title: 'Anatomy of a working coalition',
      shortTitle: 'Anatomy',
      type: 'concept',
      content: (
        <>
          <p>
            This static diagram shows six connected functions. A coalition may
            use different titles, but leaving a function unowned creates a
            predictable gap.
          </p>
          <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
            {COALITION_PARTS.map(([part, body], index) => (
              <section key={part} className="rounded-lg border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Part {index + 1}
                </p>
                <h3 className="mt-1 font-semibold">{part}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </section>
            ))}
          </div>
        </>
      ),
    },
    {
      id: 'engage-and-message',
      title: 'Engage with a decision-ready message',
      shortTitle: 'Engage',
      type: 'concept',
      content: (
        <>
          <p>
            Engagement should be lawful, transparent, and directed to the
            institution that owns the decision. Prepare a concise message that
            states the problem, evidence, recommended action, responsible
            institution, timing, and desired decision. Tailor the explanation to
            the audience without changing the underlying facts.
          </p>
          <p>
            Record meetings and commitments. Note what evidence was submitted,
            who agreed to do what, and when the next decision point occurs.
            Access to a meeting is not the outcome; the budget or implementation
            decision is.
          </p>
        </>
      ),
    },
    {
      id: 'monitor-and-check',
      title: 'Stay through implementation',
      shortTitle: 'Monitor & check',
      type: 'knowledge-check',
      content: (
        <>
          <p>
            A coalition's work continues after approval. Compare the enacted
            decision with the proposal, then follow releases, procurement,
            delivery, and results using the same shared metrics. Report both
            progress and shortfalls, distinguish documented facts from
            interpretation, and feed lessons into the next budget cycle.
          </p>
          <KnowledgeCheck
            title="Assign the coalition role"
            moduleId="mod-09"
            lessonId="09.5"
            items={[
              {
                prompt:
                  'Members agree on a goal, but meetings lapse, notes are lost, and nobody follows up on deadlines. Which function is most clearly missing?',
                options: [
                  'Secretariat coordination',
                  'A new budget figure',
                  'Audit authority',
                  'A different campaign name',
                ],
                correct: 0,
                explanation:
                  'The secretariat function keeps schedules, records, materials, and follow-up moving. It supports rather than replaces collective leadership.',
                wrong: {
                  1: 'The failure is coordination, not a missing amount.',
                  2: 'A coalition does not gain government audit authority by organizing.',
                  3: 'Renaming does not assign the unowned coordination work.',
                },
              },
              {
                prompt:
                  'A budget item is approved. Which coalition response best supports accountability?',
                options: [
                  'Declare success and stop tracking it.',
                  'Change the metrics so every result looks successful.',
                  "Track implementation and service results against the coalition's shared metrics, then report evidence and gaps.",
                  'Assume the approved amount was fully delivered.',
                ],
                correct: 2,
                explanation:
                  'Approval is one milestone. Shared metrics allow members to follow implementation and test whether the decision produces the intended service result.',
                wrong: {
                  0: 'Approval does not guarantee release, implementation, or delivery.',
                  1: 'Metrics should provide a stable basis for learning, not be changed to avoid unfavorable findings.',
                  3: 'Authorization and delivery are different stages and must be checked separately.',
                },
              },
            ]}
          />
        </>
      ),
    },
    {
      id: 'takeaway',
      title: 'Key takeaway',
      shortTitle: 'Takeaway',
      type: 'takeaway',
      content: (
        <KeyTakeaway>
          Coalitions amplify budget participation when they share a specific
          purpose, give affected people a real voice, assign coordination and
          specialist roles, use common evidence and metrics, communicate a clear
          decision, and monitor what happens after approval.
        </KeyTakeaway>
      ),
    },
  ],
});
