import type { Metadata } from "next"

import { CompetitionTimeline } from "@/components/competitions/CompetitionTimeline"
import { competitions, competitionsIntro } from "@/data/competitions"
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
        <p className="muted-text mt-2 max-w-4xl text-sm sm:text-base">
          Всероссийские и региональные форматы: кейс, защита и подтверждённый результат.
        </p>
        <div className="mt-8">
          <CompetitionTimeline items={competitions} />
        </div>
      </div>
    </Section>
  )
}
