import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const COMPARISON_CHECKS = [
  ["Pareho ng konsepto?", "I-confirm na pareho ng program, scope, at classification ang dalawang line."],
  ["Pareho ng stage?", "Huwag ikumpara ang isang proposal sa isang taon sa disbursements sa ibang taon."],
  ["Pareho ng price basis?", "Sabihin kung nominal ang amounts o naka-adjust gamit ang isang pinangalanang price index."],
  ["Pareho ng population o lugar?", "Gumamit ng per-capita o geographic normalization lang kapag ito ang sumasagot sa tanong."],
];

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Totoo bang growth ang sampung porsyento?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <p className="text-lg text-muted-foreground">
          Sampung porsyentong mas mataas ang isang budget line kaysa noong
          nakaraang taon. Bago mo sabihing dagdag na resources ito, ano pa ang
          dapat magtugma?
        </p>
      ),
    },
    {
      id: "nominal-and-real",
      title: "Ihiwalay ang piso sa purchasing power",
      shortTitle: "Nominal vs real",
      type: "concept",
      content: (
        <>
          <p>
            Ang <Term id="nominal-value" /> ay naka-report sa presyo ng sarili
            nitong panahon. Ang <Term id="real-value" /> naman ay ina-adjust
            ang mga value sa isang common price basis para mas madaling
            ikumpara ang mga pagbabago sa purchasing power. Kaya pwedeng
            maubos ng inflation ang bahagi — o kabuuan — ng isang nominal na
            pagtaas.
          </p>
          <p>
            Sinusukat ng <Term id="consumer-price-index" expand /> ng
            Philippine Statistics Authority ang mga pagbabago sa average
            retail prices ng isang fixed na basket kumpara sa isang base
            period. Para sa maingat na real-value comparison, sabihin ang index,
            base period, geographic series, at mga petsang ginamit. Magkaibang
            tanong ang sinasagot ng bawat deflator; hindi self-explanatory ang
            isang adjustment.
          </p>
        </>
      ),
    },
    {
      id: "static-toggle",
      title: "Static na view: ang toggle na dapat mong isipin",
      shortTitle: "Static na comparison",
      type: "example",
      content: (
        <>
          <p>
            Ang index-only na ilustrasyon na ito ay static fallback para sa
            proposed na nominal-versus-real toggle. Walang budget amount o
            kasalukuyang inflation observation na ginamit dito.
          </p>
          <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                Nominal view · illustrative index
              </div>
              <p className="mt-3 text-3xl font-bold">100 → 110</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Tumataas ng 10% ang index ng naka-record na amount. Ito ang
                current-price na pahayag, hindi pa claim tungkol sa purchasing
                power.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                Price-adjusted view · illustrative index
              </div>
              <p className="mt-3 text-3xl font-bold">100 → 100</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Kung umakyat din mula 100 patungong 110 ang relevanteng price
                index, walang pagbabago ang illustrative real index: 110 ÷ 110
                × 100 = 100.
              </p>
            </div>
          </div>
          <p>
            Hindi ang konklusyon na basta nawawala ang bawat sampung-porsyentong
            pagtaas. Ang pinunto: magkaiba ang claim na “tumaas ng sampung
            porsyento” sa claim na “kayang bumili ng sampung porsyentong mas
            marami.” Gumamit ng opisyal at may petsang price data para sa
            aktwal na comparison.
          </p>
        </>
      ),
    },
    {
      id: "same-money-stage",
      title: "Itugma ang amount sa stage nito",
      shortTitle: "Budget stage",
      type: "concept",
      content: (
        <>
          <p>
            Isa lang ang program pero pwede itong magkaroon ng ilang wastong
            numero: proposed sa <Term id="nep" />, inaprubahan sa pamamagitan
            ng <Term id="appropriation" />, ginawang available sa mga ahensya
            para magkaroon ng obligations sa pamamagitan ng{" "}
            <Term id="allotment" />, <Term id="obligation">na-obligate</Term>,
            at sa huli{" "}
            <Term id="disbursement">na-disburse</Term>. Iba-ibang tanong ang
            sinasagot ng mga numerong ito at hindi kailangang magkapareho ang
            mga ito sa isang takdang petsa.
          </p>
          <p>
            Dapat nakapirmi ang budget stage at reporting cutoff sa isang
            comparison. Ang proposed na amount na katabi ng year-end
            disbursement ay hindi nagpapakita ng growth o decline; plano ang
            inihahambing nito sa isang bayad. Suriin din kung nagbago ang
            pangalan ng isang line, kung inilipat, pinagsama, hinati, o
            na-realign ito. Ang naglahong label ay hindi patunay na natapos na
            ang activity sa likod nito.
          </p>
        </>
      ),
    },
    {
      id: "comparison-check",
      title: "Pansinin ang denominator sa loob ng claim",
      shortTitle: "Comparison check",
      type: "knowledge-check",
      content: (
        <>
          <div className="not-prose mb-8 grid gap-3 sm:grid-cols-2">
            {COMPARISON_CHECKS.map(([title, text]) => (
              <div key={title} className="rounded-lg border bg-card p-4">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
          <p>
            Hinahati ng per-capita comparison ang amount sa isang kaugnay na
            population; maaaring kailanganin ng geographic comparison ng
            consistent na boundaries, coverage, at local price context.
            Nakakatulong ang mga normalization na ito para makita ang scale,
            pero hindi nila mapapatunayan ang need, quality, o performance nang
            mag-isa.
          </p>
          <KnowledgeCheck
            title="Aling comparison ang kayang suportahan ng ebidensya?"
            moduleId="mod-07"
            lessonId="07.3"
            items={[
              {
                prompt:
                  "Tumaas ang isang line ng 10%, at tumaas din ng parehong proporsyon ang relevanteng price index. Ano ang pinakaligtas na konklusyon?",
                options: [
                  "Tumaas ang nominal value nito, habang walang pagbabago sa illustrative purchasing power nito",
                  "Siguradong tumaas ng 10% ang purchasing power nito",
                  "Siguradong umasenso ang service quality nito",
                  "Walang saysay ang inflation sa mga budget comparison",
                ],
                correct: 0,
                explanation:
                  "Mas mataas ang current-price amount, pero kapag pareho ang proporsyonal na pagtaas ng presyo, mawawala ang pagtaas pagkatapos ng simpleng adjustment na ito.",
                wrong: {
                  1: "Binabalewala ng konklusyong iyan ang parehong paggalaw ng price index.",
                  2: "Hindi estabilisado ng isang amount at price adjustment ang service quality.",
                  3: "Dahil sa inflation mismo nagkakaiba ang nominal at real comparisons.",
                },
              },
              {
                prompt:
                  "Inihambing ng isang analyst ang proposed amount ngayong taon sa disbursement noong nakaraang taon. Ano ang pangunahing problema?",
                options: [
                  "Magkaiba ang mga stage: proposal ang naihambing sa payment",
                  "Dapat magkapareho ang bawat proposal sa bawat disbursement",
                  "Hindi kailanman kapaki-pakinabang ang mga disbursement",
                  "Laging bawal ang year-on-year comparisons",
                ],
                correct: 0,
                explanation:
                  "Panatilihing hindi nagbabago ang budget stage at cutoff bago interprestahan ang isang pagbabago. Magkaibang tanong ang sinasagot ng mga plan at payment.",
                wrong: {
                  1: "Kadalasang magkaiba ang iba't ibang stage; kaya kailangan silang i-label, hindi ituring na magkapareho.",
                  2: "Kapaki-pakinabang na ebidensya ng payment ang mga disbursement kapag inihambing sa tamang measure.",
                  3: "Kapaki-pakinabang ang year-on-year analysis kapag nakatugma ang mga konsepto, stage, timing, at scope.",
                },
              },
              {
                prompt:
                  "Naglaho ang isang program line pagkatapos ng reorganization ng ahensya. Ano ang unang gagawin ng analyst?",
                options: [
                  "Conclude na natapos na ang lahat ng funding",
                  "Hanapin kung binago ang pangalan ng activity, inilipat, pinagsama, o hinati",
                  "Idagdag ang lumang line sa lahat ng bagong total ng ahensya",
                  "Huwag bigyang-pansin ang organizational change",
                ],
                correct: 1,
                explanation:
                  "Pwedeng maglaho ang isang label kahit nagpapatuloy ang activity na nasa ilalim nito sa ibang lugar. Buuin muli ang comparable na series bago sabihing may pagbawas.",
                wrong: {
                  0: "Hindi sa naglahong label lamang masasabi na natapos na ang activity na nasa ilalim nito.",
                  2: "Ang pagdaragdag nang hindi tinutunton ang scope ay maaaring magresulta sa double-counting.",
                  3: "Maaaring ipaliwanag ng reorganization ang mukhang pagbabago at dapat itong imbestigahan.",
                },
              },
            ]}
          />
          <p className="mt-6 text-sm text-muted-foreground">
            Sources: Philippine Statistics Authority,{" "}
            <a href="https://psa.gov.ph/price-indices/cpi-ir/faqs" target="_blank" rel="noreferrer">
              Consumer Price Index and Inflation Rate FAQs
            </a>
            ; Department of Budget and Management,{" "}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/BESF/BESF2026/GLOSSARY.pdf" target="_blank" rel="noreferrer">
              Budget of Expenditures and Sources of Financing glossary
            </a>{" "}
            at{" "}
            <a href="https://www.dbm.gov.ph/index.php/statement-of-appropriations-allotments-obligations-disbursements-and-balances" target="_blank" rel="noreferrer">
              appropriations, allotments, obligations, and disbursements reports
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: "takeaway",
      title: "Dapat tandaan",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Nagtutugma ng konsepto, budget stage, reporting date, price basis,
          scope, at denominator ang isang tapat na comparison. Sabihin ang
          bawat adjustment — at mag-pause kapag naglaho ang pangalan ng isang
          line o nagbago ang boundary at na-break ang series.
        </KeyTakeaway>
      ),
    },
  ],
});
