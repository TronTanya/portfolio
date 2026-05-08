import { FolderGit2, Link2, Mail } from "lucide-react"
import Link from "next/link"

import { SiteLogo } from "@/components/layout/SiteLogo"
import { mainNav, siteConfig } from "@/lib/site"

const socialCandidates = [
  { href: siteConfig.links.github, label: "GitHub", icon: FolderGit2 },
  { href: siteConfig.links.linkedin, label: "LinkedIn", icon: Link2 },
  { href: siteConfig.links.email, label: "Email", icon: Mail },
] as const

const social = socialCandidates.filter((item) => Boolean(item.href?.trim()))

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 mt-auto border-t border-white/6 bg-background/50 shadow-[0_-1px_0_0_oklch(1_0_0_/0.03)_inset] backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="lg:col-span-4">
          <div className="flex items-start gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-black/35 ring-1 ring-white/8">
              <SiteLogo size={36} className="opacity-95" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold tracking-tight text-foreground">{siteConfig.name}</p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{siteConfig.tagline}</p>
            </div>
          </div>
          <ul className="mt-5 flex flex-wrap gap-3">
            {social.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="flex size-9 items-center justify-center rounded-lg border border-white/8 bg-surface/50 text-muted-foreground transition-colors duration-200 hover:border-primary/30 hover:text-primary hover:shadow-glow-sm"
                  aria-label={label}
                >
                  <Icon className="size-4" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:col-span-1 lg:col-span-5 lg:col-start-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">Навигация</p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col justify-end sm:col-span-2 lg:col-span-3">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.author}. Next.js.
          </p>
        </div>
      </div>
    </footer>
  )
}
