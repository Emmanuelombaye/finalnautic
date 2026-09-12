"use client";

import { siteConfig } from "@/lib/data";
import { useState } from "react";

const inputClass =
  "w-full rounded-full border border-border bg-background px-5 py-3 text-sm text-forest outline-none focus:border-forest/60";

export default function AssessmentForm({
  showContactEmail = false,
}: {
  showContactEmail?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = (await res.json()) as { error?: string };
        throw new Error(body.error ?? "Submission failed");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section-padding border-t border-border/40">
      <div className="container-luxe max-w-xl">
        {submitted ? (
          <div className="card-surface p-8 text-center">
            <h2 className="font-serif text-2xl text-forest">Thank you for your interest</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Your intake has been received. A member of our care team will review
              your information and follow up with next steps.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card-surface space-y-6 p-8">
            <div>
              <label htmlFor="firstName" className="eyebrow">
                First Name
              </label>
              <input id="firstName" name="firstName" required className={`mt-3 ${inputClass}`} />
            </div>
            <div>
              <label htmlFor="lastName" className="eyebrow">
                Last Name
              </label>
              <input id="lastName" name="lastName" required className={`mt-3 ${inputClass}`} />
            </div>
            <div>
              <label htmlFor="email" className="eyebrow">
                Email
              </label>
              <input id="email" name="email" type="email" required className={`mt-3 ${inputClass}`} />
            </div>
            <div>
              <label htmlFor="phone" className="eyebrow">
                Phone
              </label>
              <input id="phone" name="phone" type="tel" className={`mt-3 ${inputClass}`} />
            </div>
            <div>
              <label htmlFor="treatment" className="eyebrow">
                Treatment Interest
              </label>
              <select id="treatment" name="treatment" className={`mt-3 ${inputClass}`}>
                <option value="">Not sure yet</option>
                <option value="semaglutide">Semaglutide</option>
                <option value="tirzepatide">Tirzepatide</option>
              </select>
            </div>
            <div>
              <label htmlFor="goals" className="eyebrow">
                Health Goals
              </label>
              <textarea
                id="goals"
                name="goals"
                rows={4}
                className={`mt-3 rounded-2xl ${inputClass}`}
                placeholder="Tell us about your goals and health history..."
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
              {loading ? "Submitting..." : "Submit Assessment"}
            </button>
            <p className="text-center text-xs text-sage">
              Begins a secure intake — not a purchase. Prescriptions are never guaranteed.
            </p>
          </form>
        )}

        {showContactEmail && (
          <div className="mt-12 text-center">
            <p className="text-sm text-sage">Or reach us directly at</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 inline-block text-gold hover:text-gold-light"
            >
              {siteConfig.email}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
