"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

import { resetGlassVideoBudget } from "@/lib/glassVideoBudget"

/** Сбрасывает счётчик glass-video при навигации, чтобы лимит `maxVideosPerPage` был «на страницу». */
export function GlassVideoBudgetReset() {
  const pathname = usePathname()

  useEffect(() => {
    resetGlassVideoBudget()
  }, [pathname])

  return null
}
