import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { defineLesson } from '@/lib/sections';

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'When a classroom gets built',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <p className="text-lg text-muted-foreground">
          When a classroom gets built, who decided that — and where did the money
          come from?
        </p>
      ),
    },
    {
      id: 'pfm-definition',
      title: 'Public Financial Management, in one sentence',
      shortTitle: 'What is PFM?',
      type: 'concept',
      content: (
        <>
          <p>
            <strong>Public Financial Management (PFM)</strong> is the system by
            which government plans, directs, and controls public money to deliver
            public services.
          </p>
          <p>
            That definition is deliberately wide. PFM covers how government
            forecasts what it will earn, how it decides what to spend on, how it
            turns those decisions into law, how the money actually moves, and how
            everyone checks the results. The budget sits at the center of that
            system — but the system is bigger than any single document.
          </p>
        </>
      ),
    },
    {
      id: 'services',
      title: 'Every service has a budget behind it',
      shortTitle: 'Services',
      type: 'concept',
      content: (
        <>
          <p>
            Every public service you can name — a classroom, a vaccine, a road, a
            social worker&apos;s salary — has a budget behind it. Someone estimated
            a cost. Someone decided it was worth funding. Someone wrote it into a
            plan, a law, a contract, a payroll. When the service works, it is
            because that whole chain worked. When it fails, the failure lives
            somewhere in that chain.
          </p>
          <p>
            This is why the budget is often described as the{' '}
            <em>operationalization of collective priorities</em>: it is where a
            society&apos;s stated intentions meet actual resources. Of everything a
            government produces, the budget is the most complete inventory of what
            it intends to do — because every intention listed there carries a cost
            someone agreed to pay.
          </p>
        </>
      ),
    },
    {
      id: 'cast',
      title: 'The cast of the budget story',
      shortTitle: 'The cast',
      type: 'concept',
      content: (
        <>
          <p>
            Four groups appear throughout this course, each with a distinct role:
          </p>
          <ul>
            <li>
              <strong>Citizens</strong> fund the budget through taxes and fees, use
              its services, and hold the right to shape and check it.
            </li>
            <li>
              <strong>Officials and agencies</strong> propose, allocate, and spend
              the money.
            </li>
            <li>
              <strong>Oversight institutions</strong> audit, review, and enforce
              the rules.
            </li>
            <li>
              <strong>Civil society</strong> watches, analyzes, and advocates
              between elections.
            </li>
          </ul>
          <p>
            In later modules you will meet each of them at their exact post in the
            budget cycle. For now, keep the cast in mind: no budget story has a
            single protagonist.
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
          title="Match the service to the budget decision behind it"
          moduleId="mod-01"
          lessonId="01.1"
          items={[
            {
              prompt:
                'Vaccines arrive at a barangay health station for a scheduled immunization day. Which budget decision sits directly behind this?',
              options: [
                'An allocation for vaccine procurement in the health department’s budget.',
                'A press release announcing an immunization program.',
                'An audit observation about last year’s medicines.',
              ],
              correct: 0,
              explanation:
                'The service required an appropriation: an allocation for procurement. Announcements and audit reports neither buy nor deliver vaccines.',
              wrong: {
                1: 'An announcement creates no authority to spend — until the program is funded, no one can procure the vaccines.',
                2: 'An audit observation looks backward at past spending; it neither authorizes nor pays for this year\'s vaccines.',
              },
            },
            {
              prompt:
                'Public school teachers receive their salaries on time every month. Which budget decision sits directly behind this?',
              options: [
                'A tax collection target set for the revenue agencies.',
                'A personnel services allocation in the annual appropriations law.',
                'A congressional hearing on education.',
              ],
              correct: 1,
              explanation:
                'Salaries are paid from a personnel services allocation. The other items may relate to the budget, but none of them pays a teacher.',
              wrong: {
                0: 'A collection target is about money coming in — it funds the budget but pays no individual salary.',
                2: 'A hearing discusses education policy; it obligates no funds and cuts no paycheck.',
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
          PFM is the whole system that turns public money into public services.
          Every service has a chain of budget decisions behind it — and the
          budget is the most complete inventory of what government actually
          intends to do.
        </KeyTakeaway>
      ),
    },
  ],
});
