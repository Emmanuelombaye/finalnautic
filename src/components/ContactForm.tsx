"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-full border border-border bg-background px-5 py-3 text-sm text-forest outline-none focus:border-forest/60";

const programOptions = [
  "Semaglutide",
  "Tirzepatide",
  "Weight Management",
  "I'm not sure yet",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    data.formType = "contact";

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

  if (submitted) {
    return (
      <div className="rounded-[1.75rem] border border-border/60 bg-card p-8 text-center shadow-sm md:p-10">
        <h2 className="font-serif text-2xl text-forest">Message received</h2>
        <p className="mt-4 text-sm text-muted-foreground">
          Thank you for reaching out. Our team will respond as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-[1.75rem] border border-border/60 bg-card p-8 shadow-sm md:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="eyebrow">
            First name
          </label>
          <input id="firstName" name="firstName" required className={`mt-3 ${inputClass}`} />
        </div>
        <div>
          <label htmlFor="lastName" className="eyebrow">
            Last name
          </label>
          <input id="lastName" name="lastName" required className={`mt-3 ${inputClass}`} />
        </div>
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
        <label htmlFor="program" className="eyebrow">
          Program of interest
        </label>
        <select id="program" name="program" className={`mt-3 ${inputClass}`}>
          <option value="">Select a program</option>
          {programOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="eyebrow">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`mt-3 rounded-2xl ${inputClass}`}
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60">
        {loading ? "Sending..." : "Send message"}
      </button>
      <p className="text-xs text-sage">
        Your information is confidential and never shared. See our{" "}
        <a href="/privacy" className="underline">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}
