import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const LISTENING_STEPS = [
  [
    "Magsimula sa humility",
    "Pag-isipan ang posisyon mo at alamin ang history ng komunidad bago magpanukala ng sagot.",
  ],
  [
    "Humingi ng payo sa pinagkakatiwalaang leaders",
    "Piliin ang angkop na sequence at format, kabilang kung may mga taong dapat magkita nang hiwalay.",
  ],
  [
    "Anyayahan ang direktang apektado",
    "Isama ang iba’t ibang sektor at tanungin kung anong accessibility, communication, o transport support ang kailangan nila.",
  ],
  [
    "Gumawa ng ligtas na session",
    "Gumamit ng pinagkakatiwalaang community facilitator para makapagbahagi ang mga participant nang hindi natatakot sa retalyasyon.",
  ],
  [
    "Magtanong mula sa karanasan papunta sa aksyon",
    "Tanungin kung ano ang naranasan nila, ano ang nakatulong, at paano pwedeng magtulungan ang grupo para paghusayin ang sitwasyon.",
  ],
  [
    "Iulat ang susunod na hakbang",
    "Sabihin sa mga participant kung ano ang mangyayari sa input nila at panatilihin silang updated pagkatapos ng session.",
  ],
] as const;

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Kaninong problema ang tinutukoy mo?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <p className="text-lg text-muted-foreground">
          Bago ka magsulat ng budget proposal, paano mo malalaman kung
          sinusolusyunan ba nito ang problemang aktwal na naranasan ng mga
          tao?
        </p>
      ),
    },
    {
      id: "listen-first",
      title: "Makinig muna bago magreseta",
      shortTitle: "Makinig muna",
      type: "concept",
      content: (
        <>
          <p>
            Dinadala ng community listening ang mga direktang apektado ng isyu
            sa pagtukoy, paglilinaw, at pag-frame nito. Ang mga{" "}
            <Term id="problem-owner">problem owners</Term> ay may first-hand
            na kaalaman sa service gap at direktang stake sa magbabago.
          </p>
          <p>
            Hindi lang kolekta ng reklamo ang goal. Ang magandang proseso ay
            bumubuo ng shared understanding ng problema, tumutukoy ng posibleng
            solusyon, at nagbibigay ng espasyo sa mga apektado para
            magrepresenta sa sarili nila. Ginagawa nitong contribution ang
            galit nang hindi binabalewala ang karanasan sa likod nito.
          </p>
        </>
      ),
    },
    {
      id: "six-steps",
      title: "Ang six-step listening method",
      shortTitle: "Anim na hakbang",
      type: "concept",
      content: (
        <>
          <p>
            Gamitin ang sequence na ito bilang static planning guide.
            Maghanda para sa magalang na session bago hilingin sa mga
            participant na magbahagi, tapos isara ang loop pagkatapos.
          </p>
          <ol className="not-prose my-8 grid gap-4 md:grid-cols-2">
            {LISTENING_STEPS.map(([title, body], index) => (
              <li key={title} className="rounded-lg border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Step {index + 1}
                </p>
                <h3 className="mt-1 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </>
      ),
    },
    {
      id: "health-example",
      title: "Listening exercise sa city health emergency",
      shortTitle: "Halimbawa",
      type: "example",
      content: (
        <>
          <p>
            <strong>Illustrative composite:</strong> Sa panahon ng city health
            emergency, iba-iba ang bahagi ng response na naranasan ng mga
            residente, health worker, maliliit na negosyo, at service provider.
            Hindi nagsisimula ang isang civic group sa pagdraft ng funding
            request. Nagho-hold sila ng ilang listening session, kasama ang
            pinagkakatiwalaang lokal na facilitator, at nagtatanong:
          </p>
          <ul>
            <li>Ano ang naranasan mo sa response ng lungsod?</li>
            <li>Ano ang gumagana at dapat panatilihin?</li>
            <li>
              Paano pwedeng paghusayin ito nang magkasama ng komunidad at
              city government?
            </li>
          </ul>
          <p>
            Nagiging people-centered agenda ang paulit-ulit na concerns:
            tinukoy na service gaps, proposed improvements, responsable na
            institusyon, at ebidensyang pwedeng tingnan ng lungsod. Mas matibay
            ang agenda kaysa listahan ng demands dahil tumulong ang mga
            apektado sa pag-frame ng problema at ng posibleng tugon.
          </p>
        </>
      ),
    },
    {
      id: "practice-and-check",
      title: "Mag-practice, tapos check ang pag-intindi mo",
      shortTitle: "Practice at check",
      type: "knowledge-check",
      content: (
        <>
          <div className="not-prose mb-8 rounded-lg border bg-muted/40 p-5">
            <h3 className="font-semibold">
              Gumawa ng tatlong listening question
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Pumili ng isang serbisyong pampubliko. Sumulat ng isang tanong
              tungkol sa karanasan ng mga tao, isa tungkol sa kung ano ang
              kasalukuyang nakatulong, at isa tungkol sa paano pwedeng
              paghusayin nang magkasama ng mga tao at gobyerno ang serbisyo.
              Panatilihing open-ended at neutral ang bawat tanong.
            </p>
          </div>
          <KnowledgeCheck
            title="Planuhin ang responsableng listening exercise"
            moduleId="mod-09"
            lessonId="09.2"
            items={[
              {
                prompt:
                  "Napili na ng team ang preferred solution nila. Inaanyayahan nila ang mga residente para i-rank lang ang tatlong bersyon ng solusyon na iyon. Ano ang pangunahing kahinaan?",
                options: [
                  "Masyadong maaga ang session sa budget cycle.",
                  "Tinitest ng team ang sagot nila sa halip na hayaang tumulong ang mga apektado sa pagtukoy ng problema.",
                  "Hindi dapat kailanman pag-usapan ng mga residente ang posibleng solusyon.",
                  "Mga opisyal lang ng gobyerno ang pwedeng mag-facilitate ng listening session.",
                ],
                correct: 1,
                explanation:
                  "Nagsisimula ang community listening sa karanasan at sa pagtukoy ng problema. Pwedeng matakpan ng preselected na sagot ang pangangailangan o alternatibong hindi pa naisip ng team.",
                wrong: {
                  0: "Nasa method ang kahinaan, hindi necessarily sa timing.",
                  2: "Pwede pang pag-usapan ng mga participant ang solusyon pagkatapos linawin ang problema.",
                  3: "Nagrerekomenda ang method ng pinagkakatiwalaang community facilitator, hindi ng rule na officials lang.",
                },
              },
              {
                prompt:
                  "Pagkatapos ng listening session, ginawang proposal ng organizers ang notes pero hindi na sila muling nakipag-ugnayan sa mga participant. Aling hakbang ang nakaligtaan nila?",
                options: [
                  "Pag-isipan ang posisyon nila.",
                  "Anyayahan ang direktang apektado.",
                  "Magtanong tungkol sa karanasan.",
                  "I-update ang komunidad tungkol sa susunod na hakbang.",
                ],
                correct: 3,
                explanation:
                  "Ang pagsasara ng loop ay nangangahulugang ipaliwanag kung ano ang mangyayari sa input at panatilihing updated ang mga participant.",
                wrong: {
                  0: "Bago ang session nangyayari ang reflection.",
                  1: "Dumalo ang mga participant, kaya hindi invitation ang missing step.",
                  2: "Ipinapakita ng notes na may mga tanong; ang follow-up ang kulang.",
                },
              },
            ]}
          />
        </>
      ),
    },
    {
      id: "takeaway",
      title: "Mahalagang tandaan",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Simulan ang pakikilahok sa budget sa pakikinig sa mga direktang
          apektado. Maghanda nang may respeto, magtanong nang open tungkol sa
          karanasan at pagpapahusay, bumuo ng shared problem framing, at
          iulat kung ano ang susunod na mangyayari.
        </KeyTakeaway>
      ),
    },
  ],
});
