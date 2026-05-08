"use client"

import { useMemo, useState } from "react"

import type { CourseCategory } from "@/data/courses"
import {
  courseFilterTabs,
  courses,
} from "@/data/courses"
import { cn } from "@/lib/utils"

import { CourseCard } from "./CourseCard"

export function CoursesView() {
  const [filter, setFilter] = useState<CourseCategory | "all">("all")

  const filtered = useMemo(
    () =>
      courses.filter((c) => filter === "all" || c.category === filter),
    [filter]
  )

  return (
    <div>
      <div
        className="mb-8 flex flex-wrap gap-2 sm:mb-10"
        role="tablist"
        aria-label="Фильтр по категориям курсов"
      >
        {courseFilterTabs.map((tab) => {
          const active = filter === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(tab.id)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors",
                active
                  ? "border-primary/40 bg-primary/15 text-primary shadow-glow-sm"
                  : "border-white/8 bg-surface/30 text-muted-foreground hover:border-primary/25 hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {filtered.length > 0 ? (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {filtered.map((course) => (
            <li key={course.id}>
              <CourseCard course={course} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="muted-text rounded-xl border border-dashed border-white/10 bg-surface/20 px-4 py-8 text-center text-sm">
          В этой категории пока нет записей — выберите другой фильтр или добавьте курс в{" "}
          <code className="rounded bg-muted/50 px-1 font-mono text-xs">data/courses.ts</code>.
        </p>
      )}
    </div>
  )
}
