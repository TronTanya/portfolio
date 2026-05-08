import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { GlassVideoBudgetReset } from "@/components/glass/GlassVideoBudgetReset"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { siteConfig } from "@/lib/site"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
})

const siteBase = siteConfig.url.replace(/\/$/, "")
/** Основная страница сайта — профиль (`/` перенаправляет сюда). */
const canonical = `${siteBase}/about`

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.author }],
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    url: canonical,
    siteName: siteConfig.name,
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: siteConfig.logoUrl, type: "image/png" }],
    apple: [{ url: siteConfig.logoUrl, sizes: "180x180", type: "image/png" }],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "oklch(0.055 0.012 264)" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full`}
    >
      <body className="relative z-0 flex min-h-dvh flex-col font-sans antialiased">
        <GlassVideoBudgetReset />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:shadow-lg"
        >
          Перейти к содержимому
        </a>
        <Header />
        <main id="main-content" className="relative z-10 flex-1 outline-none" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
