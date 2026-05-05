import Image from "next/image"

import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

type SiteLogoProps = {
  className?: string
  /** CSS size (tailwind `size-*` recommended on wrapper). */
  size?: number
  /** LCP: только для шапки. */
  priority?: boolean
}

/** Монограмма TR (`public/assets/logo/`, путь в `siteConfig.logoUrl`). */
export function SiteLogo({ className, size = 32, priority = false }: SiteLogoProps) {
  return (
    <Image
      src={siteConfig.logoUrl}
      alt=""
      width={size}
      height={size}
      priority={priority}
      sizes={`${size}px`}
      className={cn("object-contain", className)}
    />
  )
}
