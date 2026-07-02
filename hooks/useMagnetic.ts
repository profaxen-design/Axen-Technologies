"use client";

import { useEffect, useRef } from "react";
import type { RefObject } from "react";

interface UseMagneticOptions {
  strength?: number;
  ease?: number;
}

/**
 * useMagnetic — Applies a magnetic pull effect to an element based on cursor proximity.
 * Automatically disabled on touch/mobile devices.
 */
export function useMagnetic<T extends HTMLElement>(
  options: UseMagneticOptions = {}
): RefObject<T> {
  const { strength = 0.35, ease = 0.12 } = options;
  const ref = useRef<T>(null);
  const rafRef = useRef<number | null>(null);
  const posRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(hover: none)").matches) return;
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    const pos = posRef.current;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const radius = Math.max(rect.width, rect.height) * 1.5;

      if (dist < radius) {
        const factor = (1 - dist / radius) * strength;
        pos.tx = dx * factor;
        pos.ty = dy * factor;
      } else {
        pos.tx = 0;
        pos.ty = 0;
      }
    };

    const animate = () => {
      pos.x += (pos.tx - pos.x) * ease;
      pos.y += (pos.ty - pos.y) * ease;
      if (el) {
        el.style.transform = `translate(${pos.x.toFixed(2)}px, ${pos.y.toFixed(2)}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    const onMouseLeave = () => {
      pos.tx = 0;
      pos.ty = 0;
    };
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      el?.removeEventListener("mouseleave", onMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [strength, ease]);

  return ref;
}
