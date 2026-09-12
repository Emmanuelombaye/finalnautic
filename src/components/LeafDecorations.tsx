import MediaImage from "@/components/MediaImage";
import { decorativeAssets } from "@/lib/media";

/** Lightweight decorative leaves — fewer layers, optimized WebP sources. */
export default function LeafDecorations() {
  const leaves = [
    {
      src: decorativeAssets.leafSage,
      className:
        "pointer-events-none absolute -left-16 -top-12 w-56 rotate-[18deg] select-none opacity-25 md:w-72",
    },
    {
      src: decorativeAssets.leafForest,
      className:
        "pointer-events-none absolute -bottom-16 -left-10 w-48 -rotate-[24deg] select-none opacity-20 md:w-64",
    },
    {
      src: decorativeAssets.leafGold,
      className:
        "pointer-events-none absolute -right-16 top-24 w-52 rotate-[14deg] select-none opacity-25 md:w-72",
    },
    {
      src: decorativeAssets.leafSage2,
      className:
        "pointer-events-none absolute bottom-8 right-1/4 hidden w-40 rotate-[22deg] select-none opacity-20 lg:block",
    },
  ];

  return (
    <>
      {leaves.map((leaf, i) => (
        <MediaImage
          key={i}
          src={leaf.src}
          alt=""
          aria-hidden
          width={512}
          height={512}
          quality={60}
          sizes="(max-width: 768px) 224px, 288px"
          loading="lazy"
          className={leaf.className}
        />
      ))}
    </>
  );
}
