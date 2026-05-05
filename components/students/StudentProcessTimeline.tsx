import { studentProcessSteps } from "@/data/studentAchievements"
import { GlassCard } from "@/components/ui/GlassCard"

export function StudentProcessTimeline() {
  return (
    <ol className="relative max-w-4xl border-l border-white/[0.08] pl-6 sm:pl-8">
      {studentProcessSteps.map((step, index) => (
        <li key={step.id} className="relative pb-10 last:pb-0">
          <span
            className="absolute -left-6 top-2 flex size-3 -translate-x-[calc(50%-0.5px)] rounded-full border border-accent-2/35 bg-background shadow-[0_0_12px_-2px_color-mix(in_oklch,var(--accent-2)_28%,transparent)] sm:-left-8 sm:size-3.5"
            aria-hidden
          />
          <span className="sr-only">
            Этап {index + 1} из {studentProcessSteps.length}
          </span>
          <GlassCard interactive={false} className="border-white/[0.07] p-4 sm:p-5">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Шаг {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-1 text-base font-semibold text-foreground sm:text-lg">{step.title}</h3>
            <p className="muted-text mt-2 text-sm leading-relaxed">{step.detail}</p>
          </GlassCard>
        </li>
      ))}
    </ol>
  )
}
