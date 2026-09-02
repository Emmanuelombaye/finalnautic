import { siteConfig } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 lg:pt-40">
      <div className="container-nautic section-padding max-w-3xl">
        <h1 className="heading-section">Privacy Policy</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, and safeguard your
            personal and health information.
          </p>
          <h2 className="font-serif text-xl text-forest">
            Information We Collect
          </h2>
          <p>
            We collect information you provide during your medical intake,
            including name, contact details, health history, and treatment
            preferences. We may also collect diagnostic results and provider
            communications related to your care.
          </p>
          <h2 className="font-serif text-xl text-forest">
            How We Use Your Information
          </h2>
          <p>
            Your information is used to evaluate treatment eligibility, provide
            physician-guided care, fulfill prescriptions when medically
            appropriate, and communicate with you about your treatment plan.
          </p>
          <h2 className="font-serif text-xl text-forest">HIPAA Compliance</h2>
          <p>
            We maintain appropriate safeguards to protect your protected health
            information (PHI) in accordance with applicable healthcare privacy
            regulations.
          </p>
          <h2 className="font-serif text-xl text-forest">Contact</h2>
          <p>
            For privacy-related inquiries, contact us at{" "}
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
