import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { CourseworkChooser } from "@/components/content/CourseworkChooser";
import { defineLesson } from "@/lib/sections";

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Saan ka magsisimula?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Ano na ang alam mo tungkol sa public budget, at gaano karaming
            detalye ang kailangan mo ngayon?
          </p>
          <p>
            Sagutin ang tatlong tanong sa lesson na ito para malaman kung mas
            bagay sa iyo ang mabilis na overview o ang buong course. Hindi ito
            graded at walang passing score. Guide lang ito para makapili ka ng
            magandang starting point.
          </p>
        </>
      ),
    },
    {
      id: "how-to-use",
      title: "Sagutin base sa alam mo ngayon",
      shortTitle: "Paano ito gamitin",
      type: "concept",
      content: (
        <>
          <p>
            Basahin ang bawat tanong at piliin ang sagot na pinakamalapit sa
            karanasan mo ngayon. Hindi mo kailangang mag-research. Self-check
            ito ng confidence at goals mo, hindi test kung para sa iyo ang
            course.
          </p>
          <p>
            Pansinin kung mas madalas ang sagot mong <strong>Oo</strong>,{" "}
            <strong>Hindi pa</strong>, o kung mas gusto mong magsimula sa{" "}
            <strong>basics</strong>. Gagamitin mo iyon sa susunod na section.
          </p>
        </>
      ),
    },
    {
      id: "self-check",
      title: "Tatlong tanong na self-check",
      shortTitle: "Self-check",
      type: "knowledge-check",
      content: (
        <ol className="not-prose grid gap-4">
          <li className="rounded-lg border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Tanong 1 sa 3
            </p>
            <h3 className="mt-1 font-semibold text-foreground">
              Kaya mo bang ipaliwanag kung bakit hindi pa patunay ng service
              delivery ang isang approved budget item?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Piliin: Oo, mostly / Hindi pa.
            </p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Tanong 2 sa 3
            </p>
            <h3 className="mt-1 font-semibold text-foreground">
              Kung may tanong ka tungkol sa isang program ng gobyerno, alam mo
              ba kung aling budget stage o document ang dapat tingnan muna?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Piliin: Oo, usually / Hindi pa.
            </p>
          </li>
          <li className="rounded-lg border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              Tanong 3 sa 3
            </p>
            <h3 className="mt-1 font-semibold text-foreground">
              Ano ang mas kailangan mo ngayon: maikling overview ng system, o
              step-by-step na discussion ng bawat topic?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Piliin: Maikling overview / Step-by-step na course.
            </p>
          </li>
        </ol>
      ),
    },
    {
      id: "recommendation",
      title: "Piliin ang rutang bagay sa sagot mo",
      shortTitle: "Iyong ruta",
      type: "concept",
      content: (
        <div className="not-prose grid gap-4 sm:grid-cols-2">
          <section className="rounded-lg border bg-card p-5">
            <h3 className="font-semibold text-foreground">
              Subukan ang mabilis na overview
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Piliin ito kung “Oo” ang sagot mo sa unang dalawang tanong at
              mabilis na refresher lang ang kailangan mo. Sakop nito ang Modules
              1, 3, 4, at 5. Nandiyan din ang Reference kung kailangan mo ng mas
              detalyadong paliwanag.
            </p>
          </section>
          <section className="rounded-lg border bg-card p-5">
            <h3 className="font-semibold text-foreground">
              Kunin ang buong course
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Piliin ito kung “Hindi pa” ang sagot mo sa una o pangalawang
              tanong, o kung gusto mong magsimula sa basics. Dadaan ang full
              route sa Modules 0–10 nang sunod-sunod.
            </p>
          </section>
          <p className="text-sm text-muted-foreground sm:col-span-2">
            Okay lang kung halo-halo ang sagot mo. Kapag hindi ka sigurado,
            pwede kang magsimula sa buong course at magpalit pagkatapos ng isang
            lesson. Pwede mo ring kunin muna ang mabilis na overview at balikan
            ang ibang module kapag kailangan.
          </p>
        </div>
      ),
    },
    {
      id: "takeaway",
      title: "Pwede kang magpalit anumang oras",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Piliin ang <strong>mabilis na overview</strong> kung alam mo na ang
          basics at kailangan mo lang ng refresher. Piliin ang{" "}
          <strong>buong course</strong> kung gusto mong magsimula sa basics.
          Starting point lang ito, kaya pwede kang magpalit anumang oras.
        </KeyTakeaway>
      ),
    },
    {
      id: "choose-path",
      title: "Piliin ang susunod mong ruta",
      shortTitle: "Pumili",
      type: "takeaway",
      content: (
        <>
          <p>
            Kapag ready ka na, markahan ang lesson bilang tapos sa ibaba.
            Pagkatapos, piliin ang rutang bagay sa iyo ngayon. Pwede kang
            bumalik dito o magpalit anumang oras.
          </p>
          <CourseworkChooser
            moduleId="mod-00"
            lessonId="00.3"
            options={[
              {
                to: "/modules/01-why-pfm-matters/lessons/01.1",
                label: "Simulan ang mabilis na overview",
                description: "Modules 1, 3, 4, at 5 · mga 1–2 oras",
              },
              {
                to: "/modules/01-why-pfm-matters/lessons/01.1",
                label: "Ituloy ang buong course",
                description: "Modules 0–9 · mga 3–4 oras (opsyonal ang capstone)",
              },
              {
                to: "/reference",
                label: "Mag-browse ayon sa topic",
                description: "Reference pages at lahat ng lessons",
              },
            ]}
          />
        </>
      ),
    },
  ],
});
