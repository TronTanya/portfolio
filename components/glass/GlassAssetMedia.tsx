"use client"

import Image from "next/image"
import { useSyncExternalStore } from "react"

import type { GlassAsset } from "@/data/glassAssets"
import { glassAssetStaticImageSrc } from "@/data/glassAssets"
import { useHydrationReady } from "@/hooks/useHydrationReady"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { normalizeGlassAsset } from "@/lib/getAsset"
import { isGlass3DEnabled, isGlassVideo3DEnabled } from "@/lib/glassVisualPolicy"
import { cn } from "@/lib/utils"

const MOBILE_MQ = "(max-width: 767px)"

function subscribeMobile(cb: () => void) {
  const m = window.matchMedia(MOBILE_MQ)
  m.addEventListener("change", cb)
  return () => m.removeEventListener("change", cb)
}

function getMobileSnapshot() {
  return window.matchMedia(MOBILE_MQ).matches
}

function getMobileServerSnapshot() {
  return true
}

function useMobileViewport() {
  const hydrated = useHydrationReady()
  const live = useSyncExternalStore(subscribeMobile, getMobileSnapshot, getMobileServerSnapshot)
  return hydrated ? live : true
}

type GlassAssetMediaProps = {
  asset: GlassAsset
  className?: string
  fill?: boolean
  disableVideoAutoPlay?: boolean
  videoPreload?: "none" | "metadata" | "auto"
}

/**
 * Универсальный вывод ассета: PNG/WebP через Next Image; видео — с постером,
 * без автозапуска на mobile / при reduced motion (только изображение).
 */
export function GlassAssetMedia({
  asset,
  className,
  fill,
  disableVideoAutoPlay,
  videoPreload = "metadata",
}: GlassAssetMediaProps) {
  if (!isGlass3DEnabled()) return null

  const safe = normalizeGlassAsset(asset)
  if (!safe) return null

  const prefersReduced = useReducedMotion()
  const isMobile = useMobileViewport()

  if (safe.type === "image") {
    const sizes = fill ? "100vw" : "(max-width: 768px) 100vw, 800px"
    if (fill) {
      return (
        <Image
          src={safe.src}
          alt={safe.alt}
          fill
          sizes={sizes}
          className={cn("object-cover", className)}
          loading="lazy"
          unoptimized={safe.src.endsWith(".png")}
        />
      )
    }
    return (
      <Image
        src={safe.src}
        alt={safe.alt}
        width={1200}
        height={800}
        sizes={sizes}
        className={cn("h-auto w-full object-cover", className)}
        loading="lazy"
        unoptimized={safe.src.endsWith(".png")}
      />
    )
  }

  const poster = safe.poster!
  const staticSrc = glassAssetStaticImageSrc(safe)
  const useVideo =
    isGlassVideo3DEnabled() &&
    !prefersReduced &&
    !isMobile &&
    !disableVideoAutoPlay &&
    Boolean(poster.trim())

  if (!useVideo) {
    const sizes = fill ? "100vw" : "(max-width: 768px) 100vw, 800px"
    if (fill) {
      return (
        <Image
          src={staticSrc}
          alt={safe.alt}
          fill
          sizes={sizes}
          className={cn("object-cover", className)}
          loading="lazy"
          unoptimized={staticSrc.endsWith(".png")}
        />
      )
    }
    return (
      <Image
        src={staticSrc}
        alt={safe.alt}
        width={1200}
        height={800}
        sizes={sizes}
        className={cn("h-auto w-full object-cover", className)}
        loading="lazy"
        unoptimized={staticSrc.endsWith(".png")}
      />
    )
  }

  return (
    <video
      className={cn(fill && "absolute inset-0 size-full object-cover", className)}
      src={safe.src}
      poster={poster}
      muted
      playsInline
      loop
      autoPlay
      preload={videoPreload}
      aria-label={safe.alt}
      role="img"
    />
  )
}
