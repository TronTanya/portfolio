import { GlassCard } from "@/components/ui/GlassCard"
import {
  studentsIntro,
  studentsMainThought,
  studentsPageTitle,
} from "@/data/studentAchievements"

export function StudentsHero() {
  return (
    <header className="space-y-6">
      <div>
        <h1 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
          {studentsPageTitle}
        </h1>
        <p className="muted-text mt-4 max-w-3xl text-pretty text-base leading-relaxed sm:text-lg">
          {studentsIntro}
        </p>
      </div>

      <GlassCard interactive={false} className="border-primary/15 bg-gradient-to-br from-primary/[0.06] via-transparent to-accent-2/[0.05] p-5 sm:p-6">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-primary/85">
          Главная мысль
        </p>
        <p className="mt-3 text-base font-medium leading-relaxed text-foreground/95 sm:text-lg">
          {studentsMainThought}
        </p>
      </GlassCard>
    </header>
  )
}
