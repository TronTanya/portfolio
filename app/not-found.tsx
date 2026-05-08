import type { Metadata } from "next"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/Button"
import { GlassCard } from "@/components/ui/GlassCard"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Страница не найдена",
  description: "Запрошенный адрес отсутствует. Вернитесь на главную или откройте раздел из меню.",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="relative mx-auto flex min-h-[min(70dvh,560px)] max-w-6xl flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <GlassCard
        interactive={false}
        className="w-full max-w-md border-white/8 p-8 text-center shadow-glass sm:p-10"
      >
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-primary/90">404</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Страница не найдена
        </h1>
        <p className="muted-text mt-3 text-pretty text-sm sm:text-base">
          Ссылка устарела или адрес набран с ошибкой. Ниже — быстрый путь на главную и к проектам.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/about" className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full sm:w-auto")}>
            На главную
          </Link>
          <Link
            href="/projects"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}
          >
            Проекты
          </Link>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">{siteConfig.name}</p>
      </GlassCard>
    </div>
  )
}
