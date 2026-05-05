"use client"

import { useSyncExternalStore } from "react"

import { useHydrationReady } from "@/hooks/useHydrationReady"

const QUERY = "(prefers-reduced-motion: reduce)"

function subscribe(onStoreChange: () => void) {
  const mq = window.matchMedia(QUERY)
  mq.addEventListener("change", onStoreChange)
  return () => mq.removeEventListener("change", onStoreChange)
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches
}

/** SSR: как и раньше — не reduced (нет `window`). */
function getServerSnapshot() {
  return false
}

/**
 * Текущее значение `prefers-reduced-motion: reduce`.
 * До гидрации всегда `false`, как на сервере — иначе на клиенте с reduce и сервером будет mismatch.
 */
export function useReducedMotion(): boolean {
  const hydrated = useHydrationReady()
  const live = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  return hydrated ? live : false
}
