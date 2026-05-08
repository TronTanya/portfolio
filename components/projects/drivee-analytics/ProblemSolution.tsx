import { driveeCase } from "@/data/drivee-case-study"
import { GlassCard } from "@/components/ui/GlassCard"

export function ProblemSolution() {
  return (
    <div className="space-y-10">
      <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
        <GlassCard interactive={false} className="p-5 sm:p-6">
          <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/90">
            Проблема
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/95 sm:text-base">
            {driveeCase.problem}
          </p>
        </GlassCard>
        <GlassCard interactive={false} className="p-5 sm:p-6">
          <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/90">
            Решение
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/95 sm:text-base">
            {driveeCase.solution}
          </p>
        </GlassCard>
      </div>

      <div>
        <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/90">
          End-to-end сценарий
        </h2>
        <p className="muted-text mt-2 max-w-2xl text-sm">
          Один сквозной поток от вопроса до объяснения — без ручного SQL со стороны пользователя.
        </p>
        <ol className="relative mt-6 max-w-3xl border-l border-white/8 pl-6 sm:pl-8">
          {driveeCase.endToEndSteps.map((step, i) => (
            <li key={i} className="relative pb-6 last:pb-0">
              <span
                className="absolute -left-6 top-1.5 flex size-2.5 -translate-x-[calc(50%-0.5px)] rounded-full border border-primary/35 bg-background shadow-[0_0_10px_-2px_color-mix(in_oklch,var(--primary)_35%,transparent)] sm:-left-8"
                aria-hidden
              />
              <GlassCard interactive={false} className="p-4 sm:p-4">
                <p className="font-mono text-[10px] text-muted-foreground">Шаг {i + 1}</p>
                <p className="mt-1 text-sm font-medium text-foreground sm:text-base">{step}</p>
              </GlassCard>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
