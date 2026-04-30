import Link from "next/link"
import { Leaf, Gauge, Recycle, ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export function SustainabilitySection() {
  const pillars = [
    {
      icon: <Leaf size={28} className="text-brand-green" />,
      title: "Sustentabilidad operacional",
      description:
        "Integramos criterios ambientales en cada decisión de ingeniería para reducir consumo energético, emisiones y huella hídrica a lo largo de toda la operación."
    },
    {
      icon: <Gauge size={28} className="text-brand-green" />,
      title: "Eficiencia en el uso del recurso",
      description:
        "Maximizamos el aprovechamiento del agua y la energía mediante instrumentación, control de procesos y mejora continua basada en datos en tiempo real."
    },
    {
      icon: <Recycle size={28} className="text-brand-green" />,
      title: "Economía circular del agua",
      description:
        "Diseñamos esquemas de reutilización, recuperación y devolución segura del recurso, transformando efluentes en flujos productivos a escala industrial."
    }
  ]

  return (
    <section
      id="sustentabilidad"
      className="py-24 bg-brand-white relative overflow-hidden"
    >
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <FadeIn direction="up" className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green font-bold text-sm mb-6">
              <Leaf size={14} strokeWidth={2.5} />
              <span className="tracking-wide uppercase text-xs">
                Compromiso ambiental
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-brand-black leading-tight tracking-tight mb-6">
              Tecnología al servicio de la{" "}
              <span className="text-brand-green">
                economía circular del agua.
              </span>
            </h2>

            <p className="text-lg text-brand-black/70 font-light leading-relaxed mb-8">
              Concebimos cada proyecto bajo tres principios que articulan
              rentabilidad y responsabilidad ambiental: optimizar el uso del
              recurso, minimizar la huella hídrica y cerrar el ciclo del agua a
              escala industrial.
            </p>

            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 text-brand-green font-bold hover:text-brand-black transition-colors"
            >
              Hablar con nuestro equipo <ArrowRight size={18} />
            </Link>
          </FadeIn>

          <div className="lg:col-span-7 space-y-4">
            {pillars.map((pillar, i) => (
              <FadeIn key={i} delay={0.15 + i * 0.1} direction="up">
                <div className="group p-6 lg:p-7 rounded-2xl bg-brand-black/[0.02] border border-brand-black/5 hover:border-brand-green/30 hover:bg-brand-green/[0.04] transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 w-14 h-14 bg-brand-green/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {pillar.icon}
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-brand-black mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-base text-brand-black/70 font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
