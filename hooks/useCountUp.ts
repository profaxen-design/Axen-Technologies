"use client";

import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
}

/**
 * useCountUp — Animates a number from start to end when triggered.
 * Respects prefers-reduced-motion.
 */
export function useCountUp(
  options: UseCountUpOptions,
  trigger: boolean = true
) {
  const {
    end,
    duration = 2000,
    start = 0,
    decimals = 0,
    prefix = "",
    suffix = "",
    separator = "",
  } = options;

  const [value, setValue] = useState(start);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;

    // Instant display for reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const current = start + (end - start) * easedProgress;

      setValue(parseFloat(current.toFixed(decimals)));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [trigger, end, start, duration, decimals]);

  const formatNumber = (n: number) => {
    const formatted = n.toFixed(decimals);
    if (separator) {
      return formatted.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    }
    return formatted;
  };

  return `${prefix}${formatNumber(value)}${suffix}`;
}

/**
 * useIntersectionObserver — Fires once when an element enters the viewport.
 */
export function useIntersectionObserver(
  threshold = 0.3
): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref as React.RefObject<HTMLDivElement>, isVisible];
}
