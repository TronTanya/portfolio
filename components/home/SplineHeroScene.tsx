"use client"

import dynamic from "next/dynamic"
import { useState } from "react"

import { SplineHeroPlaceholder } from "@/components/home/SplineHeroPlaceholder"
import { cn } from "@/lib/utils"

const Spline = dynamic(() => import("@splinetool/react-spline").then((m) => m.default), {
  ssr: false,
  loading: () => null,
})

type SplineHeroSceneProps = {
  sceneUrl: string
  className?: string
}

/**
 * Опциональное усиление hero: внешняя сцена по URL (чанк + runtime подгружаются лениво).
 * Вызывать только на `lg+` и при непустом URL — см. `HeroVisual`.
 */
export function SplineHeroScene({ sceneUrl, className }: SplineHeroSceneProps) {
  const [sceneReady, setSceneReady] = useState(false)

  return (
    <div className={cn("relative w-full", className)}>
      <div
        className="relative mx-auto aspect-5/4 max-h-[min(440px,52vh)] w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/6 bg-surface/25 shadow-glass"
        aria-hidden
      >
        {!sceneReady ? (
          <SplineHeroPlaceholder className="absolute inset-0 z-10 min-h-[min(360px,52vh)]" />
        ) : null}
        <Spline
          scene={sceneUrl}
          renderOnDemand
          onLoad={() => setSceneReady(true)}
          className={cn(
            "absolute inset-0 h-full w-full transition-opacity duration-300",
            sceneReady ? "opacity-100" : "opacity-0"
          )}
        />
      </div>
    </div>
  )
}
