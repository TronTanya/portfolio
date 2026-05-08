"use client"

import Image from "next/image"
import { FileDown } from "lucide-react"

import { GlassCard } from "@/components/ui/GlassCard"
import { buttonVariants } from "@/components/ui/Button"
import type { StudentShowcaseFact } from "@/data/studentAchievements"
import { cn } from "@/lib/utils"

export type DocumentShowcaseContent = {
  description: string
  pdfUrl: string
  imageUrl: string
  imageAlt: string
  downloadLabel: string
  facts: readonly StudentShowcaseFact[]
}

export function DocumentShowcase({ content: s }: { content: DocumentShowcaseContent }) {
  return (
    <GlassCard
      interactive={false}
      className="mt-3 border-white/7 p-6 shadow-[inset_0_1px_0_0_oklch(1_0_0_/0.04)] sm:p-8"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-0">
        <div className="flex shrink-0 flex-col gap-4 lg:w-[min(100%,17.5rem)] lg:pr-8">
          <a
            href={s.pdfUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-b from-muted/25 to-muted/10",
              "shadow-[0_20px_48px_-24px_oklch(0_0_0_/0.65),inset_0_1px_0_0_oklch(1_0_0_/0.08)]",
              "ring-1 ring-white/6 transition-[transform,box-shadow,opacity] hover:opacity-[0.97] hover:ring-primary/30"
            )}
            aria-label={`Открыть PDF: ${s.downloadLabel}`}
          >
            <Image
              src={s.imageUrl}
              alt={s.imageAlt}
              width={560}
              height={392}
              className="h-auto w-full object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 280px"
              unoptimized={s.imageUrl.endsWith(".png")}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-background via-background/70 to-transparent px-3 pb-3 pt-10">
              <p className="text-center text-[10px] font-medium text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 sm:text-[11px]">
                Открыть PDF
              </p>
            </div>
          </a>
          <a
            href={s.pdfUrl}
            download
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "w-full justify-center gap-2 border-white/12 bg-surface/30"
            )}
          >
            <FileDown className="size-3.5 shrink-0" aria-hidden />
            {s.downloadLabel}
          </a>
        </div>

        <div
          className={cn(
            "min-w-0 flex-1 space-y-5 lg:border-l lg:border-white/8 lg:pl-8 xl:pl-10",
            "rounded-2xl lg:rounded-none lg:bg-transparent xl:py-0"
          )}
        >
          <p className="muted-text text-sm leading-relaxed sm:text-base">{s.description}</p>

          <dl className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
            {s.facts.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 rounded-xl border border-white/8 bg-surface/30 px-3.5 py-3 shadow-[inset_0_1px_0_0_oklch(1_0_0_/0.05)]"
              >
                <dt className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {row.label}
                </dt>
                <dd className="text-[13px] leading-snug text-foreground/95 sm:text-sm">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </GlassCard>
  )
}
