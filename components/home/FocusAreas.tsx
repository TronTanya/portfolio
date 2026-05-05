"use client"

import { motion } from "framer-motion"
import { GraduationCap, Layers, LineChart, Sparkles } from "lucide-react"

import { useReducedMotion } from "@/hooks/useReducedMotion"
import { focusAreas } from "@/lib/home-hero"
import { cn } from "@/lib/utils"

const areaIcons = [Sparkles, LineChart, Layers, GraduationCap] as const

export function FocusAreas({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion()

  const container = reduceMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.05, delayChildren: 0.06 },
        },
      }

  const card = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 10 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] as const },
        },
      }

  return (
    <section className={cn("relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24", className)}>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        aria-hidden
      />
      <motion.div
        initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 max-w-xl"
      >
        <p className="section-eyebrow">Направления</p>
        <h2 className="text-balance text-2xl font-semibold tracking-[-0.025em] text-foreground sm:text-3xl sm:tracking-[-0.03em]">
          Что я делаю
        </h2>
      </motion.div>

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-5"
      >
        {focusAreas.map((area, index) => {
          const Icon = areaIcons[index] ?? Sparkles
          return (
            <motion.li key={area.title} variants={card}>
              <div className="glass-panel glass-panel-feature h-full rounded-2xl p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.08] text-primary shadow-[0_0_24px_-8px_color-mix(in_oklch,var(--primary)_28%,transparent)]">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">{area.title}</h3>
                    <p className="muted-text mt-2 text-sm leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </div>
            </motion.li>
          )
        })}
      </motion.ul>
    </section>
  )
}
