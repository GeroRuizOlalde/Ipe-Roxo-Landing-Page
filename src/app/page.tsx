import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { TrustBar } from "@/components/sections/trust-bar"
import { ProblemSection } from "@/components/sections/problem"
import { SolutionsSection } from "@/components/sections/solutions"
import { MiningSection } from "@/components/sections/mining"
import { SustainabilitySection } from "@/components/sections/sustainability"
import { ProcessSection } from "@/components/sections/process"
import { WhyIpeRoxoSection } from "@/components/sections/why-ipe-roxo"
import { ContactSection } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-white text-brand-black">
      <Header /> 
      
      <div className="flex-1">
        <HeroSection />
        <TrustBar />
        <ProblemSection />
        <SolutionsSection />
        <MiningSection />
        <SustainabilitySection />
        <ProcessSection />
        <WhyIpeRoxoSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  )
}