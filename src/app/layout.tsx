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
  metadataBase: new URL("https://aine.mx"),
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
    images: [
      {
        url: "/images/og-aine.png",
        width: 1200,
        height: 630,
        alt: "AINE — Una nueva luz, un mejor futuro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AINE | Una nueva luz, un mejor futuro",
    description:
      "Asociación civil que diagnostica y apoya a niños y jóvenes con neurodivergencias en Monterrey.",
    images: ["/images/og-aine.png"],
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
