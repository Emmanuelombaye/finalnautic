import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Nautic Health with your questions about physician-guided wellness care.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-luxe section-padding pb-16">
          <p className="eyebrow mb-4">Say hello</p>
          <h1 className="heading-display max-w-3xl">
            Your questions are the quiet first step.
          </h1>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
