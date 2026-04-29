"use client"

import { useEffect, useRef, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
}

const INITIAL_TRANSFORM: Record<NonNullable<FadeInProps["direction"]>, string> = {
  up: "translateY(40px)",
  down: "translateY(-40px)",
  left: "translateX(40px)",
  right: "translateX(-40px)",
  none: "translateY(0)",
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    // Si el elemento ya está visible en el viewport al cargar JS (contenido above-the-fold),
    // no lo ocultamos: evita que Chrome re-mida el LCP cuando el elemento reaparece.
    const { top, bottom } = el.getBoundingClientRect()
    if (top < window.innerHeight && bottom > 0) return

    el.style.opacity = "0"
    el.style.transform = INITIAL_TRANSFORM[direction]
    el.style.transition = `opacity 0.7s cubic-bezier(0.21, 0.47, 0.32, 0.98) ${delay}s, transform 0.7s cubic-bezier(0.21, 0.47, 0.32, 0.98) ${delay}s`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1"
          el.style.transform = "none"
          observer.disconnect()
        }
      },
      { rootMargin: "-100px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, direction])

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  )
}