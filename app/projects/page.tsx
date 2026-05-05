import type { Metadata } from "next"

import { ProjectsHeaderGlassAside } from "@/components/projects/ProjectsGlassDecorFigure"
import { ProjectsView } from "@/components/projects/ProjectsView"
import { Section } from "@/components/ui/Section"
import { isGlass3DEnabled } from "@/lib/glassVisualPolicy"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Проекты",
  description:
    "Кейсы в AI, Data Science и fullstack: архитектура, роль, стек и результат — от NL→SQL до образовательных продуктов.",
  path: "/projects",
})

export default function ProjectsPage() {
  return (
    <Section
      eyebrow="Портфолио"
      title="Проекты"
      description="Контекст, решение, роль и стек. Фильтр помогает сфокусироваться на направлении."
      headerAside={isGlass3DEnabled() ? <ProjectsHeaderGlassAside /> : undefined}
    >
      <ProjectsView />
    </Section>
  )
}
