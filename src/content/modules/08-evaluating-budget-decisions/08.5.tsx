import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

const CRITERIA = [
  'Adequacy: Is the response large enough for the stated need?',
  'Efficiency: What resources are required for the expected result?',
  'Effectiveness: Is there evidence it can produce the intended outcome?',
  'Equity: Who benefits, who bears costs, and who may be left out?',
  'Sustainability: Can the fiscal, operating, and maintenance demands continue?',
  'Transparency: Are assumptions, costs, and evidence visible?',
  'Accountability: Who is responsible, measured, and answerable for delivery?',
];

const SCREEN = [
  ['Tama ba?', 'Does the proposal address the problem appropriately, ethically, and equitably?'],
  ['Kaya ba?', 'Can institutions finance, administer, procure, operate, and monitor it?'],
  ['Susuportahan ba?', 'Which actors must accept or sustain it, and what evidence supports that assessment?'],
];

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'A verdict is not yet a judgment',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <p className="text-lg text-muted-foreground">
          Two proposals address the same mobility problem and compete for limited
          budget space. How do you choose without simply defending your first preference?
        </p>
      ),
    },
    {
      id: 'comparison-rule',
      title: 'Compare the same problem on the same terms',
      shortTitle: 'Ground rules',
      type: 'concept',
      content: (
        <>
          <p>
            Begin with one clearly stated problem, population, geographic scope,
            time horizon, and budget stage. If the proposals solve different
            problems or use different cost boundaries, a score beside each one
            creates false precision rather than a fair comparison.
          </p>
          <p>
            Apply the same seven criteria and the same three-question screen to
            both options. Record evidence and uncertainty before reaching a
            verdict. A <Term id="trade-off" /> is not a flaw to hide: it is the
            gain you accept in one dimension and the cost or risk you accept in another.
          </p>
        </>
      ),
    },
    {
      id: 'static-worksheet',
      title: 'Static worksheet: two mobility proposals',
      shortTitle: 'Worksheet',
      type: 'example',
      content: (
        <>
          <p>
            Illustrative example. Details are simplified for clarity. This
            printable-style worksheet is the static fallback for the Phase 2
            proposal comparator. It contains no scoring behavior, saved response,
            evidence dossier, or model-answer reveal.
          </p>
          <div className="not-prose my-8 space-y-5 rounded-lg border bg-card p-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Shared policy problem</p>
              <p className="mt-1 font-medium">Improve safe, reliable movement along a congested urban corridor.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Proposal A · Protected bicycle-lane network</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Examine network continuity, physical protection, intersection
                  treatment, maintenance, access, enforcement, and connections to public transport.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Proposal B · Additional general-purpose road lanes</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Examine right-of-way, construction and maintenance, traffic
                  effects over time, access, safety, implementation disruption,
                  and effects on other corridor users.
                </p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[44rem] text-left text-sm">
                <thead className="border-b">
                  <tr>
                    <th className="p-3 font-semibold">Comparison prompt</th>
                    <th className="p-3 font-semibold">Proposal A notes</th>
                    <th className="p-3 font-semibold">Proposal B notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {CRITERIA.map((criterion) => (
                    <tr key={criterion}>
                      <td className="p-3 font-medium">{criterion}</td>
                      <td className="p-3 text-muted-foreground">Evidence: ____ · Limit: ____</td>
                      <td className="p-3 text-muted-foreground">Evidence: ____ · Limit: ____</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground">
              No budget amount or factual performance result is supplied. Use
              sourced, comparable evidence before completing an actual worksheet.
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'screen-and-weigh',
      title: 'Screen first, then weigh the trade-offs',
      shortTitle: 'Weigh',
      type: 'concept',
      content: (
        <>
          <div className="not-prose mb-7 grid gap-3 md:grid-cols-3">
            {SCREEN.map(([question, prompt]) => (
              <div key={question} className="rounded-lg border bg-card p-4">
                <h3 className="font-semibold">{question}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{prompt}</p>
              </div>
            ))}
          </div>
          <p>
            A failed screen is a reason to revise or reject a proposal, but a pass
            is not a command to approve it. Among feasible options, explain which
            criteria matter most for this problem and why. Do not quietly change
            weights to favor an option after seeing the result.
          </p>
          <p>
            Preserve uncertainty. If evidence is missing, say how that affects
            confidence and what would resolve it. Conditional judgments—“prefer A
            if the safety design and maintenance plan meet stated standards”—are
            often more defensible than absolute claims.
          </p>
        </>
      ),
    },
    {
      id: 'check',
      title: 'Write the reasoning, not just the winner',
      shortTitle: 'Check',
      type: 'knowledge-check',
      content: (
        <KnowledgeCheck
          title="What belongs in a comparative rationale?"
          moduleId="mod-08"
          lessonId="08.5"
          items={[
            {
              prompt:
                'Which opening creates the fairest comparison between two proposals?',
              options: [
                'Define the shared problem, scope, time horizon, budget stage, and evidence standard',
                'Choose the preferred proposal, then select criteria that support it',
                'Give both proposals a single score without documenting assumptions',
                'Compare one proposal’s full cost with only the other proposal’s construction cost',
              ],
              correct: 0,
              explanation:
                'A common frame makes the criteria and evidence comparable before preferences enter the judgment.',
              wrong: {
                1: 'Selecting criteria after choosing a winner builds confirmation bias into the process.',
                2: 'An undocumented score hides evidence, weighting, uncertainty, and trade-offs.',
                3: 'Different cost boundaries create an unfair comparison.',
              },
            },
            {
              prompt:
                'Which conclusion is the strongest comparative rationale?',
              options: [
                '“Choose A because it is obviously better.”',
                '“A is preferred under the stated criteria because of evidence X and Y; B performs better on Z; the decision remains conditional on unresolved risk R.”',
                '“A received more check marks.”',
                '“B is feasible, so no other criterion matters.”',
              ],
              correct: 1,
              explanation:
                'A defensible rationale states the basis, acknowledges the competing option’s strength, identifies trade-offs, and preserves material uncertainty.',
              wrong: {
                0: 'The statement gives neither evidence nor reasoning.',
                2: 'Check marks do not reveal importance, evidence quality, or uncertainty.',
                3: 'Feasibility is necessary but does not replace adequacy, effectiveness, equity, or the other criteria.',
              },
            },
            {
              prompt:
                'Evidence for a key outcome is missing for both proposals. What should the writer do?',
              options: [
                'Invent a reasonable estimate so the comparison is complete',
                'State the gap, reduce confidence, and identify the evidence needed',
                'Treat the missing result as zero for both proposals',
                'Ignore the outcome because both proposals lack data',
              ],
              correct: 1,
              explanation:
                'Transparent uncertainty is part of the judgment. Missing evidence limits the conclusion and creates a clear next research task.',
              wrong: {
                0: 'An invented estimate is not evidence and can determine the verdict unfairly.',
                2: 'Missing does not mean zero.',
                3: 'A shared evidence gap can still be material to whether either proposal should proceed.',
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
          A comparative judgment is an argument, not a scoreboard. Hold the frame
          constant, apply the same criteria and screen, cite the evidence, expose
          the trade-offs and uncertainty, then explain why the preferred option
          is stronger for the stated problem.
        </KeyTakeaway>
      ),
    },
  ],
});