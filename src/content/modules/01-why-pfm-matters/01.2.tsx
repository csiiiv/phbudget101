import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';

const LENSES = [
  {
    lens: 'Financial plan',
    question: 'Can we afford it?',
    body: 'A budget matches what government expects to earn with what it programs to spend. Read this way, it is an exercise in arithmetic: revenues, obligations, and the gap between them.',
    signal: 'Deficits, revenue targets, unprogrammed funds',
  },
  {
    lens: 'Statement of priorities',
    question: 'What do we choose?',
    body: 'Money is finite; a budget allocates it among competing uses. Read this way, every line is a choice — funding one thing means not funding another. To know a government’s real priorities, follow the money.',
    signal: 'Which programs grow, which shrink, which never appear',
  },
  {
    lens: 'Legal authorization',
    question: 'What may we do?',
    body: 'No public money may be spent without an appropriation. Read this way, the budget is a law: it grants agencies the authority — and sets the limits — to obligate and disburse funds.',
    realWorld: 'The General Appropriations Act',
  },
  {
    lens: 'Accountability mechanism',
    question: 'What happened?',
    body: 'Budget records create the trail that audits and reviews later follow. Read this way, the budget is a promise that must be accounted for: every peso authorized must be traceable to a service delivered.',
    realWorld: 'Audit reports, accomplishment reports',
  },
];

export default function Lesson0102() {
  return (
    <>
      <p className="text-lg text-muted-foreground">
        Is a budget just a spreadsheet? It is at least four documents wearing
        one cover.
      </p>

      <h2>One document, four readings</h2>
      <p>
        A budget looks like a table of numbers. But depending on the question
        you bring to it, the same document answers in four different ways. The
        rest of this course uses these four lenses constantly, so it is worth
        fixing them now.
      </p>

      <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
        {LENSES.map((l, i) => (
          <div
            key={l.lens}
            className="rounded-lg border bg-card p-5 space-y-2"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-primary">
              Lens {i + 1}
            </div>
            <h3 className="font-semibold leading-snug">{l.lens}</h3>
            <p className="text-sm italic text-muted-foreground">{l.question}</p>
            <p className="text-sm leading-relaxed">{l.body}</p>
            {l.signal && (
              <p className="text-xs text-muted-foreground pt-1">
                <span className="font-medium">Where you see it:</span> {l.signal}
              </p>
            )}
            {l.realWorld && (
              <p className="text-xs text-muted-foreground pt-1">
                <span className="font-medium">Where you see it:</span> {l.realWorld}
              </p>
            )}
          </div>
        ))}
      </div>

      <h2>Follow the money</h2>
      <p>
        The second lens deserves special attention, because it is the one this
        course keeps returning to. Governments say many things; the budget is
        where those statements meet arithmetic. When a program is announced but
        never funded, the announcement is not yet a policy — it is a press
        release. When a program is funded year after year, that is a priority,
        whatever the speeches say.
      </p>
      <p>
        <strong>What is funded is what is real.</strong> A budget increase
        reveals a new priority. A cut reveals an abandoned one. A line that
        exists but never gets spent reveals an implementation problem. Learning
        to read these signals is the core skill of budget literacy.
      </p>

      <h2>Why the fourth lens matters most for accountability</h2>
      <p>
        Anyone can read a budget as a plan or as priorities. The harder — and
        more consequential — reading treats it as an accountability document.
        Because every peso must be authorized, obligated, disbursed, and
        accounted for, the budget leaves a trail. That trail is what turns
        public money into public trust: it makes it possible to ask, years
        later, whether the classroom promised in the plan was the classroom
        built on the ground.
      </p>

      <KnowledgeCheck
        title="Classify the statement under the correct lens"
        items={[
          {
            prompt:
              '"The 2025 program support fund for a child nutrition drive is ₱1.2 billion, up from ₱0.9 billion the year before."',
            options: [
              'Financial plan',
              'Statement of priorities',
              'Legal authorization',
              'Accountability mechanism',
            ],
            correct: 1,
            explanation:
              'The year-on-year comparison is about choice: the increase signals a rising priority relative to everything else that could have been funded.',
          },
          {
            prompt:
              '"No agency may enter into a contract for a new feeding center until the funds are appropriated for it."',
            options: [
              'Financial plan',
              'Statement of priorities',
              'Legal authorization',
              'Accountability mechanism',
            ],
            correct: 2,
            explanation:
              'This is the budget as law: appropriation comes before obligation. Spending without it is unauthorized.',
          },
          {
            prompt:
              '"The audit report found that 60% of last year’s classroom construction budget was obligated but only 20% was disbursed by year-end."',
            options: [
              'Financial plan',
              'Statement of priorities',
              'Legal authorization',
              'Accountability mechanism',
            ],
            correct: 3,
            explanation:
              'The audit trail lets reviewers compare what was authorized with what actually moved — and ask why the gap exists.',
          },
        ]}
      />

      <KeyTakeaway>
        A budget is simultaneously a financial plan, a statement of
        priorities, a legal authorization, and an accountability mechanism.
        Which lens you use depends on the question you are asking — and{' '}
        <strong>what is funded is what is real</strong>.
      </KeyTakeaway>
    </>
  );
}
