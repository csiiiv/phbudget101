import { Figure } from "@/components/content/Figure";
import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { defineLesson } from "@/lib/sections";

const PARTICIPATION_POINTS = [
  {
    phase: "Preparation",
    action:
      "Idokumento ang pangangailangan at magsumite ng proposal bago maipirmi ang executive draft.",
    result:
      "Pwedeng pumasok ang concern sa proposal na ipapasa sa legislature.",
  },
  {
    phase: "Legislation",
    action:
      "Magpadala ng ebidensya o testimony habang tinitingnan at inaamyendahan ng mga mambabatas ang proposal.",
    result:
      "Pwedeng tanungin, baguhin, panatilihin, o alisin ang isang proposed item.",
  },
  {
    phase: "Execution",
    action:
      "Ihambing ang mga release at implementation sa awtorisadong enacted budget.",
    result:
      "Pwedeng matukoy ang delay at delivery problem habang may oras pang kumilos.",
  },
  {
    phase: "Accountability",
    action:
      "Ihambing ang paggastos at resulta, tapos ibalik ang findings sa susunod na cycle.",
    result:
      "Pwedeng paghusayin ng ebidensya mula sa delivery ang susunod na plan at budget proposal.",
  },
];

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "May nababago ba talaga ang pakikilahok?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <p className="text-lg text-muted-foreground">
          Technical ang budget process, pero apektado nito ang mga serbisyong
          pampubliko. Saan pwedeng makatulong ang ebidensya ng mamamayan?
        </p>
      ),
    },
    {
      id: "why-participate",
      title: "Pinapaganda ng pakikilahok ang mga tanong",
      shortTitle: "Bakit makilahok",
      type: "concept",
      content: (
        <>
          <p>
            Ikinokonekta ng pakikilahok ang mga desisyon sa budget sa
            impormasyong nasa labas ng gobyerno: aling pangangailangan ang
            urgent, sino ang napagkakaitan, at gumagana ba sa field ang
            pinopondohang serbisyo. Binibigyan din nito ang mga tao ng daan para
            tingnan ang mga pampublikong desisyon at hingin ang paliwanag mula
            sa mga decision-maker.
          </p>
          <p>
            Hindi ibig sabihin ng pakikilahok na dapat pondohan ang bawat
            request. Limited ang public money, iba-iba ang kapangyarihan ng mga
            institusyon, at nakikipagkumpitensya ang mga proposal sa ibang
            pangangailangan. Kapaki-pakinabang ang pakikilahok kapag may
            specific na claim, may ebidensyang sumusuporta, napupunta sa
            institusyong pwedeng kumilos, at dumating habang bukas pa ang
            kaugnay na desisyon.
          </p>
        </>
      ),
    },
    {
      id: "cycle",
      title: "May daan sa bawat phase",
      shortTitle: "Sa buong cycle",
      type: "concept",
      content: (
        <>
          <p>
            Iba-iba ang oportunidad sa pakikilahok sa apat na phase ng budget.
            Pareho ang concern, pero kailangan mong i-frame ito nang iba
            kapag nagbabago ang desisyon.
          </p>
          <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
            {PARTICIPATION_POINTS.map((point, index) => (
              <section
                key={point.phase}
                className="rounded-lg border bg-card p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Phase {index + 1}
                </p>
                <h3 className="mt-1 font-semibold">{point.phase}</h3>
                <p className="mt-3 text-sm leading-relaxed">{point.action}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Posibleng shift:
                  </span>{" "}
                  {point.result}
                </p>
              </section>
            ))}
          </div>
          <p>
            Static engagement-outcomes strip ito: usable pa rin ito kapag hindi
            available ang enhanced interactive features.
          </p>
        </>
      ),
    },
    {
      id: "transport-example",
      title: "Mula sa hiling hanggang sa enacted na halaga",
      shortTitle: "Halimbawa",
      type: "example",
      content: (
        <>
          <p>
            Balikan ang active-transport example na ipinakilala sa Module 04.
            Sa preparation para sa 2022 national budget, ang{" "}
            <strong>Move As One</strong> coalition — isang transport coalition
            na may higit isang daang organisasyon — ay nagsumite ng documented
            na proposal na humihingi ng support para sa public-transport
            service contracting:
          </p>
          <Figure module="mod-04" id="mao-ask" />
          <p>
            Mas maliit naman ang enacted na halaga para sa program sa budget:
          </p>
          <Figure module="mod-04" id="mao-service-contracting-outcome" />
          <p>
            Hindi nito pinapatunayan na ang pakikilahok lang ang dahilan ng
            enacted na halaga, at hindi rin tumugma ang outcome sa request.
            Ipinapakita nito ang realistic na unit of analysis: ihambing ang
            documented na hiling sa susunod na pampublikong desisyon, tingnan
            kung ano ang nagbago, at ipagpatuloy ang pagbabantay sa delivery.
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
          title="Itugma ang claim sa pakikilahok sa tamang phase"
          moduleId="mod-09"
          lessonId="09.1"
          items={[
            {
              prompt:
                "May dokumentado nang unmet transport need ang mga residente, at gusto nilang isaalang-alang ito bago ipadala ng executive ang proposal nito sa legislature. Aling phase ang pinakaangkop?",
              options: [
                "Preparation",
                "Legislation",
                "Execution",
                "Accountability",
              ],
              correct: 0,
              explanation:
                "Sa Preparation, binubuo ng mga ahensya at ng executive ang proposal. Pwedeng makaapekto ang ebidensyang isinumite bago maipirmi ang draft sa kung ano ang ipapanukala.",
              wrong: {
                1: "Nagsisimula ang Legislation pagkatapos isumite ang executive proposal. Gusto ng mga residente na kumilos bago ang handoff na iyon.",
                2: "Tungkol sa Execution ang pagpapatupad ng enacted budget, hindi ang pagbuo ng unang proposal.",
                3: "Tinitingnan ng Accountability ang paggastos at resulta pagkatapos ng implementation; ang concern dito ay ang pagpasok sa proposal.",
              },
            },
            {
              prompt:
                "Na-enact na ang program. Ihinahambing ng community monitors ang mga release at aktwal na service delivery sa awtorisadong budget. Aling phase ang pinakaangkop?",
              options: [
                "Preparation",
                "Legislation",
                "Execution",
                "Revenue forecasting",
              ],
              correct: 2,
              explanation:
                "Sa Execution, nagre-release, gumagastos, nagpo-procure, at nagde-deliver ang mga ahensya. Pwedeng matukoy ng monitoring ang delay o gap habang isinasagawa ang implementation.",
              wrong: {
                0: "Tungkol ang Preparation sa proposed budget bago maging batas; awtorisado na ang program dito.",
                1: "Dito nagpapasya ang Legislation kung ano ang ia-authorize. Tinatanong ng senaryo kung ano ang nangyayari pagkatapos ng authorization.",
                3: "Tinatantiya ng revenue forecasting ang resources; hindi ito ang phase para tingnan ang delivery ng enacted program.",
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
          Pinakagamit ang pakikilahok kapag specific, may ebidensya,
          nakatuon sa institusyong pwedeng kumilos, at naka-time sa tamang
          budget phase. Pwedeng hubugin nito ang mga tanong at desisyon, pero
          hindi nito ginagarantiya na aaprubahan nang buo ang isang proposal.
        </KeyTakeaway>
      ),
    },
  ],
});
