import type { CompetitionEntry } from "@/data/competitions"
import Image from "next/image"
import { Award, FileDown } from "lucide-react"

import { GlassCard } from "@/components/ui/GlassCard"
import { buttonVariants } from "@/components/ui/Button"
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

function CompetitionCardBody({ entry }: { entry: CompetitionEntry }) {
  const tone = entry.resultTone ?? "muted"

  return (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="min-w-0 flex-1 space-y-2">
          <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/4 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {entry.year}
          </span>
          <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            {entry.title}
          </h2>
        </div>
        <div className="flex shrink-0 sm:max-w-[min(100%,14rem)] sm:justify-end lg:max-w-[min(100%,17rem)]">
          <span
            className={cn(
              "inline-flex rounded-full border px-2.5 py-1.5 text-center font-mono text-[10px] font-semibold uppercase leading-snug tracking-wide sm:text-[11px]",
              resultBadge[tone]
            )}
          >
            {entry.result}
          </span>
        </div>
      </div>

      {(entry.track || entry.project || entry.role) && (
        <div className="mt-4 space-y-2 rounded-xl border border-white/[0.07] bg-linear-to-br from-white/4 to-transparent p-3 shadow-[inset_0_1px_0_0_oklch(1_0_0_/0.06)] sm:p-4">
          {entry.track ? (
            <p className="text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
              <span className="font-medium text-foreground/90">Трек: </span>
              {entry.track}
            </p>
          ) : null}
          {entry.project ? (
            <p className="text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
              <span className="font-medium text-foreground/90">Проект: </span>
              {entry.project}
            </p>
          ) : null}
          {entry.role ? (
            <p className="text-[13px] leading-relaxed text-muted-foreground sm:text-sm">
              <span className="font-medium text-foreground/90">Роль: </span>
              {entry.role}
            </p>
          ) : null}
        </div>
      )}

      {entry.note && !entry.learnings?.length ? (
        <p className="muted-text mt-4 text-sm">{entry.note}</p>
      ) : null}

      {entry.skills && entry.skills.length > 0 ? (
        <div className="mt-4">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Навыки
          </p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
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
        <div className="mt-5 rounded-xl border border-primary/15 bg-primary/6 p-3 sm:p-4">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-primary/95">
            Чему научилась
          </p>
          <ul className="mt-2 space-y-2">
            {entry.learnings.map((item) => (
              <li key={item} className="flex gap-2.5 text-[13px] leading-relaxed text-foreground/95 sm:text-sm">
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/80 shadow-[0_0_8px_-1px_color-mix(in_oklch,var(--primary)_60%,transparent)]"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {entry.note && entry.learnings?.length ? (
        <p className="muted-text mt-5 border-t border-white/6 pt-5 text-sm">{entry.note}</p>
      ) : null}
    </>
  )
}

export function CompetitionCard({ entry }: { entry: CompetitionEntry }) {
  const scan = entry.diplomaScan

  if (!scan) {
    return (
      <GlassCard
        interactive={!entry.placeholder}
        className={cn(
          "p-5 sm:p-6",
          entry.placeholder && "border-dashed border-white/12 opacity-95"
        )}
      >
        <CompetitionCardBody entry={entry} />
      </GlassCard>
    )
  }

  const downloadLabel = scan.downloadLabel ?? "Скачать PDF"

  return (
    <GlassCard
      interactive={false}
      className={cn(
        "relative mx-auto max-w-5xl overflow-hidden border-white/12 p-5 sm:p-6 lg:p-7",
        "shadow-[0_20px_64px_-36px_oklch(0_0_0_/0.7)] ring-1 ring-white/[0.07]",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_85%_55%_at_50%_-30%,color-mix(in_oklch,var(--primary)_14%,transparent),transparent)]",
        entry.placeholder && "border-dashed border-white/12 opacity-95"
      )}
    >
      <div className="relative flex flex-col gap-7 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch lg:gap-8 xl:gap-10">
        <div className="min-w-0">
          <CompetitionCardBody entry={entry} />
        </div>

        <div className="flex h-full min-h-0 min-w-0 flex-col gap-3 lg:border-l lg:border-white/9 lg:pl-7 xl:pl-8">
          <div className="flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <Award className="size-3 text-primary/80" aria-hidden />
            <span>Диплом</span>
          </div>

          <a
            href={scan.pdfUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "group relative block min-h-[min(34vh,260px)] flex-1 overflow-hidden rounded-2xl sm:min-h-[min(38vh,300px)] lg:min-h-[min(36vh,280px)]",
              "border border-white/12 bg-linear-to-b from-muted/30 to-muted/5",
              "shadow-[inset_0_1px_0_0_oklch(1_0_0_/0.09),0_18px_44px_-24px_oklch(0_0_0_/0.6)]",
              "ring-1 ring-white/8 transition-[transform,box-shadow] duration-300",
              "hover:-translate-y-0.5 hover:shadow-[0_28px_64px_-24px_oklch(0_0_0_/0.55)] hover:ring-primary/25"
            )}
            aria-label={`Открыть PDF: ${downloadLabel}`}
          >
            <Image
              src={scan.imageUrl}
              alt={scan.imageAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 46vw, 44vw"
              unoptimized={scan.imageUrl.endsWith(".png")}
            />
            <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_50%_0%,color-mix(in_oklch,var(--primary)_08%,transparent),transparent_55%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-linear-to-t from-background via-background/75 to-transparent px-3 pb-3 pt-10">
              <p className="text-center text-[11px] font-medium text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Открыть PDF
              </p>
            </div>
          </a>

          <a
            href={scan.pdfUrl}
            download
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "w-full justify-center gap-2 border-primary/25 bg-primary/6 text-foreground hover:border-primary/40 hover:bg-primary/10"
            )}
          >
            <FileDown className="size-3.5 shrink-0" aria-hidden />
            {downloadLabel}
          </a>
        </div>
      </div>
    </GlassCard>
  )
}
