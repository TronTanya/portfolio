import { cn } from "@/lib/utils"

/** Лёгкий плейсхолдер до загрузки чанка и инициализации WebGL. */
export function SplineHeroPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 rounded-[2rem] border border-white/6 bg-surface/35 backdrop-blur-md",
        className
      )}
      aria-hidden
    >
      <span
        className="size-9 animate-spin rounded-full border-2 border-primary/20 border-t-primary/55 motion-reduce:animate-none"
        aria-hidden
      />
      <span className="text-xs text-muted-foreground">Загрузка сцены…</span>
    </div>
  )
}
