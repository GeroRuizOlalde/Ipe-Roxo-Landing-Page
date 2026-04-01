import { Mail, Phone, MapPin, Send } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 leading-tight tracking-tight">
              Iniciemos tu próximo <br/>
              <span className="text-brand-blue">proyecto tecnológico.</span>
            </h2>
            <p className="text-xl text-brand-black/60 font-light mb-12 max-w-lg leading-relaxed">
              Nuestro equipo de ingeniería está listo para analizar tus desafíos operativos y diseñar una solución escalable a medida.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-black/[0.03] rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-black/50 uppercase tracking-wider mb-1">Email</h4>
                  <a href="mailto:hola@sitioincreible.com" className="text-xl font-bold text-brand-black hover:text-brand-blue transition-colors">
                    hola@sitioincreible.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-black/[0.03] rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-black/50 uppercase tracking-wider mb-1">Teléfono</h4>
                  <p className="text-xl font-bold text-brand-black">
                    (55) 1234 5678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-black/[0.03] rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-black/50 uppercase tracking-wider mb-1">Sede Central</h4>
                  <p className="text-xl font-bold text-brand-black">
                    Calle Cualquiera 123,<br/>
                    Cualquier Lugar, CP. 12345
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="bg-brand-black/[0.02] p-8 md:p-12 rounded-3xl border border-brand-black/5 shadow-sm">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm font-bold text-brand-black/70">Nombre completo</label>
                  <input 
                    type="text" 
                    id="nombre"
                    className="w-full bg-brand-white border border-brand-black/10 rounded-xl px-4 py-3 text-brand-black outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="empresa" className="text-sm font-bold text-brand-black/70">Empresa</label>
                  <input 
                    type="text" 
                    id="empresa"
                    className="w-full bg-brand-white border border-brand-black/10 rounded-xl px-4 py-3 text-brand-black outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                    placeholder="Nombre de la compañía"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-brand-black/70">Correo corporativo</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full bg-brand-white border border-brand-black/10 rounded-xl px-4 py-3 text-brand-black outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                  placeholder="juan@empresa.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-sm font-bold text-brand-black/70">Detalles del proyecto</label>
                <textarea 
                  id="mensaje"
                  rows={4}
                  className="w-full bg-brand-white border border-brand-black/10 rounded-xl px-4 py-3 text-brand-black outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all resize-none"
                  placeholder="Contanos brevemente qué desafíos operativos buscan resolver..."
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-brand-black text-brand-white py-4 rounded-xl text-lg font-bold hover:bg-brand-blue transition-colors group active:scale-[0.98]"
              >
                Enviar consulta
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}