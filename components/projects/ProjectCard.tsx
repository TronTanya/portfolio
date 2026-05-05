import { ArrowUpRight, FolderGit2 } from "lucide-react"

import type { Project } from "@/data/projects"
import { GlassCard } from "@/components/ui/GlassCard"
import { GradientButton } from "@/components/ui/GradientButton"
import { TechBadge } from "@/components/ui/TechBadge"
import { buttonVariants } from "@/components/ui/Button"
import { projectCategoryLabels } from "@/data/projects"
import { cn } from "@/lib/utils"

import { ProjectField } from "./project-fields"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article>
      <GlassCard className="flex h-full flex-col p-5 sm:p-6">
        <div className="flex flex-wrap gap-2">
          {project.categories.map((c) => (
            <TechBadge key={c} variant="outline" className="normal-case tracking-normal">
              {projectCategoryLabels[c]}
            </TechBadge>
          ))}
        </div>

        <h2 className="mt-4 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          {project.title}
        </h2>
        <p className="mt-1.5 text-sm text-muted-foreground">{project.tagline}</p>

        <div className="mt-5 flex flex-1 flex-col gap-4">
          <ProjectField label="Проблема">{project.problem}</ProjectField>
          <ProjectField label="Решение">{project.solution}</ProjectField>
          <ProjectField label="Моя роль">{project.role}</ProjectField>

          <div>
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Технологии
            </p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <li key={t}>
                  <TechBadge variant="subtle" className="normal-case tracking-normal text-[11px]">
                    {t}
                  </TechBadge>
                </li>
              ))}
            </ul>
          </div>

          <ProjectField label="Результат" className="mt-auto">
            {project.result}
          </ProjectField>
        </div>

        {project.githubUrl || project.detailsUrl ? (
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "default" }),
                  "inline-flex w-full justify-center gap-2 sm:w-auto"
                )}
              >
                <FolderGit2 className="size-4" aria-hidden />
                GitHub
              </a>
            ) : null}
            {project.detailsUrl ? (
              <GradientButton href={project.detailsUrl} className="w-full sm:w-auto" innerClassName="gap-2">
                Подробнее
                <ArrowUpRight className="size-4" aria-hidden />
              </GradientButton>
            ) : null}
          </div>
        ) : null}
      </GlassCard>
    </article>
  )
}
