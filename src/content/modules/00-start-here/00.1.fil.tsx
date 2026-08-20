import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Ano ang magagawa mo pagkatapos?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Paano nagiging silid-aralan, serbisyong pangkalusugan, o kalsada
            ang pera ng publiko — at paano mo masusuri ang nangyari sa bawat
            hakbang?
          </p>
          <p>
            Ang PH Budget 101 ay nagbibigay sa iyo ng praktikal na mapa ng
            pampublikong badyet ng Pilipinas. Sa dulo, mas mahusay mo nang
            mahahanap ang tamang impormasyon tungkol sa badyet, masusundan ang
            pera mula sa desisyon ng pamahalaan hanggang sa serbisyo publiko,
            at makakapagtanong nang mas tiyak tungkol sa resulta.
          </p>
        </>
      ),
    },
    {
      id: "pfm-first",
      title: "Unawain muna ang sistema bago gamitin",
      shortTitle: "PFM muna",
      type: "concept",
      content: (
        <>
          <p>
            Nagsisimula ang kursong ito sa <Term id="pfm" expand />: ang
            sistema na ginagamit ng pamahalaan upang planuhin, gabayan, at
            kontrolin ang pera ng publiko upang maghatid ng serbisyo publiko.
            Kasama rito ang paglikom ng kita, pagpili ng prayoridad, pagpapahintulot
            sa paggastos, paglabas at paggamit ng pondo, at pagsusuri ng resulta.
          </p>
          <p>
            Layunin muna ang budget literacy. Kapag naintindihan mo kung paano
            gumagana ang sistema, maaari mong gamitin ang kaalamang iyon sa
            maraming papel: pamamahala ng programa, pagsusuri ng panukala,
            pag-uulat tungkol sa pampublikong paggastos, paglahok sa konsultasyon,
            o pagtatanong sa pamahalaan nang may direksyon.
          </p>
          <p>
            Sa buong kurso, panatilihing bukas ang dalawang tanong na gabay:{" "}
            <strong>
              Saan nagmumula ang pera ng pamahalaan, at saan ito pupunta?
            </strong>
          </p>
        </>
      ),
    },
    {
      id: "who-it-is-for",
      title: "Para kanino ang kursong ito",
      shortTitle: "Para sa iyo",
      type: "concept",
      content: (
        <>
          <p>
            Hindi mo kailangan ng background sa ekonomiya, accounting, batas, o
            pampublikong administrasyon. Idinisenyo ang kurso para sa sinumang
            nangangailangan ng malinaw na panimula sa pampublikong badyet, kabilang ang:
          </p>
          <ul>
            <li>mga mamamayang nais unawain ang isang serbisyo o proyektong publiko;</li>
            <li>
              mga estudyante, guro, at mamamahayag na nagtatayo ng budget literacy;
            </li>
            <li>
              mga kawani ng gobyerno na ikinokonekta ang kanilang trabaho sa mas malawak na sistema ng badyet; at
            </li>
            <li>mga taong naghahanda na lumahok sa desisyon tungkol sa badyet.</li>
          </ul>
          <p>
            Gumagamit ang mga aralin ng payak na wika at ipinapaliwanag ang mga
            teknikal na termino kapag unang lumilitaw. Maaari kang magpatuloy nang
            sunod-sunod o buksan ang araling sumasagot sa agarang tanong mo.
          </p>
        </>
      ),
    },
    {
      id: "three-paths",
      title: "Tatlong paraan sa pagdaan sa kurso",
      shortTitle: "Tatlong landas",
      type: "concept",
      content: (
        <div className="not-prose grid gap-4 sm:grid-cols-3">
          <section className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold text-foreground">Mabilis na overview</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Kunin ang Modules 1, 3, 4, at 5, pagkatapos gamitin ang sanggunian
              kapag kailangan mo ng depinisyon o dokumento. Maglaan ng mga 2–3 oras.
            </p>
          </section>
          <section className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold text-foreground">
              Buong PH Budget 101
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Kumpletuhin ang Modules 0–10 nang sunod-sunod, mula sa orientasyon
              hanggang sa follow-the-money capstone. Maglaan ng mga 10–12 oras.
            </p>
          </section>
          <section className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold text-foreground">
              Sanggunian ayon sa paksa
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Malayang pumunta sa isang aralin o pahina ng sanggunian kapag
              kailangan mo ng sagot. Idinisenyo ang bawat aralin upang makapag-iisa.
            </p>
          </section>
        </div>
      ),
    },
    {
      id: "paths-ahead",
      title: "Sa dulo mo pipiliin",
      shortTitle: "Susunod",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Tandaan ang tatlong rutang ito habang nagpapatuloy ka. Pagkatapos ng
          maikling self-check sa dulo ng module na ito, pipili ka ng isa na akma
          sa iyo — at maaari mo itong palitan anumang oras. Magpatuloy sa susunod
          na aralin upang makita ang buong kurso sa isang daloy.
        </KeyTakeaway>
      ),
    },
  ],
});
