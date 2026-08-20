import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const DOCUMENTS = [
  {
    name: "NEP",
    role: "Proposal",
    description:
      "Inihaharap ng executive branch ang proposed nitong spending plan sa Kongreso para pag-usapan.",
  },
  {
    name: "GAA",
    role: "Naging batas na authority",
    description:
      "Pagkatapos ng legislation at ng aksyon ng Pangulo, ang appropriations law ang nagbibigay ng authority na gumastos para sa mga nakasaad na layunin at sa loob ng mga nakasaad na limit.",
  },
  {
    name: "Mga execution report",
    role: "Ano ang nangyari pagkatapos",
    description:
      "Ipinapakita ng mga record ng release, obligasyon, disbursement, at accomplishment kung paano isinagawa ng mga ahensya ang enacted na budget.",
  },
];

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Tatlong libro, tatlong magkakaibang tanong",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Kung library ang national budget, aling libro ang bubuksan mo para
            hanapin ang proposal ng executive branch, ang amount na
            inaprubahan ng Kongreso, o ang financing plan ng buong budget?
          </p>
          <p>
            Maaaring magkamukha ang mga label at table sa iba’t ibang budget
            document, pero hindi magkakapareho ang legal status ng mga ito at
            hindi rin sila sumasagot sa parehong mga tanong. Bago ka magbasa
            ng kahit anong amount, tingnan muna ang title ng dokumento at ang
            fiscal year.
          </p>
        </>
      ),
    },
    {
      id: "three-documents",
      title: "Kilalanin ang tatlong pangunahing dokumento",
      shortTitle: "Mga dokumento",
      type: "concept",
      content: (
        <>
          <p>
            Ang <Term id="nep" expand /> ay ang proposed national budget ng
            Pangulo na isinumite sa Kongreso. Ipinapakita nito kung ano ang
            hinihiling ng executive branch na i-authorize ng legislature.
          </p>
          <p>
            Ang <Term id="gaa" expand /> ay ang appropriations law na naging
            batas. Ito ang dokumentong dapat mong tingnan kapag ang tanong mo
            ay kung anong paggastos ang in-authorize ng Kongreso pagkatapos ng
            legislative process at ng aksyon ng Pangulo.
          </p>
          <p>
            Ang <Term id="besf" expand /> ay naglalagay nang magkatabi ang
            expenditure program at ang mga pinagkunan ng financing na
            sumusuporta dito. Nagbibigay din ito ng fiscal at macroeconomic
            context ng proposed national budget.
          </p>
        </>
      ),
    },
    {
      id: "lifecycle",
      title: "Paano nagkakaugnay-ugnay ang mga dokumento",
      shortTitle: "Daloy",
      type: "example",
      content: (
        <>
          <p>
            Basahin ang NEP at GAA bilang dalawang punto sa isang sekwensya.
            Ang una ay proposal; ang pangalawa ay ang authority na naging
            batas pagkatapos pag-isipan ng Kongreso ang proposal. Dumarating
            pa ang mga execution report sa ibang pagkakataon, at ibang tanong
            ang sinasagot nito: ano ang nangyari sa authority pagkatapos
            nitong maging batas?
          </p>
          <div className="not-prose my-8 grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch" aria-label="Lifecycle ng mga national budget document">{DOCUMENTS.map((document, index) => <div key={document.name} className="contents"><div className="rounded-lg border bg-card p-5"><p className="text-xs font-semibold uppercase tracking-wide text-primary">{document.role}</p><h3 className="mt-1 font-semibold">{document.name}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{document.description}</p></div>{index < DOCUMENTS.length - 1 && <div className="flex items-center justify-center text-xl text-primary" aria-hidden="true"><span className="md:hidden">↓</span><span className="hidden md:inline">→</span></div>}</div>)}</div>
          <p>
            Ang BESF ay katabi ng proposal; hindi ito pumapalit sa anumang
            hakbang sa sekwensyang ito. Ipinapaliwanag nito ang mas malawak
            na fiscal program: mga inaasahang expenditure, revenue,
            paghahiram, at iba pang financing information na bumubuo sa
            paligid ng proposed budget.
          </p>
        </>
      ),
    },
    {
      id: "choose-the-document",
      title: "Pumili batay sa tanong, hindi sa pamilyar",
      shortTitle: "Pumili",
      type: "concept",
      content: (
        <>
          <ul>
            <li>
              <strong>Ano ang in-propose ng executive branch?</strong>{" "}
              Magsimula sa NEP.
            </li>
            <li>
              <strong>Anong paggastos ang naging batas?</strong> Magsimula sa
              GAA.
            </li>
            <li>
              <strong>
                Paano konektado ang expenditures sa revenues at financing?
              </strong>{" "}
              Magsimula sa BESF.
            </li>
            <li>
              <strong>
                Na-release, na-commit, nabayaran, o na-deliver na ba ang
                amount na naging batas?
              </strong>{" "}
              Lumampas sa tatlong dokumentong ito at tingnan ang kaugnay na
              execution o accomplishment report.
            </li>
          </ul>
          <p>
            Maaari pang magbago ang isang figure sa NEP habang isinasabatas
            ito. Ang figure sa GAA ay authorization — hindi patunay na
            natanggap, nabayaran, o na-deliver ng ahensya ang buong amount.
            Kapag malinaw ang dokumentong pinanggalingan, hindi na
            nagkahalo-halo ang mga stage na ito.
          </p>
          <p className="text-sm text-muted-foreground">
            Source note: mga paglalarawan ng Department of Budget and
            Management para sa{" "}
            <a href="https://www.dbm.gov.ph/index.php/budget-documents/2025/national-expenditure-program-fy-2025">National Expenditure Program</a>{" "}
            at{" "}
            <a href="https://www.dbm.gov.ph/index.php/test/1205-budget-of-expenditures-and-sources-of-financing">Budget of Expenditures and Sources of Financing</a>.
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
          title="Piliin ang dokumentong pinakatugma sa bawat tanong"
          moduleId="mod-03"
          lessonId="03.1"
          items={[
            {
              prompt:
                "Magkano ang in-authorize ng Kongreso para sa isang program ng national government?",
              options: [
                "National Expenditure Program",
                "General Appropriations Act",
                "Budget of Expenditures and Sources of Financing",
              ],
              correct: 1,
              explanation:
                "Ang GAA ang enacted appropriations law, kaya ito ang panimulang dokumento para sa amount na in-authorize ng Kongreso.",
              wrong: {
                0: "Ipinapakita ng NEP ang proposal ng executive branch bago tapusin ng Kongreso ang legislation; maaari pa itong magbago.",
                2: "Ipinapaliwanag ng BESF ang expenditure at financing program, pero ang GAA ang enacted authority para sa tanong na ito.",
              },
            },
            {
              prompt:
                "Magkano ang orihinal na in-propose ng executive branch para sa isang program?",
              options: [
                "National Expenditure Program",
                "General Appropriations Act",
                "Execution report",
              ],
              correct: 0,
              explanation:
                "Nakatala sa NEP ang proposal ng executive branch na isinumite sa Kongreso.",
              wrong: {
                1: "Ipinapakita ng GAA ang enacted na resulta pagkatapos ng legislation, hindi kinakailangang ang orihinal na proposal ng executive branch.",
                2: "Sinusubaybayan ng mga execution report ang mga nangyayari pagkatapos maging batas; hindi nila sinasabi ang orihinal na proposal.",
              },
            },
            {
              prompt:
                "Aling dokumento ang pinakamagandang nagpapakita ng mga estimated expenditure kasama ang mga pinagkunan ng financing nito?",
              options: [
                "General Appropriations Act",
                "Budget of Expenditures and Sources of Financing",
                "Accomplishment report ng isang ahensya",
              ],
              correct: 1,
              explanation:
                "Ipinapakita ng BESF ang expenditure program kasama ang revenue, paghahiram, at iba pang financing context na sumusuporta dito.",
              wrong: {
                0: "Nagbibigay ang GAA ng spending authority, pero ang tanong ay tungkol sa mas malawak na expenditure at financing picture.",
                2: "Nakatuon ang accomplishment report sa mga resulta ng implementation, hindi sa government-wide na financing plan.",
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
          Itugma ang dokumento sa tanong: ang <Term id="nep" /> ang proposal
          ng executive branch, ang <Term id="gaa" /> ang spending authority na
          naging batas, at ang <Term id="besf" /> ang nagpapaliwanag ng
          expenditures at financing sa mas malawak na fiscal picture. Kahit
          sa alin mang dokumento, hindi pa ito sapat mag-isa bilang patunay
          na naihatid na ang serbisyo.
        </KeyTakeaway>
      ),
    },
  ],
});
