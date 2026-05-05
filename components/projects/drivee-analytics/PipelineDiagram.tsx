import { Fragment } from "react"

import { driveeCase } from "@/data/drivee-case-study"
import { GlassCard } from "@/components/ui/GlassCard"
import { cn } from "@/lib/utils"

const nodeGlass =
  "border-white/12 bg-gradient-to-b from-white/[0.09] to-white/[0.02] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] backdrop-blur-sm"

function PipelineConnector({ orientation }: { orientation: "vertical" | "horizontal" }) {
  if (orientation === "vertical") {
    return (
      <div className="flex h-5 shrink-0 justify-center py-0.5 lg:hidden" aria-hidden>
        <div className="relative w-px flex-1 max-w-[2px] overflow-hidden rounded-full bg-gradient-to-b from-transparent via-accent-2/45 to-primary/25 opacity-90">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/20 via-transparent to-transparent blur-[1px]" />
        </div>
      </div>
    )
  }
  return (
    <div
      className="relative hidden h-10 min-w-[2.25rem] shrink-0 items-center px-0.5 lg:flex"
      aria-hidden
    >
      <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-accent-2/15 via-cyan-300/35 to-primary/30 shadow-[0_0_12px_rgba(34,211,238,0.12)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-white/10 shadow-[inset_0_0_6px_rgba(255,255,255,0.35)]" />
    </div>
  )
}

export function PipelineDiagram() {
  const nodes = driveeCase.pipeline

  return (
    <section>
      <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/90">
        Архитектура
      </h2>
      <p className="muted-text mt-2 max-w-2xl text-sm">
        Визуальный pipeline: от UI до данных и обратно к инсайтам — стеклянные панели и тонкие
        коннекторы как метафора потока данных.
      </p>

      <div className="mt-6 flex flex-col lg:flex-row lg:flex-wrap lg:items-stretch lg:gap-0">
        {nodes.map((node, index) => (
          <Fragment key={node.id}>
            <GlassCard
              interactive={false}
              className={cn(
                "min-w-0 px-4 py-3 sm:px-5 sm:py-4 lg:w-[min(100%,9.75rem)] xl:w-40",
                nodeGlass
              )}
            >
              <p className="text-xs font-semibold leading-tight text-foreground sm:text-sm">{node.label}</p>
              <p className="mt-1 text-[11px] leading-snug text-muted-foreground sm:text-xs">{node.sub}</p>
            </GlassCard>
            {index < nodes.length - 1 ? (
              <>
                <PipelineConnector orientation="vertical" />
                <PipelineConnector orientation="horizontal" />
              </>
            ) : null}
          </Fragment>
        ))}
      </div>
    </section>
  )
}
