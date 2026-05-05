/**
 * Глобальные переключатели для 3D glass (изображения / видео из `public/assets/3d/glass/`).
 *
 * Как менять поведение:
 * - **enable3DAssets: false** — полностью отключает glass-медиа (hero fallback, без декора на Projects/Drivee).
 * - **enableVideo3D: false** — только постер / статичная картинка; `<video autoplay>` не используется.
 * - **enableMobile3D: false** — на узком вьюпорте (до 767px) скрываются **декоративные** вставки
 *   (слоты, мелкий декор в hero); крупный hero-коллаж может оставаться как статика (постер).
 * - **maxVideosPerPage** — лимит одновременных autoplay video на клиенте (сброс при смене маршрута).
 * - **useFallbackIfMissing: true** — при ошибке загрузки медиа показывать мягкий плейсхолдер вместо «ошибки».
 *
 * Логика чтения флагов — в `lib/glassVisualPolicy.ts` и `lib/glassVideoBudget.ts`, не дублируйте условия в UI.
 */
export const visualConfig = {
  enable3DAssets: true,
  enableVideo3D: true,
  enableMobile3D: false,
  maxVideosPerPage: 1,
  useFallbackIfMissing: true,
} as const

export type VisualConfig = typeof visualConfig
