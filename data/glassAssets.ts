/**
 * Каталог Glass 3D Abstract assets (видео / изображения).
 * Файлы кладите в `public/assets/3d/glass/` — см. комментарии к `src` и `poster`.
 * Не добавляйте в репозиторий чужой контент без лицензии.
 */

export type GlassAssetType = "video" | "image"

export type GlassAssetCategory = "hero" | "project" | "background" | "decor"

/** `drivee` — кейс Drivee Analytics; `global` — можно переиспользовать на нескольких страницах */
export type GlassAssetPage =
  | "home"
  | "about"
  | "projects"
  | "drivee"
  | "students"
  | "global"

export type GlassAsset = {
  id: string
  title: string
  type: GlassAssetType
  /** Путь от корня сайта, начиная с `/assets/3d/glass/...` */
  src: string
  /** Для `type: "video"` — постер до воспроизведения (webp/png), лежит в `posters/` */
  poster?: string
  alt: string
  category: GlassAssetCategory
  page: GlassAssetPage
  /** При выборе ассета для слота сортируйте: `priority: true` первым */
  priority: boolean
}

/**
 * Примеры-заглушки: замените `src` / `poster` на реальные имена файлов после покупки пакета.
 * Видео → `videos/`, картинки → `images/`, постеры → `posters/`.
 */
export const glassAssets: GlassAsset[] = [
  {
    id: "glass-fluid-shape",
    title: "Glass fluid shape",
    type: "video",
    src: "/assets/3d/glass/videos/glass-fluid-shape.mp4",
    poster: "/assets/3d/glass/posters/glass-fluid-shape.webp",
    alt: "Декоративная стеклянная абстрактная форма, плавное движение",
    category: "hero",
    page: "home",
    priority: true,
  },
  {
    id: "glass-prism-square",
    title: "Glass prism square",
    type: "image",
    src: "/assets/3d/glass/images/glass-prism-square.webp",
    alt: "Стеклянная призматическая плоскость, абстрактная композиция",
    category: "decor",
    page: "home",
    priority: false,
  },
  {
    id: "glass-sphere",
    title: "Glass sphere",
    type: "video",
    src: "/assets/3d/glass/videos/glass-sphere.mp4",
    poster: "/assets/3d/glass/posters/glass-sphere.png",
    alt: "Стеклянная сфера, лёгкое отражение и глубина",
    category: "background",
    page: "global",
    priority: true,
  },
  {
    id: "projects-page-header-glass",
    title: "Projects header prism",
    type: "image",
    src: "/assets/3d/glass/images/glass-prism-square.webp",
    alt: "Декоративная стеклянная призма в шапке страницы проектов",
    category: "decor",
    page: "projects",
    priority: true,
  },
  {
    id: "projects-page-filter-glass",
    title: "Projects filter backdrop",
    type: "image",
    src: "/assets/3d/glass/images/glass-wave.webp",
    alt: "Мягкий стеклянный фон за фильтром проектов",
    category: "background",
    page: "projects",
    priority: false,
  },
  {
    id: "drivee-featured-card-glass",
    title: "Drivee featured glass wave",
    type: "image",
    src: "/assets/3d/glass/images/glass-wave.webp",
    alt: "Декоративная волна на карточке Drivee",
    category: "decor",
    page: "projects",
    priority: false,
  },
  {
    id: "glass-ribbon",
    title: "Glass ribbon",
    type: "image",
    src: "/assets/3d/glass/images/glass-ribbon.png",
    alt: "Стеклянная ленточная форма на тёмном фоне",
    category: "decor",
    page: "home",
    priority: false,
  },
  {
    id: "glass-disc",
    title: "Glass disc",
    type: "video",
    src: "/assets/3d/glass/videos/glass-disc.mp4",
    poster: "/assets/3d/glass/posters/glass-disc.webp",
    alt: "Стеклянный диск, абстрактная анимация",
    category: "project",
    page: "global",
    priority: true,
  },
  {
    id: "drivee-hero-glass",
    title: "Drivee hero — AI product glass",
    type: "image",
    src: "/assets/3d/glass/images/glass-prism-square.webp",
    alt: "Абстрактная стеклянная форма — визуальный якорь AI-продукта",
    category: "hero",
    page: "drivee",
    priority: true,
  },
  {
    id: "drivee-guardrails-shield",
    title: "Drivee guardrails shield",
    type: "image",
    src: "/assets/3d/glass/images/glass-ribbon.png",
    alt: "Абстрактный стеклянный акцент — ассоциация с контуром безопасности",
    category: "decor",
    page: "drivee",
    priority: false,
  },
  {
    id: "glass-wave",
    title: "Glass wave",
    type: "image",
    src: "/assets/3d/glass/images/glass-wave.webp",
    alt: "Волнообразная стеклянная абстракция",
    category: "background",
    page: "global",
    priority: false,
  },
]

export function glassAssetsForPage(page: GlassAssetPage): GlassAsset[] {
  return glassAssets.filter((a) => a.page === page || a.page === "global")
}

export function glassAssetsByCategory(
  page: GlassAssetPage,
  category: GlassAssetCategory
): GlassAsset[] {
  return glassAssetsForPage(page)
    .filter((a) => a.category === category)
    .sort((a, b) => Number(b.priority) - Number(a.priority))
}

/** Первый приоритетный hero-ассет для главной (или undefined, если список пуст) */
export function defaultHeroGlassAsset(): GlassAsset | undefined {
  return glassAssetsByCategory("home", "hero")[0]
}

/** До 2 декоративных ассетов для главной (только изображения — без второго видео в hero). */
export function homeHeroDecorGlassAssets(): GlassAsset[] {
  return glassAssets
    .filter((a) => a.page === "home" && a.category === "decor" && a.type === "image")
    .sort((a, b) => Number(b.priority) - Number(a.priority))
    .slice(0, 2)
}

export function projectsPageHeaderGlassAsset(): GlassAsset | undefined {
  return glassAssets.find((a) => a.id === "projects-page-header-glass")
}

export function projectsPageFilterGlassAsset(): GlassAsset | undefined {
  return glassAssets.find((a) => a.id === "projects-page-filter-glass")
}

export function driveeFeaturedCardGlassAsset(): GlassAsset | undefined {
  return glassAssets.find((a) => a.id === "drivee-featured-card-glass")
}

export function driveeHeroGlassAsset(): GlassAsset | undefined {
  return glassAssets.find((a) => a.id === "drivee-hero-glass")
}

export function driveeGuardrailsShieldGlassAsset(): GlassAsset | undefined {
  return glassAssets.find((a) => a.id === "drivee-guardrails-shield")
}

/** Статичный src для карточек: только изображения, для видео-ассета — постер. */
export function glassAssetStaticImageSrc(asset: GlassAsset): string {
  if (asset.type === "image") return asset.src
  return asset.poster ?? asset.src
}
