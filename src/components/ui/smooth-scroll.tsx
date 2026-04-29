"use client"

import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // En mobile el scroll nativo es más rápido que Lenis + RAF continuo
    if (!window.matchMedia("(min-width: 1024px)").matches) return

    const lenis = new Lenis({ lerp: 0.1, duration: 1.2, smoothWheel: true })

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
