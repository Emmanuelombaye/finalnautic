import { MapPinned, PackageCheck, Stethoscope } from "lucide-react";

const trustItemClasses = [
  "flex min-h-10 items-center gap-2 px-3 py-1.5 sm:justify-center",
  "flex min-h-10 items-center gap-2 px-3 py-1.5 sm:justify-center border-l border-white/20 sm:border-l sm:border-white/20",
  "flex min-h-10 items-center gap-2 px-3 py-1.5 sm:justify-center border-t border-white/20 sm:border-t-0 sm:border-l sm:border-white/20",
];

export const heroTrustItems = [
  { label: "Licensed Medical Providers", icon: Stethoscope },
  { label: "U.S. Pharmacy Fulfillment", icon: PackageCheck },
  { label: "Care in All 50 States", icon: MapPinned },
] as const;

export function HeroTrustList() {
  return (
    <ul className="mx-auto mt-6 grid max-w-3xl grid-cols-1 border-y border-white/20 py-3 text-left text-[0.65rem] text-white/75 sm:grid-cols-3 sm:text-center md:text-[0.7rem]">
      {heroTrustItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <li key={item.label} className={trustItemClasses[index]}>
            <Icon
              className="h-3.5 w-3.5 shrink-0 text-gold"
              strokeWidth={1.6}
              aria-hidden
            />
            <span className="leading-snug">{item.label}</span>
          </li>
        );
      })}
    </ul>
  );
}
