import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { CourseworkChooser } from "@/components/content/CourseworkChooser";
import { defineLesson } from "@/lib/sections";

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Humanap ng kapaki-pakinabang na panimulang punto",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Ano na ang alam mo tungkol sa pampublikong badyet, at gaano karaming
            detalye ang makakatulong sa iyo ngayon?
          </p>
          <p>
            Gamitin ang tatlong tanong sa araling ito upang pumili sa pagitan ng
            mabilis na overview at buong kurso. Hindi ka mina-markahan, at walang
            kinakailangang score. Ang mga tanong ay tumutulong lamang na mapansin
            mo kung aling ruta ang mas kapaki-pakinabang ngayon.
          </p>
        </>
      ),
    },
    {
      id: "how-to-use",
      title: "Sumagot para sa sarili mo",
      shortTitle: "Paano gamitin",
      type: "concept",
      content: (
        <>
          <p>
            Basahin ang bawat tanong at piliin ang sagot na pinakamalapit sa
            kasalukuyang karanasan mo. Huwag maghanap ng sagot. Ito ay self-check
            ng kumpiyansa at layunin, hindi pagsusulit kung karapat-dapat ka sa kurso.
          </p>
          <p>
            Tandaan kung mas nakikiling ka sa <strong>Oo</strong>,{" "}
            <strong>Hindi pa</strong>, o <strong>Gusto ko ang pundasyon</strong>.
            Gagamitin mo ang pattern na iyon sa susunod na istasyon.
          </p>
        </>
      ),
    },
    {
      id: "self-check",
      title: "Self-check na may tatlong tanong",
      shortTitle: "Self-check",
      type: "knowledge-check",
      content: (
        <ol className="not-prose grid gap-4">
          <li className="rounded-lg border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Tanong 1 sa 3
            </p>
            <h3 className="mt-1 font-semibold text-foreground">
              Maipapaliwanag mo ba kung bakit ang naaprubahang item sa badyet ay
              hindi pa patunay na naihatid ang serbisyo publiko?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Piliin para sa sarili mo: Oo, halos / Hindi pa.
            </p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Tanong 2 sa 3
            </p>
            <h3 className="mt-1 font-semibold text-foreground">
              Kung may tanong ka tungkol sa isang programang pangpamahalaan, alam
              mo ba kung aling yugto o dokumento ng badyet ang unang susuriin?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Piliin para sa sarili mo: Oo, kadalasan / Hindi pa.
            </p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Tanong 3 sa 3
            </p>
            <h3 className="mt-1 font-semibold text-foreground">
              Ano ang mas makakatulong: maikling mapa ng pangunahing sistema, o
              hakbang-hakbang na pundasyon na sumasaklaw sa bawat paksa?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Piliin para sa sarili mo: Maikling mapa / Hakbang-hakbang na pundasyon.
            </p>
          </li>
        </ol>
      ),
    },
    {
      id: "recommendation",
      title: "Itugma ang mga sagot mo sa isang landas",
      shortTitle: "Iyong landas",
      type: "concept",
      content: (
        <div className="not-prose grid gap-4 sm:grid-cols-2">
          <section className="rounded-lg border bg-card p-5">
            <h3 className="font-semibold text-foreground">
              Subukan ang mabilis na overview
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Piliin ang landas na ito kung sumagot ka ng “Oo” sa unang dalawang
              tanong at gusto mo ng maikling mapa. Saklaw nito ang Modules 1, 3,
              4, at 5, na may sanggunian kapag kailangan mo ng mas maraming detalye.
            </p>
          </section>
          <section className="rounded-lg border bg-card p-5">
            <h3 className="font-semibold text-foreground">
              Kunin ang buong kurso
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Piliin ang landas na ito kung ang alinman sa unang dalawang sagot
              ay “Hindi pa,” o kung gusto mo ng hakbang-hakbang na pundasyon.
              Sumusunod ang buong ruta sa Modules 0–10 nang sunod-sunod.
            </p>
          </section>
          <p className="text-sm text-muted-foreground sm:col-span-2">
            Normal ang magkahalong sagot. Kung hindi ka sigurado, magsimula sa
            buong landas at lumipat pagkatapos ng isang aralin, o kunin ang mabilis
            na overview at bumalik sa anumang nilaktawang module kapag may tanong.
          </p>
        </div>
      ),
    },
    {
      id: "takeaway",
      title: "Maaaring magbago ang panimulang punto mo",
      shortTitle: "Punto",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Piliin ang <strong>mabilis na overview</strong> kung alam mo na ang
          mga batayan at kailangan mo ng pangunahing mapa. Piliin ang{" "}
          <strong>buong kurso</strong> kung gusto mo ng pundasyon o may nakitang
          puwang. Walang permanenteng pagpili.
        </KeyTakeaway>
      ),
    },
    {
      id: "choose-path",
      title: "Piliin ang coursework mo",
      shortTitle: "Pumili",
      type: "takeaway",
      content: (
        <>
          <p>
            Kapag handa ka na, markahan ang araling ito bilang tapos sa ibaba.
            Mabubuksan ang daan palabas ng Magsimula Rito kasabay nito — piliin
            ang ruta na akma sa iyo ngayon. Maaari kang bumalik o lumipat anumang oras.
          </p>
          <CourseworkChooser
            moduleId="mod-00"
            lessonId="00.3"
            options={[
              {
                to: "/modules/01-why-pfm-matters/lessons/01.1",
                label: "Simulan ang mabilis na overview",
                description: "Modules 1, 3, 4, at 5 · mga 2–3 oras",
              },
              {
                to: "/modules/01-why-pfm-matters/lessons/01.1",
                label: "Magpatuloy sa buong kurso",
                description: "Modules 0–10 · mga 10–12 oras",
              },
              {
                to: "/reference",
                label: "Mag-browse ayon sa paksa",
                description: "Mga pahina ng sanggunian at bawat aralin",
              },
            ]}
          />
        </>
      ),
    },
  ],
});
