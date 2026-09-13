import { brandAssets } from "@/lib/media";

/**
 * Home-only poster preload — same as nautichealth.com
 * (they preload the JPG poster, not the MP4s).
 */
export default function HomeMediaPreload() {
  return (
    <link
      rel="preload"
      as="image"
      href={brandAssets.heroPoster}
      type="image/jpeg"
    />
  );
}
