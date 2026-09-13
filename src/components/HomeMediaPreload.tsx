import { brandAssets, heroVideos } from "@/lib/media";

/**
 * Home-only LCP hints so other routes don't pull hero media.
 * Videos preload on all viewports (same as nautichealth.com muted autoplay).
 */
export default function HomeMediaPreload() {
  const firstHeroVideo = heroVideos[0]?.src;

  return (
    <>
      <link
        rel="preload"
        as="image"
        href={brandAssets.heroPoster}
        type="image/webp"
      />
      {firstHeroVideo ? (
        <link
          rel="preload"
          as="video"
          href={firstHeroVideo}
          type="video/mp4"
          media="(prefers-reduced-motion: no-preference)"
        />
      ) : null}
    </>
  );
}
