import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const CALENDAR = [
  {
    when: "Bago ang mga proposal",
    step: "Tinutukoy ng mga plano at investment priority ang balak gawin ng LGU.",
  },
  {
    when: "Hanggang July 15",
    step: "Isinusumite ng mga head ng departamento at opisina ang kanilang mga budget proposal sa local chief executive.",
  },
  {
    when: "Hanggang October 16",
    step: "Isinusumite ng local chief executive ang executive budget sa sanggunian.",
  },
  {
    when: "Hanggang katapusan ng taon",
    step: "Ipinapasa ng sanggunian ang taunang budget sa pamamagitan ng isang appropriation ordinance.",
  },
  {
    when: "Pagkatapos maipasa",
    step: "Pumapasok ang naaprubahang budget sa reviewing authority na tinukoy ng batas.",
  },
] as const;

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Sino ang nag-aapruba ng local budget?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <p className="text-lg text-muted-foreground">
          Hindi nag-iisa ang mayor o governor sa pagpasa ng local budget.
          Naghahanda ang executive ng proposal, inaapruba ito ng sanggunian, at
          tinitingnan ng isang reviewing authority kung sumusunod sa mga legal
          na requirement ang napasang budget.
        </p>
      ),
    },
    {
      id: "plans-first",
      title: "Dapat magsimula sa plano ang budget",
      shortTitle: "Plano",
      type: "concept",
      content: (
        <>
          <p>
            Ini-uugnay ng lokal na budgeting ang development planning sa taunang
            paggastos. Ang mas pangmatagalang local development plan ang
            tumutukoy ng mga pangangailangan at nais na resulta. Isinasalin ng{" "}
            <Term id="local-development-investment-program" expand /> ang mga
            prayoridad na iyon sa mga programa at proyekto, habang tinutukoy ng{" "}
            <Term id="annual-investment-program" expand /> ang bahaging
            ipinapanukala para sa budget year.
          </p>
          <p>
            Mahalaga ang koneksyon na ito dahil hindi dapat maging basta
            wish-list ang isang budget proposal. Ini-uugnay ng mga departamento
            ang kanilang mga gawain, inaasahang resulta, at gastos sa mga
            naaprubahang lokal na plano. Pagkatapos, nililimitahan ng revenue
            estimates at budget ceilings ang pwedeng ipanukala sa susunod na
            taon.
          </p>
          <div className="not-prose my-6 rounded-lg border bg-accent/40 p-5">
            <p className="font-medium">
              Sa planning, ang tanong ay ano at bakit.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Idinadagdag ng budget preparation ang magkano, saang source, at
              saang taon.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "executive-preparation",
      title: "Binubuo ng executive ang proposal",
      shortTitle: "Paghahanda",
      type: "concept",
      content: (
        <>
          <p>
            Naghahanda ng mga proposal ang mga head ng departamento at opisina
            sa ilalim ng policy guidance ng{" "}
            <Term id="local-chief-executive" expand />. Tumutulong ang{" "}
            <Term id="local-finance-committee" expand /> sa pag-estimate ng
            kita, pagre-recommend ng expenditure ceilings, at pagbibigay ng
            financial advice.
          </p>
          <p>
            Pinagsasama-sama ng local chief executive ang income information ng
            treasurer, ang mga proposal ng mga departamento, at ang mga estimate
            ng finance committee sa{" "}
            <Term id="local-executive-budget" expand />. Ayon sa Local
            Government Code, isinusumite ang executive budget sa sanggunian
            hindi lalampas sa October 16 para sa susunod na fiscal year.
          </p>
          <p>
            Sa puntong ito, proposal pa rin ang dokumento. Binibigyan ng
            malaking papel ang executive sa paghubog ng buong package, pero
            hindi ito nagbibigay ng authority na gumastos.
          </p>
        </>
      ),
    },
    {
      id: "authorize-and-review",
      title: "Nag-aapruba ang sanggunian; ibang body ang nagre-review",
      shortTitle: "Pag-apruba",
      type: "concept",
      content: (
        <>
          <p>
            Ang <Term id="sanggunian" expand /> ang nagtatalakay sa executive
            proposal at nagpapasa ng taunang budget sa pamamagitan ng isang
            appropriation ordinance. Pwede ring aprubahan o i-veto ng local
            chief executive ang ordinance o mga partikular na item ayon sa
            pinapayagan ng batas; pwedeng kumilos ang sanggunian sa isang veto
            ayon sa mga kinakailangang voting rule.
          </p>
          <p>
            Pagkatapos maipasa, isinusulong ang budget sa review. Depende sa LGU
            ang reviewing authority: ang DBM ang nagre-review ng budget ng mga
            lalawigan at ng mga highly urbanized o independent component city;
            ang sangguniang panlalawigan ang nagre-review ng budget ng mga
            component city at bayan; at ang naaangkop na sanggunian ng lungsod o
            bayan ang nagre-review ng mga budget ng barangay.
          </p>
          <p>
            Ang tanong sa review ay kung sumusunod ang budget sa batas at sa
            mga mandatory na requirement. Magkaiba ito sa lokal na policy
            debate na nangyari noong authorization.
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
            Karagdagang babasahin:{" "}
            <a href="https://lawphil.net/statutes/repacts/ra1991/ra_7160_1991.html">
              Local Government Code, Sections 317 to 327
            </a>
            , at{" "}
            <a href="https://www.dbm.gov.ph/index.php/central-office?catid=85&id=85&view=article">
              DBM Local Budget Circular No. 152 at ang 2023 Budget Operations
              Manual para sa mga LGU
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: "check",
      title: "Check kung naintindihan mo",
      shortTitle: "Self-check",
      type: "knowledge-check",
      content: (
        <KnowledgeCheck
          title="Isunod-sunod ang mga role"
          moduleId="mod-06"
          lessonId="06.2"
          items={[
            {
              prompt:
                "Alin ang pagkakasunod-sunod na pinakanaglalarawan ng lokal na budget preparation at authorization?",
              options: [
                "Mga plano at proposal, tapos executive budget, tapos appropriation ordinance ng sanggunian",
                "Appropriation ordinance, tapos mga proposal ng departamento, tapos development plan",
                "External review, tapos executive proposal, tapos revenue estimate",
                "Cash payment, tapos planning, tapos authorization",
              ],
              correct: 0,
              explanation:
                "Ginagabayan ng mga plano ang mga proposal ng departamento; binubuo ng local chief executive ang executive budget; pagkatapos, nag-aapruba ang sanggunian ng paggastos sa pamamagitan ng isang ordinance.",
              wrong: {
                1: "Sumusunod ang authorization sa preparation, hindi kabaliktaran.",
                2: "Nangyayari ang external review pagkatapos maipasa; hindi ito nagsisimula ng preparation.",
                3: "Kabilang ang mga cash payment sa execution pagkatapos ng legal na authorization.",
              },
            },
            {
              prompt:
                "Sino ang pumapasa sa taunang lokal na budget sa pamamagitan ng isang appropriation ordinance?",
              options: [
                "Ang local treasurer mag-isa",
                "Ang local finance committee",
                "Ang sanggunian",
                "Lahat ng department head nang sabay-sabay",
              ],
              correct: 2,
              explanation:
                "Ang sanggunian ang lokal na legislative body na nag-aapruba ng taunang budget sa pamamagitan ng isang appropriation ordinance.",
              wrong: {
                0: "Nagbibigay ang treasurer ng income information, pero hindi ito nag-iisang pumapasa ng budget.",
                1: "Nagbibigay ang finance committee ng mga estimate at advice; hindi ito ang legislative body na nag-aapruba.",
                3: "Nagpapapanukala ang mga department head ng budget ng kanilang opisina, pero hindi sila sabay-sabay pumapasa ng ordinance.",
              },
            },
          ]}
        />
      ),
    },
    {
      id: "takeaway",
      title: "Tandaan",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Umaagos ang lokal na budget mula sa mga plano at proposal ng mga
          departamento patungo sa executive budget, tapos sa authorization ng
          sanggunian at sa legal review. Nasa magkakaibang tao ang preparation
          at authorization para walang iisang opisina ang kumokontrol sa buong
          desisyon.
        </KeyTakeaway>
      ),
    },
  ],
});
