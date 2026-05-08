"use client"

import Image from "next/image"
import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react"

import { useGlassNarrowViewport } from "@/hooks/useGlassNarrowViewport"
import { useHydrationReady } from "@/hooks/useHydrationReady"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import {
  glassDecorativeVisibleOnViewport,
  glassUseSoftMediaFallback,
  glassVideoAutoplayAllowed,
  isGlass3DEnabled,
} from "@/lib/glassVisualPolicy"
import { releaseGlassVideoSlot, tryReserveGlassVideoSlot } from "@/lib/glassVideoBudget"
import { cn } from "@/lib/utils"

export type Glass3DAssetSize = "default" | "compact" | "hero"

export type Glass3DAssetProps = {
  src: string
  poster?: string
  type: "video" | "image"
  alt: string
  className?: string
  /** Только для LCP-критичного hero; декор всегда без priority. */
  priority?: boolean
  /** `aria-hidden` + пустой alt для чисто декоративных вставок. */
  decorative?: boolean
  reducedMotionFallback?: string
  size?: Glass3DAssetSize
  sizes?: string
  shellClassName?: string
}

type LoadState = "loading" | "loaded" | "error"

const defaultSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
const compactSizes = "120px"
const heroSizes = "(max-width: 1200px) 180px, 220px"

const MOBILE_NO_VIDEO_MQ = "(max-width: 767px)"

function subscribeMobileViewport(cb: () => void) {
  const m = window.matchMedia(MOBILE_NO_VIDEO_MQ)
  m.addEventListener("change", cb)
  return () => m.removeEventListener("change", cb)
}

function getMobileViewportSnapshot() {
  return window.matchMedia(MOBILE_NO_VIDEO_MQ).matches
}

function getMobileViewportServerSnapshot() {
  return true
}

function useGlassVideoDisabledOnMobile() {
  const hydrated = useHydrationReady()
  const live = useSyncExternalStore(
    subscribeMobileViewport,
    getMobileViewportSnapshot,
    getMobileViewportServerSnapshot
  )
  return hydrated ? live : true
}

function shellClassFor(assetSize: Glass3DAssetSize) {
  if (assetSize === "compact") {
    return "relative isolate aspect-square w-full max-w-[5.5rem] min-h-[4.5rem] overflow-hidden rounded-lg bg-muted/15 sm:max-w-[6rem] sm:min-h-[5rem]"
  }
  if (assetSize === "hero") {
    return "relative isolate aspect-square w-full max-w-[12rem] min-h-[10.5rem] overflow-hidden rounded-2xl bg-muted/20 sm:max-w-[13rem] sm:min-h-[11.5rem]"
  }
  return "relative isolate aspect-video w-full min-h-[12rem] overflow-hidden rounded-xl bg-muted/20"
}

/**
 * Glass 3D: политика из `config/visuals.ts` + `lib/glassVisualPolicy.ts`
 * (enable3DAssets, enableVideo3D, enableMobile3D, maxVideosPerPage, useFallbackIfMissing).
 */
export function Glass3DAsset({
  src,
  poster,
  type,
  alt,
  className,
  priority = false,
  decorative = false,
  reducedMotionFallback,
  size = "default",
  sizes: sizesProp,
  shellClassName,
}: Glass3DAssetProps) {
  const posterRequired = type === "video" && Boolean(poster?.trim())
  const staticVideoSrc = poster ?? reducedMotionFallback

  const containerRef = useRef<HTMLDivElement>(null)
  const [loadState, setLoadState] = useState<LoadState>("loading")
  const [inView, setInView] = useState(type !== "video")
  const [videoFailed, setVideoFailed] = useState(false)
  const [videoSlotHeld, setVideoSlotHeld] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const videoDisabledOnMobile = useGlassVideoDisabledOnMobile()
  const narrowViewport = useGlassNarrowViewport()
  const useSoftFallback = glassUseSoftMediaFallback()
  const imgAlt = decorative ? "" : alt
  const ariaHidden = decorative ? true : undefined

  const setLoaded = useCallback(() => setLoadState("loaded"), [])
  const setError = useCallback(() => setLoadState("error"), [])

  const shellClass = shellClassFor(size)
  const resolvedSizes =
    sizesProp ??
    (size === "compact" ? compactSizes : size === "hero" ? heroSizes : defaultSizes)

  useEffect(() => {
    if (type !== "video") return
    const root = containerRef.current
    if (!root) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setInView(true)
      },
      { rootMargin: "120px 0px", threshold: 0.01 }
    )
    io.observe(root)
    return () => io.disconnect()
  }, [type])

  useEffect(() => {
    setLoadState("loading")
    setVideoFailed(false)
  }, [src, type, poster, reducedMotionFallback, prefersReducedMotion, videoDisabledOnMobile])

  useEffect(() => {
    if (type !== "video") return
    if ((prefersReducedMotion || videoDisabledOnMobile || !posterRequired) && !staticVideoSrc) {
      setLoadState("loaded")
    }
  }, [type, prefersReducedMotion, videoDisabledOnMobile, posterRequired, staticVideoSrc])

  const showSkeleton = loadState === "loading"
  const showError = loadState === "error"

  const mediaAllowed =
    isGlass3DEnabled() && (!decorative || glassDecorativeVisibleOnViewport(narrowViewport))

  const videoBudgetEligible = useMemo(
    () =>
      mediaAllowed &&
      type === "video" &&
      posterRequired &&
      !prefersReducedMotion &&
      !videoDisabledOnMobile &&
      inView &&
      !showError &&
      !videoFailed,
    [
      mediaAllowed,
      type,
      posterRequired,
      prefersReducedMotion,
      videoDisabledOnMobile,
      inView,
      showError,
      videoFailed,
    ]
  )

  useEffect(() => {
    if (!videoBudgetEligible) {
      setVideoSlotHeld((held) => {
        if (held) releaseGlassVideoSlot()
        return false
      })
      return
    }
    if (!tryReserveGlassVideoSlot()) {
      setVideoSlotHeld(false)
      return
    }
    setVideoSlotHeld(true)
    return () => {
      releaseGlassVideoSlot()
      setVideoSlotHeld(false)
    }
  }, [videoBudgetEligible])

  if (!mediaAllowed) {
    return null
  }

  const showVideo = glassVideoAutoplayAllowed({
    isVideoType: type === "video",
    hasValidPoster: posterRequired,
    prefersReducedMotion,
    videoDisabledOnNarrowViewport: videoDisabledOnMobile,
    inViewport: inView,
    notError: !showError,
    notFailed: !videoFailed,
    hasVideoBudgetSlot: videoSlotHeld,
  })

  const showStillFrame =
    type === "video" &&
    !showError &&
    Boolean(staticVideoSrc) &&
    (!showVideo || videoFailed)

  if (type === "image") {
    return (
      <div
        ref={containerRef}
        className={cn(shellClass, "glass-object-soft", shellClassName, className)}
        aria-hidden={ariaHidden}
      >
        {showSkeleton ? <GlassSkeleton /> : null}
        {showError ? (
          <GlassErrorFallback soft={useSoftFallback} />
        ) : (
          <Image
            src={src}
            alt={imgAlt}
            fill
            sizes={resolvedSizes}
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            className={cn(
              "object-cover transition-opacity duration-300 motion-reduce:transition-none",
              showSkeleton ? "opacity-0" : "opacity-100"
            )}
            onLoadingComplete={setLoaded}
            onError={setError}
            unoptimized={src.endsWith(".png")}
          />
        )}
      </div>
    )
  }

  const fallbackSrc = reducedMotionFallback ?? poster

  return (
    <div
      ref={containerRef}
      className={cn(shellClass, "glass-object-soft", shellClassName, className)}
      aria-hidden={ariaHidden}
    >
      {showSkeleton && !showError ? <GlassSkeleton /> : null}

      {showError && fallbackSrc ? (
        <Image
          src={fallbackSrc}
          alt={imgAlt}
          fill
          sizes={resolvedSizes}
          className="object-cover"
          loading="lazy"
          onLoadingComplete={setLoaded}
          onError={() => setLoadState("error")}
          unoptimized={fallbackSrc.endsWith(".png")}
        />
      ) : null}

      {showError && !fallbackSrc ? <GlassErrorFallback soft={useSoftFallback} /> : null}

      {!showError && showStillFrame ? (
        <div className="absolute inset-0">
          <Image
            src={staticVideoSrc!}
            alt={imgAlt}
            fill
            sizes={resolvedSizes}
            priority={false}
            loading="lazy"
            className={cn(
              "object-cover transition-opacity duration-300 motion-reduce:transition-none",
              showSkeleton ? "opacity-0" : "opacity-100"
            )}
            onLoadingComplete={setLoaded}
            onError={setError}
            unoptimized={staticVideoSrc!.endsWith(".png")}
          />
        </div>
      ) : null}

      {!showError && !posterRequired ? (
        <div className="absolute inset-0">
          <GlassReducedMotionPlaceholder />
        </div>
      ) : null}

      {!showError && posterRequired && showVideo ? (
        <video
          className={cn(
            "absolute inset-0 size-full object-cover transition-opacity duration-300 motion-reduce:transition-none",
            showSkeleton ? "opacity-0" : "opacity-100"
          )}
          src={src}
          poster={poster}
          muted
          playsInline
          loop
          preload="metadata"
          autoPlay
          aria-hidden={decorative ? true : undefined}
          onLoadedData={setLoaded}
          onError={() => {
            setVideoFailed(true)
            setError()
          }}
        />
      ) : null}

      {!showError && videoFailed && fallbackSrc ? (
        <div className="absolute inset-0">
          <Image
            src={fallbackSrc}
            alt={imgAlt}
            fill
            sizes={resolvedSizes}
            loading="lazy"
            className="object-cover"
            onLoadingComplete={setLoaded}
            unoptimized={fallbackSrc.endsWith(".png")}
          />
        </div>
      ) : null}
    </div>
  )
}

function GlassSkeleton() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 animate-pulse bg-linear-to-br from-muted/55 via-muted/20 to-transparent motion-reduce:animate-none"
      aria-hidden
    />
  )
}

function GlassErrorFallback({ soft }: { soft: boolean }) {
  if (soft) {
    return (
      <div
        className="absolute inset-0 z-1 flex items-center justify-center bg-muted/20 text-center text-xs text-muted-foreground/80"
        aria-hidden
      >
        <span className="max-w-48 px-2" />
      </div>
    )
  }
  return (
    <div
      className="absolute inset-0 z-1 flex items-center justify-center bg-muted/35 text-center text-xs text-muted-foreground"
      role="alert"
    >
      <span className="max-w-48 px-2">Не удалось загрузить медиа</span>
    </div>
  )
}

function GlassReducedMotionPlaceholder() {
  return (
    <div
      className="flex size-full items-center justify-center bg-muted/25 text-xs text-muted-foreground"
      aria-hidden
    >
      Статичный режим
    </div>
  )
}
