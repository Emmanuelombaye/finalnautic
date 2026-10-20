"use client";

import Link from "next/link";
import { Eyebrow } from "@/components/ui/section";
import clinicImg from "@/assets/clinic.jpg";

function Portal() {
  return (
    <section className="min-h-[80vh] grid md:grid-cols-2">
      <div className="hidden md:block relative">
        <img src={clinicImg} alt="Nautic Health clinic" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(68,86,74,0.4), rgba(68,86,74,0.65))" }} />
        <div className="relative p-16 h-full flex flex-col justify-end text-white">
          <Eyebrow><span className="text-white/70">Patient Portal</span></Eyebrow>
          <p className="mt-6 font-serif text-3xl leading-tight max-w-md">
            &ldquo;Your plan, your results, your care team — one quiet place.&rdquo;
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center p-8 md:p-16">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-sm"
        >
          <h1 className="font-serif text-4xl text-forest">Welcome back.</h1>
          <p className="mt-3 text-sm text-muted-foreground">Sign in to your Nautic Health portal.</p>

          <div className="mt-10 space-y-5">
            <div>
              <label className="eyebrow" htmlFor="email">Email</label>
              <input id="email" type="email" className="mt-3 w-full rounded-full border border-border bg-background px-5 py-3 text-sm focus:border-forest/60 outline-none" />
            </div>
            <div>
              <label className="eyebrow" htmlFor="password">Password</label>
              <input id="password" type="password" className="mt-3 w-full rounded-full border border-border bg-background px-5 py-3 text-sm focus:border-forest/60 outline-none" />
            </div>
          </div>

          <button className="btn-primary w-full mt-8" type="submit">Sign in</button>

          <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
            <a href="#" className="hover:text-forest">Forgot password?</a>
            <Link href="/wellness-assessment" className="hover:text-forest">New patient?</Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Portal;
