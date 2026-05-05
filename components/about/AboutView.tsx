"use client"

import { motion } from "framer-motion"
import Image from "next/image"

import { useReducedMotion } from "@/hooks/useReducedMotion"
import {
  aboutIntro,
  aboutInterests,
  aboutPathSteps,
  aboutStrengths,
  aboutWorkSteps,
} from "@/lib/about-content"
import { GlassCard } from "@/components/ui/GlassCard"
import { PageHeader } from "@/components/ui/PageHeader"
import { TechBadge } from "@/components/ui/TechBadge"
import { siteConfig } from "@/lib/site"

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
        title="Обо мне"
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
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-3xl bg-muted/20 shadow-glow-sm ring-2 ring-white/[0.08] lg:mx-0">
            <Image
              src={siteConfig.portraitUrl}
              alt={siteConfig.fullName}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 300px"
              className="object-cover object-[center_12%]"
            />
          </div>
          <GlassCard interactive={false} className="border-white/[0.08] p-4 sm:p-5">
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
        {/* 1. Мой путь */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={blockVariants}
        >
          <h2 className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/90">
            Опыт
          </h2>
          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Мой путь
          </h3>
          <p className="muted-text mt-2 max-w-2xl text-sm sm:text-base">
            От учебы и преподавания — к продуктовым задачам в AI и данных.
          </p>

          <ol className="relative mt-8 max-w-3xl border-l border-white/[0.08] pl-6 sm:pl-8">
            {aboutPathSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <li key={step.title} className="relative pb-10 pl-0 last:pb-0">
                  <span
                    className="absolute -left-6 top-1 flex size-3 -translate-x-[calc(50%-0.5px)] items-center justify-center rounded-full border border-primary/30 bg-background shadow-[0_0_12px_-2px_color-mix(in_oklch,var(--primary)_35%,transparent)] sm:-left-8 sm:size-3.5"
                    aria-hidden
                  />
                  <GlassCard interactive={false} className="p-4 sm:p-5">
                    <div className="flex gap-3 sm:gap-4">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-primary/[0.08] text-primary sm:size-10">
                        <Icon className="size-4 sm:size-[18px]" aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                          Этап {index + 1}
                        </p>
                        <p className="mt-1 text-base font-semibold text-foreground">{step.title}</p>
                        <p className="muted-text mt-1.5 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </li>
              )
            })}
          </ol>
        </motion.section>

        {/* 2. Сильные стороны */}
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
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-surface/80 text-primary">
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

        {/* 3. Как я работаю */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={blockVariants}
        >
          <h2 className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/90">
            Процесс
          </h2>
          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Как я работаю
          </h3>
          <p className="muted-text mt-2 max-w-2xl text-sm sm:text-base">
            Линейный каркас: на практике шаги часто пересекаются и уточняются по мере поставки.
          </p>

          <ol className="relative mt-8 max-w-3xl border-l border-white/[0.08] pl-6 sm:pl-8">
            {aboutWorkSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <li key={step.title} className="relative pb-8 last:pb-0">
                  <span
                    className="absolute -left-6 top-1 flex size-3 -translate-x-[calc(50%-0.5px)] items-center justify-center rounded-full border border-accent-2/35 bg-background shadow-[0_0_10px_-2px_color-mix(in_oklch,var(--accent-2)_30%,transparent)] sm:-left-8 sm:size-3.5"
                    aria-hidden
                  />
                  <GlassCard interactive={false} className="p-4 sm:p-5">
                    <div className="flex gap-3 sm:gap-4">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-accent-2/10 text-accent-2 sm:size-10">
                        <Icon className="size-4 sm:size-[18px]" aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                          Шаг {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-1 text-base font-semibold text-foreground">{step.title}</p>
                        <p className="muted-text mt-1.5 text-sm leading-relaxed">{step.text}</p>
                      </div>
                    </div>
                  </GlassCard>
                </li>
              )
            })}
          </ol>
        </motion.section>

        {/* 4. Интересы */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={blockVariants}
        >
          <h2 className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/90">
            Фокус
          </h2>
          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Интересные мне направления
          </h3>
          <p className="muted-text mt-2 max-w-2xl text-sm sm:text-base">
            Не исчерпывающий список — скорее векторы, в которых хочу углубляться дальше.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {aboutInterests.map((tag) => (
              <li key={tag}>
                <TechBadge variant="subtle" className="normal-case tracking-normal">
                  {tag}
                </TechBadge>
              </li>
            ))}
          </ul>
        </motion.section>
      </div>
    </div>
  )
}
