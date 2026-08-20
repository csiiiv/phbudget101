import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const FORECAST_NORMAL = 100;
const FORECAST_SHOCK = 90;
const COMMITTED = 75;

const PROPOSALS = [
  { name: 'Rural clinic equipment', cost: 12 },
  { name: 'Flood-drainage repairs', cost: 10 },
  { name: 'Additional school rooms', cost: 15 },
] as const;

/**
 * Light interactive for the fiscal-space station: pick proposals under a
 * stated limit. No simulation, just checkboxes and arithmetic — the Phase 3
 * budget-balancer remains the eventual home for the full version.
 */
function ProposalPicker() {
  const [shocked, setShocked] = useState(false);
  const [picked, setPicked] = useState<number[]>([]);

  const space = shocked ? FORECAST_SHOCK - COMMITTED : FORECAST_NORMAL - COMMITTED;
  const total = picked.reduce((sum, i) => sum + PROPOSALS[i].cost, 0);
  const over = total > space;

  const toggle = (i: number) => {
    setPicked((prev) => (prev.includes(i) ? prev.filter((p) => p !== i) : [...prev, i]));
  };

  return (
    <div className="not-prose space-y-4 rounded-lg border bg-card p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold">Revenue shock</h3>
        <button
          type="button"
          onClick={() => setShocked((s) => !s)}
          className="rounded-full border px-3 py-1 text-xs font-medium transition-colors hover:bg-secondary"
          aria-pressed={shocked}
        >
          {shocked ? 'Forecast: 90 units' : 'Forecast: 100 units'}
        </button>
      </div>
      <p className="text-sm text-muted-foreground">
        Toggle the shock to see the forecast fall to 90 while commitments stay
        at 75. Fiscal space moves from 25 to 15 units.
      </p>
      <div className="flex h-10 overflow-hidden rounded-md text-xs font-semibold">
        <div className="flex basis-3/4 items-center justify-center bg-primary text-primary-foreground">
          Committed: 75
        </div>
        <div className="flex basis-1/4 items-center justify-center bg-accent text-accent-foreground">
          Space: {space}
        </div>
      </div>
      <ul className="space-y-2">
        {PROPOSALS.map((proposal, i) => (
          <li key={proposal.name}>
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-pressed={picked.includes(i)}
              className={cn(
                'flex w-full items-center justify-between rounded-md border px-3 py-2 text-left text-sm transition-colors',
                picked.includes(i)
                  ? 'border-primary bg-accent/50 font-medium'
                  : 'hover:bg-secondary'
              )}
            >
              <span>{proposal.name}</span>
              <span className="tabular-nums">{proposal.cost} units</span>
            </button>
          </li>
        ))}
      </ul>
      <p
        role="status"
        className={cn('text-sm font-medium', over ? 'text-destructive' : 'text-muted-foreground')}
      >
        Selected: {total} of {space} units
        {over && ' — over the limit. Something must be deferred, cut, or financed.'}
        {!over && total > 0 && ' — fits within the limit.'}
      </p>
      <p className="text-xs text-muted-foreground">
        You may defer a proposal, reduce its scope, identify a lawful new
        revenue source, or justify additional borrowing — but none makes the
        cost disappear.
      </p>
    </div>
  );
}

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'A budget begins with an estimate',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            If a public need is urgent, why can&apos;t government simply fund
            it? Because the spending plan starts with an estimate of the
            resources likely to be available, not an unlimited pool.
          </p>
          <p>
            A <Term id="revenue-forecast" expand /> estimates future collections
            using assumptions about the economy, tax rules, prices, trade, and
            collection performance. The forecast can be revised when those
            assumptions change.
          </p>
        </>
      ),
    },
    {
      id: 'gaps-and-debt',
      title: 'When revenue and spending do not match',
      shortTitle: 'The gap',
      type: 'concept',
      content: (
        <>
          <p>
            Think of a household budget. If the family spends more than it
            earns this month, it covers the difference with a loan — a
            shortfall. If it earns more than it spends, there is money left
            over. Government finances work the same way, just at national
            scale: when expenditure is greater than revenue, government runs
            a <Term id="fiscal-deficit" expand />. Borrowing finances the gap.
            When revenue is greater than expenditure, government has a{' '}
            <Term id="fiscal-surplus" expand />.
          </p>
          <p>
            One month&apos;s loan is manageable; a loan every month adds up.
            Each deficit adds to financing needs for that period, and repeated
            borrowing contributes to <Term id="public-debt" expand />, the
            outstanding obligations government must repay. Debt can spread the
            cost of long-lived investments or help respond to shocks, but
            principal and interest claims compete with other future spending —
            like a household whose loan payments eat into the grocery budget.
          </p>
          <p>
            After rent and utilities are covered, whatever is left is what the
            household can freely choose to do. That leftover room is the
            everyday analogue of <Term id="fiscal-space" expand />: room in the
            public finances for additional priorities after considering
            expected resources, deficit limits, debt obligations, and the cost
            of continuing commitments. A worthy proposal can still exceed that
            room — the household may want a new refrigerator, but if the
            leftover is ₱2,000, the refrigerator waits.
          </p>
        </>
      ),
    },
    {
      id: 'authority-and-cash',
      title: 'Permission to spend is not cash in hand',
      shortTitle: 'Authority vs cash',
      type: 'concept',
      content: (
        <>
          <p>
            An <Term id="appropriation" expand /> gives legal authority to spend
            for a stated purpose. It does not guarantee that the entire
            authorized amount is sitting in an agency bank account at once.
          </p>
          <p>
            Cash availability depends on actual collections, borrowing, the
            timing of payments, and government&apos;s cash program. Releases may
            therefore be scheduled over the year. If revenue arrives later than
            expected, cash managers may adjust timing even though the legal
            authority remains.
          </p>
          <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Budget authority asks</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                May the agency commit public funds for this purpose, within this
                limit?
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Available cash asks</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Can government make the payment at this point in the cash
                program?
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'static-balancer',
      title: 'Static activity: choose within the limit',
      shortTitle: 'Try the limit',
      type: 'interactive',
      content: (
        <>
          <p>
            <strong>
              Illustrative example. Amounts are simplified resource units, not
              pesos or public records.
            </strong>
          </p>
          <p>
            The forecast is 100 units. Continuing services and existing
            commitments require 75, leaving 25 units of fiscal space. The three
            proposals below cost 37 in total, so they cannot all fit. Pick a
            combination and see the constraint bite.
          </p>
          <ProposalPicker />
          <p className="text-sm text-muted-foreground">
            This picker is the light version of the Phase 3 budget-balancer
            simulation; the full simulation remains on the Phase 3 backlog.
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
          title="Reason about the limit"
          moduleId="mod-02"
          lessonId="02.3"
          items={[
            {
              prompt:
                'Planned expenditure is greater than forecast revenue. What describes the gap?',
              options: [
                'A fiscal deficit',
                'A fiscal surplus',
                'Available cash',
                'An appropriation',
              ],
              correct: 0,
              explanation:
                'A fiscal deficit is the shortfall when expenditure exceeds revenue; it must be financed, commonly through borrowing.',
              wrong: {
                1: 'A surplus occurs when revenue exceeds expenditure.',
                2: 'Cash availability concerns payment timing, not the arithmetic gap.',
                3: 'An appropriation is legal authority to spend, not the revenue-expenditure balance.',
              },
            },
            {
              prompt:
                'A program has an appropriation, but its payment is scheduled for a later cash release. Which statement is best?',
              options: [
                'The program has legal authority, but cash timing is separate.',
                'The appropriation is automatically cancelled.',
                'Revenue must already exceed all expenditure.',
                'The program is a grant.',
              ],
              correct: 0,
              explanation:
                'Appropriation answers whether spending is authorized; the cash program answers when payment capacity is made available.',
              wrong: {
                1: 'A later cash schedule does not by itself cancel legal authority.',
                2: 'Government can run a deficit, so this conclusion does not follow.',
                3: 'Nothing in the scenario describes funding received without repayment.',
              },
            },
            {
              prompt:
                'A lower revenue forecast leaves continuing commitments unchanged. What usually happens to fiscal space?',
              options: [
                'It narrows.',
                'It automatically expands.',
                'It becomes the same as public debt.',
                'It removes all trade-offs.',
              ],
              correct: 0,
              explanation:
                'With fewer expected resources and the same prior commitments, less room remains for additional priorities.',
              wrong: {
                1: 'Lower expected revenue does not create more room when commitments stay fixed.',
                2: 'Fiscal space is room for choices; debt is outstanding obligations.',
                3: 'A tighter limit makes trade-offs more important, not less.',
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
          Revenue forecasts set the planning baseline. Deficits require
          financing, debt creates future claims, and continuing commitments
          reduce fiscal space. Even after spending is legally authorized,
          available cash determines when payment can occur.
        </KeyTakeaway>
      ),
    },
  ],
});
