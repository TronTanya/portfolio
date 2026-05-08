import type { Metadata } from "next"

import { DocumentShowcase } from "@/components/students/DocumentShowcase"
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
  const showcaseItems = [
    studentResultsShowcase,
    forumCareerBridgeDiplomaFirst,
    professionalsRegionalDiploma,
    professionalsRegionalDiplomaThird,
    bigChallengesRegionalTsvetkovDiplomaSecond,
    abilympicsRegionalYurovDiplomaThird,
    abilympicsRegionalIvanovNeuralArtDiplomaThird,
    moyaProfessionItRegionalMeritocracyDiplomaThird,
  ] as const

  return (
    <div className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
      <StudentsHero />

      <section className="relative mt-12 sm:mt-14">
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
        <div className="mt-8 sm:mt-10">
          <StudentResultStats />
        </div>
        <nav
          className="mt-6 rounded-2xl border border-white/10 bg-surface/28 p-3 sm:mt-8"
          aria-label="Быстрая навигация по кейсам студентов"
        >
          <ul className="flex flex-wrap gap-2">
            {showcaseItems.map((item, i) => {
              const caseId = `student-case-${i + 1}`
              return (
                <li key={caseId}>
                  <a
                    href={`#${caseId}`}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-surface/40 px-2.5 py-1.5 text-xs text-muted-foreground transition-[border-color,color,background-color] hover:border-primary/30 hover:bg-primary/10 hover:text-foreground"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary/85">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="max-w-[18ch] truncate">{item.title}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="mt-8 space-y-8 sm:mt-10 sm:space-y-10">
          {showcaseItems.map((item, i) => (
            <section
              key={item.title}
              id={`student-case-${i + 1}`}
              className="relative scroll-mt-24"
            >
              <div
                className="absolute -left-4 top-0 hidden h-16 w-px bg-linear-to-b from-accent-2/55 via-accent-2/20 to-transparent sm:block lg:-left-6"
                aria-hidden
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                Кейс {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-balance text-base font-semibold tracking-tight text-foreground sm:text-lg">
                {item.title}
              </h3>
              <DocumentShowcase content={item} />
            </section>
          ))}
        </div>
      </section>
    </div>
  )
}
