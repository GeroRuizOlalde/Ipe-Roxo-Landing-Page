"use client"

import dynamic from "next/dynamic"

export const GlobeClient = dynamic(
  () => import("@/components/ui/globe").then((m) => m.IpeRoxoGlobe),
  {
    ssr: false,
    loading: () => (
      <div className="w-full max-w-[550px] aspect-square rounded-full bg-brand-blue/5" />
    ),
  }
)
