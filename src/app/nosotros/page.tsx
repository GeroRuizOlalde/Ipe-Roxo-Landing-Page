import type { Metadata } from "next"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { AboutLeadershipSection } from "@/components/sections/about-leadership"

export const metadata: Metadata = {
  title: "Nosotros | IPE ROXO S.A.",
  description:
    "Direccion ejecutiva, trayectoria y liderazgo estrategico para proyectos de Water & Mining en IPE ROXO S.A.",
}

export default function NosotrosPage() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-white text-brand-black">
      <Header />

      <div className="flex-1">
        <AboutLeadershipSection />
      </div>

      <Footer />
    </main>
  )
}
