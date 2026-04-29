"use client"

import dynamic from "next/dynamic"
import { FadeIn } from "@/components/ui/fade-in"

const RiverMiningMap = dynamic(
  () => import("@/components/ui/rivermap").then((m) => m.RiverMiningMap),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 w-full h-full bg-brand-white/5 rounded-3xl animate-pulse" />
    ),
  }
)

export function MiningSection() {
  const stats = [
    { value: "40%", label: "Reducción en consumo de agua" },
    { value: "99.9%", label: "Uptime operativo" },
    { value: "ISO", label: "Estándares internacionales" },
  ]

  return (
    <section className="py-24 bg-brand-black text-brand-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
              Minería Inteligente y <br/>
              <span className="text-brand-green">Sostenible.</span>
            </h2>
            <p className="text-xl text-brand-white/70 font-light mb-10 leading-relaxed max-w-lg">
              La rentabilidad no debe comprometer el futuro. Implementamos tecnología que optimiza la extracción mientras protege el entorno, alineando tus operaciones con las exigencias medioambientales globales.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 border-t border-brand-white/10 pt-10">
              {stats.map((stat, i) => (
                <FadeIn key={i} delay={i * 0.15} direction="up">
                  <div className="text-4xl font-bold text-brand-green mb-2">{stat.value}</div>
                  <div className="text-sm font-light text-brand-white/60 leading-tight">{stat.label}</div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-brand-white/10">
            <RiverMiningMap className="absolute inset-0 w-full h-full" />
          </FadeIn>

        </div>
      </div>
    </section>
  )
}