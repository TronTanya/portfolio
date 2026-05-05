/** Контент кейс-страницы Drivee Analytics (короткие формулировки) */

export const driveeCase = {
  hero: {
    title: "Drivee Analytics Notebook",
    tagline: "AI self-service analytics platform for non-tech users",
    summary:
      "Платформа, где менеджер задаёт вопрос на естественном языке, а система генерирует SQL, достаёт данные, строит график и объясняет результат.",
  },
  problem:
    "Бизнес-пользователи не знают SQL и зависят от аналитиков. Аналитики перегружены однотипными запросами, а ответы часто приходят слишком поздно.",
  solution:
    "Система сокращает путь: вопрос → SQL → данные → график → insight — с валидацией, ролями и прозрачностью для пользователя.",
  endToEndSteps: [
    "Пользователь пишет вопрос",
    "Система определяет метрики, фильтры и период",
    "Генерирует SQL",
    "Валидирует SQL",
    "Выполняет запрос",
    "Показывает таблицу",
    "Строит график",
    "Объясняет результат",
    "При необходимости — confidence score или уточняющий вопрос",
  ],
  pipeline: [
    { id: "fe", label: "Frontend", sub: "Next.js" },
    { id: "api", label: "API", sub: "FastAPI" },
    { id: "nl", label: "NL→SQL Engine", sub: "LLM + prompts" },
    { id: "sem", label: "Semantic Layer", sub: "метрики & словарь" },
    { id: "val", label: "SQL Validator", sub: "guardrails" },
    { id: "db", label: "PostgreSQL", sub: "данные" },
    { id: "viz", label: "Charts & Insights", sub: "Recharts" },
  ],
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "PostgreSQL",
    "SQLAlchemy",
    "Alembic",
    "DeepSeek API",
    "Docker",
    "Recharts",
  ],
  guardrails: [
    "SQL validation",
    "Запрет опасных операций",
    "Role-based access",
    "Ограничения по данным",
    "Logging",
    "Query limits",
    "Confidence score",
    "Clarification flow",
  ],
  ux: [
    "Interpretation trace",
    "Generated SQL preview",
    "Chart auto-selection",
    "Table + chart + insight",
    "Role-aware interface",
  ],
  future: [
    "Расширить golden set для NL→SQL",
    "Добавить Playwright E2E",
    "Улучшить semantic dictionary",
    "Добавить расписание отчётов",
    "Расширить forecasting",
    "Подключить production monitoring",
  ],
  githubUrl: "https://github.com/TronTanya/Drivee-Analytics",
  /** Мини-превью в блоке explainability: SQL, график, инсайт (без реальных данных). */
  explainabilityPreview: {
    sql: "SELECT date_trunc('month', ts) AS m,\n       sum(revenue) AS rev\nFROM sales\nWHERE region = 'EU'\nGROUP BY 1\nORDER BY 1\nLIMIT 12;",
    chartCaption: "Revenue · EU · monthly",
    insight:
      "Инсайт: пик в ноябре (+8% к среднему квартала); модель предлагает проверить промо-кампанию.",
    chartBars: [32, 44, 38, 52, 48, 61, 55, 70, 64, 78, 72, 85] as const,
  },
} as const
