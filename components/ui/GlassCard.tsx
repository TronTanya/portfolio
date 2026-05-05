import { cn } from "@/lib/utils"

type GlassCardProps = {
  children: React.ReactNode
  className?: string
  as?: "div" | "article"
  /** Подсветка и лёгкий подъём при наведении */
  interactive?: boolean
}

export function GlassCard({
  children,
  className,
  as: Tag = "div",
  interactive = true,
}: GlassCardProps) {
  return (
    <Tag
      className={cn(
        "glass-panel rounded-2xl p-6 transition-[border-color,box-shadow,transform] duration-300 ease-out",
        interactive &&
          "hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-glow-sm",
        className
      )}
    >
      {children}
    </Tag>
  )
}
