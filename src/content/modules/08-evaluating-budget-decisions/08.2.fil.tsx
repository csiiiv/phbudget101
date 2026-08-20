import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Mabuti ayon sa ano?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Ano ang nagpapaging mabuti sa isang desisyon sa budget?
          </p>
          <p>
            Walang kapaki-pakinabang na isang-salitang verdict. Pwedeng malaki
            ang isang desisyon pero hindi naka-target nang maayos, matipid pero
            hindi epektibo, o transparent pero hindi makatarungan. Tutulong ang
            pitong criteria para maipahayag mo kung anong kalidad ang
            sinusuri mo at anong evidence ang kakailanganin mo.
          </p>
        </>
      ),
    },
    {
      id: "results-criteria",
      title: "Sapat ba, matipid ba, at epektibo ba ang response?",
      shortTitle: "Mga resulta",
      type: "concept",
      content: (
        <>
          <p>
            <strong>Mga illustrative na halimbawa.</strong> Sinusuri ng unang
            tatlong criteria ang laki ng response at kung ano ang nagagawa nito.
          </p>
          <div className="not-prose my-6 grid gap-4 sm:grid-cols-3">
            <section className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold text-foreground">
                <Term id="adequacy" />
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Itanong: Sapat ba ang response sa laki at uri ng need?
              </p>
              <p className="mt-3 text-sm">
                Nakarating ang isang clinic program sa bawat site sa plano,
                pero malayo pa rin ang bilang ng service days sa naka-document
                na demand.
              </p>
            </section>
            <section className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold text-foreground">
                <Term id="efficiency" />
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Itanong: Nabuo ba ang mga serbisyong de-kalidad nang makatwirang
                paggamit ng pera, oras, at capacity?
              </p>
              <p className="mt-3 text-sm">
                Nakapaglilingkod ang binagong delivery schedule sa parehong mga
                komunidad na may mas maikling travel time at walang bawas sa
                kalidad ng serbisyo.
              </p>
            </section>
            <section className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold text-foreground">
                <Term id="effectiveness" />
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Itanong: Nakamit ba ng program ang resultang nilayong makamit?
              </p>
              <p className="mt-3 text-sm">
                Natapos ang mga training session, pero kasing-dalas pa rin ng
                dati ang paglitaw ng pinupuntirya nitong operating error
                pagkatapos nito.
              </p>
            </section>
          </div>
        </>
      ),
    },
    {
      id: "fairness-future",
      title: "Sino ang nakikinabang, at tatagal ba ang response?",
      shortTitle: "Kapakanan",
      type: "concept",
      content: (
        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <section className="rounded-lg border bg-card p-5">
            <h3 className="font-semibold text-foreground">
              <Term id="equity" />
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Itanong: Nagkakaloob ba nang makatarungan ang mga benepisyo,
              pasanin, at access ayon sa iba’t ibang need at sitwasyon ng
              mga tao?
            </p>
            <p className="mt-3 text-sm">
              Pwede pa ring maiwan ng pantay na pondo kada site ang malalayong
              komunidad na may mas kaunting access kapag mas mahal ang pag-abot
              sa kanila.
            </p>
          </section>
          <section className="rounded-lg border bg-card p-5">
            <h3 className="font-semibold text-foreground">
              <Term id="sustainability" />
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Itanong: Mapapanatili ba ang financing, staffing, operasyon, at
              mga benepisyo nang hindi humihina ang capacity o mga need sa
              hinaharap?
            </p>
            <p className="mt-3 text-sm">
              Naihatid ang bagong kagamitan, pero walang recurring na probisyon
              para sa maintenance, supplies, o mga bihasang operator.
            </p>
          </section>
        </div>
      ),
    },
    {
      id: "governance-criteria",
      title: "Nakikita ba ito ng publiko at may mananagot ba?",
      shortTitle: "Governance",
      type: "concept",
      content: (
        <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
          <section className="rounded-lg border bg-card p-5">
            <h3 className="font-semibold text-foreground">
              <Term id="transparency" />
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Itanong: Pwede bang ma-access ng mga tao ang napapanahon at
              nauunawaang impormasyon tungkol sa desisyon, resources,
              implementation, at mga resulta?
            </p>
            <p className="mt-3 text-sm">
              May na-post na kabuuang halaga, pero hindi mahanap ang purpose,
              mga target, pagbabago, at implementation status nito.
            </p>
          </section>
          <section className="rounded-lg border bg-card p-5">
            <h3 className="font-semibold text-foreground">
              <Term id="accountability" />
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Itanong: Kailangan bang ipaliwanag ng mga responsable ang mga
              desisyon at resulta, tumugon sa review, at mag-ayos ng problema o
              managot sa mga pagkakamali?
            </p>
            <p className="mt-3 text-sm">
              Nagpapakita ang mga report ng paulit-ulit na delay, pero walang
              responsable na opisina na nagpapaliwanag ng sanhi o nagtatala ng
              corrective action.
            </p>
          </section>
        </div>
      ),
    },
    {
      id: "check",
      title: "Tingnan kung naintindihan mo",
      shortTitle: "Self-check",
      type: "knowledge-check",
      content: (
        <KnowledgeCheck
          title="Piliin ang criterion na tumutugma sa tanong"
          moduleId="mod-08"
          lessonId="08.2"
          items={[
            {
              prompt:
                "Matapos mabawasan ang maiiwasang processing time at pag-aaksaya ng materyales, nagpapakita pa rin ang isang program ng parehong kalidad at abot. Aling criterion ang pinaka-direktang naglalarawan nito?",
              options: ["Efficiency", "Adequacy", "Transparency"],
              correct: 0,
              explanation:
                "Tinitingnan ng efficiency kung gaano kahusay na ginagamit ang resources, oras, at capacity para makabuo ng kapaki-pakinabang na serbisyo nang walang maiiwasang pag-aaksaya.",
              wrong: {
                1: "Tinatanong ng adequacy kung sapat ba ang response sa need, hindi kung nabawasan ang pag-aaksaya.",
                2: "Tinatanong ng transparency kung accessible at naiintindihan ang mahalagang impormasyon; ang senaryo ay tungkol sa paggamit ng resources.",
              },
            },
            {
              prompt:
                "Mas malaki ang support kada site ng malalayong komunidad dahil mas mahal ang service delivery doon at mas malaki ang mga gap sa access. Aling criterion ang pinaka-direktang naglalarawan nito?",
              options: ["Effectiveness", "Equity", "Accountability"],
              correct: 1,
              explanation:
                "Isinasaalang-alang ng equity ang iba’t ibang need at sitwasyon. Hindi laging nangangahulugang parehong halaga ang makatarungang distribusyon.",
              wrong: {
                0: "Tinatanong ng effectiveness kung nakamit ang inaasahang mga resulta; ang focus ng senaryo ay sa makatarungang pamamahagi ng support.",
                2: "Tungkol ang accountability sa pagpapaliwanag, review, pagwawasto, at pananagutan; ang senaryo ay tungkol sa kung sino ang tumatanggap ng resources.",
              },
            },
            {
              prompt:
                "Naglalathala ang isang ahensya ng malinaw na mga report, pero walang responsable na opisina na kayang magpaliwanag ng paulit-ulit na pagkakamali o magtala ng corrective action. Ano ang mayroon, at ano ang mahina?",
              options: [
                "Mayroong transparency; mahina ang accountability.",
                "Mayroong adequacy; mahina ang efficiency.",
                "Mayroong sustainability; mahina ang equity.",
              ],
              correct: 0,
              explanation:
                "Sinusuportahan ng mga accessible na report ang transparency. Ang paghingi ng pagpapaliwanag, review, at pagwawasto ay hiwalay na tanong ng accountability.",
              wrong: {
                1: "Walang evidence sa senaryo tungkol sa laki ng response o kung paano naging output ang mga resources.",
                2: "Walang evidence sa senaryo tungkol sa pangmatagalang kakayahan o makatarungang distribusyon.",
              },
            },
          ]}
        />
      ),
    },
    {
      id: "takeaway",
      title: "Pangalanan ang pamantayang nasa likod ng husga",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Pwede ring umunlad ang isang desisyon sa budget sa ilalim ng isang
          criterion at humina sa iba. Husgahan ito nang malinaw gamit ang adequacy, efficiency, effectiveness, equity, sustainability,
          transparency, at accountability, tapos sabihin ang evidence na
          sumusuporta sa bawat konklusyon.
        </KeyTakeaway>
      ),
    },
  ],
});
