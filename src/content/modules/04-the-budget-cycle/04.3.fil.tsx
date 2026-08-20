import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Handa nang gamitin ang approved budget",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Ano ang ginagawa ng ahensya pagkatapos maaprubahan ang budget nito?
          </p>
          <p>
            Lumilipat ito mula sa legal authority patungo sa implementation.
            Hindi ito basta iisang release o bayad: nagpaplano ang mga ahensya
            ng kanilang trabaho at cash needs, tumatanggap ng mga naaangkop na
            authority, isinasagawa ang procurement ng goods o services,
            pumapasok sa mga commitment, tumatanggap ng delivery, at nagbabayad
            ng mga valid na claim.
          </p>
        </>
      ),
    },
    {
      id: "execution-route",
      title: "Ang daan ng execution",
      shortTitle: "Ang daan",
      type: "interactive",
      content: (
        <div className="not-prose my-6">
          <ol className="grid gap-3 sm:grid-cols-2">
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 1
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                May authority na
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ang <Term id="allotment" /> ang nagbibigay sa ahensya ng
                authority na magkaroon ng obligasyon laban sa isang approved na{" "}
                <Term id="appropriation" />.
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 2
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Naka-program ang cash needs
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Itinutugma ng gobyerno ang mga inaasahang bayaran sa available
                na cash; ang <Term id="notice-of-cash-allocation" expand /> ang
                nagbibigay ng cash authority para sa mga naaangkop na
                pangangailangan ng ahensya.
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 3
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Nag-aayos ng delivery ang ahensya
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ang hiring, operations, at <Term id="procurement" /> ang
                gumagawa sa approved na plano ng mga kontrata, order, at
                naka-iskedyul na trabaho.
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 4
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Naitatala ang mga commitment
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ang pagpasok sa isang valid na commitment ay lumilikha ng{" "}
                <Term id="obligation" />; hindi pa ito bayad.
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 5
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Darating ang goods, trabaho, o serbisyo
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tinitingnan ng ahensya ang delivery at performance laban sa
                kasunduan.
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 6
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Binabayaran ang mga valid na claim
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ang <Term id="disbursement" /> ang aktwal na pagbabayad ng pera
                ng publiko.
              </p>
            </li>
          </ol>
          <p className="mt-3 text-xs text-muted-foreground">
            Static fallback para sa bahaging execution ng budget-cycle
            timeline. Nag-iiba ang mga aktuwal na dokumento at kundisyon ng
            release bawat item at ayon sa naaangkop na mga rules.
          </p>
        </div>
      ),
    },
    {
      id: "authority-and-cash",
      title: "Magkaibang tanong ang sinasagot ng authority at ng cash",
      shortTitle: "Authority ≠ cash",
      type: "concept",
      content: (
        <>
          <p>
            Ang appropriation ay nagbibigay ng legal na spending authority para
            sa isang nakasaad na layunin. Ginagawa ng allotment na available ang
            authority na ito para sa mga obligasyon. Ang cash programming at ang
            naaangkop na disbursement authority ay sumasagot naman sa ibang
            tanong: kailan mababayaran ang mga valid na obligasyon mula sa
            available na cash ng gobyerno?
          </p>
          <p>
            Napipigilan ng pagkakaiba na ito ang isang karaniwang mali. Ang isang
            budget line ay pwedeng ma-appropriate, ma-allot, ma-obligate, at
            ma-disburse sa magkakaibang panahon. Ang pagkakita sa isang stage
            lamang sa isang report ay hindi patunay na nangyari na ang lahat ng
            mga sumunod na stage—o na nakarating na sa mga tao ang inaasahang
            serbisyo.
          </p>
        </>
      ),
    },
    {
      id: "agency-responsibility",
      title: "Pinamamahalaan ng mga ahensya ang delivery sa loob ng mga rules",
      shortTitle: "Trabaho ng ahensya",
      type: "concept",
      content: (
        <>
          <p>
            Responsable ang implementing agency na gawing aktwal na trabaho ang
            approved budget nito: pagtakda ng mga financial at physical target,
            pag-iskedyul ng procurement, pamamahala ng mga kontrata,
            pagdokumento ng mga obligasyon, pagsusuri ng delivery, pagproseso ng
            mga bayaran, at pag-report ng progress.
          </p>
          <p>
            Pwedeng magbago ang mga plano, pero hindi pwedeng ituring ng ahensya
            ang enacted budget bilang pool ng perang malayang gagamitin. Ang mga
            adjustment at realignment ay dapat sumunod sa legal authority, mga
            kundisyon, approvals, at reporting rules na naaangkop sa mga
            partikular na pondo.
          </p>
          <p>
            May mga validity rule din ang mga appropriation. Nag-iiba ang mga
            rule na ito ayon sa fiscal year at uri ng appropriation, kaya ang
            tamang tanong ay hindi “Habang-buhay bang available ang budget
            funds?” kundi “Anong mga validity at payment rule ang naaangkop sa
            item na ito ayon sa kaugnay na batas at issuances?”
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
          title="Subukan ang dalawang claim tungkol sa execution"
          moduleId="mod-04"
          lessonId="04.3"
          items={[
            {
              prompt:
                "Totoo o mali: Kapag na-appropriate na ang isang halaga, ibig sabihin ay nabayaran na ito ng ahensya sa isang supplier.",
              options: ["Totoo", "Mali"],
              correct: 1,
              explanation:
                "Mali. Ang appropriation ay legal authority. Ang allotment, obligation, delivery, cash authority, at disbursement ay magkakahiwalay na hakbang sa execution.",
              wrong: {
                0: "Hindi ang appropriation ang lumilikha ng kontrata, nagkokumpirma ng delivery, o nagbabayad.",
              },
            },
            {
              prompt:
                "Totoo o mali: Pwede ang ahensya na malayang ilipat ang kahit anong approved na halaga sa bagong layunin kapag nagbago ang mga plano sa implementation.",
              options: ["Totoo", "Mali"],
              correct: 1,
              explanation:
                "Mali. Ang mga adjustment at realignment ay dapat manatili sa loob ng authority at mga kundisyong itinakda ng naaangkop na batas at rules.",
              wrong: {
                0: "Hindi pool na malayang ginagamit ang enacted budget; kailangan ng valid na batayan ang mga pagbabago, pati ng naaangkop na approvals at reporting.",
              },
            },
          ]}
        />
      ),
    },
    {
      id: "takeaway",
      title: "Chain ang execution, hindi iisang release",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Ang approved budget ay nagiging service delivery sa pamamagitan ng
          mga magkakaibang hakbang: authority, cash planning, procurement o
          operations, obligation, delivery, at disbursement. Pinamamahalaan ng
          mga ahensya ang chain na iyon sa loob ng mga layunin, validity,
          adjustment, at reporting rules na naaangkop.
        </KeyTakeaway>
      ),
    },
  ],
});
