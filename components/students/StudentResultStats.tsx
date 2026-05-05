import { studentResults } from "@/data/studentAchievements"
import { GlassCard } from "@/components/ui/GlassCard"
import { cn } from "@/lib/utils"

export function StudentResultStats() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {studentResults.map((item) => (
        <li key={item.id}>
          <GlassCard
            interactive={false}
            className={cn(
              "h-full border-white/[0.07] p-5 sm:p-6",
              item.id === "first" && "ring-1 ring-primary/15",
              item.id === "second" && "ring-1 ring-white/[0.06]",
              item.id === "third" && "ring-1 ring-accent-2/15"
            )}
          >
            <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Результат
            </p>
            <p className="mt-2 bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-xl font-semibold tracking-tight text-transparent sm:text-2xl">
              {item.value}
            </p>
            <p className="muted-text mt-3 text-sm leading-relaxed">{item.label}</p>
          </GlassCard>
        </li>
      ))}
    </ul>
  )
}
