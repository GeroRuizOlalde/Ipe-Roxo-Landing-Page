"use client"

import dynamic from "next/dynamic"

export const RiverMiningMapClient = dynamic(
  () => import("@/components/ui/rivermap").then((m) => m.RiverMiningMap),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 w-full h-full bg-brand-white/5 rounded-3xl animate-pulse" />
    ),
  }
)
