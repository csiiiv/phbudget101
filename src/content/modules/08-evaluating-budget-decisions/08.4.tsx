import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

const SORTING_CARDS = [
  {
    tag: 'Evidence',
    statement: 'The monitoring report records 72 completed sites against a target of 90, with a stated cutoff date.',
    reason: 'The claim identifies a source, observed value, target, unit, and time boundary.',
  },
  {
    tag: 'Assumption',
    statement: 'Adding more sites will automatically make access equitable.',
    reason: 'The statement predicts distribution without evidence about location, population, or barriers to access.',
  },
  {
    tag: 'Evidence with a limit',
    statement: 'The completion rate rose, but the published table does not separate urban and rural sites.',
    reason: 'The trend is supported, while the distributional question remains unanswered.',
  },
  {
    tag: 'Question to test',
    statement: 'Did the budget prioritize places with the largest service gap?',
    reason: 'This is a testable question, not yet evidence or a conclusion.',
  },
];

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'Convincing is not the same as supported',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <p className="text-lg text-muted-foreground">
          “The program exceeded its target, so the budget worked.” What would you
          need to know before accepting that sentence?
        </p>
      ),
    },
    {
      id: 'baseline-target-indicator',
      title: 'Anchor the claim: baseline, target, indicator',
      shortTitle: 'Anchors',
      type: 'concept',
      content: (
        <>
          <p>
            A <Term id="baseline" /> gives the starting condition. A{' '}
            <Term id="target" /> states the intended value and deadline. A{' '}
            <Term id="performance-indicator" /> defines what will be measured.
            Without all three—and a source—you cannot tell whether a reported
            change is meaningful or merely sounds impressive.
          </p>
          <p>
            Check the indicator&apos;s numerator, denominator, unit, coverage,
            frequency, and cutoff date. Ask whether it measures an input, an
            output, or an outcome. “Activities conducted” may be easy to count,
            but it does not establish that services improved.
          </p>
        </>
      ),
    },
    {
      id: 'gaming-and-gaps',
      title: 'A target can distort the view',
      shortTitle: 'Gaming and gaps',
      type: 'concept',
      content: (
        <>
          <p>
            Indicators shape attention. If a target rewards only quantity, an
            implementer may maximize the count while quality, difficulty, or
            underserved groups receive less attention. This is indicator gaming:
            performance against the metric improves while the underlying public
            purpose may not.
          </p>
          <p>
            Test a claimed result with companion measures. Pair quantity with
            quality and timeliness; pair an average with a distribution; pair
            completion with use or outcome. Also compare the plan with the budget:
            a target without a funded activity may be an unfunded promise, while
            an allocation without a matching plan leaves its intended result unclear.
          </p>          <p>
            A national average can improve while some populations or places fall
            behind. Disaggregate beneficiaries, allocations, access, and outcomes
            where reliable data allow. Use relevant denominators and state when
            geography or population definitions change. Track several periods,
            annotate breaks in the series, and avoid selecting only favorable dates.
          </p>
        </>
      ),
    },
    {
      id: 'static-sort',
      title: 'Static exercise: sort the claim before judging it',
      shortTitle: 'Sort claims',
      type: 'example',
      content: (
        <>
          <p>
            For each card, identify what is observed, what is inferred, and what
            remains unknown. This static sort is the appropriate Phase 1 treatment;
            it adds no proposal-comparison interactive or evidence dossier.
          </p>
          <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
            {SORTING_CARDS.map((card) => (
              <div key={card.statement} className="rounded-lg border bg-card p-5">
                <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {card.tag}
                </div>
                <p className="mt-2 font-medium">“{card.statement}”</p>
                <p className="mt-3 text-sm text-muted-foreground">{card.reason}</p>
              </div>
            ))}
          </div>
          <p>
            Evidence is not automatically decisive. Check its method, date,
            comparability, and limitations. An assumption is not automatically
            wrong either; label it, state what would test it, and avoid presenting
            it as an observed fact.
          </p>
        </>
      ),
    },

    {
      id: 'check',
      title: 'Tag the argument',
      shortTitle: 'Check',
      type: 'knowledge-check',
      content: (
        <>
          <KnowledgeCheck
            title="Evidence, assumption, or incomplete claim?"
            moduleId="mod-08"
            lessonId="08.4"
            items={[
              {
                prompt:
                  '“The official report lists 72 completed sites by the stated cutoff date.” How should this be tagged?',
                options: [
                  'Evidence for the reported output, subject to the report’s method and scope',
                  'Proof that every community received equal access',
                  'An assumption because all numbers are opinions',
                  'Proof of the program’s long-term outcome',
                ],
                correct: 0,
                explanation:
                  'The report supports a bounded output claim. It does not by itself establish distribution, quality, use, or long-term outcome.',
                wrong: {
                  1: 'A total does not show where sites are or who can use them.',
                  2: 'A documented observation is evidence, though its quality and limits still need review.',
                  3: 'Completion is an output; a long-term outcome requires different evidence.',
                },
              },
              {
                prompt:
                  'A plan promises shorter waiting times, but the budget contains no identifiable activity or resource linked to that target. What does this show?',
                options: [
                  'A possible plan-versus-budget gap that needs investigation',
                  'Certain proof that waiting times improved',
                  'A complete performance chain',
                  'Evidence that targets never matter',
                ],
                correct: 0,
                explanation:
                  'The intended result is visible, but its budget support is not. Trace classifications and documents before deciding whether it is unfunded or recorded elsewhere.',
                wrong: {
                  1: 'A promise is not evidence of an achieved result.',
                  2: 'The allocation link is missing from the visible chain.',
                  3: 'Targets matter when they are defined, resourced, measured, and interpreted carefully.',
                },
              },
              {
                prompt:
                  'The national average improved, but no results are reported by region or beneficiary group. Which conclusion is justified?',
                options: [
                  'The average improved, while distributional effects remain unknown',
                  'Every region improved equally',
                  'The least-served group benefited most',
                  'Geographic evidence is unnecessary',
                ],
                correct: 0,
                explanation:
                  'State what the aggregate supports and preserve the uncertainty it cannot resolve.',
                wrong: {
                  1: 'An aggregate cannot establish equal regional movement.',
                  2: 'That claim requires disaggregated beneficiary evidence.',
                  3: 'Geographic evidence is necessary when the question concerns where benefits went.',
                },
              },
            ]}
          />
          <p className="mt-6 text-sm text-muted-foreground">
            Sources: Department of Budget and Management,{' '}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/2012/03/OPIF%20Reference%20Guide.pdf" target="_blank" rel="noreferrer">
              Organizational Performance Indicator Framework Reference Guide
            </a>
            ; and{' '}
            <a href="https://www.pefa.org/resources/pefa-2016-framework" target="_blank" rel="noreferrer">
              PEFA Framework for assessing public financial management
            </a>
            .
          </p>
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
          Separate observation from interpretation. Strong budget arguments name
          their baseline, target, indicator, source, distribution, and time
          frame—and label every remaining assumption and limitation.
        </KeyTakeaway>
      ),
    },
  ],
});