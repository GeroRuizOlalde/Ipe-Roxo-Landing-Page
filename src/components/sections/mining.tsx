import { FadeIn } from "@/components/ui/fade-in"
import { RiverMiningMapClient } from "@/components/ui/rivermap-client"

export function MiningSection() {
  const stats = [
    { value: "40%", label: "Reducción en consumo de agua" },
    { value: "99.9%", label: "Disponibilidad operativa(uptime)" },
    { value: "ISO", label: "Cumplimiento con estándares internacionales(ISO y Normativa ambiental aplicable)" },
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
              La rentabilidad y la sustentabilidad deben avanzar en conjunto. Implementamos soluciones tecnológicas que optimizan el uso del agua, mejoran la eficiencia de los procesos y reducen el impacto ambiental, alineando las operaciones con los estándares internacionales más exigentes.
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
            <RiverMiningMapClient className="absolute inset-0 w-full h-full" />
          </FadeIn>

        </div>
      </div>
    </section>
  )
}