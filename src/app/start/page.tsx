"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  beginIntake,
  hasStorefrontIntake,
  resolveIntakeProduct,
} from "@/lib/vco";

/**
 * Start funnel handoff — same pattern as Pax `#/start`.
 * Usage: /start?treatment=medical-weight-loss
 */
function StartHandoff() {
  const searchParams = useSearchParams();
  const treatment = (searchParams.get("treatment") || "").trim();
  const [message, setMessage] = useState("Opening your clinical intake…");
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      if (!treatment || !hasStorefrontIntake(treatment)) {
        if (!cancelled) {
          setFailed(true);
          setMessage(
            treatment
              ? "This treatment is not connected to hosted intake yet."
              : "Choose a program first, then begin care.",
          );
        }
        return;
      }

      try {
        const product = await resolveIntakeProduct(treatment);
        if (cancelled) return;
        if (!product?.intakeUrl) {
          setFailed(true);
          setMessage("Hosted intake is not available for this program yet.");
          return;
        }
        beginIntake(product.intakeUrl);
      } catch (err) {
        if (cancelled) return;
        setFailed(true);
        setMessage(
          err instanceof Error ? err.message : "Could not open clinical intake.",
        );
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [treatment]);

  return (
    <section className="container-luxe flex min-h-[60svh] flex-col items-center justify-center py-24 text-center">
      <span className="eyebrow text-sage">Begin</span>
      <h1 className="mt-6 max-w-2xl font-serif text-4xl text-forest md:text-5xl">
        {failed ? "Intake unavailable" : "Starting your care"}
      </h1>
      <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
        {message}
      </p>
      {failed ? (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/treatments/all" className="btn-primary">
            View treatments
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact us
          </Link>
        </div>
      ) : (
        <p className="mt-10 text-[0.72rem] uppercase tracking-[0.16em] text-sage">
          Secure handoff to VirtualClinicOS
        </p>
      )}
    </section>
  );
}

export default function StartPage() {
  return (
    <Suspense
      fallback={
        <section className="container-luxe flex min-h-[60svh] items-center justify-center py-24">
          <p className="text-muted-foreground">Preparing intake…</p>
        </section>
      }
    >
      <StartHandoff />
    </Suspense>
  );
}
