"use client"

import { useEffect, useState } from "react"

import { Glass3DAsset } from "@/components/3d/Glass3DAsset"
import { useGlassNarrowViewport } from "@/hooks/useGlassNarrowViewport"
import { glassAssetStaticImageSrc, type GlassAsset } from "@/data/glassAssets"
import { glassDecorativeVisibleOnViewport, isGlass3DEnabled } from "@/lib/glassVisualPolicy"
import { cn } from "@/lib/utils"

async function assetReachable(url: string): Promise<boolean> {
  try {
    const r = await fetch(url, { method: "HEAD", cache: "no-store" })
    return r.ok
  } catch {
    return false
  }
}

export type GlassImageDecorSlotProps = {
  asset: GlassAsset | undefined
  className?: string
  /** Непрозрачность слоя 0.45–0.75 */
  opacity?: number
  assetSize?: "default" | "compact" | "hero"
  blurClass?: string
}

const slotSizes: Record<NonNullable<GlassImageDecorSlotProps["assetSize"]>, string> = {
  compact: "120px",
  hero: "(max-width: 1200px) 180px, 220px",
  default: "(max-width: 768px) 45vw, 520px",
}

/** Статичное изображение glass: проверка HEAD, без поломки UI при отсутствии файла. */
export function GlassImageDecorSlot({
  asset,
  className,
  opacity = 0.58,
  assetSize = "compact",
  blurClass,
}: GlassImageDecorSlotProps) {
  const narrow = useGlassNarrowViewport()
  const [ok, setOk] = useState<boolean | null>(null)
  const src = asset ? glassAssetStaticImageSrc(asset) : ""

  useEffect(() => {
    if (!asset || !src) {
      setOk(false)
      return
    }
    let cancelled = false
    assetReachable(src).then((v) => {
      if (!cancelled) setOk(v)
    })
    return () => {
      cancelled = true
    }
  }, [asset, src])

  if (!isGlass3DEnabled()) return null
  if (!glassDecorativeVisibleOnViewport(narrow)) return null
  if (!asset || ok === false || ok === null) return null

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none mix-blend-soft-light", blurClass, className)}
      style={{ opacity }}
    >
      <Glass3DAsset
        type="image"
        src={src}
        alt=""
        decorative
        priority={false}
        sizes={slotSizes[assetSize]}
        size={assetSize}
        className="ring-0"
      />
    </div>
  )
}
