"use client"

import createGlobe from "cobe"
import { useEffect, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"

// ── Data ─────────────────────────────────────────────────
const MARKERS = [
  { id: "sanjuan",  location: [  -31.54, -68.54] as [number, number], label: "San Juan",      size: 0.08 },
  { id: "holanda",  location: [   52.09,   5.12] as [number, number], label: "Países Bajos",   size: 0.06 },
]

const ARCS = [
  { from: [-31.54, -68.54] as [number, number], to: [52.09, 5.12] as [number, number], id: "sanjuan-holanda" },
]

// ── Component ────────────────────────────────────────────
export function IpeRoxoGlobe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const phiRef = useRef(4.0)
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null)

  // ── Pointer handlers ──────────────────────────────
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = e.clientX
    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grabbing"
    }
  }, [])

  const onPointerUp = useCallback(() => {
    pointerInteracting.current = null
    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grab"
    }
  }, [])

  const onPointerOut = useCallback(() => {
    pointerInteracting.current = null
    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grab"
    }
  }, [])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (pointerInteracting.current !== null) {
      const delta = e.clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      pointerInteracting.current = e.clientX
      // Convertir pixels de movimiento a radianes
      phiRef.current += delta * 0.01
    }
  }, [])

  // Touch support
  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (pointerInteracting.current !== null && e.touches.length === 1) {
      const delta = e.touches[0].clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      pointerInteracting.current = e.touches[0].clientX
      phiRef.current += delta * 0.01
    }
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const width = canvas.offsetWidth
    const dpr = Math.min(window.devicePixelRatio, 2)

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: width * dpr,
      height: width * dpr,
      phi: phiRef.current,
      theta: -0.2,

      // Globo blanco con continentes visibles
      dark: 0,
      diffuse: 1.2,
      mapSamples: 8000,
      mapBrightness: 6,
      mapBaseBrightness: 0.05,
      baseColor: [1, 1, 1],
      glowColor: [1, 1, 1],

      // Naranja
      markerColor: [0.05, 0.53, 0.85],
      markers: MARKERS.map((m) => ({
        location: m.location,
        size: m.size,
        id: m.id,
      })),

      // Arcos nativos
      arcs: ARCS.map((a) => ({
        from: a.from,
        to: a.to,
        id: a.id,
      })),
      arcColor: [0.05, 0.53, 0.85],
      arcWidth: 0.4,
      arcHeight: 0.3,
    })

    globeRef.current = globe

    // ── Animation loop ──
    let animationId: number

    function animate() {
      // Auto-rotar solo si no están arrastrando
      if (pointerInteracting.current === null) {
        phiRef.current += 0.003
      }
      globe.update({ phi: phiRef.current })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    // ── Resize ──
    const onResize = () => {
      const w = canvas.offsetWidth
      globe.update({
        width: w * dpr,
        height: w * dpr,
      })
    }
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(animationId)
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <div className={cn("relative w-full max-w-[546px] aspect-square select-none", className)}>
      <div className="relative w-full h-full">
        {/* Globe canvas con drag */}
        <canvas
          ref={canvasRef}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerOut={onPointerOut}
          onPointerMove={onPointerMove}
          onTouchMove={onTouchMove}
          style={{
            width: "100%",
            height: "100%",
            cursor: "grab",
            borderRadius: "50%",
            opacity: 1,
            transition: "opacity 1.2s",
            touchAction: "none",
          }}
        />

        {/* Labels con CSS Anchor Positioning */}
        {MARKERS.map((m) => (
          <div
            key={m.id}
            style={{
              position: "absolute",
              positionAnchor: `--cobe-${m.id}`,
              bottom: "anchor(top)",
              left: "anchor(center)",
              translate: "-50% 0",
              marginBottom: 8,
              padding: "2px 6px",
              background: "#1a1a2e",
              color: "#fff",
              fontFamily: "monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase" as const,
              whiteSpace: "nowrap",
              pointerEvents: "none" as const,
              opacity: `var(--cobe-visible-${m.id}, 0)`,
              filter: `blur(calc((1 - var(--cobe-visible-${m.id}, 0)) * 8px))`,
              transition: "opacity 0.8s, filter 0.8s",
              zIndex: 10,
            }as React.CSSProperties}
          >
            {m.label}
            <span
              style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translate(-50%, -1px)",
                border: "5px solid transparent",
                borderTopColor: "#1a1a2e",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}