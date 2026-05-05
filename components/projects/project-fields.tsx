import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function ProjectField({
  label,
  children,
  className,
}: {
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn(className)}>
      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>
      <div className="mt-1.5 text-sm leading-relaxed text-foreground/95">{children}</div>
    </div>
  )
}
