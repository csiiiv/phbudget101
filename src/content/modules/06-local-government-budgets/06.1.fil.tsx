import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const LOCAL_SOURCES = [
  {
    title: "Real property tax",
    body: "Buwis na nakabatay sa lupain, gusali, at iba pang real property na buwis-mabayaran sa loob ng LGU.",
  },
  {
    title: "Local business taxes",
    body: "Mga buwis na pinapayagan ng batas para sa mga negosyong nag-ooperate sa loob ng hurisdiksyon ng LGU.",
  },
  {
    title: "Fees and charges",
    body: "Bayad sa mga permit, regulatory action, pasilidad, o serbisyong ibinibigay ng LGU.",
  },
  {
    title: "Economic enterprises",
    body: "Kita mula sa mga gawaing pinapatakbo mismo ng LGU, gaya ng public market, terminal, o slaughterhouse.",
  },
] as const;

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Saan kumukuha ng pera ang isang bayan?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <p className="text-lg text-muted-foreground">
          Hindi umaasa ang isang bayan sa iisang pinanggagalingan ng pera.
          Pinagsasama ng kaban nito ang kita na nangongolekta mismo ng bayan
          at ang mga share at transfer na pumapasok mula sa labas ng LGU.
        </p>
      ),
    },
    {
      id: "own-source-revenue",
      title: "Pera na nangongolekta sa loob ng LGU",
      shortTitle: "Mga lokal na source",
      type: "concept",
      content: (
        <>
          <p>
            Pwedeng magtatag ang isang{" "}
            <Term id="local-government-unit" expand /> ng mga awtorisadong lokal
            na revenue source sa ilalim ng Local Government Code at ng ibang
            batas. Ang <Term id="own-source-revenue" expand /> ay pera na
            nangongolekta mismo ng LGU mula sa sarili nitong buwis, fees,
            charges, at operasyon.
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
            May legal na limitasyon ang mga kapangyarihang ito. Sa pamamagitan
            ng ordinance ipinapataw ng sanggunian ang isang lokal na buwis, fee,
            o charge, at hindi pwedeng basta kopyahin ng LGU ang bawat buwis na
            kinokolekta ng national government.
          </p>
        </>
      ),
    },
    {
      id: "transfers",
      title: "Pera na pumapasok mula sa labas",
      shortTitle: "Mga transfer",
      type: "concept",
      content: (
        <>
          <p>
            Ang pinakamalaking transfer para sa maraming LGU ay ang{" "}
            <Term id="national-tax-allotment" expand />, ang kanilang share sa
            national taxes na awtomatikong nire-release. Mula sa national tax
            collections nagsisimula ang pera, at nagiging bahagi ito ng mga
            resources ng bawat LGU sa pamamagitan ng allotment na itinakda ng
            batas.
          </p>
          <p>
            Ang lumang tawag dito ay{" "}
            <strong>Internal Revenue Allotment (IRA)</strong>. Pagkatapos ng
            Mandanas-Garcia ruling, ginagamit na ang katagang NTA dahil mas
            malawak na ang computation base nito — hindi lang national internal
            revenue taxes ang sakop nito, kundi national taxes sa pangkalahatan.
            Ipapaliwanag ng Module 6.3 ang pagbabagong ito nang mas detalyado.
          </p>
          <p>
            Kasama sa ibang external sources ang special shares ng LGU sa
            national taxes o national wealth, grants, donations, at mga transfer
            na nakatali sa mga partikular na programa. Pwedeng recurring o
            conditional ang isang transfer, kaya kailangang basahin ng LGU ang
            legal basis at release conditions nito bago ituring itong perang
            malayang magagamit.
          </p>
          <p className="text-sm text-muted-foreground">
            Karagdagang babasahin:{" "}
            <a href="https://lawphil.net/statutes/repacts/ra1991/ra_7160_1991.html">
              Local Government Code, Book II
            </a>
            , at ang{" "}
            <a href="https://reports.dbm.gov.ph/ira2.0/">
              DBM National Tax Allotment legal-basis page
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: "illustrative-mix",
      title: "Halo-halo ang laman ng lokal na kaban",
      shortTitle: "Ang mix",
      type: "interactive",
      content: (
        <>
          <p>
            <strong>
              Illustrative example. Gamit dito ang mga resource unit para sa
              pagtuturo — hindi ito mga account ng isang tunay na bayan.
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
                <strong className="text-foreground">NTA:</strong> share sa
                national taxes na nire-release sa LGU.
              </p>
              <p>
                <strong className="text-foreground">Own-source:</strong> lokal
                na buwis, fees, charges, at kita ng mga enterprise.
              </p>
              <p>
                <strong className="text-foreground">
                  Iba pang external sources:
                </strong>{" "}
                special shares, grants, o program transfers.
              </p>
            </div>
          </div>
          <p>
            Magkakaiba ang tunay na mix ng mga LGU. Pwedeng malaking bahagi ng
            kaban ang naitataas nang lokal ng isang malaking lungsod; sa NTA
            naman mas nakadepende ang ibang bayan. Ang mga kategorya ang
            itinuturo ng chart — hindi ito benchmark na dapat tugma ang bawat
            LGU.
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
          title="I-classify ang lokal na kita"
          moduleId="mod-06"
          lessonId="06.1"
          items={[
            {
              prompt:
                "Nangongolekta ang isang bayan ng renta sa mga stall ng public market nito. Aling kategorya ang pinaka-angkop para sa kita na ito?",
              options: [
                "Own-source revenue mula sa isang economic enterprise",
                "National Tax Allotment",
                "National income tax",
                "Utang publiko",
              ],
              correct: 0,
              explanation:
                "Kita ito ng bayan mula sa public market na pinapatakbo mismo ng LGU, kaya own-source revenue ito mula sa isang economic enterprise.",
              wrong: {
                1: "Ang NTA ay galing sa share ng LGU sa national taxes, hindi sa operasyon ng public market.",
                2: "Ang national income tax ay kinokolekta sa ilalim ng national law.",
                3: "Ang kita mula sa renta ay hindi lumilikha ng utang.",
              },
            },
            {
              prompt:
                "Nire-release ng DBM ang share ng isang bayan sa national taxes ayon sa batas. Anong source ito?",
              options: [
                "Isang local business tax",
                "Ang National Tax Allotment",
                "Isang permit fee",
                "Kita mula sa isang public terminal",
              ],
              correct: 1,
              explanation:
                "Ang NTA ang share ng LGU sa national taxes na awtomatikong nire-release.",
              wrong: {
                0: "Ang local business tax ay ipinapataw nang lokal, hindi inililipat mula sa national collections.",
                2: "Ang permit fee ay bayad para sa lokal na permiso o regulatory action.",
                3: "Ang kita mula sa terminal ay galing sa isang economic enterprise ng LGU.",
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
          Pinagsasama sa kaban ng isang LGU ang own-source revenue — lokal na
          buwis, fees, charges, at kita ng mga enterprise — at ang external
          resources, lalo na ang National Tax Allotment. Laging tukuyin kung
          sino ang nag-raise ng pera at kung may batas o programang naglilimita
          sa paggamit nito.
        </KeyTakeaway>
      ),
    },
  ],
});
