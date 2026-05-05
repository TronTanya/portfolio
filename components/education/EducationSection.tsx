import type { EducationEntry } from "@/data/education"

import { EducationCard } from "./EducationCard"

type EducationSectionProps = {
  title: string
  subtitle?: string
  entries: EducationEntry[]
}

export function EducationSection({ title, subtitle, entries }: EducationSectionProps) {
  return (
    <section className="scroll-mt-8">
      <div className="border-b border-white/[0.06] pb-4">
        <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">{title}</h2>
        {subtitle ? (
          <p className="muted-text mt-2 max-w-3xl text-sm sm:text-base">{subtitle}</p>
        ) : null}
      </div>

      <ol className="relative mt-6 max-w-4xl border-l border-white/[0.08] pl-6 sm:mt-8 sm:pl-8">
        {entries.map((entry, index) => (
          <li key={entry.id} className="relative pb-10 last:pb-0">
            <span
              className="absolute -left-6 top-3 flex size-2.5 -translate-x-[calc(50%-0.5px)] rounded-full border border-foreground/25 bg-background sm:-left-8 sm:top-3.5 sm:size-3"
              aria-hidden
            />
            <span className="sr-only">
              Запись {index + 1} из {entries.length}
            </span>
            <EducationCard entry={entry} />
          </li>
        ))}
      </ol>
    </section>
  )
}
