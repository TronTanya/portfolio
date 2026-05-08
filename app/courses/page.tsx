import type { Metadata } from "next"

import { CoursesView } from "@/components/courses/CoursesView"
import { LearningRoadmap } from "@/components/courses/LearningRoadmap"
import { coursesIntro } from "@/data/courses"
import { Section } from "@/components/ui/Section"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Курсы и сертификаты",
  description:
    "Data Science, AI, Python, SQL, backend и frontend: пройденные курсы, статусы и дорожная карта обучения.",
  path: "/courses",
})

export default function CoursesPage() {
  return (
    <Section eyebrow="Обучение" title="Курсы и сертификаты" description={coursesIntro}>
      <p className="mb-10 max-w-2xl rounded-2xl border border-white/10 bg-surface/24 px-4 py-3.5 text-sm text-muted-foreground sm:mb-12 sm:text-base">
        Сертификаты и ссылки на credential отображаются там, где они заданы в данных курса.
      </p>

      <CoursesView />
      <LearningRoadmap />
    </Section>
  )
}
