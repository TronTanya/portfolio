"use client"

import { useMemo, useState } from "react"

import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard"
import { ProjectsFilterGlassBackdrop } from "@/components/projects/ProjectsGlassDecorFigure"
import { ProjectCard } from "@/components/projects/ProjectCard"
import type { ProjectCategory } from "@/data/projects"
import { projectFilterTabs, projects } from "@/data/projects"
import { isGlass3DEnabled } from "@/lib/glassVisualPolicy"
import { cn } from "@/lib/utils"

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
      <div
        className="relative mb-8 flex flex-wrap gap-2 sm:mb-10"
        role="tablist"
        aria-label="Фильтр по категориям"
      >
        {isGlass3DEnabled() ? <ProjectsFilterGlassBackdrop className="z-0" /> : null}
        <div className="relative z-10 flex flex-wrap gap-2">
          {projectFilterTabs.map((tab) => {
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
      </div>

      <div className="flex flex-col gap-10 sm:gap-12">
        {featured ? (
          <div>
            <FeaturedProjectCard project={featured} />
          </div>
        ) : null}

        {rest.length > 0 ? (
          <ul className="grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
            {rest.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
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
