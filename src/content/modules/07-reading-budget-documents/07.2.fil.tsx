import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const TABLE_NOTES = [
  {
    label: "1 · Heading at scope",
    text: "I-confirm ang office, fiscal year, dokumento, at unit bago basahin ang kahit na anong row.",
  },
  {
    label: "2 · Grouping",
    text: "Kabilang sa isang program group ang mga naka-indent na row. Ang subtotal ay hindi hiwalay na project na dapat idagdag muli.",
  },
  {
    label: "3 · Classification",
    text: "Ipinapahayag ng column ang lens na ginamit dito: program at expense class. Pwede namang iba ang pagpapangkat ng ibang table sa parehong authority.",
  },
  {
    label: "4 · Footnote at cross-reference",
    text: "Itinuturo ng asterisk ang reader sa Special Provision 3. Hindi sinasabi ng table mag-isa ang buong kondisyon.",
  },
];

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Ang pinakamaliit na marka sa pahina",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <p className="text-lg text-muted-foreground">
          Mukhang nagbibigay ang isang row ng authority para sa isang project,
          pero may asterisk ang amount nito. Buong instruction na ba ang numero
          — o simula pa lang ito?
        </p>
      ),
    },
    {
      id: "table-anatomy",
      title: "Basahin ang frame bago ang numero",
      shortTitle: "Anatomiya ng table",
      type: "concept",
      content: (
        <>
          <p>
            Ang budget table ay compact na set ng mga instruction. Bago mo
            interprestahan ang isang value, tukuyin muna ang table title at
            fiscal year, ang unit of measurement, ang row label, ang column
            heading, at ang grouping o subtotal kung saan ito nabibilang. Ang
            value na wala ang frame na ito ay maaaring sumagot sa maling
            tanong.
          </p>
          <p>
            Pansinin ang indentation at mga label gaya ng <em>Total</em> o{" "}
            <em>of which</em>. Maaaring kasama na sa subtotal ang mga row sa
            ilalim nito; kapag dinagdag mo pa ang dalawa, maaari mong
            ma-double-count ang parehong authority. Tingnan din kung may
            definition ang blank, dash, o zero sa table notes — hindi pwedeng
            basta pagpalit-palitin ang mga markang ito.
          </p>
        </>
      ),
    },
    {
      id: "classification-lenses",
      title: "Magkakaibang lens ang bawat classification",
      shortTitle: "Mga classification",
      type: "concept",
      content: (
        <>
          <p>
            Ang parehong budget authority ay pwedeng ayusin ayon sa
            organization, program, expense class, funding source, o location.
            Iba-ibang tanong ang sinasagot ng bawat classification:{" "}
            <em>Sino ang nag-a-administer nito? Anong activity ang
            sinusuportahan nito? Anong klase ng resource ang bibilhin nito?
            Saan galing ang authority? Saan ito gagamitin?</em>
          </p>
          <p>
            Hindi dagdag na pond-pondo ng pera ang mga view na ito. Paraan lang
            sila ng paglalarawan sa parehong mga record. Gumagamit ang mga
            report ng gobyernong Pilipino ng common coding framework, ang{" "}
            <Term id="uacs" expand />, para makakonekta ng mga classification
            ang readers sa planning, budgeting, accounting, at reporting.
            Ikumpara lang ang pareho sa pareho, at hanapin ang definition ng
            bawat column bago pagsamahin ang mga total.
          </p>
        </>
      ),
    },
    {
      id: "annotated-excerpt",
      title: "Static na practice: sundan ang bawat marka",
      shortTitle: "Annotated excerpt",
      type: "example",
      content: (
        <>
          <p>
            Itinuturo ng simpleng illustrative replica na ito ang daan ng
            pagbasa. Hindi ito excerpt mula sa isang enacted budget, at sadyang
            inalis ang mga amount.
          </p>
          <div className="not-prose my-8 space-y-5">
            <div className="overflow-x-auto rounded-lg border bg-card">
              <div className="border-b bg-muted/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  1 · Illustrative agency schedule · halimbawa ng fiscal year
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Authorized amounts: inalis sa teaching replica na ito
                </p>
              </div>
              <table className="w-full min-w-[36rem] text-left text-sm">
                <thead className="border-b bg-muted/20">
                  <tr>
                    <th className="p-3 font-semibold">Program / activity</th>
                    <th className="p-3 font-semibold">3 · Expense class</th>
                    <th className="p-3 font-semibold">Authorized amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-3 font-medium">2 · Mga serbisyong pangkomunidad</td>
                    <td className="p-3">—</td>
                    <td className="p-3">Inalis ang subtotal</td>
                  </tr>
                  <tr>
                    <td className="p-3 pl-8">Activity para sa service delivery</td>
                    <td className="p-3">Operating expenses</td>
                    <td className="p-3">Inalis ang amount*</td>
                  </tr>
                  <tr>
                    <td className="p-3 pl-8">Project para sa pagpapabuti ng pasilidad</td>
                    <td className="p-3">Capital outlays</td>
                    <td className="p-3">Inalis ang amount</td>
                  </tr>
                </tbody>
              </table>
              <div className="border-t p-4 text-sm">
                <strong>4 · Note:</strong> *Sakop ng Special Provision 3 ang
                paggamit. Basahin ang provision na iyon para sa kumpletong
                purpose, kondisyon, at reporting requirement.
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {TABLE_NOTES.map((note) => (
                <div key={note.label} className="rounded-lg border bg-card p-4">
                  <h3 className="font-semibold">{note.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{note.text}</p>
                </div>
              ))}
            </div>
          </div>
          <p>
            Sa aktwal na <Term id="gaa" />, pwedeng saklawan ng isang{" "}
            <Term id="general-provision" /> ang malalaking bahagi ng batas,
            habang pwedeng magtakda ng kondisyon ang isang{" "}
            <Term id="special-provision" /> para sa isang partikular na
            ahensya, fund, program, o item. Basahin ang mismong provision at
            ang scope nito; hindi ipinapaliwanag ng amount sa table mag-isa ang
            bawat rule sa release, paggamit, o reporting.
          </p>
          <p className="text-sm text-muted-foreground">
            Source note: nakabase ang structure at terminology sa mga
            published na{" "}
            <a
              href="https://www.dbm.gov.ph/index.php/2026/general-appropriations-act-gaa-fy-2026"
              target="_blank"
              rel="noreferrer"
            >
              General Appropriations Act materials
            </a>{" "}
            ng Department of Budget and Management at sa{" "}
            <a
              href="https://www.dbm.gov.ph/wp-content/uploads/Issuances/Issuances/2013/Joint%20Circular%202013/DBM-COA-DOF/UACS%20Manual.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Unified Accounts Code Structure Manual
            </a>
            . Walang opisyal na amount o agency entry ang replica.
          </p>
        </>
      ),
    },
    {
      id: "check",
      title: "Hanapin ang controlling text",
      shortTitle: "Self-check",
      type: "knowledge-check",
      content: (
        <KnowledgeCheck
          title="Sundan ang mga clue ng table"
          moduleId="mod-07"
          lessonId="07.2"
          items={[
            {
              prompt:
                "May asterisk ang isang row na nagsasabing “sakop ng Special Provision 3” ang paggamit nito. Saan ka hahanap ng kumpletong kondisyon?",
              options: [
                "Sa numero lamang sa row",
                "Sa Special Provision 3 at sa eksaktong scope na binabanggit nito",
                "Sa pinakamalaking subtotal sa pahina",
                "Sa kahit anong general news summary ng budget",
              ],
              correct: 1,
              explanation:
                "Cross-reference ang footnote. Basahin ang binanggit na special provision at i-confirm kung aling ahensya, fund, program, o item ang sakop nito.",
              wrong: {
                0: "Nagsasaad ang amount ng authority, pero senyales ang asterisk na may ibang text na nagbibigay ng mahahalagang kondisyon.",
                2: "Inilalarawan ng subtotal ang grouping; hindi ito pamalit sa provision na binanggit.",
                3: "Maaaring bigyan ka ng context ang isang summary, pero nasa binanggit na budget text ang controlling na kondisyon.",
              },
            },
            {
              prompt:
                "May program subtotal sa itaas ng dalawang naka-indent na activity. Ano ang dapat mong i-verify bago idagdag ang tatlong value?",
              options: [
                "Kung kasama na ba sa subtotal ang mga naka-indent na activity",
                "Kung pareho ba ang font size ng lahat ng label",
                "Kung mas malaki ba ang total ng ibang ahensya",
                "Kung makulay ba ang heading ng table",
              ],
              correct: 0,
              explanation:
                "Pinapakita ng indentation at mga subtotal label ang hierarchy. Kung kasama na sa subtotal ang mga row sa ilalim nito, magdo-double-count ka kapag dinagdag mo pa ang mga ito.",
              wrong: {
                1: "Makakatulong ang typography para ipakita ang hierarchy, pero ang tanong ay kung ano ang kasama sa subtotal.",
                2: "Hindi nalulutas ng pagkumpara sa ibang ahensya ang grouping sa loob ng table na ito.",
                3: "Hindi ebidensya ang kulay kung paano kinakalkula ang mga total.",
              },
            },
          ]}
        />
      ),
    },
    {
      id: "takeaway",
      title: "Dapat tandaan",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Basahin ang budget table bilang magkakaugnay na dokumento: tukuyin
          ang scope at units, sundan ang hierarchy at classifications, tapos
          hanapin ang bawat footnote sa provision na tinutukoy nito. Bahagi lang
          ng kahulugan ang pera.
        </KeyTakeaway>
      ),
    },
  ],
});
