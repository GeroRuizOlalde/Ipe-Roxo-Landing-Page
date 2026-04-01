import { Droplet, Pickaxe, Cpu, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { FadeIn } from "@/components/ui/fade-in"

export function SolutionsSection() {
  const solutions = [
    {
      title: "Gestión Inteligente de Agua",
      description: "Sistemas avanzados para el tratamiento, recirculación y monitoreo de recursos hídricos, garantizando eficiencia y cumplimiento normativo.",
      icon: <Droplet size={40} className="text-brand-blue" />,
      tag: "Water Technology"
    },
    {
      title: "Tecnología de Extracción",
      description: "Equipamiento y procesos optimizados para maximizar el rendimiento en yacimientos, reduciendo costos operativos y minimizando el impacto ambiental.",
      icon: <Pickaxe size={40} className="text-brand-blue" />,
      tag: "Mining Technology"
    },
    {
      title: "Automatización Industrial",
      description: "Integración de sensores IoT y software de control en tiempo real para una toma de decisiones basada en datos concretos y precisos.",
      icon: <Cpu size={40} className="text-brand-blue" />,
      tag: "Innovation"
    }
  ]

  return (
    <section id="soluciones" className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 leading-tight tracking-tight">
                Ingeniería de precisión para <br className="hidden md:block"/>
                <span className="text-brand-blue">operaciones complejas.</span>
              </h2>
            </div>
            <Link href="#contacto" className="hidden md:inline-flex items-center gap-2 text-brand-blue font-bold hover:text-brand-black transition-colors">
              Consultar por proyectos a medida <ArrowUpRight size={20} />
            </Link>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <FadeIn key={index} delay={index * 0.15} direction="up" className="h-full">
              <div className="h-full group p-8 rounded-3xl bg-brand-black/[0.02] border border-brand-black/5 hover:bg-brand-blue hover:border-brand-blue transition-all duration-300">
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-white text-brand-black/50 text-xs font-bold uppercase tracking-wider group-hover:bg-brand-white/20 group-hover:text-brand-white transition-colors">
                    {solution.tag}
                  </span>
                </div>
                <div className="mb-6 text-brand-black group-hover:text-brand-white transition-colors">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-4 group-hover:text-brand-white transition-colors">
                  {solution.title}
                </h3>
                <p className="text-lg text-brand-black/70 font-light leading-relaxed group-hover:text-brand-white/80 transition-colors">
                  {solution.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}