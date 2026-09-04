import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import { journeySteps } from "@/lib/data";

/** Homepage Patient Journey — matches nautichealth.com five-step mockup cards. */
export default function JourneySection() {
  return (
    <section id="patient-journey" className="container-luxe pb-14 pt-14 md:pb-20 md:pt-20">
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-3">
          <span className="h-px w-6 bg-sage" />
          <span className="eyebrow">The Patient Journey</span>
        </span>
        <h2 className="mt-6 text-balance text-4xl leading-[1.05] md:text-5xl">
          Five steps to a <em className="italic">better decade.</em>
        </h2>
      </div>

      <div className="mt-10 grid md:mt-12 grid gap-10 md:grid-cols-5">
        {journeySteps.map((step, index) => {
          const isLast = index === journeySteps.length - 1;
          return (
            <div key={step.step} className="relative flex flex-col">
              {!isLast && (
                <>
                  <span
                    className="absolute left-16 right-[-24px] top-1/2 hidden h-px bg-forest/15 md:block"
                    aria-hidden
                  />
                  <span className="absolute -right-6 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-green/30 bg-green/10 text-green shadow-sm md:grid">
                    <ChevronRight className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="mx-auto -mb-7 mt-1 grid h-8 w-8 place-items-center rounded-full border border-green/30 bg-green/10 text-green shadow-sm md:hidden">
                    <ChevronDown className="h-4 w-4" aria-hidden />
                  </span>
                </>
              )}

              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  width={1024}
                  height={1280}
                  sizes="(max-width: 768px) 100vw, 20vw"
                  priority={index < 2}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-black/25 font-serif text-lg text-white backdrop-blur-sm">
                  {step.step}
                </div>
              </div>
              <h3 className="mt-6 font-serif text-xl text-forest">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
