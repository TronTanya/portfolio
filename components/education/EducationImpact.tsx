import { educationImpactItems, educationImpactTitle } from "@/data/education"
import { GlassCard } from "@/components/ui/GlassCard"

export function EducationImpact() {
  return (
    <section className="mt-14 scroll-mt-8 sm:mt-16">
      <div className="border-b border-white/[0.06] pb-4">
        <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
          {educationImpactTitle}
        </h2>
        <p className="muted-text mt-2 max-w-3xl text-sm sm:text-base">
          Связка академической подготовки с текущей работой в IT, данными и образовательными проектами.
        </p>
      </div>

      <GlassCard interactive={false} className="mt-6 border-white/[0.07] p-5 sm:mt-8 sm:p-8">
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
