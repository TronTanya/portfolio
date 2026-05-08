import type { Metadata } from "next"

import { AboutView } from "@/components/about/AboutView"
import { pageMetadata } from "@/lib/seo"

export const metadata: Metadata = pageMetadata({
  title: "Главная",
  description:
    "AI, Data Science и fullstack: путь от образования к проектам, хакатонам и наставничеству студентов.",
  path: "/about",
})

export default function AboutPage() {
  return <AboutView />
}
