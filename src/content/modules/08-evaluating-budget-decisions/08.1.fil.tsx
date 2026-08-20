import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Parehong rate, magkaibang resulta",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Parehong ahensya ang nakagamit ng 90% ng kanilang budget. Alin sa
            dalawa ang mas nakapaglingkod sa publiko?
          </p>
          <p>
            <strong>Illustrative na paghahambing.</strong> Hindi sapat ang
            percentage mag-isa para masagot ang tanong. Kailangan mong malaman
            kung anong need ang sinagot ng bawat ahensya, ano ang plano nito, ano
            ang naihatid, at ano ang nagbago sa buhay ng mga tao.
          </p>
        </>
      ),
    },
    {
      id: "utilization-clue",
      title: "Ang utilization ay clue, hindi verdict",
      shortTitle: "Hindi verdict",
      type: "concept",
      content: (
        <>
          <p>
            Naghahambing ang{" "}
            <Term id="budget-utilization-rate" expand /> ng mga napiling
            execution amount. Bago mo interprestahan ang isang rate, tingnan muna
            ang numerator, denominator, at cutoff date nito. Magkaibang tanong
            ang sinasagot ng mga obligasyon laban sa mga allotment at ng mga
            disbursement laban sa mga obligasyon.
          </p>
          <p>
            Kahit malinaw ang definition ng rate, sinasabi lang nito kung paano
            gumalaw ang pera — hindi kung angkop ba ang orihinal na policy,
            maayos bang naipahatid ang serbisyo, o nangyari ba ang inaasahang
            outcome. Pwede ring mahina ang resulta sa likod ng mataas na rate; at
            pwedeng senyales ng delay, nagbagong kondisyon, o plano na hindi na
            dapat ituloy nang walang pagbabago ang mababang rate. Anuman ang
            pattern, kailangan pa rin ng karagdagang evidence.
          </p>
        </>
      ),
    },
    {
      id: "evaluation-chain",
      title: "Sundan ang buong evaluation chain",
      shortTitle: "Ang chain",
      type: "interactive",
      content: (
        <div className="not-prose my-6">
          <ol className="grid gap-3 lg:grid-cols-5">
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Link 1
              </p>
              <h3 className="mt-1 font-semibold text-foreground">Need</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Anong public problem o gap ang nangangailangan ng atensyon, at
                para kanino?
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Link 2
              </p>
              <h3 className="mt-1 font-semibold text-foreground">Policy</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Anong response ang pinili, at paano ito dapat sumagot sa need?
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Link 3
              </p>
              <h3 className="mt-1 font-semibold text-foreground">Allocation</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Anong resources ang inaprubahan, para sa anong purpose at gaano
                kalaki?
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Link 4
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Implementation
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ano talaga ang naisagawa, naihatid, at binayaran?
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Link 5
              </p>
              <h3 className="mt-1 font-semibold text-foreground">Outcome</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Anong{" "}
                <Term id="outcome">pagbabago sa kondisyon ng mga tao</Term>{" "}
                ang sumunod, at ano pa ang maaaring nakaimpluwensya dito?
              </p>
            </li>
          </ol>
          <p className="mt-3 text-xs text-muted-foreground">
            Static na evaluation-chain diagram. Basahin mula sa need hanggang sa
            outcome, tapos sundan pabalik ang daloy kapag mahina o hindi
            sigurado ang resulta.
          </p>
        </div>
      ),
    },
    {
      id: "weak-link",
      title: "Hanapin ang mahinang link bago husgahan",
      shortTitle: "Mahinang link",
      type: "example",
      content: (
        <>
          <div className="not-prose my-6 rounded-lg border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Illustrative na halimbawa
            </p>
            <h3 className="mt-1 font-semibold text-foreground">
              Nakarating ang mobile clinic sa mas kaunting komunidad kaysa sa
              plano
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <strong className="text-foreground">Need:</strong> mga hindi
                natuloy na prenatal visit sa malalayong komunidad.
              </li>
              <li>
                <strong className="text-foreground">Policy:</strong> lapitan sa
                mga residente ang mga nakatakdang mobile clinic.
              </li>
              <li>
                <strong className="text-foreground">Allocation:</strong> may
                naaprubahang support para sa mga sasakyan, supplies, at
                operasyon.
              </li>
              <li>
                <strong className="text-foreground">Implementation:</strong>{" "}
                nakuha ang mga sasakyan at supplies, pero dahil sa staffing
                schedule, may ilang komunidad na hindi nabisita.
              </li>
              <li>
                <strong className="text-foreground">Outcome:</strong> hindi
                bumaba ang mga hindi natuloy na visit ayon sa inaasahan.
              </li>
            </ul>
          </div>
          <p>
            Ang unang dapat imbestigahan ay ang implementation: ang pagkakaroon
            ng mga input ay hindi humantong sa nakalagay na coverage sa plano.
            Pero bukas pa rin ang pagtatanong dahil sa chain. Maaaring magbunyag
            ang staffing plan ng problema sa design ng policy, at maaaring
            ipakita ng outcome evidence ang ibang hadlang sa prenatal care.
          </p>
          <p>
            Tutulong ang mga fact para matukoy mo ang link; tutulong naman ang
            mga evaluation criteria para mahusgahan mo ito. Ginagawang tiyak na
            tanong ng isang criterion ang malawak na reaksyon — halimbawa, kung
            sapat ba ang resources, epektibo ba ang delivery, o nakarating ba
            sa mga inaasahang tao ang benepisyo. Ipapakilala ng susunod na
            lesson ang pitong criteria para maging malinaw ang mga ganitong
            husga.
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
          title="Hanapin kung ano ang masusuportahan ng evidence"
          moduleId="mod-08"
          lessonId="08.1"
          items={[
            {
              prompt:
                "Parehong budget utilization rate ang iniulat ng dalawang program. Ano ang pinakamakatarungang konklusyon mula sa fact na iyon lamang?",
              options: [
                "Pareho silang nakapaglingkod nang maayos sa publiko.",
                "Clue lang ang rate tungkol sa execution; ikumpara muna ang mga need, policy, allocation, implementation, at outcome bago husgahan.",
                "Dapat mas magaling ang performance ng program na mas malaki ang kabuuang budget.",
              ],
              correct: 1,
              explanation:
                "Inilalarawan ng isang utilization rate ang isang nakasaad na ugnayan sa pagitan ng mga execution amount. Hindi nito sinusukat mag-isa ang kalidad ng serbisyo o ang mga outcome.",
              wrong: {
                0: "Ang parehong utilization ay hindi patunay ng parehong delivery, kalidad, abot, o outcome.",
                2: "Ang mas malaking allocation ay nagpapakita ng laki, hindi awtomatikong mas malakas na performance o benepisyo sa publiko.",
              },
            },
            {
              prompt:
                "May pondo ang isang program, pero dahil sa delay sa procurement, nagsimula ang serbisyo pagkatapos ng target period. Aling link ang dapat imbestigahan nang una?",
              options: [
                "Need — hindi maaaring umiral ang public problem.",
                "Allocation — walang natanggap na budget authority ang program.",
                "Implementation — hindi naisagawa sa iskedyul ang pinondohan na plano.",
              ],
              correct: 2,
              explanation:
                "May delay sa pagitan ng allocation at delivery ang senaryo, kaya ang implementation ang unang mahinang link na dapat tingnan.",
              wrong: {
                0: "Walang nagsasabing mali ang public need sa senaryo; ang nabanggit na pagkakamali ay delay sa delivery.",
                1: "May pondo ang program, kaya ang unang nakitang problema ay hindi ang kakulangan ng allocation.",
              },
            },
          ]}
        />
      ),
    },
    {
      id: "takeaway",
      title: "Husgahan ang chain, hindi iisang numero",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Lumipat mula sa numero tungo sa husga sa pamamagitan ng pagsunod sa
          buong chain: need → policy → allocation → implementation → outcome.
          Bahagi lang ng implementation ang inilalarawan ng utilization; tutulong
          ang mga criteria at evidence para mahusgahan mo kung magkakaugnay ang
          mga link at nagsilbi ba sa public need.
        </KeyTakeaway>
      ),
    },
  ],
});
