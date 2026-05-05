import type { MentorRoleItem } from "@/data/studentAchievements"
import { GlassCard } from "@/components/ui/GlassCard"

export function MentorRoleCard({ item }: { item: MentorRoleItem }) {
  const Icon = item.icon

  return (
    <GlassCard interactive={false} className="h-full border-white/[0.07] p-5 sm:p-6">
      <span className="flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.08] text-primary">
        <Icon className="size-[18px]" aria-hidden />
      </span>
      <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground">{item.title}</h3>
      <p className="muted-text mt-2 text-sm leading-relaxed">{item.description}</p>
    </GlassCard>
  )
}
