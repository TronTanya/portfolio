import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export type PageHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  /** Контейнер заголовка (отступы снизу перед контентом секции) */
  containerClassName?: string
  /** Декоративный блок справа (например glass), не влияет на доступность текста слева */
  aside?: ReactNode
}

/**
 * Единый блок заголовка страницы / секции (типографика и акценты дизайн-системы).
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  className,
  containerClassName,
  aside,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "mb-10",
        aside
          ? "grid max-w-none gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-10"
          : "max-w-2xl",
        containerClassName,
        className
      )}
    >
      <div className={aside ? "min-w-0 max-w-2xl" : undefined}>
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h1 className="text-balance font-sans text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl sm:tracking-[-0.035em] lg:text-[2.5rem] lg:leading-[1.12]">
          {title}
        </h1>
        {description ? (
          <p className="muted-text mt-5 max-w-prose text-pretty text-base leading-relaxed sm:text-lg">{description}</p>
        ) : null}
      </div>
      {aside ? (
        <div className="flex shrink-0 justify-end lg:justify-end lg:pt-1" aria-hidden>
          {aside}
        </div>
      ) : null}
    </header>
  )
}
