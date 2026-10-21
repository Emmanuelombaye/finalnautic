"use client";

import Link from "next/link";
import { assetUrl } from "@/lib/asset";
import logoFull from "@/assets/nautic-logo.png.asset.json";
import FooterTrustBadges from "@/components/FooterTrustBadges";

const navItems = [
  { to: "/treatments", label: "Treatments" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Wellness Journal" },
  { to: "/patient-portal", label: "Patient Portal" },
] as const;

const treatmentGoalNav = [
  { goal: "weight-management", label: "Weight Management" },
  { goal: "hormone-health", label: "Hormone Health" },
  { goal: "energy-longevity", label: "Energy & Longevity" },
  { goal: "recovery-performance", label: "Recovery & Performance" },
  { goal: "cognitive-wellness", label: "Cognitive Wellness" },
  { goal: "overall-optimization", label: "Overall Optimization" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-background">
      <div className="container-luxe py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" className="inline-block" aria-label="Nautic Health home">
              <img
                src={assetUrl(logoFull)}
                alt="Nautic Health"
                className="h-20 w-auto"
                width={779}
                height={232}
                loading="lazy"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A modern longevity practice for people who invest in their long-term health.
              Physician-guided. Personalized. Quiet, considered care.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Explore</p>
            <ul className="mt-5 space-y-3 text-sm text-forest/80">
              <li>
                <Link href="/" className="hover:text-forest">Home</Link>
              </li>
              {navItems.map((i) => (
                <li key={i.to}>
                  <Link href={i.to} className="hover:text-forest">{i.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">Care</p>
            <ul className="mt-5 space-y-3 text-sm text-forest/80">
              {treatmentGoalNav.map((g) => (
                <li key={g.goal}>
                  <Link href={`/treatments/${g.goal}`} className="hover:text-forest">
                    {g.label}
                  </Link>
                </li>
              ))}
              <li><Link href="/treatments/all" className="hover:text-forest">View All Treatments</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">For Partners</p>
            <ul className="mt-5 space-y-3 text-sm text-forest/80">
              <li>
                <Link href="/partners" className="hover:text-forest">Partners</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="eyebrow">CONTACT</p>
            <address className="mt-5 not-italic text-sm text-forest/80 leading-relaxed">
              {"\n"}
            </address>
            <p className="mt-4 text-sm text-forest/80">
              <a href="tel:+13105550120" className="hover:text-forest">{"\n"}</a><br />
              <a href="mailto:info@nautichealth.com" className="hover:text-forest">info@nautichealth.com</a>
            </p>
          </div>
        </div>

        <div className="hairline my-14" />

        <FooterTrustBadges />

        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Nautic Health. All rights reserved.</p>
          <div className="flex justify-center">
            <a
              href="https://www.legitscript.com/websites/?checker_keywords=nautichealth.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Verify LegitScript Approval for www.nautichealth.com"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://static.legitscript.com/seals/52248867.png"
                alt="Verify Approval for www.nautichealth.com"
                width={73}
                height={79}
              />
            </a>
          </div>
          <div className="flex gap-6">
            <Link href="/hipaa" className="hover:text-forest">HIPAA</Link>
            <Link href="/provider-network" className="hover:text-forest">Provider Network</Link>
            <Link href="/contact" className="hover:text-forest">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


