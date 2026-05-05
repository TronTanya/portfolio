import { visualConfig, type VisualConfig } from "@/config/visuals"

export type { VisualConfig }

/** Включён ли весь слой 3D glass (изображения и видео). */
export function isGlass3DEnabled(): boolean {
  return visualConfig.enable3DAssets
}

/** Разрешён ли autoplay для glass-видео на уровне конфига (без учёта a11y / mobile perf). */
export function isGlassVideo3DEnabled(): boolean {
  return visualConfig.enable3DAssets && visualConfig.enableVideo3D
}

/**
 * Декоративные glass (иконки, бейдж-фоны, мелкий hero-декор) на узком экране.
 * `isNarrowViewport` — обычно `matchMedia('(max-width: 767px)')`.
 */
export function glassDecorativeVisibleOnViewport(isNarrowViewport: boolean): boolean {
  if (!visualConfig.enable3DAssets) return false
  if (isNarrowViewport && !visualConfig.enableMobile3D) return false
  return true
}

export type GlassVideoAutoplayContext = {
  isVideoType: boolean
  hasValidPoster: boolean
  prefersReducedMotion: boolean
  /** Не отдавать mp4 на узком вьюпорте (отдельно от enableMobile3D — perf). */
  videoDisabledOnNarrowViewport: boolean
  inViewport: boolean
  notError: boolean
  notFailed: boolean
  /** См. `tryReserveGlassVideoSlot` в `lib/glassVideoBudget.ts`. */
  hasVideoBudgetSlot: boolean
}

/** Разрешить монтирование `<video autoplay>` для glass (все слои: конфиг + a11y + бюджет). */
export function glassVideoAutoplayAllowed(ctx: GlassVideoAutoplayContext): boolean {
  if (!isGlassVideo3DEnabled()) return false
  if (!ctx.isVideoType || !ctx.hasValidPoster) return false
  if (ctx.prefersReducedMotion) return false
  if (ctx.videoDisabledOnNarrowViewport) return false
  if (!ctx.inViewport || !ctx.notError || !ctx.notFailed) return false
  if (!ctx.hasVideoBudgetSlot) return false
  return true
}

/** При 404 / ошибке Next Image: тихий плейсхолдер вместо блока с `role="alert"`. */
export function glassUseSoftMediaFallback(): boolean {
  return visualConfig.useFallbackIfMissing
}
