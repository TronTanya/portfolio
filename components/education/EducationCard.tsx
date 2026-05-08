import { FileDown } from "lucide-react"
import Image from "next/image"

import type { EducationEntry } from "@/data/education"
import { credentialTypeLabels } from "@/data/education"
import { GlassCard } from "@/components/ui/GlassCard"
import { TechBadge } from "@/components/ui/TechBadge"
import { buttonVariants } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export function EducationCard({ entry }: { entry: EducationEntry }) {
  return (
    <GlassCard interactive={false} className="border-white/7 p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/6 pb-3">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/80">
          {credentialTypeLabels[entry.type]}
        </span>
        <span className="font-mono text-[11px] text-muted-foreground">{entry.years}</span>
      </div>

      <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground sm:text-lg">
        {entry.institution}
      </h3>
      <p className="mt-1 text-sm font-medium text-foreground/90">{entry.degree}</p>
      <p className="mt-0.5 text-sm text-muted-foreground">{entry.field}</p>

      {entry.diplomaPdfUrl ? (
        <div
          className={cn(
            "mt-4 flex flex-col gap-4",
            entry.diplomaImageUrl && "sm:flex-row sm:items-start sm:gap-5"
          )}
        >
          {entry.diplomaImageUrl ? (
            <a
              href={entry.diplomaPdfUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "group relative shrink-0 overflow-hidden rounded-xl border border-white/10 bg-muted/15 shadow-[inset_0_1px_0_0_oklch(1_0_0_/0.06)]",
                "ring-1 ring-white/6 transition-[box-shadow,opacity] hover:opacity-[0.96] hover:ring-primary/25",
                "sm:max-w-[min(100%,17.5rem)]"
              )}
              aria-label={`Открыть PDF: ${entry.diplomaLabel ?? "диплом"}`}
            >
              <Image
                src={entry.diplomaImageUrl}
                alt={entry.diplomaImageAlt ?? "Превью диплома"}
                width={560}
                height={396}
                sizes="(max-width: 640px) 100vw, 280px"
                className="h-auto w-full object-cover object-top"
                unoptimized={entry.diplomaImageUrl.endsWith(".png")}
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-background/85 to-transparent px-3 py-2 text-center text-[10px] font-medium text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 sm:text-[11px]">
                Открыть PDF
              </span>
            </a>
          ) : null}
          <div className="min-w-0 flex-1 space-y-2">
            <a
              href={entry.diplomaPdfUrl}
              download
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "inline-flex w-full justify-center gap-2 border-white/12 sm:w-auto"
              )}
            >
              <FileDown className="size-3.5 shrink-0" aria-hidden />
              {entry.diplomaLabel ?? "Диплом (PDF)"}
            </a>
            {entry.diplomaRequisites ? (
              <p className="font-mono text-[11px] leading-snug text-muted-foreground">{entry.diplomaRequisites}</p>
            ) : null}
          </div>
        </div>
      ) : null}

      <p className="muted-text mt-4 border-l-2 border-primary/25 pl-3 text-sm leading-relaxed">
        {entry.description}
      </p>

      <div className="mt-5">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Ключевые темы
        </p>
        <ul className="mt-2 space-y-1.5 text-sm text-foreground/90">
          {entry.keySubjects.map((s) => (
            <li key={s} className="flex gap-2">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/40" aria-hidden />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 border-t border-white/6 pt-4">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
          Навыки
        </p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {entry.skills.map((s) => (
            <li key={s}>
              <TechBadge
                variant="outline"
                className={cn("border-white/12 normal-case tracking-normal text-muted-foreground")}
              >
                {s}
              </TechBadge>
            </li>
          ))}
        </ul>
      </div>
    </GlassCard>
  )
}
