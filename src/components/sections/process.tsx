import { Search, PenTool, Wrench, BarChart } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Auditoría Técnica",
      description: "Analizamos la infraestructura actual, identificamos cuellos de botella y evaluamos el potencial de optimización en terreno.",
      icon: <Search size={24} className="text-brand-blue" />
    },
    {
      number: "02",
      title: "Ingeniería de Proyecto",
      description: "Diseñamos una arquitectura tecnológica a medida, alineada a los objetivos de rentabilidad y normativas ambientales.",
      icon: <PenTool size={24} className="text-brand-blue" />
    },
    {
      number: "03",
      title: "Implementación",
      description: "Despliegue de equipos, sensores y software con disrupción mínima en las operaciones diarias de la planta.",
      icon: <Wrench size={24} className="text-brand-blue" />
    },
    {
      number: "04",
      title: "Monitoreo y Escala",
      description: "Soporte continuo, análisis de datos en tiempo real y ajustes de calibración para maximizar el ROI a largo plazo.",
      icon: <BarChart size={24} className="text-brand-blue" />
    }
  ]

  return (
    <section id="proceso" className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 leading-tight tracking-tight">
              Metodología probada para <br/>
              <span className="text-brand-blue">resultados predecibles.</span>
            </h2>
            <p className="text-xl text-brand-black/60 font-light leading-relaxed">
              Del diagnóstico inicial a la optimización continua. Un proceso estructurado para garantizar el éxito de cada despliegue tecnológico.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.15} direction="up" className="relative group">
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[1px] bg-brand-black/10" />
              )}
              
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-brand-black/[0.03] border border-brand-black/5 flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:border-brand-blue transition-colors duration-300">
                <span className="absolute -top-3 -right-3 text-sm font-bold text-brand-black/30 bg-brand-white px-2">
                  {step.number}
                </span>
                <div className="group-hover:text-brand-white group-hover:brightness-200 transition-all">
                  {step.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-brand-black mb-3">
                {step.title}
              </h3>
              <p className="text-base text-brand-black/70 font-light leading-relaxed">
                {step.description}
              </p>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}