import { cn } from "@/lib/utils"

/** Лёгкий плейсхолдер на время загрузки чанка R3F (не дублирует полный CSS hero). */
export function R3FHeroCanvasSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-auto flex aspect-5/4 max-h-[min(440px,52vh)] w-full max-w-xl items-center justify-center overflow-hidden rounded-[2rem] border border-white/6 bg-[oklch(0.06_0.02_264)]",
        className
      )}
      aria-hidden
    >
      <div className="flex flex-col items-center gap-2">
        <span
          className="size-8 animate-spin rounded-full border-2 border-primary/25 border-t-primary/60 motion-reduce:animate-none"
          aria-hidden
        />
        <span className="text-[11px] text-muted-foreground">3D…</span>
      </div>
    </div>
  )
}
