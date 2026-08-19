import { defineLesson } from '@/lib/sections';

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'Welcome',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <p>
          Welcome to <strong>Budget 101</strong> — a self-paced course on how the
          Philippine public budget works: where the money comes from, how it is
          planned and legislated, how it turns into services, and where you can
          participate.
        </p>
      ),
    },
    {
      id: 'coverage',
      title: 'What this course covers',
      shortTitle: 'Coverage',
      type: 'concept',
      content: (
        <>
          <p>Eleven modules, from orientation through a capstone investigation:</p>
          <ol>
            <li>Why budgets matter</li>
            <li>Where the money comes from</li>
            <li>How the budget is organized</li>
            <li>The budget cycle</li>
            <li>From appropriation to public service</li>
            <li>Local government budgets</li>
            <li>Reading budget documents</li>
            <li>Evaluating budget decisions</li>
            <li>Participating in the process</li>
            <li>Capstone: follow the money</li>
          </ol>
        </>
      ),
    },
    {
      id: 'paths',
      title: 'Choose a learning path',
      shortTitle: 'Paths',
      type: 'concept',
      content: (
        <>
          <ul>
            <li>
              <strong>Quick overview</strong> — the core: modules 1, 3, 4, and 5
              (about 2–3 hours).
            </li>
            <li>
              <strong>Full course</strong> — all modules in order (about 10–12
              hours).
            </li>
            <li>
              <strong>Reference</strong> — jump straight to the glossary, documents,
              and other lookup pages.
            </li>
          </ul>
          <p>You can switch paths anytime from Settings.</p>
        </>
      ),
    },
    {
      id: 'how-to-use',
      title: 'How to use this course',
      shortTitle: 'How to use',
      type: 'takeaway',
      content: (
        <p>
          Each lesson opens with a guiding question, explains the concepts, shows
          a worked example, and ends with a short knowledge check. Your progress
          is saved on this device — export it from Settings if you want to
          continue on another device.
        </p>
      ),
    },
  ],
});
