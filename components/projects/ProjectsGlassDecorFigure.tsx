"use client"

import {
  driveeFeaturedCardGlassAsset,
  projectsPageFilterGlassAsset,
  projectsPageHeaderGlassAsset,
} from "@/data/glassAssets"
import { cn } from "@/lib/utils"

import { GlassImageDecorSlot } from "./GlassImageDecorSlot"

/** Маленький prism в шапке `/projects` (только `lg+`). */
export function ProjectsHeaderGlassAside({ className }: { className?: string }) {
  return (
    <GlassImageDecorSlot
      asset={projectsPageHeaderGlassAsset()}
      opacity={0.62}
      className={cn("hidden shrink-0 lg:block lg:w-[5.25rem]", className)}
      blurClass="[filter:blur(0.4px)]"
    />
  )
}

/** Размытый glass за табами фильтра (`lg+`). */
export function ProjectsFilterGlassBackdrop({ className }: { className?: string }) {
  return (
    <GlassImageDecorSlot
      asset={projectsPageFilterGlassAsset()}
      opacity={0.52}
      assetSize="compact"
      className={cn(
        "hidden lg:block lg:absolute lg:-right-1 lg:top-1/2 lg:-translate-y-1/2 lg:scale-[1.65]",
        className
      )}
      blurClass="blur-2xl contrast-[1.02]"
    />
  )
}

/** Декор на featured Drivee (`lg+`), только статичное изображение. */
export function DriveeFeaturedGlassDecor({ className }: { className?: string }) {
  return (
    <GlassImageDecorSlot
      asset={driveeFeaturedCardGlassAsset()}
      opacity={0.52}
      className={cn("hidden lg:block", className)}
      blurClass="[filter:blur(0.5px)]"
    />
  )
}
