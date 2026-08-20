import { Figure } from '@/components/content/Figure';
import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

const SAMPLE_ROWS = [
  { item: 'Route operations', prior: '100', current: '108', signal: 'Increment · modest rise' },
  { item: 'Station upgrades', prior: '100', current: '165', signal: 'Avalanche · large rise' },
  { item: 'Passenger information', prior: '—', current: '100', signal: 'Appears' },
  { item: 'Temporary terminal works', prior: '100', current: '—', signal: 'Disappears' },
];

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'Where is the story in a thousand rows?',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <p className="text-lg text-muted-foreground">
          Most lines barely move. A few jump, fall, appear, or vanish. Which ones
          deserve a closer reading—and which only look dramatic because the table changed?
        </p>
      ),
    },
    {
      id: 'method',
      title: 'Scan for avalanches, then read the increments',
      shortTitle: 'Method',
      type: 'concept',
      content: (
        <>
          <p>
            The <Term id="avalanche-method" /> is a triage method: compare like
            lines across years and flag unusually large increases, decreases,
            appearances, and disappearances. These outliers are leads for
            investigation, not conclusions. An <Term id="increment" /> is the
            smaller change that can be easy to overlook but may accumulate into a
            meaningful trend over several years.
          </p>
          <p>
            Start with the exact line label, budget stage, fiscal year, unit, and
            document source. Then compute both the absolute and percentage change
            when actual amounts are available. A large percentage on a tiny base
            and a small percentage on a large base can tell very different stories.
          </p>
        </>
      ),
    },
    {
      id: 'static-scan',
      title: 'Static avalanche-spotting exercise',
      shortTitle: 'Spot signals',
      type: 'example',
      content: (
        <>
          <p>
            This simplified replica uses dimensionless indices, not budget
            amounts. Each continuing line is set to 100 in its first shown year;
            new or missing lines use a dash. It demonstrates the scan without
            claiming that these are official transport figures.
          </p>
          <div className="not-prose my-8 overflow-x-auto rounded-lg border bg-card">
            <table className="w-full min-w-[42rem] text-left text-sm">
              <thead className="border-b bg-muted/30">
                <tr>
                  <th className="p-3 font-semibold">Illustrative transport line</th>
                  <th className="p-3 font-semibold">Prior-year index</th>
                  <th className="p-3 font-semibold">Current-year index</th>
                  <th className="p-3 font-semibold">First-pass signal</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {SAMPLE_ROWS.map((row) => (
                  <tr key={row.item}>
                    <td className="p-3 font-medium">{row.item}</td>
                    <td className="p-3">{row.prior}</td>
                    <td className="p-3">{row.current}</td>
                    <td className="p-3">{row.signal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Circle all four signals, not only the largest increase. The next step
            is to inspect notes, provisions, organizational changes, and nearby
            rows. “Appears” may mean a genuinely new item—or a renamed or split
            line. “Disappears” may mean termination, completion, transfer, merger,
            or reclassification.
          </p>
        </>
      ),
    },
    {
      id: 'build-series',
      title: 'Build a series before telling a story',
      shortTitle: 'Build a series',
      type: 'concept',
      content: (
        <>
          <p>
            A defensible year-series keeps the same concept and stage in each
            column. Record the source page, line label, unit, fiscal year, and
            whether the figure is proposed, approved, allotted, obligated, or
            disbursed. Preserve notes about renamed lines instead of silently
            stitching them together.
          </p>
          <ol>
            <li>Collect the same-stage documents for several years.</li>
            <li>Map old and new labels, including transfers and splits.</li>
            <li>Check totals and footnotes; avoid counting a subtotal and its rows twice.</li>
            <li>Calculate changes, then inspect the largest and the persistent small ones.</li>
            <li>Write the signal first and investigate its cause separately.</li>
          </ol>
          <p>
            Keep zero, blank, and not-applicable values distinct. A blank cell is
            missing information unless the document defines it otherwise; it is
            not automatically zero.
          </p>
        </>
      ),
    },
    {
      id: 'transport-check',
      title: 'Apply the method without mixing stages',
      shortTitle: 'Check',
      type: 'knowledge-check',
      content: (
        <>
          <p>
            The course&apos;s earlier transport example — the Move As One
            coalition&apos;s 2022 proposal and its enacted outcome — contains a
            proposal and an enacted amount for the same fiscal year:
          </p>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <Figure module="mod-04" id="mao-ask" />
            <Figure module="mod-04" id="mao-service-contracting-outcome" />
          </div>
          <p>
            Both figures are already dated and sourced in Module 04 data. They
            show proposal-to-enactment movement, not a year-on-year avalanche.
            To apply the method honestly, first assemble the same transport line
            and same budget stage across multiple years from the relevant{' '}
            <Term id="nep" /> or <Term id="gaa" /> volumes.
          </p>
          <KnowledgeCheck
            title="Which signals deserve investigation?"
            moduleId="mod-07"
            lessonId="07.4"
            items={[
              {
                prompt:
                  'In the illustrative table, “Passenger information” changes from a dash to an index of 100. What is the safest first statement?',
                options: [
                  'The line appears in the current table and its continuity must be checked',
                  'Spending definitely began for the first time',
                  'The prior-year value was definitely zero',
                  'The program definitely succeeded',
                ],
                correct: 0,
                explanation:
                  'Appearance is a signal. Check whether the activity is new, renamed, transferred, split, or newly reported before explaining it.',
                wrong: {
                  1: 'The prior activity may have existed under another line or classification.',
                  2: 'A dash is not automatically zero; its meaning depends on the document.',
                  3: 'A budget-line appearance does not demonstrate results.',
                },
              },
              {
                prompt:
                  'Can the Module 04 proposal and enacted transport figures alone establish a year-on-year avalanche?',
                options: [
                  'Yes, because any two amounts create a time series',
                  'No, because they are different stages within one fiscal year',
                  'Yes, because the larger amount must be the later year',
                  'No, because transport lines can never be compared',
                ],
                correct: 1,
                explanation:
                  'A year-on-year series needs comparable fiscal years and the same budget stage. Proposal versus enactment answers a different question.',
                wrong: {
                  0: 'Two values form a valid comparison only when their concepts, stages, dates, and units align.',
                  2: 'Size does not identify either chronology or budget stage.',
                  3: 'Transport lines can be compared after their definitions and stages are aligned.',
                },
              },
            ]}
          />
          <p className="mt-6 text-sm text-muted-foreground">
            Source path for an actual series: Department of Budget and Management{' '}
            <a href="https://www.dbm.gov.ph/index.php/budget-documents-archives" target="_blank" rel="noreferrer">
              budget document archives
            </a>
            . Method adapted from the course guidebook; the static replica above
            is illustrative and contains no official amount.
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
          Avalanches and increments are clues, not verdicts. Build a comparable
          year-series, flag large and persistent changes, trace every appearance
          or disappearance, and investigate the document context before explaining why.
        </KeyTakeaway>
      ),
    },
  ],
});