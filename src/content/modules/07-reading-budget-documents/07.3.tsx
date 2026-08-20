import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

const COMPARISON_CHECKS = [
  ['Same concept?', 'Confirm that both lines cover the same program, scope, and classification.'],
  ['Same stage?', 'Do not compare a proposal in one year with disbursements in another.'],
  ['Same price basis?', 'State whether amounts are nominal or adjusted with a named price index.'],
  ['Same population or place?', 'Use per-capita or geographic normalization only when it answers the question.'],
];

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'Is ten percent really growth?',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <p className="text-lg text-muted-foreground">
          A budget line is ten percent higher than last year. Before calling that
          an increase in resources, what else must match?
        </p>
      ),
    },
    {
      id: 'nominal-and-real',
      title: 'Separate pesos from purchasing power',
      shortTitle: 'Nominal vs real',
      type: 'concept',
      content: (
        <>
          <p>
            A <Term id="nominal-value" /> is reported in the prices of its own
            period. A <Term id="real-value" /> adjusts values to a common price
            basis so that changes in purchasing power are easier to compare.
            Inflation can therefore absorb part—or all—of a nominal increase.
          </p>
          <p>
            The Philippine Statistics Authority&apos;s{' '}
            <Term id="consumer-price-index" expand /> measures changes in the
            average retail prices of a fixed basket relative to a base period.
            For a careful real-value comparison, name the index, base period,
            geographic series, and dates used. Different deflators answer
            different questions; an adjustment is not self-explanatory.
          </p>
        </>
      ),
    },
    {
      id: 'static-toggle',
      title: 'Static view: the toggle you should imagine',
      shortTitle: 'Static comparison',
      type: 'example',
      content: (
        <>
          <p>
            This index-only illustration is a static fallback for the proposed
            nominal-versus-real toggle. It uses no budget amount or current
            inflation observation.
          </p>
          <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                Nominal view · illustrative index
              </div>
              <p className="mt-3 text-3xl font-bold">100 → 110</p>
              <p className="mt-2 text-sm text-muted-foreground">
                The recorded amount index rises 10%. That is the current-price
                statement, not yet a claim about purchasing power.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                Price-adjusted view · illustrative index
              </div>
              <p className="mt-3 text-3xl font-bold">100 → 100</p>
              <p className="mt-2 text-sm text-muted-foreground">
                If the relevant price index also moves from 100 to 110, the
                illustrative real index is unchanged: 110 ÷ 110 × 100 = 100.
              </p>
            </div>
          </div>
          <p>
            The conclusion is not that every ten-percent rise disappears. It is
            that “up ten percent” and “able to buy ten percent more” are different
            claims. Use official, dated price data for an actual comparison.
          </p>
        </>
      ),
    },
    {
      id: 'same-money-stage',
      title: 'Match the amount to its stage',
      shortTitle: 'Budget stage',
      type: 'concept',
      content: (
        <>
          <p>
            One program can have several valid numbers: proposed in the{' '}
            <Term id="nep" />, approved through an <Term id="appropriation" />,
            made available for agencies to incur obligations through an{' '}
            <Term id="allotment" />, <Term id="obligation">obligated</Term>, and
            finally <Term id="disbursement">disbursed</Term>. These numbers answer
            different questions and need not be equal at a given date.
          </p>
          <p>
            A comparison must hold the stage and reporting cutoff constant. A
            proposed amount beside a year-end disbursement does not show growth or
            decline; it compares a plan with a payment. Also verify whether a line
            was renamed, transferred, merged, split, or realigned. A disappearing
            label is not proof that the underlying activity ended.
          </p>
        </>
      ),
    },
    {
      id: 'comparison-check',
      title: 'Spot the denominator hiding in the claim',
      shortTitle: 'Comparison check',
      type: 'knowledge-check',
      content: (
        <>
          <div className="not-prose mb-8 grid gap-3 sm:grid-cols-2">
            {COMPARISON_CHECKS.map(([title, text]) => (
              <div key={title} className="rounded-lg border bg-card p-4">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
          <p>
            Per-capita comparison divides by a relevant population; geographic
            comparison may need consistent boundaries, coverage, and local price
            context. These normalizations can clarify scale, but they do not prove
            need, quality, or performance on their own.
          </p>
          <KnowledgeCheck
            title="Which comparison can the evidence support?"
            moduleId="mod-07"
            lessonId="07.3"
            items={[
              {
                prompt:
                  'A line rises 10%, while the relevant price index rises by the same proportion. What is the safest conclusion?',
                options: [
                  'Its nominal value rose, while its illustrated purchasing power is unchanged',
                  'Its purchasing power definitely rose 10%',
                  'Its service quality definitely improved',
                  'Inflation is irrelevant to budget comparisons',
                ],
                correct: 0,
                explanation:
                  'The current-price amount is higher, but equal proportional price growth removes the increase after this simplified adjustment.',
                wrong: {
                  1: 'That conclusion ignores the equal movement in the price index.',
                  2: 'An amount and a price adjustment do not establish service quality.',
                  3: 'Inflation is precisely why nominal and real comparisons can differ.',
                },
              },
              {
                prompt:
                  'An analyst compares this year’s proposed amount with last year’s disbursement. What is the main problem?',
                options: [
                  'The stages differ: a proposal is being compared with a payment',
                  'Every proposal must equal every disbursement',
                  'Disbursements are never useful',
                  'Year-on-year comparisons are always prohibited',
                ],
                correct: 0,
                explanation:
                  'Hold the budget stage and cutoff constant before interpreting a change. Plans and payments answer different questions.',
                wrong: {
                  1: 'Different stages often differ; that is why they must be labeled rather than assumed equal.',
                  2: 'Disbursements are useful evidence of payment when compared with the right measure.',
                  3: 'Year-on-year analysis is useful when concepts, stages, timing, and scope are aligned.',
                },
              },
              {
                prompt:
                  'A program line disappears after an agency reorganization. What should an analyst do first?',
                options: [
                  'Conclude that all funding ended',
                  'Trace whether the activity was renamed, transferred, merged, or split',
                  'Add the old line to every new agency total',
                  'Ignore the organizational change',
                ],
                correct: 1,
                explanation:
                  'A label can disappear even when the underlying activity continues elsewhere. Reconstruct a comparable series before claiming a cut.',
                wrong: {
                  0: 'The missing label alone does not establish that the underlying activity ended.',
                  2: 'Adding without tracing scope risks double-counting.',
                  3: 'The reorganization may explain the apparent change and must be investigated.',
                },
              },
            ]}
          />
          <p className="mt-6 text-sm text-muted-foreground">
            Sources: Philippine Statistics Authority,{' '}
            <a href="https://psa.gov.ph/price-indices/cpi-ir/faqs" target="_blank" rel="noreferrer">
              Consumer Price Index and Inflation Rate FAQs
            </a>
            ; Department of Budget and Management,{' '}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/BESF/BESF2026/GLOSSARY.pdf" target="_blank" rel="noreferrer">
              Budget of Expenditures and Sources of Financing glossary
            </a>{' '}
            and{' '}
            <a href="https://www.dbm.gov.ph/index.php/statement-of-appropriations-allotments-obligations-disbursements-and-balances" target="_blank" rel="noreferrer">
              appropriations, allotments, obligations, and disbursements reports
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
          An honest comparison aligns the concept, budget stage, reporting date,
          price basis, scope, and denominator. State every adjustment—and pause
          when a renamed line or changed boundary breaks the series.
        </KeyTakeaway>
      ),
    },
  ],
});