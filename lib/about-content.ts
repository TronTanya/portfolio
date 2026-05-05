import type { LucideIcon } from "lucide-react"
import {
  Brain,
  Building2,
  Code2,
  GraduationCap,
  Layers,
  MessageCircle,
  MonitorPlay,
  Presentation,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  TrendingUp,
  UserRound,
  Zap,
} from "lucide-react"

export const aboutIntro = [
  "Я — специалист в области AI, Data Science и веб-разработки с опытом работы в образовании. Моя сильная сторона — соединять технические решения, понятное объяснение и практический результат.",
  "Я развиваюсь в направлении AI/Data-продуктов: создаю MVP, участвую в хакатонах, изучаю современные технологии и помогаю студентам применять IT на практике через конкурсы, курсы и проектную деятельность.",
] as const

export const aboutPathSteps: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Образование",
    description: "Фундамент математики, программирования и работы с данными.",
    icon: GraduationCap,
  },
  {
    title: "Работа в колледже",
    description: "Практика преподавания, сопровождение учебных проектов и обратная связь.",
    icon: Building2,
  },
  {
    title: "Развитие в IT",
    description: "Постоянное обучение, pet-проекты и переход к продуктовым задачам.",
    icon: TrendingUp,
  },
  {
    title: "Конкурсы студентов",
    description: "Подготовка команд, постановка задач и защита решений перед жюри.",
    icon: Trophy,
  },
  {
    title: "Хакатоны",
    description: "Интенсивные спринты: от идеи до демо за ограниченное время.",
    icon: Rocket,
  },
  {
    title: "AI/Data проекты",
    description: "MVP, прототипы и пилоты с упором на данные и прикладной AI.",
    icon: Brain,
  },
]

export const aboutStrengths: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Быстро разбираюсь в новых технологиях",
    text: "Системно подхожу к документации и PoC: сначала минимальный пример, затем интеграция в задачу.",
    icon: Zap,
  },
  {
    title: "Умею объяснять сложное простыми словами",
    text: "Для студентов и стейкхолдеров — разный уровень детализации, один и тот же смысл.",
    icon: MessageCircle,
  },
  {
    title: "Соединяю разработку, аналитику и продуктовый подход",
    text: "Смотрю на метрики, ограничения и пользовательский сценарий, а не только на код.",
    icon: Layers,
  },
  {
    title: "Довожу идеи до MVP",
    text: "Сужаю объём до проверяемой гипотезы и довожу до рабочего демо.",
    icon: Target,
  },
  {
    title: "Умею готовить проекты к защите",
    text: "Структура отчёта, визуализации и ответы на типовые вопросы жюри.",
    icon: Presentation,
  },
]

export const aboutWorkSteps: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Разбираю проблему",
    text: "Формулирую вопрос, контекст, ограничения и критерии успеха.",
    icon: Search,
  },
  {
    title: "Формулирую пользовательский сценарий",
    text: "Кто действует, какой результат нужен, где «боль» и риски.",
    icon: UserRound,
  },
  {
    title: "Проектирую MVP",
    text: "Объём, стек, данные и минимальный набор функций для проверки идеи.",
    icon: Sparkles,
  },
  {
    title: "Собираю frontend и backend",
    text: "Итеративно: API, интерфейс, логирование и воспроизводимость.",
    icon: Code2,
  },
  {
    title: "Проверяю данные и безопасность",
    text: "Качество выборок, доступы, типовые уязвимости и приватность.",
    icon: ShieldCheck,
  },
  {
    title: "Готовлю демо и презентацию",
    text: "Сценарий показа, слайды и ответы на вопросы — чтобы решение «читалось» с первой минуты.",
    icon: MonitorPlay,
  },
]

export const aboutInterests: string[] = [
  "AI products",
  "Data Science",
  "NL → SQL",
  "EdTech",
  "self-service analytics",
  "intelligent interfaces",
]
