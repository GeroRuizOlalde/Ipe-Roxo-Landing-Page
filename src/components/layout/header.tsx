"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { primaryNavLinks } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isAboutPage = pathname === "/nosotros"
  const contactHref = isAboutPage ? "/#contacto" : "#contacto"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = primaryNavLinks.map((link) => ({
    ...link,
    href: isAboutPage ? link.globalHref : link.homeHref,
    isCurrent: pathname === link.currentPath,
  }))

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-brand-white/80 backdrop-blur-md border-brand-black/10 shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center z-50">
            <Image
              src="/Horizontal_Negro.png"
              alt="Logo IPE ROXO S.A. - Water & Mining Technology"
              width={200}
              height={60}
              className="w-auto h-10 md:h-12 object-contain"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={link.isCurrent ? "page" : undefined}
                className={cn(
                  "text-base font-medium transition-colors",
                  link.isCurrent
                    ? "text-brand-blue"
                    : "text-brand-black/70 hover:text-brand-blue"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href={contactHref}
              className="bg-brand-blue text-brand-white px-6 py-2.5 rounded-full text-base font-bold hover:bg-brand-blue/90 hover:scale-[1.02] transition-all shadow-md"
            >
              Agendar asesoria
            </Link>
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-brand-black z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Alternar menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-white border-b border-brand-black/10 shadow-xl py-6 px-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-current={link.isCurrent ? "page" : undefined}
              className="text-lg font-medium text-brand-black p-3 hover:bg-brand-blue/5 hover:text-brand-blue rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4 mt-2 border-t border-brand-black/5">
            <Link
              href={contactHref}
              className="block w-full bg-brand-blue text-brand-white text-center px-5 py-4 rounded-lg text-lg font-bold shadow-md active:scale-95 transition-transform"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Agendar asesoria
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
