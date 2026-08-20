import { Link } from "react-router-dom";

import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { defineLesson } from "@/lib/sections";

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Dalawang tanong ang gabay sa buong course",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Saan galing ang pera ng gobyerno, at saan ito napupunta?
          </p>
          <p>
            Ito ang dalawang tanong na nag-uugnay sa lahat ng module sa PH
            Budget 101. Maraming ahensya, dokumento, at proseso ang kasama sa
            buong sagot. Pero sa ngayon, tandaan lang ang simpleng flow na ito:
            pumapasok ang kita, dinadaan ito sa mga desisyon sa budget, at
            ginagamit ito para makapaghatid ng mga serbisyo.
          </p>
        </>
      ),
    },
    {
      id: "headline-flow",
      title: "Ang buong course sa isang tingin",
      shortTitle: "Ang flow",
      type: "interactive",
      content: (
        <div
          className="not-prose my-6"
          aria-label="Dumadaan ang kita sa mga desisyon sa budget bago ito maging serbisyo"
        >
          <ol className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-stretch">
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 1
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Pumapasok ang kita
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Nangongolekta ang gobyerno ng kita at, kung kailangan,
                nangungutang para madagdagan ang available na pondo.
              </p>
              <Link
                className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
                to="/modules/02-the-governments-money"
              >
                Silipin ang Module 2
              </Link>
            </li>
            <li
              aria-hidden="true"
              className="self-center text-center text-xl font-semibold text-primary"
            >
              →
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 2
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Gumagawa ng mga desisyon sa budget
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Nagpo-propose, nag-aapruba, at nagpapatupad ang gobyerno ng mga
                planong paggagamitan ng pera.
              </p>
              <Link
                className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
                to="/modules/04-the-budget-cycle"
              >
                Silipin ang Module 4
              </Link>
            </li>
            <li
              aria-hidden="true"
              className="self-center text-center text-xl font-semibold text-primary"
            >
              →
            </li>
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Step 3
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Nagiging serbisyo ang pondo
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Ginagamit ng mga ahensya ang approved funds para sa trabaho,
                supplies, projects, at mga serbisyo.
              </p>
              <Link
                className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
                to="/modules/05-from-appropriation-to-public-service"
              >
                Silipin ang Module 5
              </Link>
            </li>
          </ol>
          <p className="mt-3 text-xs text-muted-foreground">
            Static course map muna ito. Darating sa susunod na phase ang
            interactive concept map.
          </p>
        </div>
      ),
    },
    {
      id: "money-in",
      title: "Unang tanong: anong pera ang available?",
      shortTitle: "Pera papasok",
      type: "concept",
      content: (
        <>
          <p>
            Nagsisimula ang flow sa kita. Malaking bahagi nito ang buwis, pero
            may iba pang pinanggagalingan gaya ng fees, ibang kita ng gobyerno,
            grants, at utang. Mahalaga ang estimates dahil dito ibinabase kung
            magkano ang kayang planuhing gastusin nang responsable.
          </p>
          <p>
            Mas detalyadong tatalakayin ng Module 2 ang mga source na ito at ang
            limitasyon nila sa budget. Sa ngayon, ito lang ang tandaan: bago
            magdesisyon kung saan gagastusin ang pera, kailangang malaman muna
            kung magkano ang posibleng maging available.
          </p>
        </>
      ),
    },
    {
      id: "money-out",
      title: "Sunod na tanong: ano ang nangyari pagkatapos maaprubahan?",
      shortTitle: "Pera palabas",
      type: "concept",
      content: (
        <>
          <p>
            Hindi ibig sabihin na may serbisyo na agad kapag may naaprubahang
            budget. Kailangang ma-release ang pondo, gamitin ito ng ahensya, at
            gawin ang mismong trabaho. Kaya hindi sapat na itanong lang,
            “Magkano ang budget?” Kailangan ding tingnan kung ano ang aktwal na
            naipatupad at na-deliver.
          </p>
          <p>
            Ipapakita ng Modules 3 at 4 kung paano inaayos at ginagawa ang mga
            desisyon sa budget. Sa Module 5 naman, susundan mo ang approved
            spending hanggang sa service delivery. Tutulungan ka ng mga susunod
            na module na magbasa ng records, tumingin sa resulta, at makilahok
            sa proseso.
          </p>
        </>
      ),
    },
    {
      id: "check",
      title: "Check ang flow",
      shortTitle: "Self-check",
      type: "knowledge-check",
      content: (
        <KnowledgeCheck
          title="Balikan ang pangunahing flow"
          moduleId="mod-00"
          lessonId="00.2"
          items={[
            {
              prompt:
                "Alin ang tamang pagkakasunod-sunod sa course map na ipinakita sa lesson?",
              options: [
                "Serbisyo → kita → mga desisyon sa budget",
                "Kita → mga desisyon sa budget → serbisyo",
                "Mga desisyon sa budget → serbisyo → kita",
              ],
              correct: 1,
              explanation:
                "Nagsisimula ang flow sa perang pumapasok, dumadaan sa mga desisyon sa budget, at nauuwi sa mga serbisyong dapat maihatid sa publiko.",
              wrong: {
                0: "Serbisyo ang inaasahang resulta ng flow, hindi ang pinanggagalingan ng pera.",
                2: "Kailangang may estimate muna ng available na pera bago makagawa ng mga desisyon sa budget.",
              },
            },
            {
              prompt:
                "May program na nakalista sa approved budget. Ano lang ang masasabi mo mula rito?",
              options: [
                "Naihatid na ang serbisyo.",
                "Naaprubahan ang budget decision, pero kailangan pang tingnan kung naipatupad at na-deliver ang serbisyo.",
                "Eksaktong sapat ang nakolektang kita para sa program na iyon.",
              ],
              correct: 1,
              explanation:
                "Mahalagang step ang budget approval, pero kailangan pa ring gamitin ng ahensya ang pondo at gawin ang trabaho bago makarating ang serbisyo sa mga tao.",
              wrong: {
                0: "Hindi pa patunay ng implementation o service delivery ang isang approved budget item.",
                2: "Pinagsasama sa budget ang maraming source ng pera at maraming spending decision; hindi nakatapat ang isang program sa isang eksaktong collection amount.",
              },
            },
          ]}
        />
      ),
    },
    {
      id: "takeaway",
      title: "Laging pagsamahin ang dalawang tanong",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Sundan ang buong flow:{" "}
          <strong>kita → mga desisyon sa budget → serbisyo</strong>. Kapag
          tinanong mo kung saan galing ang pera, makikita mo kung anong pera ang
          available. Kapag tinanong mo kung saan ito napunta, masusundan mo ang
          pera mula sa desisyon hanggang sa aktwal na serbisyo.
        </KeyTakeaway>
      ),
    },
  ],
});
