import { BookOpen, Medal } from "lucide-react"

import { getStudentPlaceTally, studentResults } from "@/data/studentAchievements"
import { GlassCard } from "@/components/ui/GlassCard"
import { cn } from "@/lib/utils"

function diplomasCountLabel(n: number): string {
  const m10 = n % 10
  const m100 = n % 100
  if (m10 === 1 && m100 !== 11) return `${n} диплом`
  if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return `${n} диплома`
  return `${n} дипломов`
}

function coursesCountLabel(n: number): string {
  const m10 = n % 10
  const m100 = n % 100
  if (m10 === 1 && m100 !== 11) return `${n} студент`
  if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return `${n} студента`
  return `${n} студентов`
}

const cardVariants = {
  first: {
    ring: "ring-1 ring-primary/25",
    border: "border-primary/15",
    glow: "bg-primary/20",
    line: "from-primary/60 via-primary/30 to-transparent",
    number: "from-primary via-primary/85 to-primary/55",
    shadow: "shadow-[0_0_48px_-16px_color-mix(in_oklch,var(--primary)_32%,transparent)]",
  },
  second: {
    ring: "ring-1 ring-white/12",
    border: "border-white/10",
    glow: "bg-white/10",
    line: "from-white/50 via-white/20 to-transparent",
    number: "from-foreground via-foreground/90 to-muted-foreground",
    shadow: "shadow-[0_0_40px_-18px_oklch(0.85_0.02_264/0.12)]",
  },
  third: {
    ring: "ring-1 ring-accent-2/30",
    border: "border-accent-2/18",
    glow: "bg-accent-2/18",
    line: "from-accent-2/55 via-accent-2/25 to-transparent",
    number: "from-accent-2 via-accent-2/88 to-accent-2/55",
    shadow: "shadow-[0_0_48px_-16px_color-mix(in_oklch,var(--accent-2)_28%,transparent)]",
  },
  courses: {
    ring: "ring-1 ring-white/8",
    border: "border-white/8",
    glow: "bg-muted-foreground/8",
    line: "from-muted-foreground/35 via-muted-foreground/15 to-transparent",
    number: "from-muted-foreground to-muted-foreground/60",
    shadow: "",
  },
} as const

export function StudentResultStats() {
  const tally = getStudentPlaceTally()
  const countById: Record<string, number> = {
    first: tally.first,
    second: tally.second,
    third: tally.third,
    courses: 107,
  }

  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {studentResults.map((item) => {
        const placeCount = countById[item.id]
        const showTally = placeCount !== undefined
        const tallyCaption =
          item.id === "courses"
            ? `${coursesCountLabel(placeCount)} в образовательных программах`
            : `${diplomasCountLabel(placeCount)} по документам ниже`
        const v =
          item.id === "first"
            ? cardVariants.first
            : item.id === "second"
              ? cardVariants.second
              : item.id === "third"
                ? cardVariants.third
                : cardVariants.courses

        return (
          <li key={item.id} className="min-w-0">
            <GlassCard
              interactive
              className={cn(
                "group relative h-full overflow-hidden border bg-surface/40 p-0 backdrop-blur-md sm:p-0",
                v.border,
                v.ring,
                v.shadow
              )}
            >
              <div
                className={cn(
                  "pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r opacity-90",
                  v.line
                )}
                aria-hidden
              />
              <div
                className={cn(
                  "pointer-events-none absolute -right-10 -top-10 size-36 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 sm:size-40",
                  v.glow,
                  "opacity-70"
                )}
                aria-hidden
              />

              <div className="relative flex h-full flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <p className="inline-flex items-center rounded-md border border-white/8 bg-background/40 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground backdrop-blur-sm sm:text-[11px]">
                    Результат
                  </p>
                  {showTally ? (
                    <span
                      className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-background/30 text-primary/90 shadow-[inset_0_1px_0_0_oklch(1_0_0_/0.06)]"
                      aria-hidden
                    >
                      <Medal className="size-4 opacity-90" strokeWidth={1.75} />
                    </span>
                  ) : (
                    <span
                      className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-background/30 text-muted-foreground shadow-[inset_0_1px_0_0_oklch(1_0_0_/0.06)]"
                      aria-hidden
                    >
                      <BookOpen className="size-4 opacity-90" strokeWidth={1.75} />
                    </span>
                  )}
                </div>

                {showTally ? (
                  <div className="mt-5">
                    <p
                      className={cn(
                        "bg-linear-to-b bg-clip-text text-5xl font-bold tabular-nums tracking-tight text-transparent sm:text-6xl",
                        v.number
                      )}
                    >
                      {placeCount}
                    </p>
                    <p className="mt-1.5 max-w-[24ch] text-[11px] leading-snug text-muted-foreground sm:text-xs">
                      {tallyCaption}
                    </p>
                  </div>
                ) : (
                  <div className="mt-5 flex min-h-18 items-end sm:min-h-20">
                    <p
                      className={cn(
                        "bg-linear-to-br bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl",
                        "from-foreground via-foreground to-muted-foreground"
                      )}
                    >
                      {item.value}
                    </p>
                  </div>
                )}

                {showTally ? (
                  <p
                    className={cn(
                      "mt-4 bg-linear-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-lg font-semibold tracking-tight text-transparent sm:text-xl"
                    )}
                  >
                    {item.value}
                  </p>
                ) : null}

                <p className="muted-text mt-3 flex-1 text-sm leading-relaxed sm:mt-4">{item.label}</p>
              </div>
            </GlassCard>
          </li>
        )
      })}
    </ul>
  )
}
