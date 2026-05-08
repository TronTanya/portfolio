"use client"

import { AnimatePresence, motion } from "framer-motion"
import {
  Blocks,
  Bot,
  Braces,
  Brain,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  LayoutPanelTop,
  Server,
} from "lucide-react"
import { type ComponentType, useMemo, useState } from "react"

import type { CourseCategory } from "@/data/courses"
import {
  courseFilterTabs,
  courses,
} from "@/data/courses"
import { cn } from "@/lib/utils"

import { CourseCard } from "./CourseCard"

const listItemMotion = {
  initial: { opacity: 0, y: 12, scale: 0.985 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.03,
      duration: 0.26,
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

const tabIcons: Record<CourseCategory | "all", ComponentType<{ className?: string }>> = {
  all: Blocks,
  "data-science": Layers3,
  python: Code2,
  "machine-learning": Brain,
  "ai-llm": Bot,
  "sql-databases": Database,
  frontend: LayoutPanelTop,
  backend: Server,
  education: GraduationCap,
}

export function CoursesView() {
  const [filter, setFilter] = useState<CourseCategory | "all">("all")

  const filtered = useMemo(
    () =>
      courses.filter((c) => filter === "all" || c.category === filter),
    [filter]
  )

  return (
    <div>
      <div className="relative mb-8 overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-surface/70 via-surface/38 to-surface/20 p-5 shadow-[inset_0_1px_0_0_oklch(1_0_0_/0.06)] sm:mb-10 sm:p-7">
        <div
          className="pointer-events-none absolute -right-12 -top-16 size-56 rounded-full bg-primary/12 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-14 -left-12 size-52 rounded-full bg-accent-2/12 blur-3xl"
          aria-hidden
        />
        <div className="relative grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-surface/35 px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Курсов всего</p>
            <p className="mt-1 text-xl font-semibold tracking-tight text-foreground">{courses.length}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-surface/35 px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Выбранный трек
            </p>
            <p className="mt-1 text-xl font-semibold tracking-tight text-foreground">
              {filter === "all" ? "Все категории" : courseFilterTabs.find((t) => t.id === filter)?.label}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-surface/35 px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Показано</p>
            <p className="mt-1 text-xl font-semibold tracking-tight text-foreground">{filtered.length}</p>
          </div>
        </div>
      </div>

      <div
        className="mb-8 flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-surface/28 p-3 sm:mb-10"
        role="tablist"
        aria-label="Фильтр по категориям курсов"
      >
        {courseFilterTabs.map((tab) => {
          const active = filter === tab.id
          const Icon = tabIcons[tab.id]
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
                  layoutId="courses-filter-pill"
                  className="absolute inset-0 z-0 bg-linear-to-r from-primary/16 via-primary/10 to-accent-2/12"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  aria-hidden
                />
              ) : null}
              <span className="relative z-10 inline-flex items-center gap-1.5">
                <Icon className="size-3.5" aria-hidden />
                {tab.label}
              </span>
            </motion.button>
          )
        })}
      </div>

      {filtered.length > 0 ? (
        <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((course, i) => (
              <motion.li
                key={course.id}
                layout
                custom={i}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={listItemMotion}
              >
                <CourseCard course={course} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      ) : (
        <p className="muted-text rounded-xl border border-dashed border-white/10 bg-surface/20 px-4 py-8 text-center text-sm">
          В этой категории пока нет записей — выберите другой фильтр или добавьте курс в{" "}
          <code className="rounded bg-muted/50 px-1 font-mono text-xs">data/courses.ts</code>.
        </p>
      )}
    </div>
  )
}
