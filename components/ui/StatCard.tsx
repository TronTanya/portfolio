import { cn } from "@/lib/utils"

type StatCardProps = {
  label: string
  value: string
  hint?: string
  className?: string
}

/**
 * Компактная метрика в стеклянной плитке (цифры + подпись).
 */
export function StatCard({ label, value, hint, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-xl border-white/[0.06] px-4 py-4 sm:px-5 sm:py-5",
        className
      )}
    >
      <p className="font-mono text-2xl font-semibold tracking-tight text-foreground tabular-nums sm:text-3xl">
        <span className="gradient-text">{value}</span>
      </p>
      <p className="muted-text mt-1 text-xs font-medium uppercase tracking-[0.12em] sm:text-[11px]">
        {label}
      </p>
      {hint ? <p className="mt-2 text-xs leading-relaxed text-muted-foreground/85">{hint}</p> : null}
    </div>
  )
}
