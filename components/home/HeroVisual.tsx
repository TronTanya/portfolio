"use client"

import dynamic from "next/dynamic"
import { useLayoutEffect, useState } from "react"

import { useReducedMotion } from "@/hooks/useReducedMotion"

import { GlassHeroScene } from "@/components/home/GlassHeroScene"
import { SplineHeroScene } from "@/components/home/SplineHeroScene"
import { R3FHeroCanvasSkeleton } from "@/components/hero-r3f/R3FHeroCanvasSkeleton"
import { heroExperimentalR3fGlass, heroSplineSceneUrl } from "@/lib/site"

const LG_MIN = "(min-width: 1024px)"

const R3FGlassHeroScene = dynamic(() => import("@/components/hero-r3f/R3FGlassHeroScene"), {
  ssr: false,
  loading: () => <R3FHeroCanvasSkeleton />,
})

/**
 * Приоритет: Spline (если задан URL) → опционально R3F → CSS `GlassHeroScene`.
 * На ширине &lt; `lg` и при `prefers-reduced-motion` — только CSS.
 */
export function HeroVisual({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion()
  const [isLg, setIsLg] = useState<boolean | null>(null)

  useLayoutEffect(() => {
    const mq = window.matchMedia(LG_MIN)
    const sync = () => setIsLg(mq.matches)
    sync()
    mq.addEventListener("change", sync)
    return () => mq.removeEventListener("change", sync)
  }, [])

  const splineUrl = heroSplineSceneUrl.trim()
  const useSpline = Boolean(splineUrl) && isLg === true && !prefersReducedMotion
  const useR3f =
    heroExperimentalR3fGlass && !splineUrl && isLg === true && !prefersReducedMotion

  if (useSpline) {
    return <SplineHeroScene sceneUrl={splineUrl} className={className} />
  }

  if (useR3f) {
    return <R3FGlassHeroScene className={className} />
  }

  return <GlassHeroScene className={className} />
}
