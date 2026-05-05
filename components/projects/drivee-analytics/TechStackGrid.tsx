import { driveeCase } from "@/data/drivee-case-study"
import { TechBadge } from "@/components/ui/TechBadge"

export function TechStackGrid() {
  return (
    <section>
      <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-primary/90">
        Технологии
      </h2>
      <p className="muted-text mt-2 max-w-2xl text-sm">
        Стек, на котором держится продукт и воспроизводимость деплоя.
      </p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {driveeCase.technologies.map((t) => (
          <li key={t}>
            <TechBadge variant="subtle" className="normal-case tracking-normal">
              {t}
            </TechBadge>
          </li>
        ))}
      </ul>
    </section>
  )
}
