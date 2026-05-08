import { contactChannels } from "@/data/contact"
import { GlassCard } from "@/components/ui/GlassCard"
import { buttonVariants } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export function ContactChannels() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {contactChannels.map((ch) => {
        const Icon = ch.icon
        const canLink = Boolean(ch.href) && !ch.comingSoon

        return (
          <li key={ch.id}>
            <GlassCard interactive={false} className="flex h-full flex-col border-white/7 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/8 text-primary">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h2 className="text-base font-semibold text-foreground">{ch.label}</h2>
                  <p className="mt-1 break-all font-mono text-xs text-foreground/90 sm:text-sm">{ch.display}</p>
                </div>
              </div>
              <p className="muted-text mt-4 flex-1 text-sm leading-relaxed">{ch.hint}</p>
              {canLink ? (
                <a
                  href={ch.href}
                  target={ch.id === "email" ? undefined : "_blank"}
                  rel={ch.id === "email" ? undefined : "noopener noreferrer"}
                  className={cn(
                    buttonVariants({ variant: "default", size: "default" }),
                    "mt-5 w-full justify-center"
                  )}
                >
                  {ch.actionLabel}
                </a>
              ) : (
                <span
                  className={cn(
                    buttonVariants({ variant: "outline", size: "default" }),
                    "mt-5 w-full cursor-not-allowed justify-center opacity-70"
                  )}
                  aria-disabled="true"
                >
                  {ch.actionLabel}
                </span>
              )}
            </GlassCard>
          </li>
        )
      })}
    </ul>
  )
}
