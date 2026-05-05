/**
 * Образовательный трек: легко править записи и добавлять certificateUrl,
 * когда появится верифицируемая ссылка.
 */

export type CourseCategory =
  | "data-science"
  | "python"
  | "machine-learning"
  | "ai-llm"
  | "sql-databases"
  | "frontend"
  | "backend"
  | "education"

export type CourseStatus = "completed" | "in_progress" | "planned"

export type Course = {
  id: string
  title: string
  provider: string
  category: CourseCategory
  /** Год окончания / план; для черновиков — «год уточняется» */
  year: string
  status: CourseStatus
  skills: string[]
  /** Только если есть реальная ссылка на сертификат / credential */
  certificateUrl?: string
  description: string
}

export const coursesIntro =
  "Я собираю образовательный трек вокруг AI, Data Science и разработки: от Python и анализа данных до LLM, SQL, backend/frontend и применения технологий в образовании."

export const courseCategoryLabels: Record<CourseCategory, string> = {
  "data-science": "Data Science",
  python: "Python",
  "machine-learning": "Machine Learning",
  "ai-llm": "AI / LLM",
  "sql-databases": "SQL / Databases",
  frontend: "Frontend",
  backend: "Backend",
  education: "Education / Digital Learning",
}

export const courseFilterTabs: { id: CourseCategory | "all"; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "data-science", label: "Data Science" },
  { id: "python", label: "Python" },
  { id: "machine-learning", label: "ML" },
  { id: "ai-llm", label: "AI / LLM" },
  { id: "sql-databases", label: "SQL / DB" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "education", label: "EdTech" },
]

export const courses: Course[] = [
  {
    id: "python-ds",
    title: "Python for Data Science",
    provider: "Платформа уточняется",
    category: "python",
    year: "год уточняется",
    status: "planned",
    skills: ["Python", "Jupyter", "основы аналитики"],
    description:
      "Базовый трек: синтаксис, структуры данных и рабочий контекст для последующего DS.",
  },
  {
    id: "numpy-pandas",
    title: "NumPy and Pandas",
    provider: "Платформа уточняется",
    category: "data-science",
    year: "год уточняется",
    status: "planned",
    skills: ["NumPy", "Pandas", "очистка данных"],
    description:
      "Работа с табличными данными: векторизация, агрегации и подготовка датасетов к моделированию.",
  },
  {
    id: "ml-basics",
    title: "Machine Learning Basics",
    provider: "Платформа уточняется",
    category: "machine-learning",
    year: "год уточняется",
    status: "in_progress",
    skills: ["supervised learning", "метрики", "baseline-модели"],
    description:
      "От постановки задачи до простых моделей и интерпретации качества на валидации.",
  },
  {
    id: "sql-analytics",
    title: "SQL for Analytics",
    provider: "Платформа уточняется",
    category: "sql-databases",
    year: "год уточняется",
    status: "planned",
    skills: ["SQL", "окна", "JOIN", "оптимизация запросов"],
    description:
      "Практический SQL для отчётности и ad-hoc аналитики в связке с BI и продуктовыми вопросами.",
  },
  {
    id: "fastapi-backend",
    title: "FastAPI Backend Development",
    provider: "Платформа уточняется",
    category: "backend",
    year: "год уточняется",
    status: "planned",
    skills: ["FastAPI", "REST", "Pydantic", "async"],
    description:
      "Сервисный слой для данных и ML: схемы, эндпоинты, валидация и подготовка к деплою.",
  },
  {
    id: "react-next",
    title: "React / Next.js",
    provider: "Платформа уточняется",
    category: "frontend",
    year: "год уточняется",
    status: "in_progress",
    skills: ["React", "Next.js", "TypeScript", "UI-компоненты"],
    description:
      "Клиентская часть для аналитических и AI-интерфейсов: маршрутизация, состояние и доступность.",
  },
  {
    id: "ai-prompt",
    title: "AI and Prompt Engineering",
    provider: "Платформа уточняется",
    category: "ai-llm",
    year: "год уточняется",
    status: "planned",
    skills: ["LLM", "prompting", "guardrails", "оценка качества"],
    description:
      "Осознанная работа с моделями: структура запросов, ограничения и проверка ответов в продукте.",
  },
  {
    id: "digital-edu-tools",
    title: "Digital Education Tools",
    provider: "Платформа уточняется",
    category: "education",
    year: "год уточняется",
    status: "planned",
    skills: ["LMS", "цифровая грамотность", "дизайн занятий"],
    description:
      "Инструменты и практики для цифрового обучения: вовлечение, обратная связь и измеримые результаты.",
  },
]

/** Дорожная карта обучения (логика трека, не дублирует курсы дословно) */
export const learningRoadmapPhases = [
  {
    id: "foundation",
    title: "Фундамент",
    summary: "Python, SQL и культура работы с данными — основа для DS и продуктовой аналитики.",
    tiesTo: ["python", "sql-databases"] as CourseCategory[],
  },
  {
    id: "modeling",
    title: "Моделирование",
    summary: "Классический ML и визуализация: от данных к объяснимым решениям.",
    tiesTo: ["data-science", "machine-learning"] as CourseCategory[],
  },
  {
    id: "systems",
    title: "Системы",
    summary: "Backend и frontend для воплощения идей в сервисах и интерфейсах.",
    tiesTo: ["backend", "frontend"] as CourseCategory[],
  },
  {
    id: "ai-edu",
    title: "AI и образование",
    summary: "LLM в продукте и цифровые форматы обучения — с опорой на этику и качество.",
    tiesTo: ["ai-llm", "education"] as CourseCategory[],
  },
] as const
