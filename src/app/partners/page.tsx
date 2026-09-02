import Link from "next/link";
import { siteConfig } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners",
  description: "Partner with Nautic Health to deliver physician-guided wellness care.",
};

const partnerCategories = [
  "Medical practices & clinics",
  "Fitness & performance studios",
  "Corporate wellness programs",
  "Health coaches & nutritionists",
  "Aesthetic & dermatology practices",
  "Longevity & wellness brands",
];

const whyPartner = [
  {
    step: "01",
    title: "Aligned standards",
    description:
      "We partner with organizations that share our commitment to physician-guided, evidence-based care.",
  },
  {
    step: "02",
    title: "Thoughtful integration",
    description:
      "Partnerships are designed to complement existing patient relationships — not replace clinical judgment.",
  },
  {
    step: "03",
    title: "Ongoing collaboration",
    description:
      "We work with partners over time, with clear communication and shared respect for patient privacy.",
  },
  {
    step: "04",
    title: "Mutual growth",
    description:
      "The best partnerships help patients access better care while supporting sustainable business models.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-luxe section-padding pb-16">
          <p className="eyebrow mb-4">For Partners</p>
          <h1 className="heading-display max-w-4xl">
            Better Wellness Through Better Partnerships
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Nautic Health collaborates with organizations that share our commitment to
            physician-guided, personalized wellness care.
          </p>
        </div>
      </section>

      <section className="section-padding border-t border-border/40">
        <div className="container-luxe grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="heading-section">Why we partner</h2>
            <div className="mt-10 space-y-8">
              {whyPartner.map((item) => (
                <div key={item.step} className="flex gap-6">
                  <span className="font-serif text-3xl text-gold/70">{item.step}</span>
                  <div>
                    <h3 className="font-serif text-xl text-forest">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="heading-section">Who we partner with</h2>
            <ul className="mt-10 space-y-4">
              {partnerCategories.map((category) => (
                <li
                  key={category}
                  className="rounded-2xl border border-border/60 bg-card px-6 py-4 text-forest"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border/40 bg-surface/40">
        <div className="container-luxe max-w-2xl">
          <h2 className="heading-section">Partnership application</h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your organization and how you envision working together.
          </p>
          <form className="mt-10 space-y-5" action={`mailto:${siteConfig.email}`}>
            <input
              name="businessName"
              placeholder="Business name"
              className="w-full rounded-full border border-border px-5 py-3 text-sm"
            />
            <input
              name="contactName"
              placeholder="Contact name"
              className="w-full rounded-full border border-border px-5 py-3 text-sm"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full rounded-full border border-border px-5 py-3 text-sm"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your audience and partnership goals"
              className="w-full rounded-2xl border border-border px-5 py-3 text-sm"
            />
            <button type="submit" className="btn-primary">
              Submit application
            </button>
          </form>
        </div>
      </section>

      <section className="container-luxe pb-28 text-center">
        <h2 className="heading-section">Ready to explore a partnership?</h2>
        <a href={`mailto:${siteConfig.email}`} className="btn-primary mt-8 inline-flex">
          Contact Us
        </a>
      </section>
    </>
  );
}
