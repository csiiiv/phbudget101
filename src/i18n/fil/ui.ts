import type { UiStrings } from '../types';

export const ui: UiStrings = {
  app: {
    title: 'PH Budget 101',
    tagline: 'Pamamahala sa Pananalapi ng Publiko ng Pilipinas',
    footer:
      'PH Budget 101 — Pamamahala sa Pananalapi ng Publiko ng Pilipinas. Ang progreso ay naka-imbak sa device na ito; i-export mula sa Mga Setting.',
  },
  nav: {
    home: 'Home',
    course: 'Kurso',
    reference: 'Sanggunian',
    settings: 'Mga Setting',
    about: 'Tungkol',
  },
  home: {
    eyebrow: 'Isang self-paced na kurso',
    headline: 'Pag-unawa sa Pamamahala sa Pananalapi ng Publiko ng Pilipinas',
    subhead:
      'Saan nagmumula ang pera, paano ito pinaplano at isinabatas, paano ito nagiging serbisyo — at saan ka makakalahok.',
    startCourse: 'Simulan ang kurso',
    continueCourse: 'Magpatuloy: ang kurso',
    continueLesson: (id, title) => `Magpatuloy: ${id} ${title}`,
    browseReference: 'Tingnan ang sanggunian',
    lessonsCompleted: (count) => {
      const n = count === 1 ? 'aralin' : 'mga aralin';
      return `${count} ${n} ang natapos na sa ngayon.`;
    },
    courseSection: 'Ang kurso',
    moduleComplete: (total) => `Kumpleto ang module — lahat ng ${total} na aralin`,
  },
  module: {
    label: (num) => `Module ${num}`,
    notFound: 'Hindi natagpuan ang module',
    backHome: 'Bumalik sa home',
    lessonsHeading: 'Mga aralin',
    lessonsComplete: (done, total) => `${done} sa ${total} na aralin ang tapos na`,
    inProgress: 'Isinasagawa',
    moduleComplete: 'Kumpleto ang module',
    moduleCompleteBody: (total, num) =>
      `Natapos mo ang lahat ng ${total} na aralin ng Module ${num}.`,
    nextModule: (num, title) => `Susunod na module: ${num} — ${title} →`,
  },
  lesson: {
    notFound: 'Hindi natagpuan ang aralin',
    markComplete: 'Markahan ang aralin bilang tapos',
    lessonCompleted: 'Tapos na ang aralin',
    previous: '← Nakaraan',
    next: 'Susunod →',
    courseHome: 'Home ng kurso →',
    courseHomeBody: 'Naabot mo ang dulo ng module na ito — bumalik sa kurso',
    sectionOf: (index, total) => `Seksyon ${index} sa ${total}`,
    continue: 'Magpatuloy →',
    readingModeGuided: 'Gabay',
    readingModeFull: 'Buong aralin',
  },
  settings: {
    title: 'Mga Setting',
    intro:
      'Ang progreso mo ay naka-imbak lamang sa device na ito. I-export ito upang ilipat sa ibang device o mag-backup.',
    language: 'Wika',
    languageHelp:
      'Piliin ang wika para sa interface ng kurso at mga isinalin na aralin.',
    progress: 'Progreso',
    statusInProgress: 'Isinasagawa',
    statusNotStarted: 'Hindi pa nagsisimula',
    pathLabel: (path) => `(landas na ${path})`,
    modulesWithActivity: (count) => `Mga module na may aktibidad: ${count}`,
    export: 'I-export ang progreso',
    import: 'I-import ang progreso',
    clear: 'Burahin ang progreso',
    initialize: 'Simulan ang progreso',
    exported: 'Na-download ang progreso.',
    imported:
      'Na-import ang progreso. Napalitan ang dating progreso mo sa device na ito.',
    cleared: 'Nabura ang progreso sa device na ito.',
    initialized: 'Nasimulan ang progreso.',
    noProgressExport: 'Wala pang progreso na maaaring i-export.',
  },
  term: {
    openGlossary: 'Buksan ang glossary',
    missing: (id) => `Nawawalang termino sa glossary: ${id}`,
  },
  figure: {
    asOf: (date, source) => `Noong ${date} · ${source}`,
    missing: (module, id) => `[nawawalang figure: ${module}/${id}]`,
  },
  coursework: {
    lockedPrompt:
      'Isang hakbang na lang: markahan ang aralin bilang tapos sa ibaba. Mabubuksan ang mga ruta mo sa sandaling gawin mo iyon.',
    chooseLocked: 'Piliin ang ruta na akma sa iyo ngayon:',
    chooseUnlocked:
      'Tapos na ang aralin — piliin ang ruta na akma sa iyo ngayon:',
  },
  keyTakeaway: {
    label: 'Pangunahing punto',
  },
  knowledgeCheck: {
    defaultTitle: 'Suriin ang iyong pag-unawa',
    notQuite: 'Hindi pa tama — subukan muli.',
    allCorrect: 'Lahat ay tama sa unang subok — magaling.',
    checkAnswer: 'Suriin ang sagot',
    tryAgain: 'Subukan muli',
    showAnswer: 'Ipakita ang sagot',
    nextQuestion: 'Susunod na tanong',
  },
};
