import { NextResponse } from "next/server"
import { Resend } from "resend"

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "iperoxo.sj@gmail.com"
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev"

const MAX_LENGTHS = {
  nombre: 120,
  empresa: 160,
  email: 200,
  mensaje: 5000,
} as const

type ContactField = keyof typeof MAX_LENGTHS

function readField(body: Record<string, unknown>, field: ContactField) {
  const value = body[field]
  return typeof value === "string" ? value.trim() : ""
}

export async function POST(request: Request) {
  let body: Record<string, unknown>

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 })
  }

  const nombre = readField(body, "nombre")
  const empresa = readField(body, "empresa")
  const email = readField(body, "email")
  const mensaje = readField(body, "mensaje")

  if (!nombre || !email || !mensaje) {
    return NextResponse.json(
      { error: "Completá tu nombre, tu correo y los detalles del proyecto." },
      { status: 400 }
    )
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Revisá el correo ingresado." }, { status: 400 })
  }

  const tooLong = (Object.keys(MAX_LENGTHS) as ContactField[]).some(
    (field) => readField(body, field).length > MAX_LENGTHS[field]
  )

  if (tooLong) {
    return NextResponse.json({ error: "El mensaje es demasiado largo." }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.error("[contact] Falta la variable de entorno RESEND_API_KEY")
    return NextResponse.json(
      { error: "El formulario no está disponible en este momento." },
      { status: 500 }
    )
  }

  try {
    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
      from: `Web IPE ROXO <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Nueva consulta de ${nombre}${empresa ? ` (${empresa})` : ""}`,
      text: [
        `Nombre: ${nombre}`,
        `Empresa: ${empresa || "-"}`,
        `Correo: ${email}`,
        "",
        "Detalles del proyecto:",
        mensaje,
      ].join("\n"),
    })

    if (error) {
      console.error("[contact] Resend rechazó el envío:", error)
      return NextResponse.json(
        { error: "No pudimos enviar tu consulta. Probá de nuevo en unos minutos." },
        { status: 502 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[contact] Error inesperado al enviar la consulta:", error)
    return NextResponse.json(
      { error: "No pudimos enviar tu consulta. Probá de nuevo en unos minutos." },
      { status: 500 }
    )
  }
}
