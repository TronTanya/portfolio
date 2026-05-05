import { glassAssets, type GlassAsset } from "@/data/glassAssets"

/**
 * Ассет по id из каталога `glassAssets`. Если id не найден — `undefined` (страница не падает).
 */
export function getGlassAssetById(id: string): GlassAsset | undefined {
  return glassAssets.find((a) => a.id === id)
}

/**
 * То же, что `getGlassAssetById`, но видео без `poster` считаются невалидными
 * (не грузим тяжёлое видео без кадра для LCP / fallback).
 */
export function getValidGlassAssetById(id: string): GlassAsset | undefined {
  const asset = getGlassAssetById(id)
  return normalizeGlassAsset(asset)
}

/**
 * Нормализация: `undefined` / видео без постера отбрасываются.
 */
export function normalizeGlassAsset(asset: GlassAsset | null | undefined): GlassAsset | undefined {
  if (!asset) return undefined
  if (asset.type === "video") {
    const poster = asset.poster?.trim()
    if (!poster) return undefined
  }
  return asset
}
