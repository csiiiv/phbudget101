import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { defineLesson } from "@/lib/sections";

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Mabilisang screen bago ang malalim na pagsusuri",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Paano mo mabilisang siniscreen ang isang proposal bago ang malalim
            na pagsusuri?
          </p>
          <p>
            Gamitin ang tatlong tanong nang sunod-sunod: <em>Tama ba?</em> Ito
            ba ang tamang response? <em>Kaya ba?</em> Kaya bang gawin?{" "}
            <em>Susuportahan ba?</em> Makakabuo ba ng sapat na support para
            maaprubahan ito at mapanatili? Nag-oorganisa lang ng pagtatanong
            ang screen; hindi ito pamalit sa evidence.
          </p>
        </>
      ),
    },
    {
      id: "three-gates",
      title: "Ang tatlong-tanong na screen",
      shortTitle: "Tatlong gate",
      type: "interactive",
      content: (
        <div className="not-prose my-6 grid gap-4 sm:grid-cols-3">
          <section className="rounded-lg border bg-card p-5">
            <p className="text-xs font-semibold uppercase text-primary">
              Gate 1
            </p>
            <h3 className="mt-1 font-semibold">
              <em>Tama ba?</em>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Matibay ba ito sa teknikal, maipagtatanggol ba sa etika,
              tumutugon ba sa need, at binibigyang-pansin ba ang equity?
            </p>
          </section>
          <section className="rounded-lg border bg-card p-5">
            <p className="text-xs font-semibold uppercase text-primary">
              Gate 2
            </p>
            <h3 className="mt-1 font-semibold">
              <em>Kaya ba?</em>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Kaya bang i-finance, i-administer, i-procure, i-staff, at
              i-monitor ito ng mga institusyon sa mga makatotohanang kondisyon?
            </p>
          </section>
          <section className="rounded-lg border bg-card p-5">
            <p className="text-xs font-semibold uppercase text-primary">
              Gate 3
            </p>
            <h3 className="mt-1 font-semibold">
              <em>Susuportahan ba?</em>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Magbibigay ba ang mga decision-maker, implementer, at apektadong
              grupo ng sapat na support para maaprubahan ito at magpatuloy ang
              delivery?
            </p>
          </section>
          <p className="text-xs text-muted-foreground sm:col-span-3">
            Static na tatlong-gate visual. Ang sagot na “hindi” o “hindi sigurado”
            ay nagpapakita ng gawaing dapat gawin; hindi ito awtomatikong
            panghuling verdict.
          </p>
        </div>
      ),
    },
    {
      id: "transport-screen",
      title: "Apat na proposal sa harap ng screen",
      shortTitle: "Halimbawa",
      type: "example",
      content: (
        <>
          <p>
            <strong>Illustrative na policy analysis.</strong> Inilalapat ng
            guidebook ang screen sa apat na response sa mga problema sa urban
            mobility. Ipapakita ng mga buod na ito ang paraan, hindi isang
            unibersal na ranking.
          </p>
          <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
            <section className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">Mga network ng protected bike lane</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Malakas ang kaso sa need at feasibility; depende ang
                supportability sa design, enforcement, consultation, at mga
                tradeoff sa espasyo ng kalsada.
              </p>
            </section>
            <section className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">Pagpapalapad ng mga car lane</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Maaaring feasible ito sa administratibo at pamilyar sa pulitika,
                pero kailangan munang ipakita na makatarungan at epektibo itong
                tumutugon sa natukoy na mobility need.
              </p>
            </section>
            <section className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">Number coding</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Pwedeng ipatupad sa pamamagitan ng regulasyon, pero ang mga
                epekto, distribusyon, capacity para sa enforcement, at
                pag-aangkop ng mga mananakay ay nangangailangan ng evidence.
              </p>
            </section>
            <section className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">Mga elevated expressway</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Nangangailangan ito ng malapit na pagsusuri sa angkop ba ito sa
                problema, gastos, implementation capacity, pangmatagalang
                epekto, at support sa mga apektadong komunidad.
              </p>
            </section>
          </div>
        </>
      ),
    },
    {
      id: "use-the-screen",
      title: "Ang gate ay daan patungo sa evidence",
      shortTitle: "Gamitin nang tama",
      type: "concept",
      content: (
        <>
          <p>
            Huwag sagutin ang isang gate nang tiwala lang. Isulat ang claim, ang
            evidence, ang bahaging hindi pa tiyak, at ang susunod na tanong.
            Pwede ring mabigo sa administratibo ang isang teknikal na
            kaakit-akit na proposal; pwedeng hindi angkop sa need ang isang
            feasible na proposal; at pwede pa ring hindi equitable ang isang
            sikat na proposal.
          </p>
          <p>
            Pinapalalim ng pitong criteria mula sa nakaraang lesson ang screen.
            Tutulong ang adequacy, effectiveness, at equity sa pagsubok sa{" "}
            <em>Tama ba?</em>; ginagabayan ng efficiency at sustainability ang{" "}
            <em>Kaya ba?</em>; tutulong naman ang transparency at accountability
            sa pagsusuri kung paano mapapanatili at mare-review ang support at
            implementation.
          </p>
        </>
      ),
    },
    {
      id: "check",
      title: "Tingnan kung naintindihan mo",
      shortTitle: "Self-check",
      type: "knowledge-check",
      content: (
        <KnowledgeCheck
          title="Piliin ang susunod na gate"
          moduleId="mod-08"
          lessonId="08.3"
          items={[
            {
              prompt:
                "Tumutugon ang isang proposal sa tamang need, pero walang ahensyang may staff, sistema, o kayang gawin na delivery schedule. Aling gate ang pinakamahina?",
              options: ["Tama ba?", "Kaya ba?", "Susuportahan ba?"],
              correct: 1,
              explanation:
                "Sinusubok ng Kaya ba? ang administratibo, pinansyal, at operational na feasibility.",
              wrong: {
                0: "Sinasabi ng senaryo na angkop ang proposal sa need; ang nabanggit na gap ay sa delivery capacity.",
                2: "Maaaring mahalaga ang support, pero tungkol sa implementation capacity ang evidence na ibinigay.",
              },
            },
            {
              prompt:
                "Feasible at popular ang isang proposal, pero ipinakikita ng evidence na nilalampasan ng mga benepisyo nito ang mga taong may pinakamalaking need. Aling gate ang dapat balikan nang una?",
              options: ["Tama ba?", "Kaya ba?", "Susuportahan ba?"],
              correct: 0,
              explanation:
                "Tinatanong ng Tama ba? kung angkop, etikal, epektibo, at equitable ang response — hindi lang feasible o popular.",
              wrong: {
                1: "Feasible na ang proposal ayon sa paglalarawan; ang problema ay sa pagiging makatarungan at angkop.",
                2: "Hindi nalulutas ng kasikatan ang tanong kung equitable o teknikal na angkop ang proposal.",
              },
            },
          ]}
        />
      ),
    },
    {
      id: "takeaway",
      title: "I-screen muna, imbestigahin pagkatapos",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Itanong nang sunud-sunod ang <em>Tama ba? Kaya ba? Susuportahan
          ba?</em> Ituring ang bawat sagot bilang claim na nangangailangan ng
          evidence, itala ang bahaging hindi pa tiyak, at gamitin ang mahinang
          gate para makakita ng susunod na tanong — hindi para gumawa ng
          mabilisang verdict.
        </KeyTakeaway>
      ),
    },
  ],
});
