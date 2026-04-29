"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"

const RiverMiningMapInner = dynamic(
  () => import("@/components/ui/rivermap").then((m) => m.RiverMiningMap),
  { ssr: false }
)

export function RiverMiningMapClient({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: "300px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {inView && <RiverMiningMapInner className="absolute inset-0 w-full h-full" />}
    </div>
  )
}
