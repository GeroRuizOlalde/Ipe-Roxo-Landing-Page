export const primaryNavLinks = [
  {
    name: "Desafios",
    homeHref: "#problema",
    globalHref: "/#problema",
  },
  {
    name: "Soluciones",
    homeHref: "#soluciones",
    globalHref: "/#soluciones",
  },
  {
    name: "Proceso",
    homeHref: "#proceso",
    globalHref: "/#proceso",
  },
  {
    name: "Nosotros",
    homeHref: "/nosotros",
    globalHref: "/nosotros",
    currentPath: "/nosotros",
  },
]

export const footerNavLinks = [
  { name: "Soluciones", href: "/#soluciones" },
  { name: "Proceso de trabajo", href: "/#proceso" },
  { name: "Ventajas IPE ROXO", href: "/#por-que-ipe-roxo" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/#contacto" },
]

export type AboutTeamMember = {
  id: string
  name: string
  role: string
  summary: string
  imageAlt: string
  imageSrc: string
  linkedinHref: string
  accent: "blue" | "green"
}

export const aboutTeamMembers: AboutTeamMember[] = [
  {
    id: "01",
    name: "Marcelo Rodriguez",
    role: "Socio",
    summary:
      "Perfil ejecutivo enfocado en articulacion comercial, desarrollo de relaciones estrategicas y acompanamiento de proyectos industriales complejos en Water & Mining.",
    imageAlt: "Retrato institucional de Marcelo Rodriguez, socio de IPE ROXO S.A.",
    imageSrc: "/executive-placeholder-01.svg",
    linkedinHref:
      "https://www.linkedin.com/in/marcelohrodriguez/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BBerkzFYNRwqngnnVpmajAA%3D%3D",
    accent: "blue",
  },
  {
    id: "02",
    name: "Pablo Grassellini",
    role: "Socio",
    summary:
      "Perfil ejecutivo orientado a coordinacion tecnica, implementacion de soluciones especializadas y seguimiento de proyectos B2B con foco en consistencia operativa.",
    imageAlt: "Retrato institucional de Pablo Grassellini, socio de IPE ROXO S.A.",
    imageSrc: "/executive-placeholder-02.svg",
    linkedinHref: "https://www.linkedin.com/in/pablo-grassellini-46270b74/",
    accent: "green",
  },
]
