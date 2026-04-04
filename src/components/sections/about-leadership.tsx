import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import { aboutTeamMembers } from "@/lib/constants"

const accentStyles = {
  blue: {
    badge: "bg-brand-blue/10 text-brand-blue",
    role: "text-brand-blue",
    link: "hover:text-brand-blue",
    ring: "group-hover:shadow-brand-blue/10",
  },
  green: {
    badge: "bg-brand-green/10 text-brand-green",
    role: "text-brand-green",
    link: "hover:text-brand-green",
    ring: "group-hover:shadow-brand-green/10",
  },
} as const

export function AboutLeadershipSection() {
  return (
    <section
      id="equipo"
      className="relative overflow-hidden bg-brand-white pt-32 pb-24 lg:pt-44 lg:pb-32"
    >
      <div className="absolute top-0 right-0 -translate-y-16 translate-x-1/4 w-[720px] h-[720px] rounded-full bg-brand-blue/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[560px] h-[560px] rounded-full bg-brand-green/8 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn direction="up">
          <div className="max-w-3xl mb-14 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-sm mb-6">
              <span className="tracking-wide uppercase text-xs">Direccion Ejecutiva</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-brand-black leading-[1.05] tracking-tight mb-6">
              Liderazgo estrategico para operaciones que exigen criterio tecnico y ejecucion.
            </h1>

            <p className="text-xl lg:text-2xl text-brand-black/70 font-light max-w-2xl leading-relaxed">
              Combinamos experiencia local en San Juan con el respaldo de tecnologia global para
              estructurar decisiones solidas, acelerar implementaciones y sostener proyectos Water
              &amp; Mining con mirada industrial.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {aboutTeamMembers.map((member, index) => {
            const accent = accentStyles[member.accent]

            return (
              <FadeIn
                key={member.id}
                delay={index * 0.12}
                direction="up"
                className="h-full"
              >
                <article
                  className={`group flex h-full flex-col rounded-[32px] border border-brand-black/5 bg-brand-black/[0.02] p-5 sm:p-6 lg:p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${accent.ring}`}
                >
                  <div className="relative mb-6 overflow-hidden rounded-[28px] bg-brand-black aspect-[4/4.8]">
                    {/* La imagen parte en blanco y negro y recupera su color al pasar por toda la tarjeta. */}
                    <Image
                      src={member.imageSrc}
                      alt={member.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover grayscale opacity-90 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/45 via-brand-black/5 to-transparent pointer-events-none" />

                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-white/85 text-brand-black/60 backdrop-blur-sm">
                      <span className="text-xs font-bold tracking-[0.22em] uppercase">
                        Socio {member.id}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <div
                      className={`inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full font-bold text-sm mb-5 ${accent.badge}`}
                    >
                      <span className="tracking-wide uppercase text-xs">Perfil Ejecutivo</span>
                    </div>

                    <h2 className="text-3xl lg:text-[2rem] font-bold text-brand-black mb-2 leading-tight">
                      {member.name}
                    </h2>
                    <p className={`text-lg font-bold mb-5 ${accent.role}`}>{member.role}</p>
                    <p className="text-lg text-brand-black/70 font-light leading-relaxed mb-8">
                      {member.summary}
                    </p>

                    <Link
                      href={member.linkedinHref}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2 text-brand-black font-bold transition-colors mt-auto ${accent.link}`}
                    >
                      Conectar en LinkedIn
                      <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
