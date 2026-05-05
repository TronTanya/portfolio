"use client"

import { useState } from "react"

import { Button } from "@/components/ui/Button"
import { GlassCard } from "@/components/ui/GlassCard"
import { cn } from "@/lib/utils"

const inputClass =
  "w-full rounded-lg border border-white/[0.1] bg-surface/40 px-3 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary/35 focus:ring-2 focus:ring-primary/20"

/**
 * Форма связи (сейчас только UI + клиентская валидация).
 *
 * Подключение отправки (выберите один вариант):
 * - Formspree: замените <form> на action="https://formspree.io/f/XXXX" method="POST" и уберите preventDefault.
 * - Resend / SMTP: создайте Server Action ("use server") или app/api/contact/route.ts и вызывайте fetch из onSubmit.
 * - Server Action Next.js: async function sendContact(prev, formData) + useFormState/useActionState.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false)

  return (
    <GlassCard interactive={false} className="border-white/[0.07] p-5 sm:p-6">
      <h2 className="text-lg font-semibold tracking-tight text-foreground">Сообщение</h2>
      <p className="muted-text mt-2 text-sm">
        Заполните поля — проверка на стороне браузера. Отправка на сервер пока не подключена.
      </p>

      {sent ? (
        <p
          className="mt-6 rounded-lg border border-accent-2/25 bg-accent-2/10 px-4 py-3 text-sm text-foreground/95"
          role="status"
        >
          Спасибо. В демо-режиме письмо не отправляется — подключите backend по комментарию в коде компонента.
        </p>
      ) : (
        <form
          className="mt-6 space-y-5"
          onSubmit={(e) => {
            e.preventDefault()
            if (!e.currentTarget.reportValidity()) return
            setSent(true)
            e.currentTarget.reset()
          }}
        >
          <div>
            <label htmlFor="contact-name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
              Имя
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              minLength={2}
              maxLength={120}
              placeholder="Как к вам обращаться"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              placeholder="you@company.com"
              pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
              title="Укажите корректный адрес вида name@domain.com"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
              Сообщение
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              minLength={20}
              maxLength={4000}
              rows={5}
              placeholder="Кратко опишите запрос, сроки и контекст (проект, роль, формат сотрудничества)."
              className={cn(inputClass, "resize-y min-h-[120px]")}
            />
            <p className="mt-1 text-xs text-muted-foreground">Минимум 20 символов.</p>
          </div>
          <Button type="submit" className="w-full sm:w-auto">
            Send message
          </Button>
        </form>
      )}
    </GlassCard>
  )
}
