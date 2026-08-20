import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const CHAIN = [
  {
    name: "Appropriation",
    termId: "appropriation",
    question: "May legal authority ba?",
    controller:
      "Kongreso at ang Pangulo sa pamamagitan ng naging batas na national budget",
    record: "GAA at mga naaangkop na provision",
  },
  {
    name: "Allotment",
    termId: "allotment",
    question: "Gaano kalaking authority ang pwedeng i-obligate ng ahensya?",
    controller:
      "DBM at ang implementing agency sa loob ng naaangkop na release rules",
    record:
      "GAA as Allotment Order o hiwalay na allotment release document",
  },
  {
    name: "Obligation",
    termId: "obligation",
    question: "May valid na commitment na ba ang gobyerno?",
    controller: "Ang awtorisadong implementing agency",
    record: "Kontrata, purchase order, o ibang obligation record",
  },
  {
    name: "Disbursement",
    termId: "disbursement",
    question: "Nabayaran na ba ang obligation?",
    controller:
      "Ang finance function ng ahensya gamit ang naaangkop na disbursement authority at controls",
    record: "Disbursement at accounting records",
  },
  {
    name: "Delivery",
    termId: "delivery",
    question: "Naging usable na ba ang output?",
    controller:
      "Ang implementing at operating units, suppliers o contractors, at mga inspector",
    record: "Inspection, acceptance, completion, at service records",
  },
] as const;

const STORYBOARD = [
  {
    scene: "GAA line",
    timing: "Taunang authorization",
    actor: "Kongreso at ang Pangulo",
    trail: "GAA entry at mga provision",
    meaning:
      "May spending authority ang project para sa nakasaad na purpose; wala pang building.",
  },
  {
    scene: "Allotment",
    timing: "Pagkatapos maging batas at ng naaangkop na release requirements",
    actor: "DBM at agency budget office",
    trail: "GAAAO o allotment release record",
    meaning:
      "May available na authority ang ahensya para magkaroon ng mga obligasyon sa loob ng release.",
  },
  {
    scene: "Procurement at award",
    timing: "Pagkatapos ng planning, readiness checks, at solicitation",
    actor: "Procuring entity at ang Bids and Awards Committee nito",
    trail:
      "Procurement plan, bid records, notice of award, at kontrata",
    meaning:
      "Ang valid na kontrata ay lumilikha ng commitment at tumutukoy kung sino ang gagawa ng trabaho.",
  },
  {
    scene: "Construction",
    timing: "Habang ipinapatupad ang kontrata",
    actor: "Contractor at implementing unit",
    trail: "Program of work, progress reports, at inspection records",
    meaning:
      "Ginagawa ang physical output; kailangang i-verify ang progreso, hindi lang ipagpalagay mula sa kontrata.",
  },
  {
    scene: "Payment",
    timing: "Kapag natugunan ang mga verified na payment condition",
    actor: "Finance function ng implementing agency",
    trail:
      "Billing, inspection o acceptance support, disbursement voucher, at accounting records",
    meaning:
      "Binabayaran ng gobyerno ang lahat o bahagi ng obligation nito. Pwedeng staged ang mga payment sa infrastructure.",
  },
  {
    scene: "Ginagamit na ng mga estudyante ang building",
    timing: "Pagkatapos ng completion, acceptance, at operational readiness",
    actor: "Paaralan at mga responsible na operating unit",
    trail:
      "Completion at acceptance records, asset records, at school-use records",
    meaning:
      "Naihatid at gumagana na ang output. Kung bumuti ba ang learning ay hiwalay na tanong tungkol sa outcome.",
  },
] as const;

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Nasa GAA ang school building—mayroon na ba ito?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Ang naging batas na budget line ay ebidensya ng authority, hindi
            larawan ng tapos na classroom. Marami pang desisyon, record, at
            physical na hakbang ang nasa pagitan ng appropriation at ng
            paggamit ng mga estudyante sa building.
          </p>
          <p>
            Para matapat na mahanap ang progreso o delay, tanungin kung anong
            stage ang aktwal na narating ng project at anong ebidensya ang
            sumusuporta sa konklusyong iyon.
          </p>
        </>
      ),
    },
    {
      id: "chain",
      title: "Ang five-stage chain",
      shortTitle: "Ang chain",
      type: "concept",
      content: (
        <>
          <p>
            Ang execution chain ay mula sa permiso, patungo sa available na
            authority, pagkatapos sa commitment, payment, at usable na output:
          </p>
          <ol>
            <li>
              Ang <Term id="appropriation" expand /> ay nag-aawtorisa ng
              paggastos ayon sa batas para sa nakasaad na purpose.
            </li>
            <li>
              Ang <Term id="allotment" expand /> ay ginagawang available sa
              ahensya ang obligational authority sa loob ng isang limit.
            </li>
            <li>
              Ang <Term id="obligation" expand /> ay nagtatala ng valid na
              commitment na kailangang bayaran ng gobyerno.
            </li>
            <li>
              Ang <Term id="disbursement" expand /> ay nagbabayad ng obligation
              sa pamamagitan ng awtorisadong cash o non-cash transaction.
            </li>
            <li>
              Ang <Term id="delivery" expand /> ay nangangahulugang naisagawa,
              na-accept kung kinakailangan, at naging usable na ang required na
              good, work, o service.
            </li>
          </ol>
          <p>
            Hindi automatic na sumusunod ang bawat stage sa nauna. Pwedeng
            manatiling unreleased ang appropriation, unobligated ang allotment,
            unpaid ang obligation, at incomplete o hindi usable ang bayad na
            kontrata. Kaya dapat kasama ang delivery evidence sa tabi ng mga
            financial record.
          </p>
        </>
      ),
    },
    {
      id: "control-and-records",
      title: "Sino ang may control sa bawat transition?",
      shortTitle: "Controls",
      type: "concept",
      content: (
        <>
          <p>
            Walang iisang actor na may control sa buong chain. May iba&apos;t
            ibang decision-maker at paper trail ang bawat transition.
          </p>
          <div className="not-prose my-8 space-y-3">
            {CHAIN.map((stage, index) => (
              <div
                key={stage.name}
                className="grid gap-3 rounded-lg border bg-card p-5 md:grid-cols-[auto_1fr_1fr]"
              >
                <div className="flex items-start gap-3 md:col-span-3">
                  <span
                    className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">
                      <Term id={stage.termId}>{stage.name}</Term>
                    </h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {stage.question}
                    </p>
                  </div>
                </div>
                <div className="md:col-start-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Pangunahing control
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">
                    {stage.controller}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Ebidensya
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">{stage.record}</p>
                </div>
              </div>
            ))}
          </div>
          <p>
            Iniuulat ng mga national agency ang appropriations, allotments,
            obligations, disbursements, at balances sa Financial Accountability
            Report No. 1. Kailangan pa ng karagdagang implementation at
            accomplishment records para sa physical completion at paggamit ng
            serbisyo.
          </p>
        </>
      ),
    },
    {
      id: "school-storyboard",
      title: "Static storyboard: sundan ang isang school building",
      shortTitle: "Storyboard",
      type: "interactive",
      content: (
        <>
          <p>
            <strong>
              Illustrative na halimbawa. Pinasimple ang detalye para mas
              malinaw.
            </strong>{" "}
            Ito ang static fallback para sa school-building step-through. Walang
            project amount o inimbentong calendar; depende sa kontrata at
            naaangkop na rules ang aktwal na sequencing at payment arrangements.
          </p>
          <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
            {STORYBOARD.map((step, index) => (
              <article
                key={step.scene}
                className="rounded-lg border bg-card p-5"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <h3 className="font-semibold">{step.scene}</h3>
                </div>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-medium text-muted-foreground">
                      Relative timing
                    </dt>
                    <dd>{step.timing}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-muted-foreground">
                      Responsible actor
                    </dt>
                    <dd>{step.actor}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-muted-foreground">
                      Paper trail
                    </dt>
                    <dd>{step.trail}</dd>
                  </div>
                </dl>
                <p className="mt-4 border-t pt-4 text-sm leading-relaxed">
                  {step.meaning}
                </p>
              </article>
            ))}
          </div>
          <p>
            Lumilitaw ang <Term id="procurement" expand /> sa pagitan ng
            available authority at delivery. Ang planning at competition ang
            humahantong sa award at kontrata; ang contract implementation ang
            gumagawa ng trabaho; pagkatapos ay binabayaran ang mga verified na
            obligasyon ayon sa kontrata. Binubuksan ng Lesson 05.2 ang mahabang
            gitnang bahaging ito.
          </p>
          <p className="text-sm text-muted-foreground">
            Source note: Department of Budget and Management{" "}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/AboutDBM/Budget%20101_Reader%20View.pdf">
              Budget 101 definitions
            </a>{" "}
            at COA-DBM{" "}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/Issuances/2019/Joint-Circular/COA-DBM-JOINT-CIRCULAR-NO-2019-1-DATED-JANUARY-1-2019.pdf">
              FAR No. 1 instructions
            </a>
            .
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
          title="Tukuyin ang stage mula sa ebidensya"
          moduleId="mod-05"
          lessonId="05.1"
          items={[
            {
              prompt:
                "May pinirmahang valid na construction contract ang ahensya, pero wala pang bayad sa billing. Anong stage ang narating ng project?",
              options: [
                "Appropriation lang",
                "Allotment lang",
                "Obligation",
                "Disbursement",
              ],
              correct: 2,
              explanation:
                "Ang pinirmahang valid na kontrata ay nagbubuklod sa gobyerno sa isang commitment, kaya may obligation na kahit wala pang payment.",
              wrong: {
                0: "Mas maaga ang appropriation bilang legal authority. Mas malakas ang ebidensya sa senaryo: may kontrata nang nag-commit sa gobyerno.",
                1: "Ginawang available ng allotment ang authority, pero ipinapakita ng pinirmahang kontrata na may obligation na ang ahensya.",
                3: "Ang disbursement ay payment. Explicit na sinasabi ng senaryo na wala pang bayad sa billing.",
              },
            },
            {
              prompt:
                "May disbursement record ng progress payment sa contractor. Ano ang napatutunayan nito mag-isa?",
              options: [
                "Kumpleto at usable na ang buong building",
                "Nabayaran ang verified na obligation hanggang sa lawak na sinusuportahan ng payment",
                "May mga estudyante nang naka-enroll sa building",
                "Mas magandang learning outcomes ang nakuha ng project",
              ],
              correct: 1,
              explanation:
                "Ang progress payment ay ebidensya ng disbursement para sa sinusuportahang trabaho. Kailangan ng hiwalay na physical at service records ang completion, paggamit, at outcomes.",
              wrong: {
                0: "Pwedeng gumamit ng progress payments ang infrastructure contracts, kaya ang isang payment ay hindi automatic na patunay ng buong completion.",
                2: "Kailangan ng operational records ang enrollment o paggamit, lampas sa bayad sa contractor.",
                3: "Hindi kayang itatag ng financial transaction mag-isa ang isang education outcome.",
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
          Ang naaprubahang budget ang simula ng evidence trail, hindi ang
          naihatid na serbisyo. Sundan ang appropriation → allotment →
          obligation → disbursement → delivery, at itugma ang bawat claim sa
          actor at record na makakapatunay nito.
        </KeyTakeaway>
      ),
    },
  ],
});
