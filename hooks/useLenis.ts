"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let lenisInstance: Lenis | null = null;

/**
 * useLenis — Initialises Lenis smooth scroll, synced with GSAP ScrollTrigger.
 * Should be called once at the root layout level (client component).
 * Respects prefers-reduced-motion.
 */
export function useLenis() {
  useEffect(() => {
    // Don't run on server or with reduced motion
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisInstance = lenis;

    // Sync Lenis scroll position with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Use GSAP ticker to drive Lenis RAF
    const gsapTicker = gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(gsapTicker);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return lenisInstance;
}

/** Get the current Lenis instance (for scroll-to programmatic usage) */
export function getLenis() {
  return lenisInstance;
}
