import type { Course, CourseStatus } from "@/data/courses"
import { courseCategoryLabels } from "@/data/courses"
import { GlassCard } from "@/components/ui/GlassCard"
import { TechBadge } from "@/components/ui/TechBadge"
import { buttonVariants } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const statusLabel: Record<CourseStatus, string> = {
  completed: "Завершён",
  in_progress: "В процессе",
  planned: "Запланирован",
}

const statusStyles: Record<CourseStatus, string> = {
  completed: "border-accent-2/35 bg-accent-2/10 text-accent-2",
  in_progress: "border-primary/35 bg-primary/12 text-primary",
  planned: "border-white/12 bg-surface/60 text-muted-foreground",
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <article>
      <GlassCard className="flex h-full flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <TechBadge variant="outline" className="normal-case tracking-normal">
            {courseCategoryLabels[course.category]}
          </TechBadge>
          <span
            className={cn(
              "rounded-md border px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide",
              statusStyles[course.status]
            )}
          >
            {statusLabel[course.status]}
          </span>
        </div>

        <h2 className="mt-4 text-lg font-semibold tracking-tight text-foreground">{course.title}</h2>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
          {course.provider}
          <span className="text-muted-foreground/70"> · </span>
          <span className="font-mono text-[11px]">{course.year}</span>
        </p>

        <p className="muted-text mt-3 flex-1 text-sm leading-relaxed">{course.description}</p>

        <div className="mt-4">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Навыки
          </p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {course.skills.map((s) => (
              <li key={s}>
                <TechBadge variant="subtle" className="normal-case tracking-normal text-[11px]">
                  {s}
                </TechBadge>
              </li>
            ))}
          </ul>
        </div>

        {course.certificateUrl ? (
          <div className="mt-5 border-t border-white/6 pt-4">
            <a
              href={course.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "w-full justify-center sm:w-auto"
              )}
            >
              Открыть сертификат / credential
            </a>
          </div>
        ) : null}
      </GlassCard>
    </article>
  )
}
