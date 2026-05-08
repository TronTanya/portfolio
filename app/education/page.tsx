import type { Metadata } from "next"

import { EducationImpact } from "@/components/education/EducationImpact"
import { EducationSection } from "@/components/education/EducationSection"
import { educationIntro, educationSections } from "@/data/education"
import { Section } from "@/components/ui/Section"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Образование",
  description:
    "База для IT, Data Science, преподавания и проектов: основное, дополнительное и профессиональное развитие.",
  path: "/education",
})

export default function EducationPage() {
  return (
    <Section eyebrow="Академия" title="Образование" description={educationIntro}>
      <div className="flex flex-col gap-14 sm:gap-16 lg:gap-20">
        {educationSections.map((block) => (
          <EducationSection
            key={block.id}
            title={block.title}
            subtitle={block.subtitle}
            entries={block.entries}
          />
        ))}
      </div>

      <EducationImpact />
    </Section>
  )
}
