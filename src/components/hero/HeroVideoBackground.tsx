"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { brandAssets, heroTiming, heroVideos } from "@/lib/media";

const LOGO_SPLASH_BG =
  "radial-gradient(120% 100% at 50% 40%, color-mix(in oklab, var(--forest, #44564A) 82%, transparent) 0%, var(--forest, #44564A) 70%)";

const LOGO_INDEX = heroVideos.length;
const CYCLE_LENGTH = heroVideos.length + 1;

/**
 * Matches nautichealth.com hero carousel:
 * - muted autoplay on all viewports
 * - all clips mounted
 * - first two preload=auto, rest metadata
 * - 3400ms rotate / 1200ms fade / logo splash
 * Only reduced-motion disables video (same practical gate as live).
 */
export default function HeroVideoBackground({
  posterSrc = brandAssets.heroPoster,
}: {
  posterSrc?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videosRef = useRef<(HTMLVideoElement | null)[]>([]);
  const rotateTimerRef = useRef<number | undefined>(undefined);
  const preloadTimerRef = useRef<number | undefined>(undefined);

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return Boolean(
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches,
    );
  }, []);

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

    let cancelled = false;

    const clearTimers = () => {
      if (rotateTimerRef.current) window.clearTimeout(rotateTimerRef.current);
      if (preloadTimerRef.current) window.clearTimeout(preloadTimerRef.current);
    };

    const cycle = (current: number) => {
      const next = (current + 1) % CYCLE_LENGTH;

      preloadTimerRef.current = window.setTimeout(() => {
        if (!cancelled && next < heroVideos.length) playVideo(next);
      }, Math.max(0, heroTiming.rotateMs - heroTiming.splashLeadMs));

      rotateTimerRef.current = window.setTimeout(() => {
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
      clearTimers();
    };
  }, [playVideo, reducedMotion]);

  const showLogo = activeIndex === LOGO_INDEX;

  return (
    <div className="absolute inset-0 overflow-hidden bg-forest">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={posterSrc}
        alt="Green leaves with dew beside premium wellness vials on natural stone"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
      />

      {heroVideos.map((video, index) => {
        const isActive = activeIndex === index;
        // Live site: first two clips preload=auto, later clips metadata.
        const preload =
          index === 0 || index === 1 || isActive ? "auto" : "metadata";
        return (
          <video
            key={video.id}
            ref={(el) => {
              videosRef.current[index] = el;
            }}
            className="absolute inset-0 h-full w-full object-cover object-[50%_35%] transition-opacity duration-[1200ms] ease-in-out"
            style={{ opacity: reducedMotion ? 0 : isActive ? 1 : 0 }}
            muted
            playsInline
            loop
            disablePictureInPicture
            controls={false}
            autoPlay={index === 0 && !reducedMotion}
            preload={preload}
            aria-label={video.label}
            aria-hidden={!isActive || reducedMotion}
          >
            <source src={video.src} type="video/mp4" />
          </video>
        );
      })}

      <div
        className="absolute inset-0 grid place-items-center transition-opacity duration-[1200ms] ease-in-out"
        style={{
          opacity: showLogo ? 1 : 0,
          background: LOGO_SPLASH_BG,
        }}
        aria-hidden={!showLogo}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={brandAssets.logo}
          alt="Nautic Health — Renew. Restore. Thrive."
          width={300}
          height={89}
          loading="lazy"
          decoding="async"
          className="w-[220px] opacity-95 md:w-[300px]"
        />
      </div>
    </div>
  );
}
