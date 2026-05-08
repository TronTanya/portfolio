"use client"

import { useEffect, useMemo, useState } from "react"

import { Glass3DAsset } from "@/components/3d/Glass3DAsset"
import { GlassHeroScene } from "@/components/home/GlassHeroScene"
import { useGlassNarrowViewport } from "@/hooks/useGlassNarrowViewport"
import { defaultHeroGlassAsset, homeHeroDecorGlassAssets, type GlassAsset } from "@/data/glassAssets"
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

async function heroAssetsReachable(main: GlassAsset): Promise<boolean> {
  const primary = await assetReachable(main.src)
  if (main.type === "image") return primary
  if (primary) return true
  if (main.poster) return assetReachable(main.poster)
  return false
}

const decorSizes = "(max-width: 640px) 32vw, 168px"

/**
 * Hero справа: политика 3D — `config/visuals.ts` + `lib/glassVisualPolicy.ts`
 * (в т.ч. `enableMobile3D` для мелкого декора).
 */
export function HeroGlassCollage({ className }: { className?: string }) {
  const narrow = useGlassNarrowViewport()
  const showDecor = glassDecorativeVisibleOnViewport(narrow)

  const [reachable, setReachable] = useState<boolean | null>(null)
  const [decorReachable, setDecorReachable] = useState<Record<string, boolean>>({})

  const main = useMemo(() => defaultHeroGlassAsset(), [])
  const decors = useMemo(() => homeHeroDecorGlassAssets(), [])

  useEffect(() => {
    if (!isGlass3DEnabled()) {
      setReachable(false)
      setDecorReachable({})
      return
    }

    if (!main) {
      setReachable(false)
      setDecorReachable({})
      return
    }

    let cancelled = false

    ;(async () => {
      const ok = await heroAssetsReachable(main)
      if (cancelled) return
      setReachable(ok)
      if (!ok) {
        setDecorReachable({})
        return
      }

      if (!showDecor) {
        setDecorReachable({})
        return
      }

      const next: Record<string, boolean> = {}
      for (const d of decors) {
        if (cancelled) return
        next[d.id] = await assetReachable(d.src)
      }
      if (!cancelled) setDecorReachable(next)
    })()

    return () => {
      cancelled = true
    }
  }, [main, decors, showDecor])

  if (!isGlass3DEnabled()) {
    return <GlassHeroScene className={className} />
  }

  if (reachable === false || !main) {
    return <GlassHeroScene className={className} />
  }

  const staticSrc = main.poster ?? main.src

  return (
    <div
      className={cn(
        "relative min-h-[220px] w-full overflow-visible lg:min-h-[360px]",
        "pointer-events-none select-none",
        className
      )}
    >
      <div
        className="asset-glow absolute -inset-6 -z-10 opacity-90 blur-3xl sm:-inset-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 72% 38%, color-mix(in oklch, var(--primary) 28%, transparent), transparent 70%), radial-gradient(ellipse 40% 45% at 88% 72%, color-mix(in oklch, var(--accent-2) 18%, transparent), transparent 65%), radial-gradient(ellipse 50% 40% at 20% 60%, color-mix(in oklch, var(--primary) 12%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_90%_80%_at_70%_45%,oklch(0.12_0.04_264/0.5),transparent_72%)]"
        aria-hidden
      />

      {showDecor && reachable === true
        ? decors.map((d, i) => {
            if (!decorReachable[d.id]) return null
            const positions = [
              "left-[-4%] top-[6%] w-[min(28%,9.5rem)] opacity-[0.38] sm:left-0 sm:top-[4%]",
              "bottom-[8%] right-[-2%] w-[min(24%,7.5rem)] opacity-[0.32] sm:bottom-[6%] sm:right-[2%]",
            ]
            return (
              <div
                key={d.id}
                className={cn(
                  "floating-3d asset-glow absolute z-1 drop-shadow-[0_0_28px_color-mix(in_oklch,var(--primary)_22%,transparent)]",
                  positions[i]
                )}
              >
                <Glass3DAsset
                  type="image"
                  src={d.src}
                  alt={d.alt}
                  decorative
                  priority={false}
                  sizes={decorSizes}
                  className="aspect-square max-h-32 min-h-[7.5rem] w-auto max-w-[9.5rem] rounded-2xl opacity-90 ring-1 ring-white/10"
                />
              </div>
            )
          })
        : null}

      <div className="asset-mask relative z-2 mx-auto w-[min(100%,28rem)] lg:mr-0 lg:ml-auto lg:w-[min(100%,32rem)]">
        <div
          className="asset-glow drop-shadow-[0_0_48px_color-mix(in_oklch,var(--primary)_26%,transparent)] drop-shadow-[0_0_96px_color-mix(in_oklch,var(--accent-2)_14%,transparent)]"
          aria-hidden
        >
          {reachable === null ? (
            <div className="flex aspect-video min-h-[12rem] w-full items-center justify-center rounded-2xl bg-muted/15">
              <span className="size-10 animate-pulse rounded-full border-2 border-primary/25 border-t-primary/60 motion-reduce:animate-none" />
            </div>
          ) : (
            <Glass3DAsset
              type={main.type}
              src={main.src}
              poster={main.poster}
              reducedMotionFallback={main.type === "video" ? staticSrc : undefined}
              alt={main.alt}
              decorative={false}
              priority={false}
              sizes="(max-width: 1024px) 90vw, min(32rem, 40vw)"
              shellClassName="floating-3d"
              className="rounded-2xl ring-1 ring-white/10"
            />
          )}
        </div>
      </div>
    </div>
  )
}
