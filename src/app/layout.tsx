import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nautic Health — Personalized Longevity Medicine",
  description:
    "Nautic Health is a physician-guided longevity practice designed for people who invest in their health. Personalized programs for weight, recovery, performance, and healthy aging.",
  authors: [{ name: "Nautic Health" }],
  openGraph: {
    siteName: "Nautic Health",
    title: "Nautic Health — Personalized Longevity Medicine",
    description:
      "A modern longevity practice for a longer, healthier life. Physician-guided, personalized, quietly luxurious.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  themeColor: "#FAF8F3",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col bg-background pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
            <SiteHeader />
            <main className="flex-1 pt-20">{children}</main>
            <SiteFooter />
            <StickyMobileCTA />
          </div>
        </Providers>
      </body>
    </html>
  );
}
