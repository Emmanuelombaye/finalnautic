"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { brandAssets, heroTiming, heroVideos } from "@/lib/media";

/** Exact logo splash background from nautichealth.com hero. */
const LOGO_SPLASH_BG =
  "radial-gradient(120% 100% at 50% 40%, color-mix(in oklab, var(--forest) 82%, transparent) 0%, var(--forest) 70%)";

const LOGO_INDEX = heroVideos.length;
const CYCLE_LENGTH = heroVideos.length + 1;

/**
 * Pixel/behavior match of nautichealth.com hero media carousel
 * (routes bundle: rotate 3400 / fade 1200 / splashLead 900).
 */
export default function HeroVideoBackground({
  posterSrc = brandAssets.heroPoster,
}: {
  posterSrc?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videosRef = useRef<(HTMLVideoElement | null)[]>([]);

  const reducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      Boolean(window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches),
    [],
  );

  const playVideo = useCallback((index: number) => {
    const video = videosRef.current[index];
    if (!video) return;
    try {
      video.currentTime = 0;
    } catch {
      /* ignore */
    }
    void video.play().catch(() => undefined);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    let rotateTimer = 0;
    let preloadTimer = 0;
    let cancelled = false;

    const cycle = (current: number) => {
      const next = (current + 1) % CYCLE_LENGTH;

      preloadTimer = window.setTimeout(() => {
        if (!cancelled && next < heroVideos.length) playVideo(next);
      }, Math.max(0, heroTiming.rotateMs - heroTiming.splashLeadMs));

      rotateTimer = window.setTimeout(() => {
        if (cancelled) return;
        setActiveIndex(next);
        const currentVideo = videosRef.current[current];
        if (currentVideo) {
          window.setTimeout(() => currentVideo.pause(), heroTiming.fadeMs);
        }
        cycle(next);
      }, heroTiming.rotateMs);
    };

    playVideo(0);
    cycle(0);

    return () => {
      cancelled = true;
      window.clearTimeout(rotateTimer);
      window.clearTimeout(preloadTimer);
    };
  }, [playVideo, reducedMotion]);

  const showLogo = activeIndex === LOGO_INDEX;

  return (
    <div className="absolute inset-0 overflow-hidden bg-forest">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={posterSrc}
        alt="Green leaves with dew beside premium wellness vials on natural stone"
        className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
        width={1920}
        height={1280}
      />

      {heroVideos.map((video, index) => (
        <video
          key={video.src}
          ref={(el) => {
            videosRef.current[index] = el;
          }}
          className="absolute inset-0 h-full w-full object-cover object-[50%_35%] transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: Number(!reducedMotion && activeIndex === index) }}
          muted
          playsInline
          loop
          disablePictureInPicture
          controls={false}
          preload={index <= 1 ? "auto" : "metadata"}
          autoPlay={index === 0 && !reducedMotion}
          aria-label={video.label}
          aria-hidden={activeIndex !== index}
        >
          <source src={video.src} type="video/mp4" />
        </video>
      ))}

      <div
        className="absolute inset-0 grid place-items-center transition-opacity duration-[1200ms] ease-in-out"
        style={{
          opacity: Number(showLogo),
          background: LOGO_SPLASH_BG,
        }}
        aria-hidden={!showLogo}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={brandAssets.logoPng}
          alt="Nautic Health — Renew. Restore. Thrive."
          className="w-[220px] opacity-95 md:w-[300px]"
          loading="lazy"
        />
      </div>
    </div>
  );
}
