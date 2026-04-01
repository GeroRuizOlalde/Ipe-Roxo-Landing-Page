"use client"

import { useState, useEffect } from "react"

// ── Data ─────────────────────────────────────────────────
const OPERATIONS = [
  { id: "op1", name: "Planta Calingasta", type: "Extracción", x: 180, y: 145, status: "active" as const },
  { id: "op2", name: "Estación Hídrica Norte", type: "Tratamiento", x: 340, y: 260, status: "active" as const },
  { id: "op3", name: "Mina Pachón", type: "Exploración", x: 520, y: 180, status: "pending" as const },
  { id: "op4", name: "Reservorio Jáchal", type: "Monitoreo", x: 680, y: 310, status: "active" as const },
]

const RIVER_PATH =
  "M 60 20 C 100 60, 140 100, 160 140 S 200 200, 180 240 S 140 300, 200 340 S 280 360, 300 400 S 340 440, 320 480 S 280 540, 340 580 S 400 600, 420 640 S 480 680, 500 720 S 540 760, 560 800"
const TRIBUTARY_1 = "M 20 180 C 60 190, 100 170, 140 180 S 170 200, 180 240"
const TRIBUTARY_2 = "M 450 200 C 400 230, 360 250, 340 280 S 310 320, 300 400"
const TRIBUTARY_3 = "M 100 500 C 150 510, 200 530, 260 550 S 300 570, 340 580"

// ── Sub-components ───────────────────────────────────────

function WaterParticles({
  path,
  count = 12,
  speed = 20,
  delay = 0,
}: {
  path: string
  count?: number
  speed?: number
  delay?: number
}) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const dur = speed + i * 0.8
        const begin = delay + (i * speed) / count
        return (
          <circle key={i} r="2.5" fill="#3b9fe8" opacity="0.7">
            <animateMotion dur={`${dur}s`} repeatCount="indefinite" begin={`${begin}s`} path={path} />
            <animate
              attributeName="opacity"
              values="0;0.8;0.6;0.8;0"
              dur={`${dur}s`}
              repeatCount="indefinite"
              begin={`${begin}s`}
            />
            <animate
              attributeName="r"
              values="1.5;3;2;3;1.5"
              dur={`${dur}s`}
              repeatCount="indefinite"
              begin={`${begin}s`}
            />
          </circle>
        )
      })}
    </>
  )
}

function ContourLines() {
  const contours = [
    "M 30 80 C 80 60, 150 90, 220 70 S 300 100, 380 80",
    "M 50 160 C 110 140, 180 170, 250 150 S 340 180, 430 155",
    "M 10 320 C 70 300, 120 340, 200 310 S 280 350, 380 320",
    "M 80 420 C 140 400, 210 440, 290 410 S 370 450, 460 420",
    "M 40 540 C 100 520, 170 560, 250 530 S 340 570, 440 540",
    "M 120 650 C 180 630, 250 670, 330 640 S 420 680, 520 650",
    "M 60 730 C 120 710, 190 750, 270 720 S 360 760, 460 730",
    "M 200 100 C 260 80, 330 120, 410 90 S 490 130, 560 100",
    "M 250 250 C 310 230, 380 270, 460 240 S 530 280, 580 260",
    "M 180 460 C 240 440, 310 480, 390 450 S 470 490, 560 460",
    "M 300 580 C 360 560, 430 600, 510 570 S 560 610, 580 600",
  ]
  return (
    <>
      {contours.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="rgba(120,160,140,0.12)" strokeWidth="1" strokeDasharray={i % 3 === 0 ? "none" : "4 6"}>
          <animate attributeName="stroke-opacity" values="0.08;0.15;0.08" dur={`${8 + i * 0.7}s`} repeatCount="indefinite" />
        </path>
      ))}
    </>
  )
}

function MountainShading() {
  return (
    <>
      <defs>
        <radialGradient id="mtn1" cx="30%" cy="15%" r="35%">
          <stop offset="0%" stopColor="rgba(80,100,70,0.15)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="mtn2" cx="70%" cy="35%" r="30%">
          <stop offset="0%" stopColor="rgba(90,80,60,0.12)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="mtn3" cx="25%" cy="65%" r="25%">
          <stop offset="0%" stopColor="rgba(70,90,65,0.1)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="mtn4" cx="75%" cy="80%" r="28%">
          <stop offset="0%" stopColor="rgba(85,75,55,0.12)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="600" height="820" fill="url(#mtn1)" />
      <rect width="600" height="820" fill="url(#mtn2)" />
      <rect width="600" height="820" fill="url(#mtn3)" />
      <rect width="600" height="820" fill="url(#mtn4)" />
    </>
  )
}

function OperationMarker({
  op,
  onHover,
  onLeave,
}: {
  op: (typeof OPERATIONS)[number]
  onHover: () => void
  onLeave: () => void
}) {
  const isActive = op.status === "active"
  const color = isActive ? "#d97706" : "#6b7280"

  return (
    <g transform={`translate(${op.x}, ${op.y})`} onMouseEnter={onHover} onMouseLeave={onLeave} style={{ cursor: "pointer" }}>
      {isActive && (
        <circle r="16" fill="none" stroke={color} strokeWidth="1" opacity="0.4">
          <animate attributeName="r" values="8;20;8" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
        </circle>
      )}
      <circle r="8" fill="none" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <circle r="4" fill={color}>
        {isActive && <animate attributeName="r" values="3.5;4.5;3.5" dur="2s" repeatCount="indefinite" />}
      </circle>
      <line x1="-12" y1="0" x2="-6" y2="0" stroke={color} strokeWidth="1" opacity="0.4" />
      <line x1="6" y1="0" x2="12" y2="0" stroke={color} strokeWidth="1" opacity="0.4" />
      <line x1="0" y1="-12" x2="0" y2="-6" stroke={color} strokeWidth="1" opacity="0.4" />
      <line x1="0" y1="6" x2="0" y2="12" stroke={color} strokeWidth="1" opacity="0.4" />
    </g>
  )
}

// ── Main component ───────────────────────────────────────

export function RiverMiningMap({ className }: { className?: string }) {
  const [hoveredOp, setHoveredOp] = useState<string | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200)
    return () => clearTimeout(t)
  }, [])

  const hoveredData = OPERATIONS.find((o) => o.id === hoveredOp)

  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        fontFamily: "'DM Mono', monospace",
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 1s ease, transform 1s ease",
      }}
    >
      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: "16px 20px",
          zIndex: 20,
          background: "linear-gradient(to bottom, rgba(10,15,13,0.9) 0%, transparent 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
          <div
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "#3b9fe8",
              boxShadow: "0 0 8px rgba(59,159,232,0.6)",
            }}
          />
          <span style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(160,190,175,0.7)" }}>
            Monitoreo en tiempo real
          </span>
        </div>
        <h3 style={{ fontSize: 13, fontWeight: 500, color: "rgba(220,235,225,0.9)", margin: 0, letterSpacing: "0.02em" }}>
          Cuenca Hídrica · San Juan
        </h3>
      </div>

      {/* SVG Map */}
      <svg viewBox="0 0 600 820" style={{ width: "100%", height: "100%", display: "block" }} preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0d1510" />
            <stop offset="50%" stopColor="#0a0f0d" />
            <stop offset="100%" stopColor="#0d1210" />
          </linearGradient>
          <filter id="riverGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.06" />
            </feComponentTransfer>
            <feBlend in="SourceGraphic" mode="multiply" />
          </filter>
        </defs>

        <rect width="600" height="820" fill="url(#bgGrad)" />
        <MountainShading />

        {/* Grid */}
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 41} x2="600" y2={i * 41} stroke="rgba(100,140,120,0.06)" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 43} y1="0" x2={i * 43} y2="820" stroke="rgba(100,140,120,0.06)" strokeWidth="0.5" />
        ))}

        <ContourLines />

        {/* River layers */}
        <path d={RIVER_PATH} fill="none" stroke="rgba(41,128,185,0.15)" strokeWidth="20" filter="url(#softGlow)" />
        <path d={TRIBUTARY_1} fill="none" stroke="rgba(41,128,185,0.2)" strokeWidth="2" strokeLinecap="round" />
        <path d={TRIBUTARY_2} fill="none" stroke="rgba(41,128,185,0.2)" strokeWidth="2.5" strokeLinecap="round" />
        <path d={TRIBUTARY_3} fill="none" stroke="rgba(41,128,185,0.15)" strokeWidth="1.5" strokeLinecap="round" />
        <path d={RIVER_PATH} fill="none" stroke="rgba(41,128,185,0.35)" strokeWidth="6" strokeLinecap="round" filter="url(#riverGlow)" />
        <path d={RIVER_PATH} fill="none" stroke="rgba(59,159,232,0.5)" strokeWidth="3" strokeLinecap="round" />
        <path d={RIVER_PATH} fill="none" stroke="rgba(120,200,255,0.3)" strokeWidth="1" strokeLinecap="round" />

        {/* Water particles */}
        <WaterParticles path={RIVER_PATH} count={15} speed={22} />
        <WaterParticles path={TRIBUTARY_1} count={5} speed={18} delay={2} />
        <WaterParticles path={TRIBUTARY_2} count={6} speed={20} delay={1} />
        <WaterParticles path={TRIBUTARY_3} count={4} speed={16} delay={3} />

        {/* Markers */}
        {OPERATIONS.map((op) => (
          <OperationMarker key={op.id} op={op} onHover={() => setHoveredOp(op.id)} onLeave={() => setHoveredOp(null)} />
        ))}

        {/* Coords */}
        <text x="8" y="815" fill="rgba(120,160,140,0.3)" fontSize="8" fontFamily="monospace">31°45&apos;S</text>
        <text x="540" y="815" fill="rgba(120,160,140,0.3)" fontSize="8" fontFamily="monospace">68°30&apos;W</text>
        <text x="8" y="14" fill="rgba(120,160,140,0.3)" fontSize="8" fontFamily="monospace">30°15&apos;S</text>

        <rect width="600" height="820" filter="url(#noise)" opacity="0.4" />
      </svg>

      {/* Tooltip */}
      {hoveredData && (
        <div
          style={{
            position: "absolute",
            left: `calc(${(hoveredData.x / 600) * 100}% + 16px)`,
            top: `calc(${(hoveredData.y / 820) * 100}%)`,
            padding: "8px 12px",
            background: "rgba(10,15,13,0.95)",
            border: "1px solid rgba(217,119,6,0.3)",
            borderRadius: 6,
            zIndex: 30,
            pointerEvents: "none",
            backdropFilter: "blur(8px)",
            minWidth: 150,
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 500, color: "#d97706", marginBottom: 2 }}>{hoveredData.name}</div>
          <div style={{ fontSize: 9, color: "rgba(160,190,175,0.7)", letterSpacing: "0.06em" }}>
            {hoveredData.type.toUpperCase()}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
            <div
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: hoveredData.status === "active" ? "#22c55e" : "#6b7280",
              }}
            />
            <span style={{ fontSize: 9, color: "rgba(160,190,175,0.5)" }}>
              {hoveredData.status === "active" ? "Operativo" : "En exploración"}
            </span>
          </div>
        </div>
      )}

      {/* Bottom legend */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "24px 20px 12px",
          background: "linear-gradient(to top, rgba(10,15,13,0.95) 0%, transparent 100%)",
          zIndex: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div style={{ display: "flex", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 16, height: 2, background: "rgba(59,159,232,0.6)", borderRadius: 1 }} />
            <span style={{ fontSize: 8, color: "rgba(160,190,175,0.5)", letterSpacing: "0.06em" }}>CUENCA</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#d97706" }} />
            <span style={{ fontSize: 8, color: "rgba(160,190,175,0.5)", letterSpacing: "0.06em" }}>OPERACIÓN</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#6b7280" }} />
            <span style={{ fontSize: 8, color: "rgba(160,190,175,0.5)", letterSpacing: "0.06em" }}>EXPLORACIÓN</span>
          </div>
        </div>
        <span style={{ fontSize: 7, color: "rgba(120,160,140,0.3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Ipe Roxo S.A.
        </span>
      </div>
    </div>
  )
}