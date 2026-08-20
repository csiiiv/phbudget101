import { KeyTakeaway } from '@/components/content/KeyTakeaway';
import { KnowledgeCheck } from '@/components/content/KnowledgeCheck';
import { Term } from '@/components/content/Term';
import { defineLesson } from '@/lib/sections';

const DEVOLVED_AREAS = [
  {
    area: 'Health and social services',
    examples:
      'Local health services, social welfare services, and facilities assigned by law to each LGU level',
  },
  {
    area: 'Agriculture and environment',
    examples:
      'Agricultural extension, natural-resource services, and locally assigned regulatory work',
  },
  {
    area: 'Local infrastructure',
    examples:
      'Local roads, bridges, water systems, public markets, and other facilities assigned to the LGU',
  },
  {
    area: 'Community services',
    examples:
      'Local information, tourism, housing, and other services where the Local Government Code assigns responsibility',
  },
] as const;

export default defineLesson({
  sections: [
    {
      id: 'start',
      title: 'Why did local budgets become a national story?',
      shortTitle: 'Start',
      type: 'introduction',
      content: (
        <p className="text-lg text-muted-foreground">
          The Mandanas-Garcia ruling changed the tax base used to compute the
          local-government share. More resources raised the practical question
          behind devolution: which level of government should deliver each
          service, and does it have the capacity to do so well?
        </p>
      ),
    },
    {
      id: 'devolution',
      title: 'Devolution moves responsibility closer',
      shortTitle: 'Devolution',
      type: 'concept',
      content: (
        <>
          <p>
            <Term id="devolution" expand /> assigns functions, services,
            facilities, and corresponding responsibility from the national
            government to local government units. The Local Government Code
            already assigned different minimum services to provinces, cities,
            municipalities, and barangays.
          </p>
          <p>
            The idea is not that every task belongs to the smallest LGU. A
            service with mainly local benefits may fit local delivery; a service
            that crosses boundaries, needs large-scale systems, or redistributes
            resources may require a higher LGU level, the national government,
            or shared action.
          </p>
          <p>
            <Term id="fiscal-decentralization" expand /> is the resource side of
            that arrangement: subnational governments need adequate revenue
            powers and transfers to carry out their responsibilities. Assigning
            a function without people, systems, or sustainable funding does not
            by itself improve the service.
          </p>
        </>
      ),
    },
    {
      id: 'mandanas-garcia',
      title: 'What Mandanas-Garcia changed',
      shortTitle: 'The ruling',
      type: 'concept',
      content: (
        <>
          <p>
            The Constitution gives LGUs a just share in <em>national taxes</em>.
            In 2018, the Supreme Court ruled that limiting the computation base
            to national internal revenue taxes was unconstitutional. The ruling
            became final in 2019 and was implemented in allotments beginning in
            FY 2022.
          </p>
          <p>
            The result was a broader base for the{' '}
            <Term id="national-tax-allotment" expand />, formerly called the
            Internal Revenue Allotment. The change increased the resources
            transferred through the formula, but it did not let each LGU choose
            its own percentage or erase the formula for distributing shares
            among LGU levels.
          </p>
          <p>
            It also did not itself invent new local functions. The service
            assignments arise from the Local Government Code and other laws. The
            larger allotment made full implementation of those assignments more
            financially possible and more urgent.
          </p>
          <p className="text-sm text-muted-foreground">
            Deeper reading:{' '}
            <a href="https://lawphil.net/judjuris/juri2018/jul2018/gr_199802_2018.html">
              Supreme Court decision in G.R. Nos. 199802 and 208488
            </a>{' '}
            and its{' '}
            <a href="https://lawphil.net/judjuris/juri2019/apr2019/gr_199802_2019.html">
              2019 resolution
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: 'functions-and-transition',
      title: 'More resources do not remove transition work',
      shortTitle: 'Transition',
      type: 'interactive',
      content: (
        <>
          <div className="not-prose my-8 space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Before the ruling
                </p>
                <h3 className="mt-2 font-semibold">
                  Narrower computation base
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  The LGU share was computed from national internal revenue
                  taxes, excluding other national-tax collections from the
                  general base.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  After the ruling
                </p>
                <h3 className="mt-2 font-semibold">
                  All national taxes as the starting point
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  The computation begins from national taxes more broadly,
                  subject to the Court&apos;s treatment of exclusions and
                  special shares.
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">
                Examples of devolved service areas
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {DEVOLVED_AREAS.map((item) => (
                  <div key={item.area} className="rounded-md border p-4">
                    <p className="font-medium">{item.area}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.examples}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-primary bg-accent/40 p-5">
              <h3 className="font-semibold">The current transition</h3>
              <p className="mt-2 text-sm">
                Executive Order No. 103 of 2025 amended the earlier
                full-devolution policy. Cities are to phase into full
                implementation by FY 2027, while provinces and municipalities
                have until FY 2028. The order calls for assignments to reflect
                LGU financial, technical, and administrative capacity.
              </p>
            </div>
          </div>
          <p>
            A <Term id="devolution-transition-plan" expand /> maps how
            functions, staffing, assets, data, and capacity support move over
            time. <Term id="absorptive-capacity" expand /> matters because an
            LGU needs qualified personnel, procurement and financial systems,
            facilities, and oversight, not only a larger allotment, to convert
            funds into reliable services.
          </p>
          <p>
            Transition challenges can differ sharply across LGUs. Revenue
            capacity, staffing markets, geography, existing facilities, and
            demand for services all vary. National agencies retain
            standard-setting, technical-support, monitoring, and augmentation
            roles where law and policy provide them.
          </p>
          <p className="text-sm text-muted-foreground">
            Current policy source:{' '}
            <a href="https://chief.lawphil.net/executive/execord/eo2025/eo_103_2025.html">
              Executive Order No. 103, series of 2025
            </a>
            , amending{' '}
            <a href="https://lawphil.net/executive/execord/eo2021/eo_138_2021.html">
              Executive Order No. 138, series of 2021
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
          title="Test the devolution claims"
          moduleId="mod-06"
          lessonId="06.3"
          items={[
            {
              prompt: 'What did the Mandanas-Garcia ruling directly change?',
              options: [
                "The base used to compute the LGUs' just share in national taxes",
                'Every service assignment in the Local Government Code',
                "Each LGU's power to select its own NTA percentage",
                'The national budget cycle',
              ],
              correct: 0,
              explanation:
                'The ruling required the just-share computation to use national taxes more broadly, rather than only national internal revenue taxes.',
              wrong: {
                1: 'Service assignments come from the Local Government Code and other laws, not from the computation ruling alone.',
                2: 'LGU shares still follow the formula set by law.',
                3: 'The national budget cycle was not replaced by this ruling.',
              },
            },
            {
              prompt:
                'An LGU receives more funding but lacks specialist staff, procurement capacity, and service facilities. What does this illustrate?',
              options: [
                'A transition and absorptive-capacity challenge',
                'Proof that the NTA is a local tax',
                'Automatic completion of devolution',
                'A fiscal surplus',
              ],
              correct: 0,
              explanation:
                'Resources help, but staffing, systems, facilities, and oversight are also needed to assume and deliver a function.',
              wrong: {
                1: 'The NTA is a transfer from national taxes, not a tax imposed by the LGU.',
                2: 'Receiving funds does not automatically complete the operational transition.',
                3: 'The scenario does not compare total revenue with expenditure.',
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
          Mandanas-Garcia broadened the national-tax base used for the LGU
          allotment. Devolution is the related but distinct work of assigning
          and building responsibility for services. More resources matter, but
          capable people, systems, facilities, and clear national-local roles
          determine whether services improve.
        </KeyTakeaway>
      ),
    },
  ],
});
