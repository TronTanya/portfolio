"use client"

import { glassAssetsByCategory } from "@/data/glassAssets"
import type { GlassAssetCategory, GlassAssetPage } from "@/data/glassAssets"
import { normalizeGlassAsset } from "@/lib/getAsset"
import { isGlass3DEnabled } from "@/lib/glassVisualPolicy"
import { cn } from "@/lib/utils"

import { GlassAssetMedia } from "./GlassAssetMedia"

type GlassBackdropProps = {
  page: GlassAssetPage
  category?: GlassAssetCategory
  className?: string
  /** Видео без автозапуска (меньше нагрузка и спокойнее для accessibility) */
  pauseVideo?: boolean
}

/**
 * Опциональный фоновый слой под контент страницы: первый подходящий ассет из `glassAssets`.
 * Подключайте в layout секции: `<GlassBackdrop page="about" />` внутри `relative` контейнера.
 */
export function GlassBackdrop({
  page,
  category = "background",
  className,
  pauseVideo = true,
}: GlassBackdropProps) {
  if (!isGlass3DEnabled()) return null

  const asset = normalizeGlassAsset(glassAssetsByCategory(page, category)[0])
  if (!asset) return null

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-[0.12]", className)}
      aria-hidden
    >
      <GlassAssetMedia
        asset={asset}
        fill
        className="scale-[1.02] object-center"
        disableVideoAutoPlay={pauseVideo}
        videoPreload="none"
      />
    </div>
  )
}
