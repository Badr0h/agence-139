import type { Metadata } from "next";
import { Karla, Newsreader } from "next/font/google";
import "./globals.css";

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  weight: ["400", "500", "600"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agence-139.vercel.app"),
  title: "Agence 139, agence immobilière à Tanger",
  description:
    "Achat, vente et location à Tanger. Rue Amr Ibn Ass, n° 68. Écrivez sur WhatsApp pour visiter un bien.",
  openGraph: {
    title: "Agence 139, agence immobilière à Tanger",
    description:
      "Achat, vente et location à Tanger. Rue Amr Ibn Ass, n° 68. Écrivez sur WhatsApp pour visiter un bien.",
    images: ["/biens/chambre-mer.jpg"],
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${karla.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
