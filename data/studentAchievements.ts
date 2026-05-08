export const studentsPageTitle = "Студенты и наставничество"

export const studentsIntro =
  "Я сопровождаю студентов в конкурсах, курсах и проектной деятельности: помогаю выбрать направление, зарегистрироваться, подготовиться, пройти обучение, оформить проект и представить результат."

export type StudentResultItem = {
  id: string
  /** Короткая строка для акцента (без выдуманных чисел) */
  value: string
  /** Развёрнутая формулировка результата */
  label: string
}

export type StudentShowcaseFact = {
  label: string
  value: string
}

/** Свод с иллюстрациями: превью + PDF на странице «Студенты». */
export const studentResultsShowcase = {
  title: "XIX Форум «Шаг в будущую профессию»: диплом III степени",
  description:
    "Диплом III степени за работу на XIX Форуме молодых исследователей «Шаг в будущую профессию» (Якутск, 2025) — региональный конкурс.",
  pdfUrl: "/documents/student-results.pdf",
  imageUrl: "/assets/students/student-results-preview.png",
  imageAlt: "Диплом III степени — региональный конкурс, XIX Форум «Шаг в будущую профессию», Якутск",
  downloadLabel: "Скачать PDF с результатами",
  /** Данные с диплома на превью (первый лист свода). */
  facts: [
    { label: "Документ", value: "Диплом III степени" },
    {
      label: "Мероприятие",
      value:
        "XIX Форум молодых исследователей «Шаг в будущую профессию» (к 100-летию со дня рождения Г.И. Чиряева), региональный конкурс",
    },
    {
      label: "Симпозиум и секция",
      value: "Симпозиум №2 «Информационные и коммуникационные технологии», секция №1",
    },
    { label: "Участник", value: "Соколов Никита" },
    {
      label: "Тема работы",
      value:
        "«Разработка и оценка эффективности диалогового окна ИИ-наставника для формирования привычек борьбы с прокрастинацией»",
    },
    { label: "Место и год", value: "г. Якутск, 2025 г." },
  ] satisfies readonly StudentShowcaseFact[],
} as const

/**
 * Диплом I степени, XIX Форум «Шаг в будущую профессию», НИР CAREERBRIDGE AI (скан: student-achievement-85-2.pdf).
 */
export const forumCareerBridgeDiplomaFirst = {
  title: "XIX Форум: диплом I степени, CAREERBRIDGE AI",
  description:
    "Диплом I степени за участие в научно-практической конференции XIX Форума молодых исследователей «Шаг в будущую профессию» (региональный конкурс), приуроченного к 100-летию со дня рождения Г.И. Чиряева.",
  pdfUrl: "/documents/student-achievement-85-2.pdf",
  imageUrl: "/assets/students/student-achievement-85-2-preview.png",
  imageAlt:
    "Диплом I степени — XIX Форум «Шаг в будущую профессию», CAREERBRIDGE AI, региональный конкурс, г. Якутск, 2025 г.",
  downloadLabel: "Скачать PDF диплома",
  facts: [
    { label: "Документ", value: "Диплом I степени" },
    {
      label: "Мероприятие",
      value:
        "XIX Форум молодых исследователей «Шаг в будущую профессию» (к 100-летию со дня рождения Г.И. Чиряева), научно-практическая конференция, региональный конкурс",
    },
    {
      label: "Симпозиум и секция",
      value: "Симпозиум №2 «Информационные и коммуникационные технологии», секция №2",
    },
    { label: "Участник", value: "Прокопьев Айаан Ростиславович" },
    {
      label: "Тема работы",
      value:
        "CAREERBRIDGE AI: инновационная платформа для трудоустройства студентов колледжей с использованием ИИ",
    },
    { label: "Место и год", value: "г. Якутск, 2025 г." },
  ] satisfies readonly StudentShowcaseFact[],
} as const

/**
 * Диплом II места по скану в PDF (файл в репозитории: ministry-education-gramota.pdf).
 * На бланке: логотипы Минпросвещения РФ, ИРПО, Республики Саха (Якутия); печать ГАУ ДПО «ИРПО».
 */
export const professionalsRegionalDiploma = {
  title: "Диплом II места, чемпионат «Профессионалы»",
  description:
    "Региональный этап чемпионата по профессиональному мастерству «Профессионалы» в Республике Саха (Якутия). Диплом II места в компетенции «Специалист по тестированию игрового программного обеспечения».",
  pdfUrl: "/documents/ministry-education-gramota.pdf",
  imageUrl: "/assets/students/ministry-education-gramota-preview.png",
  imageAlt:
    "Диплом II места — региональный этап «Профессионалы», Республика Саха (Якутия), компетенция тестирование игрового ПО",
  downloadLabel: "Скачать PDF диплома",
  facts: [
    { label: "Документ", value: "Диплом II места" },
    {
      label: "Мероприятие",
      value:
        "Региональный этап чемпионата по профессиональному мастерству «Профессионалы» в Республике Саха (Якутия)",
    },
    { label: "Участник", value: "Алексеев Арсиэн Алексеевич" },
    {
      label: "Компетенция",
      value: "Специалист по тестированию игрового программного обеспечения",
    },
    { label: "Место и год", value: "г. Якутск, 2026 г." },
    {
      label: "Региональный оператор",
      value: "Всероссийское чемпионатное движение в Республике Саха (Якутия)",
    },
  ] satisfies readonly StudentShowcaseFact[],
} as const

/**
 * Диплом III места, региональный этап «Профессионалы» (скан: ministry-education-2.pdf).
 */
export const professionalsRegionalDiplomaThird = {
  title: "Диплом III места: «Профессионалы», копирайтинг",
  description:
    "Региональный этап чемпионата по профессиональному мастерству «Профессионалы» в Республике Саха (Якутия). Диплом III места в компетенции «Копирайтинг».",
  pdfUrl: "/documents/ministry-education-2.pdf",
  imageUrl: "/assets/students/ministry-education-2-preview.png",
  imageAlt:
    "Диплом III места — региональный этап «Профессионалы», Республика Саха (Якутия), компетенция копирайтинг",
  downloadLabel: "Скачать PDF диплома",
  facts: [
    { label: "Документ", value: "Диплом III места" },
    {
      label: "Мероприятие",
      value:
        "Региональный этап чемпионата по профессиональному мастерству «Профессионалы» в Республике Саха (Якутия)",
    },
    { label: "Участник", value: "Никифоров Ларион Евгеньевич" },
    { label: "Компетенция", value: "Копирайтинг" },
    { label: "Место и год", value: "г. Якутск, 2026 г." },
    {
      label: "Региональный оператор",
      value: "Всероссийское чемпионатное движение в Республике Саха (Якутия)",
    },
  ] satisfies readonly StudentShowcaseFact[],
} as const

/**
 * Диплом II степени, региональный (национальный) этап «Большие вызовы» (скан: tsvetkov-big-challenges-regional-2026.pdf).
 */
export const bigChallengesRegionalTsvetkovDiplomaSecond = {
  title: "«Большие вызовы»: диплом II степени, CyberSec Academy",
  description:
    "Региональный (национальный) конкурс международного конкурса научно-технологических проектов «Большие вызовы» в Республике Саха (Якутия).",
  pdfUrl: "/documents/tsvetkov-big-challenges-regional-2026.pdf",
  imageUrl: "/assets/students/tsvetkov-big-challenges-regional-2026-preview.png",
  imageAlt:
    "Диплом II степени — «Большие вызовы», Республика Саха (Якутия), CyberSec Academy",
  downloadLabel: "Скачать PDF диплома",
  facts: [
    { label: "Документ", value: "Диплом II степени" },
    {
      label: "Мероприятие",
      value:
        "Региональный (национальный) конкурс Международного конкурса научно-технологических проектов «Большие вызовы» в Республике Саха (Якутия)",
    },
    { label: "Участник", value: "Цветков Андрей Александрович" },
    {
      label: "Тема проекта",
      value:
        "CyberSec Academy: персональный наставник по кибербезопасности с адаптивным обучением",
    },
    {
      label: "Направление",
      value:
        "«Большие данные, искусственный интеллект, автоматизированные системы и информационная безопасность»",
    },
    {
      label: "Место и даты",
      value: "с. Чапаево, Хангаласский улус, 19–21 марта 2026 г.",
    },
  ] satisfies readonly StudentShowcaseFact[],
} as const

/**
 * Диплом III места, XI Региональный чемпионат «Абилимпикс» (скан: yurov-abilympics-regional-2026.pdf).
 */
export const abilympicsRegionalYurovDiplomaThird = {
  title: "«Абилимпикс»: диплом III места, администрирование БД",
  description:
    "XI Региональный чемпионат по профессиональному мастерству среди инвалидов и лиц с ограниченными возможностями здоровья «Абилимпикс» — 2026 в Республике Саха (Якутия).",
  pdfUrl: "/documents/yurov-abilympics-regional-2026.pdf",
  imageUrl: "/assets/students/yurov-abilympics-regional-2026-preview.png",
  imageAlt:
    "Диплом III места — региональный чемпионат «Абилимпикс» 2026, Республика Саха (Якутия), администрирование баз данных",
  downloadLabel: "Скачать PDF диплома",
  facts: [
    { label: "Документ", value: "Диплом III места" },
    {
      label: "Мероприятие",
      value:
        "XI Региональный чемпионат по профессиональному мастерству среди инвалидов и лиц с ОВЗ «Абилимпикс» — 2026 в Республике Саха (Якутия)",
    },
    { label: "Участник", value: "Юров Алексей Андреевич" },
    { label: "Компетенция", value: "Администрирование баз данных (Студенты)" },
    { label: "Место и год", value: "Республика Саха (Якутия), 2026 г." },
  ] satisfies readonly StudentShowcaseFact[],
} as const

/**
 * Диплом III места, XI Региональный чемпионат «Абилимпикс» (скан: ivanov-abilympics-neural-art-2026.pdf).
 */
export const abilympicsRegionalIvanovNeuralArtDiplomaThird = {
  title: "«Абилимпикс»: диплом III места, нейросетевое искусство",
  description:
    "XI Региональный чемпионат по профессиональному мастерству среди инвалидов и лиц с ограниченными возможностями здоровья «Абилимпикс» — 2026 в Республике Саха (Якутия).",
  pdfUrl: "/documents/ivanov-abilympics-neural-art-2026.pdf",
  imageUrl: "/assets/students/ivanov-abilympics-neural-art-2026-preview.png",
  imageAlt:
    "Диплом III места — региональный чемпионат «Абилимпикс» 2026, Республика Саха (Якутия), нейросетевое искусство",
  downloadLabel: "Скачать PDF диплома",
  facts: [
    { label: "Документ", value: "Диплом III места" },
    {
      label: "Мероприятие",
      value:
        "XI Региональный чемпионат по профессиональному мастерству среди инвалидов и лиц с ОВЗ «Абилимпикс» — 2026 в Республике Саха (Якутия)",
    },
    { label: "Участник", value: "Иванов Иннокентий Валентинович" },
    {
      label: "Компетенция",
      value: "Архитектор будущего — нейросетевое искусство (Студенты)",
    },
    { label: "Место и год", value: "Республика Саха (Якутия), 2026 г." },
  ] satisfies readonly StudentShowcaseFact[],
} as const

/**
 * Диплом III места, финал регионального этапа «Моя профессия — ИТ» (скан: prokopiev-moya-professiya-it-regional-2026.pdf).
 */
export const moyaProfessionItRegionalMeritocracyDiplomaThird = {
  title: "«Моя профессия — ИТ»: диплом III места, Meritocracy",
  description:
    "Финал регионального этапа Всероссийского конкурса «Моя профессия — ИТ» в Республике Саха (Якутия), 2025–2026 учебный год.",
  pdfUrl: "/documents/prokopiev-moya-professiya-it-regional-2026.pdf",
  imageUrl: "/assets/students/prokopiev-moya-professiya-it-regional-2026-preview.png",
  imageAlt:
    "Диплом III места — «Моя профессия — ИТ», региональный финал, Республика Саха (Якутия), проект Meritocracy",
  downloadLabel: "Скачать PDF диплома",
  facts: [
    { label: "Документ", value: "Диплом III места" },
    {
      label: "Мероприятие",
      value:
        "Финал регионального этапа Всероссийского конкурса «Моя профессия — ИТ» в Республике Саха (Якутия), 2025–2026 уч. г.",
    },
    { label: "Участник", value: "Прокопьев Айаан" },
    { label: "Команда / проект", value: "«Meritocracy»" },
    { label: "Категория", value: "«Специалисты»" },
    { label: "Место и год", value: "г. Якутск, 2026 г." },
  ] satisfies readonly StudentShowcaseFact[],
} as const

type ShowcaseWithFacts = {
  readonly facts: readonly StudentShowcaseFact[]
}

/**
 * Блоки с PDF на странице «Студенты» (в том же порядке) — для подсчёта I/II/III по полю «Документ».
 * Учитываются формулировки «Диплом … места» и «Диплом … степени» (конкурсный диплом).
 */
export const studentShowcasesForPlaceTally = [
  studentResultsShowcase,
  forumCareerBridgeDiplomaFirst,
  professionalsRegionalDiploma,
  professionalsRegionalDiplomaThird,
  bigChallengesRegionalTsvetkovDiplomaSecond,
  abilympicsRegionalYurovDiplomaThird,
  abilympicsRegionalIvanovNeuralArtDiplomaThird,
  moyaProfessionItRegionalMeritocracyDiplomaThird,
] as const satisfies readonly ShowcaseWithFacts[]

function diplomDocumentFromShowcase(s: ShowcaseWithFacts): string | undefined {
  return s.facts.find((f) => f.label === "Документ")?.value
}

/** Ранг 1 / 2 / 3 по тексту бланка или null, если не распознано. */
function contestRankFromDocument(value: string): 1 | 2 | 3 | null {
  if (/Диплом\s+I\s+места/i.test(value)) return 1
  if (/Диплом\s+II\s+места/i.test(value)) return 2
  if (/Диплом\s+III\s+места/i.test(value)) return 3
  if (/Диплом\s+I\s+степени/i.test(value)) return 1
  if (/Диплом\s+II\s+степени/i.test(value)) return 2
  if (/Диплом\s+III\s+степени/i.test(value)) return 3
  return null
}

export function getStudentPlaceTally(): { first: number; second: number; third: number } {
  const tally = { first: 0, second: 0, third: 0 }
  for (const s of studentShowcasesForPlaceTally) {
    const doc = diplomDocumentFromShowcase(s)
    if (!doc) continue
    const r = contestRankFromDocument(doc)
    if (r === 1) tally.first++
    else if (r === 2) tally.second++
    else if (r === 3) tally.third++
  }
  return tally
}

export const studentResults: StudentResultItem[] = [
  {
    id: "first",
    value: "1 место",
    label:
      "Студенты занимали 1, 2 и 3 места в конкурсных и проектных форматах — в том числе в командной работе и на защитах.",
  },
  {
    id: "second",
    value: "2 место",
    label: "Отдельно отмечаются вторые места: устойчивость решения, презентация и ответы жюри.",
  },
  {
    id: "third",
    value: "3 место",
    label: "Третьи места — про полноту кейса, прозрачность метрик и аккуратную аргументацию.",
  },
  {
    id: "courses",
    value: "Курсы",
    label:
      "Студенты проходили курсы и цифровые программы — с постановкой целей, контролем прогресса и фиксацией итогов.",
  },
]
