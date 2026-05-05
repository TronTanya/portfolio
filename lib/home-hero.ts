/** Панели 3D-композиции (порядок = z-index / читаемость на десктопе) */
export const glassHeroPanels = [
  { id: "drivee", label: "Drivee Analytics", size: "lg" as const },
  { id: "nl-sql", label: "NL → SQL", size: "sm" as const },
  { id: "fastapi", label: "FastAPI", size: "md" as const },
  { id: "postgres", label: "PostgreSQL", size: "md" as const },
  { id: "next", label: "Next.js", size: "sm" as const },
  { id: "ds", label: "Data Science", size: "md" as const },
  { id: "edu", label: "Education Tech", size: "md" as const },
  { id: "mentor", label: "Student Mentoring", size: "sm" as const },
] as const

export const heroStats = [
  { value: "7+", label: "лет в образовании" },
  { value: "AI / Data Science / Fullstack", label: "основной фокус" },
  { value: "Топ-10", label: "финала IT-конкурса" },
  { value: "1 · 2 · 3", label: "Студенты занимали 1, 2, 3 места" },
] as const

export const focusAreas = [
  {
    title: "AI / LLM",
    description: "RAG, агенты, NL→SQL и продуктовые сценарии с контролем качества.",
  },
  {
    title: "Data Science",
    description: "От исследования до метрик: модели, отчёты, воспроизводимые пайплайны.",
  },
  {
    title: "Fullstack",
    description: "Next.js, API, интеграции и интерфейсы для data- и AI-сервисов.",
  },
  {
    title: "Education & Mentoring",
    description: "Курсы, конкурсы, проектное сопровождение и карьерная поддержка.",
  },
] as const
