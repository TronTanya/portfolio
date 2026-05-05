export const siteConfig = {
  name: "Тронь Татьяна",
  /** Полное имя (как в документах) */
  fullName: "Тронь Татьяна Александровна",
  /** Дата рождения, строка для отображения */
  birthDate: "27.05.1998",
  /** Город проживания */
  city: "Якутск",
  /** Портрет для страницы «Обо мне» (`public/assets/photos/`) */
  portraitUrl: "/assets/photos/tatyana-tron.png",
  /** Подзаголовок в шапке под именем */
  title: "AI · Data Science · Fullstack",
  /** Полный `<title>` для главной и Open Graph по умолчанию */
  defaultTitle: "Тронь Татьяна — AI / Data Science / Fullstack Developer",
  /** SEO description (главная, OG по умолчанию) */
  description:
    "Портфолио AI/Data Science/Fullstack специалиста: проекты, конкурсы, курсы, образование и наставничество студентов.",
  /** Короткий текст для футера */
  tagline: "AI, Data Science, fullstack, образование и наставничество.",
  /** Замените на продакшен-домен перед деплоем */
  url: "https://example.com",
  author: "Тронь Татьяна Александровна",
  /** Монограмма для шапки / футера / favicon (`public/assets/logo/`) */
  logoUrl: "/assets/logo/tr-mark.png",
  /** PDF резюме: API; старые ссылки `/resume.pdf` ведут сюда через rewrite в `next.config` */
  resumeUrl: "/api/resume",
  /** Имя файла при скачивании (латиница — надёжнее для браузеров) */
  resumeDownloadFilename: "Tron-Tatyana-resume.pdf",
  links: {
    github: "https://github.com/TronTanya",
    /** Пустая строка — ссылка в футере скрыта */
    linkedin: "",
    email: "mailto:j.neutrongenius@gmail.com",
  },
} as const

export type NavItem = {
  href: string
  label: string
}

export const mainNav: NavItem[] = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "Обо мне" },
  { href: "/projects", label: "Проекты" },
  { href: "/competitions", label: "Конкурсы" },
  { href: "/courses", label: "Курсы" },
  { href: "/education", label: "Образование" },
  { href: "/students", label: "Студенты" },
  { href: "/contact", label: "Контакты" },
]

/**
 * Hero: опциональная 3D-сцена Spline (публикуемый URL `.splinecode` из редактора).
 * Сюда вставить Spline scene URL (например `https://prod.spline.design/…/scene.splinecode`).
 * Пустая строка — только CSS `GlassHeroScene`. На ширине &lt; `lg` и при `prefers-reduced-motion` Spline не подключается.
 */
export const heroSplineSceneUrl: string = ""

/**
 * Экспериментальный hero на React Three Fiber + Drei (6 стеклянных панелей).
 * Включается только на `lg+` и если нет `prefers-reduced-motion`. У Spline по-прежнему приоритет при непустом URL.
 */
export const heroExperimentalR3fGlass = false
