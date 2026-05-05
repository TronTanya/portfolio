import type { LucideIcon } from "lucide-react"
import { FolderGit2, Mail, MessageCircle } from "lucide-react"

export const contactPageIntro =
  "Открыта к IT-проектам, стажировкам, сотрудничеству, хакатонам, образовательным инициативам и возможностям в AI/Data Science."

export type ContactChannel = {
  id: string
  label: string
  /** Текст в карточке */
  display: string
  /** Ссылка; если нет — карточка без основного CTA */
  href?: string
  hint: string
  icon: LucideIcon
  /** Текст кнопки / действия */
  actionLabel: string
  /** Пока нет ссылки — «скоро» */
  comingSoon?: boolean
}

export const contactChannels: ContactChannel[] = [
  {
    id: "email",
    label: "Email",
    display: "j.neutrongenius@gmail.com",
    href: "mailto:j.neutrongenius@gmail.com",
    hint: "Предпочтительный канал для HR и деловых запросов.",
    icon: Mail,
    actionLabel: "Написать",
  },
  {
    id: "telegram",
    label: "Telegram",
    display: "@Tatiana_Tron",
    href: "https://t.me/Tatiana_Tron",
    hint: "Быстрые уточнения и короткий контакт по срокам.",
    icon: MessageCircle,
    actionLabel: "Открыть в Telegram",
  },
  {
    id: "github",
    label: "GitHub",
    display: "github.com/TronTanya",
    href: "https://github.com/TronTanya",
    hint: "Код, кейсы и публичная активность.",
    icon: FolderGit2,
    actionLabel: "Профиль",
  },
]

export const contactTopics = [
  "AI/Data Science проектов",
  "Fullstack-разработки",
  "Образовательных инициатив",
  "Наставничества студентов",
  "Участия в хакатонах и конкурсах",
] as const
