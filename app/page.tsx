import { FocusAreas } from "@/components/home/FocusAreas"
import { HeroSection } from "@/components/home/HeroSection"
import { StatsStrip } from "@/components/home/StatsStrip"
import { homeMetadata } from "@/lib/seo"

export const metadata = homeMetadata

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <FocusAreas />
    </>
  )
}
