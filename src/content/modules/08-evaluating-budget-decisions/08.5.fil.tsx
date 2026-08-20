import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const CRITERIA = [
  "Adequacy: Sapat ba ang laki ng response sa nakasaad na need?",
  "Efficiency: Anong resources ang kailangan para sa inaasahang resulta?",
  "Effectiveness: May evidence bang kayang makamit nito ang inaasahang outcome?",
  "Equity: Sino ang nakikinabang, sino ang nagpapasan ng gastos, at sino ang maaaring maiwan?",
  "Sustainability: Pwede bang magpatuloy ang fiscal, operating, at maintenance demands?",
  "Transparency: Nakikita ba ang mga assumption, gastos, at evidence?",
  "Accountability: Sino ang responsable, sinusukat, at nananagot sa delivery?",
];

const SCREEN = [
  ["Tama ba?", "Tumutugon ba ang proposal sa problema nang angkop, etikal, at equitable?"],
  ["Kaya ba?", "Kaya bang i-finance, i-administer, i-procure, patakbuhin, at i-monitor ito ng mga institusyon?"],
  ["Susuportahan ba?", "Sino ang dapat sumang-ayon o magpanatili nito, at anong evidence ang sumusuporta sa assessment na iyon?"],
];

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Ang verdict ay hindi pa husga",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <p className="text-lg text-muted-foreground">
          Dalawang proposal ang tumutugon sa parehong mobility problem at
          nag-aagawan sa limitadong espasyo sa budget. Paano ka pipili nang
          hindi mo na lang pinagtatanggol ang unang preference mo?
        </p>
      ),
    },
    {
      id: "comparison-rule",
      title: "Paghambingin ang parehong problema sa parehong paraan",
      shortTitle: "Mga ground rule",
      type: "concept",
      content: (
        <>
          <p>
            Magsimula sa iisang malinaw na nakasaad na problema, populasyon,
            saklaw na heograpiko, time horizon, at budget stage. Kung iba ang
            nilulutas ng mga proposal o iba ang ginagamit na hangganan ng
            gastos, ang isang score sa tabi ng bawat isa ay nagbibigay ng maling
            precision sa halip na patas na paghahambing.
          </p>
          <p>
            Ilapat ang parehong pitong criteria at ang parehong tatlong-tanong
            na screen sa dalawang opsyon. Itala ang evidence at ang kawalan ng
            katiyakan bago maglabas ng verdict. Ang isang{" "}
            <Term id="trade-off" /> ay hindi dapat itagong depekto: ito ang
            pakinabang na tinatanggap mo sa isang dimensyon at ang gastos o
            panganib na tinatanggap mo sa iba.
          </p>
        </>
      ),
    },
    {
      id: "static-worksheet",
      title: "Static na worksheet: dalawang mobility proposal",
      shortTitle: "Worksheet",
      type: "example",
      content: (
        <>
          <p>
            Illustrative na halimbawa. Pinapayak ang mga detalye para mas
            maintindihan. Ang worksheet na ito na parang print-out ang static na
            fallback para sa Phase 2 proposal comparator. Walang scoring
            behavior, sagot na naka-save, evidence dossier, o model-answer
            reveal.
          </p>
          <div className="not-prose my-8 space-y-5 rounded-lg border bg-card p-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Kasamang policy problem</p>
              <p className="mt-1 font-medium">Pahusayin ang ligtas at maaasahang paggalaw sa isang congestion na urban corridor.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Proposal A · Network ng mga protected bicycle lane</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Suriin ang pagpapatuloy ng network, pisikal na proteksyon,
                  pagtrato sa interseksyon, maintenance, access, enforcement, at
                  mga koneksyon sa public transport.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="font-semibold">Proposal B · Karagdagang general-purpose na road lane</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Suriin ang right-of-way, konstruksyon at maintenance, epekto
                  sa trapiko sa paglipas ng panahon, access, kaligtasan,
                  abala sa implementation, at mga epekto sa ibang gumagamit ng
                  corridor.
                </p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[44rem] text-left text-sm">
                <thead className="border-b">
                  <tr>
                    <th className="p-3 font-semibold">Prompt sa paghahambing</th>
                    <th className="p-3 font-semibold">Mga tala para sa Proposal A</th>
                    <th className="p-3 font-semibold">Mga tala para sa Proposal B</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {CRITERIA.map((criterion) => (
                    <tr key={criterion}>
                      <td className="p-3 font-medium">{criterion}</td>
                      <td className="p-3 text-muted-foreground">Evidence: ____ · Limitasyon: ____</td>
                      <td className="p-3 text-muted-foreground">Evidence: ____ · Limitasyon: ____</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground">
              Walang ibinibigay na halaga ng budget o katotohanang resulta ng
              performance. Gumamit ng may source at maihahambing na evidence
              bago punan ang aktwal na worksheet.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "screen-and-weigh",
      title: "I-screen muna, timbangin pagkatapos ang mga trade-off",
      shortTitle: "Timbangin",
      type: "concept",
      content: (
        <>
          <div className="not-prose mb-7 grid gap-3 md:grid-cols-3">
            {SCREEN.map(([question, prompt]) => (
              <div key={question} className="rounded-lg border bg-card p-4">
                <h3 className="font-semibold">{question}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{prompt}</p>
              </div>
            ))}
          </div>
          <p>
            Ang bumagsak sa screen ay dahilan para baguhin o tanggihan ang isang
            proposal, pero ang pagpasa nito ay hindi utos na aprubahan ito. Sa
            mga feasible na opsyon, ipaliwanag kung aling criteria ang pinakamahalaga
            para sa problemang ito at bakit. Huwag tahimik na baguhin ang mga
            timbang para paboran ang isang opsyon pagkatapos makita ang resulta.
          </p>
          <p>
            Panatilihin ang kawalan ng katiyakan. Kung kulang ang evidence,
            sabihin kung paano ito nakaaapekto sa confidence mo at ano ang
            maglulutas nito. Ang mga conditional na husga — “mas pabor si A
            kung sakop ng safety design at maintenance plan ang nakasaad na
            pamantayan” — ay kadalasang mas madaling ipagtanggol kaysa ganap na
            claim.
          </p>
        </>
      ),
    },
    {
      id: "check",
      title: "Isulat ang dahilan, hindi lang ang panalo",
      shortTitle: "Self-check",
      type: "knowledge-check",
      content: (
        <KnowledgeCheck
          title="Ano ang dapat naroon sa isang rationale sa paghahambing?"
          moduleId="mod-08"
          lessonId="08.5"
          items={[
            {
              prompt:
                "Aling pagbubukas ang gumagawa ng pinakamakatarungang paghahambing sa pagitan ng dalawang proposal?",
              options: [
                "Tukuyin ang pinagsasamang problema, saklaw, time horizon, budget stage, at pamantayan ng evidence",
                "Piliin ang gustong proposal, tapos piliin ang mga criteria na sumusuporta dito",
                "Bigyan ng iisang score ang dalawang proposal nang walang naka-document na assumption",
                "Ihambing ang buong gastos ng isang proposal sa gastos sa konstruksyon lamang ng isa",
              ],
              correct: 0,
              explanation:
                "Ang parehong frame ay ginagawang maihahambing ang mga criteria at evidence bago pa pumasok ang preference sa husga.",
              wrong: {
                1: "Ang pagpili ng criteria pagkatapos piliin ang panalo ay naglalagay ng confirmation bias sa proseso.",
                2: "Ang score na walang naka-document na detalye ay nagtatago ng evidence, timbang, kawalan ng katiyakan, at mga trade-off.",
                3: "Magkaibang hangganan ng gastos ay nagreresulta sa hindi patas na paghahambing.",
              },
            },
            {
              prompt:
                "Aling konklusyon ang pinakamalakas na rationale sa paghahambing?",
              options: [
                "“Piliin si A dahil halatang mas magaling ito.”",
                "“Mas pabor si A ayon sa nakasaad na criteria dahil sa evidence X at Y; mas magaling si B sa Z; mananatiling conditional ang desisyon dahil sa hindi pa nalulutas na panganib R.”",
                "“Mas maraming check mark si A.”",
                "“Feasible si B, kaya walang ibang criterion na mahalaga.”",
              ],
              correct: 1,
              explanation:
                "Ang maiipagtanggol na rationale ay nagsasabi ng batayan, kinikilala ang lakas ng katunggali, tinutukoy ang mga trade-off, at pinapanatili ang mahalagang kawalan ng katiyakan.",
              wrong: {
                0: "Walang evidence o dahilan ang sinasabi ng pahayag.",
                2: "Hindi ipinapakita ng mga check mark ang kahalagahan, kalidad ng evidence, o kawalan ng katiyakan.",
                3: "Kailangan ang feasibility, pero hindi ito pamalit sa adequacy, effectiveness, equity, o iba pang criteria.",
              },
            },
            {
              prompt:
                "Walang evidence para sa isang mahalagang outcome ng dalawang proposal. Ano ang dapat gawin ng sumulat?",
              options: [
                "Gumawa ng makatwirang estimate para kumpleto ang paghahambing",
                "Sabihin ang gap, bawasan ang confidence, at tukuyin ang kailangang evidence",
                "Ituring ang nawawalang resulta bilang zero para sa dalawang proposal",
                "Kalimutan ang outcome dahil walang data ang dalawang proposal",
              ],
              correct: 1,
              explanation:
                "Bahagi ng husga ang transparent na kawalan ng katiyakan. Ini-limita ng kulang na evidence ang konklusyon at nagbibigay ng malinaw na susunod na gawain sa pananaliksik.",
              wrong: {
                0: "Ang ginawang estimate ay hindi evidence at pwedeng magpasya ng verdict nang hindi patas.",
                2: "Hindi ibig sabihin ng nawawala ay zero.",
                3: "Pwede pa ring mahalaga ang parehong gap sa evidence sa tanong kung dapat bang magpatuloy ang alinmang proposal.",
              },
            },
          ]}
        />
      ),
    },
    {
      id: "takeaway",
      title: "Dapat tandaan",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Ang paghahambing na husga ay argumento, hindi scoreboard. Panatilihin
          ang parehong frame, ilapat ang parehong criteria at screen, banggitin
          ang evidence, ilabas ang mga trade-off at kawalan ng katiyakan, tapos
          ipaliwanag kung bakit mas malakas ang napiling opsyon para sa
          nakasaad na problema.
        </KeyTakeaway>
      ),
    },
  ],
});
