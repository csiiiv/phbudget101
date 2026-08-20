import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const PURSES = [
  {
    title: "National government",
    raises:
      "Income tax, value-added tax, customs duties, excise taxes, fees, at iba pang kita ng national government",
    uses:
      "Mga programang sakop ang buong bansa, mga pambansang ahensya, debt service, at mga transfer sa mga lokal na gobyerno",
    rule: "Ang mga batas pambansa sa kita at ang national budget ang namamahala sa kabang ito.",
  },
  {
    title: "Local government unit (LGU)",
    raises:
      "Mga lokal na buwis sa negosyo, real property tax, mga bayad sa serbisyo, mga bayad sa public market, at kita mula sa mga lokal na enterprise",
    uses:
      "Mga serbisyo at pasilidad na nakatalaga sa probinsya, lungsod, munisipyo, o barangay",
    rule: "Kailangang may lokal na ordinansang nagpapahintulot sa isang lokal na buwis, fee, o charge, sa loob ng mga limitasyong itinakda ng batas.",
  },
] as const;

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Ginagamit ba ng city hall ang parehong pera?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <p className="text-lg text-muted-foreground">
          Ginagamit ba ng iyong city hall ang parehong perang ginagamit ng
          national government? Magkaugnay ang dalawang kaban, pero hindi sila
          pwedeng ipagpalit.
        </p>
      ),
    },
    {
      id: "two-purses",
      title: "Dalawang antas, dalawang sistema ng kita",
      shortTitle: "Dalawang kaban",
      type: "concept",
      content: (
        <>
          <p>
            Nangongolekta ang national government ng buwis at iba pang kita
            alinsunod sa mga batas pambansa. May kapangyarihan din ang isang{" "}
            <Term id="local-government-unit" expand /> na lumikha ng ilang
            pinagkukunan ng kita sa loob ng teritoryo nito, alinsunod sa Local
            Government Code at ibang batas.
          </p>
          <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
            {PURSES.map((purse) => (
              <div key={purse.title} className="rounded-lg border bg-card p-5">
                <h3 className="font-semibold">{purse.title}</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-medium">Mga pangunahing receipts</dt>
                    <dd className="mt-1 text-muted-foreground">
                      {purse.raises}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium">Sinusuportahan ng kaban</dt>
                    <dd className="mt-1 text-muted-foreground">{purse.uses}</dd>
                  </div>
                  <div>
                    <dt className="font-medium">Pangunahing patakaran</dt>
                    <dd className="mt-1 text-muted-foreground">{purse.rule}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
          <p>
            Depende ang label kung sino ang may legal na kapangyarihang
            mangolekta ng pera. Pambansang buwis ang income tax at value-added
            tax. Ang buwis sa negosyo ng lungsod at ang real property tax ay
            lokal na pinagkukunan.
          </p>
        </>
      ),
    },
    {
      id: "own-source-and-transfers",
      title: "Pumapasok ang lokal na pera sa dalawang pinto",
      shortTitle: "Dalawang pinto",
      type: "concept",
      content: (
        <>
          <p>
            Ang <Term id="own-source-revenue" expand /> ay kita na likha mismo ng
            LGU. Halimbawa nito ang mga lokal na buwis, regulatory fees, mga
            bayad sa serbisyo, at receipts mula sa mga lokal na economic
            enterprise. Ang sanggunian ang nagpapahintulot sa isang lokal na
            buwis, fee, o charge sa pamamagitan ng ordinansa, sa loob ng mga
            kapangyarihan at limitasyong itinakda ng batas.
          </p>
          <p>
            Ang isang <Term id="intergovernmental-transfer" expand /> ay
            naglilipat ng resources mula sa isang antas ng gobyerno patungo sa
            isa pa. Ang pangunahing halimbawa ay ang{" "}
            <Term id="national-tax-allotment" expand />, ang bahagi ng mga LGU sa
            mga pambansang buwis. Pambansang kita ito sa oras ng koleksyon;
            lokal na kita na ito kapag na-release na bilang nararapat na bahagi
            ng LGU.
          </p>
          <p>
            Mahalaga ang pagkakaibang ito kapag tinatanong mo kung sino ang may
            kontrol sa paraan ng pagkuha ng kita. Kaya ng LGU na pabutihin ang
            lokal na koleksyon o ayusin ang mga lokal na rate na pinapayagan ng
            batas, pero hindi nito mababago ang pambansang batas sa income tax.
            Pwedeng magplano batay sa NTA nito, pero hindi ito mismo ang
            naniningil ng bahaging iyon mula sa mga pambansang taxpayer.
          </p>
        </>
      ),
    },
    {
      id: "trace-a-receipt",
      title: "Tuntonin ang bayaran bago pangalanan ang kaban",
      shortTitle: "Tuntonin",
      type: "example",
      content: (
        <>
          <p>
            Isipin ang tatlong bayaran. May residenteng nagbabayad ng real
            property tax sa city treasurer: own-source local revenue ito. May
            kumpanyang nagbabayad ng pambansang income tax sa Bureau of Internal
            Revenue: pambansang kita ito sa simula. At kapag may bahagi ng
            pambansang koleksyon sa buwis na na-release sa isang LGU sa
            pamamagitan ng NTA, lumilipat ito mula sa pambansang kaban tungo sa
            lokal na kaban bilang transfer.
          </p>
          <div className="not-prose my-6 rounded-lg border bg-accent/40 p-5">
            <p className="font-medium">Isang kapaki-pakinabang na tanong</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Itanong ang dalawa: “Sino ang unang nakolekta nito?” at “Sino
              ngayon ang may legal na kapangyarihang i-budget nito?” Maaaring
              magkaiba ang sagot kapag may kasamang transfer.
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            Karagdagang babasahin:{" "}
            <a href="https://lawphil.net/statutes/repacts/ra1991/ra_7160_1991.html">
              Local Government Code, lalo na ang Sections 129, 132, at 284–286
            </a>
            , at ang{" "}
            <a href="https://reports.dbm.gov.ph/ira2.0/">
              Department of Budget and Management NTA legal-basis page
            </a>
            .
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
          title="Iuri ang bayaran"
          moduleId="mod-02"
          lessonId="02.2"
          items={[
            {
              prompt:
                "May lungsod na naniningil ng real property tax mula sa isang may-ari ng lupa. Paano dapat iuri ng lungsod ang bayaran?",
              options: [
                "Own-source local revenue",
                "National Tax Allotment",
                "Pambansang income tax",
                "Grant mula sa ibang gobyerno",
              ],
              correct: 0,
              explanation:
                "Ang real property tax ay ipinapatupad at kinokolekta ng isang awtorisadong LGU, kaya own-source local revenue ito.",
              wrong: {
                1: "Inililipat ang NTA mula sa pambansang koleksyon sa buwis; diretso sa lungsod ang bayad na ito bilang lokal na buwis.",
                2: "Iba ang income tax — buwis itong kinokolekta alinsunod sa batas pambansa.",
                3: "Hindi grant ang sapilitang pagbabayad ng lokal na buwis.",
              },
            },
            {
              prompt:
                "May bahagi ng pambansang koleksyon sa buwis na na-release sa isang munisipyo bilang NTA share nito. Ano ang pinakaangkop na paglalarawan sa release?",
              options: [
                "Bagong lokal na buwis sa negosyo",
                "Intergovernmental transfer",
                "Bayad para sa serbisyo ng munisipyo",
                "Kita mula sa enterprise ng munisipyo",
              ],
              correct: 1,
              explanation:
                "Inililipat ng NTA ang bahagi ng LGU sa pambansang buwis mula sa national government patungo sa lokal na gobyerno.",
              wrong: {
                0: "Walang bagong buwis na ipinataw ang munisipyo; galing ang halaga sa pambansang koleksyon sa buwis.",
                2: "Walang residenteng nagbayad para sa isang partikular na serbisyo ng munisipyo sa transaksyong ito.",
                3: "Hindi kinita ang halagang ito mula sa pagpapatakbo ng lokal na enterprise.",
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
          Magkaiba ang kapangyarihan sa kita ng pambansang at lokal na gobyerno.
          Pinopondohan ng mga LGU ang kanilang kaban gamit ang own-source
          revenue at mga transfer, lalo na ang National Tax Allotment. Para tama
          ang pag-uuri ng pera, tuntonin kung sino ang unang nakolekta nito at
          sino ngayon ang may kapangyarihang i-budget nito.
        </KeyTakeaway>
      ),
    },
  ],
});
