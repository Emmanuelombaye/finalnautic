"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { footerCareLinks, navLinks, siteConfig } from "@/lib/data";
import { brandAssets } from "@/lib/media";
import FooterTrustBadges from "@/components/FooterTrustBadges";

type FooterGroup = {
  id: string;
  title: string;
  links: { label: string; href: string }[];
};

const groups: FooterGroup[] = [
  {
    id: "explore",
    title: "Explore",
    links: [{ label: "Home", href: "/" }, ...navLinks],
  },
  {
    id: "care",
    title: "Care",
    links: footerCareLinks,
  },
  {
    id: "legal",
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

/**
 * Hims-style footer: accordion link stacks on mobile, clean columns on desktop.
 */
export default function Footer() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <footer className="mt-16 border-t border-border/50 bg-background md:mt-20">
      <div className="container-luxe px-6 pb-10 pt-12 md:px-10 md:pb-12 md:pt-16">
        {/* Brand strip */}
        <div className="max-w-md">
          <Link href="/" aria-label="Nautic Health home" className="inline-block">
            <Image
              src={brandAssets.logo}
              alt="Nautic Health"
              width={320}
              height={95}
              sizes="160px"
              quality={80}
              className="h-14 w-auto md:h-16"
            />
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
            Physician-guided weight management with Semaglutide and Tirzepatide.
            Licensed provider review. Quiet, considered care.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-4 inline-block text-sm text-forest/80 underline decoration-forest/20 underline-offset-4 transition hover:text-forest hover:decoration-forest/50"
          >
            {siteConfig.email}
          </a>
        </div>

        {/* Mobile accordion (Hims pattern) */}
        <div className="mt-10 border-t border-border/40 md:hidden">
          {groups.map((group) => {
            const open = openId === group.id;
            return (
              <div key={group.id} className="border-b border-border/40">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 text-left touch-manipulation"
                  aria-expanded={open}
                  onClick={() => toggle(group.id)}
                >
                  <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-forest">
                    {group.title}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-forest/60 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-3 pb-5 text-sm text-forest/75">
                      {group.links.map((link) => (
                        <li key={link.href + link.label}>
                          <Link
                            href={link.href}
                            className="block py-0.5 active:text-forest"
                            onClick={() => setOpenId(null)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop columns */}
        <div className="mt-12 hidden gap-0 border-t border-border/40 pt-10 md:grid md:grid-cols-3">
          {groups.map((group, index) => (
            <div
              key={group.id}
              className={`px-0 ${index > 0 ? "md:border-l md:border-border/40 md:pl-10" : "md:pr-10"}`}
            >
              <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-sage">
                {group.title}
              </p>
              <ul className="mt-5 space-y-3 text-sm text-forest/80">
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="transition hover:text-forest">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <FooterTrustBadges />

        <div className="mt-8 border-t border-border/40 pt-6 md:mt-10 md:pt-8">
          <div className="flex flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/privacy" className="hover:text-forest">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-forest">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-forest">
                Contact
              </Link>
              <Link href={siteConfig.assessmentUrl} className="hover:text-forest">
                Start Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
