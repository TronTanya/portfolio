import type { Metadata } from "next"

/** Политика 3D glass: `config/visuals.ts`, `lib/glassVisualPolicy.ts` (включение — в ProjectHero / GuardrailsSection). */
import { FutureImprovements } from "@/components/projects/drivee-analytics/FutureImprovements"
import { GuardrailsSection } from "@/components/projects/drivee-analytics/GuardrailsSection"
import { PipelineDiagram } from "@/components/projects/drivee-analytics/PipelineDiagram"
import { ProblemSolution } from "@/components/projects/drivee-analytics/ProblemSolution"
import { ProjectHero } from "@/components/projects/drivee-analytics/ProjectHero"
import { TechStackGrid } from "@/components/projects/drivee-analytics/TechStackGrid"
import { driveeCase } from "@/data/drivee-case-study"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Drivee Analytics Notebook",
  description:
    "Кейс: NL→SQL self-service, Next.js и FastAPI, guardrails и объяснимый UX для аналитики.",
  path: "/projects/drivee-analytics",
})

export default function DriveeAnalyticsCasePage() {
  return (
    <div className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <ProjectHero />

      <div className="mt-12 flex flex-col gap-14 sm:mt-16 sm:gap-16 lg:gap-20">
        <ProblemSolution />
        <PipelineDiagram />
        <TechStackGrid />
        <GuardrailsSection />
        <FutureImprovements />
      </div>

      <footer className="mt-16 border-t border-white/6 pt-8 sm:mt-20">
        <p className="text-center text-sm text-muted-foreground">
          Итог:{" "}
          <span className="text-foreground/90">
            воспроизводимый AI/Data кейс с упором на безопасность и понятный UX.
          </span>
        </p>
        <p className="mt-3 text-center">
          <a
            href={driveeCase.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline"
          >
            Репозиторий на GitHub →
          </a>
        </p>
      </footer>
    </div>
  )
}
