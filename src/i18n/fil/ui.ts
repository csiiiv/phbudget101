import type { UiStrings } from "../types";

export const ui: UiStrings = {
  app: {
    title: "PH Budget 101",
    tagline: "Public Financial Management sa Pilipinas",
    footer:
      "PH Budget 101 — Public Financial Management sa Pilipinas. Naka-save ang progress mo sa device na ito; i-export ito sa Settings kung kailangan.",
  },
  nav: {
    home: "Home",
    course: "Course",
    reference: "Reference",
    settings: "Settings",
    about: "About",
  },
  home: {
    eyebrow: "Self-paced na course",
    headline: "Public Financial Management sa Pilipinas",
    subhead:
      "Saan galing ang pera ng gobyerno, paano ito pinaplano at ginagawang batas, paano ito nagiging serbisyo — at paano ka puwedeng makilahok.",
    startCourse: "Simulan ang course",
    continueCourse: "Ituloy ang course",
    continueLesson: (id, title) => `Ituloy: ${id} ${title}`,
    browseReference: "Tingnan ang reference",
    lessonsCompleted: (count) => {
      const n = count === 1 ? "lesson" : "lessons";
      return `${count} ${n} na ang natapos mo.`;
    },
    courseSection: "Ang course",
    moduleComplete: (total) =>
      `Tapos na ang module — kumpleto ang ${total} lessons`,
  },
  module: {
    label: (num) => `Module ${num}`,
    notFound: "Walang ganitong module",
    backHome: "Bumalik sa Home",
    lessonsHeading: "Lessons",
    lessonsComplete: (done, total) =>
      `${done} sa ${total} lessons ang tapos na`,
    inProgress: "In progress",
    moduleComplete: "Tapos na ang module",
    moduleCompleteBody: (total, num) =>
      `Natapos mo ang lahat ng ${total} lessons sa Module ${num}.`,
    nextModule: (num, title) => `Susunod na module: ${num} — ${title} →`,
  },
  lesson: {
    notFound: "Walang ganitong lesson",
    markComplete: "Markahan bilang tapos",
    lessonCompleted: "Tapos na ang lesson",
    previous: "← Bumalik",
    next: "Susunod →",
    courseHome: "Home ng course →",
    courseHomeBody: "Nasa dulo ka na ng module na ito — bumalik sa course",
    sectionOf: (index, total) => `Section ${index} sa ${total}`,
    continue: "Magpatuloy →",
    readingModeGuided: "Gabay",
    readingModeFull: "Buong lesson",
  },
  settings: {
    title: "Settings",
    intro:
      "Naka-save lang ang progress mo sa device na ito. I-export ito kung lilipat ka ng device o gusto mong mag-backup.",
    language: "Wika",
    languageHelp:
      "Piliin ang wika para sa course interface at mga available na translated lessons.",
    progress: "Progress",
    statusInProgress: "In progress",
    statusNotStarted: "Hindi pa nasisimulan",
    pathLabel: (path) => `(landas na ${path})`,
    modulesWithActivity: (count) => `Modules na may progress: ${count}`,
    export: "I-export ang progress",
    import: "I-import ang progress",
    clear: "Burahin ang progress",
    initialize: "Simulan ang progress",
    exported: "Na-download ang progress.",
    imported:
      "Na-import ang progress. Pinalitan nito ang dating progress sa device na ito.",
    cleared: "Nabura ang progress sa device na ito.",
    initialized: "Nasimulan ang progress.",
    noProgressExport: "Wala pang progress na puwedeng i-export.",
  },
  term: {
    openGlossary: "Buksan ang glossary",
    missing: (id) => `Nawawalang termino sa glossary: ${id}`,
  },
  figure: {
    asOf: (date, source) => `Noong ${date} · ${source}`,
    missing: (module, id) => `[nawawalang figure: ${module}/${id}]`,
  },
  coursework: {
    lockedPrompt:
      "Isang step na lang: markahan ang lesson bilang tapos sa ibaba. Pagkatapos, pwede ka nang pumili ng ruta.",
    chooseLocked: "Piliin ang rutang bagay sa iyo ngayon:",
    chooseUnlocked:
      "Tapos na ang lesson — piliin ang rutang bagay sa iyo ngayon:",
  },
  keyTakeaway: {
    label: "Tandaan",
  },
  knowledgeCheck: {
    defaultTitle: "Check kung naintindihan mo",
    notQuite: "Hindi pa tama — subukan ulit.",
    allCorrect: "Tama lahat sa unang try — ayos!",
    checkAnswer: "Tingnan kung tama",
    tryAgain: "Subukan ulit",
    showAnswer: "Ipakita ang sagot",
    nextQuestion: "Susunod na tanong",
  },
  reference: {
    title: "Reference",
    indexIntro:
      "Mga detalyadong materyal sa labas ng learning path: glossary, mga dokumento, institusyon, calendar, at iba pa.",
    pages: {
      glossary: "Glossary",
      documentLibrary: "Library ng mga budget document",
      institutionalMap: "Mapa ng mga institusyon",
      budgetCalendar: "Budget calendar",
      classification: "Classification reference",
      localBudgetStructures: "Struktura ng budget ng lokal na gobyerno",
      acronyms: "Mga acronym",
      legalReferences: "Legal at policy references",
      sources: "Mga pinagkunan at attribution",
      dataSources: "Directory ng mga data source",
      faq: "FAQ",
    },
    verifiedNote: (date) =>
      `Huling repasuhin ang orientation content noong ${date}. I-verify ang mga current na circular, calendar, at portal URL ng kasalukuyang taon bago umasa sa timing o link para sa isang desisyong gumagamit ng tunay na datos.`,
    intros: {
      documentLibrary:
        "Ano ang layunin ng bawat mahalagang dokumento, kailan ito lumalabas sa cycle, at saan mo mahahanap ang opisyal na bersyon. Ang mga replika sa course ay pinayat na panturo, hindi opisyal na facsimile.",
      institutionalMap:
        "Sino ang gumagawa ng ano sa buong budget cycle. Buod lamang ang mga role para sa orientation; ang mga batas na nagbibigay-buhay at mga kasalukuyang issuance ang kumokontrol sa mga detalye.",
      budgetCalendar:
        "Karaniwang pambansa at lokal na timing sa buong cycle. Nag-iiba ang mga eksaktong petsa sa bawat taon — gamitin ang talahanayang ito para makapag-orient, pagkatapos ay i-verify.",
      classification:
        "Paano inaayos ang mga talahanayan ng budget — mga expense class, hierarchy ng program, at iba pang lente na ginagamit sa Modules 3 at 7.",
      localBudgetStructures:
        "Mga lokal na dokumento, ang sequence na prepare–authorize–review, at mga tema ng statutory constraint para sa Module 6. I-verify ang mga porsyento at ceiling laban sa kasalukuyang Local Government Code at implementing guidance para sa uri ng LGU mo.",
      legalReferences:
        "Mga batas at issuance na ginagamit ng course. Naglalahad ang bawat entry kung ano ang sakop nito at itinuturo sa isang opisyal o malawakang ginagamit na pampublikong teksto — walang advocacy commentary.",
      dataSources:
        "Mga pampublikong portal at dataset para sa paghahanap ng mga numerong binabanggit ng course — o para sa sarili mong follow-the-money work.",
      faq: "Maikling sagot sa mga karaniwang tanong, kasama ang mga link papunta sa mga glossary entry, reference page, at module.",
    },
    cyclePhase: "Bahagi ng cycle:",
    questionsItAnswers: "Mga tanong na sinasagot nito:",
    whereToLook: "Saan hanapin:",
    glossaryEntry: "Entry sa glossary",
    keyOutputs: "Pangunahing outputs:",
    period: "Panahon",
    national: "Pambansa",
    local: "Lokal",
    nowMarker: "Happening Now",
    phClock: (time) => `Kasalukuyang oras sa Pilipinas (PHT): ${time}`,
    example: "Halimbawa:",
    budgetSequence: "Sequence ng budget",
    keyLocalDocuments: "Mga pangunahing lokal na dokumento",
    statutoryTiming: "Mga statutory na target ng timing",
    constraintThemes: "Mga tema ng constraint",
    constraintThemesNote:
      "Orientation notes lamang ang mga ito, hindi pamalit sa mismong teksto ng Code.",
    basis: "Batas na batayan:",
    lgcReferenceLink: "Reference sa Local Government Code",
    governs: "Sakop nito:",
    relevantToCourse: "May kaugnayan sa course:",
    updateCadence: "Dalas ng update:",
    caution: "Paalala:",
    glossaryIntro:
      "Mga maikling depinisyon na ginagamit sa course. Ang mga term sa mga lesson na may dotted underline ay nagbubukas ng kaukulang entry dito. Lumalaki ang listahang ito habang dinadagdagan ang mga module.",
    acronymsIntro:
      "Buong porma ng bawat acronym sa glossary. Ang bawat row ay nagli-link sa buong entry.",
    notRegistered:
      "Walang nakarehistrong reference page para sa path na ito. Bumalik sa",
    referenceIndex: "index ng reference",
    sourcesIntro:
      "Mga pinangalangang kredito sa pinagkunan para sa course. Nakatuon ang mismong teksto ng mga lesson sa PFM system; ang mas buong bibliographic na pagpapalawig ng reference list ng guidebook ay nakalaan para sa isang susunod na pass.",
    sourcesPrimary: "Pangunahing pinagkunan",
    sourcesPublishedBy: "Inilathala ng",
    sourcesFundedBy: "pinondohan ng",
    sourcesAlsoOn: "Meron din sa",
    sourcesDoi: "(DOI: 10.13140/RG.2.2.18173.74726)",
    sourcesRedesign:
      "Iniangat muli ng PH Budget 101 ang materyal na iyon para sa pangkalahatang mambabasa. Hindi ito page-by-page na conversion. Tingnan din ang",
    sourcesSeeAlso: "page.",
    sourcesAbout: "About",
    sourcesPageWord: "page",
    sourcesOfficialData: "Opisyal na datos at primer",
  },
  languageSwitcher: {
    label: "Palitan ang wika",
  },
  welcome: {
    title: "Welcome sa PH Budget 101",
    intro:
      "Alamin kung saan galing ang pera ng gobyerno, paano ginagawa ang budget, at paano ito nagiging mga serbisyo. Piliin ang wikang mas komportable kang gamitin.",
    languageLabel: "Piliin ang wika mo",
    dontShowAgain: "Huwag na itong ipakita sa susunod",
    continue: "Simulan na",
  },
};
