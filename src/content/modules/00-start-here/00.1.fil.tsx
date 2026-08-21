import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Ano ang matututunan mo?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Paano nagiging silid-aralan, serbisyong pangkalusugan, o kalsada ang
            pera ng gobyerno — at paano mo malalaman kung ano ang nangyari sa
            bawat hakbang?
          </p>
          <p>
            Ang PH Budget 101 ay practical na guide sa budget ng gobyerno sa
            Pilipinas. Pagkatapos ng course, mas madali mong mahahanap ang
            tamang impormasyon tungkol sa budget, masusundan ang pera mula sa
            desisyon ng gobyerno hanggang sa serbisyong natatanggap ng mga tao,
            at mas malinaw kang makakapagtanong tungkol sa mga resulta.
          </p>
        </>
      ),
    },
    {
      id: "pfm-first",
      title: "Intindihin muna kung paano gumagana ang sistema",
      shortTitle: "PFM muna",
      type: "concept",
      content: (
        <>
          <p>
            Magsisimula tayo sa <Term id="pfm" expand />: ang sistema ng
            gobyerno para planuhin at pamahalaan ang pera ng publiko, para
            magamit ito sa mga serbisyo. Kasama rito ang pangongolekta ng kita,
            pagpili ng mga prayoridad, pag-apruba ng gastos, pag-release at
            paggamit ng pondo, at pagtingin sa mga resulta.
          </p>
          <p>
            Ang goal muna ay maintindihan mo ang budget. Kapag malinaw na sa iyo
            kung paano gumagana ang sistema, magagamit mo ito sa pag-manage ng
            program, pag-review ng proposal, pag-report tungkol sa paggastos ng
            gobyerno, pagsali sa consultation, o pagtatanong nang mas diretso at
            specific.
          </p>
          <p>
            Sa buong course, balikan lang ang dalawang tanong na ito:{" "}
            <strong>
              Saan galing ang pera ng gobyerno, at saan ito napupunta?
            </strong>
          </p>
        </>
      ),
    },
    {
      id: "who-it-is-for",
      title: "Para kanino ang course na ito?",
      shortTitle: "Para sa iyo",
      type: "concept",
      content: (
        <>
          <p>
            Hindi mo kailangang maging expert sa economics, accounting, batas, o
            public administration. Para ito sa sinumang gustong maintindihan ang
            budget ng gobyerno, kabilang ang:
          </p>
          <ul>
            <li>
              mga gustong maintindihan ang isang serbisyo o project ng gobyerno;
            </li>
            <li>
              mga estudyante, guro, at mamamahayag na nag-aaral tungkol sa
              budget;
            </li>
            <li>
              mga kawani ng gobyerno na gustong makita kung paano konektado ang
              trabaho nila sa mas malaking budget system; at
            </li>
            <li>
              mga naghahandang makilahok sa mga desisyon tungkol sa budget.
            </li>
          </ul>
          <p>
            Simple ang wika sa bawat lesson, at ipinapaliwanag ang technical
            terms sa unang gamit. Pwede mong sundan ang course nang sunod-sunod
            o dumiretso sa lesson na may sagot sa tanong mo.
          </p>
        </>
      ),
    },
    {
      id: "three-paths",
      title: "Piliin kung paano mo gustong mag-aral",
      shortTitle: "Mga option",
      type: "concept",
      content: (
        <div className="not-prose grid gap-4 sm:grid-cols-3">
          <section className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold text-foreground">
              Mabilis na overview
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Basahin ang Modules 1, 3, 4, at 5. Gamitin ang Reference kapag
              kailangan mo ng definition o document. Aabutin ito ng mga 1–2
              oras.
            </p>
          </section>
          <section className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold text-foreground">
              Buong PH Budget 101
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Tapusin ang Modules 0–9 nang sunod-sunod, mula sa intro hanggang
              sa pakikilahok. Aabutin ito ng mga 3–4 oras. Opsyonal ang
              follow-the-money capstone (Module 10).
            </p>
          </section>
          <section className="rounded-lg border bg-card p-4">
            <h3 className="font-semibold text-foreground">
              Browse ayon sa topic
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Pumunta diretso sa isang lesson o Reference page kapag may
              kailangan kang sagot. Maiintindihan ang bawat lesson kahit hindi
              mo muna basahin ang iba.
            </p>
          </section>
        </div>
      ),
    },
    {
      id: "paths-ahead",
      title: "Mamaya ka pipili ng ruta",
      shortTitle: "Susunod",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Tandaan muna ang tatlong option na ito. Pagkatapos ng maikling
          self-check sa dulo ng module, pipili ka ng rutang bagay sa iyo. Pwede
          ka namang magpalit anumang oras. Sa susunod na lesson, makikita mo ang
          daloy ng buong course.
        </KeyTakeaway>
      ),
    },
  ],
});
