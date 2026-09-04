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
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Physician-Guided Weight Management`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Physician-guided Semaglutide and Tirzepatide weight-management programs with licensed provider review and U.S. pharmacy fulfillment when prescribed.",
  authors: [{ name: "Nautic Health" }],
  icons: {
    icon: brandAssets.favicon,
  },
  openGraph: {
    siteName: "Nautic Health",
    title: "Nautic Health — Physician-Guided Weight Management",
    description:
      "Physician-guided Semaglutide and Tirzepatide weight-management programs with licensed provider review.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nautic Health — Physician-Guided Weight Management",
    description:
      "Physician-guided Semaglutide and Tirzepatide weight-management programs with licensed provider review.",
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
      <head>
        <link
          rel="preload"
          as="image"
          href={brandAssets.heroPoster}
          type="image/webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href={brandAssets.logo}
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${inter.variable} ${cormorant.variable} min-h-screen bg-background font-sans text-forest antialiased`}
      >
        <div className="flex min-h-screen flex-col pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
          <Header />
          <main className="flex-1 pt-[4.25rem] md:pt-[4.5rem]">{children}</main>
          <Footer />
          <MobileStickyBar />
        </div>
      </body>
    </html>
  );
}
