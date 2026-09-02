"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/data";

const inputClass =
  "w-full rounded-full border border-border bg-background px-5 py-3 text-sm text-forest outline-none focus:border-forest/60";

const goals = [
  "Weight Management",
  "Hormone Health",
  "Energy & Longevity",
  "Recovery & Performance",
  "Cognitive Wellness",
  "Overall Optimization",
  "I'm Not Sure Yet",
];

export default function MultiStepAssessment() {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const progress = step === 0 ? 20 : step === 1 ? 55 : 90;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    data.goal = goal;

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
      <section className="section-padding border-t border-border/40">
        <div className="container-luxe max-w-xl">
          <div className="card-surface p-8 text-center">
            <h2 className="font-serif text-2xl text-forest">Thank you for your interest</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Your intake has been received. A member of our care team will review your
              information and follow up with next steps.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding border-t border-border/40">
      <div className="container-luxe max-w-xl">
        <div className="mb-8 flex items-center justify-between text-sm text-muted-foreground">
          <span>Goals</span>
          <span>{progress} %</span>
        </div>
        <div className="mb-10 h-px w-full bg-border/60">
          <div className="h-px bg-gold transition-all" style={{ width: `${progress}%` }} />
        </div>

        {step === 0 && (
          <div>
            <h2 className="font-serif text-3xl text-forest">
              What are you primarily looking for support with?
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {goals.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setGoal(item)}
                  className={`rounded-full border px-5 py-2.5 text-sm transition ${
                    goal === item
                      ? "border-forest bg-forest text-background"
                      : "border-border/60 text-forest/80 hover:border-forest/40"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              type="button"
              disabled={!goal}
              onClick={() => setStep(1)}
              className="btn-primary mt-10 disabled:opacity-50"
            >
              Continue
            </button>
          </div>
        )}

        {step === 1 && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStep(2);
            }}
          >
            <h2 className="font-serif text-3xl text-forest">Tell us about you</h2>
            <div className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
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
            </div>
            <div className="mt-10 flex gap-3">
              <button type="button" onClick={() => setStep(0)} className="btn-outline">
                Back
              </button>
              <button type="submit" className="btn-primary">
                Continue
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit}>
            <h2 className="font-serif text-3xl text-forest">A few more details</h2>
            <div className="mt-8 space-y-5">
              <div>
                <label htmlFor="goals" className="eyebrow">
                  Health Goals & History
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  rows={5}
                  className={`mt-3 rounded-2xl ${inputClass}`}
                  placeholder="Share anything your provider should know..."
                />
              </div>
            </div>
            {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
            <div className="mt-10 flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="btn-outline">
                Back
              </button>
              <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60">
                {loading ? "Submitting..." : "Submit Assessment"}
              </button>
            </div>
            <p className="mt-6 text-xs text-sage">
              Your information is used to support your medical evaluation and care experience.
              Treatment is provided only when determined clinically appropriate by a licensed
              provider.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
