import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AINE | Una nueva luz, un mejor futuro",
    template: "%s | AINE",
  },
  description:
    "Asociación civil que diagnostica y apoya a niños y jóvenes con neurodivergencias mediante una red integral y transdisciplinaria de profesionales de salud.",
  keywords: [
    "neurodivergencia",
    "autismo",
    "TDAH",
    "Monterrey",
    "terapia infantil",
    "diagnóstico",
    "neurodesarrollo",
    "asociación civil",
  ],
  openGraph: {
    title: "AINE | Una nueva luz, un mejor futuro",
    description:
      "Asociación civil que diagnostica y apoya a niños y jóvenes con neurodivergencias en Monterrey.",
    url: "https://aine.mx",
    siteName: "AINE",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
