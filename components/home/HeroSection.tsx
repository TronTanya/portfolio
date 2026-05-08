"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Mail } from "lucide-react"
import Link from "next/link"

import { GlassHeroScene } from "@/components/home/GlassHeroScene"
import { HeroGlassCollage } from "@/components/home/HeroGlassCollage"
import { GradientButton } from "@/components/ui/GradientButton"
import { buttonVariants } from "@/components/ui/Button"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { isGlass3DEnabled } from "@/lib/glassVisualPolicy"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

const heroSubtitle =
  "Создаю AI- и Data-решения, участвую в хакатонах, развиваю студентов через конкурсы, курсы и проектную деятельность."

export function HeroSection() {
  const reduceMotion = useReducedMotion()

  const fade = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 12 },
        show: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.04 * i,
            duration: 0.32,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        }),
      }

  return (
    <section className="relative overflow-hidden bg-[oklch(0.042_0.022_264)] pt-10 pb-8 sm:pt-14 sm:pb-12 lg:pt-[4.25rem] lg:pb-16">
      <div className="pointer-events-none absolute inset-0 hero-mesh" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_85%_at_50%_-25%,oklch(0.1_0.06_264/0.5),transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(62vh,540px)] bg-[radial-gradient(ellipse_82%_58%_at_50%_-8%,color-mix(in_oklch,var(--primary)_14%,transparent),transparent_68%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(to_top,oklch(0.055_0.014_264/0.95),transparent)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,1fr)] lg:gap-16 lg:px-8 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="pointer-events-auto relative z-20 min-w-0 text-balance">
          <motion.div custom={0} initial="hidden" animate="show" variants={fade}>
            <p className="mb-4 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/90">
              <span
                className="h-1 w-9 shrink-0 rounded-full bg-linear-to-r from-primary to-accent-2 shadow-[0_0_12px_color-mix(in_oklch,var(--primary)_35%,transparent)]"
                aria-hidden
              />
              {siteConfig.name}
            </p>
            <h1 className="text-balance font-sans text-[clamp(1.9rem,5vw,3.15rem)] font-semibold leading-[1.08] tracking-[-0.038em]">
              <span className="hero-title-gradient block">AI & Data</span>
              <span className="mt-2 block text-[clamp(1.45rem,3.6vw,2.4rem)] font-semibold tracking-[-0.032em] text-foreground/96">
                Product Developer
              </span>
            </h1>
          </motion.div>

          <motion.p
            custom={1}
            initial="hidden"
            animate="show"
            variants={fade}
            className="muted-text mt-6 max-w-[34rem] text-pretty text-base leading-[1.65] text-muted-foreground/95 sm:text-lg"
          >
            {heroSubtitle}
          </motion.p>

          <motion.div
            custom={2}
            initial="hidden"
            animate="show"
            variants={fade}
            className="mt-9 sm:mt-10"
          >
            <div className="flex flex-col gap-3 rounded-2xl border border-white/7 bg-[linear-gradient(135deg,oklch(1_0_0_/0.04),oklch(1_0_0_/0.01))] p-3 shadow-[inset_0_1px_0_0_oklch(1_0_0_/0.06)] backdrop-blur-md sm:inline-flex sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 sm:p-3.5">
              <GradientButton href="/projects" innerClassName="gap-2 px-6">
                Смотреть проекты
                <ArrowRight className="size-4 shrink-0" aria-hidden />
              </GradientButton>
              <a
                href={siteConfig.resumeUrl}
                download={siteConfig.resumeDownloadFilename}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "inline-flex w-full justify-center gap-2 border-white/14 bg-surface/40 backdrop-blur-sm sm:w-auto"
                )}
                aria-label="Скачать резюме в PDF"
              >
                <Download className="size-4 shrink-0" aria-hidden />
                Резюме PDF
              </a>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "inline-flex w-full justify-center gap-2 text-muted-foreground hover:bg-white/4 hover:text-foreground sm:w-auto"
                )}
              >
                <Mail className="size-4 shrink-0" aria-hidden />
                Контакты
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div custom={3} initial="hidden" animate="show" variants={fade} className="relative min-h-[220px] w-full lg:min-h-[380px]">
          {isGlass3DEnabled() ? (
            <HeroGlassCollage className="lg:pl-4" />
          ) : (
            <GlassHeroScene className="lg:pl-4" />
          )}
        </motion.div>
      </div>
    </section>
  )
}
