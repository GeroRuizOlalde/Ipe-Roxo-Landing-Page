import Link from "next/link"
import Image from "next/image"
import { FadeIn } from "@/components/ui/fade-in"

export function TrustBar() {
  const partners = [
    { 
      name: "Colubris Cleantech", 
      logoImg: "/colubris-logo.svg", 
      fallbackText: "COLUBRIS", // Texto por si la imagen no carga
      url: "https://www.colubriscleantech.com/int/" 
    },
    // Podés agregar más partners acá abajo copiando la misma estructura
  ]

  return (
    <section className="py-10 border-b border-brand-black/5 bg-brand-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" delay={0.1}>
          <p className="text-center text-sm font-bold text-brand-black/40 uppercase tracking-widest mb-8">
            Agentes Exclusivos de
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {partners.map((partner, i) => (
              <Link 
                key={i} 
                href={partner.url}
                target="_blank" // Abre en pestaña nueva
                rel="noopener noreferrer" // Por seguridad al abrir links externos
                // Movimos el hover acá: cada logo pasa de gris y opaco a full color individualmente
                className=" transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105 active:scale-95"
              >
                {partner.logoImg ? (
                  <Image 
                    src={partner.logoImg} 
                    alt={`Logo ${partner.name} - Partner de IPE ROXO S.A.`} 
                    width={180} 
                    height={60} 
                    className="w-auto h-8 md:h-12 object-contain"
                  />
                ) : (
                  <div className="text-2xl font-bold text-brand-black/50 font-zain tracking-wider uppercase">
                    {partner.fallbackText}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}