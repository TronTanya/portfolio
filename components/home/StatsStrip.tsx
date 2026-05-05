"use client"

import { motion } from "framer-motion"

import { useReducedMotion } from "@/hooks/useReducedMotion"
import { heroStats } from "@/lib/home-hero"
import { cn } from "@/lib/utils"

export function StatsStrip({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion()

  const container = reduceMotion
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.04, delayChildren: 0.08 },
        },
      }

  const item = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 8 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const },
        },
      }

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      className={cn(
        "relative border-y border-white/[0.06] bg-[linear-gradient(180deg,oklch(1_0_0_/0.02),transparent)] py-10 sm:py-12",
        className
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-4 sm:grid-cols-4 sm:gap-x-0 sm:gap-y-6 sm:px-6 lg:px-8">
        {heroStats.map((s, i) => (
          <motion.div
            key={s.label}
            variants={item}
            className={cn(
              "text-center sm:border-white/[0.06] sm:px-6 sm:text-left lg:px-8",
              i > 0 && i % 2 === 1 ? "max-sm:border-l max-sm:border-white/[0.06] max-sm:pl-4" : "",
              i > 0 ? "sm:border-l" : ""
            )}
          >
            <p className="font-mono text-sm font-semibold leading-snug tracking-tight text-foreground tabular-nums sm:text-base lg:text-lg">
              <span className="gradient-text text-balance">{s.value}</span>
            </p>
            <p className="muted-text mt-1.5 text-pretty text-xs leading-snug sm:text-sm">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
