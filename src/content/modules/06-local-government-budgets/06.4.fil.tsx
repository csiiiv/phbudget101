import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const PARTICIPATION_POINTS = [
  {
    stage: "Planning",
    route: "Local development council at mga sector committee",
    action:
      "Magdala ng ebidensya tungkol sa mga pangangailangan, ihambing ang mga prayoridad, at hilingin na makapasok ang mga proposal sa development at investment plan.",
  },
  {
    stage: "Preparation",
    route: "Mga consultation ng executive at aktibidad sa budget preparation",
    action:
      "Tingnan kung may responsable na opisina, target, iskedyul, at panukalang pondo ang bawat prayoridad na naisama sa plano.",
  },
  {
    stage: "Authorization",
    route: "Mga deliberation at hearing ng sanggunian kapag bukas ito",
    action:
      "Magsumite ng maikling posisyon, magtanong tungkol sa mga pagbabago, at subaybayan kung nananatili pa rin ang item sa appropriation ordinance.",
  },
  {
    stage: "Execution",
    route: "Mga implementing office at kaugnay na local special body",
    action:
      "Bantayan ang procurement, staffing, availability ng serbisyo, at pisikal na progreso laban sa naaprubahang plano.",
  },
  {
    stage: "Accountability",
    route: "Mga report, pampublikong miting, reklamo, at audit follow-up",
    action:
      "Ihambing ang paggastos at mga output sa mga pangako, dokumentuhin ang mga puwang, at ipasok ang mga aral sa susunod na planning round.",
  },
] as const;

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Saan ka pwedeng makilahok nang lokal?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <p className="text-lg text-muted-foreground">
          Hindi lang ang tanong kung makakalahok ba ang mga mamamayan. Tanungin
          kung aling body ang humahawak ng isyu, anong desisyon ang bukas pa
          rin, at kailan kikilos ang body na iyon.
        </p>
      ),
    },
    {
      id: "bodies",
      title: "Piliin ang body na angkop sa isyu",
      shortTitle: "Mga body",
      type: "concept",
      content: (
        <>
          <p>
            Tumutulong ang{" "}
            <Term id="local-development-council" expand /> sa pagbuo ng mga
            lokal na development plan at investment priority. Pwedeng maging
            mas nakatuon na daan ang mga sectoral committee nito para sa
            ebidensya tungkol sa health, kabuhayan, infrastructure, o iba pang
            lokal na usapin.
          </p>
          <p>
            May tinukoy na sektor o governance function ang isang{" "}
            <Term id="local-special-body" expand />. Kasama sa mga halimbawa
            ang mga local school board,{" "}
            <Term id="local-health-board" expand />, local peace and order
            council, at local development council. Magkakaiba ang membership at
            kapangyarihan ng mga ito, kaya ang isang upuan sa isang body ay
            hindi nangangahulugang may kapangyarihan ka na sa bawat lokal na
            desisyon.
          </p>
          <p>
            Ang <Term id="cso-accreditation" expand /> ang pormal na proseso
            para sa mga civil society organization na naghahanap ng eligibility
            para sa seleksyon sa mga local special body ayon sa kasalukuyang
            guidance ng DILG. Magkaibang hakbang ang accreditation at
            seleksyon. Pwede pa ring gumamit ang isang organisasyon ng public
            consultation, hearing, records request, monitoring, at written
            submission kung naaangkop; hindi lahat ng daan ng pakikilahok ay
            nangangailangan ng pormal na upuan.
          </p>
        </>
      ),
    },
    {
      id: "timing-map",
      title: "Itugma ang daan sa budget stage",
      shortTitle: "Timing",
      type: "interactive",
      content: (
        <>
          <div className="not-prose my-8 space-y-3">
            {PARTICIPATION_POINTS.map((point, index) => (
              <div
                key={point.stage}
                className="grid gap-3 rounded-lg border bg-card p-5 sm:grid-cols-[7rem_1fr]"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Stage {index + 1}
                  </p>
                  <h3 className="mt-1 font-semibold">{point.stage}</h3>
                </div>
                <div>
                  <p className="font-medium">{point.route}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {point.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p>
            Nagpapalit ng kapaki-pakinabang na hiling ang timing. Pwedeng
            hubugin ng maagang pakikilahok ang mga prayoridad. Sa
            authorization, ang tanong ay kung makakalusot ang proposal sa
            deliberation. Sa execution at accountability, lumilipat na ang
            ebidensya sa releases, kontrata, staffing, output, at karanasan sa
            serbisyo.
          </p>
          <p className="text-sm text-muted-foreground">
            Karagdagang babasahin:{" "}
            <a href="https://lawphil.net/statutes/repacts/ra1991/ra_7160_1991.html">
              Local Government Code provisions tungkol sa local development
              council, school board, at health board
            </a>
            ;{" "}
            <a href="https://www.dbm.gov.ph/index.php/dbm-issuances/local-budget-circulars">
              DBM Handbook on CSO Participation in the Local Budget Process
            </a>
            ; at ang kasalukuyang DILG Memorandum Circular No. 2025-060
            tungkol sa accreditation at seleksyon sa mga local special body.
          </p>
        </>
      ),
    },
    {
      id: "health-response",
      title: "Illustrative case: mula pakikinig hanggang pagbabantay",
      shortTitle: "Health case",
      type: "example",
      content: (
        <>
          <p>
            <strong>
              Illustrative composite. Pinagsasama ng sekwensyang ito ang mga
              karaniwang paraan ng pakikilahok para sa pagtuturo; hindi ito
              naglalarawan ng isang pinangalanang lungsod, organisasyon, o
              aktwal na resulta.
            </strong>
          </p>
          <ol>
            <li>
              <strong>Makinig.</strong> Nagdodokumento ang mga residente at
              health worker ng mga saradong klinika, kakulangan sa gamot, at
              mga hadlang sa pagpunta sa klinika sa ilang barangay.
            </li>
            <li>
              <strong>Tukuyin ang problema.</strong> Nagiging maikling
              people&apos;s agenda ang mga natuklasan, na naghihiwalay ng
              agarang operating gap sa mas pangmatagalang pangangailangan sa
              pasilidad.
            </li>
            <li>
              <strong>Piliin ang mga daan.</strong> Dinadala ng mga kinatawan
              ng komunidad ang mga prayoridad sa planning papunta sa local
              development council at ang mga teknikal na usaping pangkalusugan
              papunta sa local health board.
            </li>
            <li>
              <strong>I-package ang hiling.</strong> Binabanggit ng bawat
              proposal ang responsable na opisina, hinihiling na desisyon,
              posibleng budget source, target ng delivery, at indicator.
            </li>
            <li>
              <strong>Manatili hanggang sa execution.</strong> Sasanib ang mga
              accredited na kinatawan sa naaangkop na local task group habang
              nagbabantay ang iba pang residente sa mga pampublikong report ng
              procurement at serbisyo.
            </li>
            <li>
              <strong>Sukatin at iulat.</strong> Sinusubaybayan ng follow-up
              ang mga araw na bukas ang klinika, mga report ng kakulangan sa
              gamot, oras ng referral, at mga naabot na sambahayan, at
              ibinabalik ang ebidensya sa susunod na planning cycle.
            </li>
          </ol>
          <p>
            Ang aral ay ang chain mismo, hindi ang label ng isang grupo: ang
            pakikinig ay lumilikha ng ebidensya; ang tamang body ang
            nagbubukas ng daan para sa desisyon; ang mga partikular na
            indicator ang ginagawang posible ang accountability sa huli.
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
          title="Piliin ang daan at timing"
          moduleId="mod-06"
          lessonId="06.4"
          items={[
            {
              prompt:
                "Gusto ng mga residente na isaalang-alang ang isang pangangailangan sa health bago maipirmi ang taunang prayoridad at investment. Alin ang pinaka-direktang daan?",
              options: [
                "Magtaas ng ebidensya sa pamamagitan ng local development council o ng kaugnay nitong sector committee",
                "Maghintay hanggang matapos ang lahat ng kontrata",
                "Hilingin sa audit team na isulat ang development plan",
                "Ituring ang accreditation bilang awtomatikong pagkakatalaga sa bawat board",
              ],
              correct: 0,
              explanation:
                "Ang local development council at kaugnay na sector work ang maagang daan para sa pag-uugnay ng ebidensya sa mga plano at investment priority.",
              wrong: {
                1: "Ang paghihintay hanggang matapos ang lahat ay nag-aalis ng pagkakataong hubugin ang prayoridad bago mag-budgeting.",
                2: "Para sa accountability ang audit; hindi nito pinapalitan ang lokal na development planning.",
                3: "Nagbibigay ang accreditation ng eligibility ayon sa mga patakaran, hindi awtomatikong seleksyon o membership sa lahat ng board.",
              },
            },
            {
              prompt:
                "May pondo na ang isang clinic program at isinasagawa na. Anong ebidensya ang pinaka-kapaki-pakinabang ngayon?",
              options: [
                "Impormasyon sa procurement, staffing, availability ng serbisyo, at output",
                "Ang orihinal na campaign message lang",
                "Isang bagong national tax law",
                "Kung may pormal na board seat ang bawat kalahok",
              ],
              correct: 0,
              explanation:
                "Sa execution, dapat ipakita ng ebidensya kung gumagalaw ang mga input at dumarating ang mga serbisyo ayon sa naaprubahan.",
              wrong: {
                1: "Hindi ipinapakita ng orihinal na message kung gumagana ang implementation.",
                2: "Hindi ang pagbabago sa national tax law ang direktang ebidensyang kailangan para bantayan ang lokal na programang ito.",
                3: "Pwedeng gamitin sa monitoring ang mga pampublikong record at ebidensya ng serbisyo kahit wala sa mga kalahok ang pormal na upuan.",
              },
            },
          ]}
        />
      ),
    },
    {
      id: "takeaway",
      title: "Tandaan",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Gumagana ang lokal na pakikilahok kapag itinugma mo ang isyu sa
          tamang body, ang hiling sa tamang desisyon, at ang ebidensya sa tamang
          budget stage. Nakakatulong ang pormal na upuan, pero ang mga
          consultation, submission, record, monitoring, at follow-up ay
          mahalaga ring mga daan.
        </KeyTakeaway>
      ),
    },
  ],
});
