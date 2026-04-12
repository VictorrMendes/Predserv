import type { Metadata } from "next";
import "./globals.css"; 

export const metadata: Metadata = {
  title: "Predserv | Engenharia & Reformas Civis de Alto Padrão",
  description: "A Predserv oferece soluções completas em engenharia, reformas civis, drywall, pintura e estruturas metálicas. Obras com qualidade, no prazo e sem surpresas.",
  keywords: ["Predserv", "Engenharia", "Reformas Civis", "Construção", "Drywall", "Pintura Profissional", "Estruturas Metálicas", "Juatuba", "Minas Gerais", "Obras Corporativas", "Manutenção de Ativos"],
  authors: [{ name: "Predserv Engenharia" }],
  openGraph: {
    title: "Predserv | Engenharia & Reformas",
    description: "Soluções completas em engenharia e reformas civis com excelência e precisão.",
    url: "https://www.predservengenharia.com.br",
    siteName: "Predserv Engenharia",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-gray-50 text-gray-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}