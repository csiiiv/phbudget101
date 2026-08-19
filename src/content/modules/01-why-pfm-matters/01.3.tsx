import { TraceConcern } from '@/components/interactives/TraceConcern';

export default function Lesson0103() {
  return (
    <>
      <p>
        What happens between &quot;we need a health center&quot; and a health
        center operating?
      </p>

      <h2>The chain from concern to expenditure</h2>
      <p>
        A public concern becomes a service only after passing through every
        link below. Break any link, and the service does not arrive:
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
          budget document.
        </li>
        <li>
          <strong>Implementation</strong> — funds are released, goods and works
          are procured.
        </li>
        <li>
          <strong>Service</strong> — the output operates and people are served.
        </li>
      </ol>

      <h2>Announced ≠ funded ≠ implemented</h2>
      <p>
        A program can be announced and never funded. It can be funded and never
        implemented. Each gap is a different accountability question — asked of
        different institutions. Learning to ask &quot;which link is
        broken?&quot; is one of the most useful skills this course teaches.
      </p>

      <h2>Try it yourself</h2>
      <p>Follow one concern through the whole chain:</p>

      <TraceConcern />
    </>
  );
}
