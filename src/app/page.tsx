import { Header } from "@/components/header"
import { WaitlistSection } from "@/components/waitlist-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <WaitlistSection />
      </main>
    </div>
  )
}