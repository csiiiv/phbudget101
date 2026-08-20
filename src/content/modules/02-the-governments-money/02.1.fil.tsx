import { Figure } from "@/components/content/Figure";
import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { getFigure } from "@/data/figures";
import { defineLesson } from "@/lib/sections";

const MIX = [
  {
    id: "tax-share",
    label: "Buwis (tax revenue)",
    color: "bg-primary text-primary-foreground",
  },
  {
    id: "non-tax-share",
    label: "Non-tax revenue",
    color: "bg-accent text-accent-foreground",
  },
] as const;

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Kapag gumastos ang gobyerno ng isang piso",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <p className="text-lg text-muted-foreground">
          Kapag gumastos ang national government ng isang piso, saan ito galing?
          Malamang mula sa buwis. May bahagi ring galing sa iba pang kita, at
          kapag hindi sapat ang mga ito, pwedeng mangutang ang gobyerno para
          mapunan ang kakulangan.
        </p>
      ),
    },
    {
      id: "sources",
      title: "Limang pinagmumulan ng pera ng gobyerno",
      shortTitle: "Mga pinagmumulan",
      type: "concept",
      content: (
        <>
          <p>
            Ang unang pagkakaiba: perang kinita o tinanggap ng gobyerno, at
            perang hiniram nito.
          </p>
          <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border bg-card p-5 sm:col-span-2">
              <h3 className="font-semibold">Buwis</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ang <Term id="tax-revenue" expand /> ay binubuo ng income tax,
                value-added tax, customs duties, at{" "}
                <Term id="excise-tax">excise taxes</Term> sa mga piniling
                produkto. Ang buwis ang pinakamalaking bahagi ng kita ng
                national government.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Mga fees at charges</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Bayad sa mga partikular na serbisyo o pahintulot ng gobyerno,
                gaya ng passport fees at mga bayad sa registration.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Ibang non-tax revenue</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Kasama sa <Term id="non-tax-revenue" expand /> ang kita ng
                Treasury at mga dividends na ibinabayad ng mga government-owned
                o controlled corporations.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Mga grant</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ang <Term id="grant" /> ay pondo na natatanggap nang walang
                obligasyong magbayad pabalik, karaniwang para sa napagkasunduang
                layunin.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-5">
              <h3 className="font-semibold">Paghiram</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Pinopondohan ng <Term id="government-borrowing" expand /> ang
                agwat ng kita at gastos. Hindi ito kita: utang ang nabubuo rito
                na kailangang bayaran ng gobyerno, karaniwang may interes.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "revenue-mix",
      title: "Ang buwis ang pinakamalaking bahagi ng pambansang kaban",
      shortTitle: "Ang mix",
      type: "interactive",
      content: (
        <>
          <p>
            Ayon sa Bureau of the Treasury, ito ang komposisyon ng kita ng
            national government para sa calendar year 2024. Kasama sa non-tax
            total nito ang mga fees at charges, kita ng Treasury, ibang non-tax
            receipts, at grants.
          </p>
          <div className="not-prose my-8 rounded-lg border bg-card p-5">
            <div
              className="flex min-h-14 w-full overflow-hidden rounded-md"
              aria-label="Komposisyon ng kita ng national government noong 2024"
            >
              {MIX.map((item) => {
                const share = getFigure("mod-02", item.id)?.value ?? 0;
                return (
                  <div
                    key={item.id}
                    className={`flex items-center justify-center p-3 text-center text-sm font-semibold tabular-nums ${item.color}`}
                    style={{ flexGrow: share }}
                  >
                    {share.toFixed(1)}%
                  </div>
                );
              })}
            </div>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {MIX.map((item) => (
                <li key={item.id} className="flex items-center gap-2 text-sm">
                  <span
                    aria-hidden
                    className={`inline-block size-3 rounded-sm ${item.color.split(' ')[0]}`}
                  />
                  {item.label}
                </li>
              ))}
            </ul>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium">Buwis (tax revenue)</p>
                <Figure module="mod-02" id="tax-share" />
              </div>
              <div>
                <p className="text-sm font-medium">Non-tax revenue</p>
                <Figure module="mod-02" id="non-tax-share" />
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Static fallback: ipinapakita ng mga bar ang bahagi ng bawat
              kategorya sa kabuuang kita. Hindi kasama ang paghiram dahil
              pinopondohan lang nito ang kakulangan; hindi ito itinuturing na
              kita.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "sin-tax-example",
      title: "Halimbawa: pagbabago sa excise tax",
      shortTitle: "Sin tax",
      type: "example",
      content: (
        <>
          <p>
            Ang Republic Act No. 10351, na naipasa noong 2012, ay muling
            nag-ayos ng mga excise tax sa alkohol at mga produktong tobacco. Ipinapakita
            ng pagbabagong ito ang dalawang desisyong kayang gawin ng tax
            policy: kung paano kokolektahin ng gobyerno ang kita, at kung
            itatalaga ang ilang dagdag na koleksyon sa mga nakasaad na gamit.
          </p>
          <p>
            Pagkatapos ng mga alokasyon para sa mga lugar na nagtatanim ng
            tobacco, itinalaga ng batas ang 80% ng natitirang dagdag na kita sa
            universal health care, mga layunin sa kalusugan, at mga programang
            pangkamalayan sa kalusugan. Ang natitirang 20% naman ay itinalaga sa
            medical assistance at mga pasilidad para sa pagpapabuti ng
            kalusugan. Ang mga ito ang tinatawag na earmarks: mga patakarang
            tumutukoy ng gamit para sa isang partikular na daloy ng kita.
          </p>
          <p className="text-sm text-muted-foreground">
            Karagdagang babasahin:{" "}
            <a href="https://lawphil.net/statutes/repacts/ra2012/ra_10351_2012.html">
              Republic Act No. 10351, lalo na ang Section 8
            </a>
            . Tumutukoy ang mga porsyento sa dagdag na kita pagkatapos ng mga
            naunang alokasyon; hindi sila porsyento ng kabuuang national budget.
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
          title="Iuri ang pinanggalingan ng pera ng gobyerno"
          moduleId="mod-02"
          lessonId="02.1"
          items={[
            {
              prompt: "May manggagawang nagbabayad ng income tax. Saang kategorya ito nabibilang?",
              options: [
                "Tax revenue",
                "Mga fees at charges",
                "Paghiram",
                "Grant",
              ],
              correct: 0,
              explanation: "Ang income tax ay tax revenue na kinokolekta alinsunod sa mga batas sa buwis.",
              wrong: {
                1: "Ang fee ay bayad para sa isang partikular na serbisyo.",
                2: "Walang utang na nalilikha mula sa pagbabayad ng buwis.",
                3: "Ang sapilitang buwis ay hindi grant.",
              },
            },
            {
              prompt: "May tao na bumabayaran ng bagong passport. Alin ang pinakaangkop na kategorya?",
              options: [
                "Excise tax",
                "Fee o charge",
                "Paghiram ng gobyerno",
                "Dividend",
              ],
              correct: 1,
              explanation: "Ang bayad sa passport ay fee para sa isang serbisyo ng gobyerno.",
              wrong: {
                0: "Ang mga excise tax ay para sa mga piniling produkto o gawain.",
                2: "Walang hiniram na pera ang gobyerno.",
                3: "Ang mga dividend ay batay sa pagmamay-ari.",
              },
            },
            {
              prompt: "Naglabas ang gobyerno ng securities para takpan ang kakulangan sa kita. Ano ito?",
              options: [
                "Tax revenue",
                "Kita mula sa fees",
                "Paghiram na lumilikha ng utang",
                "Grant",
              ],
              correct: 2,
              explanation: "Ang mga government security ay paghiram at lumilikha ng obligasyong magbayad.",
              wrong: {
                0: "Ang pagbili ng security ay pagpapahiram, hindi pagbabayad ng buwis.",
                1: "Financing ang nakukuha rito, hindi fee.",
                3: "Kailangang bayaran ang mga security; ang mga grant ay hindi.",
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
          Ang pera ng national government ay pangunahing galing sa buwis, na may
          mas maliit na halaga mula sa mga fees, ibang non-tax receipts, at
          grants. Pwedeng pondohan ng paghiram ang agwat kapag hindi sapat ang
          kita para sa gastos, pero lumilikha ito ng utang, hindi kita.
        </KeyTakeaway>
      ),
    },
  ],
});
