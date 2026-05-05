import Link from "next/link"

import { cn } from "@/lib/utils"

type GradientButtonProps = {
  href: string
  children: React.ReactNode
  className?: string
  /** Внутренний контейнер (контент, отступы) */
  innerClassName?: string
}

/**
 * CTA с мягким градиентным контуром и вторичным mint/teal в сочетании с primary.
 */
export function GradientButton({
  href,
  children,
  className,
  innerClassName,
}: GradientButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex rounded-xl bg-gradient-to-br from-primary/45 via-accent-2/28 to-primary/25 p-px no-underline outline-none transition-[transform,box-shadow] duration-300",
        "shadow-glow-sm hover:shadow-glow focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "active:scale-[0.99]",
        className
      )}
    >
      <span
        className={cn(
          "flex min-h-9 w-full items-center justify-center gap-2 rounded-[11px] bg-surface/95 px-5 py-2.5 text-sm font-medium text-foreground",
          "ring-1 ring-inset ring-white/[0.05] transition-colors duration-300",
          "group-hover:bg-surface-highlight/95",
          innerClassName
        )}
      >
        {children}
      </span>
    </Link>
  )
}
