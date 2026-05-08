"use client"

import { motion } from "framer-motion"

import { contactChannels } from "@/data/contact"
import { GlassCard } from "@/components/ui/GlassCard"
import { buttonVariants } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export function ContactChannels() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {contactChannels.map((ch, i) => {
        const Icon = ch.icon
        const canLink = Boolean(ch.href) && !ch.comingSoon

        return (
          <motion.li
            key={ch.id}
            initial={{ opacity: 0, y: 10, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.05, duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard interactive className="flex h-full flex-col border-white/10 bg-surface/32 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-primary/22 bg-primary/10 text-primary">
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
          </motion.li>
        )
      })}
    </ul>
  )
}
