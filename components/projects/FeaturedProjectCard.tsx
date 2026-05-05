import { ArrowUpRight, FolderGit2, Sparkles } from "lucide-react"

import type { Project } from "@/data/projects"
import { GlassCard } from "@/components/ui/GlassCard"
import { GradientButton } from "@/components/ui/GradientButton"
import { TechBadge } from "@/components/ui/TechBadge"
import { buttonVariants } from "@/components/ui/Button"
import { projectCategoryLabels } from "@/data/projects"
import { isGlass3DEnabled } from "@/lib/glassVisualPolicy"
import { cn } from "@/lib/utils"

import { DriveeFeaturedGlassDecor } from "@/components/projects/ProjectsGlassDecorFigure"

import { ProjectField } from "./project-fields"

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article>
      <GlassCard className="overflow-hidden p-0 sm:p-0">
        <div className="relative overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-primary/[0.08] via-transparent to-accent-2/[0.06] px-5 py-5 sm:px-8 sm:py-6">
          {isGlass3DEnabled() && project.id === "drivee-analytics" ? (
            <div className="pointer-events-none absolute right-3 top-3 z-0 sm:right-5 sm:top-5">
              <DriveeFeaturedGlassDecor />
            </div>
          ) : null}
          <div className="relative z-10 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-primary/25 bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-primary">
              <Sparkles className="size-3" aria-hidden />
              Featured
            </span>
            {project.categories.map((c) => (
              <TechBadge key={c} variant="outline" className="normal-case tracking-normal">
                {projectCategoryLabels[c]}
              </TechBadge>
            ))}
          </div>
          <h2 className="relative z-10 mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {project.title}
          </h2>
          <p className="relative z-10 mt-2 max-w-3xl text-base text-muted-foreground sm:text-lg">{project.tagline}</p>
        </div>

        <div className="grid gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
          <div className="space-y-6">
            <ProjectField label="Проблема">{project.problem}</ProjectField>
            <ProjectField label="Решение">{project.solution}</ProjectField>
            <ProjectField label="Моя роль">{project.role}</ProjectField>
            <ProjectField label="Результат">{project.result}</ProjectField>
          </div>

          <div className="space-y-6">
            <div>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Технологии
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <li key={t}>
                    <TechBadge variant="subtle" className="normal-case tracking-normal">
                      {t}
                    </TechBadge>
                  </li>
                ))}
              </ul>
            </div>

            {project.functions && project.functions.length > 0 ? (
              <div>
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  Функции
                </p>
                <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {project.functions.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-surface/40 px-2.5 py-1.5 text-xs text-foreground/90"
                    >
                      <span className="size-1 shrink-0 rounded-full bg-primary/80" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "inline-flex w-full justify-center gap-2 border-white/12 bg-surface/40 sm:w-auto"
                  )}
                >
                  <FolderGit2 className="size-4" aria-hidden />
                  GitHub
                </a>
              ) : null}
              {project.detailsUrl ? (
                <GradientButton href={project.detailsUrl} innerClassName="gap-2">
                  Подробнее
                  <ArrowUpRight className="size-4" aria-hidden />
                </GradientButton>
              ) : null}
            </div>
          </div>
        </div>
      </GlassCard>
    </article>
  )
}
