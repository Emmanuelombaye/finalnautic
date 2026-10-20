"use client";

import { assetUrl } from "@/lib/asset";
import Link from "next/link";
import { useState } from "react";
import botanicalImg from "@/assets/botanical-band.jpg";
import logoFull from "@/assets/nautic-logo.png.asset.json";
import { Eyebrow, SectionHeading } from "@/components/ui/section";
import { PartnerCard } from "@/components/partners/PartnerCard";
import { partners } from "@/lib/partners-content";

const benefits = [
  {
    t: "Expanded Wellness Solutions",
    d: "Partners can connect their communities with additional wellness options available through Nautic Health.",
  },
  {
    t: "Added Value for Your Clients",
    d: "Offer members, patients, and customers a physician-guided resource that complements the work you already do with them.",
  },
  {
    t: "New Revenue Opportunities",
    d: "Qualified partners may have opportunities to participate in referral or affiliate arrangements where appropriate.",
  },
  {
    t: "Long-Term Collaboration",
    d: "We want to build genuine partnerships rather than one-time promotional relationships.",
  },
];

const audiences = [
  {
    t: "Fitness",
    d: "Gyms, personal trainers, boutique fitness studios, Pilates and yoga studios.",
  },
  {
    t: "Aesthetics",
    d: "Med spas, aesthetic practices, salons, skincare professionals and beauty businesses.",
  },
  {
    t: "Recovery",
    d: "Chiropractors, physical therapy offices, massage and recovery studios.",
  },
  {
    t: "Wellness",
    d: "Nutrition professionals, wellness centers, health coaches and complementary wellness businesses.",
  },
  {
    t: "Corporate",
    d: "Employers, organizations and companies interested in wellness partnerships.",
  },
  {
    t: "Creators & Communities",
    d: "Qualified wellness, fitness, lifestyle and health-focused creators or community leaders.",
  },
];

const partnershipTypes = [
  "Referral Partner",
  "Affiliate Partner",
  "Gym / Fitness Partnership",
  "Wellness Business Partnership",
  "Corporate Wellness",
  "Creator / Influencer Partnership",
  "Event Collaboration",
  "Other",
];

const businessTypes = [
  "Gym / Fitness Studio",
  "Personal Trainer / Coach",
  "Med Spa",
  "Aesthetic Practice",
  "Chiropractic",
  "Physical Therapy / Recovery",
  "Pilates / Yoga Studio",
  "Salon / Beauty",
  "Nutrition Professional",
  "Wellness Center",
  "Health & Lifestyle Brand",
  "Employer / Organization",
  "Creator / Community",
  "Other",
];

function Partners() {
  const featured = partners.filter((p) => p.featured);
  const rest = partners.filter((p) => !p.featured);
  const ordered = [...featured, ...rest];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={botanicalImg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18]"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(250,248,243,0.92), rgba(238,243,238,0.75) 60%, rgba(250,248,243,1))",
          }}
        />
        <div className="relative container-luxe pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="max-w-3xl">
            <Eyebrow>Partners</Eyebrow>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl leading-[1.04] text-balance">
              Better Wellness Through <em className="italic">Better Partnerships</em>
            </h1>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a href="#partner-inquiry" className="btn-primary">
                Become a Partner
              </a>
            </div>
            <p className="mt-10 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-sage">
              Fitness • Wellness • Aesthetics • Recovery • Healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Our partners */}
      <section className="container-luxe py-20 md:py-28">
        <SectionHeading
          eyebrow="Our network"
          title={<>Meet Our Partners</>}
          intro="A growing network of businesses and professionals working alongside Nautic Health."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ordered.map((p) => (
            <div key={p.slug} className={p.featured ? "sm:col-span-2 lg:col-span-1" : ""}>
              <PartnerCard partner={p} />
            </div>
          ))}

          {/* Invitation card keeps the grid intentional while the network grows */}
          <article className="flex h-full flex-col justify-between rounded-3xl border border-dashed border-forest/25 bg-surface/40 p-8">
            <div>
              <p className="eyebrow">Now accepting</p>
              <h3 className="mt-5 font-serif text-2xl leading-snug">
                Your business could be here.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-forest/80">
                We review a small number of new partners each quarter to keep the
                network genuinely useful for patients.
              </p>
            </div>
            <a href="#partner-inquiry" className="mt-8 inline-flex items-center gap-2 text-sm text-forest">
              <span>Apply to become a partner</span>
              <span className="h-px w-6 bg-gold" />
            </a>
          </article>
        </div>
      </section>

      {/* Why we partner */}
      <section className="bg-surface/60 py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Why we partner"
            title={<>Stronger Together</>}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <div
                key={b.t}
                className="group rounded-3xl border border-border/60 bg-card/80 p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-forest/25"
              >
                <p className="font-serif text-lg text-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div className="hairline my-5" />
                <h3 className="font-serif text-xl leading-snug">{b.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-forest/80">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we partner with */}
      <section className="container-luxe py-20 md:py-28">
        <SectionHeading
          eyebrow="Who we partner with"
          title={<>Built for Businesses That Care About Wellness</>}
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a) => (
            <div
              key={a.t}
              className="group bg-background p-8 transition-colors duration-500 hover:bg-surface/70 md:p-10"
            >
              <h3 className="font-serif text-2xl">{a.t}</h3>
              <span className="mt-4 block h-px w-8 bg-gold transition-all duration-500 group-hover:w-14" />
              <p className="mt-5 text-sm leading-relaxed text-forest/80">{a.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="container-luxe">
        <div className="rounded-3xl bg-forest px-8 py-16 md:px-16 md:py-20">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.06] text-balance text-background">
              Interested in Partnering With Nautic Health?
            </h2>
            <p className="mt-7 text-base md:text-lg leading-relaxed text-background/75">
              We're building a selective network of businesses and professionals
              who believe in making modern wellness more accessible. If you think
              your clients, members, patients, employees, or audience would
              benefit from a relationship with Nautic Health, we'd love to hear
              from you.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#partner-inquiry"
                className="inline-flex items-center justify-center rounded-full bg-background px-7 py-3.5 text-sm text-forest transition-all duration-500 hover:bg-background/90"
              >
                Apply to Become a Partner
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-background/40 px-7 py-3.5 text-sm text-background transition-all duration-500 hover:border-background"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <PartnerInquiry />

      {/* Brand statement */}
      <section className="container-luxe py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <img
            src={assetUrl(logoFull)}
            alt="Nautic Health"
            className="mx-auto h-16 w-auto opacity-80"
            width={779}
            height={232}
            loading="lazy"
          />
          <h2 className="mt-10 font-serif text-3xl md:text-4xl leading-[1.1] text-balance">
            Building a Better Wellness Network
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Nautic Health believes better health outcomes begin with better
            access, better education, and trusted relationships.
          </p>
          <div className="hairline mt-12" />
        </div>
      </section>
    </>
  );
}

function PartnerInquiry() {
  const [sent, setSent] = useState(false);

  return (
    <section id="partner-inquiry" className="container-luxe scroll-mt-28 py-20 md:py-28">
      <div className="grid gap-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <Eyebrow>Partnership inquiry</Eyebrow>
          <h2 className="mt-6 text-3xl md:text-4xl leading-[1.08] text-balance">
            Tell us about your business.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            A few details are enough to start. Our partnerships team reviews every
            application personally and follows up when there may be a good fit.
          </p>
        </div>

        <div className="md:col-span-8">
          {sent ? (
            <div className="rounded-3xl border border-border/60 bg-surface/60 p-10 md:p-14">
              <h3 className="font-serif text-3xl">Thank you.</h3>
              <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
                Thank you for your interest in partnering with Nautic Health. Our
                team will review your information and reach out if we believe
                there may be a good fit.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-6 rounded-3xl border border-border/60 bg-card p-8 md:p-12"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="First name" name="firstName" required />
                <Field label="Last name" name="lastName" required />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Business name" name="businessName" required />
                <Select label="Business type" name="businessType" options={businessTypes} />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Website" name="website" placeholder="https://" />
                <Field label="Instagram / social media" name="social" placeholder="@" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone number" name="phone" type="tel" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="City" name="city" />
                <Field label="State" name="state" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field
                  label="Approximate audience / client size"
                  name="audienceSize"
                  placeholder="e.g. 400 members"
                />
                <Field label="How did you hear about Nautic Health?" name="referralSource" />
              </div>

              <Select
                label="How would you like to partner with Nautic Health?"
                name="partnershipType"
                options={partnershipTypes}
              />

              <div>
                <label className="eyebrow" htmlFor="notes">Additional information</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  maxLength={1500}
                  placeholder="Anything else we should know about your business or community."
                  className="mt-3 w-full resize-none rounded-2xl border border-border bg-background px-5 py-4 text-sm outline-none focus:border-forest/60"
                />
              </div>

              <label className="flex items-start gap-3 text-sm text-forest/85">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-1 h-4 w-4 shrink-0 rounded-sm border border-border accent-[var(--forest)]"
                />
                <span>
                  I agree to be contacted by Nautic Health regarding partnership
                  opportunities.
                </span>
              </label>

              <button type="submit" className="btn-primary">
                Submit Partnership Application
              </button>
              <p className="text-xs text-muted-foreground">
                Your information is confidential and never shared.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="eyebrow" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={200}
        className="mt-3 w-full rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:border-forest/60"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="eyebrow" htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-3 w-full rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:border-forest/60"
      >
        <option value="" disabled>Select an option</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

export default Partners;
