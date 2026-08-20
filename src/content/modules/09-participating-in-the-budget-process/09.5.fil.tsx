import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const COALITION_PARTS = [
  [
    "Shared purpose",
    "Ang specific na budget result na pinagkasunduan ng mga miyembro na habulin nang magkasama.",
  ],
  [
    "Core group",
    "Mga pinagkakatiwalaang kinatawan na nagbibigay ng direksyon at nagpapanatiling konektado ang mga desisyon sa apektadong sektor.",
  ],
  [
    "Secretariat",
    "Ang coordinating function na nagse-schedule ng trabaho, nagtatala ng desisyon, nagpapalaganap ng materials, at nagfo-follow up.",
  ],
  [
    "Working roles",
    "Nag-aambag ang mga miyembro ng research, community knowledge, policy analysis, communications, o engagement.",
  ],
  [
    "Shared metrics",
    "Karaniwang senyales ng progreso, mula sa decision milestones hanggang sa implementation at service results.",
  ],
  [
    "Care and accountability",
    "Pinagkasunduáng paraan ng pagbabahagi ng credit, paghawak sa disagreement, pagprotekta sa mga participant, at pag-review ng commitments.",
  ],
] as const;

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Bakit makipagtulungan sa iba?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <p className="text-lg text-muted-foreground">
          Kailangan ng budget work ang community knowledge, technical
          analysis, communication, at persistence. Paano pwedeng kumilos ang
          iba’t ibang contributor bilang isa nang hindi nawawala ang
          kanya-kanyang role?
        </p>
      ),
    },
    {
      id: "why-coalitions",
      title: "Pagsamahin ang kaalaman at reach",
      shortTitle: "Bakit pagsamahin",
      type: "concept",
      content: (
        <>
          <p>
            Sa pamamagitan ng <Term id="coalition" />, pwedeng habulin ng mga
            tao at grupo ang shared objective habang nag-aambag ng iba’t
            ibang kaalaman, ugnayan, at kakayahan. Pwedeng tukuyin ng
            apektadong komunidad ang pangangailangan; pwedeng i-test ng
            researchers ang ebidensya; pwedeng gawing madaling intindihin ng
            communicators ang findings; at pwedeng tumulong sa timing ng
            engagement ang mga miyembrong pamilyar sa mga institusyon.
          </p>
          <p>
            Hindi automatic na tama o representative ang claim dahil
            nagtutulungan kayo. Kailangan pa rin ng coalition ang transparent
            na desisyon, credible na ebidensya, malinaw na roles, at mga
            paraan para mabuo ng direktang apektado ang agenda nito.
          </p>
        </>
      ),
    },
    {
      id: "anatomy",
      title: "Anatomy ng working coalition",
      shortTitle: "Anatomy",
      type: "concept",
      content: (
        <>
          <p>
            Ipinapakita ng static diagram na ito ang anim na magkakaugnay na
            function. Pwedeng gumamit ang coalition ng ibang titles, pero
            may predictable na gap kapag walang may-ari ang isang function.
          </p>
          <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
            {COALITION_PARTS.map(([part, body], index) => (
              <section key={part} className="rounded-lg border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Part {index + 1}
                </p>
                <h3 className="mt-1 font-semibold">{part}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </section>
            ))}
          </div>
        </>
      ),
    },
    {
      id: "engage-and-message",
      title: "Makipag-engage gamit ang decision-ready na message",
      shortTitle: "Engage",
      type: "concept",
      content: (
        <>
          <p>
            Dapat lawful, transparent, at nakatuon sa institusyong may-ari ng
            desisyon ang engagement. Maghanda ng maikling message na
            nagsasaad ng problema, ebidensya, recommended action, responsable
            na institusyon, timing, at desired decision. Iangkop ang
            paliwanag sa audience nang hindi binabago ang underlying facts.
          </p>
          <p>
            Itala ang meetings at commitments. Tandaan kung anong ebidensya
            ang isinumite, sino ang pumayag gumawa ng ano, at kailan ang
            susunod na decision point. Hindi outcome ang access sa meeting;
            ang budget o implementation decision ang outcome.
          </p>
        </>
      ),
    },
    {
      id: "monitor-and-check",
      title: "Manatili hanggang sa implementation",
      shortTitle: "Monitor at check",
      type: "knowledge-check",
      content: (
        <>
          <p>
            Patuloy ang trabaho ng coalition pagkatapos ng approval. Ihambing
            ang enacted decision sa proposal, tapos sundan ang releases,
            procurement, delivery, at results gamit ang parehong shared
            metrics. Iulat ang progreso at shortfalls, ihiwalay ang
            dokumentadong facts sa interpretation, at ibalik ang aral sa
            susunod na budget cycle.
          </p>
          <KnowledgeCheck
            title="Italaga ang role sa coalition"
            moduleId="mod-09"
            lessonId="09.5"
            items={[
              {
                prompt:
                  "May pinagkasunduáng goal ang mga miyembro, pero nawawala ang meetings, nawawala ang notes, at walang nagfo-follow up sa deadlines. Aling function ang pinakamalinaw na kulang?",
                options: [
                  "Secretariat coordination",
                  "Bagong budget figure",
                  "Audit authority",
                  "Ibang campaign name",
                ],
                correct: 0,
                explanation:
                  "Pinapanatiling gumagalaw ng secretariat function ang schedules, records, materials, at follow-up. Sinusuportahan nito ang collective leadership, hindi pinapalitan.",
                wrong: {
                  1: "Coordination ang problema, hindi missing amount.",
                  2: "Hindi nakakakuha ng government audit authority ang coalition dahil lang sa pag-oorganisa.",
                  3: "Hindi naitatalaga ng pagpapalit ng pangalan ang unowned na coordination work.",
                },
              },
              {
                prompt:
                  "Naaprubahan ang budget item. Aling tugon ng coalition ang pinakamahusay na sumusuporta sa accountability?",
                options: [
                  "Ideklarang success at itigil ang pagbabantay.",
                  "Baguhin ang metrics para mukhang successful ang bawat resulta.",
                  "Sundan ang implementation at service results laban sa shared metrics ng coalition, tapos iulat ang ebidensya at gaps.",
                  "Ipagpalagay na fully delivered na ang aprubadong amount.",
                ],
                correct: 2,
                explanation:
                  "Isang milestone lang ang approval. Pinapayagan ng shared metrics ang mga miyembro na sundan ang implementation at tingnan kung nagbubunga ba ang desisyon ng intended service result.",
                wrong: {
                  0: "Hindi ginagarantiya ng approval ang release, implementation, o delivery.",
                  1: "Dapat magbigay ang metrics ng stable na basehan para matuto, hindi baguhin para iwasan ang hindi kanais-nais na findings.",
                  3: "Iba’t ibang stage ang authorization at delivery, at dapat i-check nang hiwalay.",
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
          Pinapalakas ng coalitions ang pakikilahok sa budget kapag may
          shared na specific purpose, may tunay na boses ang mga apektado, may
          nakatalagang coordination at specialist roles, gumagamit ng
          karaniwang ebidensya at metrics, naghahatid ng malinaw na desisyon,
          at nagbabantay sa nangyayari pagkatapos ng approval.
        </KeyTakeaway>
      ),
    },
  ],
});
