import { ArrowLeft, ArrowUpRight, FolderGit2 } from "lucide-react"
import Link from "next/link"

import { driveeCase } from "@/data/drivee-case-study"
import { GlassCard } from "@/components/ui/GlassCard"
import { TechBadge } from "@/components/ui/TechBadge"
import { buttonVariants } from "@/components/ui/Button"
import { isGlass3DEnabled } from "@/lib/glassVisualPolicy"
import { cn } from "@/lib/utils"

import { DriveeHeroGlassAside } from "./DriveeGlassDecor"

const heroTechChips = driveeCase.technologies.slice(0, 4)

export function ProjectHero() {
  const { hero, githubUrl } = driveeCase

  return (
    <header className="relative">
      <Link
        href="/projects"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "-ml-2 mb-6 inline-flex gap-2 text-muted-foreground hover:text-foreground"
        )}
      >
        <ArrowLeft className="size-4" aria-hidden />
        Все проекты
      </Link>

      {/* Мягкий green/cyan glow — только фон, не перекрывает текст */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-[1.75rem] opacity-70 blur-3xl sm:-inset-8 sm:rounded-[2rem]"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_60%_at_85%_35%,rgba(34,211,238,0.14),transparent_55%),radial-gradient(ellipse_70%_50%_at_70%_80%,rgba(74,222,128,0.1),transparent_50%)]" />
      </div>

      <GlassCard className="relative overflow-hidden p-0">
        <div className="border-b border-white/6 bg-linear-to-br from-primary/8 via-transparent to-accent-2/6 px-5 py-8 sm:px-8 sm:py-10">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
            <div className="relative z-10 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <TechBadge variant="glow" className="normal-case tracking-normal">
                  Case study
                </TechBadge>
                <TechBadge variant="outline" className="normal-case tracking-normal lg:hidden">
                  AI / Data
                </TechBadge>
                <TechBadge variant="outline" className="normal-case tracking-normal lg:hidden">
                  Enterprise-ready
                </TechBadge>
              </div>
              <h1 className="mt-5 text-balance text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-5xl">
                {hero.title}
              </h1>
              <p className="mt-3 max-w-3xl font-mono text-sm leading-relaxed text-primary/90 sm:text-base">
                {hero.tagline}
              </p>
              <p className="muted-text mt-5 max-w-3xl text-pretty text-base sm:text-lg">{hero.summary}</p>
              <div className="mt-8">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "inline-flex w-full justify-center gap-2 sm:w-auto"
                  )}
                >
                  <FolderGit2 className="size-4" aria-hidden />
                  GitHub
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
              </div>
            </div>

            <div className="relative z-1 hidden min-w-0 flex-col items-end gap-4 lg:flex">
              <div className="flex max-w-[13rem] flex-wrap justify-end gap-2">
                <TechBadge variant="outline" className="normal-case tracking-normal">
                  AI / Data
                </TechBadge>
                <TechBadge variant="outline" className="normal-case tracking-normal">
                  Enterprise-ready
                </TechBadge>
                {heroTechChips.map((t) => (
                  <TechBadge key={t} variant="outline" className="font-mono text-[11px] normal-case tracking-tight">
                    {t}
                  </TechBadge>
                ))}
              </div>
              {isGlass3DEnabled() ? <DriveeHeroGlassAside /> : null}
            </div>
          </div>
        </div>
      </GlassCard>
    </header>
  )
}
