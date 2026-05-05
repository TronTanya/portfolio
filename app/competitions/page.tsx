import type { Metadata } from "next"

import { CompetitionTimeline } from "@/components/competitions/CompetitionTimeline"
import {
  competitions,
  competitionsIntro,
  hackathonSkills,
  whatCompetitionsGive,
} from "@/data/competitions"
import { GlassCard } from "@/components/ui/GlassCard"
import { Section } from "@/components/ui/Section"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Конкурсы и хакатоны",
  description:
    "IT-конкурсы и хакатоны: финалы, призовые места, MVP под дедлайном и защита перед жюри.",
  path: "/competitions",
})

export default function CompetitionsPage() {
  return (
    <Section eyebrow="Соревнования" title="Конкурсы и хакатоны" description={competitionsIntro}>
      <div className="mt-10 sm:mt-12">
        <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/90">
          Хронология
        </h2>
        <p className="muted-text mt-2 max-w-2xl text-sm">
          От ключевых всероссийских кейсов к региональным результатам и планам на следующие форматы.
        </p>
        <div className="mt-8">
          <CompetitionTimeline items={competitions} />
        </div>
      </div>

      <div className="mt-14 grid gap-6 sm:mt-16 lg:grid-cols-2 lg:gap-8">
        <GlassCard interactive={false} className="p-5 sm:p-6">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">Что дают конкурсы</h2>
          <ul className="mt-4 space-y-3">
            {whatCompetitionsGive.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/70" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard interactive={false} className="p-5 sm:p-6">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            Навыки через хакатоны
          </h2>
          <ul className="mt-4 space-y-3">
            {hackathonSkills.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-accent-2/80" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </Section>
  )
}
