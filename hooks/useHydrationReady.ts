"use client"

import { useEffect, useState } from "react"

/** `false` на сервере и на первом клиентском кадре; `true` после commit — чтобы не ломать гидрацию. */
export function useHydrationReady(): boolean {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setReady(true)
  }, [])
  return ready
}
