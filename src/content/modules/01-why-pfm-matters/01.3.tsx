import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { TraceConcern } from '@/components/interactives/TraceConcern';

export default function Lesson0103() {
  return (
    <>
      <p className="text-lg text-muted-foreground">
        What happens between &quot;we need a health center&quot; and a health
        center operating?
      </p>

      <h2>The chain from concern to expenditure</h2>
      <p>
        A public concern becomes a service only after passing through every
        link in a chain. Break any single link, and the service does not
        arrive:
      </p>
      <ol>
        <li>
          <strong>Need</strong> — a community experiences and names a problem.
        </li>
        <li>
          <strong>Policy response</strong> — government adopts a program that
          answers the need.
        </li>
        <li>
          <strong>Budget line</strong> — the program gets an allocation in a
          budget document, which the legislature enacts.
        </li>
        <li>
          <strong>Implementation</strong> — funds are released, goods and works
          are procured, staff are hired.
        </li>
        <li>
          <strong>Service</strong> — the output operates and people are served.
        </li>
      </ol>
      <p>
        Each link has its own actors, documents, and timeline — which is why
        the chain can take years from end to end, and why a delay at any link
        delays everything downstream of it.
      </p>

      <h2>Announced ≠ funded ≠ implemented</h2>
      <p>
        A program can be announced and never funded. It can be funded and never
        implemented. It can be implemented and still fail to deliver the
        service it promised. Each gap is a different accountability question,
        asked of a different institution:
      </p>
      <ul>
        <li>
          <strong>Announced but not funded</strong> → ask the budget office and
          the legislature why no allocation survived.
        </li>
        <li>
          <strong>Funded but not implemented</strong> → ask the implementing
          agency what blocked procurement or hiring.
        </li>
        <li>
          <strong>Implemented but not serving</strong> → ask the operators and
          the auditors whether the output works and reaches people.
        </li>
      </ul>
      <p>
        Learning to ask <em>&quot;which link is broken?&quot;</em> before
        assigning blame is one of the most useful habits this course builds.
      </p>

      <h2>Where citizens plug in</h2>
      <p>
        The chain is not a spectator sport. At the need stage, citizens and
        community organizations name problems and document them. During
        planning and budget preparation, they can propose programs and budget
        items. During legislation, Congress holds hearings where the public can
        submit positions. During implementation, citizens&apos; groups monitor
        procurements and delivery. At the accountability stage, they file
        requests, join audits, and use the records the trail leaves behind.
        Module 9 covers these entry points in detail — for now, note that{' '}
        <strong>every link has a door</strong>.
      </p>

      <h2>Try it yourself</h2>
      <p>
        Follow one concern through the whole chain. Watch what changes at each
        step — and notice how the money only enters at link three:
      </p>

      <TraceConcern />

      <KnowledgeCheck
        title="Find the broken link"
        items={[
          {
            prompt:
              'A farm-to-market road was fully funded in this year\'s appropriations. Nine months in, no contractor has been hired and no bid has been posted. The road does not exist. Which link is broken?',
            options: [
              'Need — the community never asked for the road.',
              'Policy response — no program was adopted.',
              'Budget line — the project was never funded.',
              'Implementation — the funds exist but procurement never started.',
            ],
            correct: 3,
            explanation:
              'The project cleared need, policy, and appropriation. It stalled at implementation: an agency-side procurement failure, not a funding decision.',
          },
          {
            prompt:
              'A city announces a scholarship program with great ceremony. Months later, residents find no scholarship line anywhere in the enacted city budget, and no implementing guidelines exist. Which link is broken?',
            options: [
              'Budget line — the program was announced but never funded or enacted.',
              'Service — scholarships were delivered but late.',
              'Implementation — bids were delayed.',
              'None — announcement is the same as funding.',
            ],
            correct: 0,
            explanation:
              'Announcing is not appropriating. Without a budget line (and guidelines), the program is an intention, not an operating program.',
          },
        ]}
      />

      <KeyTakeaway>
        Concerns become services only through a five-link chain: need → policy
        response → budget line → implementation → service.{' '}
        <strong>Announced ≠ funded ≠ implemented</strong> — and every link has
        a door where citizens can engage.
      </KeyTakeaway>
    </>
  );
}
