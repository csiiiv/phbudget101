import type { GlossaryEntry } from "../types";

/** Filipino display overrides for glossary terms introduced in translated lessons. */
export const glossaryFilOverrides: Partial<
  Record<string, Pick<GlossaryEntry, "term" | "acronym" | "short">>
> = {
  // Core / Module 00–01
  pfm: {
    term: "Public Financial Management",
    acronym: "PFM",
    short:
      "Ang sistema ng gobyerno para planuhin, gamitin, at bantayan ang pera ng publiko para makapaghatid ng mga serbisyo.",
  },
  appropriation: {
    term: "Appropriation",
    short:
      "Legal na authority na gumastos ng public money para sa nakasaad na purpose, karaniwang mula sa appropriations law.",
  },
  obligation: {
    term: "Obligation",
    short:
      "Commitment na magbayad, gaya ng pagpasok sa isang kontrata, laban sa isang appropriation. Hindi pa ito aktwal na payment.",
  },
  disbursement: {
    term: "Disbursement",
    short:
      "Ang aktwal na pagbabayad ng public money. Maaaring matagal nang appropriated at obligated ang pondo bago ito ma-disburse.",
  },
  gaa: {
    term: "General Appropriations Act",
    acronym: "GAA",
    short:
      "Ang taunang batas na nagbibigay ng authority para sa paggastos ng national government sa isang fiscal year.",
  },
  procurement: {
    term: "Procurement",
    short:
      "Proseso ng pagbili ng goods, works, o services gamit ang public funds, karaniwang sa bidding o ibang authorized na paraan.",
  },
  nep: {
    term: "National Expenditure Program",
    acronym: "NEP",
    short:
      "Ang proposed national budget ng Pangulo na isinusumite sa Kongreso — ang panimulang dokumento ng legislation.",
  },
  "budget-call": {
    term: "Budget call",
    short:
      "Ang instruksyon ng executive sa mga ahensya na magsumite ng budget proposal para sa susunod na fiscal year, karaniwang kasama ang mga ceiling at prayoridad.",
  },
  "personnel-services": {
    term: "Personnel services",
    acronym: "PS",
    short:
      "Ang expense class para sa mga sahod, wages, at iba pang kabayaran ng mga kawani ng gobyerno.",
  },
  "fiscal-year": {
    term: "Fiscal year",
    acronym: "FY",
    short:
      "Ang labindalawang buwang sakop ng isang budget. Sa Pilipinas, ang fiscal year ay kapareho ng calendar year.",
  },
  sanggunian: {
    term: "Sanggunian",
    short:
      "Ang lokal na lehislatura (hal. sangguniang lungsod o bayan) na nagpapahintulot sa lokal na budget.",
  },

  // Module 02
  "tax-revenue": {
    term: "Tax revenue",
    short:
      "Mga sapilitang bayad na kinokolekta alinsunod sa batas sa buwis, kabilang ang income tax, value-added tax, customs duties, at excise taxes.",
  },
  "excise-tax": {
    term: "Excise tax",
    short:
      "Buwis na ipinapataw sa mga piniling produkto o gawain, gaya ng alkohol at mga produktong tobacco.",
  },
  "non-tax-revenue": {
    term: "Non-tax revenue",
    short:
      "Kita ng gobyerno na hindi buwis, kabilang ang mga fee at charge, kita ng Treasury, at mga dividend mula sa government-owned o controlled corporations.",
  },
  grant: {
    term: "Grant",
    short:
      "Pondong natatanggap para sa napagkasunduang layunin nang walang obligasyong bayaran ito pabalik bilang utang.",
  },
  "government-borrowing": {
    term: "Government borrowing",
    short:
      "Pondong nakukuha sa pamamagitan ng mga utang o government security na lumilikha ng obligasyong magbayad, karaniwang may interes.",
  },
  "local-government-unit": {
    term: "Local government unit",
    acronym: "LGU",
    short:
      "Teritoryal at pulitikal na subdivision ng Pilipinas: probinsya, lungsod, munisipyo, o barangay.",
  },
  "own-source-revenue": {
    term: "Own-source revenue",
    short:
      "Kita na naitataas mismo ng isang LGU mula sa mga awtorisadong lokal na buwis, fee, charge, at economic enterprise nito.",
  },
  "intergovernmental-transfer": {
    term: "Intergovernmental transfer",
    short:
      "Pera ng publiko na inililipat mula sa isang antas ng gobyerno patungo sa isa pa ayon sa batas o sa isang funding program.",
  },
  "national-tax-allotment": {
    term: "National Tax Allotment",
    acronym: "NTA",
    short:
      "Ang bahagi ng mga LGU sa national taxes na awtomatikong nire-release; dating tinatawag na Internal Revenue Allotment.",
  },
  "revenue-forecast": {
    term: "Revenue forecast",
    short:
      "Tantiya kung magkano ang inaasahang makokolekta ng gobyerno sa isang susunod na panahon, batay sa mga nakasaad na assumption.",
  },
  "fiscal-deficit": {
    term: "Fiscal deficit",
    short:
      "Ang kakulangan kapag mas malaki ang expenditure ng gobyerno kaysa sa kita nito sa isang panahon.",
  },
  "fiscal-surplus": {
    term: "Fiscal surplus",
    short:
      "Ang labis kapag mas malaki ang kita ng gobyerno kaysa sa expenditure nito sa isang panahon.",
  },
  "public-debt": {
    term: "Public debt",
    short:
      "Ang mga obligasyong pinansyal ng gobyerno na hindi pa nababayaran, mula sa mga nakaraang paghiram at iba pang liability.",
  },
  "fiscal-space": {
    term: "Fiscal space",
    short:
      "Puwang sa pananalapi ng publiko para sa mga karagdagang prayoridad pagkatapos isaalang-alang ang inaasahang resources, mga fiscal limit, at mga kasalukuyang commitment.",
  },

  // Module 03
  allotment: {
    term: "Allotment",
    short:
      "Ang bahagi ng isang appropriation na ginagawang available sa ahensya bilang limit at batayan nito sa paglikha ng mga obligasyon para sa awtorisadong layunin.",
  },
  expenditure: {
    term: "Expenditure",
    short:
      "Ang paggamit o gastos ng pampublikong resources na nakatala sa mga kaugnay na financial record alinsunod sa mga naaangkop na accounting rule.",
  },
  "current-appropriation": {
    term: "Current appropriation",
    short:
      "Spending authority para sa kasalukuyang fiscal year sa ilalim ng naaangkop na budget law o ibang awtorisadong pinagkunan.",
  },
  "continuing-appropriation": {
    term: "Continuing appropriation",
    short:
      "Spending authority mula sa nakaraang taon na nananatiling wasto sa batas sa kasalukuyang fiscal year alinsunod sa mga patakarang namamahala rito.",
  },
  pap: {
    term: "Program, activity, and project",
    acronym: "PAP",
    short:
      "Ang hierarchy na nag-uugnay ng program ng isang ahensya sa mga paulit-ulit na activity at partikular na project na gumagawa nito.",
  },
  "special-purpose-fund": {
    term: "Special-purpose fund",
    acronym: "SPF",
    short:
      "Budget provision na inilalatag hiwalay sa regular na budget ng mga ahensya para sa isang nakasaad na layuning maaaring tumama sa maraming ahensya, benepisyaryo, o contingencies.",
  },
  mooe: {
    term: "Maintenance and Other Operating Expenses",
    acronym: "MOOE",
    short:
      "Ang expense class para sa mga goods at serbisyong ginagamit sa regular na operations ng gobyerno, gaya ng supplies, utilities, travel, at maintenance.",
  },
  "financial-expenses": {
    term: "Financial expenses",
    acronym: "FinEx",
    short:
      "Ang expense class para sa mga gastos mula sa financial transactions, kabilang ang interest expense at mga awtorisadong bank o financial charges.",
  },
  "capital-outlays": {
    term: "Capital outlays",
    acronym: "CO",
    short:
      "Ang expense class para sa mga asset at pagpapabuti na ang benepisyo ay aabot pa sa susunod na fiscal year, gaya ng imprastruktura at malalaking kagamitan.",
  },

  // Module 04
  dbcc: {
    term: "Development Budget Coordination Committee",
    acronym: "DBCC",
    short:
      "Ang inter-agency committee na nagrerekomenda ng mga macroeconomic assumption, fiscal target, at kabuuang antas ng paggastos ng gobyerno para sa budget planning.",
  },
  dbm: {
    term: "Department of Budget and Management",
    acronym: "DBM",
    short:
      "Ang executive department na namumuno sa paghahanda ng national budget, sumusuporta sa execution, at namamahala ng mga kaugnay na budget policy at system.",
  },
  gab: {
    term: "General Appropriations Bill",
    acronym: "GAB",
    short:
      "Ang proposed na taunang appropriations measure na tinitingnan ng Kongreso bago ito maging General Appropriations Act.",
  },
  "bicameral-conference": {
    term: "Bicameral conference committee",
    short:
      "Panel ng mga miyembro ng House at Senate na binubuo para pagbagay-bagayin ang mga pagkakaiba ng bersyon ng isang bill na inaprubahan ng dalawang chamber.",
  },
  "line-item-veto": {
    term: "Line-item veto",
    short:
      "Ang constitutional na kapangyarihan ng Pangulo na i-veto ang isang partikular na item sa appropriations bill nang hindi tinatanggihan ang mga iba pang item.",
  },
  "notice-of-cash-allocation": {
    term: "Notice of Cash Allocation",
    acronym: "NCA",
    short:
      "Cash authority na inilabas ng DBM para takpan ang cash needs ng ahensya sa pamamagitan ng mga authorized na government servicing bank.",
  },
  coa: {
    term: "Commission on Audit",
    acronym: "COA",
    short:
      "Ang constitutional commission na sumusuri, nag-aaudit, at nag-aayos ng mga account ng gobyerno kabilang ang kita, paggastos, pondo, at ari-arian ng publiko.",
  },
  "internal-control": {
    term: "Internal control",
    short:
      "Mga policy at proseso sa loob ng isang organisasyon na tumutulong protektahan ang resources, panatilihing maaasahan ang records, sundin ang mga rules, at pamahalaan ang operational risks.",
  },
  "transparency-seal": {
    term: "Transparency Seal",
    short:
      "Bahagi ng website ng isang government agency kung saan naka-index ang mga kinakailangang public disclosure gaya ng approved budgets, targets, reports, procurement information, at implementation status.",
  },

  // Module 05
  delivery: {
    term: "Delivery",
    short:
      "Ang punto kung kailan naisagawa, na-accept kung kinakailangan, at naging usable na ang required na public good, work, o service para sa intended purpose nito.",
  },
  "annual-procurement-plan": {
    term: "Annual Procurement Plan",
    acronym: "APP",
    short:
      "Ang consolidated plan ng procuring entity para sa mga procurement project na inaasahan nitong gawin sa budget year.",
  },
  "approved-budget-contract": {
    term: "Approved Budget for the Contract",
    acronym: "ABC",
    short:
      "Ang budget na inaprubahan para sa isang procurement contract; ito ang ceiling para sa mga bid at sa resultang contract price ayon sa naaangkop na rules.",
  },
  "bids-awards-committee": {
    term: "Bids and Awards Committee",
    acronym: "BAC",
    short:
      "Ang committee na nagsasagawa ng mga pangunahing procurement proceeding, kabilang ang solicitation at evaluation, at nagrerekomenda ng award ayon sa naaangkop na rules.",
  },
  "budget-utilization-rate": {
    term: "Budget utilization rate",
    acronym: "BUR",
    short:
      "Financial ratio na nagkukumpara ng dalawang budget execution amount, gaya ng obligations sa allotments o disbursements sa obligations. Dapat nakasaad ang formula at cutoff date.",
  },
  "physical-accomplishment": {
    term: "Physical accomplishment",
    short:
      "Ang aktwal na quantity, quality, o timeliness ng naihatid na trabaho kumpara sa kaukulang physical target.",
  },
  output: {
    term: "Output",
    short:
      "Ang good o service na inihahatid ng isang ahensya sa intended population o client group.",
  },
  outcome: {
    term: "Outcome",
    short:
      "Ang pagbabago, epekto, o resultang hinahanap ng isang agency program o strategy para sa mga tao, lipunan, o physical environment.",
  },

  // Module 06
  "local-chief-executive": {
    term: "Local chief executive",
    acronym: "LCE",
    short:
      "Ang governor, city mayor, municipal mayor, o punong barangay na namumuno sa executive branch ng isang LGU.",
  },
  "local-finance-committee": {
    term: "Local finance committee",
    acronym: "LFC",
    short:
      "Ang lokal na body na tumutulong sa pag-estimate ng kita, pagre-recommend ng expenditure ceilings, at pagbibigay ng advice sa pananalapi ng LGU.",
  },
  "local-executive-budget": {
    term: "Local executive budget",
    short:
      "Ang taunang budget proposal ng LGU na inihanda ng local chief executive at isinusumite sa sanggunian.",
  },
  devolution: {
    term: "Devolution",
    short:
      "Ang paglilipat o pagtatalaga ng mga function, serbisyo, pasilidad, authority, at responsibilidad mula sa national government patungo sa mga lokal na gobyerno.",
  },
  "fiscal-decentralization": {
    term: "Fiscal decentralization",
    short:
      "Ang paghahati ng revenue powers, transfers, at spending responsibilities sa pagitan ng national at subnational na mga gobyerno.",
  },
  "devolution-transition-plan": {
    term: "Devolution transition plan",
    acronym: "DTP",
    short:
      "Ang phased na plano para sa paglilipat o pag-assume ng mga devolved na function, serbisyo, pasilidad, personnel, assets, at kailangang capacity.",
  },
  "absorptive-capacity": {
    term: "Absorptive capacity",
    short:
      "Ang kakayahang gamitin nang epektibo ang dagdag na resources — sapat na tao, sistema, pasilidad, proseso ng pagpapatupad, at oversight.",
  },
  "local-development-council": {
    term: "Local development council",
    acronym: "LDC",
    short:
      "Ang lokal na body na tumutulong sa pagbuo ng development plan, investment program, at mga policy recommendation para sa sanggunian.",
  },
  "local-special-body": {
    term: "Local special body",
    acronym: "LSB",
    short:
      "Ang council o board na ginawa ng batas o patakaran para sa isang partikular na gawain sa lokal na pamamahala, na may sariling membership at kapangyarihan.",
  },
  "local-health-board": {
    term: "Local health board",
    acronym: "LHB",
    short:
      "Ang body sa antas ng lalawigan, lungsod, o bayan na nagpopropose ng health budget allocation at nag-aadvise sa sanggunian sa mga usaping pangkalusugan.",
  },
  "cso-accreditation": {
    term: "Civil society organization accreditation",
    acronym: "CSO accreditation",
    short:
      "Ang pormal na proseso ng LGU na tumutukoy kung kwalipikado ang isang civil society organization para piliin bilang representative sa mga local special body.",
  },

  // Module 07
  besf: {
    term: "Budget of Expenditures and Sources of Financing",
    acronym: "BESF",
    short:
      "Ang budget document na nagpapakita ng tinatayang gastos ng gobyerno kasama ang mga kita, paghihiram, at iba pang financing na sumusuporta rito.",
  },
  "far-1": {
    term: "Financial Accountability Report No. 1",
    acronym: "FAR No. 1",
    short:
      "Report ng national agency na nagpapakita ng appropriations, allotments, obligations, disbursements, at balances para sa isang reporting period.",
  },
  nca: {
    term: "Notice of Cash Allocation",
    acronym: "NCA",
    short:
      "Cash authority na ibinibigay sa isang ahensya o operating unit sa pamamagitan ng government banking system para sa mga karapat-dapat na cash needs.",
  },
  "annual-audit-report": {
    term: "Annual Audit Report",
    acronym: "AAR",
    short:
      "Taunang report ng COA tungkol sa audit nito sa mga account at operasyon ng isang government entity, kabilang ang mga financial statements at audit observations.",
  },
  "annual-investment-program": {
    term: "Annual Investment Program",
    acronym: "AIP",
    short:
      "Ang taunang listahan ng mga program, project, at activity ng isang LGU na inaprubahan at hinalaw mula sa local development investment program nito.",
  },
  "appropriation-ordinance": {
    term: "Appropriation ordinance",
    acronym: "AO",
    short:
      "Ang ordinance na ginagamit ng sanggunian para bigyan ng authority ang taunang o supplemental budget ng isang LGU para sa mga nakasaad na layunin at kondisyon.",
  },
  uacs: {
    term: "Unified Accounts Code Structure",
    acronym: "UACS",
    short:
      "Ang coding framework ng buong gobyerno ng Pilipinas na nagpapakilala ng mga financial transaction nang pare-pareho sa budgeting, accounting, at reporting.",
  },
  "general-provision": {
    term: "General provision",
    short:
      "Probisyon sa isang appropriations law na naglalahad ng panuntunang naaangkop sa buong gobyerno o sa malawak na saklaw na binabanggit sa probisyon.",
  },
  "special-provision": {
    term: "Special provision",
    short:
      "Probisyong nakakabit sa isang partikular na ahensya, fund, program, o item na maaaring maglahad ng layunin, kondisyon, release rules, o reporting requirements nito.",
  },
  "nominal-value": {
    term: "Nominal value",
    short:
      "Amount na nakasaad sa mga presyo ng panahong naitala ito, nang walang adjustment para sa mga pagbabago sa antas ng presyo.",
  },
  "real-value": {
    term: "Real value",
    short:
      "Amount na inadjust sa isang parehong batayan ng presyo para makumpara ang purchasing power sa mga panahon.",
  },
  "consumer-price-index": {
    term: "Consumer Price Index",
    acronym: "CPI",
    short:
      "Index na sumusukat sa mga pagbabago sa average na retail prices ng isang nakapirmeng basket ng goods at services kumpara sa isang base period.",
  },
  "avalanche-method": {
    term: "Avalanche method",
    short:
      "Paraan ng pag-scan na nagfa-flag ng hindi karaniwang malalaking pagtaas, pagbaba, paglabas, at pagkawala sa mga maikukumparang budget year para sa karagdagang imbestigasyon.",
  },
  increment: {
    term: "Increment",
    short:
      "Mas maliit na pagbabago sa isang budget line na maaaring maliit sa isang taon pero makabuluhan kapag nagpatuloy o umipon sa paglipas ng panahon.",
  },

  // Module 08
  adequacy: {
    term: "Adequacy",
    short:
      "Kung sapat ba ang scale at design ng isang budget response kumpara sa natukoy na need at intended standard.",
  },
  efficiency: {
    term: "Efficiency",
    short:
      "Kung gaano kahusay na nai-convert ang resources sa useful outputs o services, isinasaalang-alang ang cost, time, quality, at maiiwasang sayang.",
  },
  effectiveness: {
    term: "Effectiveness",
    short:
      "Hanggang saan naabot ng isang policy, program, o budget decision ang intended results nito.",
  },
  equity: {
    term: "Equity",
    short:
      "Kung patas ba ang pamamahagi ng benefits, burdens, at access, isinasaalang-alang ang pagkakaiba sa mga pangangailangan at sitwasyon ng mga tao.",
  },
  sustainability: {
    term: "Sustainability",
    short:
      "Kung kayang panatilihin sa paglipas ng panahon ang financing, implementation capacity, at intended benefits nang hindi nakasisira sa mga susunod na pangangailangan.",
  },
  transparency: {
    term: "Transparency",
    short:
      "Kung accessible, timely, at naiintindihan ba ang relevant na impormasyon tungkol sa mga desisyon, resources, implementation, at results.",
  },
  accountability: {
    term: "Accountability",
    short:
      "Kung kailangan bang magpaliwanag ang mga responsable tungkol sa mga desisyon at resulta, harapin ang review, at ayusin ang mga problema o managot sa mga kabiguan.",
  },
  baseline: {
    term: "Baseline",
    short:
      "Ang naka-dokumentong panimulang value o kondisyon na ikinukumpara sa susunod na performance o pagbabago.",
  },
  target: {
    term: "Target",
    short:
      "Isang tinukoy na antas ng performance na inaasahan sa isang nakasaad na petsa, sinusukat laban sa isang specific na indicator.",
  },
  "performance-indicator": {
    term: "Performance indicator",
    short:
      "Quantitative o qualitative measure na ginagamit para subaybayan ang isang output, outcome, o ibang aspeto ng performance.",
  },
  "trade-off": {
    term: "Trade-off",
    short:
      "Isang pagpipilian kung saan ang bentahe sa isang criterion ay nangangahulugan ng pagtanggap ng cost, risk, o mas mahinang resulta sa iba.",
  },

  // Module 09
  "problem-owner": {
    term: "Problem owner",
    short:
      "Taong direktang apektado ng problema, policy, program, project, o proposed change, kaya may first-hand na kaalaman at direktang stake sa outcome.",
  },
  "completed-staff-work": {
    term: "Completed Staff Work",
    acronym: "CSW",
    short:
      "Paraan ng pagsuri sa problema at paghahain ng worked-out na solusyon para may malinaw na aksyon ang decision-maker na aprubahan o hindi.",
  },
  coalition: {
    term: "Coalition",
    short:
      "Dalawa o higit pang grupo o actor na may shared objectives, nag-uusap, at nagko-coordinate ng joint action para habulin ang mga ito.",
  },
};
