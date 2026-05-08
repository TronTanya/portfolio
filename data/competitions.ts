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
  /** Скан диплома справа в той же карточке (вкладка «Конкурсы») */
  diplomaScan?: {
    pdfUrl: string
    imageUrl: string
    imageAlt: string
    downloadLabel?: string
  }
}

export const competitionsIntro =
  "Я участвую в IT-конкурсах и хакатонах, потому что это помогает быстро проверять идеи, развивать инженерное мышление, работать с дедлайнами и превращать знания в реальные проекты."

export const competitions: CompetitionEntry[] = [
  {
    id: "moya-professiya-it",
    year: "2025–2026",
    title: "Всероссийский конкурс «Моя профессия — ИТ»",
    track: "Специалисты · региональный конкурс",
    project: "Meritocracy",
    result: "III место — региональный конкурс, финал этапа",
    resultTone: "success",
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
    diplomaScan: {
      pdfUrl: "/documents/tron-moya-professiya-it-regional-2026.pdf",
      imageUrl: "/assets/competitions/tron-moya-professiya-it-regional-2026-preview.png",
      imageAlt:
        "Диплом III места — региональный конкурс «Моя профессия — ИТ», финал этапа, Тронь Татьяна Александровна, проект Meritocracy",
      downloadLabel: "Скачать PDF диплома",
    },
  },
  {
    id: "ai-vector-rudn-2026",
    year: "2026",
    title: "Международный конкурс креатива «AI-Вектор»",
    track:
      "Номинация «Нейроплакаты» · XX Всероссийская научно-практическая конференция с международным участием «Рекламный вектор-2026: диалог трендов» (РУДН, Москва)",
    result: "Специальный приз · победа в онлайн-голосовании",
    resultTone: "highlight",
    role: "Участник конкурса",
    skills: ["Генеративный AI", "Визуальный креатив", "Нейроплакат", "Презентация идеи"],
    learnings: [
      "Совмещать креатив и ИИ в формате конкурсной работы",
      "Работать с критериями жюри и публичным голосованием",
      "Упаковывать концепт для международной площадки",
    ],
    note: "Проводится в рамках конференции при кафедре рекламы и бизнес-коммуникаций ИМЭБ РУДН.",
    diplomaScan: {
      pdfUrl: "/documents/tron-ai-vector-rudn-2026.pdf",
      imageUrl: "/assets/competitions/tron-ai-vector-rudn-2026-preview.png",
      imageAlt:
        "Диплом специального приза — конкурс «AI-Вектор», номинация «Нейроплакаты», РУДН, Москва, 2026",
      downloadLabel: "Скачать PDF диплома",
    },
  },
]
