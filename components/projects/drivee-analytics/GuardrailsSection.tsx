import { driveeCase } from "@/data/drivee-case-study"
import { GlassCard } from "@/components/ui/GlassCard"
import { isGlass3DEnabled } from "@/lib/glassVisualPolicy"
import { cn } from "@/lib/utils"

import { DriveeExplainabilityPreview } from "./DriveeExplainabilityPreview"
import { DriveeGuardrailsShieldDecor } from "./DriveeGlassDecor"

const guardrailCard =
  "rounded-lg border border-white/8 bg-black/30 px-4 py-3 shadow-none hover:translate-y-0 hover:border-white/10 hover:shadow-none"

const explainCard =
  "rounded-lg border border-white/7 bg-white/3 px-4 py-3 shadow-none hover:translate-y-0 hover:border-primary/15 hover:shadow-none"

export function GuardrailsSection() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
      <section className="rounded-2xl border border-white/7 bg-linear-to-b from-black/35 to-transparent p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4">
          <div className="min-w-0 border-l-2 border-accent-2/60 pl-4">
            <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent-2/95">
              Безопасность и guardrails
            </h2>
            <p className="muted-text mt-2 max-w-md text-xs leading-relaxed sm:text-sm">
              Контур доверия для NL→SQL: явные ограничения, аудит и предсказуемое поведение в корпоративном
              контексте.
            </p>
          </div>
          {isGlass3DEnabled() ? <DriveeGuardrailsShieldDecor className="opacity-90" /> : null}
        </div>
        <ul className="mt-5 space-y-2.5">
          {driveeCase.guardrails.map((item) => (
            <li key={item}>
              <GlassCard interactive={false} className={cn("flex items-start gap-3", guardrailCard)}>
                <span
                  className="mt-1.5 size-1.5 shrink-0 rounded-[1px] bg-accent-2 shadow-[0_0_8px_rgba(74,222,128,0.45)]"
                  aria-hidden
                />
                <span className="text-[13px] font-medium leading-snug tracking-[-0.01em] text-foreground/95">
                  {item}
                </span>
              </GlassCard>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <DriveeExplainabilityPreview className="mb-6" />
        <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/90">
          UX / Explainability
        </h2>
        <p className="muted-text mt-2 text-sm">
          Прозрачность для пользователя и для ревью со стороны data-команды: что сгенерировано, почему такой график,
          какой вывод.
        </p>
        <ul className="mt-5 space-y-2">
          {driveeCase.ux.map((item) => (
            <li key={item}>
              <GlassCard interactive={false} className={cn("flex items-start gap-3", explainCard)}>
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/85" aria-hidden />
                <span className="text-sm text-foreground/95">{item}</span>
              </GlassCard>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
