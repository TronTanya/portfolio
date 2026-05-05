import type { Metadata } from "next"

import { siteConfig } from "@/lib/site"

const baseUrl = () => siteConfig.url.replace(/\/$/, "")

const ogDefaults = {
  siteName: siteConfig.name,
  locale: "ru_RU" as const,
  type: "website" as const,
}

/**
 * Метаданные внутренней страницы: title попадает в шаблон `%s — ${name}` из layout.
 */
export function pageMetadata(opts: {
  title: string
  description: string
  path: string
}): Metadata {
  const url = `${baseUrl()}${opts.path.startsWith("/") ? opts.path : `/${opts.path}`}`
  const ogTitle = `${opts.title} — ${siteConfig.name}`

  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      ...ogDefaults,
      title: ogTitle,
      description: opts.description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: opts.description,
    },
  }
}

/** Главная: полный title без шаблона + тот же текст для OG. */
export const homeMetadata: Metadata = {
  title: { absolute: siteConfig.defaultTitle },
  description: siteConfig.description,
  alternates: { canonical: `${baseUrl()}/` },
  openGraph: {
    ...ogDefaults,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    url: `${baseUrl()}/`,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
  },
}
