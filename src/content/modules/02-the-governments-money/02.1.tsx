import { Figure } from "@/components/content/Figure";
import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { getFigure } from "@/data/figures";
import { defineLesson } from "@/lib/sections";

const MIX = [
  {
    id: "tax-share",
    label: "Tax revenue",
    color: "bg-primary text-primary-foreground",
  },
  {
    id: "non-tax-share",
    label: "Non-tax revenue",
    color: "bg-accent text-accent-foreground",
  },
] as const;

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "When government spends one peso",
      shortTitle: "Start",
      type: "introduction",
      content: (
        <p className="text-lg text-muted-foreground">
          When the national government spends one peso, where did it come from?
          Most likely from a tax. Some comes from other receipts, and when
          receipts are not enough, government can borrow to cover the gap.
        </p>
      ),
    },
    {
      id: "sources",
      title: "Five ways public money enters the picture",
      shortTitle: "Sources",
      type: "concept",
      content: (
        <>
          <p>
            The first distinction is between money government earns or receives
            and money it borrows.
          </p>
          <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border bg-card p-5 sm:col-span-2">
              <h3 className="font-semibold">Taxes</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                <Term id="tax-revenue" expand /> includes income tax,
                value-added tax, customs duties, and{" "}
                <Term id="excise-tax">excise taxes</Term> on selected products.
                Taxes make up the largest part of national government revenue.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Fees and charges</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Payments for particular government services or permissions, such
                as passport fees and registration charges.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Other non-tax revenue</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                <Term id="non-tax-revenue" expand /> includes Treasury income
                and dividends remitted by government-owned or controlled
                corporations.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Grants</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A <Term id="grant" /> is funding received without a repayment
                obligation, often for an agreed purpose.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Borrowing</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                <Term id="government-borrowing" expand /> finances a gap between
                revenue and expenditure. It is not revenue: it creates debt that
                government must repay, generally with interest.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "revenue-mix",
      title: "Taxes carry most of the national purse",
      shortTitle: "The mix",
      type: "interactive",
      content: (
        <>
          <p>
            The Bureau of the Treasury recorded the following composition of
            national government revenue for calendar year 2024. Its non-tax
            total includes fees and charges, Treasury income, other non-tax
            receipts, and grants.
          </p>
          <div className="not-prose my-8 rounded-lg border bg-card p-5">
            <div
              className="flex min-h-20 w-full overflow-hidden rounded-md"
              aria-label="2024 national government revenue composition"
            >
              {MIX.map((item) => {
                const share = getFigure("mod-02", item.id)?.value ?? 0;
                return (
                  <div
                    key={item.id}
                    className={`flex min-w-24 items-center justify-center p-3 text-center text-sm font-semibold ${item.color}`}
                    style={{ flexGrow: share }}
                  >
                    {item.label}
                  </div>
                );
              })}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium">Tax revenue</p>
                <Figure module="mod-02" id="tax-share" />
              </div>
              <div>
                <p className="text-sm font-medium">Non-tax revenue</p>
                <Figure module="mod-02" id="non-tax-share" />
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Static fallback: the bars show each category&apos;s share of total
              revenue. Borrowing is excluded because it finances a shortfall; it
              is not counted as revenue.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "sin-tax-example",
      title: "Worked example: changing an excise tax",
      shortTitle: "Sin tax",
      type: "example",
      content: (
        <>
          <p>
            Republic Act No. 10351, enacted in 2012, restructured excise taxes
            on alcohol and tobacco products. The change shows two decisions tax
            policy can make: how government collects revenue and whether some
            additional receipts are reserved for stated uses.
          </p>
          <p>
            After allocations for tobacco-producing areas, the law directed 80%
            of the remaining incremental revenue to universal health care,
            health goals, and health-awareness programs. It directed the other
            20% to medical assistance and health-enhancement facilities. These
            are earmarks: rules that identify uses for a specified revenue
            stream.
          </p>
          <p className="text-sm text-muted-foreground">
            Deeper reading:{" "}
            <a href="https://lawphil.net/statutes/repacts/ra2012/ra_10351_2012.html">
              Republic Act No. 10351, especially Section 8
            </a>
            . The percentages describe incremental revenue after prior
            allocations; they are not shares of the whole national budget.
          </p>
        </>
      ),
    },
    {
      id: "check",
      title: "Check your understanding",
      shortTitle: "Check",
      type: "knowledge-check",
      content: (
        <KnowledgeCheck
          title="Sort the source of public money"
          moduleId="mod-02"
          lessonId="02.1"
          items={[
            {
              prompt: "A worker pays income tax. Which category receives it?",
              options: [
                "Tax revenue",
                "Fees and charges",
                "Borrowing",
                "Grant",
              ],
              correct: 0,
              explanation: "Income tax is tax revenue collected under tax law.",
              wrong: {
                1: "A fee pays for a particular service.",
                2: "No loan is created by a tax payment.",
                3: "A compulsory tax is not a grant.",
              },
            },
            {
              prompt:
                "A person pays for a new passport. Which category best fits?",
              options: [
                "Excise tax",
                "Fee or charge",
                "Government borrowing",
                "Dividend",
              ],
              correct: 1,
              explanation:
                "The passport payment is a fee for a government service.",
              wrong: {
                0: "Excise taxes apply to selected goods or activities.",
                2: "Government has not taken a loan.",
                3: "Dividends are based on ownership.",
              },
            },
            {
              prompt:
                "Government issues securities to cover a revenue shortfall. What is this?",
              options: [
                "Tax revenue",
                "Fee income",
                "Borrowing that creates debt",
                "A grant",
              ],
              correct: 2,
              explanation:
                "Government securities are borrowing and create an obligation to repay.",
              wrong: {
                0: "Buying a security is lending, not paying tax.",
                1: "The proceeds are financing, not a fee.",
                3: "Securities must be repaid; grants do not.",
              },
            },
          ]}
        />
      ),
    },
    {
      id: "takeaway",
      title: "Key takeaway",
      shortTitle: "Takeaway",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          National government money comes mainly from taxes, with smaller
          amounts from fees, other non-tax receipts, and grants. Borrowing can
          finance the gap when revenues do not cover spending, but it creates
          debt rather than revenue.
        </KeyTakeaway>
      ),
    },
  ],
});
