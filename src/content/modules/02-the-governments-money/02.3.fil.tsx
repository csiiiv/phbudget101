import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";
import { useState } from "react";
import { cn } from "@/lib/utils";

const FORECAST_NORMAL = 100;
const FORECAST_SHOCK = 90;
const COMMITTED = 75;

const PROPOSALS = [
  { name: "Kagamitan para sa rural clinic", cost: 12 },
  { name: "Pag-aayos ng drainage laban sa baha", cost: 10 },
  { name: "Karagdagang mga silid-aralan", cost: 15 },
] as const;

/**
 * Light interactive for the fiscal-space station: pick proposals under a
 * stated limit. No simulation, just checkboxes and arithmetic — the Phase 3
 * budget-balancer remains the eventual home for the full version.
 */
function ProposalPicker() {
  const [shocked, setShocked] = useState(false);
  const [picked, setPicked] = useState<number[]>([]);

  const space = shocked ? FORECAST_SHOCK - COMMITTED : FORECAST_NORMAL - COMMITTED;
  const total = picked.reduce((sum, i) => sum + PROPOSALS[i].cost, 0);
  const over = total > space;

  const toggle = (i: number) => {
    setPicked((prev) => (prev.includes(i) ? prev.filter((p) => p !== i) : [...prev, i]));
  };

  return (
    <div className="not-prose space-y-4 rounded-lg border bg-card p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold">Revenue shock</h3>
        <button
          type="button"
          onClick={() => setShocked((s) => !s)}
          className="rounded-full border px-3 py-1 text-xs font-medium transition-colors hover:bg-secondary"
          aria-pressed={shocked}
        >
          {shocked ? "Forecast: 90 units" : "Forecast: 100 units"}
        </button>
      </div>
      <p className="text-sm text-muted-foreground">
        I-toggle ang shock para makitang bumaba ang forecast sa 90 habang nasa 75
        pa rin ang mga commitment. Bumababa rin ang fiscal space mula 25 sa 15
        units.
      </p>
      <div className="flex h-10 overflow-hidden rounded-md text-xs font-semibold">
        <div className="flex basis-3/4 items-center justify-center bg-primary text-primary-foreground">
          Committed: 75
        </div>
        <div className="flex basis-1/4 items-center justify-center bg-accent text-accent-foreground">
          Space: {space}
        </div>
      </div>
      <ul className="space-y-2">
        {PROPOSALS.map((proposal, i) => (
          <li key={proposal.name}>
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-pressed={picked.includes(i)}
              className={cn(
                "flex w-full items-center justify-between rounded-md border px-3 py-2 text-left text-sm transition-colors",
                picked.includes(i)
                  ? "border-primary bg-accent/50 font-medium"
                  : "hover:bg-secondary"
              )}
            >
              <span>{proposal.name}</span>
              <span className="tabular-nums">{proposal.cost} units</span>
            </button>
          </li>
        ))}
      </ul>
      <p
        role="status"
        className={cn("text-sm font-medium", over ? "text-destructive" : "text-muted-foreground")}
      >
        Pinili: {total} sa {space} units
        {over && " — lampas sa limit. May dapat ipagpaliban, bawasan, o pondohan nang iba."}
        {!over && total > 0 && " — kasya sa limit."}
      </p>
      <p className="text-xs text-muted-foreground">
        Pwede mong ipagpaliban ang isang proposal, bawasan ang sakop nito,
        maghanap ng bagong pinapayagan ng batas na pagmumulan ng kita, o
        bigyang-katwiran ang karagdagang paghiram — pero wala rito ang
        nagpapawala sa gastos.
      </p>
    </div>
  );
}

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Ang budget ay nagsisimula sa estimate",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Kung urgent ang isang pangangailangan ng publiko, bakit hindi na lang
            agad pondohan ng gobyerno? Dahil ang spending plan ay nagsisimula sa
            estimate ng mga resources na malamang magiging available — hindi sa
            isang walang-hanggang kaban.
          </p>
          <p>
            Ang <Term id="revenue-forecast" expand /> ay nagtataya ng mga
            koleksyon sa hinaharap gamit ang mga assumption tungkol sa ekonomiya,
            mga patakaran sa buwis, presyo, kalakalan, at collection performance.
            Pwedeng baguhin ang forecast kapag nagbago ang mga assumption na ito.
          </p>
        </>
      ),
    },
    {
      id: "gaps-and-debt",
      title: "Kapag hindi tugma ang kita at gastos",
      shortTitle: "Ang agwat",
      type: "concept",
      content: (
        <>
          <p>
            Isipin ang budget ng isang sambahayan. Kapag mas malaki ang nagastos
            ng pamilya kaysa sa kita nito ngayong buwan, kakailanganin nilang
            umutang para takpan ang pagitan — kakulangan ito. Kapag mas malaki
            naman ang kita kaysa sa gastos, may matitira. Ganoon din ang
            pananalapi ng gobyerno, pambansang sukat lang: kapag mas malaki ang
            expenditure kaysa sa kita, may{" "}
            <Term id="fiscal-deficit" expand /> ang gobyerno. Pinopondohan ng
            paghiram ang agwat. Kapag mas malaki ang kita kaysa sa expenditure,
            may <Term id="fiscal-surplus" expand /> naman ang gobyerno.
          </p>
          <p>
            Kayang bayaran ang utang na isang buwan lang; pero kapag may utang
            buwan-buwan, bumabalon ito. Dagdag na kailangang pondohan ang bawat
            deficit sa panahong iyon, at ang paulit-ulit na paghiram ay
            nagdaragdag sa <Term id="public-debt" expand /> — ang mga obligasyong
            kailangan pang bayaran ng gobyerno. Nakakatulong ang utang sa
            pagpapamahagi ng gastos ng mga matagalang investment o sa pagtugon sa
            mga shock, pero nakikipagkompetensiya ang prinsipal at interes sa
            ibang gastusin sa hinaharap — parang sambahayan na kinakain ng bayad
            sa utang ang budget para sa groceries.
          </p>
          <p>
            Matapos mabayaran ang renta at utility bills, ang natitira ang
            malayang magagamit ng sambahayan. Ang natitirang puwang na iyon ang
            pang-araw-araw na katumbas ng{" "}
            <Term id="fiscal-space" expand />: puwang sa pananalapi ng publiko
            para sa mga karagdagang prayoridad pagkatapos isaalang-alang ang
            inaasahang resources, mga limitasyon sa deficit, mga obligasyon sa
            utang, at ang halaga ng mga patuloy na commitment. Kahit maganda ang
            isang proposal, pwede pa rin itong lumampas sa puwang na iyon —
            gusto ng sambahayan ng bagong refrigerator, pero kung ₱2,000 lang ang
            natira, maghihintay muna ang refrigerator.
          </p>
        </>
      ),
    },
    {
      id: "authority-and-cash",
      title: "Ang pahintulot na gumastos ay hindi pera sa kamay",
      shortTitle: "Authority vs cash",
      type: "concept",
      content: (
        <>
          <p>
            Ang isang <Term id="appropriation" expand /> ay nagbibigay ng legal
            na kapangyarihan na gumastos para sa isang nakasaad na layunin. Hindi
            ito garantiya na nakalagay nang buo sa bank account ng ahensya ang
            buong awtorisadong halaga sa isang pagkakataon.
          </p>
          <p>
            Depende ang availability ng cash sa aktwal na mga koleksyon,
            paghiram, timing ng mga bayaran, at cash program ng gobyerno. Kaya
            maaaring i-schedule ang mga release sa buong taon. Kapag dumating ang
            kita nang mas huli kaysa inaasahan, maaaring ayusin ng mga cash
            manager ang timing kahit nananatili ang legal na kapangyarihan.
          </p>
          <div className="not-prose my-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Tanong ng budget authority</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Pwede bang mag-commit ang ahensya ng public funds para sa layuning
                ito, sa loob ng limitasyong ito?
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Tanong ng available cash</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Kaya bang bayaran ng gobyerno ito sa puntong ito ng cash program?
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "static-balancer",
      title: "Static na aktibidad: pumili sa loob ng limitasyon",
      shortTitle: "Subukan ang limit",
      type: "interactive",
      content: (
        <>
          <p>
            <strong>
              Illustrative na halimbawa. Pinapasimple ang mga halaga bilang
              resource units — hindi ito piso o public records.
            </strong>
          </p>
          <p>
            Ang forecast ay 100 units. Ang mga patuloy na serbisyo at kasalukuyang
            mga commitment ay nangangailangan ng 75, kaya 25 units ng fiscal
            space ang natitira. Ang tatlong proposal sa ibaba ay 37 lahat, kaya
            hindi sila lahat kasya. Pumili ng kombinasyon at makitang kumakagat
            ang limitasyon.
          </p>
          <ProposalPicker />
          <p className="text-sm text-muted-foreground">
            Light version lang ito ng Phase 3 budget-balancer simulation; ang
            buong simulation ay nasa Phase 3 backlog pa rin.
          </p>
        </>
      ),
    },
    {
      id: "check",
      title: "Check ang intindi mo",
      shortTitle: "Self-check",
      type: "knowledge-check",
      content: (
        <KnowledgeCheck
          title="Mag-isip tungkol sa limitasyon"
          moduleId="mod-02"
          lessonId="02.3"
          items={[
            {
              prompt:
                "Mas malaki ang planned expenditure kaysa sa forecast na kita. Ano ang tawag sa agwat?",
              options: [
                "Fiscal deficit",
                "Fiscal surplus",
                "Available cash",
                "Appropriation",
              ],
              correct: 0,
              explanation:
                "Ang fiscal deficit ay ang kakulangan kapag mas malaki ang expenditure kaysa sa kita; kailangan itong pondohan, karaniwang sa pamamagitan ng paghiram.",
              wrong: {
                1: "May surplus kapag mas malaki ang kita kaysa sa expenditure.",
                2: "Ang availability ng cash ay tungkol sa timing ng bayaran, hindi sa aritmetikong agwat.",
                3: "Ang appropriation ay legal na kapangyarihang gumastos, hindi ang balanse ng kita at expenditure.",
              },
            },
            {
              prompt:
                "May appropriation na ang isang program, pero naka-schedule ang bayaran para sa mas huling cash release. Alin ang pinakatamang pahayag?",
              options: [
                "May legal na kapangyarihan na ang program, pero magkahiwalay ang cash timing.",
                "Awtomatikong kinansela ang appropriation.",
                "Dapat mas malaki na ngayon ang kita kaysa sa lahat ng expenditure.",
                "Grant ang program.",
              ],
              correct: 0,
              explanation:
                "Sinasagot ng appropriation kung awtorisado ang gastos; sinasagot ng cash program kung kailan magiging available ang kakayahang magbayad.",
              wrong: {
                1: "Ang pagkaantala ng cash schedule ay hindi sa sarili nito nagkakansela ng legal na kapangyarihan.",
                2: "Pwedeng magka-deficit ang gobyerno, kaya hindi sumusunod ang konklusyong ito.",
                3: "Walang nabanggit sa senaryo tungkol sa pondong natanggap nang hindi na kailangang bayaran.",
              },
            },
            {
              prompt:
                "Bumaba ang revenue forecast pero walang nabago sa mga patuloy na commitment. Ano ang karaniwang nangyayari sa fiscal space?",
              options: [
                "Lumiliit ito.",
                "Awtomatiko itong lumalawak.",
                "Ginagawa itong kapareho ng public debt.",
                "Nawawala nito ang lahat ng trade-off.",
              ],
              correct: 0,
              explanation:
                "Kapag mas kaunting inaasahang resources at pareho pa rin ang mga naunang commitment, mas kaunting puwang ang natitira para sa mga karagdagang prayoridad.",
              wrong: {
                1: "Hindi lumilikha ng mas maraming puwang ang mas mababang inaasahang kita kapag pareho pa rin ang mga commitment.",
                2: "Ang fiscal space ay puwang para sa mga pagpili; ang utang ay mga obligasyong hindi pa nababayaran.",
                3: "Mas mahalaga ang mga trade-off kapag mas mahigpit ang limitasyon — hindi mas maliit.",
              },
            },
          ]}
        />
      ),
    },
    {
      id: "takeaway",
      title: "Pangunahing tandaan",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Ang mga revenue forecast ang nagtatakda ng planning baseline.
          Kailangang pondohan ang mga deficit, lumilikha ang utang ng mga claim
          sa hinaharap, at pumapaliit ng fiscal space ang mga patuloy na
          commitment. Kahit legal nang awtorisado ang gastos, ang available cash
          ang nagpapasya kung kailan pwedeng magbayad.
        </KeyTakeaway>
      ),
    },
  ],
});
