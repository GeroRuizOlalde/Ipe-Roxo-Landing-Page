import type { Metadata } from "next";
import { Zain } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/ui/smooth-scroll"; // <-- Importamos nuestro nuevo superpoder

const zain = Zain({ 
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800", "900"],
  variable: "--font-zain",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IPE ROXO S.A. | Water & Mining Technology",
  description: "Soluciones de alto rendimiento en Water & Mining Technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // IMPORTANTE: Le sacamos el "scroll-smooth" nativo de Tailwind
    <html lang="es">
      <body 
        className={cn(
          "min-h-screen bg-brand-white text-brand-black font-zain antialiased",
          zain.variable
        )}
      >
        {/* Envolvemos la app en el proveedor de Lenis */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}