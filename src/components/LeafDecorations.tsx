import Image from "next/image";
import { decorativeAssets } from "@/lib/media";

export default function LeafDecorations() {
  const leaves = [
    {
      src: decorativeAssets.leafSage,
      className:
        "pointer-events-none absolute -left-16 -top-12 w-72 rotate-[18deg] select-none opacity-30 md:w-96",
    },
    {
      src: decorativeAssets.leafForest,
      className:
        "pointer-events-none absolute -bottom-20 -left-12 w-64 -rotate-[24deg] select-none opacity-25 md:w-80",
    },
    {
      src: decorativeAssets.leafGold,
      className:
        "pointer-events-none absolute -right-20 top-20 w-72 rotate-[14deg] select-none opacity-30 md:w-96",
    },
    {
      src: decorativeAssets.leafSage,
      className:
        "pointer-events-none absolute -bottom-24 right-10 w-64 -rotate-[10deg] select-none opacity-25 md:w-80",
    },
    {
      src: decorativeAssets.leafForest,
      className:
        "pointer-events-none absolute -left-28 top-1/2 hidden w-80 rotate-[30deg] select-none opacity-20 lg:block",
    },
    {
      src: decorativeAssets.leafSage2,
      className:
        "pointer-events-none absolute left-1/4 top-40 w-40 -rotate-[15deg] select-none opacity-25 md:w-52",
    },
    {
      src: decorativeAssets.leafGold,
      className:
        "pointer-events-none absolute -bottom-16 right-1/3 w-44 rotate-[22deg] select-none opacity-25 md:w-56",
    },
    {
      src: decorativeAssets.leafSage2,
      className:
        "pointer-events-none absolute right-8 top-1/3 w-36 rotate-[8deg] select-none opacity-20 md:w-48",
    },
  ];

  return (
    <>
      {leaves.map((leaf, i) => (
        <Image
          key={i}
          src={leaf.src}
          alt=""
          aria-hidden
          width={1024}
          height={1024}
          loading="lazy"
          className={leaf.className}
        />
      ))}
    </>
  );
}
