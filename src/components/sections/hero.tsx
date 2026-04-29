import Link from "next/link"
import { ArrowRight, Droplets } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { GlobeClient } from "@/components/ui/globe-client"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Contenido de Texto */}
          <FadeIn direction="up" delay={0.1} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green font-bold text-sm mb-6">
              <Droplets size={16} strokeWidth={2.5} />
              <span className="tracking-wide uppercase text-xs">Sustentabilidad Industrial</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-brand-black leading-[1.1] mb-6 tracking-tight">
              Transformando el futuro de <br/>
              <span className="text-brand-blue">Water & Mining.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-brand-black/70 font-light mb-8 max-w-lg leading-relaxed">
              Soluciones de ingeniería escalables y tecnología de precisión para optimizar tus operaciones con solidez industrial.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contacto"
                className="inline-flex justify-center items-center gap-2 bg-brand-blue text-brand-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-brand-blue/90 transition-all shadow-lg hover:shadow-brand-blue/25 hover:-translate-y-0.5 active:scale-95"
              >
                Agendar asesoría
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#soluciones"
                className="inline-flex justify-center items-center gap-2 bg-brand-white text-brand-black border-2 border-brand-black/10 px-8 py-4 rounded-xl text-lg font-bold hover:border-brand-black/20 hover:bg-brand-black/5 transition-all active:scale-95"
              >
                Ver soluciones
              </Link>
            </div>
          </FadeIn>

          {/* Contenido Visual (Globo Terráqueo Flotante) */}
          <FadeIn 
            direction="up" 
            delay={0.3} 
            // Limpiamos los bordes, fondos y sombras. Dejamos solo la estructura de posicionamiento.
            className="relative w-full aspect-square lg:aspect-[4/3] flex items-center justify-center"
          >
            
            {/* Destello sutil de fondo para darle aura y profundidad al mundo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none z-0" />
            
            {/* Nuestro globo COBE flotando */}
            <div className="relative z-10 w-full max-w-[550px] p-4 lg:p-0">
              <GlobeClient />
            </div>
            
          </FadeIn>
          
        </div>
      </div>
      
      {/* Elementos decorativos de fondo de la sección */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none -z-10" />
    </section>
  )
}