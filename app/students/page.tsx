import type { Metadata } from "next"
import { Users } from "lucide-react"

import { MentorRoleCard } from "@/components/students/MentorRoleCard"
import { StudentProcessTimeline } from "@/components/students/StudentProcessTimeline"
import { StudentResultStats } from "@/components/students/StudentResultStats"
import { StudentsHero } from "@/components/students/StudentsHero"
import { mentorRoles, studentSkillsGained, whyMentoringMatters } from "@/data/studentAchievements"
import { GlassCard } from "@/components/ui/GlassCard"
import { TechBadge } from "@/components/ui/TechBadge"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Студенты и наставничество",
  description:
    "Наставничество и сопровождение: роль ментора, результаты студентов и этапы работы с командами.",
  path: "/students",
})

export default function StudentsPage() {
  return (
    <div className="relative mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <StudentsHero />

      <section className="mt-14 sm:mt-16">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/[0.06] pb-4">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">Роль наставника</h2>
            <p className="muted-text mt-2 max-w-2xl text-sm sm:text-base">
              Сопровождение от выбора формата до рефлексии после мероприятия.
            </p>
          </div>
          <span className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-surface/50 px-3 py-1.5 text-xs text-muted-foreground">
            <Users className="size-3.5 text-primary/90" aria-hidden />
            Ментор / куратор
          </span>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {mentorRoles.map((item) => (
            <li key={item.id}>
              <MentorRoleCard item={item} />
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 sm:mt-16">
        <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">Результаты студентов</h2>
        <p className="muted-text mt-2 max-w-2xl text-sm sm:text-base">
          Без выдуманных цифр: типы исходов и формулировки, которые подтверждаются опытом сопровождения.
        </p>
        <div className="mt-8">
          <StudentResultStats />
        </div>
      </section>

      <section className="mt-14 sm:mt-16">
        <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">Процесс со студентами</h2>
        <p className="muted-text mt-2 max-w-2xl text-sm sm:text-base">
          Этапы могут сдвигаться, но логика «договориться → подготовить → участвовать → осмыслить» сохраняется.
        </p>
        <div className="mt-8">
          <StudentProcessTimeline />
        </div>
      </section>

      <section className="mt-14 sm:mt-16">
        <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">Навыки студентов</h2>
        <p className="muted-text mt-2 max-w-2xl text-sm sm:text-base">
          Компетенции через практику, а не только через лекции.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {studentSkillsGained.map((skill) => (
            <li key={skill}>
              <TechBadge variant="outline" className="border-white/12 normal-case tracking-normal">
                {skill}
              </TechBadge>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 sm:mt-16">
        <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">Зачем это</h2>
        <GlassCard interactive={false} className="mt-6 max-w-3xl border-white/[0.07] p-5 sm:p-6">
          <p className="text-sm leading-relaxed text-foreground/95 sm:text-base">{whyMentoringMatters}</p>
        </GlassCard>
      </section>
    </div>
  )
}
