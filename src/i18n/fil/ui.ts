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
