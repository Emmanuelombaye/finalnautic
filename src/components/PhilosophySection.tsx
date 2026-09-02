import Image from "next/image";
import { philosophyPrinciples } from "@/lib/data";
import { sectionAssets } from "@/lib/media";

export default function PhilosophySection() {
  return (
    <>
      <section className="container-luxe py-28 md:py-40">
        <div className="grid items-center gap-16 md:grid-cols-12">
          <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-3xl md:order-1 md:col-span-6">
            <Image
              src={sectionAssets.philosophy}
              alt="A quiet morning wellness ritual on a linen-draped table"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2 md:col-span-6 md:pl-8">
            <span className="inline-flex items-center gap-3">
              <span className="h-px w-6 bg-sage" />
              <span className="eyebrow">Our Philosophy</span>
            </span>
            <h2 className="mt-6 text-balance text-4xl leading-[1.05] md:text-5xl">
              Health is not the absence of illness. It&apos;s the{" "}
              <em className="italic">presence of vitality.</em>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              We believe the most sophisticated form of healthcare is proactive,
              personalized, and quiet. Not a product to sell. Not a symptom to
              chase. A partnership — grounded in modern science and respectful of
              your time — designed to compound over decades.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {philosophyPrinciples.map((item) => (
                <div key={item.title}>
                  <p className="font-serif text-lg text-forest">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-luxe">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-forest text-primary-foreground">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col justify-center p-10 md:p-16">
              <span className="inline-flex items-center gap-3">
                <span className="h-px w-6 bg-sage" />
                <span className="eyebrow text-gold">A quiet promise</span>
              </span>
              <p className="mt-6 text-balance font-serif text-3xl leading-tight text-white md:text-4xl">
                &ldquo;The most valuable thing we can offer is not another treatment.
                It&apos;s <em className="italic">a longer life spent well</em> — with
                the energy, clarity, and resilience to enjoy it.&rdquo;
              </p>
            </div>
            <div className="relative min-h-[380px] md:min-h-full">
              <Image
                src={sectionAssets.longevity}
                alt="Man running along a coastal cliff path at dawn"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
