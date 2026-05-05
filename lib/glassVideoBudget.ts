import { visualConfig } from "@/config/visuals"

let activeVideos = 0

/** Попытаться занять слот под autoplay video (лимит — `visualConfig.maxVideosPerPage`). */
export function tryReserveGlassVideoSlot(): boolean {
  if (activeVideos >= visualConfig.maxVideosPerPage) return false
  activeVideos += 1
  return true
}

export function releaseGlassVideoSlot(): void {
  activeVideos = Math.max(0, activeVideos - 1)
}

/** Сброс при смене маршрута (см. `GlassVideoBudgetReset` в layout). */
export function resetGlassVideoBudget(): void {
  activeVideos = 0
}
