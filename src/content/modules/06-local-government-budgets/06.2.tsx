import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

const CALENDAR = [
  {
    when: 'Before proposals',
    step: 'Plans and investment priorities identify what the LGU intends to do.',
  },
  {
    when: 'By July 15',
    step: 'Department and office heads submit their budget proposals to the local chief executive.',
  },
  {
    when: 'By October 16',
    step: 'The local chief executive submits the executive budget to the sanggunian.',
  },
  {
    when: 'By year-end',
    step: 'The sanggunian enacts the annual budget through an appropriation ordinance.',
  },
  {
    when: 'After enactment',
    step: 'The approved budget goes to the reviewing authority specified by law.',
  },
] as const;

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'Who signs off on the local budget?',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <p className="text-lg text-muted-foreground">
          A mayor or governor does not enact a local budget alone. The executive
          prepares a proposal, the sanggunian authorizes it, and a reviewing
          authority checks whether the enacted budget follows legal
          requirements.
        </p>
      ),
    },
    {
      id: 'plans-first',
      title: 'The budget should begin with a plan',
      shortTitle: 'Plan',
      type: 'concept',
      content: (
        <>
          <p>
            Local budgeting connects development planning to annual spending. A
            longer-term local development plan identifies needs and desired
            results. The{' '}
            <Term id="local-development-investment-program" expand /> translates
            those priorities into programs and projects, while the{' '}
            <Term id="annual-investment-program" expand /> identifies the
            portion proposed for the budget year.
          </p>
          <p>
            This connection matters because a budget proposal should not be a
            disconnected wish list. Departments relate their activities,
            expected results, and costs to approved local plans. Revenue
            estimates and budget ceilings then limit what can be proposed in the
            coming year.
          </p>
          <div className="not-prose my-6 rounded-lg border bg-accent/40 p-5">
            <p className="font-medium">Planning asks what and why.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Budget preparation adds how much, from which source, and in which
              year.
            </p>
          </div>
        </>
      ),
    },
    {
      id: 'executive-preparation',
      title: 'The executive assembles the proposal',
      shortTitle: 'Prepare',
      type: 'concept',
      content: (
        <>
          <p>
            Department and office heads prepare proposals under the policy
            guidance of the <Term id="local-chief-executive" expand />. The{' '}
            <Term id="local-finance-committee" expand /> helps estimate income,
            recommend expenditure ceilings, and provide financial advice.
          </p>
          <p>
            The local chief executive brings together the treasurer&apos;s
            income information, department proposals, and finance-committee
            estimates into the <Term id="local-executive-budget" expand />.
            Under the Local Government Code, the executive budget is submitted
            to the sanggunian by October 16 for the following fiscal year.
          </p>
          <p>
            At this point the document is still a proposal. Preparation gives
            the executive a central role in shaping the package, but it does not
            create authority to spend.
          </p>
        </>
      ),
    },
    {
      id: 'authorize-and-review',
      title: 'The sanggunian authorizes; another body reviews',
      shortTitle: 'Authorize',
      type: 'concept',
      content: (
        <>
          <p>
            The <Term id="sanggunian" expand /> deliberates on the executive
            proposal and enacts the annual budget through an appropriation
            ordinance. The local chief executive may approve or veto the
            ordinance or particular items as allowed by law; the sanggunian may
            act on a veto under the required voting rules.
          </p>
          <p>
            After enactment, the budget is forwarded for review. The reviewing
            authority depends on the LGU: DBM reviews provincial and highly
            urbanized or independent component city budgets; the sangguniang
            panlalawigan reviews component city and municipal budgets; and the
            appropriate city or municipal sanggunian reviews barangay budgets.
          </p>
          <p>
            Review asks whether the budget complies with law and mandatory
            requirements. It is distinct from the local policy debate that
            happened during authorization.
          </p>
          <div className="not-prose my-8 overflow-x-auto">
            <div className="flex min-w-[44rem] items-stretch gap-2">
              {CALENDAR.map((item, index) => (
                <div
                  key={item.when}
                  className="flex min-w-32 flex-1 items-stretch"
                >
                  <div className="flex-1 rounded-lg border bg-card p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {item.when}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.step}
                    </p>
                  </div>
                  {index < CALENDAR.length - 1 && (
                    <div
                      className="flex w-6 items-center justify-center text-muted-foreground"
                      aria-hidden="true"
                    >
                      &rarr;
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Deeper reading:{' '}
            <a href="https://lawphil.net/statutes/repacts/ra1991/ra_7160_1991.html">
              Local Government Code, Sections 317 to 327
            </a>
            , and{' '}
            <a href="https://www.dbm.gov.ph/index.php/central-office?catid=85&id=85&view=article">
              DBM Local Budget Circular No. 152 and the 2023 Budget Operations
              Manual for LGUs
            </a>
            .
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
          title="Put the roles in order"
          moduleId="mod-06"
          lessonId="06.2"
          items={[
            {
              prompt:
                'Which sequence best describes local budget preparation and authorization?',
              options: [
                'Plans and proposals, then executive budget, then sanggunian appropriation ordinance',
                'Appropriation ordinance, then department proposals, then development plan',
                'External review, then executive proposal, then revenue estimate',
                'Cash payment, then planning, then authorization',
              ],
              correct: 0,
              explanation:
                'Plans guide department proposals; the local chief executive assembles the executive budget; the sanggunian then authorizes spending through an ordinance.',
              wrong: {
                1: 'Authorization follows preparation, not the reverse.',
                2: 'External review follows enactment; it does not begin preparation.',
                3: 'Cash payments belong to execution after legal authorization.',
              },
            },
            {
              prompt:
                'Who enacts the annual local budget through an appropriation ordinance?',
              options: [
                'The local treasurer alone',
                'The local finance committee',
                'The sanggunian',
                'Every department head jointly',
              ],
              correct: 2,
              explanation:
                'The sanggunian is the local legislative body that authorizes the annual budget through an appropriation ordinance.',
              wrong: {
                0: 'The treasurer supplies income information but does not enact the budget alone.',
                1: 'The finance committee provides estimates and advice; it is not the authorizing legislature.',
                3: 'Department heads propose their office budgets but do not jointly enact the ordinance.',
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
          The local budget moves from plans and department proposals to an
          executive budget, then to sanggunian authorization and legal review.
          Preparation and authorization belong to different actors so that one
          office does not control the whole decision.
        </KeyTakeaway>
      ),
    },
  ],
});
