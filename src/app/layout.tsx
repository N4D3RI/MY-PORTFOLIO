import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { GridOverlay } from "@/components/GridOverlay";
import { LetterboxFlash } from "@/components/LetterboxFlash";
import { ShortcutOverlay } from "@/components/ShortcutOverlay";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const SITE_URL = "https://n4d3ri.github.io";
const SITE_DESC =
  "A small library of works from South Florida — software, systems, and the occasional vehicle.";

export const metadata: Metadata = {
  title: { default: "Naderi", template: "%s · Naderi" },
  description: SITE_DESC,
  metadataBase: new URL(SITE_URL),
  applicationName: "Naderi",
  authors: [{ name: "Mohammad Naderi" }],
  keywords: [
    "Mohammad Naderi",
    "Naderi",
    "South Florida",
    "aerospace",
    "software",
    "machine learning",
    "personal site",
  ],
  openGraph: {
    type: "website",
    title: "Naderi",
    description: SITE_DESC,
    siteName: "Naderi",
  },
  twitter: {
    card: "summary",
    title: "Naderi",
    description: SITE_DESC,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${ebGaramond.variable} ${plexMono.variable}`}
    >
      <body className="antialiased min-h-screen flex flex-col">
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}.letterbox-bar{display:none!important}.signal-pulse{animation:none!important;opacity:1!important}`}</style>
        </noscript>
        <LetterboxFlash />
        <GridOverlay />
        <Nav />
        <main className="flex-1 pt-24">{children}</main>
        <Footer />
        <ShortcutOverlay />
      </body>
    </html>
  );
}
