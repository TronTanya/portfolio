import type { Metadata } from "next"

import { ContactChannels } from "@/components/contact/ContactChannels"
import { ContactForm } from "@/components/contact/ContactForm"
import { ContactTopics } from "@/components/contact/ContactTopics"
import { contactPageIntro } from "@/data/contact"
import { GradientButton } from "@/components/ui/GradientButton"
import { siteConfig } from "@/lib/site"
import { Section } from "@/components/ui/Section"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Контакты",
  description:
    "Связь для HR, компаний, организаторов конкурсов и партнёров: email, соцсети, резюме и форма сообщения.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <Section eyebrow="Связь" title="Контакты" description={contactPageIntro}>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <GradientButton href={siteConfig.links.email} innerClassName="gap-2">
          Быстрый email
        </GradientButton>
        <p className="text-sm text-muted-foreground">
          Ниже — каналы и резюме в PDF. Ответ обычно в течение 2–3 рабочих дней.
        </p>
      </div>

      <div className="mt-10 sm:mt-12">
        <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/90">Каналы</h2>
        <p className="muted-text mt-2 max-w-2xl text-sm">
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
