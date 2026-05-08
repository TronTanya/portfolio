import type { Metadata } from "next"

import { DocumentShowcase } from "@/components/students/DocumentShowcase"
import { StudentResultsShowcase } from "@/components/students/StudentResultsShowcase"
import { StudentResultStats } from "@/components/students/StudentResultStats"
import { StudentsHero } from "@/components/students/StudentsHero"
import {
  abilympicsRegionalIvanovNeuralArtDiplomaThird,
  abilympicsRegionalYurovDiplomaThird,
  bigChallengesRegionalTsvetkovDiplomaSecond,
  moyaProfessionItRegionalMeritocracyDiplomaThird,
  forumCareerBridgeDiplomaFirst,
  professionalsRegionalDiploma,
  professionalsRegionalDiplomaThird,
  studentResultsShowcase,
} from "@/data/studentAchievements"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Студенты и наставничество",
  description: "Наставничество и сопровождение: результаты студентов и работа с командами.",
  path: "/students",
})

export default function StudentsPage() {
  return (
    <div className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <StudentsHero />

      <section className="relative mt-16 sm:mt-20">
        <div
          className="absolute -left-4 top-0 hidden h-24 w-px bg-linear-to-b from-primary/50 via-primary/15 to-transparent sm:block lg:-left-6"
          aria-hidden
        />
        <div className="max-w-3xl">
          <p className="section-eyebrow mb-0">Итоги</p>
          <h2 className="mt-2 text-balance text-xl font-semibold tracking-[-0.02em] text-foreground sm:mt-3 sm:text-2xl lg:text-[1.65rem] lg:leading-snug">
            Результаты студентов
          </h2>
          <p className="muted-text mt-4 max-w-prose text-pretty text-sm leading-relaxed sm:mt-5 sm:text-base">
            Без выдуманных цифр: типы исходов и формулировки, которые подтверждаются опытом сопровождения.
          </p>
        </div>
        <div className="mt-10 sm:mt-12">
          <StudentResultStats />
        </div>
        <h3 className="mt-10 text-base font-semibold tracking-tight text-foreground sm:mt-12 sm:text-lg">
          {studentResultsShowcase.title}
        </h3>
        <StudentResultsShowcase />
        <h3 className="mt-10 text-base font-semibold tracking-tight text-foreground sm:mt-12 sm:text-lg">
          {forumCareerBridgeDiplomaFirst.title}
        </h3>
        <DocumentShowcase content={forumCareerBridgeDiplomaFirst} />
        <h3 className="mt-10 text-base font-semibold tracking-tight text-foreground sm:mt-12 sm:text-lg">
          {professionalsRegionalDiploma.title}
        </h3>
        <DocumentShowcase content={professionalsRegionalDiploma} />
        <h3 className="mt-10 text-base font-semibold tracking-tight text-foreground sm:mt-12 sm:text-lg">
          {professionalsRegionalDiplomaThird.title}
        </h3>
        <DocumentShowcase content={professionalsRegionalDiplomaThird} />
        <h3 className="mt-10 text-base font-semibold tracking-tight text-foreground sm:mt-12 sm:text-lg">
          {bigChallengesRegionalTsvetkovDiplomaSecond.title}
        </h3>
        <DocumentShowcase content={bigChallengesRegionalTsvetkovDiplomaSecond} />
        <h3 className="mt-10 text-base font-semibold tracking-tight text-foreground sm:mt-12 sm:text-lg">
          {abilympicsRegionalYurovDiplomaThird.title}
        </h3>
        <DocumentShowcase content={abilympicsRegionalYurovDiplomaThird} />
        <h3 className="mt-10 text-base font-semibold tracking-tight text-foreground sm:mt-12 sm:text-lg">
          {abilympicsRegionalIvanovNeuralArtDiplomaThird.title}
        </h3>
        <DocumentShowcase content={abilympicsRegionalIvanovNeuralArtDiplomaThird} />
        <h3 className="mt-10 text-base font-semibold tracking-tight text-foreground sm:mt-12 sm:text-lg">
          {moyaProfessionItRegionalMeritocracyDiplomaThird.title}
        </h3>
        <DocumentShowcase content={moyaProfessionItRegionalMeritocracyDiplomaThird} />
      </section>
    </div>
  )
}
