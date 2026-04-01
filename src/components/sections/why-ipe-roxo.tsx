import { ShieldCheck, Zap, Globe, Award } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export function WhyIpeRoxoSection() {
  return (
    <section id="nosotros" className="py-24 bg-brand-black/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn direction="up">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 leading-tight tracking-tight">
              Por qué elegir a <span className="text-brand-blue">IPE ROXO.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          
          {/* Card 1 */}
          <FadeIn delay={0.1} className="md:col-span-2 lg:col-span-2 row-span-2 p-8 rounded-3xl bg-brand-black text-brand-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-blue/30 transition-colors" />
            <ShieldCheck size={48} className="text-brand-blue mb-8 relative z-10" />
            <h3 className="text-3xl font-bold mb-4 relative z-10">Confiabilidad Estructural</h3>
            <p className="text-lg text-brand-white/70 font-light leading-relaxed relative z-10">
              Nuestros sistemas están diseñados con redundancia militar para soportar los entornos industriales más hostiles. Cero tolerancia a fallos en operaciones críticas.
            </p>
          </FadeIn>

          {/* Card 2 */}
          <FadeIn delay={0.2} className="md:col-span-1 lg:col-span-2 p-8 rounded-3xl bg-brand-white border border-brand-black/5 flex flex-col justify-center shadow-sm">
            <Globe size={32} className="text-brand-green mb-4" />
            <h3 className="text-2xl font-bold text-brand-black mb-2">Alcance Regional</h3>
            <p className="text-base text-brand-black/70 font-light">
              Capacidad de despliegue e integración en yacimientos a lo largo de todo el territorio, con soporte logístico asegurado.
            </p>
          </FadeIn>

          {/* Card 3 */}
          <FadeIn delay={0.3} className="p-8 rounded-3xl bg-brand-blue text-brand-white flex flex-col justify-center shadow-sm hover:scale-[1.02] transition-transform">
            <Zap size={32} className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">Despliegue Ágil</h3>
            <p className="text-base text-brand-white/80 font-light">
              Implementaciones un 30% más rápidas que el estándar del mercado.
            </p>
          </FadeIn>

          {/* Card 4 */}
          <FadeIn delay={0.4} className="p-8 rounded-3xl bg-brand-white border border-brand-black/5 flex flex-col justify-center shadow-sm">
            <Award size={32} className="text-brand-blue mb-4" />
            <h3 className="text-2xl font-bold text-brand-black mb-2">Certificaciones</h3>
            <p className="text-base text-brand-black/70 font-light">
              Cumplimiento estricto con normativas ISO y regulaciones ambientales vigentes.
            </p>
          </FadeIn>

        </div>

      </div>
    </section>
  )
}