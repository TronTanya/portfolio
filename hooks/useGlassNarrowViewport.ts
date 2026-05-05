"use client"

import { useSyncExternalStore } from "react"

import { useHydrationReady } from "@/hooks/useHydrationReady"

const NARROW_MQ = "(max-width: 767px)"

function subscribe(cb: () => void) {
  const m = window.matchMedia(NARROW_MQ)
  m.addEventListener("change", cb)
  return () => m.removeEventListener("change", cb)
}

function getSnapshot() {
  return window.matchMedia(NARROW_MQ).matches
}

function getServerSnapshot() {
  return true
}

/**
 * Узкий вьюпорт (≤767px).
 * До гидрации — `true` (как SSR), чтобы на десктопе не рендерить иное дерево, чем на сервере.
 */
export function useGlassNarrowViewport(): boolean {
  const hydrated = useHydrationReady()
  const live = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  return hydrated ? live : true
}
