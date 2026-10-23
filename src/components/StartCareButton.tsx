"use client";

import { useState } from "react";
import Link from "next/link";
import { beginIntake, hasStorefrontIntake, resolveIntakeProduct } from "@/lib/vco";

type Props = {
  treatmentKey?: string | null;
  className?: string;
  children: React.ReactNode;
  /** Fallback when this treatment has no VCO product yet */
  fallbackHref?: string;
};

/**
 * Primary care CTA: resolve live storefront product and redirect to intake_url.
 * Unmapped treatments fall back to contact (or a provided href).
 */
export function StartCareButton({
  treatmentKey,
  className,
  children,
  fallbackHref = "/contact",
}: Props) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const mapped = hasStorefrontIntake(treatmentKey);

  if (!mapped) {
    return (
      <Link href={fallbackHref} className={className}>
        {children}
      </Link>
    );
  }

  async function onClick() {
    if (!treatmentKey || busy) return;
    setBusy(true);
    setError(null);
    try {
      const product = await resolveIntakeProduct(treatmentKey);
      if (!product?.intakeUrl) {
        setError("Hosted intake is not available for this program yet.");
        setBusy(false);
        return;
      }
      beginIntake(product.intakeUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not open clinical intake.");
      setBusy(false);
    }
  }

  return (
    <span className="inline-flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={onClick}
        disabled={busy}
        className={className}
        aria-busy={busy}
      >
        {busy ? "Opening intake…" : children}
      </button>
      {error ? (
        <span className="max-w-xs text-center text-[0.7rem] text-destructive" role="alert">
          {error}{" "}
          <Link href={fallbackHref} className="underline underline-offset-2">
            Contact us
          </Link>
        </span>
      ) : null}
    </span>
  );
}
