"use client";

import { assetUrl } from "@/lib/asset";
import { useEffect, useMemo, useRef, useState } from "react";

import clip01 from "@/assets/nh-nature-01.mp4.asset.json";
import clip02 from "@/assets/nh-nature-02.mp4.asset.json";
import clip03 from "@/assets/nh-nature-03.mp4.asset.json";
import clip04 from "@/assets/nh-nature-04.mp4.asset.json";
import logoFull from "@/assets/nautic-logo.png.asset.json";

const SLIDE_MS = 3400;
const FADE_MS = 1200;
const PREROLL_MS = 900; // start the next clip before it becomes visible


const clips = [
  { url: assetUrl(clip01), label: "Green leaves with dew moving gently in soft morning light" },
  { url: assetUrl(clip02), label: "Premium unbranded wellness vials in a clean minimal setting" },
  { url: assetUrl(clip03), label: "Wellness vials blended with soft greenery and light reflections" },
  { url: assetUrl(clip04), label: "A serene composition of water, greenery and wellness vials" },
];


const TOTAL = clips.length + 1; // + closing logo beat


export function HeroReel({ poster }: { poster: string }) {
  const [index, setIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const reduceMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  // Warm up the next clip ahead of time so every crossfade — including the
  // wrap from the logo beat back to clip 1 — happens between two moving frames.
  const prime = (i: number) => {
    const v = videoRefs.current[i];
    if (!v) return;
    try {
      v.currentTime = 0;
    } catch {
      /* metadata not ready yet */
    }
    void v.play().catch(() => {});
  };

  useEffect(() => {
    if (reduceMotion) return;
    let slideTimer = 0;
    let prerollTimer = 0;
    let cancelled = false;

    const schedule = (current: number) => {
      const next = (current + 1) % TOTAL;
      prerollTimer = window.setTimeout(() => {
        if (cancelled) return;
        if (next < clips.length) prime(next);
      }, Math.max(0, SLIDE_MS - PREROLL_MS));
      slideTimer = window.setTimeout(() => {
        if (cancelled) return;
        setIndex(next);
        // keep the outgoing clip playing through the fade, then park it
        const outgoing = videoRefs.current[current];
        if (outgoing) window.setTimeout(() => outgoing.pause(), FADE_MS);
        schedule(next);
      }, SLIDE_MS);
    };

    prime(0);
    schedule(0);

    return () => {
      cancelled = true;
      window.clearTimeout(slideTimer);
      window.clearTimeout(prerollTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion]);


  return (
    <div className="absolute inset-0 overflow-hidden bg-forest">
      <img
        src={poster}
        alt="Green leaves with dew beside premium wellness vials on natural stone"
        className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
        width={1920}
        height={1280}
      />

      {clips.map((clip, i) => (
        <video
          key={clip.url}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          className="absolute inset-0 h-full w-full object-cover object-[50%_35%] transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: !reduceMotion && index === i ? 1 : 0 }}
          muted
          playsInline
          loop
          disablePictureInPicture
          controls={false}
          preload={i <= 1 ? "auto" : "metadata"}
          autoPlay={i === 0 && !reduceMotion}

          aria-label={clip.label}
          aria-hidden={index !== i}
        >
          <source src={clip.url} type="video/mp4" />
        </video>
      ))}

      {/* Closing logo beat */}
      <div
        className="absolute inset-0 grid place-items-center transition-opacity duration-[1200ms] ease-in-out"
        style={{
          opacity: index === clips.length ? 1 : 0,
          background:
            "radial-gradient(120% 100% at 50% 40%, color-mix(in oklab, var(--forest) 82%, transparent) 0%, var(--forest) 70%)",
        }}
        aria-hidden={index !== clips.length}
      >
        <img
          src={assetUrl(logoFull)}
          alt="Nautic Health — Renew. Restore. Thrive."
          className="w-[220px] md:w-[300px] opacity-95"
          loading="lazy"
        />
      </div>
    </div>
  );
}
