import { NextResponse } from "next/server"
import { buildResumePdf } from "@/lib/resumePdf"
import { siteConfig } from "@/lib/site"

export const runtime = "nodejs"

export async function GET() {
  try {
    const bytes = await buildResumePdf()
    const filename = siteConfig.resumeDownloadFilename

    const body = Buffer.from(bytes)
    return new NextResponse(body, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Content-Length": String(body.byteLength),
        "Cache-Control": "private, max-age=3600",
      },
    })
  } catch (err) {
    console.error("[api/resume]", err)
    return NextResponse.json(
      { error: "Не удалось сформировать PDF. Проверьте, что файл шрифта есть в public/fonts." },
      { status: 500 }
    )
  }
}
