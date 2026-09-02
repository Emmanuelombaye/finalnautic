"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { brandAssets, heroTiming, heroVideos } from "@/lib/media";

const GRADIENT_LINEAR =
  "linear-gradient(180deg, rgba(20,26,22,0.42) 0%, rgba(20,26,22,0.14) 28%, rgba(20,26,22,0.22) 62%, rgba(20,26,22,0.62) 100%)";

const GRADIENT_RADIAL =
  "radial-gradient(70% 60% at 50% 52%, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0) 70%)";

const LOGO_SPLASH_BG =
  "radial-gradient(120% 100% at 50% 40%, rgba(68, 86, 74, 0.82) 0%, #44564A 70%)";

const LOGO_INDEX = heroVideos.length;

export default function HeroVideoBackground() {
  const [activeIndex, setActiveIndex] = useState(0);
  const videosRef = useRef<(HTMLVideoElement | null)[]>([]);
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

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
    let rotateTimer: number | undefined;
    let preloadTimer: number | undefined;

    const cycle = (current: number) => {
      const next = (current + 1) % (heroVideos.length + 1);

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
      if (rotateTimer) window.clearTimeout(rotateTimer);
      if (preloadTimer) window.clearTimeout(preloadTimer);
    };
  }, [playVideo, reducedMotion]);

  const showLogo = activeIndex === LOGO_INDEX;

  return (
    <div className="absolute inset-0 overflow-hidden bg-forest">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={brandAssets.heroPoster}
        alt="Green leaves with dew beside premium wellness vials on natural stone"
        className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
        width={1920}
        height={1280}
        fetchPriority="high"
      />

      {heroVideos.map((video, index) => {
        const isActive = !reducedMotion && index === activeIndex;
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
            autoPlay={index === 0 && !reducedMotion}
            preload={index <= 1 ? "auto" : "metadata"}
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
        <Image
          src={brandAssets.logo}
          alt="Nautic Health — Renew. Restore. Thrive."
          width={779}
          height={232}
          className="w-[220px] opacity-95 md:w-[300px]"
          loading="lazy"
        />
      </div>

      <div className="absolute inset-0" style={{ background: GRADIENT_LINEAR }} />
      <div className="absolute inset-0" style={{ background: GRADIENT_RADIAL }} />
    </div>
  );
}
