import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

const LOCAL_SOURCES = [
  {
    title: 'Real property tax',
    body: 'A tax tied to taxable land, buildings, and other real property within the LGU.',
  },
  {
    title: 'Local business taxes',
    body: 'Taxes authorized for businesses operating within the LGU’s jurisdiction.',
  },
  {
    title: 'Fees and charges',
    body: 'Payments for permits, regulatory actions, facilities, or services provided by the LGU.',
  },
  {
    title: 'Economic enterprises',
    body: 'Receipts from LGU-operated activities such as a public market, terminal, or slaughterhouse.',
  },
] as const;

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'Where does a municipality get its money?',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <p className="text-lg text-muted-foreground">
          A municipality does not rely on a single source. Its purse combines
          revenue it raises locally with shares and transfers that arrive from
          outside the LGU.
        </p>
      ),
    },
    {
      id: 'own-source-revenue',
      title: 'Money raised within the LGU',
      shortTitle: 'Local sources',
      type: 'concept',
      content: (
        <>
          <p>
            A <Term id="local-government-unit" expand /> can create authorized
            local revenue sources under the Local Government Code and other
            laws. <Term id="own-source-revenue" expand /> is money the LGU
            raises through its own taxes, fees, charges, and operations.
          </p>
          <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
            {LOCAL_SOURCES.map((source) => (
              <div key={source.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{source.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {source.body}
                </p>
              </div>
            ))}
          </div>
          <p>
            These powers have legal limits. The sanggunian imposes a local tax,
            fee, or charge through an ordinance, and an LGU cannot simply copy
            every tax collected by the national government.
          </p>
        </>
      ),
    },
    {
      id: 'transfers',
      title: 'Money that enters from outside',
      shortTitle: 'Transfers',
      type: 'concept',
      content: (
        <>
          <p>
            The largest transfer for many LGUs is the{' '}
            <Term id="national-tax-allotment" expand />, their automatically
            released share in national taxes. The money begins in national tax
            collections and becomes part of each LGU&apos;s available resources
            through the allotment required by law.
          </p>
          <p>
            The older name was <strong>Internal Revenue Allotment (IRA)</strong>
            . Following the Mandanas-Garcia ruling, the term NTA reflects that
            the computation base covers national taxes more broadly, not only
            national internal revenue taxes. Module 6.3 explains that change in
            detail.
          </p>
          <p>
            Other external sources can include an LGU&apos;s special shares in
            national taxes or national wealth, grants, donations, and transfers
            tied to particular programs. A transfer may be recurring or
            conditional, so the LGU must read the legal basis and release
            conditions before treating it as freely available money.
          </p>
          <p className="text-sm text-muted-foreground">
            Deeper reading:{' '}
            <a href="https://lawphil.net/statutes/repacts/ra1991/ra_7160_1991.html">
              Local Government Code, Book II
            </a>
            , and the{' '}
            <a href="https://reports.dbm.gov.ph/ira2.0/">
              DBM National Tax Allotment legal-basis page
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: 'illustrative-mix',
      title: 'A local purse is a mix',
      shortTitle: 'The mix',
      type: 'interactive',
      content: (
        <>
          <p>
            <strong>
              Illustrative example. This is a teaching composition using
              resource units, not the accounts of an actual municipality.
            </strong>
          </p>
          <div className="not-prose my-8 rounded-lg border bg-card p-5">
            <div className="flex h-16 overflow-hidden rounded-md text-center text-xs font-semibold">
              <div className="flex basis-[55%] items-center justify-center bg-primary p-2 text-primary-foreground">
                NTA
                <br />
                55 units
              </div>
              <div className="flex basis-[35%] items-center justify-center bg-accent p-2 text-accent-foreground">
                Own-source
                <br />
                35 units
              </div>
              <div className="flex basis-[10%] items-center justify-center bg-muted p-2 text-muted-foreground">
                Other
                <br />
                10
              </div>
            </div>
            <div className="mt-5 space-y-2 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">NTA:</strong> share in
                national taxes released to the LGU.
              </p>
              <p>
                <strong className="text-foreground">Own-source:</strong> local
                taxes, fees, charges, and enterprise receipts.
              </p>
              <p>
                <strong className="text-foreground">
                  Other external sources:
                </strong>{' '}
                special shares, grants, or program transfers.
              </p>
            </div>
          </div>
          <p>
            Real LGU mixes differ. A large city may raise a greater share
            locally; another municipality may depend more heavily on the NTA.
            The chart teaches the categories, not a benchmark that every LGU
            should match.
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
          title="Classify the local receipt"
          moduleId="mod-06"
          lessonId="06.1"
          items={[
            {
              prompt:
                'A municipality collects stall rentals from its public market. Which category best fits the receipt?',
              options: [
                'Own-source revenue from an economic enterprise',
                'National Tax Allotment',
                'National income tax',
                'Public debt',
              ],
              correct: 0,
              explanation:
                'The municipality earns the receipt through an LGU-operated public market, so it is own-source revenue from an economic enterprise.',
              wrong: {
                1: 'The NTA comes from the LGU’s share in national taxes, not market operations.',
                2: 'National income tax is collected under national law.',
                3: 'A rental receipt does not create a borrowing obligation.',
              },
            },
            {
              prompt:
                'DBM releases a municipality’s lawful share in national taxes. Which source is this?',
              options: [
                'A local business tax',
                'The National Tax Allotment',
                'A permit fee',
                'Income from a public terminal',
              ],
              correct: 1,
              explanation:
                'The NTA is the LGU’s automatically released share in national taxes.',
              wrong: {
                0: 'A local business tax is imposed locally rather than transferred from national collections.',
                2: 'A permit fee is paid for a local permission or regulatory action.',
                3: 'Terminal income comes from an LGU economic enterprise.',
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
          An LGU purse combines own-source revenue—local taxes, fees, charges,
          and enterprise receipts—with external resources, especially the
          National Tax Allotment. Always identify who raised the money and
          whether any law or program limits its use.
        </KeyTakeaway>
      ),
    },
  ],
});
