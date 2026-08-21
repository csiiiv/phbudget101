import type { UiStrings } from "../types";

export const ui: UiStrings = {
  app: {
    title: "PH Budget 101",
    tagline: "Philippine Public Financial Management",
    footer:
      "PH Budget 101 — Philippine Public Financial Management. Progress is stored on this device; export it from Settings.",
  },
  nav: {
    home: "Home",
    course: "Course",
    reference: "Reference",
    settings: "Settings",
    about: "About",
  },
  home: {
    eyebrow: "A self-paced course",
    headline: "Understanding Philippine Public Financial Management",
    subhead:
      "Where the money comes from, how it is planned and legislated, how it turns into services — and where you can participate.",
    startCourse: "Start the course",
    continueCourse: "Continue: the course",
    continueLesson: (id, title) => `Continue: ${id} ${title}`,
    browseReference: "Browse the reference",
    lessonsCompleted: (count) =>
      `${count} lesson${count === 1 ? "" : "s"} completed so far.`,
    courseSection: "The course",
    moduleComplete: (total) => `Module complete — all ${total} lessons`,
  },
  module: {
    label: (num) => `Module ${num}`,
    notFound: "Module not found",
    backHome: "Back to home",
    lessonsHeading: "Lessons",
    lessonsComplete: (done, total) => `${done} of ${total} lessons complete`,
    inProgress: "In progress",
    moduleComplete: "Module complete",
    moduleCompleteBody: (total, num) =>
      `You finished all ${total} lessons of Module ${num}.`,
    nextModule: (num, title) => `Next module: ${num} — ${title} →`,
  },
  lesson: {
    notFound: "Lesson not found",
    markComplete: "Mark lesson complete",
    lessonCompleted: "Lesson completed",
    previous: "← Previous",
    next: "Next →",
    courseHome: "Course home →",
    courseHomeBody: "You reached the end of this module — return to the course",
    sectionOf: (index, total) => `Section ${index} of ${total}`,
    continue: "Continue →",
    readingModeGuided: "Guided",
    readingModeFull: "Full lesson",
  },
  settings: {
    title: "Settings",
    intro:
      "Your progress is stored only on this device. Export it to move to another device or keep a backup.",
    language: "Language",
    languageHelp:
      "Choose the language for the course interface and translated lessons.",
    progress: "Progress",
    statusInProgress: "In progress",
    statusNotStarted: "Not started",
    pathLabel: (path) => `(${path} path)`,
    modulesWithActivity: (count) => `Modules with activity: ${count}`,
    export: "Export progress",
    import: "Import progress",
    clear: "Clear progress",
    initialize: "Initialize progress",
    exported: "Progress downloaded.",
    imported:
      "Progress imported. Your previous progress on this device was replaced.",
    cleared: "Progress cleared on this device.",
    initialized: "Progress initialized.",
    noProgressExport: "No progress to export yet.",
  },
  term: {
    openGlossary: "Open glossary",
    missing: (id) => `Missing glossary term: ${id}`,
  },
  figure: {
    asOf: (date, source) => `As of ${date} · ${source}`,
    missing: (module, id) => `[missing figure: ${module}/${id}]`,
  },
  coursework: {
    lockedPrompt:
      "One step left: mark this lesson complete below. Your routes unlock the moment you do.",
    chooseLocked: "Choose the route that fits you today:",
    chooseUnlocked: "Lesson complete — choose the route that fits you today:",
  },
  keyTakeaway: {
    label: "Key takeaway",
  },
  knowledgeCheck: {
    defaultTitle: "Check your understanding",
    notQuite: "Not quite — try again.",
    allCorrect: "All correct on the first try — nice work.",
    checkAnswer: "Check answer",
    tryAgain: "Try again",
    showAnswer: "Show answer",
    nextQuestion: "Next question",
  },
  reference: {
    title: "Reference",
    indexIntro:
      "Detailed material outside the learning path: glossary, documents, institutions, calendar, and more.",
    pages: {
      glossary: "Glossary",
      documentLibrary: "Budget document library",
      institutionalMap: "Institutional map",
      budgetCalendar: "Budget calendar",
      classification: "Classification reference",
      localBudgetStructures: "Local government budget structures",
      acronyms: "Acronyms",
      legalReferences: "Legal and policy references",
      sources: "Sources and attribution",
      dataSources: "Data-source directory",
      faq: "FAQ",
    },
    verifiedNote: (date) =>
      `Orientation content last reviewed ${date}. Confirm current-year circulars, calendars, and portal URLs before relying on timing or links for a live decision.`,
    intros: {
      documentLibrary:
        "What each major document is for, when it appears in the cycle, and where to find the official version. Course replicas are simplified teaching aids, not official facsimiles.",
      institutionalMap:
        "Who does what across the budget cycle. Roles are summarized for orientation; enabling laws and current issuances control the details.",
      budgetCalendar:
        "Typical national and local timing across the cycle. Exact dates move with each year’s issuances — use this table to orient, then verify.",
      classification:
        "How budget tables are organized — expense classes, program hierarchy, and other lenses used in Modules 3 and 7.",
      localBudgetStructures:
        "Local documents, the prepare–authorize–review sequence, and statutory constraint themes for Module 6. Verify percentages and ceilings against the current Local Government Code and implementing guidance for your LGU type.",
      legalReferences:
        "Laws and issuances the course relies on. Entries state what each governs and point to an official or widely used public text — no advocacy commentary.",
      dataSources:
        "Public portals and datasets for looking up numbers the course cites — or for your own follow-the-money work.",
      faq: "Short answers to common questions, with links into glossary entries, reference pages, and modules.",
    },
    cyclePhase: "Cycle phase:",
    questionsItAnswers: "Questions it answers:",
    whereToLook: "Where to look:",
    glossaryEntry: "Glossary entry",
    keyOutputs: "Key outputs:",
    period: "Period",
    national: "National",
    local: "Local",
    nowMarker: "Happening Now",
    phClock: (time) => `Current time in the Philippines (PHT): ${time}`,
    example: "Example:",
    budgetSequence: "Budget sequence",
    keyLocalDocuments: "Key local documents",
    statutoryTiming: "Statutory timing targets",
    constraintThemes: "Constraint themes",
    constraintThemesNote:
      "These are orientation notes, not a substitute for the Code text.",
    basis: "Basis:",
    lgcReferenceLink: "Local Government Code reference",
    governs: "Governs:",
    relevantToCourse: "Relevant to the course:",
    updateCadence: "Update cadence:",
    caution: "Caution:",
    glossaryIntro:
      "Short definitions used in the course. Lesson terms with a dotted underline open the matching entry here. This list grows as modules are authored.",
    acronymsIntro:
      "Expansions for every acronym in the glossary. Each row links to the full entry.",
    notRegistered:
      "No reference page is registered for this path. Return to the",
    referenceIndex: "reference index",
    sourcesIntro:
      "Named source credits for the course. Lesson text itself stays focused on the PFM system; fuller bibliographic expansion of the guidebook’s reference list is planned for a later pass.",
    sourcesPrimary: "Primary source",
    sourcesPublishedBy: "Published by",
    sourcesFundedBy: "funded by the",
    sourcesAlsoOn: "Also on",
    sourcesDoi: "(DOI: 10.13140/RG.2.2.18173.74726)",
    sourcesRedesign:
      "PH Budget 101 redesigns that material for a general audience. It is not a page-by-page conversion. See also the",
    sourcesSeeAlso: "page.",
    sourcesAbout: "About",
    sourcesPageWord: "page",
    sourcesOfficialData: "Official data and primers",
  },
  languageSwitcher: {
    label: "Change language",
  },
  welcome: {
    title: "Welcome to PH Budget 101",
    intro:
      "Learn where public money comes from, how budgets are made, and how they become public services. Choose a language to get started.",
    languageLabel: "Choose your language",
    dontShowAgain: "Don't show this again",
    continue: "Start exploring",
  },
};
