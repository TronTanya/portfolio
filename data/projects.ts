export type ProjectCategory = "ai" | "data-science" | "fullstack" | "education"

export type Project = {
  id: string
  /** Крупная карточка сверху страницы */
  featured?: boolean
  title: string
  tagline: string
  problem: string
  solution: string
  role: string
  technologies: string[]
  /** Ключевые возможности продукта (если есть) */
  functions?: string[]
  result: string
  githubUrl?: string
  /** Внешняя ссылка «Подробнее» (README, кейс, статья) */
  detailsUrl?: string
  categories: ProjectCategory[]
}

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  ai: "AI",
  "data-science": "Data Science",
  fullstack: "Fullstack",
  education: "Education",
}

export const projectFilterTabs: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "ai", label: "AI" },
  { id: "data-science", label: "Data Science" },
  { id: "fullstack", label: "Fullstack" },
  { id: "education", label: "Education" },
]

export const projects: Project[] = [
  {
    id: "drivee-analytics",
    featured: true,
    title: "Drivee Analytics Notebook",
    tagline: "AI self-service analytics для команд без SQL",
    problem:
      "Специалисты без технического бэкграунда не могут самостоятельно получать ответы из корпоративных данных: SQL сложен, BI-инструменты требуют обучения, а типовые дашборды не закрывают ad-hoc вопросы.",
    solution:
      "Платформа, где пользователь формулирует вопрос на естественном языке: система строит SQL через LLM, прогоняет валидацию и guardrails, исполняет запрос и возвращает таблицу, график, краткое объяснение и оценку уверенности. Учтены semantic layer, роли, безопасный доступ и прогнозные визуализации.",
    role:
      "Разработка, архитектура, AI/NL→SQL логика, frontend и backend, подготовка демо и сценариев для стейкхолдеров.",
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
      "DeepSeek API",
      "Recharts",
    ],
    functions: [
      "NL → SQL",
      "semantic layer",
      "SQL validation",
      "guardrails",
      "role-based access",
      "charts",
      "insights",
      "confidence score",
      "forecasting",
    ],
    result:
      "Собран сквозной сценарий от вопроса на языке пользователя до проверенного ответа с визуализацией; снижен порог входа для non-tech ролей и заложена основа для пилотирования в продуктовых командах.",
    githubUrl: "https://github.com/TronTanya/Drivee-Analytics",
    detailsUrl: "/projects/drivee-analytics",
    categories: ["ai", "data-science", "fullstack"],
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    tagline: "Enterprise AI/Data витрина опыта",
    problem:
      "Нужен единый профессиональный нарратив: проекты, конкурсы, образование, курсы и наставничество — без перегруза и с быстрой навигацией.",
    solution:
      "Личный сайт на Next.js с тёмной glassmorphism-эстетикой, чёткой структурой разделов и аккуратными анимациями для чтения кейсов.",
    role: "UX/UI, разработка, контент, сборка и публикация.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    result:
      "Готовая витрина для рекрутеров и партнёров: понятная история профиля и быстрый доступ к релевантным разделам.",
    githubUrl: "https://github.com/TronTanya",
    detailsUrl: undefined,
    categories: ["fullstack", "education"],
  },
  {
    id: "alrosa-presention-site",
    title: "Alrosa presentation site",
    tagline: "Статическая вёрстка презентационного лендинга",
    problem: "Нужна быстрая публикация материалов презентации в виде веб-страницы без тяжёлого стека.",
    solution: "HTML-страница с аккуратной вёрсткой под показ и ссылку из портфолио.",
    role: "Вёрстка, структура страницы, публикация в репозитории.",
    technologies: ["HTML", "CSS"],
    result: "Репозиторий с готовой статикой для демонстрации и деплоя на GitHub Pages или аналог.",
    githubUrl: "https://github.com/TronTanya/alrosa-presention-site",
    categories: ["fullstack", "education"],
  },
  {
    id: "alrosa",
    title: "Alrosa",
    tagline: "TypeScript-проект в репозитории",
    problem: "Требовалась клиентская логика и структура кода на TypeScript.",
    solution: "Реализация и сопровождение репозитория с фокусом на типизацию и модульность.",
    role: "Разработка, рефакторинг, согласование интерфейсов.",
    technologies: ["TypeScript"],
    result: "Открытый код в GitHub для обзора архитектуры и практик TS.",
    githubUrl: "https://github.com/TronTanya/alrosa",
    categories: ["fullstack"],
  },
  {
    id: "siteinfo",
    title: "siteinfo",
    tagline: "Утилита на TypeScript для работы с информацией о сайтах",
    problem: "Рутинные задачи по сбору или проверке сведений о сайтах хочется автоматизировать скриптом.",
    solution: "TypeScript-проект в репозитории: структура под расширение и CLI/библиотечное использование.",
    role: "Проектирование, реализация, документация в README.",
    technologies: ["TypeScript", "Node.js"],
    result: "База для дальнейших доработок и переиспользования в других tooling-проектах.",
    githubUrl: "https://github.com/TronTanya/siteinfo",
    categories: ["fullstack"],
  },
  {
    id: "dev-helper-mcp",
    title: "dev-helper-mcp",
    tagline: "MCP-сервер на Python для помощи в разработке",
    problem: "IDE и агентам нужен стабильный контракт доступа к утилитам разработчика через Model Context Protocol.",
    solution: "Python-пакет MCP-сервера с понятными инструментами и точкой входа для Cursor и совместимых клиентов.",
    role: "Архитектура MCP, реализация handlers, тесты и примеры вызовов.",
    technologies: ["Python", "MCP"],
    result: "Репозиторий готов к подключению в локальную среду и доработке под свои сценарии.",
    githubUrl: "https://github.com/TronTanya/dev-helper-mcp",
    categories: ["ai", "fullstack"],
  },
  {
    id: "telegram-ads-hackathon",
    title: "Telegram Ads — хакатон",
    tagline: "Репозиторий команды под кейс Telegram Ads (Hackathons RUS)",
    problem: "Ограниченный срок хакатона: нужно быстро собрать репозиторий с прототипом и историей коммитов.",
    solution: "Монорепозиторий под задачи трека: интеграции, демо и артефакты защиты.",
    role: "Разработка в составе команды, фиксация прогресса в Git.",
    technologies: ["Git", "Hackathon"],
    result: "Публичный след участия: код и структура для портфолио.",
    githubUrl: "https://github.com/TronTanya/https-github.com-hackathonsrus-TelegramAds_tron_188",
    categories: ["fullstack", "education"],
  },
  {
    id: "telegram-views-api",
    title: "telegram-views-api",
    tagline: "Python API вокруг сценариев Telegram",
    problem: "Нужен серверный слой для сценариев, связанных с метриками или представлениями в экосистеме Telegram.",
    solution: "REST/сервисная логика на Python с разнесением модулей по ответственности.",
    role: "Backend, контракты API, базовая документация.",
    technologies: ["Python"],
    result: "Открытый репозиторий для ревью подхода к API и структуре проекта.",
    githubUrl: "https://github.com/TronTanya/telegram-views-api",
    categories: ["fullstack", "data-science"],
  },
  {
    id: "obsidian-ds-kb",
    title: "Obsidian Data Science Knowledge Base",
    tagline: "Структурированная база знаний по DS/ML/AI",
    problem:
      "Разрозненные заметки и материалы по Python, Data Science и AI сложно переиспользовать как единый контекст для учёбы и работы в IDE.",
    solution:
      "Единое хранилище в Obsidian: связанные заметки, шаблоны, дорожные карты и выжимки под личный темп обучения и под контекст для Cursor.",
    role: "Автор структуры, куратор контента, оформление и поддержание актуальности.",
    technologies: ["Markdown", "Obsidian", "Python", "Data Science notes", "AI-assisted learning"],
    result:
      "Появился воспроизводимый каркас знаний: быстрее возвращаться к темам, готовить занятия и подключать материалы к практике.",
    detailsUrl: undefined,
    categories: ["data-science", "education"],
  },
  {
    id: "ai-education-assistant",
    title: "AI Education Assistant",
    tagline: "Концепт помощника для осознанного обучения с AI",
    problem:
      "Студентам сложно формулировать запросы к моделям, проверять ответы и понимать границы применимости нейросетей без навыка digital literacy.",
    solution:
      "Проработанный концепт инструмента: подсказки по формулировке запросов, проверка ответов, акцент на критическом мышлении и этичном использовании AI в учебных задачах.",
    role: "Продуктовая проработка сценариев, prompt engineering, дизайн образовательных практик.",
    technologies: ["AI", "prompt engineering", "education design", "digital literacy"],
    result:
      "Зафиксированы пользовательские сценарии и требования для будущей реализации; основа для пилота в учебной среде.",
    categories: ["ai", "education"],
  },
]
