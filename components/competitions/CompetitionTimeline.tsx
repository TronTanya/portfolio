import type { CompetitionEntry } from "@/data/competitions"

import { CompetitionCard } from "./CompetitionCard"

export function CompetitionTimeline({ items }: { items: CompetitionEntry[] }) {
  return (
    <ol className="relative w-full max-w-6xl border-l border-white/8 pl-6 sm:pl-8">
      {items.map((entry, index) => (
        <li key={entry.id} className="relative pb-10 last:pb-0">
          <span
            className="absolute -left-6 top-2 flex size-3 -translate-x-[calc(50%-0.5px)] rounded-full border border-primary/35 bg-background shadow-[0_0_12px_-2px_color-mix(in_oklch,var(--primary)_35%,transparent)] sm:-left-8 sm:size-3.5"
            aria-hidden
          />
          <span className="sr-only">
            Событие {index + 1} из {items.length}
          </span>
          <CompetitionCard entry={entry} />
        </li>
      ))}
    </ol>
  )
}
