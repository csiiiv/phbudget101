import { Figure } from "@/components/content/Figure";
import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const SAMPLE_ROWS = [
  { item: "Operasyon ng mga ruta", prior: "100", current: "108", signal: "Increment · bahagyang pagtaas" },
  { item: "Pag-upgrade ng mga istasyon", prior: "100", current: "165", signal: "Avalanche · malaking pagtaas" },
  { item: "Impormasyon para sa pasahero", prior: "—", current: "100", signal: "Nagpapakita (appears)" },
  { item: "Pansamantalang gawain sa terminal", prior: "100", current: "—", signal: "Naglaho (disappears)" },
];

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Nasaan ang kuwento sa libong rows?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <p className="text-lg text-muted-foreground">
          Bahagyang gumagalaw lang ang karamihan sa mga line. Ang ilan naman ay
          tumatalon, bumabagsak, lumilitaw, o naglalaho. Alin sa mga ito ang
          dapat pagtuunan nang mas malalim — at alin ang mukhang
          dramatic lang dahil nagbago ang table?
        </p>
      ),
    },
    {
      id: "method",
      title: "Maghanap ng avalanche, tapos basahin ang mga increment",
      shortTitle: "Method",
      type: "concept",
      content: (
        <>
          <p>
            Ang <Term id="avalanche-method" /> ay isang triage method:
            ikumpara ang magkakatulad na line sa mga taon at i-flag ang mga
            hindi karaniwang malaking pagtaas, pagbaba, paglabas, at
            pagkawala. Leads para sa imbestigasyon ang mga outlier na ito,
            hindi konklusyon. Ang <Term id="increment" /> naman ang mas maliit
            na pagbabagong madaling palampasin pero maaaring umipon at maging
            makabuluhang trend sa loob ng ilang taon.
          </p>
          <p>
            Magsimula sa eksaktong line label, budget stage, fiscal year, unit,
            at document source. Pagkatapos, kalkulahin ang parehong absolute at
            percentage change kapag may aktwal na amounts. Iba-ibang kuwento
            ang masasabi ng malaking porsyento sa maliit na base at ng maliit
            na porsyento sa malaking base.
          </p>
        </>
      ),
    },
    {
      id: "static-scan",
      title: "Static na avalanche-spotting exercise",
      shortTitle: "Mga signal",
      type: "example",
      content: (
        <>
          <p>
            Gumagamit ang simpleng replica na ito ng mga dimensionless na
            index, hindi budget amounts. Naka-set sa 100 ang bawat nagpapatuloy
            na line sa unang taong ipinapakita; gumagamit naman ng dash ang mga
            bago o nawawalang line. Ipinapakita nito ang scan nang hindi
            sinasabing opisyal na transport figures ang mga ito.
          </p>
          <div className="not-prose my-8 overflow-x-auto rounded-lg border bg-card">
            <table className="w-full min-w-[42rem] text-left text-sm">
              <thead className="border-b bg-muted/30">
                <tr>
                  <th className="p-3 font-semibold">Illustrative na transport line</th>
                  <th className="p-3 font-semibold">Index ng nakaraang taon</th>
                  <th className="p-3 font-semibold">Index ng kasalukuyang taon</th>
                  <th className="p-3 font-semibold">Unang assessment na signal</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {SAMPLE_ROWS.map((row) => (
                  <tr key={row.item}>
                    <td className="p-3 font-medium">{row.item}</td>
                    <td className="p-3">{row.prior}</td>
                    <td className="p-3">{row.current}</td>
                    <td className="p-3">{row.signal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Markahan ang lahat ng apat na signal, hindi lang ang pinakamalaking
            pagtaas. Ang susunod na hakbang ay tingnan ang mga note, provision,
            organizational change, at mga kalapit na row. Ang “appears” ay
            maaaring talagang bagong item — o line na pinalitan ng pangalan o
            hinati. Ang “disappears” naman ay maaaring katapusan, pagkumpleto,
            paglilipat, pagsasama, o reclassification.
          </p>
        </>
      ),
    },
    {
      id: "build-series",
      title: "Bumuo muna ng series bago magkwento",
      shortTitle: "Pagbuo ng series",
      type: "concept",
      content: (
        <>
          <p>
            Ang maipagtatanggol na year-series ay pinapanatiling pareho ang
            konsepto at stage sa bawat column. Itala ang source page, line
            label, unit, fiscal year, at kung ang figure ay proposed, approved,
            allotted, obligated, o disbursed. Panatiliin ang mga note tungkol
            sa mga pinalitang-pangalan na line; huwag silang tahimik na
            pagdugtung-dugtungin.
          </p>
          <ol>
            <li>Ipunin ang same-stage na dokumento para sa ilang taon.</li>
            <li>I-map ang luma at bagong label, kabilang ang mga transfer at split.</li>
            <li>Tingnan ang mga total at footnote; iwasang bilangin nang dalawang beses ang isang subtotal at mga row nito.</li>
            <li>Kalkulahin ang mga pagbabago, tapos tingnan ang pinakamalalaki at ang mga tuloy-tuloy na maliliit.</li>
            <li>Isulat muna ang signal at ihiwalay na imbestigahan ang sanhi nito.</li>
          </ol>
          <p>
            Panatilihing magkakaiba ang zero, blank, at not-applicable na
            value. Ang blank na cell ay kulang na impormasyon maliban kung
            binibigyang-kahulugan ito ng dokumento nang iba; hindi ito
            awtomatikong zero.
          </p>
        </>
      ),
    },
    {
      id: "transport-check",
      title: "I-apply ang method nang hindi hinahalo ang mga stage",
      shortTitle: "Self-check",
      type: "knowledge-check",
      content: (
        <>
          <p>
            Ang transport example sa mas maagang bahagi ng course — ang 2022
            proposal ng Move As One coalition at ang enacted outcome nito — ay
            may proposal at enacted amount para sa parehong fiscal year:
          </p>
          <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
            <Figure module="mod-04" id="mao-ask" />
            <Figure module="mod-04" id="mao-service-contracting-outcome" />
          </div>
          <p>
            May petsa at source na ang dalawang figure sa Module 04 data.
            Ipapakita nila ang galaw mula proposal hanggang enactment, hindi
            year-on-year na avalanche. Para tapat na mailapat ang method,
            buuin muna ang parehong transport line at parehong budget stage sa
            maraming taon mula sa relevanteng <Term id="nep" /> o{" "}
            <Term id="gaa" /> volumes.
          </p>
          <KnowledgeCheck
            title="Aling mga signal ang dapat imbestigahan?"
            moduleId="mod-07"
            lessonId="07.4"
            items={[
              {
                prompt:
                  "Sa illustrative table, nagbabago ang “Impormasyon para sa pasahero” mula dash patungong index na 100. Ano ang pinakaligtas na unang pahayag?",
                options: [
                  "Kasama na sa kasalukuyang table ang line at dapat tingnan ang continuity nito",
                  "Siguradong unang beses nang nagsimula ang paggastos",
                  "Siguradong zero ang value noong nakaraang taon",
                  "Siguradong naging matagumpay ang program",
                ],
                correct: 0,
                explanation:
                  "Signal ang paglabas. Suriin muna kung bago ang activity, pinalitan ng pangalan, inilipat, hinati, o bagong lang nai-report, bago mo ito ipaliwanag.",
                wrong: {
                  1: "Maaaring umiiral na ang activity sa ilalim ng ibang line o classification.",
                  2: "Hindi awtomatikong zero ang dash; nakadepende ang kahulugan nito sa dokumento.",
                  3: "Hindi patunay ng mga resulta ang paglabas ng isang budget line.",
                },
              },
              {
                prompt:
                  "Kaya bang patunayan ng mga transport figure sa Module 04 — ang proposal at ang enacted amount — nang mag-isa na may year-on-year avalanche?",
                options: [
                  "Oo, dahil time series agad ang kahit anong dalawang amount",
                  "Hindi, dahil magkaibang stage ang mga ito sa loob ng isang fiscal year",
                  "Oo, dahil ang mas malaking amount ay dapat ang mas huling taon",
                  "Hindi, dahil hindi kailanman makukumpara ang mga transport line",
                ],
                correct: 1,
                explanation:
                  "Kailangan ng year-on-year series ng comparable na fiscal years at parehong budget stage. Iba ang tanong ng proposal kumpara sa enactment.",
                wrong: {
                  0: "Wastong comparison lang ang dalawang value kapag nakatugma ang mga konsepto, stage, petsa, at unit ng mga ito.",
                  2: "Hindi tinutukoy ng laki ang chronology o budget stage.",
                  3: "Makukumpara ang mga transport line kapag inayos ang mga definition at stage ng mga ito.",
                },
              },
            ]}
          />
          <p className="mt-6 text-sm text-muted-foreground">
            Source path para sa aktwal na series: Department of Budget and
            Management{" "}
            <a href="https://www.dbm.gov.ph/index.php/budget-documents-archives" target="_blank" rel="noreferrer">
              budget document archives
            </a>
            . Adapted mula sa course guidebook ang method; illustrative lang
            ang static replica sa itaas at walang opisyal na amount.
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
          Mga clue ang avalanche at increment, hindi verdict. Bumuo ng
          comparable na year-series, i-flag ang malalaki at tuloy-tuloy na
          pagbabago, hanapin ang bawat paglabas o pagkawala, at imbestigahan
          ang konteksto ng dokumento bago ipaliwanag kung bakit.
        </KeyTakeaway>
      ),
    },
  ],
});
