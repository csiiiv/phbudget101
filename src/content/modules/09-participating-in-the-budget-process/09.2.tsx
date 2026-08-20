import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

const LISTENING_STEPS = [
  [
    'Start with humility',
    "Reflect on your position and learn the community's history before proposing an answer.",
  ],
  [
    'Ask trusted leaders for advice',
    'Choose a suitable sequence and format, including whether some people should meet separately.',
  ],
  [
    'Invite people directly affected',
    'Include different sectors and ask what accessibility, communication, or transport support they need.',
  ],
  [
    'Create a safe session',
    'Use a trusted community facilitator so participants can share experiences without fear of retribution.',
  ],
  [
    'Ask experience-to-action questions',
    'Ask what people experienced, what helped, and how the group can work together to improve the situation.',
  ],
  [
    'Report the next steps',
    'Tell participants what will happen to their input and keep them informed after the session.',
  ],
] as const;

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'Whose problem are you defining?',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <p className="text-lg text-muted-foreground">
          Before writing a budget proposal, how do you learn whether it solves
          the problem that people actually experience?
        </p>
      ),
    },
    {
      id: 'listen-first',
      title: 'Listen before prescribing',
      shortTitle: 'Listen first',
      type: 'concept',
      content: (
        <>
          <p>
            Community listening brings people directly affected by an issue into
            defining, clarifying, and framing it. These{' '}
            <Term id="problem-owner">problem owners</Term> have first-hand
            knowledge of the service gap and a direct stake in what changes.
          </p>
          <p>
            The goal is not merely to collect complaints. A good process builds
            a shared understanding of the problem, identifies possible
            solutions, and gives affected people room to represent themselves.
            It turns anger into contribution without dismissing the experience
            behind that anger.
          </p>
        </>
      ),
    },
    {
      id: 'six-steps',
      title: 'The six-step listening method',
      shortTitle: 'Six steps',
      type: 'concept',
      content: (
        <>
          <p>
            Use this sequence as a static planning guide. Prepare for a
            respectful session before asking participants to share, then close
            the loop afterward.
          </p>
          <ol className="not-prose my-8 grid gap-4 md:grid-cols-2">
            {LISTENING_STEPS.map(([title, body], index) => (
              <li key={title} className="rounded-lg border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Step {index + 1}
                </p>
                <h3 className="mt-1 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </>
      ),
    },
    {
      id: 'health-example',
      title: 'A city health-emergency listening exercise',
      shortTitle: 'Example',
      type: 'example',
      content: (
        <>
          <p>
            <strong>Illustrative composite:</strong> During a city health
            emergency, residents, health workers, small businesses, and service
            providers experience different parts of the same response. A civic
            group does not begin by drafting a funding request. It holds several
            listening sessions, with a trusted local facilitator, and asks:
          </p>
          <ul>
            <li>What has been your experience of the city response?</li>
            <li>What is working and should be protected?</li>
            <li>
              How can the community and city government improve it together?
            </li>
          </ul>
          <p>
            The recurring concerns become a people-centered agenda: defined
            service gaps, proposed improvements, responsible institutions, and
            evidence the city can examine. The agenda is stronger than a list of
            demands because affected people helped frame both the problem and
            possible response.
          </p>
        </>
      ),
    },
    {
      id: 'practice-and-check',
      title: 'Practice, then check your understanding',
      shortTitle: 'Practice & check',
      type: 'knowledge-check',
      content: (
        <>
          <div className="not-prose mb-8 rounded-lg border bg-muted/40 p-5">
            <h3 className="font-semibold">Draft three listening questions</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Choose a public service. Write one question about people's
              experience, one about what currently helps, and one about how
              people and government could improve the service together. Keep
              each question open-ended and neutral.
            </p>
          </div>
          <KnowledgeCheck
            title="Plan a responsible listening exercise"
            moduleId="mod-09"
            lessonId="09.2"
            items={[
              {
                prompt:
                  'A team has already chosen its preferred solution. It invites residents only to rank three versions of that solution. What is the main weakness?',
                options: [
                  'The session is too early in the budget cycle.',
                  'The team is testing its answer instead of letting affected people help define the problem.',
                  'Residents should never discuss possible solutions.',
                  'Only government officials may facilitate listening sessions.',
                ],
                correct: 1,
                explanation:
                  'Community listening begins with experience and problem definition. A preselected answer can hide needs or alternatives the team has not considered.',
                wrong: {
                  0: 'The weakness is in the method, not necessarily its timing.',
                  2: 'Participants can discuss solutions after clarifying the problem.',
                  3: 'The method recommends a trusted community facilitator, not an officials-only rule.',
                },
              },
              {
                prompt:
                  'After a listening session, organizers turn the notes into a proposal but never contact participants again. Which step did they miss?',
                options: [
                  'Reflect on their position.',
                  'Invite people directly affected.',
                  'Ask about experience.',
                  'Update the community about next steps.',
                ],
                correct: 3,
                explanation:
                  'Closing the loop means explaining what will happen to the input and keeping participants informed.',
                wrong: {
                  0: 'Reflection happens before the session.',
                  1: 'Participants attended, so invitation is not the missing step.',
                  2: 'The notes show that questions were asked; follow-up is missing.',
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
          Start budget participation by listening to people directly affected.
          Prepare respectfully, ask open questions about experience and
          improvement, build shared problem framing, and report what happens
          next.
        </KeyTakeaway>
      ),
    },
  ],
});
