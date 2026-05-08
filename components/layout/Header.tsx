"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Download, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { SiteLogo } from "@/components/layout/SiteLogo"
import { Button, buttonVariants } from "@/components/ui/Button"
import { mainNav, siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

const navLinkClass =
  "transition-colors duration-200 ease-out text-muted-foreground hover:text-foreground"

const navLinkActiveClass =
  "bg-primary/12 text-foreground shadow-[inset_0_0_0_1px] shadow-primary/25"

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-background/70 shadow-[0_1px_0_0_oklch(1_0_0_/0.05)_inset] backdrop-blur-2xl supports-[backdrop-filter]:bg-background/50">
      <div className="relative z-50 mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/about"
          className="group flex min-w-0 shrink-0 items-center gap-2 rounded-lg font-semibold tracking-tight text-foreground outline-offset-2 transition-opacity duration-200 hover:opacity-95"
          aria-label={`${siteConfig.name} — на главную`}
        >
          <span
            className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-black/40 ring-1 ring-white/10 transition-[box-shadow,ring-color] duration-200 group-hover:ring-primary/35 group-hover:shadow-glow-sm"
            aria-hidden
          >
            <SiteLogo size={28} priority className="opacity-[0.98]" />
          </span>
          <span className="hidden min-w-0 flex-col leading-tight sm:flex">
            <span className="truncate">{siteConfig.name}</span>
            <span className="truncate text-[10px] font-normal text-muted-foreground">{siteConfig.title}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Основная навигация">
          {mainNav.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  navLinkClass,
                  active && navLinkActiveClass
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <a
            href={siteConfig.resumeUrl}
            download={siteConfig.resumeDownloadFilename}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "hidden gap-1.5 border-white/10 bg-surface/30 transition-colors duration-200 sm:inline-flex"
            )}
            aria-label="Скачать резюме в PDF"
          >
            <Download className="size-3.5 shrink-0" aria-hidden />
            Резюме
          </a>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "hidden transition-opacity duration-200 sm:inline-flex",
              isActive("/contact") && "ring-2 ring-ring/60 ring-offset-2 ring-offset-background"
            )}
            aria-current={isActive("/contact") ? "page" : undefined}
          >
            Контакты
          </Link>
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
          </Button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Закрыть меню"
              className="fixed inset-0 z-40 bg-background/55 backdrop-blur-[2px] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              id="mobile-nav"
              className="absolute left-0 right-0 top-full z-40 border-b border-white/6 bg-background/92 px-4 py-3 shadow-glass backdrop-blur-2xl md:hidden"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <ul className="flex flex-col gap-1">
                {mainNav.map((item) => {
                  const active = isActive(item.href)
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                            size: "default",
                            className: "w-full justify-start transition-colors duration-200",
                          }),
                          active && navLinkActiveClass
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
                <li className="mt-2 flex flex-col gap-2 border-t border-white/6 pt-3 sm:flex-row">
                  <a
                    href={siteConfig.resumeUrl}
                    download={siteConfig.resumeDownloadFilename}
                    onClick={() => setOpen(false)}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "default" }),
                      "inline-flex w-full justify-center gap-2 sm:flex-1"
                    )}
                    aria-label="Скачать резюме в PDF"
                  >
                    <Download className="size-4 shrink-0" aria-hidden />
                    Резюме PDF
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className={cn(
                      buttonVariants({ variant: "default", size: "default" }),
                      "w-full justify-center sm:flex-1"
                    )}
                  >
                    Контакты
                  </Link>
                </li>
              </ul>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
