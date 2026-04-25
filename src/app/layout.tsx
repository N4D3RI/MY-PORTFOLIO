import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { GridOverlay } from "@/components/GridOverlay";
import { LetterboxFlash } from "@/components/LetterboxFlash";
import { ShortcutOverlay } from "@/components/ShortcutOverlay";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
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
  "Building what comes next from South Florida. Software, systems, and the occasional vehicle.";

export const metadata: Metadata = {
  title: { default: "NADERI", template: "%s · NADERI" },
  description: SITE_DESC,
  metadataBase: new URL(SITE_URL),
  applicationName: "NADERI",
  authors: [{ name: "Mohammad Naderi" }],
  keywords: [
    "Mohammad Naderi",
    "NADERI",
    "South Florida",
    "aerospace",
    "software",
    "AI",
    "personal site",
  ],
  openGraph: {
    type: "website",
    title: "NADERI",
    description: SITE_DESC,
    siteName: "NADERI",
  },
  twitter: {
    card: "summary",
    title: "NADERI",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body className="antialiased min-h-screen flex flex-col">
        {/* No-JS fallback: surface scroll-reveal sections, suppress kinetic flourishes */}
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
