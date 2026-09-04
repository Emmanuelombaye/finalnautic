import Image from "next/image";
import Link from "next/link";
import { footerCareLinks, navLinks, siteConfig } from "@/lib/data";
import { brandAssets } from "@/lib/media";
import FooterTrustBadges from "@/components/FooterTrustBadges";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-background md:mt-20">
      <div className="container-luxe py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <Link href="/" aria-label="Nautic Health home" className="inline-block">
              <Image
                src={brandAssets.logo}
                alt="Nautic Health"
                width={320}
                height={95}
                sizes="180px"
                quality={80}
                className="h-20 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Physician-guided weight management with Semaglutide and Tirzepatide.
              Personalized care. Licensed provider review. Quiet, considered support.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Explore</p>
            <ul className="mt-5 space-y-3 text-sm text-forest/80">
              <li>
                <Link href="/" className="hover:text-forest">
                  Home
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-forest">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Care</p>
            <ul className="mt-5 space-y-3 text-sm text-forest/80">
              {footerCareLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className="hover:text-forest">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Legal</p>
            <ul className="mt-5 space-y-3 text-sm text-forest/80">
              <li>
                <Link href="/privacy" className="hover:text-forest">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-forest">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">CONTACT</p>
            <p className="mt-5 text-sm leading-relaxed text-forest/80">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-forest">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </div>

        <FooterTrustBadges />

        <div className="hairline my-14" />

        <div className="flex flex-col items-start justify-between gap-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-forest">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-forest">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-forest">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
