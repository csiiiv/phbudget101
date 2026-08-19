import { Figure } from '@/components/content/Figure';
import { defineLesson } from '@/lib/sections';

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'Who writes the first draft?',
      shortTitle: 'Start',
      type: 'introduction',
      content: <p>Who writes the first draft of the national budget?</p>,
    },
    {
      id: 'preparation',
      title: 'Preparation, in brief',
      shortTitle: 'Preparation',
      type: 'concept',
      content: (
        <p>
          Budget preparation starts more than a year before the fiscal year it
          funds. The executive branch sets fiscal targets and priorities, then
          issues the <strong>budget call</strong> that tells agencies to submit
          proposals. Technical budget hearings test those proposals, executive
          review consolidates them, and the result is the{' '}
          <strong>National Expenditure Program (NEP)</strong> — the
          President&apos;s budget proposal to Congress.
        </p>
      ),
    },
    {
      id: 'advocacy',
      title: 'Civil society engages here first',
      shortTitle: 'Engagement',
      type: 'example',
      content: (
        <>
          <p>
            The preparation phase is not an internal executive matter. Advocacy
            during preparation — submitting proposals, commenting on priorities —
            shapes what Congress later receives as the starting proposal:
          </p>

          <Figure module="mod-04" id="mao-ask" />

          <p>What happened with that advocacy, in the end:</p>

          <Figure module="mod-04" id="mao-service-contracting-outcome" />
        </>
      ),
    },
    {
      id: 'cycle',
      title: 'Where this sits in the cycle',
      shortTitle: 'In the cycle',
      type: 'takeaway',
      content: (
        <p>
          Preparation is the first of four phases. The next lessons cover
          legislation, execution, and accountability — and the timeline that
          ties them together.
        </p>
      ),
    },
  ],
});
