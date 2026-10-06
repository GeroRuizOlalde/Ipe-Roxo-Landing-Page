"use client"

import { useState } from "react"
import { CheckCircle2, Loader2, Mail, Send, TriangleAlert } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

const INITIAL_FORM = {
  nombre: "",
  empresa: "",
  email: "",
  mensaje: "",
}

const FIELD_CLASSES =
  "w-full bg-brand-white border border-brand-black/10 rounded-xl px-4 py-3 text-brand-black outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all disabled:opacity-60"

type Status = "idle" | "sending" | "sent" | "error"

export function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState<Status>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const isSending = status === "sending"

  function updateField(field: keyof typeof INITIAL_FORM, value: string) {
    setForm((current) => ({ ...current, [field]: value }))

    if (status === "error" || status === "sent") {
      setStatus("idle")
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (isSending) return

    setStatus("sending")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await response.json().catch(() => null)

      if (!response.ok) {
        setErrorMessage(
          data?.error ?? "No pudimos enviar tu consulta. Probá de nuevo en unos minutos."
        )
        setStatus("error")
        return
      }

      setForm(INITIAL_FORM)
      setStatus("sent")
    } catch {
      setErrorMessage("No pudimos conectarnos. Revisá tu conexión e intentá otra vez.")
      setStatus("error")
    }
  }

  return (
    <section id="contacto" className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 leading-tight tracking-tight">
              Iniciemos tu próximo <br/>
              <span className="text-brand-blue">proyecto tecnológico.</span>
            </h2>
            <p className="text-xl text-brand-black/60 font-light mb-12 max-w-lg leading-relaxed">
              Nuestro equipo de ingeniería está listo para analizar tus desafíos operativos y diseñar una solución escalable a medida.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-black/[0.03] rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-black/50 uppercase tracking-wider mb-1">Email</h4>
                  <a href="mailto:iperoxo.sj@gmail.com" className="text-xl font-bold text-brand-black hover:text-brand-blue transition-colors">
                    iperoxo.sj@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="bg-brand-black/[0.02] p-8 md:p-12 rounded-3xl border border-brand-black/5 shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm font-bold text-brand-black/70">Nombre completo</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    maxLength={120}
                    disabled={isSending}
                    value={form.nombre}
                    onChange={(event) => updateField("nombre", event.target.value)}
                    className={FIELD_CLASSES}
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="empresa" className="text-sm font-bold text-brand-black/70">Empresa</label>
                  <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    maxLength={160}
                    disabled={isSending}
                    value={form.empresa}
                    onChange={(event) => updateField("empresa", event.target.value)}
                    className={FIELD_CLASSES}
                    placeholder="Nombre de la compañía"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-brand-black/70">Correo corporativo</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  maxLength={200}
                  disabled={isSending}
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className={FIELD_CLASSES}
                  placeholder="juan@empresa.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-sm font-bold text-brand-black/70">Detalles del proyecto</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  maxLength={5000}
                  disabled={isSending}
                  value={form.mensaje}
                  onChange={(event) => updateField("mensaje", event.target.value)}
                  className={`${FIELD_CLASSES} resize-none`}
                  placeholder="Contanos brevemente qué desafíos operativos buscan resolver..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 bg-brand-black text-brand-white py-4 rounded-xl text-lg font-bold hover:bg-brand-blue transition-colors group active:scale-[0.98] disabled:opacity-70 disabled:hover:bg-brand-black disabled:active:scale-100"
              >
                {isSending ? "Enviando..." : "Enviar consulta"}
                {isSending ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                )}
              </button>

              <div aria-live="polite" role="status">
                {status === "sent" && (
                  <p className="flex items-center gap-2 text-sm font-bold text-brand-blue">
                    <CheckCircle2 size={18} className="shrink-0" />
                    Recibimos tu consulta. Te respondemos a la brevedad.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-2 text-sm font-bold text-red-600">
                    <TriangleAlert size={18} className="shrink-0" />
                    {errorMessage}
                  </p>
                )}
              </div>
            </form>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
