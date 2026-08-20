import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const CLASSES = [
  { name: "Personnel Services", acronym: "PS", termId: "personnel-services", buys: "Kabayaran at iba pang authorized na benepisyo ng personnel", examples: "Mga sahod, wages, at benepisyo ng mga kawani ng gobyerno" },
  { name: "Maintenance and Other Operating Expenses", acronym: "MOOE", termId: "mooe", buys: "Mga goods at serbisyong ginagamit sa regular na operations", examples: "Utilities, supplies, travel, training, at mga kontratadong serbisyo" },
  { name: "Financial Expenses", acronym: "FinEx", termId: "financial-expenses", buys: "Mga gastos mula sa mga financial transaction", examples: "Interest expense, bank charges, at iba pang authorized na financial charges" },
  { name: "Capital Outlays", acronym: "CO", termId: "capital-outlays", buys: "Mga asset o pagpapabuti na ang benepisyo ay aabot pa sa susunod na fiscal year", examples: "Mga gusali, kagamitan, imprastruktura, at iba pang capital asset" },
] as const;

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Bakit pinaghihiwalay ang sahod sa gusali?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Magkapareho ang authorized na total ng dalawang program pero
            magkaiba nang husto ang mga pangangailangan nito sa pagpapatakbo.
            Maaaring halos lahat ng gastos ng isa ay sahod ng staff; ang isa
            naman ay para sa pagtatayo ng facility o pagbili ng kagamitan.
          </p>
          <p>
            Ipinapakita ng mga expense class kung anong klase ng input ang
            plano ng gobyernong bilhin. Nakakatulong ang pagkakaibang ito
            para matanong mo kung kayang gawin ng isang budget ang dalawa:
            bumuo ng asset at patakbuhin ang serbisyong umaasa rito.
          </p>
        </>
      ),
    },
    {
      id: "four-classes",
      title: "Apat na pangkalahatang expense class",
      shortTitle: "Apat na class",
      type: "concept",
      content: (
        <>
          <p>
            Karaniwang pinapangkat ng mga national budget document ang isang
            appropriation sa apat na pangkalahatang expense o allotment
            class. Inilalarawan ng class ang klase ng input ayon sa ekonomiya
            nito — hindi ang policy sector o ang ahensyang responsable.
          </p>
          <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
            {CLASSES.map((expenseClass) => (
              <div key={expenseClass.acronym} className="rounded-lg border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {expenseClass.acronym}
                </p>
                <h3 className="mt-1 font-semibold">
                  <Term id={expenseClass.termId}>{expenseClass.name}</Term>
                </h3>
                <p className="mt-2 text-sm leading-relaxed">{expenseClass.buys}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Halimbawa: {expenseClass.examples}
                </p>
              </div>
            ))}
          </div>
          <p>
            Sa unang pagkakataon mong makakita ng isang expense class sa isang
            budget document, tingnan palagi ang mga definition at notes nito.
            Ang mga detalyadong object code ang nagpapasya kung saan nabibilang
            ang isang partikular na gastos; ang mga halimbawa rito ay gabay
            lang sa pagbasa, hindi pamalit sa mga patakaran na iyon.
          </p>
        </>
      ),
    },
    {
      id: "why-it-matters",
      title: "Sabay na gumagalaw ang capital at operating na pangangailangan",
      shortTitle: "Bakit mahalaga",
      type: "concept",
      content: (
        <>
          <p>
            Kayang lumikha o pagbutihin ng <Term id="capital-outlays" /> ang
            isang matagal-magalang na asset, gaya ng gusali o malaking
            kagamitan. Pero sa pagbubukas ng asset, maaaring kailanganin din
            ng <Term id="personnel-services" /> para sa staff at{" "}
            <Term id="mooe" /> para sa supplies, utilities, maintenance, at
            serbisyo. Ang capital allocation lang ay hindi pa patunay na
            kayang umandar ang natapos na facility.
          </p>
          <p>
            Mahalaga rin ang mga class dahil ang mga pondo ay
            ina-authorize at pinamamahalaan para sa mga nakasaad na layunin.
            Ang paglipat ng mga requirement sa pagitan ng sweldo,
            operations, financial cost, at capital ay hindi lang pagpapalit ng
            label sa isang spreadsheet; may mga naaangkop na budget rule at
            authority pa ring namamahala sa pagbabagong ito.
          </p>
        </>
      ),
    },
    {
      id: "annotated-entry",
      title: "Basahin ang isang budget entry na may label",
      shortTitle: "Budget entry",
      type: "example",
      content: (
        <>
          <p>
            <strong>
              Illustrative na halimbawa. Pinapasimple ang mga detalye para
              mas malinaw ito.
            </strong>{" "}
            Hindi kopya ng opisyal na dokumento ang static na diagram na ito
            at walang teaching amount na kasama.
          </p>
          <div className="not-prose my-8 overflow-hidden rounded-lg border bg-card" aria-label="Buong naka-label na illustrative budget entry">
            <div className="border-b bg-secondary/50 px-5 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Ahensya</p>
              <p className="font-semibold">Illustrative Public Health Office</p>
            </div>
            <dl className="grid sm:grid-cols-2">
              <div className="border-b p-5 sm:border-r"><dt className="text-xs font-semibold uppercase tracking-wide text-primary">Program</dt><dd className="mt-1 text-sm">Preventive Health Services</dd></div>
              <div className="border-b p-5"><dt className="text-xs font-semibold uppercase tracking-wide text-primary">Activity</dt><dd className="mt-1 text-sm">Magpatakbo ng mga community health session</dd></div>
              <div className="border-b p-5 sm:border-b-0 sm:border-r"><dt className="text-xs font-semibold uppercase tracking-wide text-primary">Expense class</dt><dd className="mt-1 text-sm">MOOE — mga operating supply at serbisyo</dd></div>
              <div className="p-5"><dt className="text-xs font-semibold uppercase tracking-wide text-primary">Amount at kondisyon</dt><dd className="mt-1 text-sm">Basahin mula sa naaangkop na opisyal na budget entry at special provisions; hindi kasama dito</dd></div>
            </dl>
          </div>
          <p>
            Ang label ng expense class ay sumasagot sa{" "}
            <em>anong klase ng input?</em> Ang ahensya, program, at activity
            naman ay sumasagot sa{" "}
            <em>sino ang responsable at para sa anong trabaho?</em> Ang amount
            at special provisions ay sumasagot sa{" "}
            <em>magkano ang authority at sa anong mga kondisyon?</em>
          </p>
          <p className="text-sm text-muted-foreground">
            Source note: gabay ng Department of Budget and Management sa{" "}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/BESF/BESF2025/GLOSSARY.pdf">
              BESF Glossary of Terms
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
          title="Tukuyin ang field at i-classify ang gastos"
          moduleId="mod-03"
          lessonId="03.3"
          items={[
            {
              prompt:
                "Sa naka-label na entry, aling field ang nagsasabi kung ang item ay pambayad sa kabayaran, operations, financial cost, o capital asset?",
              options: ["Ahensya", "Program", "Expense class", "Special provision"],
              correct: 2,
              explanation:
                "Ang expense class ang tumutukoy sa klase ng input ayon sa ekonomiya nito: PS, MOOE, FinEx, o CO.",
              wrong: {
                0: "Ang ahensya ang tumutukoy kung sino ang responsable, hindi kung anong klase ng input ang binibili.",
                1: "Pinapangkat ng program ang trabaho tungo sa isang objective; maaari itong maglaman ng ilang expense class.",
                3: "Nagsasaad ang special provision ng mga kondisyon o patakaran. Hindi ito pamalit sa field ng expense class.",
              },
            },
            {
              prompt:
                "Anong expense class ang karaniwang sumasaklaw sa mga sahod at authorized na benepisyo ng personnel?",
              options: ["Personnel Services", "MOOE", "Financial Expenses", "Capital Outlays"],
              correct: 0,
              explanation:
                "Sakop ng Personnel Services ang kabayaran at iba pang authorized na benepisyo ng mga kawani ng gobyerno.",
              wrong: {
                1: "Sakop ng MOOE ang mga goods at serbisyong ginagamit sa operations, hindi ang kabayaran ng mga empleyado.",
                2: "Sakop ng Financial Expenses ang mga gastos mula sa financial transaction, gaya ng interest o bank charges.",
                3: "Sakop ng Capital Outlays ang mga asset at pagpapabuti na ang benepisyo ay aabot pa sa susunod na fiscal year.",
              },
            },
            {
              prompt:
                "Bibili ng malaking diagnostic equipment ang isang project, at inaasahang gagamitin ito sa loob ng maraming taon. Anong class ang pinakamainam na panimula?",
              options: ["Personnel Services", "MOOE", "Financial Expenses", "Capital Outlays"],
              correct: 3,
              explanation:
                "Ang matagal-magalang na kagamitan ay karaniwang itinuturing na capital asset, kaya ang Capital Outlays ang pinakamainam na panimulang classification. Ang detalyadong object code pa rin ang may huling salita.",
              wrong: {
                0: "Para sa sweldo at benepisyo ng tauhan ang Personnel Services, hindi para sa pagbili ng kagamitan.",
                1: "Sumusuporta ang MOOE sa regular na operations, pero ang matagal-magalang na malaking kagamitan ay karaniwang itinuturing na capital.",
                2: "Tungkol ang Financial Expenses sa mga gastos sa financial transaction, hindi sa diagnostic equipment.",
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
          Sumasagot ang apat na expense class kung anong klase ng input ang
          planong bilhin ng gobyerno: mga tao sa PS, operations sa MOOE,
          financial cost sa FinEx, at matagal-magalang na asset sa CO. Basahin
          sabay-sabay ang mga class — maaaring kailanganin ng isang serbisyo
          ang asset at pati na ang paulit-ulit na resources para
          mapatakbo ito.
        </KeyTakeaway>
      ),
    },
  ],
});
