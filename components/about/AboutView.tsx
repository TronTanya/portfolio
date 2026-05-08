"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import { useReducedMotion } from "@/hooks/useReducedMotion"
import {
  aboutEmploymentHistory,
  aboutIntro,
  aboutStrengths,
} from "@/lib/about-content"
import { GlassCard } from "@/components/ui/GlassCard"
import { buttonVariants } from "@/components/ui/Button"
import { PageHeader } from "@/components/ui/PageHeader"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"
import { FileDown } from "lucide-react"

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

const block = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function AboutView() {
  const reduceMotion = useReducedMotion()
  const fadeVariants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : fade
  const blockVariants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : block

  return (
    <div className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <PageHeader
        eyebrow="Профиль"
        title="Главная"
        className="mb-8 sm:mb-10"
      />

      <motion.div
        custom={0}
        initial="hidden"
        animate="show"
        variants={fadeVariants}
        className="mb-14 grid gap-10 sm:mb-16 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[300px_1fr]"
      >
        <div className="mx-auto flex w-full max-w-sm flex-col gap-5 lg:mx-0 lg:max-w-none">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-3xl bg-muted/20 shadow-glow-sm ring-2 ring-white/8 lg:mx-0">
            <Image
              src={siteConfig.portraitUrl}
              alt={siteConfig.fullName}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 300px"
              className="object-cover object-[center_12%]"
            />
          </div>
          <GlassCard interactive={false} className="border-white/8 p-4 sm:p-5">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Личные данные
            </p>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-x-3">
                <dt className="text-muted-foreground">ФИО</dt>
                <dd className="min-w-0 font-medium leading-snug text-foreground">{siteConfig.fullName}</dd>
              </div>
              <div className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-x-3">
                <dt className="text-muted-foreground">Дата рождения</dt>
                <dd className="tabular-nums text-foreground/95">{siteConfig.birthDate}</dd>
              </div>
              <div className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-x-3">
                <dt className="text-muted-foreground">Город</dt>
                <dd className="text-foreground/95">{siteConfig.city}</dd>
              </div>
            </dl>
          </GlassCard>
        </div>

        <div className="max-w-3xl space-y-4 lg:pt-1">
          {aboutIntro.map((p, i) => (
            <p key={i} className="muted-text text-pretty text-base sm:text-lg">
              {p}
            </p>
          ))}
        </div>
      </motion.div>

      <div className="flex flex-col gap-14 sm:gap-16 lg:gap-20">
        {/* Трудовая деятельность (СФР) */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={blockVariants}
        >
          <h2 className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/90">
            Карьера
          </h2>
          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Где работала
          </h3>
          <p className="muted-text mt-2 max-w-3xl text-sm sm:text-base">{aboutEmploymentHistory.intro}</p>

          <GlassCard interactive={false} className="mt-8 border-white/8 p-5 sm:p-6">
            <ul className="space-y-6">
              {aboutEmploymentHistory.entries.map((job) => (
                <li
                  key={job.organization}
                  className="border-b border-white/6 pb-6 last:border-b-0 last:pb-0"
                >
                  <p className="font-medium leading-snug text-foreground">{job.organization}</p>
                  <p className="muted-text mt-1.5 text-sm">{job.role}</p>
                  <p className="mt-2 font-mono text-[11px] tabular-nums text-primary/90 sm:text-xs">
                    {job.period}
                  </p>
                  {job.note ? (
                    <p className="muted-text mt-2 text-xs leading-relaxed sm:text-sm">{job.note}</p>
                  ) : null}
                </li>
              ))}
            </ul>
            <a
              href={aboutEmploymentHistory.pdfUrl}
              download
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "mt-6 w-full justify-center gap-2 border-white/12 bg-surface/30 sm:w-auto"
              )}
            >
              <FileDown className="size-3.5 shrink-0" aria-hidden />
              {aboutEmploymentHistory.downloadLabel}
            </a>
          </GlassCard>
        </motion.section>

        {/* Сильные стороны */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={blockVariants}
        >
          <h2 className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/90">
            Компетенции
          </h2>
          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Мои сильные стороны
          </h3>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-5">
            {aboutStrengths.map((s) => {
              const Icon = s.icon
              return (
                <li key={s.title}>
                  <GlassCard className="h-full p-4 sm:p-5">
                    <div className="flex gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/8 bg-surface/80 text-primary">
                        <Icon className="size-4" aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold leading-snug text-foreground sm:text-base">
                          {s.title}
                        </p>
                        <p className="muted-text mt-2 text-sm leading-relaxed">{s.text}</p>
                      </div>
                    </div>
                  </GlassCard>
                </li>
              )
            })}
          </ul>
        </motion.section>
      </div>
    </div>
  )
}
