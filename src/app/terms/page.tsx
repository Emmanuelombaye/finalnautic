import { medicalDisclaimer, siteConfig } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <section className="pt-8 md:pt-10">
      <div className="container-nautic section-padding max-w-3xl">
        <h1 className="heading-section">Terms of Service</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            By using {siteConfig.name}&apos;s website and services, you agree to
            these Terms of Service.
          </p>
          <h2 className="font-serif text-xl text-forest">Medical Services</h2>
          <p>
            {siteConfig.name} provides physician-guided weight management
            programs. All treatments require evaluation and approval by a
            licensed healthcare provider. Medication is prescribed only when
            medically appropriate. Prescriptions are never guaranteed.
          </p>
          <h2 className="font-serif text-xl text-forest">Billing</h2>
          <p>
            Programs are billed monthly. You may cancel before your next billing
            date. One flat monthly price covers physician-led care, ongoing
            clinical oversight, and — if prescribed — medication dispensed by a
            U.S. pharmacy and delivered to your home.
          </p>
          <h2 className="font-serif text-xl text-forest">
            Eligibility & Availability
          </h2>
          <p>
            Treatment is subject to clinical eligibility and jurisdictional
            availability. Program details and medication availability are
            determined by your provider.
          </p>
          <h2 className="font-serif text-xl text-forest">Disclaimer</h2>
          <p>{medicalDisclaimer}</p>
          <h2 className="font-serif text-xl text-forest">Contact</h2>
          <p>
            Questions about these terms? Contact{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-gold">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
