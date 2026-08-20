import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const FAIR_QUESTIONS = [
  "Anong utilization ratio ang iniulat, at ano ang numerator, denominator, at cutoff date nito?",
  "Anong mga output ang naihatid kumpara sa quantity, quality, at timeliness targets?",
  "Usable ba ang mga output, nakarating ba sa inaasahang tao, at nakatulong ba sa nakasaad na outcome?",
  "Ano ang nagpapaliwanag sa anumang gap, sino ang may control sa susunod na hakbang, at anong corrective action ang naka-dokumento?",
] as const;

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "95% ang nagastos ng ahensya—mahusay ba ang performance nito?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            <strong>Illustrative na teaching number:</strong> ang 95%
            utilization rate ay nagsasabing mataas ang financial ratio. Hindi
            pa nito sinasabi kung ano ang naihatid, gumana ba ito, o sino ang
            nakinabang.
          </p>
          <p>
            Totoo rin ang kabaligtaran. Tinutukoy ng mababang rate ang gap na
            kailangan ng paliwanag; hindi nito pinapatunayan mag-isa na
            nasayang ang pera. Pinagsasama ng patas na pagbasa ang financial,
            physical, at results evidence.
          </p>
        </>
      ),
    },
    {
      id: "two-scoreboards",
      title:
        "Ibang tanong ang sinasagot ng financial at physical performance",
      shortTitle: "Dalawang scoreboard",
      type: "concept",
      content: (
        <>
          <p>
            Sinusundan ng financial accomplishment ang pera: gaano karaming
            authority ang nailaan,{" "}
            <Term id="obligation">na-obligate</Term>, at{" "}
            <Term id="disbursement">na-disburse</Term>. Isang ugnayan sa
            mga amount na iyon ang tinutukoy ng{" "}
            <Term id="budget-utilization-rate" expand />.
          </p>
          <p>
            Palaging basahin ang formula. Pwedeng tumukoy ang
            &quot;utilization&quot; sa mga obligasyon laban sa mga allotment o
            sa mga disbursement laban sa mga obligasyon. Ibang tanong ang
            sinasagot ng iba&apos;t ibang formula, at pwedeng magkaiba ang rate
            para sa parehong program.
          </p>
          <p>
            Ikinukumpara naman ng{" "}
            <Term id="physical-accomplishment" expand /> ang aktwal na
            trabaho sa isang target gamit ang mga indicator gaya ng quantity,
            quality, at timeliness. Tinatanong nito kung natapos ba ang mga
            classroom, natugunan ba ang requirements, at available ba nang
            kailangan — hindi lang kung na-proseso ba ang mga bill.
          </p>
        </>
      ),
    },
    {
      id: "outputs-and-outcomes",
      title: "Hindi outcome ang output",
      shortTitle: "Results",
      type: "concept",
      content: (
        <>
          <p>
            Ang <Term id="output" expand /> ay ang good o service na
            inihahatid ng ahensya: tapos na classroom, vaccination session, o
            na-prosesong permit. Mas malapit ang outputs sa aksyon ng ahensya
            at sa budget.
          </p>
          <p>
            Ang <Term id="outcome" expand /> ay ang pagbabagong hinahanap ng
            program lampas sa delivery: mas kaunting classroom congestion,
            mas magandang disease protection, o mas maikling waiting time.
            Pwedeng depende ang outcomes sa quality ng serbisyo, paggamit,
            ibang programa, at mga kondisyon sa labas ng control ng isang
            ahensya.
          </p>
          <p>
            Kaya ang tapos na building ay hindi pareho ng mas magandang
            learning. Kailangang safe, equipped, staffed, maintained, at
            ginagamit ang building; depende rin ang learning sa pagtuturo at
            iba pang kondisyon. Kinikilala ng patas na review ang output nang
            hindi inaangkin ang outcome na hindi pa nasusukat.
          </p>
        </>
      ),
    },
    {
      id: "contrast",
      title: "Static contrast: dalawang kuwento ng utilization",
      shortTitle: "Contrast",
      type: "example",
      content: (
        <>
          <p>
            <strong>
              Illustrative na mga halimbawa. Pinasimple ang detalye para mas
              malinaw.
            </strong>{" "}
            Kailangan pa ng karagdagang ebidensya ang parehong panel bago
            maghusga tungkol sa performance.
          </p>
          <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-lg border bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Mataas ang utilization, mahina ang result evidence
              </p>
              <h3 className="mt-2 font-semibold">
                Mataas ang bayad; may classroom pa ring hindi usable
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                <li>
                  Financial record: karamihan ng mga obligasyon ay nabayaran
                  na.
                </li>
                <li>
                  Physical record: naiulat na complete ang construction.
                </li>
                <li>
                  Kulang na test: kung pumasa ba ang mga silid sa quality
                  checks, nabuksan ba sa oras, at ginagamit ba.
                </li>
                <li>
                  Patas na basahin: ipinapakita ng mataas na utilization ang
                  paggalaw ng pera, hindi ang effectiveness.
                </li>
              </ul>
            </article>
            <article className="rounded-lg border bg-card p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Mababa ang utilization, mahalaga ang context
              </p>
              <h3 className="mt-2 font-semibold">
                Mababa ang mga obligasyon habang inaayos ang safety-related
                redesign
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                <li>
                  Financial record: malaking bahagi ng allotment ang nananatiling
                  unobligated.
                </li>
                <li>
                  Physical record: hindi pa nagsisimula ang construction.
                </li>
                <li>
                  Context: kailangan ng findings sa site ng approved design
                  correction bago ituloy ang procurement.
                </li>
                <li>
                  Patas na basahin: pwedeng maiwasan ng pagtigil ang hindi
                  ligtas o masasayang na trabaho, pero kailangan pa rin ng
                  management ang credible na corrective plan.
                </li>
              </ul>
            </article>
          </div>
          <p>
            Kabilang sa mga karaniwang dahilan ng mababang obligation o delayed
            implementation ang late releases, procurement delays, capacity
            gaps, unresolved right-of-way, at design changes. Ang iba ay
            sumasalamin sa mahinang planning o management; ang iba naman sa
            constraints o sa responsableng desisyon na huwag ituloy ang
            depektibong trabaho. Ang dahilan at tugon — hindi ang rate
            mag-isa — ang sumusuporta sa husga.
          </p>
          <div className="not-prose my-6 rounded-lg border bg-secondary/40 p-5">
            <h3 className="font-semibold">
              Apat na tanong para sa patas na pagbasa
            </h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed">
              {FAIR_QUESTIONS.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ol>
          </div>
          <p className="text-sm text-muted-foreground">
            Source note: Gabay ng DBM para sa{" "}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/Issuances/2025/Circular-Letter/CIRCULAR-LETTER-NO.-2025-2.pdf">
              financial and physical performance reporting
            </a>
            , ang{" "}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/BESF/BESF2019/GLOSSARY.pdf">
              BESF definitions of outputs and outcomes
            </a>
            , at ang{" "}
            <a href="https://www.coa.gov.ph/wp-content/uploads/transparency/citizen_charter/COA_Citizens_Charter__2024.pdf">
              performance-audit framework
            </a>{" "}
            ng Commission on Audit.
          </p>
        </>
      ),
    },
    {
      id: "check",
      title: "Tingnan kung naintindihan mo",
      shortTitle: "Self-check",
      type: "knowledge-check",
      content: (
        <KnowledgeCheck
          title="Piliin ang pinakapatas na pagbasa ng performance"
          moduleId="mod-05"
          lessonId="05.3"
          items={[
            {
              prompt:
                "Napakataas ang iniulat na disbursement-to-obligation rate ng isang ahensya. Ano ang pinakamalakas na konklusyon na sinusuportahan ng ratio na iyon mag-isa?",
              options: [
                "Karamihan ng mga naitalang obligasyon sa denominator ay nabayaran",
                "Naabot ng program ang intended outcome nito",
                "Natugunan ng bawat output ang quality standard nito",
                "Natanggap ng lahat ng intended beneficiary ang serbisyo",
              ],
              correct: 0,
              explanation:
                "Sinusukat ng formula na iyon ang payment relative sa naitalang mga obligasyon. Kailangan ng hiwalay na ebidensya ang outcomes, quality, at reach.",
              wrong: {
                1: "Hindi sinusukat ng payment ratio ang pagbabagong hinahanap ng program.",
                2: "Physical-performance evidence ang quality at hindi maaaring i-infer mula sa payment mag-isa.",
                3: "Kailangan ng service o outcome records ang beneficiary reach, hindi financial data lang.",
              },
            },
            {
              prompt:
                "Mababa ang obligation ng isang school-building project dahil kailangan ng redesign ang bagong natuklasang panganib sa site. Aling pagbasa ang pinakapatas?",
              options: [
                "Automatic na patunay ng sayang ang mababang utilization",
                "Automatic na magandang management ang delay",
                "Pwedeng magbigay-katwiran ang safety issue sa pagtigil, pero dapat tingnan ng mga reviewer ang corrective plan, authority, at revised schedule",
                "Hindi relevante ang financial performance",
              ],
              correct: 2,
              explanation:
                "Pwedeng magbigay-katwiran ang context na huwag agad i-obligate ang pondo, pero kailangan pa rin ng accountability ang ebidensya ng isyu at credible na tugon.",
              wrong: {
                0: "Tinutukoy ng rate ang gap pero hindi nito itinatatag kung bakit nangyari ito o kung pinrotektahan ba ng pag-iwas sa hindi ligtas na trabaho ang public money.",
                1: "Hindi sapat ang nakasaad na dahilan; kailangan pa rin ng ebidensya at workable na tugon ang mga reviewer.",
                3: "Relevante pa rin ang financial performance dahil pwedeng mag-expire ang authority at naaapektuhan ng delayed obligations ang implementation.",
              },
            },
            {
              prompt:
                "Aling pares ang tama ang pagkakaiba ng output at outcome?",
              options: [
                "Output: tapos na classroom; outcome: nabawasang classroom congestion",
                "Output: nabawasang congestion; outcome: napirmahang construction contract",
                "Output: nailabas na allotment; outcome: nabayarang contractor",
                "Output: utilization rate; outcome: disbursement voucher",
              ],
              correct: 0,
              explanation:
                "Ang tapos na classroom ay naihatid na good; ang nabawasang congestion ay ang pagbabagong hinahanap ng program sa pamamagitan ng paggamit ng output na iyon.",
              wrong: {
                1: "Ang nabawasang congestion ang outcome, habang ang pinirmahang kontrata ay obligation-stage record, hindi naihatid na output.",
                2: "Financial stages ang allotment at payment, hindi output at outcome results.",
                3: "Parehong financial information ang dalawang pagpipilian, hindi naihatid na serbisyo at ang resultang pagbabago nito.",
              },
            },
          ]}
        />
      ),
    },
    {
      id: "takeaway",
      title: "Mahalagang tandaan",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Financial signal ang utilization, hindi performance verdict. Basahin
          ang formula, ikumpara ang physical targets sa aktwal na quantity,
          quality, at timeliness, ihiwalay ang outputs sa outcomes, at
          imbestigahan ang dahilan at tugon sa likod ng anumang gap.
        </KeyTakeaway>
      ),
    },
  ],
});
