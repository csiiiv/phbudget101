import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const STAGES = [
  { number: "1", name: "Appropriation", termId: "appropriation", question: "Pwede bang gumastos ang gobyerno?", description: "Nagbibigay ang batas o ibang authorized na pinagkunan ng spending authority para sa isang nakasaad na layunin." },
  { number: "2", name: "Allotment", termId: "allotment", question: "Magkano ang authority na available para i-commit?", description: "Ina-authorize ng DBM ang isang ahensya na magkaroon ng obligasyon sa loob ng na-release na amount at layunin." },
  { number: "3", name: "Obligation", termId: "obligation", question: "Nag-commit na bang magbayad ang gobyerno?", description: "Pumapasok ang ahensya sa isang wastong commitment, gaya ng pagpirma ng kontrata para sa goods o works." },
  { number: "4", name: "Disbursement", termId: "disbursement", question: "Nabayaran na ba ang cash?", description: "Binabayaran ang pera ng publiko para tubusin ang isang obligasyon, na sakop pa rin ng mga cash at payment control." },
  { number: "5", name: "Expenditure", termId: "expenditure", question: "Paano naitala ang gastos?", description: "Naitatala ang paggamit o gastos sa mga kaugnay na financial record alinsunod sa mga naaangkop na accounting rule." },
] as const;

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Pera ba sa bangko ang isang appropriation?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Hindi. Ang appropriation ay legal na authority na gumastos para sa
            isang nakasaad na layunin. Hindi pa ito mag-isa ang patunay na
            na-release ang authority, nagawa ang kontrata, naganap ang
            pagbabayad, o dumating na ang serbisyong pampubliko.
          </p>
          <p>
            Gumagamit ang mga budget record ng iba’t ibang salita para sa
            bawat paglipat. Kapag pinaghihiwalay mo ang mga ito, maiiwasan
            mong malito ang enacted na amount sa aktwal na paggastos o sa
            paghahatid ng serbisyo.
          </p>
        </>
      ),
    },
    {
      id: "five-stages",
      title: "Limang salita, limang magkakaibang estado",
      shortTitle: "Limang stage",
      type: "concept",
      content: (
        <>
          <p>
            Nagsisimula ang chain sa authority at unti-unting humahantong sa
            commitment, pagbabayad, at pagkilala sa accounting. Iba ang
            tanong ng bawat stage.
          </p>
          <ol>
            <li><Term id="appropriation" expand />: legal na authority para sa isang nakasaad na layunin.</li>
            <li><Term id="allotment" expand />: authority na ginawang available sa isang ahensya bilang limit at batayan ng mga obligasyon.</li>
            <li><Term id="obligation" expand />: wastong commitment na kakailanganin pang bayaran ng gobyerno.</li>
            <li><Term id="disbursement" expand />: pagbabayad ng pera ng publiko para tubusin ang isang obligasyon.</li>
            <li><Term id="expenditure" expand />: ang paggamit o gastos na naitala alinsunod sa naaangkop na accounting framework.</li>
          </ol>
          <p>
            Pagtuturo lang ang sekwensyang ito para sa pagbasa ng mga budget
            record. Sa accrual accounting, maaaring magkaiba ang oras ng
            pagkilala sa isang expense at ang paggalaw ng cash. Mas
            detalyadong tatalakayin ng Module 5 ang mga mekaniks nito.
          </p>
        </>
      ),
    },
    {
      id: "pipeline",
      title: "Sundan ang authority sa buong pipeline",
      shortTitle: "Pipeline",
      type: "example",
      content: (
        <>
          <p>
            <strong>
              Illustrative na halimbawa. Pinapasimple ang mga detalye para
              mas malinaw ito.
            </strong>{" "}
            Sundan ang marker mula sa legal authority hanggang sa financial
            record. Walang amount na kailangan para makita kung paano
            nagbabago ang kahulugan sa bawat yugto.
          </p>
          <div className="not-prose my-8 grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch" aria-label="Limang-stage na pipeline mula sa authority hanggang sa expenditure">
            {STAGES.map((stage, index) => (
              <div key={stage.name} className="contents">
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex items-center gap-2">
                    <span className="flex size-7 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground" aria-hidden="true">{stage.number}</span>
                    <h3 className="font-semibold">{stage.name}</h3>
                  </div>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-primary">{stage.question}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.description}</p>
                </div>
                {index < STAGES.length - 1 && (
                  <div className="flex items-center justify-center text-xl text-primary" aria-hidden="true">
                    <span className="lg:hidden">↓</span><span className="hidden lg:inline">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p>
            Hindi mo pwedeng ipagpalagay ang numero sa isang stage batay sa
            nauna rito. Maaaring hindi pa na-release ang isang appropriation;
            maaaring walang obligasyon pa ang isang allotment; maaaring hindi
            pa nababayaran ang isang obligasyon. Ang pisikal na paghahatid ay
            hiwalay pang tanong pagkatapos ng financial chain na ito.
          </p>
        </>
      ),
    },
    {
      id: "validity",
      title: "Current at continuing na appropriation",
      shortTitle: "Validity",
      type: "concept",
      content: (
        <>
          <p>
            Ang <Term id="current-appropriation" expand /> ay galing sa budget
            ng kasalukuyang fiscal year. Ang{" "}
            <Term id="continuing-appropriation" expand /> naman ay authority
            mula sa nakaraang taon na nananatiling wasto sa kasalukuyang taon
            alinsunod sa batas at mga patakarang namamahala rito.
          </p>
          <p>
            Sa mga kamakailang taunang budget rule, karaniwang current-year
            lang ang obligation period ng Personnel Services, habang
            pinapayagan namang gamitin pa sa pangalawang taon ang mga
            nakatalang Maintenance and Other Operating Expenses at Capital
            Outlays. Doon nanggagaling ang kapaki-pakinabang na “isang taon
            kumpara sa dalawang taon” na pinaikling tawag — pero hindi ito
            pangkalahatang patakaran para sa bawat item. Maaaring magkaiba
            ang mga deadline ng release, obligasyon, implementation, at
            pagbabayad.
          </p>
          <p>
            Bago mo ipasya kung expired na o wasto pa rin ang isang
            authority, tingnan palagi ang naaangkop na GAA, special
            provisions, at DBM release circular. Ang “continuing” ay
            nangangahulugang wasto pa rin sa batas; hindi ito
            nangangahulugang permanente.
          </p>
          <p className="text-sm text-muted-foreground">
            Source note: Department of Budget and Management{" "}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/BESF/BESF2026/GLOSSARY.pdf">
              BESF Glossary of Terms
            </a>,{" "}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/Issuances/2026/National-Budget-Circular/NATIONAL-BUDGET-CIRCULAR-NO-599.pdf">
              National Budget Circular No. 599
            </a>, at ang{" "}
            <a href="https://www.dbm.gov.ph/index.php/statement-of-appropriations-allotments-obligations-disbursements-and-balances">
              Statement of Appropriations, Allotments, Obligations, Disbursements and Balances
            </a>.
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
          title="Isunod-sunod ang mga stage at basahin nang mabuti ang validity"
          moduleId="mod-03"
          lessonId="03.4"
          items={[
            {
              prompt:
                "Aling sekwensya ang pinakanakasunod sa authority-to-spending chain ng lesson?",
              options: [
                "Appropriation → allotment → obligation → disbursement → expenditure",
                "Allotment → appropriation → disbursement → obligation → expenditure",
                "Appropriation → disbursement → allotment → expenditure → obligation",
                "Obligation → appropriation → allotment → expenditure → disbursement",
              ],
              correct: 0,
              explanation:
                "Ang authority ay ina-approve muna sa batas, ginagawang available sa pamamagitan ng allotment, kino-commit sa obligasyon, binabayaran sa disbursement, at nakikita sa financial record bilang expenditure.",
              wrong: {
                1: "Kailangang umiiral muna ang legal na authority bago ito gawing available ng isang allotment, at nauuna ang obligasyon bago ang pagbabayad nito.",
                2: "Hindi pwedong dumiretso sa disbursement pagkatapos ng appropriation; kailangang gawing available muna ang authority at magkaroon ng wastong obligasyon.",
                3: "Hindi maaaring mauna nang wasto ang obligasyon sa appropriation at allotment na sumusuporta rito.",
              },
            },
            {
              prompt:
                "May linya sa enacted budget. Ano lang ang masasabi mo mula rito?",
              options: [
                "Umiiral ang appropriation para sa nakasaad nitong layunin",
                "Na-allot na ang buong amount",
                "May obligasyon nang nagawa dahil sa isang kontrata",
                "Naihatid at nabayaran na ang serbisyo",
              ],
              correct: 0,
              explanation:
                "Ang isang enacted na linya ang nagbibigay ng appropriation authority. Kailangan pa ng mga sumusunod na record para patunayan ang allotment, obligasyon, pagbabayad, at paghahatid.",
              wrong: {
                1: "Hindi pa rin sinasabi ng enactment mag-isa kung magkano ang authority na na-release o ginawang available sa ahensya.",
                2: "Kailangan ng kasunod na wastong commitment ang isang obligasyon; hindi ito nalilikha lamang sa pamamagitan ng enactment.",
                3: "Nangyayari sa dakong huli ang paghahatid at pagbabayad at nangangailangan ng ebidensya ng implementation at disbursement.",
              },
            },
            {
              prompt:
                "Ano ang pinakaligtas na paraan para malaman kung wasto pa rin ba ang appropriation mula sa nakaraang taon?",
              options: [
                "Ipagpalagay na eksaktong dalawang taon ang bawat appropriation",
                "Tingnan ang naaangkop na GAA, special provisions, at mga release rule ng DBM",
                "Ipagpalagay na nag-expire ito sa katapusan ng unang taon",
                "Ituring na permanenteng authority ang anumang hindi pa nababayarang obligasyon",
              ],
              correct: 1,
              explanation:
                "Nakadepende ang validity sa namamahalang taunang authority, allotment class, at mga naaangkop na release at implementation rule.",
              wrong: {
                0: "Kapaki-pakinabang na pattern ang dalawang taon para sa ilang item, hindi ito pangkalahatang patakaran para sa bawat appropriation o deadline.",
                2: "May mga appropriation mula sa nakaraang taon na legal na nagpapatuloy sa isa pang taon, kaya hindi ligtas na ipagpalagay na automatic na nag-expire ito.",
                3: "Magkaugnay na record ang hindi pa nababayarang obligasyon at ang validity ng appropriation, pero hindi ito permanenteng authority.",
              },
            },
          ]}
        />
      ),
    },
    {
      id: "takeaway",
      title: "Key takeaway",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Ang appropriation ay pahintulot — hindi cash at hindi paghahatid ng
          serbisyo. Sundan ang mga record sa buong allotment, obligasyon,
          disbursement, at expenditure, at patunayan muna ang namamahalang
          validity period bago mo sabihing available o expired pa rin ang
          authority mula sa nakaraang taon.
        </KeyTakeaway>
      ),
    },
  ],
});
