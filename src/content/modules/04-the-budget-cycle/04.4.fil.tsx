import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Pagsusuri ng mga pangako laban sa mga record",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Sino ang nagtitingin kung ginawa ba ng pera ng publiko ang dapat
            nitong gawin?
          </p>
          <p>
            Pinagsasaluhan ng marami ang accountability. Nagtatala at nag-uulat
            ang mga ahensya ng kanilang sariling financial at physical
            performance. Sinusuri ng mga manager at internal control ang
            trabaho habang nangyayari ito. Ang mga budget reviewer, legislator,
            auditor, at ang publiko ay tumitingin sa magkakaibang bahagi ng
            record.
          </p>
        </>
      ),
    },
    {
      id: "accountability-loop",
      title: "Ang accountability loop",
      shortTitle: "Ang loop",
      type: "interactive",
      content: (
        <div className="not-prose my-6">
          <ol className="grid gap-3 sm:grid-cols-2">
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 1
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Nagtatala ang mga ahensya
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Mula sa mga transaksyon, delivery, at accomplishment nabubuo ang
                ebidensyang kailangan para sa susunod na review.
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 2
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Nag-uulat ang mga ahensya ng resulta
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ipinapakita ng mga financial report ang nangyari sa pondo;
                ipinapakita ng mga physical report ang mga output, activity, at
                progress laban sa mga target.
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 3
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Sinusuri ang performance
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Inihahambing ng mga ahensya at budget manager ang paggamit ng
                pondo at physical performance sa mga approved na plano at
                target.
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 4
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Sinusuri ng independent audit ang mga account
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ang <Term id="coa" expand /> ang nag-aaudit ng mga account ng
                gobyerno at nag-uulat ng mga finding.
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 5
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Ginagamit ng oversight ang record
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Pwedeng ihambing ng Kongreso at ng publiko ang authority,
                paggastos, implementation, at mga naiulat na resulta.
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 6
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Gumagabay ang mga finding sa susunod na plano
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Pwedeng maging gabay ang mga aral, risk, at hindi pa
                nareresolbang problema sa susunod na round ng preparation at
                implementation.
              </p>
            </li>
          </ol>
          <p className="mt-3 text-xs text-muted-foreground">
            Static fallback para sa bahaging accountability ng budget-cycle
            timeline. Bumabalik sa preparation ang huling hakbang, at doon
            natatapos ang cycle.
          </p>
        </div>
      ),
    },
    {
      id: "read-both",
      title: "Basahin nang magkasama ang financial at physical na resulta",
      shortTitle: "Dalawang record",
      type: "concept",
      content: (
        <>
          <p>
            Sumasagot ang financial accomplishment sa mga tanong tulad ng
            magkano ang na-obligate o na-disburse. Sumasagot naman ang physical
            accomplishment sa mga tanong tulad ng ilan sa mga activity, goods,
            facility, o serbisyo ang natapos laban sa isang target. Hindi
            kumpleto ang bawat record kung mag-isa.
          </p>
          <p>
            Hindi patunay ng maayos na nai-deliver ang inaasahang output ang
            malaking paggastos. Hindi rin patunay ng pangmatagalang epekto ang
            isang natapos na output. At ang delay sa paggastos ay senyales na
            dapat imbestigahan, hindi awtomatikong finding ng nasayang na pera.
            Nagsisimula ang accountability sa pagtutugma ng tanong sa tamang
            ebidensya, at pagkatapos ay pagsusuri ng konteksto.
          </p>
        </>
      ),
    },
    {
      id: "layers-of-review",
      title: "Magkaibang reviewer, magkaibang tanong ang sinasagot",
      shortTitle: "Sino ang tumitingin?",
      type: "concept",
      content: (
        <>
          <ul>
            <li>
              <strong>
                Pamamahala ng ahensya at <Term id="internal-control" />:
              </strong>{" "}
              Protektado ba ang mga resources, maaasahan ba ang mga record,
              namamahala ba ang mga risk, at isinasagawa ba ang trabaho ayon sa
              naaangkop na mga rules?
            </li>
            <li>
              <strong>Pagrepaso sa performance ng ahensya:</strong> Paano
              nahahambing ang paggamit ng pondo at mga physical na operasyon sa
              mga plano at target na nakasaad sa budget?
            </li>
            <li>
              <strong>
                <Term id="coa" />:
              </strong>{" "}
              Ano ang nadiskubre ng independent audit sa pagsusuri ng mga
              account ng gobyerno at ng paggamit ng public funds at ari-arian?
            </li>
            <li>
              <strong>Congressional oversight:</strong> Ano ang ipinapakita ng
              mga report at hearing tungkol sa implementation, compliance, at
              pangangailangan ng mga pagbabago sa susunod na budget?
            </li>
            <li>
              <strong>Public oversight:</strong> Ano ang matututunan ng mga tao
              sa paghahambing ng mga approved na plano, procurement
              information, implementation status, at mga report?
            </li>
          </ul>
          <p>
            Ang isang magandang simulan ay ang{" "}
            <Term id="transparency-seal" /> page ng ahensya, kung saan naka-index
            ang mga kinakailangang disclosure. Ang pag-post ng isang dokumento ay
            nagbubukas ng puwang para sa review; hindi ito garantisya na gumana
            ang program o na sinasagot ng dokumento ang bawat tanong.
          </p>
        </>
      ),
    },
    {
      id: "check",
      title: "Check ang pag-intindi mo",
      shortTitle: "Self-check",
      type: "knowledge-check",
      content: (
        <KnowledgeCheck
          title="Itugma ang oversight actor sa mekanismo"
          moduleId="mod-04"
          lessonId="04.4"
          items={[
            {
              prompt:
                "Gusto ng isang agency manager ng mga proseso na pumipigil sa mga error, nagpoprotekta sa mga resource, at nagpapanatiling maaasahan ang mga record habang isinasagawa ang implementation. Alin ang pinakaangkop na mekanismo?",
              options: [
                "Internal control sa loob ng ahensya",
                "Isang bicameral conference committee",
                "Isang bagong revenue forecast",
              ],
              correct: 0,
              explanation:
                "Gumagana ang mga internal control sa loob ng ahensya para pamahalaan ang mga risk, protektahan ang mga resource, suportahan ang maaasahang mga record, at tulungan ang trabaho na sumunod sa mga rules.",
              wrong: {
                1: "Ang bicameral conference committee ay nagpapantay sa mga bersyon ng House at Senate ng isang bill; hindi ito namamahala ng operasyon ng ahensya.",
                2: "Ang revenue forecast ay nagtatantiya ng mga resource para sa budget planning; hindi ito operational control sa loob ng ahensya.",
              },
            },
            {
              prompt:
                "Aling institusyon ang independiyenteng nagsusuri at nag-aaudit ng mga account ng gobyerno kabilang ang public funds at ari-arian?",
              options: [
                "Ang implementing agency lamang",
                "Ang Commission on Audit",
                "Ang supplier na nakatanggap ng bayad",
              ],
              correct: 1,
              explanation:
                "Ang COA ang constitutional audit institution na may authority na sumuri, mag-audit, at mag-ayo ng mga account ng gobyerno sa loob ng jurisdiction nito.",
              wrong: {
                0: "Nagtatala at nagsasagawa ng internal review ang mga ahensya, pero hindi ang implementing agency lamang ang nagsasagawa ng external audit.",
                2: "Maaaring magbigay ang supplier ng mga transaction document, pero hindi ito ang constitutional na public audit institution.",
              },
            },
          ]}
        />
      ),
    },
    {
      id: "takeaway",
      title: "Nagsasara at nagsisimula muli ng cycle ang accountability",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Pinagsasama ng accountability ang maaasahang record ng ahensya,
          financial at physical na pag-uulat, management review, internal
          control, independent audit, at legislative at public oversight.
          Pinakamalaki ang halaga ng mga finding kapag nakaugnay ang mga ito sa
          paghusay ng implementation at sa paghahanda ng susunod na budget.
        </KeyTakeaway>
      ),
    },
  ],
});
