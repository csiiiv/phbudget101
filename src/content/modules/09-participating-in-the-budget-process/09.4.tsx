import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

const PLAN_FIELDS = [
  ['Issue', 'What specific public problem does the proposal address?'],
  ['Budget stage', 'Which decision is still open, and when will it be made?'],
  [
    'Target institution',
    'Which office or body has authority to make that decision?',
  ],
  [
    'Evidence',
    'What need, baseline, implementation record, and source support the case?',
  ],
  ['Message', 'What is the concise reason this option should be chosen?'],
  [
    'Desired decision',
    'What exactly should the decision-maker approve, change, publish, or implement?',
  ],
] as const;

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'Can the decision-maker say yes?',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <p className="text-lg text-muted-foreground">
          A concern may be valid but still incomplete as a proposal. What
          information would let an official make a responsible decision?
        </p>
      ),
    },
    {
      id: 'proposal',
      title: 'Move from concern to decision',
      shortTitle: 'Proposal',
      type: 'concept',
      content: (
        <>
          <p>
            An evidence-based budget proposal links a defined need to a feasible
            government action. It identifies the institution, budget stage,
            affected people, evidence, recommended option, implementation
            requirements, and desired decision.
          </p>
          <p>
            Evidence can include service data, budget and implementation
            records, community experience, and relevant rules. State what each
            source shows and what it does not. If an amount is only a teaching
            estimate, label it illustrative rather than presenting it as an
            enacted figure.
          </p>
        </>
      ),
    },
    {
      id: 'csw',
      title: 'The Completed Staff Work standard',
      shortTitle: 'CSW',
      type: 'concept',
      content: (
        <>
          <p>
            <Term id="completed-staff-work" expand /> means studying a problem
            and presenting a worked-out solution in a form that leaves the
            decision-maker with a clear choice to approve or disapprove. It does
            not mean hiding uncertainty or pretending only one option exists.
          </p>
          <ul>
            <li>
              <strong>Analyzed:</strong> the problem, options, costs, risks, and
              assumptions are examined.
            </li>
            <li>
              <strong>Coordinated:</strong> affected offices and people are
              consulted before the recommendation is presented.
            </li>
            <li>
              <strong>Actionable:</strong> the recommended decision, timing,
              responsible office, and next step are explicit.
            </li>
            <li>
              <strong>Decision-ready:</strong> the supporting document is
              concise, sourced, and prepared in usable form.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'worksheet',
      title: 'Build a one-page engagement plan',
      shortTitle: 'Worksheet',
      type: 'interactive',
      content: (
        <>
          <p>
            This static worksheet is the fallback for the engagement plan
            builder. Copy the six fields into a document and complete them in
            order.
          </p>
          <ol className="not-prose my-8 grid gap-4 md:grid-cols-2">
            {PLAN_FIELDS.map(([field, prompt], index) => (
              <li key={field} className="rounded-lg border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Field {index + 1}
                </p>
                <h3 className="mt-1 font-semibold">{field}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{prompt}</p>
                <div
                  className="mt-4 min-h-16 rounded border border-dashed bg-background"
                  aria-label={`Blank space for ${field}`}
                />
              </li>
            ))}
          </ol>
          <p>
            Before sharing the plan, add source links or document titles, name
            assumptions, and ask whether someone unfamiliar with the issue could
            identify the requested action.
          </p>
        </>
      ),
    },
    {
      id: 'example-and-check',
      title: 'Test a sectoral proposal',
      shortTitle: 'Example & check',
      type: 'knowledge-check',
      content: (
        <>
          <div className="not-prose mb-8 rounded-lg border bg-muted/40 p-5">
            <h3 className="font-semibold">Illustrative composite</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A regional service office receives reports of long travel times to
              a public service. A proposal defines the affected area, cites
              service and community evidence, compares delivery options,
              identifies the responsible office and budget stage, states
              implementation risks, and asks the authorized official to approve
              one option for inclusion in the next proposal. No peso amount is
              asserted until a sourced costing is available.
            </p>
          </div>
          <KnowledgeCheck
            title="Is the proposal decision-ready?"
            moduleId="mod-09"
            lessonId="09.4"
            items={[
              {
                prompt:
                  'A brief explains the problem in detail but ends with “Please do something.” What is the most important missing element?',
                options: [
                  'A clear desired decision',
                  'A longer history section',
                  'A campaign slogan',
                  'An invented budget amount',
                ],
                correct: 0,
                explanation:
                  'A decision-ready proposal states exactly what the authorized official should approve, change, publish, or implement.',
                wrong: {
                  1: 'More background does not replace a concrete ask.',
                  2: 'A slogan does not identify an authorized action.',
                  3: 'Amounts must be sourced or clearly illustrative, never invented.',
                },
              },
              {
                prompt:
                  'Which practice best meets the Completed Staff Work standard?',
                options: [
                  'Send the problem immediately and ask the official to design the solution.',
                  'Present one recommendation without disclosing assumptions or risks.',
                  'Analyze options, coordinate with affected parties, and present a sourced recommendation with a clear approval decision.',
                  'Wait until every uncertainty disappears before presenting anything.',
                ],
                correct: 2,
                explanation:
                  'Completed Staff Work reduces the unresolved burden on the decision-maker while preserving evidence, assumptions, risks, and a clear choice.',
                wrong: {
                  0: 'That shifts the work of formulating the action to the decision-maker.',
                  1: 'Decision-ready work makes assumptions and risks visible.',
                  3: 'Responsible decisions often retain uncertainty; the task is to explain and manage it.',
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
          A persuasive budget proposal is not only a request. It defines the
          problem, supports a feasible option with evidence, targets the right
          institution and stage, and presents a clear decision that can be
          approved or disapproved.
        </KeyTakeaway>
      ),
    },
  ],
});
