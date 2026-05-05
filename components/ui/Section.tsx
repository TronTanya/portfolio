import type { ReactNode } from "react"

import { PageHeader } from "@/components/ui/PageHeader"
import { cn } from "@/lib/utils"

type SectionProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
  className?: string
  contentClassName?: string
  /** Декор справа у `PageHeader` (например glass на `/projects`). */
  headerAside?: ReactNode
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
  headerAside,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20",
        className
      )}
    >
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        containerClassName={contentClassName}
        aside={headerAside}
      />
      {children}
    </section>
  )
}
