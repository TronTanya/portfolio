"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useMemo, useState } from "react"

import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard"
import { ProjectsFilterGlassBackdrop } from "@/components/projects/ProjectsGlassDecorFigure"
import { ProjectCard } from "@/components/projects/ProjectCard"
import type { ProjectCategory } from "@/data/projects"
import { projectFilterTabs, projects } from "@/data/projects"
import { isGlass3DEnabled } from "@/lib/glassVisualPolicy"
import { cn } from "@/lib/utils"

const listItemMotion = {
  initial: { opacity: 0, y: 14, scale: 0.985 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.035,
      duration: 0.28,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.985,
    transition: { duration: 0.18, ease: "easeOut" as const },
  },
}

export function ProjectsView() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all")

  const { featured, rest } = useMemo(() => {
    const list = projects.filter(
      (p) => filter === "all" || p.categories.includes(filter)
    )
    const f = list.find((p) => p.featured)
    const others = list.filter((p) => p !== f)
    return { featured: f, rest: others }
  }, [filter])

  return (
    <div>
      <div className="relative mb-8 overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-surface/70 via-surface/40 to-surface/20 p-5 shadow-[inset_0_1px_0_0_oklch(1_0_0_/0.06)] sm:mb-10 sm:p-7">
        <div
          className="pointer-events-none absolute -right-14 -top-16 size-56 rounded-full bg-primary/12 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-10 size-52 rounded-full bg-accent-2/12 blur-3xl"
          aria-hidden
        />
        <div className="relative grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-surface/35 px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Проектов в портфолио
            </p>
            <p className="mt-1 text-xl font-semibold tracking-tight text-foreground">{projects.length}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-surface/35 px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Выбранный фокус
            </p>
            <p className="mt-1 text-xl font-semibold tracking-tight text-foreground">
              {filter === "all" ? "Все направления" : projectFilterTabs.find((t) => t.id === filter)?.label}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-surface/35 px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Показано сейчас
            </p>
            <p className="mt-1 text-xl font-semibold tracking-tight text-foreground">
              {featured ? rest.length + 1 : rest.length}
            </p>
          </div>
        </div>
      </div>

      <div
        className="relative mb-8 flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-surface/28 p-3 sm:mb-10"
        role="tablist"
        aria-label="Фильтр по категориям"
      >
        {isGlass3DEnabled() ? <ProjectsFilterGlassBackdrop className="z-0" /> : null}
        <div className="relative z-10 flex flex-wrap gap-2">
          {projectFilterTabs.map((tab) => {
            const active = filter === tab.id
            return (
              <motion.button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(tab.id)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 420, damping: 24, mass: 0.45 }}
                className={cn(
                  "relative overflow-hidden rounded-xl border px-3.5 py-2 text-sm font-medium transition-[color,background-color,border-color,box-shadow]",
                  active
                    ? "border-primary/40 bg-primary/15 text-primary shadow-[0_0_24px_-10px_color-mix(in_oklch,var(--primary)_45%,transparent)]"
                    : "border-white/8 bg-surface/30 text-muted-foreground hover:border-primary/25 hover:text-foreground"
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="projects-filter-pill"
                    className="absolute inset-0 z-0 bg-linear-to-r from-primary/16 via-primary/10 to-accent-2/12"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    aria-hidden
                  />
                ) : null}
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col gap-10 sm:gap-12">
        {featured ? (
          <div>
            <FeaturedProjectCard project={featured} />
          </div>
        ) : null}

        {rest.length > 0 ? (
          <motion.ul layout className="grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {rest.map((project, i) => (
                <motion.li
                  layout
                  key={project.id}
                  custom={i}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={listItemMotion}
                >
                  <ProjectCard project={project} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        ) : (
          !featured && (
            <p className="muted-text rounded-xl border border-dashed border-white/10 bg-surface/20 px-4 py-8 text-center text-sm">
              Нет проектов в этой категории. Выберите другой фильтр.
            </p>
          )
        )}
      </div>
    </div>
  )
}
