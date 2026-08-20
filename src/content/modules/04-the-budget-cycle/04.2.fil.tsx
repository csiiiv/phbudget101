import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Mula proposal hanggang maging batas",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Ano ang nangyayari mula sa proposed budget ng Pangulo hanggang sa
            pagpirma sa taunang appropriations law?
          </p>
          <p>
            Ang legislation ang phase kung saan sinusuri, dinidiskusyunan,
            ina-amend, at binobotohan ng Kongreso ang proposed national budget.
            May kanya-kanyang papel ang House of Representatives, ang Senate, at
            ang Pangulo bago maging batas ang proposal.
          </p>
        </>
      ),
    },
    {
      id: "legislation-route",
      title: "Ang daan ng legislation",
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
                Ipinapadala ng Pangulo ang proposal
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ang <Term id="nep" expand /> ang nagbibigay sa Kongreso ng mga
                proposed allocation ng executive at ng mga kaakibat na budget
                information.
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 2
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Nagsisimula ang review ng House
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Nagaganap ang mga committee hearing ng House at sinusuri nang
                detalyado ang mga budget ng mga ahensya.
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 3
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Inaprubahan ng House ang bill nito
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ang appropriations measure ay nagsisimula sa House bilang{" "}
                <Term id="gab" expand />.
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 4
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Sinusuri at ina-amend ng Senate
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tinitingnan ng mga committee ng Senate at ng buong chamber ang
                measure at maaaring magmungkahi o sumang-ayon sa mga amendment.
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 5
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Nagkakaisa ang dalawang chamber
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ang <Term id="bicameral-conference" /> ang gumagawa ng iisang
                karaniwang bersyon na bobotohan ng dalawang chamber para sa
                ratification.
              </p>
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 6
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Kumikilos ang Pangulo sa bill
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ang approval ng Pangulo ang nagpapalabas ng{" "}
                <Term id="gaa" expand />; nakasaad naman sa veto message ang
                mga item na navi-veto.
              </p>
            </li>
          </ol>
          <p className="mt-3 text-xs text-muted-foreground">
            Static fallback para sa bahaging legislation ng shared na
            budget-cycle timeline. Mananatiling printable at keyboard-readable
            ang may numerong sequence.
          </p>
        </div>
      ),
    },
    {
      id: "two-chambers",
      title: "Magkaibang trabaho ang ginagawa ng dalawang chamber sa iisang bill",
      shortTitle: "Dalawang chamber",
      type: "concept",
      content: (
        <>
          <p>
            Itinatakda ng Saligang Batas na sa House of Representatives dapat
            magsimula ang mga appropriations bill, pero maaaring magmungkahi o
            sumang-ayon ang Senate sa mga amendment. Kaya mas nauuna ang
            bersyon ng House kahit maaari nang simulan ng mga committee ng
            Senate ang pagsisiyasat sa proposed budget habang isinasagawa pa ang
            deliberation ng House.
          </p>
          <p>
            Sa bawat chamber, matatanong ng mga legislator ang mga ahensya sa
            mga committee hearing at masusuri nang detalyado ang mga request.
            Ihaharap naman ng plenary deliberation ang bill sa buong chamber
            para sa debate, mga amendment ayon sa rules nito, at boto. Hindi
            sapat ang approval ng iisang chamber: kailangang sumang-ayon ang
            dalawa sa parehong teksto sa huli.
          </p>
        </>
      ),
    },
    {
      id: "one-bill",
      title: "Isang karaniwang bill ang dadalhin sa Pangulo",
      shortTitle: "Isang bill",
      type: "concept",
      content: (
        <>
          <p>
            Kapag magkaiba ang bersyon ng House at ng Senate, ang{" "}
            <Term id="bicameral-conference" /> ang nag-aayos ng mga
            pagkakaiba. Babalik ang pinagkasunduang bersyon sa dalawang chamber
            para sa ratification bago ito ihain sa Pangulo.
          </p>
          <p>
            Maaaring aprubuhan ng Pangulo ang bill o gamitin ang{" "}
            <Term id="line-item-veto" /> sa isang partikular na appropriation
            item. Hindi tinatanggihan ng item veto ang mga item na hindi naman
            tutol ang Pangulo. Ang pinirmahang bill, kung may mga valid na veto,
            ang nagiging <Term id="gaa" />. Nakalagak sa veto message ang mga
            pagtutol ng Pangulo.
          </p>
          <p>
            Ito ang pinakamalaking pagbabago mula sa preparation: ang{" "}
            <Term id="nep" /> ay proposal, ang <Term id="gab" /> ay bill na
            pinagdidiskusyunan sa Kongreso, at ang <Term id="gaa" /> ay batas.
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
          title="Itugma ang hakbang sa legislation sa institusyon"
          moduleId="mod-04"
          lessonId="04.2"
          items={[
            {
              prompt:
                "Alin ang tamang paglalarawan ng papel ng House at ng Senate?",
              options: [
                "Sa House nagsisimula ang appropriations bill; maaaring magmungkahi o sumang-ayon ang Senate sa mga amendment.",
                "Sa Senate nagsisimula ang appropriations bill; pwede lamang ang House na aprubahan ito nang walang pagbabago.",
                "Pwede ang bawat chamber na magpatupad ng hiwalay na appropriations law para sa parehong fiscal year.",
              ],
              correct: 0,
              explanation:
                "Inilalagay ng Saligang Batas ang origination sa House habang pinapanatili ang papel ng Senate sa amendment. Kailangang sumang-ayon ang dalawang chamber sa iisang bill.",
              wrong: {
                1: "Kabaligtaran ang origination rule ng Saligang Batas: sa House nagsisimula ang mga appropriations bill.",
                2: "Pwede namang magkaiba ang bersyong inaprubahan ng dalawang chamber habang nagdedeliberate sila, pero kailangang pagsamahin ang mga pagkakaiba sa iisang bill.",
              },
            },
            {
              prompt:
                "Naglabas ang House at ang Senate ng bersyong magkakaiba ang probisyon. Ano ang susunod?",
              options: [
                "Awtomatikong magiging batas ang dalawang bersyon.",
                "Pipiliin ng Pangulo ng bersyon ng isang chamber nang walang karagdagang aksyon ng Kongreso.",
                "Magpapantay ang bicameral conference committee sa mga pagkakaiba, at bobotohan ng dalawang chamber ang karaniwang bersyon.",
              ],
              correct: 2,
              explanation:
                "Ang bicameral conference ang gumagawa ng karaniwang bersyon para sa ratification bago ihain ang bill sa Pangulo.",
              wrong: {
                0: "Hindi pwedeng maging taunang appropriations law ang dalawang magkasalungat na bersyon.",
                1: "Kailangan muna ng Kongreso na pumayag sa iisang teksto; ang Pangulo ay kumikilos sa bill pagkatapos ng kasunduang iyon.",
              },
            },
          ]}
        />
      ),
    },
    {
      id: "takeaway",
      title: "Ginagawang batas ng legislation ang isang proposal",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Nagsisimula at nag-aapruba ang House ng appropriations bill, sinusuri
          at maaaring i-amend ng Senate ang bill, pinagsasama at niraratipikahan
          ng dalawang chamber ang iisang bersyon, at kumikilos ang Pangulo sa
          bill na iyon. Ang resulta ay ang <Term id="gaa" />
          —ang legal na authorization para sa paggastos ng national government,
          na sakop ng mga valid na item veto kung mayroon man.
        </KeyTakeaway>
      ),
    },
  ],
});
