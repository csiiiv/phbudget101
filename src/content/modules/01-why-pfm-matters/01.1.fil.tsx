import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Kapag may itinayong classroom",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <p className="text-lg text-muted-foreground">
          Kapag may itinayong classroom, sino ang nagdesisyon na itayo iyon — at
          saan galing ang pera?
        </p>
      ),
    },
    {
      id: "pfm-definition",
      title: "Public Financial Management sa isang pangungusap",
      shortTitle: "Ano ang PFM?",
      type: "concept",
      content: (
        <>
          <p>
            Ang <Term id="pfm" expand /> ang sistema ng gobyerno para planuhin,
            pamahalaan, at bantayan ang pera ng publiko para makapaghatid ng mga
            serbisyo.
          </p>
          <p>
            Malawak ang sakop ng definition na ito. Kasama sa <Term id="pfm" />{" "}
            kung paano tinatantiya ng gobyerno ang kikitain nito, pinipili kung
            saan gagastusin ang pera, ginagawang batas ang mga desisyon,
            inilalabas at ginagamit ang pondo, at chine-check ang mga resulta.
            Nasa sentro ng sistemang ito ang budget, pero mas malawak ang PFM
            kaysa sa kahit isang budget document.
          </p>
        </>
      ),
    },
    {
      id: "services",
      title: "May budget sa likod ng bawat serbisyo",
      shortTitle: "Mga serbisyo",
      type: "concept",
      content: (
        <>
          <p>
            Bawat serbisyong pampubliko — classroom, bakuna, kalsada, o sweldo
            ng social worker — ay may budget sa likod nito. May nag-estimate ng
            gastos. May nagdesisyong pondohan ito. May naglagay nito sa plano,
            batas, kontrata, o payroll. Kapag maayos na naihatid ang serbisyo,
            ibig sabihin gumana ang buong chain. Kapag hindi, may pumalya sa isa
            sa mga hakbang na iyon.
          </p>
          <p>
            Kaya inilalarawan minsan ang budget bilang{" "}
            <em>operationalization of collective priorities</em>: dito
            nagtutugma ang gustong gawin ng lipunan at ang perang talagang
            available. Sa lahat ng ginagawa ng gobyerno, budget ang
            pinakakumpletong listahan ng mga plano nitong isagawa dahil may
            katapat na gastos ang bawat planong nakalista rito.
          </p>
        </>
      ),
    },
    {
      id: "cast",
      title: "Sino-sino ang kasali sa budget process?",
      shortTitle: "Mga kasali",
      type: "concept",
      content: (
        <>
          <p>
            Apat na grupo ang paulit-ulit mong makikita sa course, at may
            kanya-kanya silang role:
          </p>
          <ul>
            <li>
              <strong>Mga mamamayan</strong> ang nagpopondo sa budget sa
              pamamagitan ng taxes at fees, gumagamit ng mga serbisyo, at may
              karapatang makilahok at mag-check kung paano ginagamit ang pera.
            </li>
            <li>
              <strong>Mga opisyal at ahensya</strong> ang nagpo-propose,
              naghahati, at gumagastos ng pondo.
            </li>
            <li>
              <strong>Oversight institutions</strong> ang nag-a-audit,
              nagre-review, at nagpapatupad ng mga patakaran.
            </li>
            <li>
              <strong>Civil society</strong> ang nagbabantay, nag-aanalyze, at
              nagsusulong ng mga panukala sa pagitan ng elections.
            </li>
          </ul>
          <p>
            Sa mga susunod na module, makikita mo kung saan sila pumapasok sa
            budget cycle. Sa ngayon, tandaan lang na walang iisang bida sa
            budget process.
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
          title="Itugma ang serbisyo sa budget decision sa likod nito"
          moduleId="mod-01"
          lessonId="01.1"
          items={[
            {
              prompt:
                "Dumating ang mga bakuna sa barangay health station para sa scheduled immunization. Aling budget decision ang direktang kailangan para mangyari ito?",
              options: [
                "Pondong nakalaan sa pagbili ng bakuna sa budget ng health department.",
                "Press release na nag-aanunsyo ng immunization program.",
                "Audit observation tungkol sa mga gamot noong nakaraang taon.",
              ],
              correct: 0,
              explanation:
                "Kailangang may approved na pondong nakalaan para mabili ang mga bakuna. Walang nabibiling o nade-deliver na bakuna sa announcement o audit report lang.",
              wrong: {
                1: "Hindi nagbibigay ng authority to spend ang announcement. Kailangang pondohan muna ang program bago makabili ng bakuna.",
                2: "Tinitingnan ng audit observation ang nakaraang paggastos; hindi nito inaaprubahan o binabayaran ang bakuna para sa taong ito.",
              },
            },
            {
              prompt:
                "Natatanggap ng mga public school teacher ang sweldo nila sa oras bawat buwan. Aling budget decision ang direktang kailangan para rito?",
              options: [
                "Tax collection target para sa revenue agencies.",
                "Personnel services allocation sa annual appropriations law.",
                "Congressional hearing tungkol sa education.",
              ],
              correct: 1,
              explanation:
                "Sa personnel services allocation kinukuha ang sweldo. May kinalaman sa budget ang ibang choices, pero wala sa mga iyon ang direktang nagbabayad sa teacher.",
              wrong: {
                0: "Ang collection target ay tungkol sa perang papasok. Nakakatulong itong pondohan ang budget, pero hindi ito direktang pambayad ng sweldo.",
                2: "Napag-uusapan sa hearing ang education policy, pero hindi iyon mismo ang naglalaan o nagbabayad ng pondo para sa sweldo.",
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
          Ang <Term id="pfm" /> ang buong sistemang nag-uugnay sa pera ng
          publiko at sa mga serbisyong natatanggap ng mga tao. May chain ng
          budget decisions sa likod ng bawat serbisyo, at budget ang
          pinakakumpletong listahan ng mga planong gustong isagawa ng gobyerno.
        </KeyTakeaway>
      ),
    },
  ],
});
