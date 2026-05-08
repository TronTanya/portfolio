import { studentsIntro, studentsPageTitle } from "@/data/studentAchievements"
import { cn } from "@/lib/utils"

export function StudentsHero() {
  return (
    <header className="relative">
      <p className="section-eyebrow mb-0">Наставничество</p>
      <h1
        className={cn(
          "hero-title-gradient mt-2 text-balance font-sans text-3xl font-semibold tracking-[-0.03em] sm:mt-3 sm:text-4xl sm:tracking-[-0.035em] lg:text-[2.5rem] lg:leading-[1.12]"
        )}
      >
        {studentsPageTitle}
      </h1>

      <div
        className={cn(
          "relative mt-8 max-w-3xl overflow-hidden rounded-2xl border border-white/10",
          "bg-linear-to-br from-surface/80 via-surface/45 to-surface/25",
          "p-6 shadow-[inset_0_1px_0_0_oklch(1_0_0_/0.07),0_1px_0_0_oklch(1_0_0_/0.04)_inset]",
          "backdrop-blur-xl sm:mt-10 sm:p-7"
        )}
      >
        <div
          className="pointer-events-none absolute -right-12 -top-14 size-44 rounded-full bg-primary/15 blur-3xl sm:size-52"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-10 size-40 rounded-full bg-accent-2/10 blur-3xl sm:size-48"
          aria-hidden
        />
        <p className="relative text-pretty text-base leading-[1.7] text-foreground/88 sm:text-lg sm:leading-[1.65]">
          {studentsIntro}
        </p>
      </div>
    </header>
  )
}
