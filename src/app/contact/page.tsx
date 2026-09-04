import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/data";
import { sectionAssets } from "@/lib/media";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Nautic Health about physician-guided weight-management care.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative min-h-[60vh] overflow-hidden">
        <Image
          src={sectionAssets.clinic}
          alt="Nautic Health clinic interior"
          fill
          priority
          sizes="100vw"
          quality={70}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-forest/55" />
        <div className="relative flex min-h-[60vh] items-end">
          <div className="container-luxe pb-10 pt-16 md:pb-14 md:pt-20">
            <p className="eyebrow mb-4 text-gold">Say hello</p>
            <h1 className="max-w-3xl text-balance font-serif text-5xl leading-[1.05] text-primary-foreground md:text-7xl">
              Your questions are the quiet first step.
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxe grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="eyebrow">Direct</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 inline-block font-serif text-2xl text-forest transition hover:text-gold md:text-3xl"
            >
              {siteConfig.email}
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Share a question about Semaglutide, Tirzepatide, or physician-guided weight
              management. Our team responds as soon as possible.
            </p>
          </div>
          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
