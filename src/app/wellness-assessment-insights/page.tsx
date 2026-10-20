import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wellness Assessment Insights | Nautic Health",
  description: "Internal dashboard tracking Wellness Assessment completions and care area results.",
};

export default function InsightsPage() {
  return (
    <section className="container-luxe py-20 md:py-28">
      <Link
        href="/"
        className="text-[0.72rem] uppercase tracking-[0.16em] text-sage hover:text-forest"
      >
        ← Back to home
      </Link>
      <h1 className="mt-8 font-serif text-4xl text-forest md:text-5xl">
        Wellness Assessment <em className="italic">insights</em>
      </h1>
      <p className="mt-5 max-w-2xl text-muted-foreground">
        Completions are recorded via <code className="text-forest">/api/wellness-assessment/complete</code>.
        Live charts load from <code className="text-forest">/api/wellness-assessment/insights</code> when
        Supabase service credentials are set.
      </p>
    </section>
  );
}
