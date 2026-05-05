import type { CompetitionEntry } from "@/data/competitions"
import { GlassCard } from "@/components/ui/GlassCard"
import { TechBadge } from "@/components/ui/TechBadge"
import { cn } from "@/lib/utils"

const resultBadge: Record<
  NonNullable<CompetitionEntry["resultTone"]>,
  string
> = {
  highlight: "border-primary/35 bg-primary/12 text-primary",
  success: "border-accent-2/35 bg-accent-2/10 text-accent-2",
  muted: "border-white/10 bg-surface/50 text-muted-foreground",
}

export function CompetitionCard({ entry }: { entry: CompetitionEntry }) {
  const tone = entry.resultTone ?? "muted"

  return (
    <GlassCard
      interactive={!entry.placeholder}
      className={cn(
        "p-5 sm:p-6",
        entry.placeholder && "border-dashed border-white/12 opacity-95"
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {entry.year}
          </p>
          <h2 className="mt-1 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            {entry.title}
          </h2>
        </div>
        <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
          <span
            className={cn(
              "rounded-md border px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide",
              resultBadge[tone]
            )}
          >
            {entry.result}
          </span>
        </div>
      </div>

      {entry.track ? (
        <p className="mt-3 text-sm text-muted-foreground">
          <span className="font-medium text-foreground/90">Трек: </span>
          {entry.track}
        </p>
      ) : null}

      {entry.project ? (
        <p className="mt-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground/90">Проект: </span>
          {entry.project}
        </p>
      ) : null}

      {entry.role ? (
        <p className="mt-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground/90">Роль: </span>
          {entry.role}
        </p>
      ) : null}

      {entry.note && !entry.learnings?.length ? (
        <p className="muted-text mt-3 text-sm">{entry.note}</p>
      ) : null}

      {entry.skills && entry.skills.length > 0 ? (
        <div className="mt-4">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
            Навыки
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {entry.skills.map((s) => (
              <li key={s}>
                <TechBadge variant="subtle" className="normal-case tracking-normal">
                  {s}
                </TechBadge>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {entry.learnings && entry.learnings.length > 0 ? (
        <div className="mt-5 border-t border-white/[0.06] pt-4">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-primary/90">
            Чему научилась
          </p>
          <ul className="mt-2 space-y-2">
            {entry.learnings.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-foreground/95">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {entry.note && entry.learnings?.length ? (
        <p className="muted-text mt-4 border-t border-white/[0.06] pt-4 text-sm">{entry.note}</p>
      ) : null}
    </GlassCard>
  )
}
