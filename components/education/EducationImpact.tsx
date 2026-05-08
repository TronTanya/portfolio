import { educationImpactItems, educationImpactTitle } from "@/data/education"
import { GlassCard } from "@/components/ui/GlassCard"

export function EducationImpact() {
  return (
    <section className="relative mt-16 scroll-mt-8 sm:mt-20">
      <div
        className="absolute -left-4 top-0 hidden h-24 w-px bg-linear-to-b from-primary/55 via-primary/15 to-transparent sm:block lg:-left-6"
        aria-hidden
      />
      <div className="border-b border-white/8 pb-4">
        <p className="section-eyebrow mb-0">Применение</p>
        <h2 className="mt-2 text-lg font-semibold tracking-tight text-foreground sm:mt-3 sm:text-xl">
          {educationImpactTitle}
        </h2>
        <p className="muted-text mt-3 max-w-3xl text-sm sm:text-base">
          Связка академической подготовки с текущей работой в IT, данными и образовательными проектами.
        </p>
      </div>

      <GlassCard interactive={false} className="mt-6 border-white/10 bg-surface/32 p-5 sm:mt-8 sm:p-8">
        <ol className="grid gap-4 sm:grid-cols-2 lg:gap-5">
          {educationImpactItems.map((item, i) => (
            <li
              key={item}
              className="flex gap-3 border-l-2 border-foreground/15 pl-4 text-sm leading-relaxed text-foreground/95"
            >
              <span className="font-mono text-xs font-semibold tabular-nums text-muted-foreground">
                {String(i + 1).padStart(2, "0")}.
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </GlassCard>
    </section>
  )
}
