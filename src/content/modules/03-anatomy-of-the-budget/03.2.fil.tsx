import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const LENSES = [
  { label: "Organizational", question: "Sino ang responsable?", example: "Department, ahensya, at operating unit" },
  { label: "Sectoral", question: "Anong layunin ng publiko ang pinagsisilbihan nito?", example: "Health, education, economic services, o iba pang function" },
  { label: "Geographic", question: "Saan ito nakalaang gumana?", example: "Nationwide o mga nakatalang rehiyon at lokalidad" },
  { label: "Funding source", question: "Anong authority o pinagkunan ang sumusuporta dito?", example: "Ang naaangkop na fund at authorization classification" },
];

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Ano ba talaga ang isang budget line?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Hindi lang amount ang isang budget line. Ang pinaglalagyan nito sa
            dokumento ay nagsasabi kung sino ang responsable, anong trabaho
            ang sinusuportahan ng pera, at paano mapapangkat ang paggastos na
            ito sa ibang public expenditure.
          </p>
          <p>
            Bago mo ikumpara ang dalawang line, basahin muna ang mga label at
            ang hierarchy ng mga ito. Magkatulad na amount ang maaaring
            magbayad para sa napakakaibang trabaho, at ang isang program ay
            maaaring maglaman ng ilang activity at project.
          </p>
        </>
      ),
    },
    {
      id: "hierarchy",
      title: "Basahin mula sa ahensya, program, hanggang sa work item",
      shortTitle: "Hierarchy",
      type: "concept",
      content: (
        <>
          <p>
            Kinikilala muna ng mga national budget document ang department o
            ahensyang pananagot sa pondo. Sa loob ng budget ng isang ahensya,
            pinapangkat ang magkakaugnay na trabaho sa mga program. Ang bawat
            program ay maaaring maglaman ng mga activity at project — ang
            mga partikular na paulit-ulit na trabaho o gawaing may itinakdang
            panahon na ginagamit para isagawa ito.
          </p>
          <p>
            Madalas pinaikli ng mga budget practitioner ang istrukturang ito
            bilang <Term id="pap" expand />. Sa ilalim ng Program Expenditure
            Classification ng gobyerno, pinapangkat sa ilalim ng isang program
            ang mga activity at project na tumutulong sa iisang objective o
            outcome.
          </p>
        </>
      ),
    },
    {
      id: "drill-down",
      title: "Pinasimpleng drill-down ng isang ahensya",
      shortTitle: "Drill-down",
      type: "example",
      content: (
        <>
          <p>
            <strong>
              Illustrative na halimbawa. Pinapasimple ang mga detalye para
              mas malinaw ito.
            </strong>{" "}
            Gumagamit ang tree na ito ng tunay na department at pangalan ng
            program, pero teaching diagram ito — hindi kopya ng budget ng
            isang partikular na fiscal year.
          </p>
          <div className="not-prose my-8 rounded-lg border bg-card p-5 sm:p-6">
            <ol className="space-y-4" aria-label="Pinasimpleng budget hierarchy ng Department of Health">
              <li>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Ahensya</p>
                <p className="mt-1 font-semibold">Department of Health</p>
              </li>
              <li className="ml-4 border-l-2 border-primary/30 pl-4 sm:ml-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Program</p>
                <p className="mt-1 font-semibold">Health Facilities Enhancement Program</p>
              </li>
              <li className="ml-8 border-l-2 border-primary/30 pl-4 sm:ml-16">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Illustrative na project</p>
                <p className="mt-1 font-semibold">I-upgrade ang isang pampublikong health facility</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Kasama sa isang tunay na entry ang mas maraming identifier,
                  classification, kondisyon, at kung magkano ang authorized na
                  amount.
                </p>
              </li>
            </ol>
          </div>
          <p>
            Basahin ang tree mula labas papasok: ang ahensyang responsable, ang
            objective ng program, tapos ang activity o project na gumagawa ng
            trabaho. Huwag ituring ang label lang ng project na buong budget
            ng ahensya.
          </p>
        </>
      ),
    },
    {
      id: "four-lenses",
      title: "Apat na paraan ng pagtingin sa iisang line",
      shortTitle: "Apat na lens",
      type: "concept",
      content: (
        <>
          <p>
            Inilalagay ng hierarchy ang isang line sa loob ng isang ahensya.
            Nakakatulong naman ang mga classification system para mapangkat
            ng gobyerno ang parehong expenditure sa iba pang kapaki-pakinabang
            na paraan. Hindi na nadadagdagan ang mismong paggastos kapag
            nagpalit ka ng lens.
          </p>
          <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
            {LENSES.map((lens) => (
              <div key={lens.label} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{lens.label}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{lens.question}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{lens.example}</p>
              </div>
            ))}
          </div>
          <p>
            Ang isang <Term id="special-purpose-fund" expand /> ay inilalatag
            hiwalay sa regular na budget ng isang ahensya dahil
            sinusuportahan nito ang layuning maaaring angkop sa maraming
            ahensya, benepisyaryo, o contingencies. Kailangan pa rin nito ng
            malinaw na authority at classification; hindi ibig sabihin ng
            “special purpose” na hindi ito klasipikado o walang limitasyon.
          </p>
          <p className="text-sm text-muted-foreground">
            Source note: gabay ng Department of Budget and Management,
            Commission on Audit, at Department of Finance tungkol sa{" "}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/Issuances/2017/Joint%20Circular/JOINT%20CIRCULAR%20NO.%201%20COA-DBM-DOF%20DATED%20AUGUST%2011%2C%202017.pdf">
              Program Expenditure Classification
            </a>{" "}
            at ang{" "}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/Issuances/Issuances/2013/Joint%20Circular%202013/DBM-COA-DOF/UACS%20Manual.pdf">
              Unified Accounts Code Structure Manual
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
          title="Ilagay ang line sa tamang lugar at piliin ang lens"
          moduleId="mod-03"
          lessonId="03.2"
          items={[
            {
              prompt:
                "Nakalista sa isang dokumento ang Department of Health → isang health-facilities program → upgrade ng isang nakatalang pampublikong facility. Ano ang nauukulan ng huling item sa pinasimpleng hierarchy?",
              options: [
                "Ang ahensyang responsable",
                "Isang project sa ilalim ng program",
                "Ang buong health sector",
                "Isang funding source",
              ],
              correct: 1,
              explanation:
                "Ang pag-upgrade ng facility ang partikular na gawain na nasa ilalim ng program, na siya namang nasa loob ng budget ng ahensyang responsable.",
              wrong: {
                0: "Ang Department of Health ang ahensyang responsable; nasa ilalim nito ang pag-upgrade ng facility.",
                2: "Pinagsasama ng health sector ang maraming ahensya at expenditure. Hindi ang buong sector ang isang facility project.",
                3: "Ang funding-source classification ay sumasagot kung saan galing ang authority o financing, hindi kung anong gawain ang isasagawa.",
              },
            },
            {
              prompt:
                "Gusto mong ikumpara kung magkano ang nakalaang budgeted na trabaho para sa iba’t ibang rehiyon, anuman ang ahensyang responsable. Anong lens ang dapat mong gamitin?",
              options: ["Organizational", "Sectoral", "Geographic", "Funding source"],
              correct: 2,
              explanation:
                "Sinusuri ng geographic lens ang expenditure ayon sa kung saan ito nakalaang gumana o magbigay-benefisyo.",
              wrong: {
                0: "Sinasabi sa iyo ng organizational lens kung aling department, ahensya, o unit ang responsable.",
                1: "Pinapangkat ng sectoral lens ang paggastos ayon sa layunin para sa publiko, gaya ng health o education.",
                3: "Kinikilala ng funding-source lens ang kaugnay na fund o authorization, hindi ang lugar na nakalaan.",
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
          Basahin ang isang budget line sa dalawang direksyon: pababa sa
          hierarchy na ahensya → program → activity/project, at paligid sa
          mga lens na organizational, sectoral, geographic, at
          funding-source. Ang hierarchy ang nagsasabi kung nasaan ang
          trabaho; ang mga classification ang tumutulong para ikumpara mo
          ito.
        </KeyTakeaway>
      ),
    },
  ],
});
