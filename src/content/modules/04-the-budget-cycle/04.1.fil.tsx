import { Figure } from "@/components/content/Figure";
import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Sino ang sumusulat ng unang draft?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Sino ang sumusulat ng unang draft ng national budget?
          </p>
          <p>
            Ang maikling sagot: ang executive branch. Ginagawa nito ang proposal
            mula sa mga fiscal target, prayoridad ng gobyerno, at mga proposal
            ng mga ahensya. Pagkatapos, ipinapadala ng Pangulo ang proposed
            national budget sa Kongreso, at doon nagsisimula ang legislation
            phase.
          </p>
        </>
      ),
    },
    {
      id: "cycle-position",
      title: "Sa Preparation nagsisimula ang apat na phase ng cycle",
      shortTitle: "Ang cycle",
      type: "interactive",
      content: (
        <div className="not-prose my-6">
          <ol className="grid gap-3 sm:grid-cols-4">
            <li className="rounded-lg border-2 border-primary bg-accent/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Phase 1 · Ang lesson na ito
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                I-plan ang budget
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ang kalabasan ng preparation ay ang executive proposal.
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Phase 2
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Aprubahin ang budget
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Nagdedeliberate ang Kongreso, at kasunod nito ang legislation.
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Phase 3
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Gastusin at i-deliver
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Isinasagawa ng mga ahensya ang enacted budget.
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Phase 4
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Tingnan ang resulta
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ang reporting, review, at audit ang nagsisilbing input para sa
                susunod na cycle.
              </p>
            </li>
          </ol>
          <p className="mt-3 text-xs text-muted-foreground">
            Static fallback para sa shared na budget-cycle timeline. Ang mga
            pangalan at numero ng mga phase ang may dalang kahulugan, hindi ang
            kulay.
          </p>
        </div>
      ),
    },
    {
      id: "preparation-steps",
      title: "Paano binubuo ng executive ang proposal",
      shortTitle: "Pagbuo ng NEP",
      type: "concept",
      content: (
        <>
          <p>
            Sa preparation, ang pangkalahatang plano sa resources ay unang
            nagiging mga proposal ng mga ahensya, at sa huli, iisang executive
            budget. Sundan ang sequence:
          </p>
          <ol className="not-prose my-6 grid gap-3">
            <li className="rounded-lg border bg-card p-4">
              <strong className="text-foreground">
                1. Itakda ang fiscal frame.
              </strong>{" "}
              <span className="text-sm text-muted-foreground">
                Inirerekomenda ng <Term id="dbcc" expand /> ang mga
                macroeconomic assumption, fiscal target, at kabuuang antas ng
                paggastos para sa darating na <Term id="fiscal-year" expand />.
              </span>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <strong className="text-foreground">
                2. Ilahad ang mga prayoridad at instruksyon.
              </strong>{" "}
              <span className="text-sm text-muted-foreground">
                Nag-iissue ang <Term id="dbm" expand /> ng{" "}
                <Term id="budget-call" />, na nagsasabi sa mga ahensya kung
                paano at kailan sila dapat maghanda ng kanilang mga proposal.
              </span>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <strong className="text-foreground">
                3. Naghahanda ang mga ahensya ng mga proposal.
              </strong>{" "}
              <span className="text-sm text-muted-foreground">
                Iniuugnay ng bawat ahensya ang mga hinihiling na resources sa
                sarili nitong mga mandate, program, prayoridad, at inaasahang
                resulta.
              </span>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <strong className="text-foreground">
                4. Dadaan sa technical review ang mga proposal.
              </strong>{" "}
              <span className="text-sm text-muted-foreground">
                Sa mga technical budget hearing, ipinapaliwanag ng mga ahensya
                ang kanilang mga request at sumasagot sa mga tanong tungkol sa
                gastos, pangangailangan, readiness, at performance.
              </span>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <strong className="text-foreground">
                5. Pinagsasama ng executive ang mga pagpili.
              </strong>{" "}
              <span className="text-sm text-muted-foreground">
                Sinusuri ang mga request laban sa fiscal frame at mga
                prayoridad; hindi pwedeng isama lahat ng mga magkatunggaling
                proposal sa antas na hinihiling nila.
              </span>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <strong className="text-foreground">
                6. Nagiging NEP ang proposal.
              </strong>{" "}
              <span className="text-sm text-muted-foreground">
                Ang kalabasan ng executive review ay ang{" "}
                <Term id="nep" expand />, na ipapasa ng Pangulo sa Kongreso para
                sa susunod na phase.
              </span>
            </li>
          </ol>
        </>
      ),
    },
    {
      id: "proposal-example",
      title: "Ang proposal ay panimula, hindi pa resulta",
      shortTitle: "Halimbawa",
      type: "example",
      content: (
        <>
          <p>
            Sa preparation para sa 2022 national budget, ang{" "}
            <strong>Move As One</strong> coalition — isang transport coalition
            na may higit isang daang organisasyon — ay nagsumite ng documented
            na proposal para sa suporta sa active transport at public transport.
            Kasama sa naitalang request ang halagang ito:
          </p>
          <Figure module="mod-04" id="mao-ask" />
          <p>
            Iba naman ang enacted na halaga para sa service contracting na
            naitala sa mga susunod na bahagi ng budget process:
          </p>
          <Figure module="mod-04" id="mao-service-contracting-outcome" />
          <p>
            Hindi pwedeng basahin bilang simpleng before-and-after ang dalawang
            figure na ito. Tumutukoy ang isa sa proposal ng isang nakapangalan
            at on-record na proponente, at ang isa naman sa enacted na item —
            dalawang magkaibang decision point. Mas makitid ang aral para sa
            preparation: pwedeng pumasok ang input habang binubuo ng executive
            ang proposal nito, pero hinuhubog pa rin ng mga susunod na review at
            legislation kung ano ang maaaring ma-authorize.
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
          title="Isunod-sunod ang mga hakbang sa preparation"
          moduleId="mod-04"
          lessonId="04.1"
          items={[
            {
              prompt:
                "Alin ang tamang pagkakasunod-sunod ng mga pangunahing hakbang sa preparation?",
              options: [
                "Mga proposal ng ahensya → budget call → mga fiscal target → NEP",
                "Fiscal frame at mga prayoridad → budget call → mga proposal ng ahensya at hearings → executive review at NEP",
                "NEP → mga proposal ng ahensya → technical budget hearings → budget call",
              ],
              correct: 1,
              explanation:
                "Unang itinatakda ng executive ang fiscal frame. Pagkatapos, hinihingi at sinusuri nito ang mga proposal ng mga ahensya bago i-consolidate ang NEP.",
              wrong: {
                0: "Kailangan muna ng mga ahensya ang budget call at ang mga instruksyon nito bago magsumite ng mga proposal.",
                2: "Ang NEP ang output ng preparation, kaya dumarating ito pagkatapos ng mga proposal ng ahensya, hearings, at executive review.",
              },
            },
            {
              prompt:
                "Sino ang gumagawa ng unang consolidated national budget proposal na ipinapadala sa Kongreso?",
              options: [
                "Ang executive branch, pagkatapos suriin ang mga proposal ng ahensya",
                "Ang Kongreso, bago pa magsumite ang mga ahensya ng kanilang mga request",
                "Ang Commission on Audit, pagkatapos i-audit ang kasalukuyang budget",
              ],
              correct: 0,
              explanation:
                "Ang executive branch ang nagko-consolidate ng NEP. Tinitingnan ng Kongreso ang proposal sa legislation phase; ang audit ay bahagi ng accountability.",
              wrong: {
                1: "Sa susunod na phase, nagdedeliberate ang Kongreso sa proposal; hindi ito ang gagawa ng executive draft.",
                2: "Pwedeng maging gabay ang mga finding ng audit sa susunod na preparation, pero hindi ang audit institution ang nagko-consolidate ng executive budget proposal.",
              },
            },
          ]}
        />
      ),
    },
    {
      id: "takeaway",
      title: "Ang unang draft ay executive proposal",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Dumadaan ang preparation mula sa fiscal frame at mga prayoridad
          patungo sa budget call, mga proposal ng ahensya, technical review, at
          mga pagpili ng executive. Ang pangunahing output nito ay ang{" "}
          <Term id="nep" />
          —ang proposed national budget ng Pangulo na isinusumite sa Kongreso;
          hindi pa ito ang enacted budget.
        </KeyTakeaway>
      ),
    },
  ],
});
