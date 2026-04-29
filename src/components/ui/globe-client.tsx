"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const GlobeInner = dynamic(
  () => import("@/components/ui/globe").then((m) => m.IpeRoxoGlobe),
  { ssr: false }
)

export function GlobeClient() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(window.matchMedia("(min-width: 1024px)").matches)
  }, [])

  if (!isDesktop) return null
  return <GlobeInner />
}
