import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const techBadgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-primary/25 bg-primary/8 text-primary/95 hover:border-primary/40 hover:bg-primary/12",
        subtle:
          "border-border/80 bg-surface/60 text-muted-foreground hover:border-primary/25 hover:text-foreground",
        outline:
          "border-border bg-transparent text-muted-foreground hover:border-accent-2/35 hover:text-foreground",
        glow:
          "glow-border border-primary/20 bg-primary/6 text-primary/90 shadow-glow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export type TechBadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof techBadgeVariants>

export function TechBadge({ className, variant, ...props }: TechBadgeProps) {
  return (
    <span className={cn(techBadgeVariants({ variant }), className)} {...props} />
  )
}

export { techBadgeVariants }
