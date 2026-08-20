import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const PLAN_FIELDS = [
  ["Issue", "Anong specific na pampublikong problema ang tinutugunan ng proposal?"],
  [
    "Budget stage",
    "Aling desisyon ang bukas pa, at kailan ito gagawin?",
  ],
  [
    "Target institution",
    "Aling opisina o body ang may authority na gawin ang desisyong iyon?",
  ],
  [
    "Evidence",
    "Anong need, baseline, implementation record, at source ang sumusuporta sa case?",
  ],
  ["Message", "Ano ang maikli at malinaw na dahilan kung bakit dapat piliin ang option na ito?"],
  [
    "Desired decision",
    "Ano eksakto ang dapat aprubahan, baguhin, i-publish, o ipatupad ng decision-maker?",
  ],
] as const;

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Pwede bang mag-yes ang decision-maker?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <p className="text-lg text-muted-foreground">
          Pwedeng valid ang concern pero kulang pa bilang proposal. Anong
          impormasyon ang makakatulong sa opisyal para makagawa ng
          responsableng desisyon?
        </p>
      ),
    },
    {
      id: "proposal",
      title: "Mula sa concern papunta sa desisyon",
      shortTitle: "Proposal",
      type: "concept",
      content: (
        <>
          <p>
            Ang evidence-based na budget proposal ay nag-uugnay ng tinukoy na
            pangangailangan sa feasible na aksyon ng gobyerno. Tinutukoy nito
            ang institusyon, budget stage, apektadong tao, ebidensya,
            recommended option, implementation requirements, at desired
            decision.
          </p>
          <p>
            Pwedeng kabilang sa ebidensya ang service data, budget at
            implementation records, karanasan ng komunidad, at mga kaugnay na
            rules. Sabihin kung ano ang ipinapakita — at hindi ipinapakita —
            ng bawat source. Kung teaching estimate lang ang halaga, i-label
            itong illustrative sa halip na iharap bilang enacted figure.
          </p>
        </>
      ),
    },
    {
      id: "csw",
      title: "Ang Completed Staff Work standard",
      shortTitle: "CSW",
      type: "concept",
      content: (
        <>
          <p>
            Ang <Term id="completed-staff-work" expand /> ay nangangahulugang
            pag-aaral ng problema at paghahain ng worked-out na solusyon sa
            anyong may malinaw na pagpipilian ang decision-maker: aprubahan o
            huwag aprubahan. Hindi ito nangangahulugang itago ang uncertainty
            o magpanggap na iisa lang ang option.
          </p>
          <ul>
            <li>
              <strong>Analyzed:</strong> sinusuri ang problema, options,
              costs, risks, at assumptions.
            </li>
            <li>
              <strong>Coordinated:</strong> kinokonsulta ang apektadong
              opisina at tao bago iharap ang recommendation.
            </li>
            <li>
              <strong>Actionable:</strong> malinaw ang recommended decision,
              timing, responsable na opisina, at susunod na hakbang.
            </li>
            <li>
              <strong>Decision-ready:</strong> maikli, may source, at usable
              ang supporting document.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "worksheet",
      title: "Gumawa ng one-page engagement plan",
      shortTitle: "Worksheet",
      type: "interactive",
      content: (
        <>
          <p>
            Static worksheet ito bilang fallback para sa engagement plan
            builder. Kopyahin ang anim na field sa isang dokumento at
            kumpletuhin nang sunod-sunod.
          </p>
          <ol className="not-prose my-8 grid gap-4 md:grid-cols-2">
            {PLAN_FIELDS.map(([field, prompt], index) => (
              <li key={field} className="rounded-lg border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Field {index + 1}
                </p>
                <h3 className="mt-1 font-semibold">{field}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{prompt}</p>
                <div
                  className="mt-4 min-h-16 rounded border border-dashed bg-background"
                  aria-label={`Blankong espasyo para sa ${field}`}
                />
              </li>
            ))}
          </ol>
          <p>
            Bago ibahagi ang plan, magdagdag ng source links o document
            titles, pangalanan ang assumptions, at tanungin kung may
            makikilala ba ang hinihinging aksyon ang taong hindi pamilyar sa
            isyu.
          </p>
        </>
      ),
    },
    {
      id: "example-and-check",
      title: "Subukan ang isang sectoral proposal",
      shortTitle: "Halimbawa at check",
      type: "knowledge-check",
      content: (
        <>
          <div className="not-prose mb-8 rounded-lg border bg-muted/40 p-5">
            <h3 className="font-semibold">Illustrative composite</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              May natanggap ang regional service office na mga report tungkol
              sa mahabang travel time papunta sa isang serbisyong pampubliko.
              Tinutukoy ng proposal ang apektadong area, binabanggit ang
              service at community evidence, inihahambing ang delivery
              options, tinutukoy ang responsable na opisina at budget stage,
              sinasabi ang implementation risks, at hinihiling sa awtorisadong
              opisyal na aprubahan ang isang option para isama sa susunod na
              proposal. Walang inaangking peso amount hanggang may sourced
              costing.
            </p>
          </div>
          <KnowledgeCheck
            title="Decision-ready ba ang proposal?"
            moduleId="mod-09"
            lessonId="09.4"
            items={[
              {
                prompt:
                  "Detalyadong ipinaliwanag ng brief ang problema pero nagtatapos sa “Please do something.” Ano ang pinakamahalagang kulang?",
                options: [
                  "Malinaw na desired decision",
                  "Mas mahabang history section",
                  "Isang campaign slogan",
                  "Inimbentong budget amount",
                ],
                correct: 0,
                explanation:
                  "Sinasabi ng decision-ready na proposal kung ano eksakto ang dapat aprubahan, baguhin, i-publish, o ipatupad ng awtorisadong opisyal.",
                wrong: {
                  1: "Hindi mapapalitan ng mas mahabang background ang konkretong hiling.",
                  2: "Hindi tinutukoy ng slogan ang awtorisadong aksyon.",
                  3: "Dapat may source o malinaw na illustrative ang mga amount — huwag kailanman mag-imbento.",
                },
              },
              {
                prompt:
                  "Aling practice ang pinakaangkop sa Completed Staff Work standard?",
                options: [
                  "Ipadala agad ang problema at hilingin sa opisyal na siya ang magdisenyo ng solusyon.",
                  "Maghain ng isang recommendation nang hindi isinasapubliko ang assumptions o risks.",
                  "Suriin ang options, makipag-coordinate sa apektadong partido, at maghain ng sourced recommendation na may malinaw na approval decision.",
                  "Maghintay hanggang mawala ang lahat ng uncertainty bago maghain ng kahit ano.",
                ],
                correct: 2,
                explanation:
                  "Binabawasan ng Completed Staff Work ang unresolved burden sa decision-maker habang pinapanatili ang ebidensya, assumptions, risks, at malinaw na pagpipilian.",
                wrong: {
                  0: "Inililipat nito sa decision-maker ang trabaho ng pagbuo ng aksyon.",
                  1: "Ginagawang visible ng decision-ready work ang assumptions at risks.",
                  3: "Madalas may natitirang uncertainty sa responsableng desisyon; ang gawain ay ipaliwanag at pamahalaan ito.",
                },
              },
            ]}
          />
        </>
      ),
    },
    {
      id: "takeaway",
      title: "Mahalagang tandaan",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Ang mapanghikayat na budget proposal ay hindi request lang. Tinutukoy
          nito ang problema, sinusuportahan ang feasible option ng ebidensya,
          tinatarget ang tamang institusyon at stage, at naghahain ng malinaw
          na desisyon na pwedeng aprubahan o hindi.
        </KeyTakeaway>
      ),
    },
  ],
});
