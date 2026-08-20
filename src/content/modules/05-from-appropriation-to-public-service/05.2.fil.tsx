import { KeyTakeaway } from "@/components/content/KeyTakeaway";
import { KnowledgeCheck } from "@/components/content/KnowledgeCheck";
import { Term } from "@/components/content/Term";
import { defineLesson } from "@/lib/sections";

const MILESTONES = [
  {
    name: "Magplano at maghanda",
    actor: "End-user at procurement units",
    evidence:
      "Project Procurement Management Plan, Annual Procurement Plan, technical specifications o scope, at cost estimate",
    test: "Malinaw ba ang need, may pondo, may iskedyul, at handa na ba para sa napiling procurement approach?",
  },
  {
    name: "Imbitahan ang kompetisyon",
    actor: "Procuring entity at BAC",
    evidence:
      "Procurement notice, bidding documents, clarifications, at amendments",
    test: "Naiintindihan ba ng mga kwalipikadong supplier o contractor ang requirement at makakapagsumite ba sila ng responsive na offer?",
  },
  {
    name: "Tanggapin at i-evaluate ang mga offer",
    actor: "BAC at technical support",
    evidence: "Bid opening, evaluation, at qualification records",
    test: "Aling offer ang tumutugon sa mga nakasaad na legal, technical, at financial requirement?",
  },
  {
    name: "I-award at pirmahan",
    actor:
      "Head of procuring entity, mga awtorisadong opisyal, at winning bidder",
    evidence:
      "Notice of award, approved contract, at notice to proceed kung applicable",
    test: "May valid na kontrata bang nag-commit sa gobyerno at sa supplier o contractor?",
  },
  {
    name: "Ipatupad at pamahalaan",
    actor: "Contractor o supplier at contract-management team",
    evidence:
      "Work program, progress records, inspections, change records, at performance reports",
    test: "Naisasagawa ba ang contracted output ayon sa napagkasunduang quality, scope, at iskedyul?",
  },
  {
    name: "I-accept at bayaran",
    actor: "End-user, mga inspector, at finance function",
    evidence:
      "Inspection at acceptance documents, billing support, at disbursement records",
    test: "Naihatid ba ang compliant na trabaho at natugunan ba ang mga payment condition?",
  },
] as const;

export default defineLesson({
  sections: [
    {
      id: "start",
      title: "Bakit pwedeng “released na ang pondo” pero wala pang construction?",
      shortTitle: "Simula",
      type: "introduction",
      content: (
        <>
          <p className="text-lg text-muted-foreground">
            Ang available na budget authority ay hindi pumipili ng contractor,
            hindi tinatapos ang design, hindi sumusuri ng mga offer, at hindi
            namamahala ng construction. Kailangan muna ng gobyerno bilhin ang
            trabaho sa pamamagitan ng legal na{" "}
            <Term id="procurement" /> process.
          </p>
          <p>
            Pinoprotektahan ng prosesong iyon ang kompetisyon, transparency,
            accountability, at value for money. Lumilikha rin ito ng sunud-sunod
            na readiness checks at desisyon na hindi maaaring bawasan sa
            &quot;i-release ang pondo, tapos magtayo.&quot;
          </p>
        </>
      ),
    },
    {
      id: "long-middle",
      title: "Umaabot ang procurement mula sa commitment hanggang delivery",
      shortTitle: "Mahabang gitna",
      type: "concept",
      content: (
        <>
          <p>
            Nagsisimula ang procurement sa planning bago pa may kontrata.
            Tinutukoy ng solicitation at evaluation ang angkop na offer. Ang
            award at pagpirma ng kontrata ang lumilikha ng commitment na
            magbayad, habang ang contract implementation ang ginagawang goods,
            works, o services ang commitment na iyon — para ma-inspect at
            ma-accept.
          </p>
          <p>
            Kaya nakaupo ang procurement sa ilang link ng expenditure chain,
            hindi sa iisang sandali. Inihahanda ng planning ang pagbili;
            lumilikha ang award ng{" "}
            <Term id="obligation" /> kapag valid na nagbubuklod ang kontrata sa
            gobyerno; patungo sa delivery ang implementation; sinusuportahan
            naman ng na-accept na trabaho ang{" "}
            <Term id="disbursement">payment</Term> sa ilalim ng kontrata.
          </p>
          <p>
            Ang competitive bidding ay isang procurement mode, hindi kasingkahulugan
            ng buong sistema. Maraming fit-for-purpose mode ang New Government
            Procurement Act, habang pinapanatili ang mga governing principle at
            documentation requirements.
          </p>
        </>
      ),
    },
    {
      id: "readiness",
      title: "Nagsisimula ang magandang procurement bago mag-post",
      shortTitle: "Readiness",
      type: "concept",
      content: (
        <>
          <p>
            Inaayos ng <Term id="annual-procurement-plan" expand /> ang mga
            planong pagbili ng procuring entity. Para sa bawat project,
            kailangan din ng ahensya ang malinaw na scope o specifications,
            iskedyul, procurement approach, at{" "}
            <Term id="approved-budget-contract" expand /> na nagtatakda ng
            approved ceiling para sa procurement.
          </p>
          <p>
            Ang mahinang preparation ay naglilipat ng mga problema pababa.
            Pwedeng magdulot ng clarifications, failed competition, redesign, o
            contract changes ang hindi malinaw na site, incomplete na design,
            hindi realistiko na iskedyul, o malabong specification. Kaya bahagi
            ng implementation ang oras na ginugugol sa pagsubok ng readiness —
            hindi patunay na walang nangyayari.
          </p>
          <p>
            Pinamamahalaan ng <Term id="bids-awards-committee" expand /> ang
            mga pangunahing procurement proceeding, pero may kanya-kanyang
            responsibilidad ang mga end-user, technical staff, head of the
            procuring entity, contract manager, inspector, at finance personnel
            sa buong proseso.
          </p>
        </>
      ),
    },
    {
      id: "milestone-strip",
      title: "Static milestone strip: ang procurement ng school building",
      shortTitle: "Milestones",
      type: "interactive",
      content: (
        <>
          <p>
            <strong>
              Illustrative na halimbawa. Pinasimple ang detalye para mas
              malinaw.
            </strong>{" "}
            Pinalalawak ng static strip na ito ang school-building storyboard.
            Walang amount o inimbentong bilang ng araw; naaapektuhan ng
            naaangkop na batas, procurement mode, complexity ng project, at
            kalidad ng dokumento ang aktwal na timing.
          </p>
          <div
            className="not-prose my-8 space-y-3"
            aria-label="Milestone strip ng procurement ng school building"
          >
            {MILESTONES.map((milestone, index) => (
              <article
                key={milestone.name}
                className="grid gap-3 rounded-lg border bg-card p-5 md:grid-cols-[auto_1fr_1fr]"
              >
                <div className="flex items-start gap-3 md:col-span-3">
                  <span
                    className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{milestone.name}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">
                      {milestone.test}
                    </p>
                  </div>
                </div>
                <div className="md:col-start-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Pangunahing actor
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">
                    {milestone.actor}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Paper trail
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">
                    {milestone.evidence}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p>
            Sequential ang strip, pero pwedeng mag-loop ang totoong project.
            Pwedeng kailanganin ng failed procurement ang revised documents at
            bagong solicitation. Pwedeng magbunyag ang contract implementation
            ng mga kondisyong nangangailangan ng awtorisadong tugon. Bawat loop
            ay kumukonsumo ng oras habang patuloy na tumatakbo ang legal validity
            period ng budget.
          </p>
          <p>
            Pwedeng magsimula nang maaga ang procurement planning, pero dapat
            igalang ng solicitation, award, obligation, implementation, at
            payment ang naaangkop na authority at deadline. Huwag mag-apply ng
            iisang universal deadline mula sa memorya: tingnan ang GAA, special
            provisions, DBM release rules, approved procurement schedule, at
            governing procurement rules.
          </p>
          <p className="text-sm text-muted-foreground">
            Source note: Mga materyal ng Government Procurement Policy
            Board—Technical Support Office tungkol sa{" "}
            <a href="https://www.gppb.gov.ph/new-government-procurement-act-or-republic-act-no-12009/">
              New Government Procurement Act
            </a>
            , ang{" "}
            <a href="https://www.gppb.gov.ph/exciting-announcement-issuance-and-publication-of-the-irr-for-the-new-government-procurement-act/">
              GPPB-approved implementing rules
            </a>
            , at{" "}
            <a href="https://www.gppb.gov.ph/public-advisory-no-09-2026/">
              Public Advisory No. 09-2026
            </a>{" "}
            na tumutukoy sa controlling IRR version.
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
          title="Ayusin ang pagkakasunod-sunod ng procurement milestones"
          moduleId="mod-05"
          lessonId="05.2"
          items={[
            {
              prompt:
                "Aling sequence ang pinakamahusay na naglalarawan ng typical na school-building procurement sa high level?",
              options: [
                "Magplano at maghanda → imbitahan ang kompetisyon → i-evaluate ang mga offer → i-award at pirmahan → ipatupad → i-accept at bayaran",
                "I-award at pirmahan → magplano at maghanda → imbitahan ang kompetisyon → i-accept at bayaran → ipatupad",
                "Imbitahan ang kompetisyon → simulan ang construction → ihanda ang specifications → i-evaluate ang mga offer → pirmahan",
                "Bayaran ang contractor → i-evaluate ang mga offer → magplano ng procurement → i-inspect ang tapos na trabaho",
              ],
              correct: 0,
              explanation:
                "Nauuna ang malinaw na planning sa solicitation; nauuna ang evaluation sa award; nauuna ang contract implementation sa final acceptance at sinusuportahang payment.",
              wrong: {
                1: "Hindi pwedeng mag-award muna nang valid ang procuring entity at pagkatapos pa lang tukuyin ang requirement.",
                2: "Dapat bago ang solicitation ang specifications at readiness, at hindi pwedeng magsimula ang construction bago ang valid na award at contract authority.",
                3: "Kailangan ng valid na kontrata, delivery o progress evidence, at naaangkop na controls ang payment.",
              },
            },
            {
              prompt:
                "Available ang budget authority, pero incomplete ang school site at technical specifications. Ano ang pinakapatas na basahin?",
              options: [
                "Dapat agad magsimula ang construction dahil may pondo",
                "May procurement-readiness problem ang project na dapat ayusin bago ang solicitation",
                "May obligasyon nang magtayo ang contractor",
                "Dapat i-release ang payment para makatipid ng oras",
              ],
              correct: 1,
              explanation:
                "Kailangan ang available authority pero hindi sapat. Naapektuhan ng readiness ng site at specification ang kompetisyon, kalinawan ng kontrata, at implementability.",
              wrong: {
                0: "Ang pagsisimula nang walang handang site at malinaw na requirement ay naglilipat ng hindi pa nareresolbang panganib sa procurement at construction.",
                2: "Walang contractor na nakatali bago ang valid na award at kontrata.",
                3: "Kailangan ng valid na obligation at sinusuportahang delivery o progress ang payment; hindi ito kapalit ng readiness.",
              },
            },
          ]}
        />
      ),
    },
    {
      id: "takeaway",
      title: "Mahalagang tandaan",
      shortTitle: "Tandaan",
      type: "takeaway",
      content: (
        <KeyTakeaway>
          Mahaba ang gitnang bahagi ng procurement dahil kailangang tukuyin ng
          gobyerno ang need, imbitahan at i-evaluate ang mga offer, mag-award ng
          valid na kontrata, pamahalaan ang performance, at i-verify ang
          delivery bago magbayad. Sinisimulan ng available na pondo ang orasan;
          hindi nito pinapalitan ang readiness, kompetisyon, o contract
          management.
        </KeyTakeaway>
      ),
    },
  ],
});
