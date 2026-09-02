import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { sectionAssets } from "@/lib/media";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Portal",
  description: "Sign in to your Nautic Health patient portal.",
  robots: { index: false },
};

export default function PatientPortalPage() {
  return (
    <section className="grid min-h-[80vh] md:grid-cols-2">
      <div className="relative hidden md:block">
        <Image
          src={sectionAssets.clinic}
          alt="Nautic Health clinic"
          fill
          sizes="50vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(68,86,74,0.4), rgba(68,86,74,0.65))",
          }}
        />
        <div className="relative flex h-full flex-col justify-end p-16 text-white">
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-sage" />
            <span className="eyebrow text-white/70">Patient Portal</span>
          </span>
          <p className="mt-6 max-w-md font-serif text-3xl leading-tight">
            &ldquo;Your plan, your results, your care team — one quiet place.&rdquo;
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center p-8 md:p-16">
        <form className="w-full max-w-sm" action={siteConfig.assessmentUrl}>
          <h1 className="font-serif text-4xl text-forest">Welcome back.</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Sign in to your Nautic Health portal.
          </p>
          <div className="mt-10 space-y-5">
            <div>
              <label htmlFor="email" className="eyebrow">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-3 w-full rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:border-forest/60"
              />
            </div>
            <div>
              <label htmlFor="password" className="eyebrow">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="mt-3 w-full rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:border-forest/60"
              />
            </div>
            <p className="text-right text-sm">
              <a href="#" className="text-forest/70 underline-offset-4 hover:underline">
                Forgot password?
              </a>
            </p>
          </div>
          <button type="submit" className="btn-primary mt-10 w-full">
            Sign In
          </button>
          <p className="mt-4 text-center text-sm text-muted-foreground">New patient?</p>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            <Link href={siteConfig.assessmentUrl} className="text-forest underline-offset-4 hover:underline">
              Start your assessment
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
