import { courseCategoryLabels, learningRoadmapPhases } from "@/data/courses"
import { GlassCard } from "@/components/ui/GlassCard"
import { TechBadge } from "@/components/ui/TechBadge"

export function LearningRoadmap() {
  return (
    <section className="mt-14 sm:mt-16">
      <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/90">
        Learning roadmap
      </h2>
      <p className="muted-text mt-2 max-w-2xl text-sm sm:text-base">
        Логика трека: от данных и кода — к сервисам, AI и применению в обучении. Курсы ниже можно
        сопоставить с фазами и закрывать пробелы целенаправленно.
      </p>

      <ol className="relative mt-8 max-w-4xl border-l border-white/[0.08] pl-6 sm:pl-8">
        {learningRoadmapPhases.map((phase, index) => (
          <li key={phase.id} className="relative pb-10 last:pb-0">
            <span
              className="absolute -left-6 top-1.5 flex size-3 -translate-x-[calc(50%-0.5px)] rounded-full border border-primary/35 bg-background shadow-[0_0_12px_-2px_color-mix(in_oklch,var(--primary)_35%,transparent)] sm:-left-8 sm:size-3.5"
              aria-hidden
            />
            <GlassCard interactive={false} className="p-5 sm:p-6">
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
