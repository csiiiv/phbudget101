import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

const PURSES = [
  {
    title: 'National government',
    raises:
      'Income tax, value-added tax, customs duties, excise taxes, fees, and other national receipts',
    uses: 'Nationwide programs, national agencies, debt service, and transfers to local governments',
    rule: 'National revenue laws and the national budget govern this purse.',
  },
  {
    title: 'Local government unit',
    raises:
      'Local business taxes, real property tax, service fees, public-market charges, and income from local enterprises',
    uses: 'Services and facilities assigned to the province, city, municipality, or barangay',
    rule: 'A local ordinance must authorize a local tax, fee, or charge within limits set by law.',
  },
] as const;

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'Does city hall spend the same money?',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <p className="text-lg text-muted-foreground">
          Does your city hall spend the same money as the national government?
          The two purses are connected, but they are not interchangeable.
        </p>
      ),
    },
    {
      id: 'two-purses',
      title: 'Two levels, two revenue systems',
      shortTitle: 'Two purses',
      type: 'concept',
      content: (
        <>
          <p>
            The national government collects taxes and other receipts under
            national laws. A <Term id="local-government-unit" expand /> also has
            authority to create some revenue sources within its territory,
            subject to the Local Government Code and other laws.
          </p>
          <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
            {PURSES.map((purse) => (
              <div key={purse.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{purse.title}</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-medium">Main receipts</dt>
                    <dd className="mt-1 text-muted-foreground">
                      {purse.raises}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium">What the purse supports</dt>
                    <dd className="mt-1 text-muted-foreground">{purse.uses}</dd>
                  </div>
                  <div>
                    <dt className="font-medium">Key rule</dt>
                    <dd className="mt-1 text-muted-foreground">{purse.rule}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
          <p>
            The label depends on who has legal authority to collect the money.
            Income tax and value-added tax are national taxes. A city business
            tax and real property tax are local sources.
          </p>
        </>
      ),
    },
    {
      id: 'own-source-and-transfers',
      title: 'Local money comes through two doors',
      shortTitle: 'Two doors',
      type: 'concept',
      content: (
        <>
          <p>
            <Term id="own-source-revenue" expand /> is raised by the LGU itself.
            Examples include local taxes, regulatory fees, service charges, and
            receipts from local economic enterprises. The sanggunian authorizes
            a local tax, fee, or charge through an ordinance within the powers
            and limits set by law.
          </p>
          <p>
            A <Term id="intergovernmental-transfer" expand /> moves resources
            from one level of government to another. The main example is the{' '}
            <Term id="national-tax-allotment" expand />, the LGUs&apos; share in
            national taxes. It is national revenue at collection, then local
            revenue when released as the LGU&apos;s lawful share.
          </p>
          <p>
            This distinction matters when you ask who controls a revenue lever.
            An LGU can improve local collection or adjust authorized local
            rates, but it cannot rewrite the national income-tax law. It can
            plan around its NTA, but it does not collect that share directly
            from national taxpayers.
          </p>
        </>
      ),
    },
    {
      id: 'trace-a-receipt',
      title: 'Trace the receipt before naming the purse',
      shortTitle: 'Trace it',
      type: 'example',
      content: (
        <>
          <p>
            Consider three payments. A resident pays real property tax to the
            city treasurer: that is own-source local revenue. A company pays
            national income tax to the Bureau of Internal Revenue: that begins
            as national revenue. When part of national tax collections is
            released to an LGU through the NTA, it crosses from the national
            purse to the local purse as a transfer.
          </p>
          <div className="not-prose my-6 rounded-lg border bg-accent/40 p-5">
            <p className="font-medium">A useful reading question</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Ask both “Who collected it first?” and “Who now has legal
              authority to budget it?” The answers may differ when a transfer is
              involved.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            Deeper reading:{' '}
            <a href="https://lawphil.net/statutes/repacts/ra1991/ra_7160_1991.html">
              Local Government Code, especially Sections 129, 132, and 284–286
            </a>
            , and the{' '}
            <a href="https://reports.dbm.gov.ph/ira2.0/">
              Department of Budget and Management NTA legal-basis page
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
          title="Classify the receipt"
          moduleId="mod-02"
          lessonId="02.2"
          items={[
            {
              prompt:
                'A city collects real property tax from a landowner. How should the city classify the receipt?',
              options: [
                'Own-source local revenue',
                'National Tax Allotment',
                'National income tax',
                'A grant from another government',
              ],
              correct: 0,
              explanation:
                'Real property tax is imposed and collected by an authorized LGU, so it is own-source local revenue.',
              wrong: {
                1: 'The NTA is transferred from national tax collections; this payment goes directly to the city as a local tax.',
                2: 'Income tax is a different tax collected under national law.',
                3: 'A compulsory local tax payment is not a grant.',
              },
            },
            {
              prompt:
                'National tax collections are released to a municipality as its NTA share. What best describes the release?',
              options: [
                'A new local business tax',
                'An intergovernmental transfer',
                'A fee for a municipal service',
                'Income from a municipal enterprise',
              ],
              correct: 1,
              explanation:
                'The NTA transfers an LGU’s lawful share of national taxes from the national government to the local government.',
              wrong: {
                0: 'The municipality did not impose a new tax; the amount comes from national tax collections.',
                2: 'No resident paid for a particular municipal service in this transaction.',
                3: 'The amount was not earned by operating a local enterprise.',
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
          National and local governments have distinct revenue powers. LGUs fund
          their purse with both own-source revenue and transfers, especially the
          National Tax Allotment. To classify money correctly, trace who
          collected it and who now has authority to budget it.
        </KeyTakeaway>
      ),
    },
  ],
});
