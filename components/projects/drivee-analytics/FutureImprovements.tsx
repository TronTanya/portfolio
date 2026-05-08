import { driveeCase } from "@/data/drivee-case-study"
import { GlassCard } from "@/components/ui/GlassCard"

export function FutureImprovements() {
  return (
    <section>
      <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/90">
        Что можно улучшить дальше
      </h2>
      <p className="muted-text mt-2 max-w-2xl text-sm">
        Логичный roadmap для зрелого продукта и найма в сильную команду.
      </p>
      <ol className="mt-5 grid gap-3 sm:grid-cols-2">
        {driveeCase.future.map((item, i) => (
          <li key={item}>
            <GlassCard interactive={false} className="flex h-full gap-3 p-4 sm:p-4">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-white/8 bg-surface/80 font-mono text-xs font-semibold text-primary">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-foreground/95">{item}</p>
            </GlassCard>
          </li>
        ))}
      </ol>
    </section>
  )
}
