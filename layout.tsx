import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/brand/header";
import { Footer } from "@/components/brand/footer";
import { SplashScreen } from "@/components/brand/splash-screen";
import { CursorGlow } from "@/components/brand/cursor-glow";
import { Toaster } from "@/components/ui/toast";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Agentic Portal — PwC India",
    template: "%s | Agentic Portal",
  },
  description:
    "Knowledge & reuse hub for the Agentic Automation Practice at PwC India.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable} ${jetbrainsMono.variable}`}>
      <body className="relative flex min-h-screen flex-col bg-white text-pwc-ink font-sans">
        <SplashScreen />
        <CursorGlow />
        <Header />
        <main className="relative z-[1] flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
