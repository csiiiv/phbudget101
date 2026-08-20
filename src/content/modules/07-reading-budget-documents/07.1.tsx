import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

const DECISIONS = [
  { question: 'What did the executive propose?', document: 'NEP', note: 'Start with the proposed agency and program amounts submitted to Congress.' },
  { question: 'What did Congress authorize?', document: 'GAA', note: 'Read the enacted appropriation and its general or special provisions.' },
  { question: 'How does the spending plan relate to revenues and financing?', document: 'BESF', note: 'Use the government-wide expenditure, revenue, financing, and fiscal tables.' },
  { question: 'How far did authority move through allotment, obligation, and disbursement?', document: 'FAR No. 1 / SAAODB', note: 'Read the agency execution report for the reporting period and stated level of aggregation.' },
  { question: 'How much cash authority was issued or utilized?', document: 'NCA records or utilization reports', note: 'Use cash-authority reporting; do not treat it as the same as appropriation or obligation.' },
  { question: 'What did auditors find after reviewing records and operations?', document: 'COA audit report', note: 'Read the audit scope, opinion or findings, observations, and agency responses.' },
  { question: 'What did an LGU plan and authorize?', document: 'AIP and appropriation ordinance', note: 'Use local planning and authorization documents, then local execution and audit records for implementation.' },
] as const;

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: '“Actually spent” is not one document question',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            If you ask, “How much was actually spent on this program?”, first
            decide whether you mean approved, released, obligated, disbursed, or
            delivered. Each word points to different evidence.
          </p>
          <p>
            Start with the stage and fiscal year, then choose the document. Opening
            the most familiar budget PDF first can produce a precise answer to the
            wrong question.
          </p>
        </>
      ),
    },
    {
      id: 'proposal-and-authority',
      title: 'Proposal, authority, and the fiscal picture',
      shortTitle: 'Before execution',
      type: 'concept',
      content: (
        <>
          <p>
            Use the <Term id="nep" expand /> to ask what the executive branch
            proposed. Use the <Term id="gaa" expand /> to ask what Congress enacted
            and what conditions govern the appropriation. Comparing the two can
            show how an item changed during legislation.
          </p>
          <p>
            Use the <Term id="besf" expand /> when the question is broader: how
            expenditures fit with revenues, borrowing, financing, macroeconomic
            assumptions, or government-wide classifications. An agency page may
            show a line in detail while the BESF shows the fiscal setting around it.
          </p>
          <p>
            Agency budget documents, budget execution documents, and program
            profiles can add targets, schedules, and operating-unit detail. Check
            whether the file is a proposal, an enacted authority, or an execution
            plan before comparing its numbers.
          </p>
          <p className="text-sm text-muted-foreground">
            Source note: Department of Budget and Management collections for the{' '}
            <a href="https://www.dbm.gov.ph/index.php/2026/national-expenditure-program-fy-2026">National Expenditure Program</a>,{' '}
            <a href="https://www.dbm.gov.ph/index.php/2026/general-appropriations-act-gaa-fy-2026">General Appropriations Act</a>, and{' '}
            <a href="https://www.dbm.gov.ph/index.php/2026/budget-of-expenditures-and-sources-of-financing-fy-2026">Budget of Expenditures and Sources of Financing</a>.
          </p>
        </>
      ),
    },
    {
      id: 'execution-audit-local',
      title: 'After enactment: execution, audit, and local records',
      shortTitle: 'After enactment',
      type: 'concept',
      content: (
        <>
          <p>
            For national agency execution, <Term id="far-1" expand /> reports
            appropriations, allotments, obligations, disbursements, and balances
            for a reporting period. This is the direct starting point for tracing
            how far budget authority moved—but you must still read the agency,
            fund source, period, and level of detail.
          </p>
          <p>
            A <Term id="nca" expand /> is cash authority, not the appropriation
            itself. Status or utilization reports for NCAs help answer cash-release
            and cash-use questions. Agency disbursement reports and supporting
            records can offer more payment detail, subject to publication and
            aggregation limits.
          </p>
          <p>
            A <Term id="annual-audit-report" expand /> is retrospective. It helps
            you examine audited financial statements, observations, compliance,
            controls, and agency responses; it is not a live project tracker.
          </p>
          <p>
            For an LGU, use the <Term id="annual-investment-program" expand /> for
            the approved annual investment priorities and the{' '}
            <Term id="appropriation-ordinance" expand /> for legal budget authority.
            Then use local accounting, accomplishment, and COA audit records to ask
            what happened during implementation.
          </p>
          <p className="text-sm text-muted-foreground">
            Sources: DBM&apos;s{' '}
            <a href="https://www.dbm.gov.ph/index.php/statement-of-appropriations-allotments-obligations-disbursements-and-balances">SAAODB collection</a>{' '}
            and{' '}
            <a href="https://www.dbm.gov.ph/index.php/programs-projects/status-of-nca-utilization">NCA utilization collection</a>; Commission on Audit{' '}
            <a href="https://coa.gov.ph/coa_at_a_glance/">audit-report descriptions</a>; and DBM&apos;s{' '}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/Issuances/2023/Local-Budget-Circular/BOM-for-LGUs-2023-Edition-%282024-Reprinted%29-For-Posting-in-DBM-Website.pdf">Budget Operations Manual for LGUs</a>.
          </p>
        </>
      ),
    },
    {
      id: 'decision-tree',
      title: 'Static document selector',
      shortTitle: 'Selector',
      type: 'interactive',
      content: (
        <>
          <p>
            This static selector replaces the Phase 3 guided document explorer.
            Begin with the question in the left column, then open the starting
            document in the right column. No sample corpus or document-viewer work
            is included in this lesson.
          </p>
          <div className="not-prose my-8 space-y-3" aria-label="Budget question to document decision tree">
            {DECISIONS.map((item, index) => (
              <div key={item.question} className="grid gap-3 rounded-lg border bg-card p-5 md:grid-cols-[auto_1fr_auto_1fr] md:items-start">
                <span className="flex size-7 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground" aria-hidden="true">{index + 1}</span>
                <div><p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Question</p><p className="mt-1 font-medium">{item.question}</p></div>
                <span className="hidden pt-5 text-primary md:block" aria-hidden="true">→</span>
                <div><p className="text-xs font-semibold uppercase tracking-wide text-primary">Start with {item.document}</p><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.note}</p></div>
              </div>
            ))}
          </div>
          <div className="not-prose my-6 rounded-lg border bg-secondary/40 p-5">
            <h3 className="font-semibold">What public reports usually cannot promise</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
              <li>Real-time status: reports have cutoff dates and may be preliminary or revised.</li>
              <li>Per-project detail: published tables may aggregate by agency, program, fund, or expense class.</li>
              <li>One-file completeness: authority, cash, payment, physical delivery, and audit evidence often live in different systems.</li>
              <li>Perfect comparability: names, classifications, scope, and reporting formats can change.</li>
            </ul>
          </div>
          <p>
            If the starting document does not answer the question at the required
            level, narrow the request: name the project, agency or LGU, fiscal year,
            budget stage, reporting cutoff, and exact measure you need.
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
          title="Match the question to the best starting document"
          moduleId="mod-07"
          lessonId="07.1"
          items={[
            {
              prompt: 'You want the amount Congress enacted for a national agency program. Where should you start?',
              options: ['National Expenditure Program', 'General Appropriations Act', 'NCA utilization report', 'COA annual audit report'],
              correct: 1,
              explanation: 'The GAA is the enacted appropriations law and is the starting source for what Congress authorized.',
              wrong: {
                0: 'The NEP shows the executive proposal, which may differ from the enacted amount.',
                2: 'NCA reporting concerns cash authority and use after enactment, not the amount Congress authorized.',
                3: 'An audit report reviews records and operations after the fact; it is not the enacted appropriations law.',
              },
            },
            {
              prompt: 'You want to compare an agency’s allotments, obligations, disbursements, and balances for a reporting period. Where should you start?',
              options: ['BESF macroeconomic assumptions', 'FAR No. 1 / SAAODB', 'Annual Investment Program', 'National Expenditure Program'],
              correct: 1,
              explanation: 'FAR No. 1 is designed to report those national-agency execution stages and balances for the period.',
              wrong: {
                0: 'The BESF provides the wider fiscal picture, not this agency execution sequence.',
                2: 'An AIP is a local investment-planning document, not a national agency execution report.',
                3: 'The NEP is the executive proposal before enactment and execution.',
              },
            },
            {
              prompt: 'You want to know why an LGU’s completed project drew an audit observation. Where should you start?',
              options: ['The LGU’s COA annual audit report', 'The national BESF', 'The national NEP', 'An NCA report alone'],
              correct: 0,
              explanation: 'The COA audit report is the starting source for the audit observation, its basis, and the audited entity’s response.',
              wrong: {
                1: 'The BESF presents the national fiscal and financing picture, not a specific LGU audit observation.',
                2: 'The NEP is a proposed national budget and does not contain a later LGU audit finding.',
                3: 'Cash-authority reporting cannot explain the audit scope, criteria, or observation by itself.',
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
          Name the stage before opening the file: proposal, enacted authority,
          fiscal context, execution, cash, audit, or local authorization. Then read
          the fiscal year, cutoff date, scope, and level of aggregation before
          treating the document as an answer.
        </KeyTakeaway>
      ),
    },
  ],
});