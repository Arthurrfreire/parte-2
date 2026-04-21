import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-bricolage",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700", "800"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asimov.academy"),
  title: {
    default: "Curso de Python com IA | Asimov Academy",
    template: "%s | Asimov Academy",
  },
  description:
    "Aprenda Python do zero e construa projetos reais com IA em um curso pratico, direto ao ponto e com suporte da comunidade.",
  keywords: [
    "curso de Python",
    "Python para iniciantes",
    "Python com IA",
    "curso de inteligencia artificial",
    "Asimov Academy",
  ],
  alternates: {
    canonical: "/curso-python-ia",
  },
  openGraph: {
    title: "Aprenda Python do zero e construa projetos reais com IA",
    description:
      "O curso mais pratico do Brasil para quem quer entrar em tecnologia sem enrolacao.",
    url: "/curso-python-ia",
    siteName: "Asimov Academy",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Curso de Python com IA | Asimov Academy",
    description:
      "Projetos com Python + IA desde o modulo 1, comunidade ativa e certificado.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${bricolage.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
