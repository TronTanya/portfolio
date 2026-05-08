import { courseCategoryLabels, learningRoadmapPhases } from "@/data/courses"
import { GlassCard } from "@/components/ui/GlassCard"
import { TechBadge } from "@/components/ui/TechBadge"

export function LearningRoadmap() {
  return (
    <section className="relative mt-16 sm:mt-20">
      <div
        className="absolute -left-4 top-0 hidden h-24 w-px bg-linear-to-b from-primary/55 via-primary/15 to-transparent sm:block lg:-left-6"
        aria-hidden
      />
      <h2 className="section-eyebrow mb-0">
        Learning roadmap
      </h2>
      <p className="muted-text mt-4 max-w-2xl text-sm sm:text-base">
        Логика трека: от данных и кода — к сервисам, AI и применению в обучении. Курсы ниже можно
        сопоставить с фазами и закрывать пробелы целенаправленно.
      </p>

      <ol className="relative mt-8 max-w-4xl border-l border-white/8 pl-6 sm:pl-8">
        {learningRoadmapPhases.map((phase, index) => (
          <li key={phase.id} className="relative pb-10 last:pb-0">
            <span
              className="absolute -left-6 top-1.5 flex size-3 -translate-x-[calc(50%-0.5px)] rounded-full border border-primary/35 bg-background shadow-[0_0_12px_-2px_color-mix(in_oklch,var(--primary)_35%,transparent)] sm:-left-8 sm:size-3.5"
              aria-hidden
            />
            <GlassCard interactive={false} className="border-white/10 bg-surface/32 p-5 sm:p-6">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                Фаза {index + 1}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{phase.title}</h3>
              <p className="muted-text mt-2 text-sm leading-relaxed">{phase.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {phase.tiesTo.map((cat) => (
                  <li key={cat}>
                    <TechBadge variant="outline" className="normal-case tracking-normal">
                      {courseCategoryLabels[cat]}
                    </TechBadge>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </li>
        ))}
      </ol>
    </section>
  )
}
