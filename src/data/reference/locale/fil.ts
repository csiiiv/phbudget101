/**
 * Filipino display overlays for the Phase 1 reference pages.
 * English entries stay the source of truth; ids, URLs, and link hrefs never
 * change — only display text is overridden here. Mirrors the glossary
 * override pattern in src/data/glossary/locale/.
 */

type LinkLabel = { label: string };

type DocumentEntryImport = import("../types").DocumentEntry;
type InstitutionEntryImport = import("../types").InstitutionEntry;
type CalendarRowImport = import("../types").CalendarRow;
type ClassificationBlockImport = import("../types").ClassificationBlock;
type LocalSequenceStepImport = import("../types").LocalSequenceStep;
type LocalDocumentEntryImport = import("../types").LocalDocumentEntry;
type LocalConstraintImport = import("../types").LocalConstraint;
type LocalTimingRowImport = import("../types").LocalTimingRow;
type LegalEntryImport = import("../types").LegalEntry;
type DataSourceEntryImport = import("../types").DataSourceEntry;
type FaqEntryImport = import("../types").FaqEntry;

export interface ReferenceFil {
  /** DocumentEntry phases shared across entries, keyed by English text. */
  documentPhases: Record<string, string>;
  documents: Record<
    string,
    Partial<Omit<DocumentEntryImport, "id" | "link" | "phases">> & {
      link?: LinkLabel;
    }
  >;
  institutions: Record<
    string,
    Partial<Omit<InstitutionEntryImport, "id" | "group" | "link">> & {
      link?: LinkLabel;
    }
  >;
  institutionGroups: Record<InstitutionEntryImport["group"], string>;
  calendarRows: Record<string, Partial<Omit<CalendarRowImport, "id">>>;
  classifications: Record<
    string,
    Partial<Omit<ClassificationBlockImport, "id" | "levels">> & {
      levels: Record<
        string,
        { label?: string; meaning?: string }
      >;
    }
  >;
  localSequence: Record<string, Partial<Omit<LocalSequenceStepImport, "id">>>;
  localDocuments: Record<string, Partial<Omit<LocalDocumentEntryImport, "id">>>;
  localConstraints: Record<string, Partial<Omit<LocalConstraintImport, "id">>>;
  localTiming: Record<string, Partial<Omit<LocalTimingRowImport, "id">>>;
  legalEntries: Record<
    string,
    Partial<Omit<LegalEntryImport, "id" | "link">> & { link?: LinkLabel }
  >;
  dataSources: Record<
    string,
    Partial<Omit<DataSourceEntryImport, "id" | "group" | "link">> & {
      link?: LinkLabel;
    }
  >;
  /** Data-source group headings, keyed by the English group string. */
  dataSourceGroups: Record<string, string>;
  faqEntries: Record<
    string,
    Partial<Omit<FaqEntryImport, "id" | "links">> & {
      /** FAQ link labels keyed by their English label (routes stay as-is). */
      linkLabels?: Record<string, string>;
    }
  >;
}

export const referenceFil: ReferenceFil = {
  documentPhases: {
    Preparation: "Preparation",
    Legislation: "Legislation",
    Execution: "Execution",
    Accountability: "Accountability",
    "Preparation (local)": "Preparation (lokal)",
    "Legislation (local)": "Legislation (lokal)",
    "Execution (local)": "Execution (lokal)",
  },

  documents: {
    nep: {
      answers:
        "Anong paggastos ang imumungkahi ng Pangulo sa Kongreso para sa susunod na fiscal year?",
      contents:
        "Ang proposed national budget ng executive, inayos ayon sa ahensya at program, at isinusumite sa Kongreso bilang panimulang dokumento ng legislation.",
      where:
        "Inilalathala ng DBM kasama ang proposed budget package taun-taon.",
      link: { label: "Mga budget document ng DBM" },
    },
    besf: {
      answers:
        "Paano tumutugma ang mga proposed o programmed na expenditure sa revenues, borrowing, at iba pang financing?",
      contents:
        "Mga talahanayan na nagpapakita ng tinatayang expenditure kasama ang financing na sumusuporta rito.",
      where: "Bahagi ng taunang budget documents na inilalathala ng DBM.",
      link: { label: "Mga volume ng BESF ng DBM" },
    },
    gab: {
      answers:
        "Anong appropriations measure ang pinagtatalunan ng Kongreso bago ito maging batas?",
      contents:
        "Ang proposed na taunang appropriations bill na tinitingnan ng House at Senate bago ito maging GAA.",
      where:
        "Lumalabas ang mga bersyong lehislatibo sa Kongreso; ang napirmahan ay nagiging GAA.",
    },
    gaa: {
      answers:
        "Anong paggastos ang inaprubahan ng Kongreso para sa fiscal year, at sa anong mga kondisyon?",
      contents:
        "Ang taunang appropriations law, kabilang ang mga budget ng ahensya, special-purpose funds, at mga general at special provision.",
      where: "Mga archive ng Official Gazette at mga budget document ng DBM.",
      link: { label: "Archive ng budget documents ng DBM" },
    },
    "veto-message": {
      name: "Veto message ng Pangulo",
      answers:
        "Anong mga appropriation item ang bineto ng Pangulo, at anong sinabi niyang dahilan?",
      contents:
        "Ang mensahe na naglalaman ng mga line-item o iba pang veto na inilapat sa enrolled appropriations bill.",
      where:
        "Inilalathala kasama ng enacted appropriations package kapag may naganap na veto.",
    },
    "far-1": {
      answers:
        "Magkano ang appropriated, allotted, obligated, at disbursed para sa isang reporting period?",
      contents:
        "Report ng ahensya tungkol sa appropriations, allotments, obligations, disbursements, at balances.",
      where:
        "Mga pahina ng Transparency Seal ng ahensya at mga reporting portal ng DBM.",
      link: { label: "SAODB at kaugnay na mga report ng DBM" },
    },
    nca: {
      answers:
        "May naisyu na bang cash authority para mabayaran ng ahensya ang mga karapat-dapat na obligasyon?",
      contents:
        "Cash authority na inilalabas sa pamamagitan ng government banking system para takpan ang mga karapat-dapat na cash needs.",
      where:
        "Mga financial record ng ahensya; maaaring lumabas ang aggregate na release information sa mga report ng DBM.",
    },
    aar: {
      answers:
        "Ano ang natuklasan ng COA tungkol sa mga account, compliance, at operasyon ng entity para sa taon?",
      contents:
        "Taun-taong report ng COA kabilang ang mga financial statement at audit observation.",
      where:
        "Website ng Commission on Audit at mga pahina ng Transparency Seal ng entity.",
      link: { label: "Website ng COA" },
    },
    aip: {
      answers:
        "Anong mga lokal na program at project ang iminumungkahi para sa pondo sa budget year?",
      contents:
        "Ang inaprubahang taunang listahan ng mga program, project, at activity ng LGU na hinalaw mula sa mga investment planning document nito.",
      where:
        "Mga lokal na planning at budget office; kalimitang naka-post kasama ng mga lokal na budget document.",
    },
    "appropriation-ordinance": {
      answers:
        "Anong paggastos ang inaprubahan ng sanggunian para sa LGU, at sa anong mga kondisyon?",
      contents:
        "Ang ordinance na nagbibigay ng authority sa taunang o supplemental budget ng LGU.",
      where: "Mga talaan ng sanggunian at mga website ng lokal na gobyerno.",
    },
  },

  institutions: {
    dbm: {
      role: "Namumuno sa paghahanda ng national budget, sumusuporta sa execution, at namamahala ng mga kaugnay na budget policy at system.",
      produces:
        "Budget call, koordinasyon ng NEP package, mga instrumento ng allotment at cash release, at mga budget circular.",
    },
    dbcc: {
      role: "Nagrerekomenda ng mga macroeconomic assumption, fiscal target, at kabuuang antas ng expenditure para sa budget planning.",
      produces:
        "Mga fiscal program assumption at kaugnay na planning parameter na ginagamit sa preparation.",
    },
    dof: {
      role: "Namumuno sa revenue at financing policy; nangangasiwa sa mga revenue agency at public debt management kasama ang BTr.",
      produces: "Mga revenue at financing policy input sa fiscal program.",
    },
    btr: {
      role: "Namamahala ng cash ng national government at mga public debt operation sa ilalim ng DOF.",
      produces:
        "Mga estadistika ng cash at utang; mga report ng debt at cash operations.",
    },
    bir: {
      role: "Nangangasiwa sa mga national internal revenue tax na pumondo sa malaking bahagi ng national purse.",
      produces: "Mga tax collection report at gabay para sa mga taxpayer.",
    },
    neda: {
      role: "Nagko-coordinate ng socioeconomic planning at nag-aambag sa prioritization na may kaugnayan sa budget.",
      produces: "Mga development plan at kaugnay na planning document.",
    },
    president: {
      role: "Isinusumite ang proposed national budget at maaaring mag-exercise ng line-item veto sa mga appropriation.",
      produces: "Pagsusumite ng NEP; veto message kapag may binetong item.",
    },
    congress: {
      role: "Nagtatalakay at nagpapatibay ng taunang appropriations law sa pamamagitan ng House at Senate.",
      produces: "Mga bersyon ng GAB; enrolled bill papunta sa GAA.",
    },
    bicam: {
      role: "Pinagbubukod-bukod ang nag-iibang bersyon ng House at Senate ng appropriations bill.",
      produces:
        "Bicameral conference committee report sa mga pinagbagay-bagay na probisyon.",
    },
    coa: {
      role: "Sinusuri, ina-audit, at inaayos ang mga account ng gobyerno kabilang ang pondo at ari-arian ng publiko.",
      produces: "Mga Annual Audit Report at kaugnay na audit issuance.",
    },
    gppb: {
      role: "Nagtatakda ng procurement policy at mga sumusuportang patakaran para sa public purchasing.",
      produces: "Mga procurement rule, advisory, at kaugnay na gabay.",
    },
    psa: {
      role: "Gumagawa ng opisyal na estadistika na ginagamit sa mga paghahambing gaya ng inflation adjustment.",
      produces: "CPI at iba pang statistical series.",
    },
    lce: {
      role: "Naghahanda at nagsusumite ng lokal na executive budget sa sanggunian.",
      produces: "Lokal na executive budget proposal.",
    },
    sanggunian: {
      role: "Nagbibigay ng authority sa lokal na budget sa pamamagitan ng appropriation ordinance.",
      produces: "Mga appropriation ordinance at kaugnay na lokal na batas.",
    },
    ldc: {
      role: "Tumutulong sa pagbuo ng mga development plan at investment priority na papasok sa lokal na budget.",
      produces: "Mga input sa development plan at investment program.",
    },
    "dilg-review": {
      role: "Sinusuri ang mga naipasang lokal na budget para sa compliance sa mga legal na kinakailangan pagkatapos magbigay ng authority ang sanggunian.",
      produces: "Mga review action at kaugnay na natuklasan ayon sa batas.",
    },
  },

  institutionGroups: {
    executive: "Pambansang executive",
    legislative: "Lehislatura",
    oversight: "Oversight",
    local: "Lokal na gobyerno",
    other: "Mga kaugnay na body",
  },

  calendarRows: {
    "q4-prior": {
      period: "Dulong bahagi ng nakaraang taon (kalimitang Nob–Dis)",
      national:
        "Nag-isyu ang DBM ng budget call at kaugnay na ceiling para makapaghanda ang mga ahensya ng proposal para sa susunod na fiscal year.",
      local:
        "Tuloy ang lokal na planning at investment programming; naghahanda ang mga office para sa susunod na proposal cycle.",
      note: "Ang eksaktong timing ng budget call ay nakasaad sa DBM issuance ng taong iyon.",
    },
    q1: {
      period: "Enero–Marso",
      national:
        "Pinagtitiyaga ng mga ahensya ang kanilang proposal; tuloy ang mga technical hearing at executive review patungo sa NEP.",
      local:
        "Tuloy ang execution ng kasalukuyang lokal na budget; mga update sa planning kung kinakailangan.",
    },
    q2: {
      period: "Abril–Hunyo",
      national:
        "Pagsasama-sama ng executive ng proposed national budget package.",
      local:
        "Naghahanda ang mga departamento at office ng budget proposal para isumite sa local chief executive (target ng LGC: Hulyo 15).",
    },
    july: {
      national:
        "Isinusumite ng Pangulo ang proposed national budget (NEP package) sa Kongreso sa loob ng constitutional window na nakatali sa pagbubukas ng regular session.",
      local:
        "Isinusumite ng mga department at office head ang kanilang proposal sa LCE (statutory target: sa o bago ang Hulyo 15).",
    },
    "aug-nov": {
      national:
        "Deliberasyon ng House at Senate; mga committee hearing; pagkakataon ng bicameral reconciliation ng magkakaibang bersyon.",
      local:
        "Isinusumite ng LCE ang executive budget sa sanggunian (statutory target: sa o bago ang Oktubre 16).",
    },
    dec: {
      national:
        "Target na maipabatás ang GAA bago magsimula ang fiscal year; veto message kapag may binetong item.",
      local:
        "Layunin ng sanggunian na maipasa ang taunang appropriation ordinance bago magtapos ang taon; kasunod nito ang review.",
    },
    "execution-year": {
      period: "Fiscal year (Ene–Dis)",
      national:
        "Mga allotment at cash release; obligation at disbursement; execution reporting ng ahensya at DBM.",
      local:
        "Execution ng appropriation ordinance; mga supplemental budget kung awtorisado.",
    },
    accountability: {
      period: "Habang at pagkatapos ng fiscal year",
      national:
        "Pag-uulat ng financial at physical performance; audit ng COA at mga Annual Audit Report.",
      local:
        "Ang lokal na pag-uulat at audit ay sumusunod sa mga naaangkop na patakaran para sa LGU.",
    },
  },

  classifications: {
    "expense-class": {
      title: "Mga expense class",
      summary:
        "Pinagsasama-sama ang mga linya ng national budget ayon sa kung ano ang binibili ng pera. Hinahati ng apat na expense class ang gastos sa tao, pang-araw-araw na operasyon, financing, at capital asset.",
      levels: {
        ps: {
          meaning:
            "Mga sahod, wages, at iba pang kabayaran ng mga kawani ng gobyerno.",
        },
        mooe: {
          meaning:
            "Mga goods at serbisyong ginagamit sa regular na operasyon — supplies, utilities, travel, maintenance, at katulad na tuloy-tuloy na gastos.",
        },
        finex: {
          meaning:
            "Mga gastos mula sa mga financial transaction, kabilang ang interest at mga awtorisadong bank o financial charge.",
        },
        co: {
          meaning:
            "Mga asset at pagpapabuti na ang benepisyo ay aabot pa sa susunod na fiscal year, gaya ng imprastruktura at malalaking kagamitan.",
        },
      },
      example:
        "Ang linya para sa pagtatayo ng silid-aralan ay kalimitang Capital Outlays; ang mga sahod ng guro ay Personnel Services; ang mga gamit sa silid-aralan ay MOOE.",
    },
    pap: {
      title: "Program, activity, at project (PAP)",
      summary:
        "Sa loob ng isang ahensya, inaayos ang paggastos para makita ng mambabasa kung aling mga paulit-ulit na activity at partikular na project ang nagsasagawa ng bawat program.",
      levels: {
        agency: {
          label: "Ahensya",
          meaning:
            "Ang departamento, bureau, o office na may hawak ng appropriation.",
        },
        program: {
          meaning:
            "Pangunahing pagpapangkat ng magkakaugnay na trabaho tungo sa isang layunin ng ahensya.",
        },
        activity: {
          meaning: "Paulit-ulit na trabahong nagsasagawa ng program.",
        },
        project: {
          meaning:
            "Gawaing may takdang panahon at tiyak na output, kalimitang capital ang kalikasan.",
        },
      },
      example:
        "Ang parehong piso ay puwedeng basahin bilang kabilang sa isang ahensya, isang program, at isang activity o project — sumasagot ang mga layer na ito sa iba't ibang tanong.",
    },
    lenses: {
      title: "Iba pang karaniwang lente",
      summary:
        "Ang parehong appropriation ay puwedeng hiwain ayon sa organisasyon, sektor, heograpiya, o pinagkunan ng pondo. Sumasagot ang bawat lente sa ibang tanong tungkol sa parehong pera.",
      levels: {
        organizational: {
          label: "Organisasyonal",
          meaning: "Aling ahensya o operating unit ang may hawak ng authority.",
        },
        sectoral: {
          label: "Sektoral",
          meaning:
            "Anong policy sector (halimbawa edukasyon o kalusugan) ang sinusuportahan ng paggastos.",
        },
        geographic: {
          label: "Heograpiko",
          meaning:
            "Saan inaasahang magkakabisa ang paggastos, kapag naka-code ang lokasyon.",
        },
        "funding-source": {
          label: "Pinagkunan ng pondo",
          meaning:
            "Aling fund o financing source ang sumusuporta sa appropriation.",
        },
      },
    },
    uacs: {
      summary:
        "Ang UACS ang coding framework ng buong gobyerno na nagpapakilala ng mga financial transaction nang pare-pareho sa budgeting, accounting, at reporting. Sa antas ng konsepto lamang ito itinuturo sa course; ang mga opisyal na UACS manual ang naglalarawan ng bawat code segment.",
      levels: {
        "code-segments": {
          label: "Mga code segment",
          meaning:
            "Ang bawat bahagi ng isang UACS code ay tumuturo sa isang dimensyon ng classification (tulad ng pinagkunan ng pondo, organisasyon, o object) para makapagtugma ang mga sistema ng parehong transaction sa iba't ibang report.",
        },
        "why-it-matters": {
          label: "Bakit ito mahalaga",
          meaning:
            "Kung walang pare-parehong code, mahirap hakbangin ang parehong paggastos mula proposal hanggang allotment hanggang disbursement sa mga dokumento.",
        },
      },
      example:
        "Kapag nagkokumpara ng mga taon, tingnan muna kung nagbago ang mga code o label bago ituring na parehong item ang dalawang linya.",
    },
  },

  localSequence: {
    plan: {
      step: "Plan",
      detail:
        "Ang lokal na development planning at investment program ang tumutukoy ng mga prayoridad bago ang taunang costing.",
    },
    prepare: {
      step: "Prepare",
      detail:
        "Nagsusumite ang mga department at office head ng proposal; nag-aadvise ang local finance committee; pinagsasama-sama ng local chief executive ang executive budget.",
    },
    authorize: {
      step: "Authorize",
      detail:
        "Ipinapasa ng sanggunian ang taunang (o supplemental) budget sa pamamagitan ng appropriation ordinance.",
    },
    review: {
      step: "Review",
      detail:
        "Sinusuri ng reviewing authority na tinukoy ng batas ang naipasang budget para sa compliance.",
    },
    "execute-account": {
      step: "Execute at account",
      detail:
        "Ipinatutupad ng mga office ang awtorisadong paggastos; ang pag-uulat at audit ay sumusunod sa mga naaangkop na patakaran.",
    },
  },

  localDocuments: {
    ldp: {
      name: "Lokal na development plan / investment program",
      role: "Naglalahad ng mga medium-term na prayoridad at mga project na nagsasagawa nito.",
    },
    aip: {
      role: "Naglalaman ng mga program, project, at activity na iminumungkahi para sa budget year.",
    },
    "executive-budget": {
      name: "Lokal na executive budget",
      role: "Ang taunang proposal ng LCE na isinusumite sa sanggunian.",
    },
    "appropriation-ordinance": {
      role: "Ang authorization ng sanggunian sa taunang o supplemental budget.",
    },
  },

  localConstraints: {
    "development-fund": {
      rule: "Ang bahagi ng share ng LGU sa national taxes ay nakalaan para sa mga development project ayon sa mga patakaran ng Local Government Code at kaugnay na issuance.",
    },
    "calamity-fund": {
      topic: "Calamity / disaster risk fund",
      rule: "Naglalaan ang mga LGU ng calamity o disaster-risk reduction and management fund ayon sa batas para sa mga pangangailangang may kaugnayan sa kalamidad.",
    },
    "personal-services": {
      topic: "Limitasyon sa personal services",
      rule: "Ang paggastos sa personal services ay may statutory na ceiling na nag-iiba ayon sa income classification ng LGU at kaugnay na patakaran.",
    },
    "debt-service": {
      rule: "Ang lokal na paghiram at debt service ay dapat sumunod sa mga patakaran ng authorization at limit sa Code at kaugnay na finance regulation.",
    },
    levels: {
      topic: "Probinsya / lungsod / munisipyo / barangay",
      rule: "May sariling taxing power, expenditure responsibility, at review chain ang bawat antas ng LGU. Papasok ang mga budget ng barangay sa mas malawak na lokal na struktura pero hiwalay na ordinance ang mga ito.",
    },
  },

  localTiming: {
    "proposals-to-lce": {
      milestone: "Mga proposal ng office papunta sa LCE",
      when: "Sa o bago ang Hulyo 15 (target ng Local Government Code)",
    },
    "budget-to-sanggunian": {
      milestone: "Executive budget papunta sa sanggunian",
      when: "Sa o bago ang Oktubre 16 (target ng Local Government Code)",
    },
    enactment: {
      milestone: "Pagpasa ng taunang budget",
      when: "Target bago magsimula ang fiscal year",
    },
  },

  legalEntries: {
    "constitution-art-vi": {
      name: "1987 Philippine Constitution, Artikulo VI (Legislative Department)",
      governs:
        "Ang kapangyarihan ng Kongreso sa mga appropriation at ang prinsipyong walang perang maaaring bayaran mula sa Treasury maliban kung may appropriation na ginawa sa pamamagitan ng batas.",
      relevant:
        "Artikulo VI, Seksiyon 24 (sa House nagmumula ang mga appropriation) at Seksiyon 29 (walang perang mababayaran nang walang appropriation; mga patakaran sa special fund).",
      link: { label: "Official Gazette — 1987 Constitution" },
    },
    "admin-code": {
      governs:
        "Organisasyon at authority ng executive na bumubuo sa paraan ng paghahanda at pagpapatupad ng budget ng mga pambansang ahensya.",
      relevant:
        "Mga probisyon tungkol sa budget execution authority at organisasyon ng ahensya na ginagamit na background sa execution chain.",
      link: { label: "Official Gazette — Administrative Code" },
    },
    lgc: {
      name: "Local Government Code of 1991 (Republic Act Blg. 7160)",
      governs:
        "Struktura ng lokal na gobyerno, mga kapangyarihan sa pagbubuwis at paggastos, proseso ng lokal na budget, at mga share sa national taxes.",
      relevant:
        "Mga libro tungkol sa lokal na pagbubuwis, lokal na budgeting, at mga lokal na special body; batayan ng Module 6 at ng mga lokal na reference page.",
      link: { label: "LawPhil — RA 7160" },
    },
    "ra-10351": {
      name: "Sin Tax Reform Law (Republic Act Blg. 10351)",
      governs:
        "Muling pagkakaayos ng excise tax sa alkohol at tobacco, kabilang ang mga earmark para sa nakasaad na gamit sa kalusugan.",
      relevant:
        "Worked example sa Module 2 kung paano maididirekta ng tax design ang karagdagang kita.",
      link: { label: "LawPhil — RA 10351" },
    },
    train: {
      name: "Tax Reform for Acceleration and Inclusion (TRAIN) (Republic Act Blg. 10963)",
      governs:
        "Mga malaking pagbabago sa pambansang tax policy na nakakaapekto sa struktura ng kita.",
      relevant:
        "Background para sa talakayan sa revenue; gamitin ang opisyal na teksto at mga primer ng BIR/DOF para sa kasalukuyang rate.",
      link: { label: "LawPhil — RA 10963" },
    },
    "ra-9184": {
      name: "Government Procurement Reform Act (Republic Act Blg. 9184)",
      governs:
        "Dating pambansang procurement framework na mahabang panahong ginamit sa public bidding at mga kaugnay na mode.",
      relevant:
        "Historical na reference para sa talakayan sa procurement; suriin ang kasalukuyang umiiral na batas at IRR.",
      link: { label: "GPPB — mga materyal tungkol sa RA 9184" },
    },
    "ra-12009": {
      name: "New Government Procurement Act (Republic Act Blg. 12009)",
      governs:
        "Na-update na pambansang procurement statute at mga fit-for-purpose na mode, sakop ng IRR nito.",
      relevant:
        "Pangunahing statute na ginagamit sa Module 5 para sa modernong procurement framework.",
      link: { label: "GPPB — New Government Procurement Act" },
    },
    gaa: {
      name: "Taunang General Appropriations Act (GAA)",
      governs:
        "Spending authority, mga general provision, at special provision ng isang partikular na taon.",
      relevant:
        "Ang enacted budget law para sa bawat fiscal year; basahin lagi ang taong pinag-aaralan mo.",
      link: { label: "Mga budget document ng DBM" },
    },
  },

  dataSources: {
    "dbm-docs": {
      name: "Mga budget document ng DBM (NEP, GAA, BESF)",
      contains:
        "Mga volume ng proposed at enacted national budget, mga talahanayan ng BESF, at kaugnay na dokumento para sa bawat fiscal year.",
      cadence: "Taunang budget season; may archive para sa bawat taon.",
      caution:
        "Tandaan kung aling fiscal year ang binabasa mo at kung proposed o enacted ang mga numero.",
    },
    "dbm-execution": {
      name: "Mga execution at accountability report ng DBM",
      contains:
        "Mga statement at portal na sumasaklaw sa appropriations, allotments, obligations, disbursements, at balances.",
      cadence: "Pana-panahon sa loob ng fiscal year at pagkatapos ng year-end.",
      caution:
        "Depende sa formula at cutoff date ang utilization ratio — basahin ang mga note ng report.",
    },
    "transparency-seal": {
      name: "Mga pahina ng Transparency Seal ng ahensya",
      contains:
        "Mga inaprubahang budget, target, financial at physical report, at procurement information na naka-post ng bawat ahensya.",
      cadence: "Ina-update ng bawat ahensya; nag-iiba ang kalidad at pagkakumpleto.",
      caution:
        "Ituring ang mga nawawala o huling post na documentation gap, hindi patunay na walang nangyari.",
    },
    "coa-aar": {
      name: "Mga Annual Audit Report ng COA",
      contains:
        "Mga audit report sa antas ng entity, mga financial statement, at audit observation.",
      cadence:
        "Taun-taon, na may pagka-late sa paglathala pagkatapos ng taong na-audit.",
    },
    btr: {
      name: "Mga estadistika ng Bureau of the Treasury",
      contains:
        "Cash operation ng national government, utang, at kaugnay na estadistika ng Treasury.",
      cadence: "Buwanang at taunang release.",
    },
    bir: {
      name: "Data ng koleksyon ng Bureau of Internal Revenue",
      contains:
        "Performance ng tax collection at kaugnay na impormasyon para sa mga taxpayer.",
      cadence: "Mga pana-panahong collection report.",
    },
    "psa-cpi": {
      name: "Consumer Price Index ng PSA",
      contains:
        "Mga CPI series na ginagamit sa paghahambing ng purchasing power sa iba't ibang taon (real kumpara sa nominal na halaga).",
      cadence: "Buwanang CPI release; pana-panahon ang pag-rebisa ng base year.",
      caution:
        "Isaad kung aling CPI series at base year ang ginamit kapag nag-ajust ng budget amount.",
    },
    philgeps: {
      name: "PhilGEPS / mga procurement portal",
      contains:
        "Mga public procurement notice, award, at kaugnay na bid information para sa mga covered entity.",
      cadence: "Patuloy habang naka-post ang mga procurement.",
      caution:
        "Nagbabago ang coverage at search tool ng portal; tiyakin ang opisyal na site para sa taong kailangan mo.",
    },
  },

  dataSourceGroups: {
    "National budget proposals and laws":
      "Mga proposal at batas sa pambansang budget",
    "National budget execution": "Execution ng pambansang budget",
    "Audit and oversight": "Audit at oversight",
    "Revenue, cash, and debt": "Kita, cash, at utang",
    "Prices and population": "Presyo at populasyon",
    Procurement: "Procurement",
  },

  faqEntries: {
    "budget-vs-gaa": {
      question: "Ano ang pagitan ng “budget” at ng GAA?",
      answer:
        "Karaniwang ginagamit ng mga tao ang “budget” para sa buong kuwento mula proposal hanggang paggastos. Ang General Appropriations Act (GAA) ang taunang batas na nagbibigay ng authority sa paggastos ng national government para sa isang fiscal year. Ang National Expenditure Program (NEP) ang proposal ng Pangulo bago kumilos ang Kongreso.",
      linkLabels: {
        "Glossary: GAA": "Glossary: GAA",
        "Glossary: NEP": "Glossary: NEP",
        "Document library": "Library ng mga budget document",
      },
    },
    "why-next-year": {
      question:
        "Bakit pinagtatalunan ngayong taon ang budget ng susunod na taon?",
      answer:
        "May budget cycle ang Pilipinas. Ang preparation at legislation para sa susunod na fiscal year ay nangyayari sa nakaraang calendar year para handa na ang authority pagpasok ng Enero. Ang execution at accountability naman ay tumatakbo sa buong (at lampas pa sa) fiscal year na iyon.",
      linkLabels: {
        "Budget calendar": "Budget calendar",
        "Module 4 overview": "Overview ng Module 4",
      },
    },
    "is-nep-law": {
      question: "Batas na ba ang NEP?",
      answer:
        "Hindi. Ang NEP ang proposed national budget ng executive. Nagiging spending authority lamang ito pagkatapos magpasa ang Kongreso ng appropriations at maging batas ang measure (kalimitang bilang GAA), sakop ng mga veto kung mayroon.",
      linkLabels: {
        "Document library: NEP": "Library ng mga dokumento: NEP",
        "Document library: GAA": "Library ng mga dokumento: GAA",
      },
    },
    "late-budget": {
      question: "Ano ang nangyayari kapag na-late ang budget?",
      answer:
        "Kung wala pa ang bagong GAA, sumusunod ang gobyerno sa mga patakaran sa reenactment at kaugnay na panuntunan na naaangkop sa sitwasyong iyon. Depende ang eksaktong epekto sa mga constitutional at statutory na patakaran at sa mga ipinasa ng Kongreso at ng executive. Tingnan ang opisyal na gabay para sa kasalukuyang taon sa halip na umasa sa isang solong inaasahang kalalabasan.",
      linkLabels: {
        "Legal references": "Legal at policy references",
        "Institutional map": "Mapa ng mga institusyon",
      },
    },
    "barangay-share": {
      question: "Makikita ko ba kung magkano ang napunta sa barangay ko?",
      answer:
        "Ang mga lokal na budget ay inaaprubahan sa pamamagitan ng appropriation ordinance at mga kaugnay na lokal na dokumento. Ang mga share sa National Tax Allotment at ang kita ng LGU mula sa sariling pinagkunan ay lumalabas sa mga lokal na budget paper, hindi lamang sa pambansang GAA. Magsimula sa mga naka-post na budget document ng LGU mo at sa lokal na reference page.",
      linkLabels: {
        "Local budget structures": "Struktura ng budget ng lokal na gobyerno",
        "Module 6": "Module 6",
      },
    },
    disagree: {
      question:
        "Ano ang pwede kong gawin kung hindi ako sang-ayon sa isang budget decision?",
      answer:
        "Tinutulungan ka ng budget literacy na matukoy kung saang stage at aling actor ang may hawak ng desisyon na pinag-aalala mo — proposal, legislation, execution, o accountability — at aling dokumento ang nagsasabi nito. Nag-iiba ang mga opsyon sa pakikilahok sa pambansa at lokal na proseso; sakop ng Module 9 ang pakikinig, paghahanap ng target, pagbuo ng proposal, at pakikipagtulungan, nang walang itinatakdang isang partikular na kampanya.",
      linkLabels: {
        "Module 9": "Module 9",
        "Institutional map": "Mapa ng mga institusyon",
      },
    },
    suspicious: {
      question: "Saan ko maituturo ang kahina-hinalang paggastos?",
      answer:
        "Kabilang sa mga oversight channel ang internal control ng ahensya, mga proseso ng Commission on Audit, at iba pang maseselyong legal na mekanismo ng gobyerno para sa mga reklamo. Ipinaliwanag ng course na ito kung paano dapat gumalaw ang pera; hindi ito pamalit sa legal na payo. Gamitin ang mga opisyal na channel para sa pag-uulat at mag-ingat ng kopya ng mga dokumentong sumusuporta sa iyong concern.",
      linkLabels: {
        COA: "COA",
        "Sources and attribution": "Mga pinagkunan at attribution",
      },
    },
  },
};

