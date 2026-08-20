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
