import { brandAssets } from "@/lib/media";

/**
 * Home-only poster preload — same pattern as nautichealth.com
 * (preload the poster image, not the MP4s).
 */
export default function HomeMediaPreload() {
  return (
    <link
      rel="preload"
      as="image"
      href={brandAssets.heroPoster}
      type="image/webp"
    />
  );
}
