export interface UiStrings {
  app: {
    title: string;
    tagline: string;
    footer: string;
  };
  nav: {
    home: string;
    course: string;
    reference: string;
    settings: string;
    about: string;
  };
  home: {
    eyebrow: string;
    headline: string;
    subhead: string;
    startCourse: string;
    continueCourse: string;
    continueLesson: (id: string, title: string) => string;
    browseReference: string;
    lessonsCompleted: (count: number) => string;
    courseSection: string;
    moduleComplete: (total: number) => string;
  };
  module: {
    label: (num: string) => string;
    notFound: string;
    backHome: string;
    lessonsHeading: string;
    lessonsComplete: (done: number, total: number) => string;
    inProgress: string;
    moduleComplete: string;
    moduleCompleteBody: (total: number, num: string) => string;
    nextModule: (num: string, title: string) => string;
  };
  lesson: {
    notFound: string;
    markComplete: string;
    lessonCompleted: string;
    previous: string;
    next: string;
    courseHome: string;
    courseHomeBody: string;
    sectionOf: (index: number, total: number) => string;
    continue: string;
    readingModeGuided: string;
    readingModeFull: string;
  };
  settings: {
    title: string;
    intro: string;
    language: string;
    languageHelp: string;
    progress: string;
    statusInProgress: string;
    statusNotStarted: string;
    pathLabel: (path: string) => string;
    modulesWithActivity: (count: number) => string;
    export: string;
    import: string;
    clear: string;
    initialize: string;
    exported: string;
    imported: string;
    cleared: string;
    initialized: string;
    noProgressExport: string;
  };
  term: {
    openGlossary: string;
    missing: (id: string) => string;
  };
  figure: {
    asOf: (date: string, source: string) => string;
    missing: (module: string, id: string) => string;
  };
  coursework: {
    lockedPrompt: string;
    chooseLocked: string;
    chooseUnlocked: string;
  };
  keyTakeaway: {
    label: string;
  };
  knowledgeCheck: {
    defaultTitle: string;
    notQuite: string;
    allCorrect: string;
    checkAnswer: string;
    tryAgain: string;
    showAnswer: string;
    nextQuestion: string;
  };
  reference: {
    title: string;
    indexIntro: string;
    pages: {
      glossary: string;
      documentLibrary: string;
      institutionalMap: string;
      budgetCalendar: string;
      classification: string;
      localBudgetStructures: string;
      acronyms: string;
      legalReferences: string;
      sources: string;
      dataSources: string;
      faq: string;
    };
    verifiedNote: (date: string) => string;
    intros: {
      documentLibrary: string;
      institutionalMap: string;
      budgetCalendar: string;
      classification: string;
      localBudgetStructures: string;
      legalReferences: string;
      dataSources: string;
      faq: string;
    };
    cyclePhase: string;
    questionsItAnswers: string;
    whereToLook: string;
    glossaryEntry: string;
    keyOutputs: string;
    period: string;
    national: string;
    local: string;
    nowMarker: string;
    phClock: (time: string) => string;
    example: string;
    budgetSequence: string;
    keyLocalDocuments: string;
    statutoryTiming: string;
    constraintThemes: string;
    constraintThemesNote: string;
    basis: string;
    lgcReferenceLink: string;
    governs: string;
    relevantToCourse: string;
    updateCadence: string;
    caution: string;
    glossaryIntro: string;
    acronymsIntro: string;
    notRegistered: string;
    referenceIndex: string;
    sourcesIntro: string;
    sourcesPrimary: string;
    sourcesPublishedBy: string;
    sourcesFundedBy: string;
    sourcesAlsoOn: string;
    sourcesDoi: string;
    sourcesRedesign: string;
    sourcesSeeAlso: string;
    sourcesAbout: string;
    sourcesPageWord: string;
    sourcesOfficialData: string;
  };
  languageSwitcher: {
    label: string;
  };
  welcome: {
    title: string;
    intro: string;
    languageLabel: string;
    dontShowAgain: string;
    continue: string;
  };
}

export type CourseLocaleStrings = {
  modules: Record<
    string,
    {
      title: string;
      purpose: string;
      lessons: Record<string, string>;
    }
  >;
};
