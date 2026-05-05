"use client"

import { GlassImageDecorSlot } from "@/components/projects/GlassImageDecorSlot"
import { driveeGuardrailsShieldGlassAsset, driveeHeroGlassAsset } from "@/data/glassAssets"
import { cn } from "@/lib/utils"

/** Hero кейса: стеклянный якорь AI-продукта, только `lg+` (на мобильных не грузим декор). */
export function DriveeHeroGlassAside({ className }: { className?: string }) {
  return (
    <GlassImageDecorSlot
      asset={driveeHeroGlassAsset()}
      opacity={0.82}
      assetSize="hero"
      className={cn(
        "hidden shrink-0 lg:block lg:max-w-[13rem]",
        "drop-shadow-[0_0_28px_rgba(34,211,238,0.18)]",
        className
      )}
      blurClass="[filter:blur(0.35px)]"
    />
  )
}

/** Мини-акцент «контур безопасности» в guardrails: только если ассет доступен (`HEAD`). */
export function DriveeGuardrailsShieldDecor({ className }: { className?: string }) {
  return (
    <GlassImageDecorSlot
      asset={driveeGuardrailsShieldGlassAsset()}
      opacity={0.55}
      assetSize="compact"
      className={cn("hidden shrink-0 scale-[0.92] lg:block", className)}
      blurClass="[filter:blur(0.25px)] contrast-[1.05]"
    />
  )
}
