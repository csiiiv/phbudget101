import { Link } from "react-router-dom";

import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { defineLesson } from "@/lib/sections";

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Dalawang tanong ang nag-oorganisa sa kurso",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Saan nagmumula ang pera ng pamahalaan, at saan ito pupunta?
          </p>
          <p>
            Ang dalawang tanong na iyon ang nag-uugnay sa bawat module sa PH
            Budget 101. Ang kumpletong sagot ay nagsasangkot ng maraming
            institusyon, dokumento, at hakbang. Sa ngayon, gamitin ang isang
            simpleng daloy bilang mapa mo: pumapasok ang kita, dinidirekta ito
            ng mga desisyon sa badyet, at inaasahang lumalabas ang serbisyo publiko.
          </p>
        </>
      ),
    },
    {
      id: "headline-flow",
      title: "Ang buong kurso sa isang daloy",
      shortTitle: "Ang daloy",
      type: "interactive",
      content: (
        <div
          className="not-prose my-6"
          aria-label="Ang kita ay dumadaan sa mga desisyon sa badyet patungo sa serbisyo publiko"
        >
          <ol className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-stretch">
            <li className="rounded-lg border bg-card p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Hakbang 1
              </p>
              <h3 className="mt-1 font-semibold text-foreground">Papasok ang kita</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Kinokolekta ng pamahalaan ang mga mapagkukunan at, kung kinakailangan, umuutang.
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
                Hakbang 2
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Mga desisyon sa badyet
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Inihahain, inaaprubahan, at isinasagawa ng pamahalaan ang mga pagpipilian sa paggastos.
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
                Hakbang 3
              </p>
              <h3 className="mt-1 font-semibold text-foreground">
                Lumalabas ang serbisyo
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Ginagawang trabaho, kalakal, at serbisyo ng mga ahensya ang awtorisadong pondo.
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
            Static na mapa ng kurso. Ang interactive na concept map ay nakaplano para sa susunod na yugto.
          </p>
        </div>
      ),
    },
    {
      id: "money-in",
      title: "Una mong tanungin: anong mapagkukunan ang available?",
      shortTitle: "Papasok ang pera",
      type: "concept",
      content: (
        <>
          <p>
            Nagsisimula ang bahagi ng pera papasok sa kita. Isa ang buwis na
            mapagkukunan, ngunit kasama rin ang bayad, iba pang kita ng
            pamahalaan, grants, at pag-utang. Mahalaga ang mga pagtatantya dahil
            hinuhubog ng inaasahang mapagkukunan ang maaaring planuhin nang
            responsable na gastusin.
          </p>
          <p>
            Tinitingnan ng Module 2 ang mga mapagkukunang iyon at ang mga limitasyon
            na inilalagay nila sa pagpipilian sa badyet. Sa puntong ito, tandaan
            lamang ang headline: nagsisimula ang mga desisyon sa paggastos sa
            tanaw ng available na mapagkukunan.
          </p>
        </>
      ),
    },
    {
      id: "money-out",
      title: "Susunod na tanungin: ano ang nangyari pagkatapos ng pagpili?",
      shortTitle: "Lumalabas ang pera",
      type: "concept",
      content: (
        <>
          <p>
            Ang desisyon sa badyet ay hindi mismo ang naghahatid ng serbisyo.
            Kailangang mairekord at maaprubahan ang pagpili, kailangang gumalaw
            ang pondo, at kailangang gawin ng ahensya ang trabaho. Kaya mas malaki
            ang pangalawang tanong kaysa sa “Ano ang nakalaan sa badyet?” Tinatanong
            din nito kung ano ang naisagawa at naihatid.
          </p>
          <p>
            Ipinapakita ng Modules 3 at 4 kung paano inoorganisa at ginagawa ang
            mga desisyon. Sinusundan ng Module 5 ang awtorisadong paggastos
            patungo sa paghahatid ng serbisyo. Sa mga susunod na module, matutulungan
            kang basahin ang mga rekord, suriin ang resulta, at lumahok.
          </p>
        </>
      ),
    },
    {
      id: "check",
      title: "Suriin ang daloy",
      shortTitle: "Suriin",
      type: "knowledge-check",
      content: (
        <KnowledgeCheck
          title="Ilagay ang mga pangunahing ideya"
          moduleId="mod-00"
          lessonId="00.2"
          items={[
            {
              prompt:
                "Aling pagkakasunod-sunod ang mapa ng kurso na ipinakilala sa araling ito?",
              options: [
                "Serbisyo → kita → mga desisyon sa badyet",
                "Kita → mga desisyon sa badyet → serbisyo",
                "Mga desisyon sa badyet → serbisyo → kita",
              ],
              correct: 1,
              explanation:
                "Nagsisimula ang daloy ng orientasyon sa papasok na mapagkukunan, dumadaan sa mga desisyon sa badyet, at tumuturo sa serbisyo publiko.",
              wrong: {
                0: "Ang serbisyo ang inaasahang resulta ng daloy, hindi ang panimulang mapagkukunan.",
                2: "Umaasa ang mga pagpipilian sa badyet sa pagtatantya ng available na mapagkukunan, kaya nauuna ang kita bago ang mga desisyon sa mapang ito.",
              },
            },
            {
              prompt:
                "May programang lumabas sa naaprubahang badyet. Ano ang masasabi mo mula sa katotohanang iyon lamang?",
              options: [
                "Naihatid na ang serbisyo publiko.",
                "May desisyon sa badyet, ngunit kailangan pa ring suriin ang implementasyon at paghahatid.",
                "Nakolekta ng pamahalaan ang eksaktong sapat na kita para sa programang iyon.",
              ],
              correct: 1,
              explanation:
                "Mahalaga ang awtorisasyon bilang punto ng desisyon, ngunit kailangan pa ring gamitin ng mga ahensya ang pondo at gawin ang trabaho bago makarating ang serbisyo sa mga tao.",
              wrong: {
                0: "Ang naaprubahang item ay hindi patunay ng implementasyon o paghahatid ng serbisyo.",
                2: "Pinagsasama ng badyet ang maraming mapagkukunan at pagpipilian; ang isang programa ay hindi katumbas ng pantay at nakalaang halaga ng koleksyon.",
              },
            },
          ]}
        />
      ),
    },
    {
      id: "takeaway",
      title: "Panatilihing magkasama ang dalawang tanong",
      shortTitle: "Punto",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Sundin ang kumpletong headline flow:{" "}
          <strong>kita papasok → mga desisyon sa badyet → serbisyo palabas</strong>.
          Ang tanong kung saan nagmumula ang pera ay tungkol sa mapagkukunan;
          ang tanong kung saan pupunta ay magdadala sa iyo mula sa pagpipilian
          hanggang sa paghahatid.
        </KeyTakeaway>
      ),
    },
  ],
});
