import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import { siteConfig } from "@/lib/data";
import { brandAssets } from "@/lib/media";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Personalized Longevity Medicine`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "A modern longevity practice for people who invest in their long-term health. Physician-guided Semaglutide and Tirzepatide weight-management care.",
  authors: [{ name: "Nautic Health" }],
  icons: {
    icon: brandAssets.favicon,
  },
  openGraph: {
    siteName: "Nautic Health",
    title: "Nautic Health — Personalized Longevity Medicine",
    description:
      "A modern longevity practice for people who invest in their long-term health.",
    type: "website",
    url: "https://nautichealth.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nautic Health — Personalized Longevity Medicine",
    description:
      "A modern longevity practice for people who invest in their long-term health.",
  },
  alternates: {
    canonical: "https://nautichealth.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} min-h-screen bg-background font-sans text-forest antialiased`}
      >
        <div className="flex min-h-screen flex-col pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
          <Header />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
          <MobileStickyBar />
        </div>
      </body>
    </html>
  );
}
