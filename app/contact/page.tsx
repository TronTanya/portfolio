import type { Metadata } from "next"

import { ContactChannels } from "@/components/contact/ContactChannels"
import { ContactForm } from "@/components/contact/ContactForm"
import { ContactTopics } from "@/components/contact/ContactTopics"
import { contactPageIntro } from "@/data/contact"
import { GradientButton } from "@/components/ui/GradientButton"
import { buttonVariants } from "@/components/ui/Button"
import { siteConfig } from "@/lib/site"
import { Section } from "@/components/ui/Section"
import { pageMetadata } from "@/lib/seo"
import { cn } from "@/lib/utils"

export const metadata: Metadata = pageMetadata({
  title: "Контакты",
  description:
    "Связь для HR, компаний, организаторов конкурсов и партнёров: email, соцсети, резюме и форма сообщения.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <Section eyebrow="Связь" title="Контакты" description={contactPageIntro}>
      <div className="relative mt-2 overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-surface/78 via-surface/42 to-surface/20 p-5 shadow-[inset_0_1px_0_0_oklch(1_0_0_/0.06)] sm:p-7">
        <div
          className="pointer-events-none absolute -right-14 -top-16 size-52 rounded-full bg-primary/12 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-10 size-48 rounded-full bg-accent-2/12 blur-3xl"
          aria-hidden
        />
        <div className="relative flex flex-wrap items-center gap-2.5">
          <GradientButton href={siteConfig.links.email} innerClassName="gap-2">
            Быстрый email
          </GradientButton>
          <a
            href={siteConfig.resumeUrl}
            download={siteConfig.resumeDownloadFilename}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "gap-2 border-white/12 bg-surface/35"
            )}
          >
            Резюме PDF
          </a>
        </div>
        <p className="muted-text relative mt-4 max-w-3xl text-sm sm:text-base">
          Ниже — каналы связи, темы для обращения и форма сообщения. Обычно отвечаю в течение 2–3
          рабочих дней.
        </p>
      </div>

      <div className="relative mt-10 sm:mt-12">
        <div
          className="absolute -left-4 top-0 hidden h-24 w-px bg-linear-to-b from-primary/50 via-primary/15 to-transparent sm:block lg:-left-6"
          aria-hidden
        />
        <h2 className="section-eyebrow mb-0">Каналы</h2>
        <p className="muted-text mt-3 max-w-2xl text-sm sm:text-base">
          Выберите удобный способ: почта, мессенджер, GitHub или скачивание резюме.
        </p>
        <div className="mt-8">
          <ContactChannels />
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:mt-14 lg:grid-cols-5 lg:gap-10">
        <div className="lg:col-span-2">
          <ContactTopics />
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}
