export type CompetitionEntry = {
  id: string
  /** Если год неизвестен — «год уточняется» */
  year: string
  title: string
  track?: string
  project?: string
  result: string
  /** Визуальный акцент бейджа результата */
  resultTone?: "highlight" | "success" | "muted"
  role?: string
  skills?: string[]
  /** Блок «Чему научилась» */
  learnings?: string[]
  /** Короткая заметка для заглушек */
  note?: string
  /** Карточка-плейсхолдер под будущие события */
  placeholder?: boolean
}

export const competitionsIntro =
  "Я участвую в IT-конкурсах и хакатонах, потому что это помогает быстро проверять идеи, развивать инженерное мышление, работать с дедлайнами и превращать знания в реальные проекты."

export const competitions: CompetitionEntry[] = [
  {
    id: "moya-professiya-it",
    year: "год уточняется",
    title: "Всероссийский конкурс «Моя профессия — ИТ»",
    track: "Специалисты",
    project: "Drivee Analytics Notebook",
    result: "Финал / топ-10",
    resultTone: "highlight",
    role: "Разработчик, AI/Data specialist, участник защиты",
    skills: [
      "AI",
      "NL→SQL",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Docker",
      "Презентация проекта",
    ],
    learnings: [
      "Быстрее собирать MVP",
      "Оценивать проект по критериям",
      "Улучшать бизнес-ценность",
      "Готовить демо",
      "Отвечать на вопросы жюри",
    ],
  },
  {
    id: "regional-it",
    year: "год уточняется",
    title: "Региональный IT-конкурс / хакатон",
    result: "3 место",
    resultTone: "success",
    role: "Участник, разработчик, презентатор",
    note: "Командный формат: продукт, сроки и защита перед жюри.",
  },
  {
    id: "ai-hackathon-future",
    year: "год уточняется",
    title: "AI hackathon",
    result: "В планах",
    resultTone: "muted",
    placeholder: true,
    note: "Заготовка под будущее участие: идея, стек и демо за ограниченное время.",
  },
  {
    id: "ds-competition-future",
    year: "год уточняется",
    title: "Data Science competition",
    result: "В планах",
    resultTone: "muted",
    placeholder: true,
    note: "Соревнование по данным: постановка задачи, метрики и сильный постанализ.",
  },
  {
    id: "edtech-competition-future",
    year: "год уточняется",
    title: "EdTech competition",
    result: "В планах",
    resultTone: "muted",
    placeholder: true,
    note: "Фокус на образовательном продукте и измеримом эффекте для пользователя.",
  },
]

export const whatCompetitionsGive = [
  "Практика работы в жёстких сроках без «бесконечной доработки».",
  "Проверка идеи на реальных критериях жюри и пользовательской ценности.",
  "Опыт презентации: структура, демо, ответы на вопросы под давлением.",
  "Сетевой эффект: обмен практиками с командами и менторами.",
  "Портфельный кейс, который понятен и HR, и тимлиду.",
]

export const hackathonSkills = [
  "Декомпозиция задачи и приоритизация backlog на коротком горизонте.",
  "Сборка сквозного демо: данные, API, UI, сценарий показа.",
  "Коммуникация в команде и синхронизация перед дедлайном.",
  "Работа с неопределённостью: урезание scope без потери смысла.",
  "Публичная защита решения и аргументация технических решений.",
]
