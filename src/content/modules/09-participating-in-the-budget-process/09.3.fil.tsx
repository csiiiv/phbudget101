import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const TARGET_MAP = [
  [
    "National program proposal",
    "Implementing agency at executive budget authorities",
    "Preparation",
    "Baguhin kung ano ang papasok sa executive proposal",
  ],
  [
    "National appropriation",
    "House at Senate",
    "Legislation",
    "Baguhin kung ano ang ia-authorize ng annual appropriations law",
  ],
  [
    "National program delivery",
    "Implementing agency",
    "Execution",
    "Ayusin ang issues sa release, procurement, o delivery",
  ],
  [
    "Lokal na serbisyo o project",
    "Local chief executive at responsable na lokal na opisina",
    "Planning, preparation, o execution",
    "Isama, idisenyo, o ipatupad ang lokal na tugon",
  ],
  [
    "Lokal na budget authorization",
    "Sanggunian",
    "Authorization",
    "Aprubahan o amyendahan ang lokal na appropriation ordinance",
  ],
  [
    "Paggamit ng public funds",
    "Implementing office, auditors, at legislative oversight bodies",
    "Accountability",
    "Ipaliwanag ang records, findings, at corrective action",
  ],
] as const;

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Sino ba talaga ang pwedeng kumilos?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <p className="text-lg text-muted-foreground">
          Kahit solid ang proposal, maliit ang tsansa nitong umusad kung
          mali ang opisina. Sino ang may hawak sa desisyong kailangan mo?
        </p>
      ),
    },
    {
      id: "define-decision",
      title: "Pangalanan muna ang desisyon bago ang tao",
      shortTitle: "Ang desisyon",
      type: "concept",
      content: (
        <>
          <p>
            Magsimula sa pagsulat ng desired decision bilang verb: isama ang
            program sa proposal, i-authorize ang isang{" "}
            <Term id="appropriation" />, mag-release ng pondo, kumpletuhin ang
            procurement, mag-publish ng records, o ayusin ang delivery
            problem. Ang institusyong may legal o administrative power sa
            aksyon na iyon ang primary target.
          </p>
          <p>
            Pagkatapos, ihiwalay ang <strong>decision-maker</strong>, na
            pwedeng mag-apruba o magpatupad ng aksyon, mula sa{" "}
            <strong>influencer</strong>, na pwedeng magbigay ng ebidensya,
            payo, public attention, o access. Pwedeng tumulong ang influencer,
            pero hindi nito mapapalitan ang institusyong may-ari ng desisyon.
          </p>
        </>
      ),
    },
    {
      id: "three-filters",
      title: "Gamitin ang tatlong filter",
      shortTitle: "Tatlong filter",
      type: "concept",
      content: (
        <ol>
          <li>
            <strong>Level:</strong> National ba o lokal ang concern?
          </li>
          <li>
            <strong>Function:</strong> Executive, legislative,
            implementation, o oversight ba ang kailangang aksyon?
          </li>
          <li>
            <strong>Timing:</strong> Aling budget phase ang may hawak ngayon
            sa desisyon?
          </li>
        </ol>
      ),
    },
    {
      id: "mapping-grid",
      title: "Static institution-mapping grid",
      shortTitle: "Target map",
      type: "interactive",
      content: (
        <>
          <p>
            Gamitin ang grid na ito kapag hindi available ang enhanced
            budget-cycle widget. Basahin papunta sa kanan: mula sa concern
            papunta sa institusyon, timing, at hinihinging aksyon.
          </p>
          <div className="not-prose my-8 overflow-x-auto rounded-lg border">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3">Concern</th>
                  <th className="p-3">Magsimula sa</th>
                  <th className="p-3">Timing</th>
                  <th className="p-3">Hilingin</th>
                </tr>
              </thead>
              <tbody>
                {TARGET_MAP.map(([concern, target, timing, ask]) => (
                  <tr key={concern} className="border-t align-top">
                    <th className="p-3 font-medium">{concern}</th>
                    <td className="p-3">{target}</td>
                    <td className="p-3">{timing}</td>
                    <td className="p-3">{ask}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Starting point ang grid, hindi mailing list. Kumpirmahin muna ang
            kasalukuyang mandate, proseso, submission rules, at calendar ng
            opisina bago makipag-engage.
          </p>
        </>
      ),
    },
    {
      id: "check",
      title: "I-route ang concern",
      shortTitle: "Self-check",
      type: "knowledge-check",
      content: (
        <KnowledgeCheck
          title="Piliin ang institusyong may-ari ng desisyon"
          moduleId="mod-09"
          lessonId="09.3"
          items={[
            {
              prompt:
                "May bagong health-center project sa city budget proposal, pero gusto ng mga residente na baguhin ang halaga bago maaprubahan ang lokal na appropriation ordinance. Sino ang may-ari ng authorization decision?",
              options: [
                "Ang sanggunian",
                "Ang Commission on Audit",
                "Isang national implementing agency",
                "Ang project contractor",
              ],
              correct: 0,
              explanation:
                "Ina-authorize ng sanggunian ang lokal na budget sa pamamagitan ng appropriation ordinance. Nagpo-propose at nagpapatupad ang local executive, pero ang legislative body ang may-ari ng authorization.",
              wrong: {
                1: "Tinitingnan ng auditors ang paggamit ng pondo; hindi nila ine-enact ang lokal na appropriation ordinance.",
                2: "City authorization decision ito, hindi national agency proposal.",
                3: "Hindi nag-a-authorize ng public appropriations ang contractor.",
              },
            },
            {
              prompt:
                "Na-enact na ang national program, pero hindi pa nagsisimula ang procurement. Aling institusyon ang dapat tumanggap ng unang tanong tungkol sa implementation?",
              options: [
                "Ang implementing agency",
                "Ang Senate nang mag-isa",
                "Ang sanggunian",
                "Isang private commentator",
              ],
              correct: 0,
              explanation:
                "Ang implementing agency ang may-ari ng procurement at delivery. Tanungin kung anong milestone ang delayed at anong aksyon ang kailangan.",
              wrong: {
                1: "May oversight ang Kongreso, pero hindi karaniwang pinapatakbo nito ang procurement ng isang ahensya.",
                2: "Nag-a-authorize ang sanggunian ng lokal na budget; national program ito.",
                3: "Pwedeng makaapekto ang commentator sa attention, pero hindi siya may-ari ng implementation.",
              },
            },
            {
              prompt:
                "Gusto ng isang grupo na maisama ang bagong national program bago mapunta sa Kongreso ang executive budget proposal. Saan dapat magsimula ang engagement?",
              options: [
                "Ang responsable na national agency sa panahon ng preparation",
                "Isang audit team pagkatapos ng year-end",
                "Isang lokal na contractor",
                "Ang sanggunian",
              ],
              correct: 0,
              explanation:
                "Sa preparation, binubuo ng responsable na ahensya ang proposal nito sa loob ng executive process. Iyon ang pinakaagang matching entry point.",
              wrong: {
                1: "Nangyayari ang year-end audit pagkatapos ng proposal at enactment decisions.",
                2: "Hindi nagsusulat o nag-a-authorize ang contractor ng national proposal.",
                3: "Lokal na legislative decisions ang hinahawakan ng sanggunian.",
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
          Tukuyin kung ano eksakto ang desisyon, tapos itugma ang level,
          function, at timing nito sa institusyong pwedeng kumilos. Ituring
          ang mga influencer bilang support, hindi kapalit ng decision-maker.
        </KeyTakeaway>
      ),
    },
  ],
});
