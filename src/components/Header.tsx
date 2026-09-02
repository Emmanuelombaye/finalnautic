"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/data";
import { brandAssets } from "@/lib/media";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background transition-all duration-700 ease-out">
      <div className="container-luxe grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-6 transition-all duration-700 ease-out lg:flex lg:justify-between">
        <Link
          href="/"
          aria-label="Nautic Health home"
          className="group flex min-w-0 items-center gap-3"
        >
          <Image
            src={brandAssets.logo}
            alt="Nautic Health"
            width={779}
            height={232}
            className="h-16 w-auto shrink-0 transition-all duration-700 ease-out"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="group nav-link">
              <span className="whitespace-nowrap">{link.label}</span>
              <span className="nav-link-underline" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center lg:flex">
          <Link
            href={siteConfig.assessmentUrl}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-forest/25 px-6 py-2.5 text-[0.74rem] font-light uppercase tracking-[0.16em] text-forest transition-all duration-500 ease-out hover:border-forest hover:shadow-[0_12px_30px_-18px_rgba(68,86,74,0.9)]"
          >
            <span
              className="absolute inset-0 origin-bottom scale-y-0 bg-forest transition-transform duration-500 ease-out group-hover:scale-y-100"
              aria-hidden
            />
            <span className="relative transition-colors duration-500 group-hover:text-background">
              Start Your Private Assessment
            </span>
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 flex-col items-center justify-center justify-self-end rounded-full border border-forest/20 transition-colors duration-500 hover:border-forest/50 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-px w-4 bg-forest transition-all duration-300 ${mobileOpen ? "translate-y-0.5 rotate-45" : "-translate-y-1"}`}
          />
          <span
            className={`block h-px w-4 bg-forest transition-all duration-300 ${mobileOpen ? "-translate-y-0.5 -rotate-45" : "translate-y-1"}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/40 bg-background lg:hidden">
          <nav className="container-luxe flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-light tracking-[0.06em] text-forest/80"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={siteConfig.assessmentUrl}
              className="btn-secondary mt-2 text-center text-xs uppercase tracking-[0.16em]"
              onClick={() => setMobileOpen(false)}
            >
              Start Your Private Assessment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
