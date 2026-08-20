import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const SORTING_CARDS = [
  {
    tag: "Evidence",
    statement:
      "Nagtatala ang monitoring report ng 72 natapos na site laban sa target na 90, na may nakasaad na cutoff date.",
    reason:
      "Nakasaad sa claim ang source, observed value, target, unit, at time boundary.",
  },
  {
    tag: "Assumption",
    statement:
      "Ang pagdaragdag ng mas maraming site ay awtomatikong gagawing equitable ang access.",
    reason:
      "Naghuhula ang statement ng distribusyon nang walang evidence tungkol sa lokasyon, populasyon, o mga hadlang sa access.",
  },
  {
    tag: "Evidence na may limitasyon",
    statement:
      "Tumaas ang completion rate, pero hindi pinaghihiwalay ng published na table ang mga urban at rural na site.",
    reason:
      "Suportado ang trend, pero walang sagot pa rin ang tanong tungkol sa distribusyon.",
  },
  {
    tag: "Tanong na dapat subukan",
    statement:
      "Binigyang-prioritize ba ng budget ang mga lugar na may pinakamalaking service gap?",
    reason:
      "Ito ay tanong na maaaring subukan, hindi pa evidence o konklusyon.",
  },
];

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Magkaiba ang nakapaniniwala at ang may sapat na suporta",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <p className="text-lg text-muted-foreground">
          “Lampas sa target ang program, kaya gumana ang budget.” Ano ang
          kailangan mong malaman bago tanggapin ang pangungusap na iyon?
        </p>
      ),
    },
    {
      id: "baseline-target-indicator",
      title: "I-anchor ang claim: baseline, target, indicator",
      shortTitle: "Mga anchor",
      type: "concept",
      content: (
        <>
          <p>
            Nagbibigay ang isang <Term id="baseline" /> ng panimulang
            kondisyon. Naglalahad ang isang <Term id="target" /> ng nilayong
            value at deadline. Nagtatakda ang isang{" "}
            <Term id="performance-indicator" /> ng kung ano ang isusukat. Kapag
            kulang ang kahit isa sa tatlo — at ang source — hindi mo malalaman
            kung may katuturan ang naiulat na pagbabago o kahanga-hanga lang ito
            pakinggan.
          </p>
          <p>
            Tingnan ang numerator, denominator, unit, coverage, frequency, at
            cutoff date ng indicator. Itanong kung input, output, o outcome ang
            sinusukat nito. Madaling bilangin ang “mga activity na isinagawa,”
            pero hindi nito pinapatunay na umunlad ang mga serbisyo.
          </p>
        </>
      ),
    },
    {
      id: "gaming-and-gaps",
      title: "Pwede ring baluktot ng target ang pananaw",
      shortTitle: "Gaming at mga gap",
      type: "concept",
      content: (
        <>
          <p>
            Humihubog ang mga indicator ng kung saan nakatuon ang atensyon. Kung
            bilang lang ang gantimpala ng isang target, maaaring palakihin ng
            implementer ang bilang habang mas kaunting atensyon ang natatanggap
            ng kalidad, ng mga mahihirap abutan na kaso, o ng mga grupong kulang
            sa serbisyo. Ito ang indicator gaming: umuunlad ang performance
            ayon sa metric habang maaaring hindi ang tunay na public purpose.
          </p>
          <p>
            Subukan ang isang inangking resulta gamit ang mga kasamang sukatan.
            Ipagkatimbang ang dami ng kalidad at ng pagiging napapanahon; ang
            average ng distribusyon; ang pagkakatapos ng paggamit o outcome.
            Ihambing din ang plano sa budget: ang target na walang pinondong
            activity ay maaaring unfunded na pangako, habang ang allocation na
            walang katugmang plano ay nag-iiwan ng hindi malinaw na inaasahang
            resulta.
          </p>
          <p>
            Pwede ring umunlad ang pambansang average habang may mga populasyon
            o lugar na nahuhuli. Ihiwalay ang mga benepisyaryo, allocation,
            access, at outcome kapag maaasahan ang data. Gumamit ng kaugnay
            na denominator at sabihin kung nagbabago ang heograpikal o
            populasyonal na depinisyon. Subaybayan ang ilang panahon, lagyan ng
            anotasyon ang mga break sa series, at iwasang piliin lang ang mga
            paborableng petsa.
          </p>
        </>
      ),
    },
    {
      id: "static-sort",
      title: "Static na pagsasanay: uriin ang claim bago husgahan",
      shortTitle: "Pag-uuri ng claim",
      type: "example",
      content: (
        <>
          <p>
            Para sa bawat card, tukuyin kung ano ang napansin, ano ang hinuha,
            at ano ang hindi pa alam. Ang static na pag-uri-uri na ito ang
            angkop na paraan para sa Phase 1; walang idinaragdag na
            proposal-comparison interactive o evidence dossier.
          </p>
          <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
            {SORTING_CARDS.map((card) => (
              <div key={card.statement} className="rounded-lg border bg-card p-5">
                <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {card.tag}
                </div>
                <p className="mt-2 font-medium">“{card.statement}”</p>
                <p className="mt-3 text-sm text-muted-foreground">{card.reason}</p>
              </div>
            ))}
          </div>
          <p>
            Hindi awtomatikong panalo ang evidence. Tingnan ang method, petsa,
            pagkakatulad, at mga limitasyon nito. Hindi rin awtomatikong mali
            ang assumption; lagyan ito ng label, sabihin kung ano ang
            magpapatunay dito, at iwasang ipakilala ito bilang naitalang
            obserbasyon.
          </p>
        </>
      ),
    },
    {
      id: "check",
      title: "I-label ang argumento",
      shortTitle: "Self-check",
      type: "knowledge-check",
      content: (
        <>
          <KnowledgeCheck
            title="Evidence, assumption, o hindi kumpletong claim?"
            moduleId="mod-08"
            lessonId="08.4"
            items={[
              {
                prompt:
                  "“Nagtatala ang opisyal na report ng 72 natapos na site pagsapit ng nakasaad na cutoff date.” Paano ito dapat i-label?",
                options: [
                  "Evidence para sa naiulat na output, depende pa rin sa method at saklaw ng report",
                  "Patunay na pantay ang natanggap na access ng bawat komunidad",
                  "Assumption dahil lahat ng numero ay opinion",
                  "Patunay ng pangmatagalang outcome ng program",
                ],
                correct: 0,
                explanation:
                  "Sinusuportahan ng report ang isang limitadong claim tungkol sa output. Hindi nito mag-isa na pinapatunay ang distribusyon, kalidad, paggamit, o pangmatagalang outcome.",
                wrong: {
                  1: "Ang kabuuan ay hindi nagpapakita kung nasaan ang mga site o kung sino ang pwedeng gumamit ng mga ito.",
                  2: "Ang naka-document na obserbasyon ay evidence, bagama’t kailangan pa ring suriin ang kalidad at limitasyon nito.",
                  3: "Ang pagkakatapos ay output; ang pangmatagalang outcome ay nangangailangan ng ibang evidence.",
                },
              },
              {
                prompt:
                  "Nangangako ang isang plano ng mas maikling waiting time, pero walang makilalang activity o resource sa budget na naka-link sa target na iyon. Ano ang ipinapakita nito?",
                options: [
                  "Posibleng gap sa pagitan ng plano at budget na nangangailangan ng imbestigasyon",
                  "Tiyak na patunay na umunlad ang waiting time",
                  "Kumpletong performance chain",
                  "Evidence na hindi kailanman mahalaga ang mga target",
                ],
                correct: 0,
                explanation:
                  "Kitang-kita ang inaasahang resulta, pero hindi ang support nito sa budget. Sundan ang mga classification at dokumento bago tiyakin kung unfunded ito o naitala lang sa iba.",
                wrong: {
                  1: "Ang pangako ay hindi evidence ng nakamit na resulta.",
                  2: "Wala sa nakikitang chain ang link na allocation.",
                  3: "Mahalaga ang mga target kapag malinaw ang depinisyon, may pondo, sinusukat, at binabasa nang maingat.",
                },
              },
              {
                prompt:
                  "Umunlad ang pambansang average, pero walang naiulat na resulta ayon sa rehiyon o grupo ng benepisyaryo. Aling konklusyon ang makatarungan?",
                options: [
                  "Umunlad ang average, habang hindi pa alam ang mga epekto sa distribusyon",
                  "Pantay na umunlad ang bawat rehiyon",
                  "Ang pinaka-kulang sa serbisyo na grupo ang nakinabang nang pinakamalaki",
                  "Hindi na kailangan ng heograpikal na evidence",
                ],
                correct: 0,
                explanation:
                  "Sabihin kung ano ang sinusuportahan ng aggregate at panatilihin ang bahaging hindi pa nito malulutas.",
                wrong: {
                  1: "Hindi mapapatunayan ng aggregate ang pantay na pag-unlad ng bawat rehiyon.",
                  2: "Ang claim na iyon ay nangangailangan ng hiniwalay na evidence mula sa mga benepisyaryo.",
                  3: "Kailangang-kailangan ang heograpikal na evidence kapag tungkol ang tanong sa kung saan napunta ang mga benepisyo.",
                },
              },
            ]}
          />
          <p className="mt-6 text-sm text-muted-foreground">
            Mga source: Department of Budget and Management,{" "}
            <a href="https://www.dbm.gov.ph/wp-content/uploads/2012/03/OPIF%20Reference%20Guide.pdf" target="_blank" rel="noreferrer">
              Organizational Performance Indicator Framework Reference Guide
            </a>
            ; at{" "}
            <a href="https://www.pefa.org/resources/pefa-2016-framework" target="_blank" rel="noreferrer">
              PEFA Framework for assessing public financial management
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: "takeaway",
      title: "Dapat tandaan",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Paghiwalayin ang obserbasyon mula sa interpretasyon. Ang mga malakas na
          argumento tungkol sa budget ay nagngangalang baseline, target,
          indicator, source, distribusyon, at time frame — at nilalagyan ng
          label ang bawat natitirang assumption at limitasyon.
        </KeyTakeaway>
      ),
    },
  ],
});
