import { driveeCase } from "@/data/drivee-case-study"
import { cn } from "@/lib/utils"

const panelGlass =
  "rounded-xl border border-white/[0.1] bg-gradient-to-b from-white/[0.07] to-white/[0.02] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md"

/**
 * Превью прозрачности продукта: SQL, мини-график, инсайт — без «картинки ради картинки».
 */
export function DriveeExplainabilityPreview({ className }: { className?: string }) {
  const { sql, chartCaption, insight, chartBars } = driveeCase.explainabilityPreview
  const max = Math.max(...chartBars)

  return (
    <div className={cn(panelGlass, "overflow-hidden p-4 sm:p-5", className)}>
      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        Preview · explainability
      </p>
      <div className="mt-3 grid gap-4 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.75fr)] sm:items-stretch sm:gap-5">
        <div className="min-w-0 rounded-lg border border-white/[0.06] bg-black/35 p-3">
          <p className="font-mono text-[10px] uppercase tracking-wider text-accent-2/90">Generated SQL</p>
          <pre className="mt-2 max-h-[9.5rem] overflow-auto whitespace-pre-wrap break-words font-mono text-[11px] leading-relaxed text-primary/95 sm:text-xs">
            {sql}
          </pre>
        </div>
        <div className="flex min-w-0 flex-col justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{chartCaption}</p>
            <div
              className="mt-2 flex h-24 items-end justify-between gap-1 rounded-lg border border-white/[0.06] bg-black/25 px-2 pb-2 pt-3"
              role="img"
              aria-label="Упрощённая столбчатая диаграмма выручки по месяцам"
            >
              {chartBars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-primary/25 via-accent-2/50 to-cyan-300/35"
                  style={{ height: `${Math.max(12, (h / max) * 100)}%` }}
                />
              ))}
            </div>
          </div>
          <p className="border-t border-white/[0.08] pt-3 text-xs leading-snug text-foreground/90 sm:text-sm">
            {insight}
          </p>
        </div>
      </div>
    </div>
  )
}
