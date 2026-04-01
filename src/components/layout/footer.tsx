import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-black text-brand-white pt-20 pb-10 border-t-4 border-brand-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Branding */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/Horizontal_Negro.png"
                alt="Ipe Roxo S.A."
                width={180}
                height={48}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-brand-white/60 font-light max-w-md leading-relaxed mb-6">
              Desarrollamos e implementamos tecnología de alto rendimiento para el sector Water &amp; Mining, priorizando la rentabilidad y la sustentabilidad operativa.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-white">Navegación</h4>
            <ul className="space-y-4">
              <li><Link href="#soluciones" className="text-brand-white/60 hover:text-brand-blue transition-colors font-light">Soluciones</Link></li>
              <li><Link href="#proceso" className="text-brand-white/60 hover:text-brand-blue transition-colors font-light">Proceso de Trabajo</Link></li>
              <li><Link href="#nosotros" className="text-brand-white/60 hover:text-brand-blue transition-colors font-light">Por qué IPE ROXO</Link></li>
              <li><Link href="#contacto" className="text-brand-white/60 hover:text-brand-blue transition-colors font-light">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3: Legales */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-white">Legales</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-brand-white/60 hover:text-brand-blue transition-colors font-light">Términos y Condiciones</Link></li>
              <li><Link href="#" className="text-brand-white/60 hover:text-brand-blue transition-colors font-light">Política de Privacidad</Link></li>
              <li><Link href="#" className="text-brand-white/60 hover:text-brand-blue transition-colors font-light">Políticas HSE</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-white/40 text-sm font-light">
            © {currentYear} IPE ROXO S.A. Todos los derechos reservados.
          </p>
          <p className="text-brand-white/40 text-sm font-light">
            Realizado por <span className="text-brand-white font-bold">Riva Estudio</span>
          </p>
        </div>

      </div>
    </footer>
  )
}