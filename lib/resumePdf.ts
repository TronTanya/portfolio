import fs from "node:fs/promises"
import path from "node:path"
import fontkit from "@pdf-lib/fontkit"
import { PDFDocument, rgb, type PDFFont, type PDFPage } from "pdf-lib"
import { aboutIntro } from "@/lib/about-content"
import { siteConfig } from "@/lib/site"
import { contactChannels } from "@/data/contact"
import type { EducationEntry } from "@/data/education"
import { educationSections } from "@/data/education"

function formatEducationForPdf(entry: EducationEntry, siteBase: string): string {
  const base = siteBase.replace(/\/$/, "")
  const parts = [
    entry.institution,
    `${entry.degree}. ${entry.field}`,
    entry.years,
    entry.description,
  ]
  if (entry.diplomaRequisites) parts.push(`Реквизиты диплома: ${entry.diplomaRequisites}`)
  if (entry.diplomaPdfUrl) parts.push(`Скан диплома (PDF): ${base}${entry.diplomaPdfUrl}`)
  return parts.join("\n\n")
}

const A4_W = 595
const A4_H = 842
const MARGIN = 50
const FONT_SIZE = 10
const FONT_SIZE_SECTION = 12
const FONT_SIZE_TITLE = 18
const LINE_STEP = 13
const PARAGRAPH_GAP = 5

function wrapText(text: string, maxWidth: number, fontSize: number, font: PDFFont): string[] {
  const out: string[] = []
  const paragraphs = text.split("\n")

  for (const paragraph of paragraphs) {
    if (paragraph === "") {
      out.push("")
      continue
    }

    const words = paragraph.split(/\s+/).filter((w) => w.length > 0)
    let line = ""

    const flush = () => {
      if (line) {
        out.push(line)
        line = ""
      }
    }

    const breakLongWord = (word: string): void => {
      let remaining = word
      while (remaining.length > 0) {
        let lo = 1
        let hi = remaining.length
        while (lo < hi) {
          const mid = Math.ceil((lo + hi) / 2)
          if (font.widthOfTextAtSize(remaining.slice(0, mid), fontSize) <= maxWidth) lo = mid
          else hi = mid - 1
        }
        const take = Math.max(1, lo)
        out.push(remaining.slice(0, take))
        remaining = remaining.slice(take)
      }
    }

    for (const word of words) {
      const candidate = line ? `${line} ${word}` : word
      if (font.widthOfTextAtSize(candidate, fontSize) <= maxWidth) {
        line = candidate
        continue
      }
      flush()
      if (font.widthOfTextAtSize(word, fontSize) <= maxWidth) {
        line = word
      } else {
        breakLongWord(word)
      }
    }
    flush()
    out.push("")
  }

  while (out.length > 0 && out[out.length - 1] === "") out.pop()
  return out
}

export async function buildResumePdf(): Promise<Uint8Array> {
  const pdf = await PDFDocument.create()
  pdf.registerFontkit(fontkit)

  const fontPath = path.join(process.cwd(), "public/fonts/NotoSans-Regular.ttf")
  const fontBytes = await fs.readFile(fontPath)
  const font = await pdf.embedFont(fontBytes)

  const contentW = A4_W - 2 * MARGIN
  const bottom = MARGIN
  let page: PDFPage = pdf.addPage([A4_W, A4_H])
  let y = A4_H - MARGIN

  const newPage = () => {
    page = pdf.addPage([A4_W, A4_H])
    y = A4_H - MARGIN
  }

  const ensureSpace = (lines: number) => {
    if (y - lines * LINE_STEP < bottom) newPage()
  }

  const drawLine = (text: string, size: number) => {
    ensureSpace(1)
    page.drawText(text, {
      x: MARGIN,
      y,
      size,
      font,
      color: rgb(0.08, 0.08, 0.1),
    })
    y -= LINE_STEP
  }

  const drawParagraph = (text: string, size = FONT_SIZE) => {
    const lines = wrapText(text, contentW, size, font)
    for (const line of lines) {
      if (line === "") {
        y -= LINE_STEP * 0.35
        continue
      }
      drawLine(line, size)
    }
    y -= PARAGRAPH_GAP
  }

  const drawHeading = (text: string) => {
    ensureSpace(2)
    y -= 2
    drawLine(text, FONT_SIZE_SECTION)
    y -= 2
  }

  drawLine(siteConfig.fullName, FONT_SIZE_TITLE)
  y -= 4
  drawLine(siteConfig.title, FONT_SIZE_SECTION)
  y -= LINE_STEP

  drawHeading("Личные данные")
  drawParagraph(`Дата рождения: ${siteConfig.birthDate}\nГород: ${siteConfig.city}`)

  drawHeading("О себе")
  drawParagraph(aboutIntro.join("\n\n"))

  drawHeading("Контакты")
  const contactBlock = contactChannels
    .map((c) => {
      const link = c.href ? ` — ${c.href}` : ""
      return `${c.label}: ${c.display}${link}`
    })
    .join("\n")
  drawParagraph(contactBlock)

  const higherEdu = educationSections.find((s) => s.id === "higher")?.entries[0]
  const mainEdu = educationSections.find((s) => s.id === "main")?.entries[0]
  const additionalWithDocs =
    educationSections.find((s) => s.id === "additional")?.entries.filter((e) => e.diplomaPdfUrl) ?? []

  if (higherEdu || mainEdu || additionalWithDocs.length > 0) {
    drawHeading("Образование")
    if (higherEdu) {
      drawLine("Высшее образование", FONT_SIZE_SECTION)
      y -= 2
      drawParagraph(formatEducationForPdf(higherEdu, siteConfig.url))
      y -= 4
    }
    if (mainEdu) {
      drawLine("Среднее профессиональное образование", FONT_SIZE_SECTION)
      y -= 2
      drawParagraph(formatEducationForPdf(mainEdu, siteConfig.url))
      y -= 4
    }
    if (additionalWithDocs.length > 0) {
      drawLine("Дополнительное образование", FONT_SIZE_SECTION)
      y -= 2
      for (const entry of additionalWithDocs) {
        drawParagraph(formatEducationForPdf(entry, siteConfig.url))
        y -= 4
      }
    }
  }

  y -= 6
  ensureSpace(1)
  drawLine(
    `Сформировано автоматически с портфолио · ${siteConfig.url}`,
    Math.max(7, FONT_SIZE - 2)
  )

  return pdf.save()
}
