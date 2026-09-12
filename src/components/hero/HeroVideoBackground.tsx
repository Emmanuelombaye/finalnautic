"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { brandAssets, heroTiming, heroVideos } from "@/lib/media";

const LOGO_SPLASH_BG =
  "radial-gradient(120% 100% at 50% 40%, color-mix(in oklab, var(--forest, #44564A) 82%, transparent) 0%, var(--forest, #44564A) 70%)";

const LOGO_INDEX = heroVideos.length;
const CYCLE_LENGTH = heroVideos.length + 1;

/**
 * Exact nautichealth.com hero media carousel:
 * poster under 4 looping clips → logo splash → repeat.
 * Timing: 3400ms rotate / 1200ms fade / 900ms splash lead.
 */
export default function HeroVideoBackground({
  posterSrc = brandAssets.heroPoster,
}: {
  posterSrc?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [warmSecond, setWarmSecond] = useState(false);
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
      /* ignore seek before metadata */
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

  // After first clip is playing, warm the next so the crossfade is seamless
  // without competing with the first download on open.
  useEffect(() => {
    if (reducedMotion) return;
    const first = videosRef.current[0];
    if (!first) return;

    const warm = () => {
      setWarmSecond(true);
      const second = videosRef.current[1];
      if (second && second.preload !== "auto") {
        second.preload = "auto";
        // Nudge the browser to start fetching once the first clip is underway.
        try {
          second.load();
        } catch {
          /* ignore */
        }
      }
    };

    const onPlaying = () => warm();
    if (!first.paused && first.readyState >= 2) {
      warm();
      return;
    }
    first.addEventListener("playing", onPlaying, { once: true });
    first.addEventListener("canplay", onPlaying, { once: true });
    return () => {
      first.removeEventListener("playing", onPlaying);
      first.removeEventListener("canplay", onPlaying);
    };
  }, [reducedMotion]);

  const showLogo = activeIndex === LOGO_INDEX;

  return (
    <div className="absolute inset-0 overflow-hidden bg-forest">
      {/* Native img like live site — fastest LCP under the videos */}
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
        const isActive = !reducedMotion && activeIndex === index;
        const preload =
          index === 0 ? "auto" : index === 1 && warmSecond ? "auto" : "metadata";

        return (
          <video
            key={video.id}
            ref={(el) => {
              videosRef.current[index] = el;
            }}
            className="absolute inset-0 h-full w-full object-cover object-[50%_35%] transition-opacity duration-[1200ms] ease-in-out"
            style={{ opacity: isActive ? 1 : 0 }}
            muted
            playsInline
            loop
            disablePictureInPicture
            controls={false}
            autoPlay={index === 0 && !reducedMotion}
            preload={preload}
            aria-label={video.label}
            aria-hidden={!isActive}
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
