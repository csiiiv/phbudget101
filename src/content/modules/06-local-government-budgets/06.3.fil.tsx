import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const DEVOLVED_AREAS = [
  {
    area: "Health at social services",
    examples:
      "Mga lokal na serbisyong pangkalusugan, social welfare services, at mga pasilidad na itinakda ng batas sa bawat antas ng LGU",
  },
  {
    area: "Agrikultura at kapaligiran",
    examples:
      "Agricultural extension, serbisyong pangkalikasan, at mga regulatory na gawaing nakatalaga sa lokal",
  },
  {
    area: "Lokal na infrastructure",
    examples:
      "Mga lokal na kalsada, tulay, water system, public market, at iba pang pasilidad na nakatalaga sa LGU",
  },
  {
    area: "Mga serbisyo sa komunidad",
    examples:
      "Lokal na impormasyon, tourism, pabahay, at iba pang serbisyo kung saan itinatakda ng Local Government Code ang responsibilidad",
  },
] as const;

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Bakit naging pambansang usapin ang mga lokal na budget?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <p className="text-lg text-muted-foreground">
          Binago ng Mandanas-Garcia ruling ang tax base na ginagamit sa
          pagkalkula ng share ng mga lokal na gobyerno. Ang karagdagang pondo
          ang nagbunyag ng praktikal na tanong sa likod ng devolution: aling
          antas ng gobyerno ang dapat maghatid ng bawat serbisyo, at kaya ba
          nitong gawin ito nang maayos?
        </p>
      ),
    },
    {
      id: "devolution",
      title: "Pinapalapit ng devolution ang responsibilidad sa mga tao",
      shortTitle: "Devolution",
      type: "concept",
      content: (
        <>
          <p>
            Ang <Term id="devolution" expand /> ay naglilipat ng mga function,
            serbisyo, pasilidad, at kaakibat na responsibilidad mula sa
            national government patungo sa mga lokal na gobyerno. Itinakda na
            noon pa man ng Local Government Code ang iba’t ibang minimum na
            serbisyo sa mga lalawigan, lungsod, bayan, at barangay.
          </p>
          <p>
            Hindi ibig sabihin na dapat sa pinakamaliit na LGU ang bawat
            gawain. Kung lokal lang ang pangunahing nakikinabang sa isang
            serbisyo, maaari itong ihatid nang lokal; pero ang serbisyong
            tumatawid sa mga hangganan, nangangailangan ng malalaking sistema,
            o nagpapamahagi ng resources ay maaaring kailanganin ng mas mataas
            na antas ng LGU, ng national government, o ng pinagsamang aksyon.
          </p>
          <p>
            Ang <Term id="fiscal-decentralization" expand /> naman ang panig na
            pondo ng kaayusang iyon: kailangan ng mga subnational na
            gobyerno ng sapat na revenue powers at transfers para matupad ang
            kanilang mga responsibilidad. Ang pagtatalaga ng function nang
            walang tao, sistema, o sustainable na pondo ay hindi nito
            pinabubuti ang serbisyo.
          </p>
        </>
      ),
    },
    {
      id: "mandanas-garcia",
      title: "Ano ang binago ng Mandanas-Garcia",
      shortTitle: "Ang ruling",
      type: "concept",
      content: (
        <>
          <p>
            Binibigyan ng Konstitusyon ang mga LGU ng just share sa{" "}
            <em>national taxes</em>. Noong 2018, hinatulan ng Supreme Court na
            unconstitutional ang paglilimita ng computation base sa national
            internal revenue taxes lamang. Naging final ang ruling noong 2019
            at ipinatupad ito sa mga allotment simula FY 2022.
          </p>
          <p>
            Ang resulta ay mas malawak na base para sa{" "}
            <Term id="national-tax-allotment" expand />, na dating tawag na
            Internal Revenue Allotment. Nadagdagan ang resources na
            inililipat sa pamamagitan ng formula, pero hindi nito pinayagan
            ang bawat LGU na pumili ng sarili nitong percentage, at hindi rin
            nito binura ang formula ng pamamahagi ng mga share sa mga antas
            ng LGU.
          </p>
          <p>
            Hindi rin ito mismo nag-imbento ng mga bagong lokal na function.
            Mula sa Local Government Code at iba pang batas nanggagaling ang
            mga pagtatalaga ng serbisyo. Dahil sa mas malaking allotment,
            naging mas posible sa pananalapi — at mas urgent — ang buong
            pagpapatupad ng mga pagtatalagang iyon.
          </p>
          <p className="text-sm text-muted-foreground">
            Karagdagang babasahin:{" "}
            <a href="https://lawphil.net/judjuris/juri2018/jul2018/gr_199802_2018.html">
              Supreme Court decision sa G.R. Nos. 199802 at 208488
            </a>{" "}
            at ang{" "}
            <a href="https://lawphil.net/judjuris/juri2019/apr2019/gr_199802_2019.html">
              2019 resolution nito
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: "functions-and-transition",
      title: "Hindi inaalis ng dagdag na resources ang gawaing transition",
      shortTitle: "Transition",
      type: "interactive",
      content: (
        <>
          <div className="not-prose my-8 space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Bago ang ruling
                </p>
                <h3 className="mt-2 font-semibold">
                  Mas makitid na computation base
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Kinalkula ang share ng LGU mula sa national internal revenue
                  taxes; hindi kasama sa pangkalahatang base ang ibang
                  national-tax collection.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Pagkatapos ng ruling
                </p>
                <h3 className="mt-2 font-semibold">
                  Lahat ng national taxes ang panimula
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Magsisimula ang computation mula sa national taxes nang mas
                  malawak, batay sa pagtrato ng Korte sa mga exclusion at
                  special shares.
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">
                Mga halimbawa ng mga devolved na serbisyo
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {DEVOLVED_AREAS.map((item) => (
                  <div key={item.area} className="rounded-md border p-4">
                    <p className="font-medium">{item.area}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.examples}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-primary bg-accent/40 p-5">
              <h3 className="font-semibold">Ang kasalukuyang transition</h3>
              <p className="mt-2 text-sm">
                Binago ng Executive Order No. 103 ng 2025 ang naunang
                full-devolution policy. Dahan-dahang papasok ang mga lungsod sa
                buong pagpapatupad pagsapit ng FY 2027, habang hanggang FY
                2028 naman ang mga lalawigan at bayan. Ayon sa order, dapat
                batay sa financial, technical, at administrative capacity ng
                LGU ang mga pagtatalaga.
              </p>
            </div>
          </div>
          <p>
            Inimapa ng <Term id="devolution-transition-plan" expand /> kung
            paano lilipat sa paglipas ng panahon ang mga function, staffing,
            assets, data, at suporta sa capacity. Mahalaga ang{" "}
            <Term id="absorptive-capacity" expand /> dahil kailangan ng LGU ng
            mga kwalipikadong tauhan, procurement at financial system,
            pasilidad, at oversight — hindi lang mas malaking allotment — para
            magawang maaasahang serbisyo ang pondo.
          </p>
          <p>
            Magkakaiba nang husto ang mga hamon sa transition ng bawat LGU.
            Nag-iiba ang revenue capacity, staffing market, heograpiya,
            kasalukuyang pasilidad, at demand para sa mga serbisyo. Nananatili
            sa national agencies ang mga role na standard-setting,
            technical-support, monitoring, at augmentation kung saan
            ibinibigay ito ng batas at patakaran.
          </p>
          <p className="text-sm text-muted-foreground">
            Source ng kasalukuyang patakaran:{" "}
            <a href="https://chief.lawphil.net/executive/execord/eo2025/eo_103_2025.html">
              Executive Order No. 103, series of 2025
            </a>
            , na nag-aamyenda ng{" "}
            <a href="https://lawphil.net/executive/execord/eo2021/eo_138_2021.html">
              Executive Order No. 138, series of 2021
            </a>
            .
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
          title="Subukan ang mga claim tungkol sa devolution"
          moduleId="mod-06"
          lessonId="06.3"
          items={[
            {
              prompt: "Ano ang direktang binago ng Mandanas-Garcia ruling?",
              options: [
                "Ang base na ginagamit sa pagkalkula ng just share ng mga LGU sa national taxes",
                "Bawat pagtatalaga ng serbisyo sa Local Government Code",
                "Ang kapangyarihan ng bawat LGU na pumili ng sarili nitong NTA percentage",
                "Ang national budget cycle",
              ],
              correct: 0,
              explanation:
                "Iniutos ng ruling na gamitin sa pagkalkula ng just share ang national taxes nang mas malawak, hindi lang national internal revenue taxes.",
              wrong: {
                1: "Mula sa Local Government Code at iba pang batas nanggagaling ang mga pagtatalaga ng serbisyo, hindi lang sa ruling tungkol sa computation.",
                2: "Sumusunod pa rin ang mga share ng LGU sa formula na itinakda ng batas.",
                3: "Hindi pinalitan ng ruling na ito ang national budget cycle.",
              },
            },
            {
              prompt:
                "May LGU na nakakatanggap ng mas maraming pondo pero kulang sa specialist staff, procurement capacity, at service facility. Ano ang ipinapakita nito?",
              options: [
                "Isang hamon sa transition at absorptive capacity",
                "Patunay na ang NTA ay lokal na buwis",
                "Awtomatikong pagkumpleto ng devolution",
                "Isang fiscal surplus",
              ],
              correct: 0,
              explanation:
                "Nakakatulong ang resources, pero kailangan din ng staffing, sistema, pasilidad, at oversight para ma-assume at maihatid ang isang function.",
              wrong: {
                1: "Ang NTA ay transfer mula sa national taxes, hindi buwis na ipinapataw ng LGU.",
                2: "Ang pagtanggap ng pondo ay hindi awtomatikong kinukumpleto ang operational transition.",
                3: "Walang paghahambing sa senaryo sa pagitan ng kabuuang kita at kabuuang gastos.",
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
          Pinalawak ng Mandanas-Garcia ang national-tax base na ginagamit sa
          allotment ng mga LGU. Ang devolution naman ang kaugnay pero
          magkaibang gawain: ang pagtatalaga at pagpapatibay ng responsibilidad
          para sa mga serbisyo. Mahalaga ang karagdagang resources, pero ang
          mga taong may kakayahan, sistema, pasilidad, at malinaw na role ng
          national at local government ang magtatakda kung babuti ba ang mga
          serbisyo.
        </KeyTakeaway>
      ),
    },
  ],
});
