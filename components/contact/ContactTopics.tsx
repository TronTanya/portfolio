import { contactTopics } from "@/data/contact"
import { GlassCard } from "@/components/ui/GlassCard"

export function ContactTopics() {
  return (
    <GlassCard interactive={false} className="border-white/[0.07] p-5 sm:p-6">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">
        Можно обращаться по вопросам
      </h2>
      <ul className="mt-4 space-y-3">
        {contactTopics.map((topic) => (
          <li key={topic} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/75" aria-hidden />
            <span className="text-foreground/90">{topic}</span>
          </li>
        ))}
      </ul>
    </GlassCard>
  )
}
