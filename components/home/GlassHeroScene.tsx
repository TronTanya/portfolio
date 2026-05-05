"use client"

import { useCallback, useEffect, useRef } from "react"

import { glassHeroPanels } from "@/lib/home-hero"
import { cn } from "@/lib/utils"

const panelStyles: Record<
  (typeof glassHeroPanels)[number]["id"],
  string
> = {
  drivee:
    "left-[2%] top-[6%] w-[48%] rounded-2xl rounded-br-[2.5rem] py-4 pl-5 pr-4 [transform:skewY(-2deg)_rotate(-1deg)_translateZ(26px)]",
  "nl-sql":
    "right-[4%] top-[4%] w-[38%] rounded-xl rounded-tl-3xl py-3 pl-4 pr-3 [transform:skewX(2deg)_skewY(1deg)_rotate(1deg)_translateZ(34px)]",
  fastapi:
    "left-[6%] top-[38%] w-[34%] rounded-lg rounded-tr-2xl py-3 pl-4 pr-3 [transform:skewX(-3deg)_rotate(-0.5deg)_translateZ(18px)]",
  postgres:
    "right-[2%] top-[32%] w-[40%] rounded-2xl rounded-bl-3xl py-3.5 pl-4 pr-3 [transform:skewY(2deg)_rotate(0.5deg)_translateZ(22px)]",
  next: "left-[12%] bottom-[28%] w-[30%] rounded-lg py-2.5 pl-3 pr-2 [transform:skewX(2deg)_translateZ(14px)]",
  ds: "right-[18%] bottom-[36%] w-[36%] rounded-xl py-3 pl-4 pr-3 [transform:skewX(-2deg)_rotate(-1deg)_translateZ(20px)]",
  edu: "left-[4%] bottom-[6%] w-[44%] rounded-2xl rounded-tl-sm py-3 pl-4 pr-3 [transform:skewY(1deg)_translateZ(16px)]",
  mentor:
    "right-[6%] bottom-[8%] w-[42%] rounded-xl rounded-br-2xl py-3 pl-4 pr-3 [transform:skewX(1deg)_rotate(1deg)_translateZ(24px)]",
}

function GlassPanel({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute border border-white/[0.09] bg-[linear-gradient(155deg,oklch(1_0_0_/0.09),oklch(1_0_0_/0.02))] shadow-[0_12px_40px_-20px_oklch(0_0_0_/0.75),inset_0_1px_0_0_oklch(1_0_0_/0.06)] backdrop-blur-xl text-xs font-medium sm:text-sm",
        className
      )}
    >
      <span className="block bg-gradient-to-br from-foreground/95 via-foreground/80 to-muted-foreground bg-clip-text font-mono tracking-tight text-transparent">
        {label}
      </span>
    </div>
  )
}

export function GlassHeroScene({ className }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null)

  const resetTilt = useCallback(() => {
    const el = rootRef.current
    if (!el) return
    el.style.setProperty("--tilt-x", "0deg")
    el.style.setProperty("--tilt-y", "0deg")
  }, [])

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    let raf = 0
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width - 0.5
        const py = (e.clientY - rect.top) / rect.height - 0.5
        el.style.setProperty("--tilt-y", `${(px * 9).toFixed(2)}deg`)
        el.style.setProperty("--tilt-x", `${(-py * 7).toFixed(2)}deg`)
      })
    }

    el.addEventListener("mousemove", onMove, { passive: true })
    el.addEventListener("mouseleave", resetTilt)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", resetTilt)
    }
  }, [resetTilt])

  return (
    <div className={cn("relative w-full", className)}>
      {/* Desktop: 3D сцена */}
      <div
        ref={rootRef}
        role="img"
        aria-label="Схематичное представление стека: проекты, AI, backend и образование"
        className="relative mx-auto hidden aspect-[5/4] max-h-[min(440px,52vh)] w-full max-w-xl cursor-default lg:block"
        style={
          {
            perspective: "1100px",
            "--tilt-x": "0deg",
            "--tilt-y": "0deg",
          } as React.CSSProperties
        }
      >
        <div
          className="absolute inset-0 rounded-[2rem] border border-white/[0.05] bg-[radial-gradient(ellipse_at_30%_20%,color-mix(in_oklch,var(--primary)_12%,transparent),transparent_55%),radial-gradient(ellipse_at_80%_70%,color-mix(in_oklch,var(--accent-2)_10%,transparent),transparent_50%)] shadow-glass"
          aria-hidden
        />
        <div
          className="absolute inset-[6%] [transform-style:preserve-3d] transition-transform duration-200 ease-out will-change-transform"
          style={{
            transform:
              "rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg)) rotateX(-4deg) rotateY(6deg)",
          }}
        >
          <div className="absolute inset-0 skew-x-[-1deg] rounded-3xl border border-white/[0.04] bg-gradient-to-br from-white/[0.04] to-transparent opacity-80" />
          {glassHeroPanels.map((p) => (
            <GlassPanel
              key={p.id}
              label={p.label}
              className={panelStyles[p.id]}
            />
          ))}
        </div>
      </div>

      {/* Mobile / tablet: плоская сетка без perspective */}
      <div
        className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5 lg:hidden"
        aria-label="Стек технологий"
      >
        {glassHeroPanels.map((p) => (
          <div
            key={p.id}
            className={cn(
              "rounded-xl border border-white/[0.08] bg-[linear-gradient(145deg,oklch(1_0_0_/0.07),oklch(1_0_0_/0.02))] px-3 py-2.5 text-center shadow-sm backdrop-blur-md",
              p.size === "lg" && "col-span-2 sm:col-span-1"
            )}
          >
            <span className="font-mono text-[10px] font-medium leading-snug text-foreground/90 sm:text-[11px]">
              {p.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
