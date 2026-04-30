import { AlertCircle, TrendingDown, Settings2 } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export function ProblemSection() {
  const problems = [
    {
      icon: <TrendingDown size={32} className="text-brand-blue" />,
      title: "Costos operativos crecientes",
      description: "La gestión ineficiente del recurso hídrico en procesos de extracción e industrialización genera pérdidas operativas, sobreconsumo de energía y mayores costos de tratamiento, impactando directamente en la rentabilidad."
    },
    {
      icon: <AlertCircle size={32} className="text-brand-blue" />,
      title: "Exigencias regulatorias en aumento",
      description: "Los marcos normativos ambientales son cada vez más estrictos y demandan mayor control y trazabilidad. Sistemas de tratamiento desactualizados comprometen el cumplimiento, elevando el riesgo de sanciones y paradas operativas."
    },
    {
      icon: <Settings2 size={32} className="text-brand-blue" />,
      title: "Infraestructura no preparada para escalar",
      description: "Sistemas aislados y tecnologías no integradas limitan la visibilidad operativa y dificultan la toma de decisiones en tiempo real, restringiendo la capacidad de expandir y optimizar las operaciones."
    }
  ]

  return (
    <section id="problema" className="py-24 bg-brand-black/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn direction="up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 leading-tight tracking-tight">
              Los desafíos actuales exigen <span className="text-brand-blue">soluciones de alto rendimiento</span>
            </h2>
            <p className="text-xl text-brand-black/60 font-light leading-relaxed">
              La industria en general y la minera en particular, enfrentan un desafío sobre la gestión del agua: mayor exigencia regulatoria, escasez del recurso y necesidad de optimizar costos y continuidad operativa. Operar con estándares del pasado ya no es viable.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <FadeIn 
              key={index} 
              delay={index * 0.15} // <-- Acá está la magia del efecto cascada
              direction="up"
              className="h-full"
            >
              <div className="h-full bg-brand-white p-8 rounded-2xl shadow-sm border border-brand-black/5 hover:border-brand-blue/20 transition-colors group">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {problem.icon}
                </div>
                <h3 className="text-2xl font-bold text-brand-black mb-4">
                  {problem.title}
                </h3>
                <p className="text-lg text-brand-black/70 font-light leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}