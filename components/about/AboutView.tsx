"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

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
import { FileDown, FolderOpen, Mail } from "lucide-react"

const highlightStats = [
  { label: "Опыт в IT-образовании", value: "7+ лет" },
  { label: "Выпускники «Код будущего»", value: "107" },
  { label: "Результат хакатонов", value: "топ-10 РФ" },
] as const

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

const card = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.04 * i,
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

const heroContainer = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function AboutView() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const portraitY = useTransform(scrollY, [0, 700], [0, -10])
  const portraitRotate = useTransform(scrollY, [0, 700], [0, -0.8])
  const fadeVariants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : fade
  const blockVariants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : block
  const cardVariants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : card
  const heroVariants = reduceMotion
    ? { hidden: { opacity: 1, y: 0, scale: 1 }, show: { opacity: 1, y: 0, scale: 1 } }
    : heroContainer

  return (
    <div className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <PageHeader
        eyebrow="Главная"
        title={siteConfig.fullName}
        className="mb-8 sm:mb-10"
      />

      <motion.div
        custom={0}
        initial="hidden"
        animate="show"
        variants={fadeVariants}
        className="mb-16 grid gap-10 sm:mb-20 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[300px_1fr]"
      >
        <div className="mx-auto flex w-full max-w-sm flex-col gap-5 lg:mx-0 lg:max-w-none">
          <motion.div
            style={reduceMotion ? undefined : { y: portraitY, rotate: portraitRotate }}
            className="relative mx-auto aspect-4/5 w-full max-w-[280px] overflow-hidden rounded-3xl bg-muted/20 shadow-glow-sm ring-2 ring-white/8 lg:mx-0"
          >
            <Image
              src={siteConfig.portraitUrl}
              alt={siteConfig.fullName}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 300px"
              className="object-cover object-[center_12%]"
            />
          </motion.div>
          <GlassCard interactive={false} className="border-white/10 bg-surface/35 p-4 sm:p-5">
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

        <div className="max-w-3xl space-y-5 lg:pt-1">
          <motion.div
            initial="hidden"
            animate="show"
            variants={heroVariants}
            className="hero-card-shimmer relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-surface/72 via-surface/40 to-surface/25 p-6 shadow-[inset_0_1px_0_0_oklch(1_0_0_/0.06)] sm:p-8"
          >
            <div
              className="pointer-events-none absolute -right-14 -top-16 size-56 rounded-full bg-primary/12 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-16 size-64 rounded-full bg-accent-2/12 blur-3xl"
              aria-hidden
            />
            <div className="relative space-y-4">
              {aboutIntro.map((p, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="show"
                  variants={fadeVariants}
                  className="text-pretty text-base leading-relaxed text-foreground/88 sm:text-lg"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </motion.div>
          <ul className="grid gap-3 sm:grid-cols-3">
            {highlightStats.map((item, i) => (
              <motion.li
                key={item.label}
                custom={i}
                initial="hidden"
                animate="show"
                variants={cardVariants}
                whileHover={reduceMotion ? undefined : { y: -2, scale: 1.01 }}
                className="rounded-2xl border border-white/10 bg-surface/35 px-4 py-3 shadow-[inset_0_1px_0_0_oklch(1_0_0_/0.05)]"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {item.label}
                </p>
                <p className="floating-stat mt-1 text-lg font-semibold tracking-tight text-foreground">{item.value}</p>
              </motion.li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2.5 pt-1">
            <Link
              href="/projects"
              className={cn(buttonVariants({ size: "sm" }), "gap-2")}
            >
              <FolderOpen className="size-4" aria-hidden />
              Проекты
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "gap-2 border-white/12 bg-surface/30"
              )}
            >
              <Mail className="size-4" aria-hidden />
              Контакты
            </Link>
            <a
              href={siteConfig.resumeUrl}
              download={siteConfig.resumeDownloadFilename}
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "gap-2 border-white/12 bg-surface/30"
              )}
            >
              <FileDown className="size-4" aria-hidden />
              Резюме PDF
            </a>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col gap-14 sm:gap-16 lg:gap-20">
        {/* Трудовая деятельность (СФР) */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={blockVariants}
          className="relative"
        >
          <div
            className="absolute -left-4 top-0 hidden h-24 w-px bg-linear-to-b from-primary/55 via-primary/15 to-transparent sm:block lg:-left-6"
            aria-hidden
          />
          <h2 className="section-eyebrow mb-0">
            Карьера
          </h2>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:mt-3 sm:text-2xl">
            Где работала
          </h3>
          <p className="muted-text mt-4 max-w-3xl text-sm sm:text-base">{aboutEmploymentHistory.intro}</p>

          <GlassCard interactive={false} className="mt-8 border-white/10 bg-surface/35 p-5 sm:p-6">
            <ul className="space-y-6">
              {aboutEmploymentHistory.entries.map((job, i) => (
                <motion.li
                  key={job.organization}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={cardVariants}
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
                </motion.li>
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
          className="relative"
        >
          <div
            className="absolute -left-4 top-0 hidden h-24 w-px bg-linear-to-b from-primary/55 via-primary/15 to-transparent sm:block lg:-left-6"
            aria-hidden
          />
          <h2 className="section-eyebrow mb-0">
            Компетенции
          </h2>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:mt-3 sm:text-2xl">
            Мои сильные стороны
          </h3>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-5">
            {aboutStrengths.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.li
                  key={s.title}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={cardVariants}
                >
                  <GlassCard className="h-full border-white/10 bg-surface/32 p-4 sm:p-5">
                    <div className="flex gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-surface/75 text-primary">
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
                </motion.li>
              )
            })}
          </ul>
        </motion.section>
      </div>
    </div>
  )
}
