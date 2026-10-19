import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
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
    images: ["/biens/city-center.jpg"],
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={onest.variable}>
      <body>{children}</body>
    </html>
  );
}
