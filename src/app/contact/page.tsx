"use client";

import { useState } from "react";
import clinicImg from "@/assets/clinic.jpg";
import { Eyebrow } from "@/components/ui/section";

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img src={clinicImg} alt="Nautic Health clinic" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(250,248,243,0.1), rgba(45,45,45,0.5))" }} />
        <div className="relative container-luxe pb-16 text-white">
          <Eyebrow><span className="text-white/80">Say hello</span></Eyebrow>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.02] text-white text-balance max-w-3xl">
             Your questions are the <em className="italic">quiet first step.</em>
          </h1>
        </div>
      </section>

      <section className="container-luxe py-24">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <p className="eyebrow">Direct</p>
            <div className="mt-4 text-forest/85">
              <a href="mailto:info@nautichealth.com" className="text-lg hover:text-forest">info@nautichealth.com</a>
            </div>
          </div>

          <div className="md:col-span-7">
            {sent ? (
              <div className="rounded-3xl bg-surface/60 p-12 border border-border/60">
                <h2 className="font-serif text-3xl text-forest">Thank you.</h2>
                <p className="mt-4 text-muted-foreground">
                  Your message is with our care team. We'll reply within one
                  business day — often sooner.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="rounded-3xl bg-card p-8 md:p-12 border border-border/60 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="First name" name="first" required />
                  <Field label="Last name" name="last" required />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Email" type="email" name="email" required />
                  <Field label="Phone" name="phone" />
                </div>
                <div>
                  <label className="eyebrow" htmlFor="interest">Program of interest</label>
                  <select
                    id="interest"
                    name="interest"
                    className="mt-3 w-full rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:border-forest/60"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a program</option>
                    <option>Medical Weight Loss</option>
                    <option>Longevity Medicine</option>
                    <option>Recovery & Performance</option>
                    <option>Healthy Aging</option>
                    <option>Hair & Skin Optimization</option>
                    <option>Personalized Wellness</option>
                    <option>I'm not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="eyebrow" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-3 w-full rounded-2xl border border-border bg-background px-5 py-4 text-sm outline-none focus:border-forest/60 resize-none"
                    placeholder="Tell us a little about what brought you here."
                  />
                </div>
                <button className="btn-primary" type="submit">Send message</button>
                <p className="text-xs text-muted-foreground">
                  Your information is confidential and never shared. See our privacy policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:border-forest/60"
      />
    </div>
  );
}

export default Contact;
