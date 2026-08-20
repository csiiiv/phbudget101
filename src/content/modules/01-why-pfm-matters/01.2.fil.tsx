import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const LENSES = [
  {
    lens: "Financial plan",
    question: "Kaya ba natin itong pondohan?",
    body: "Pinagtatapat sa budget ang inaasahang kikitain ng gobyerno at ang plano nitong gastusin. Sa lens na ito, tinitingnan ang revenues, obligations, at ang pagitan ng dalawa.",
    signal: "Deficit, revenue targets, at unprogrammed funds",
  },
  {
    lens: "Statement of priorities",
    question: "Ano ang pinipili nating pondohan?",
    body: "Limitado ang pera, kaya kailangang mamili kung saan ito ilalaan. Sa lens na ito, bawat budget line ay isang desisyon: kapag pinondohan ang isa, maaaring mas kaunti o walang mapunta sa iba. Para makita ang totoong priorities ng gobyerno, sundan ang pera.",
    signal:
      "Aling programs ang lumalaki, lumiliit, o hindi talaga lumalabas sa budget",
  },
  {
    lens: "Legal authorization",
    question: "Ano ang puwedeng gawin?",
    body: (
      <>
        Walang public money na puwedeng gastusin nang walang{" "}
        <Term id="appropriation" />. Sa lens na ito, batas ang budget:
        binibigyan nito ang mga ahensya ng authority, pati ang mga limitasyon,
        para <Term id="obligation">mag-obligate</Term> at{" "}
        <Term id="disbursement">mag-disburse</Term> ng pondo.
      </>
    ),
    realWorld: <Term id="gaa" expand />,
  },
  {
    lens: "Accountability mechanism",
    question: "Ano talaga ang nangyari?",
    body: "Gumagawa ang budget records ng trail na sinusundan sa audit at review. Sa lens na ito, pangakong kailangang panagutan ang budget: dapat masundan ang bawat pisong inaprubahan hanggang sa serbisyong naihatid.",
    realWorld: "Audit reports at accomplishment reports",
  },
];

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Spreadsheet lang ba ang budget?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <p className="text-lg text-muted-foreground">
          Spreadsheet lang ba ang budget? Isang document ito na puwedeng basahin
          sa apat na magkaibang paraan.
        </p>
      ),
    },
    {
      id: "four-readings",
      title: "Isang document, apat na lens",
      shortTitle: "Apat na lens",
      type: "concept",
      content: (
        <>
          <p>
            Mukhang table lang ng numbers ang budget. Pero depende sa tanong mo,
            apat na magkaibang bagay ang puwede mong makita sa parehong
            document. Paulit-ulit nating gagamitin ang apat na lens na ito sa
            buong course, kaya magandang malinaw na sila ngayon pa lang.
          </p>
          <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
            {LENSES.map((item, index) => (
              <div
                key={item.lens}
                className="space-y-2 rounded-lg border bg-card p-5"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Lens {index + 1}
                </div>
                <h3 className="font-semibold leading-snug">{item.lens}</h3>
                <p className="text-sm italic text-muted-foreground">
                  {item.question}
                </p>
                <p className="text-sm leading-relaxed">{item.body}</p>
                {(item.signal ?? item.realWorld) && (
                  <p className="pt-1 text-xs text-muted-foreground">
                    <span className="font-medium">Makikita ito sa:</span>{" "}
                    {item.signal ?? item.realWorld}
                  </p>
                )}
              </div>
            ))}
          </div>
        </>
      ),
    },
    {
      id: "follow-the-money",
      title: "Sundan ang pera",
      shortTitle: "Follow the money",
      type: "concept",
      content: (
        <>
          <p>
            Bigyan natin ng extra attention ang pangalawang lens dahil babalikan
            natin ito sa buong course. Maraming sinasabi ang gobyerno, pero sa
            budget makikita kung may aktwal na pondong nakatapat sa mga sinabi
            nito. Kapag inanunsyo ang isang program pero hindi naman pinondohan,
            announcement pa lang iyon. Kapag taon-taong may pondo, malinaw na
            priority iyon kahit ano pa ang sabihin sa speeches.
          </p>
          <p>
            <strong>Kung ano ang pinondohan, iyon ang totoong priority.</strong>{" "}
            Ang budget increase ay puwedeng magpakita ng bagong priority. Ang
            budget cut ay puwedeng magpakita na hindi na ito inuuna. Kapag may
            budget line pero hindi nagagastos ang pondo, maaaring may problema
            sa implementation. Ang pagbasa sa mga signal na ito ang isa sa
            pinakamahalagang budget-literacy skills.
          </p>
        </>
      ),
    },
    {
      id: "accountability",
      title: "Bakit mahalaga ang accountability lens",
      shortTitle: "Accountability",
      type: "concept",
      content: (
        <p>
          Madaling basahin ang budget bilang plano o listahan ng priorities. Mas
          mahirap, pero mas mahalaga, na basahin ito bilang accountability
          document. Dahil kailangang ma-authorize, ma-
          <Term id="obligation">obligate</Term>, ma-
          <Term id="disbursement">disburse</Term>, at ma-account ang bawat piso,
          nag-iiwan ng trail ang budget. Dahil sa trail na iyon, puwede nating
          balikan pagkalipas ng ilang taon kung ang classroom na nasa plano ay
          siya ring classroom na aktwal na naitayo.
        </p>
      ),
    },
    {
      id: "check",
      title: "Check kung naintindihan mo",
      shortTitle: "Self-check",
      type: "knowledge-check",
      content: (
        <KnowledgeCheck
          title="Piliin ang tamang lens para sa bawat statement"
          moduleId="mod-01"
          lessonId="01.2"
          items={[
            {
              prompt:
                '"Mas malaki ang pondong inilaan ngayong taon para sa child nutrition program kaysa noong nakaraang taon."',
              options: [
                "Financial plan",
                "Statement of priorities",
                "Legal authorization",
                "Accountability mechanism",
              ],
              correct: 1,
              explanation:
                "Tungkol sa pagpili ang comparison: ipinapakita ng budget increase na mas mataas na priority ang program kumpara sa ibang puwedeng pondohan.",
              wrong: {
                0: "Kapag financial plan ang lens, ang tanong ay kung sapat ang revenue para sa gastos. Dito, allocations sa magkaibang taon ang kinukumpara.",
                2: "Walang sinasabi ang statement tungkol sa legal authority to spend. Amounts sa magkaibang taon ang kinukumpara nito.",
                3: "Walang audit trail na sinusuri rito; future allocation ang pinag-uusapan.",
              },
            },
            {
              prompt:
                '"Hindi puwedeng pumasok ang isang ahensya sa kontrata para sa bagong feeding center hangga’t walang appropriation para rito."',
              options: [
                "Financial plan",
                "Statement of priorities",
                "Legal authorization",
                "Accountability mechanism",
              ],
              correct: 2,
              explanation:
                "Ito ang budget bilang batas: kailangan munang may appropriation bago magkaroon ng obligation. Unauthorized ang paggastos kung wala ito.",
              wrong: {
                0: "Hindi affordability ang issue. Tungkol ito sa permission to spend, hindi kung may available na pera.",
                1: "Hindi ikinukumpara ng statement ang program sa ibang priorities. Nagtatakda ito ng requirement bago gumastos.",
                3: "Walang record ng dating gastos na sinusuri. Rule ito tungkol sa authorization bago gumastos.",
              },
            },
            {
              prompt:
                '"Ayon sa audit report, 60% ng classroom construction budget noong nakaraang taon ang na-obligate, pero 20% lang ang na-disburse bago matapos ang taon."',
              options: [
                "Financial plan",
                "Statement of priorities",
                "Legal authorization",
                "Accountability mechanism",
              ],
              correct: 3,
              explanation:
                "Dahil sa audit trail, maikukumpara ang in-authorize sa pondong aktwal na gumalaw at matatanong kung bakit may malaking gap.",
              wrong: {
                0: "Walang forecast o revenue estimate dito. Ang statement ay tungkol sa nangyari sa pondong na-authorize na.",
                1: "Budget execution ang inilalarawan ng percentages, hindi pagpili sa pagitan ng programs.",
                2: "May appropriation na ang pondo. Ang tanong ay kung ano ang nangyari pagkatapos ng authorization.",
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
          Ang budget ay financial plan, statement of priorities, legal
          authorization, at accountability mechanism nang sabay-sabay. Ang
          tanong mo ang magdidikta kung aling lens ang gagamitin — at{" "}
          <strong>kung ano ang pinondohan, iyon ang totoong priority</strong>.
        </KeyTakeaway>
      ),
    },
  ],
});
