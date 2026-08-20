import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { TraceConcern } from "@/components/interactives/TraceConcern";
import { defineLesson } from "@/lib/sections";

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Mula concern hanggang paggastos",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <p className="text-lg text-muted-foreground">
          Ano ang kailangang mangyari mula sa “kailangan natin ng health center”
          hanggang sa aktwal na pagbukas at pagpapatakbo nito?
        </p>
      ),
    },
    {
      id: "chain",
      title: "Ang chain mula concern hanggang serbisyo",
      shortTitle: "Ang chain",
      type: "concept",
      content: (
        <>
          <p>
            Nagiging serbisyo lang ang isang public concern kapag nadaanan nito
            ang bawat link sa chain. Kapag may isang naputol, hindi makakarating
            ang serbisyo:
          </p>
          <ol>
            <li>
              <strong>Pangangailangan</strong> — may problemang nararanasan at
              inilalapit ang community.
            </li>
            <li>
              <strong>Policy response</strong> — gumagawa o pumipili ang
              gobyerno ng program na tutugon sa pangangailangan.
            </li>
            <li>
              <strong>Budget line</strong> — nagkakaroon ng allocation ang
              program sa budget document na inaaprubahan ng legislature.
            </li>
            <li>
              <strong>Implementation</strong> — nire-release ang pondo, dumadaan
              sa <Term id="procurement">procurement</Term> ang goods at works,
              at kumukuha ng staff.
            </li>
            <li>
              <strong>Serbisyo</strong> — gumagana na ang output at may mga
              taong aktwal na napagsisilbihan.
            </li>
          </ol>
          <p>
            Iba-iba ang taong responsable, documents, at timeline sa bawat link.
            Kaya puwedeng umabot ng ilang taon ang buong chain, at kapag
            na-delay ang isang link, maaantala rin ang lahat ng kasunod nito.
          </p>
        </>
      ),
    },
    {
      id: "gaps",
      title: "Announced ≠ funded ≠ implemented",
      shortTitle: "Mga gap",
      type: "concept",
      content: (
        <>
          <p>
            Puwedeng i-announce ang isang program pero hindi ito mapondohan.
            Puwede itong mapondohan pero hindi ma-implement. Puwede rin itong
            ma-implement pero hindi maihatid nang maayos ang ipinangakong
            serbisyo. Magkakaibang accountability question ang bawat gap, at
            magkakaibang institution ang dapat tanungin:
          </p>
          <ul>
            <li>
              <strong>Announced pero walang pondo</strong> → tanungin ang budget
              office at legislature kung bakit walang naaprubahang allocation.
            </li>
            <li>
              <strong>May pondo pero hindi na-implement</strong> → tanungin ang
              implementing agency kung ano ang humarang sa procurement o hiring.
            </li>
            <li>
              <strong>Na-implement pero walang maayos na serbisyo</strong> →
              tanungin ang operators at auditors kung gumagana ang output at
              nakakarating ito sa mga tao.
            </li>
          </ul>
          <p>
            Bago manisi, ugaliing itanong, <em>“Aling link ang naputol?”</em>{" "}
            Isa ito sa pinakamahalagang habit na itinuturo ng course.
          </p>
        </>
      ),
    },
    {
      id: "citizens",
      title: "Saan puwedeng makilahok ang mga mamamayan?",
      shortTitle: "Pakikilahok",
      type: "concept",
      content: (
        <p>
          Hindi spectator ang mga mamamayan sa chain na ito. Sa unang stage,
          puwedeng tukuyin at i-document ng citizens at community organizations
          ang problema. Sa planning at budget preparation, puwede silang
          mag-propose ng programs at budget items. Sa legislation, may hearings
          ang Congress kung saan puwedeng magsumite ng position ang publiko. Sa
          implementation, puwedeng bantayan ng citizens’ groups ang procurement
          at delivery. Sa accountability stage, puwede silang humingi ng
          records, sumali sa audits, at gamitin ang documents na naiwan sa
          trail. Mas detalyado itong tatalakayin sa Module 9. Sa ngayon, tandaan
          na <strong>may paraan para makilahok sa bawat link</strong>.
        </p>
      ),
    },
    {
      id: "trace",
      title: "Subukan: sundan ang isang concern",
      shortTitle: "Sundan",
      type: "interactive",
      content: (
        <>
          <p>
            Sundan ang isang concern mula umpisa hanggang dulo. Tingnan kung ano
            ang nagbabago sa bawat step, at pansinin na sa ikatlong link pa lang
            pumapasok ang budget allocation:
          </p>
          <TraceConcern />
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
          title="Hanapin ang naputol na link"
          moduleId="mod-01"
          lessonId="01.3"
          items={[
            {
              prompt:
                "Buong napondohan ang isang farm-to-market road sa appropriations ngayong taon. Pagkalipas ng siyam na buwan, wala pang contractor at wala pang bidding. Hindi pa rin nagagawa ang kalsada. Aling link ang naputol?",
              options: [
                "Pangangailangan — hindi naman hiningi ng community ang kalsada.",
                "Policy response — walang program na ginawa.",
                "Budget line — hindi napondohan ang project.",
                "Implementation — may pondo pero hindi nagsimula ang procurement.",
              ],
              correct: 3,
              explanation:
                "Nalagpasan na ng project ang need, policy, at appropriation. Sa implementation ito natigil: procurement failure ng agency, hindi funding decision.",
              wrong: {
                0: "Hiningi at kailangan ang kalsada. Sinasabi ng scenario na fully funded ito, kaya naipahayag at nasagot na ang need.",
                1: "May program na dahil nagkaroon ng allocation ang project. May policy vehicle sa likod ng pondong iyon.",
                2: "Hindi funding ang pumalya dahil may appropriation na. Procurement ang hindi umusad.",
              },
            },
            {
              prompt:
                "Nag-announce ang isang city ng scholarship program. Makalipas ang ilang buwan, walang scholarship line sa enacted city budget at wala ring implementing guidelines. Aling link ang naputol?",
              options: [
                "Budget line — inanunsyo ang program pero hindi pinondohan o isinabatas.",
                "Serbisyo — na-deliver ang scholarships pero late.",
                "Implementation — na-delay ang bidding.",
                "Wala — pareho lang ang announcement at funding.",
              ],
              correct: 0,
              explanation:
                "Hindi appropriation ang announcement. Kung walang budget line at guidelines, plano pa lang ito at hindi pa operating program.",
              wrong: {
                1: "Wala pang guidelines, kaya hindi late ang scholarships; hindi talaga nagsimula ang program.",
                2: "Walang construction o contractor na kailangang i-bid. Benefits ang binabayaran ng scholarship program.",
                3: "Magkaibang link ang announcement at funding. Funding lang ang nagbibigay ng authority to spend.",
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
          Nagiging serbisyo ang concern sa limang-link na chain: pangangailangan
          → policy response → budget line → implementation → serbisyo.{" "}
          <strong>Announced ≠ funded ≠ implemented</strong>, at may paraan para
          makilahok ang mga mamamayan sa bawat link.
        </KeyTakeaway>
      ),
    },
  ],
});
