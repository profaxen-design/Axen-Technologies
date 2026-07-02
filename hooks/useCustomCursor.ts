"use client";

import { useEffect, useRef, useState } from "react";

interface CursorState {
  x: number;
  y: number;
  label: string;
  isHovering: boolean;
  isVisible: boolean;
}

/**
 * useCustomCursor — Tracks cursor position and computes state for the custom cursor.
 * Returns null if the device is touch-based.
 */
export function useCustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    label: "",
    isHovering: false,
    isVisible: false,
  });
  const rafRef = useRef<number | null>(null);
  const rawPos = useRef({ x: 0, y: 0 });
  const smoothPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (
      window.matchMedia("(hover: none)").matches ||
      "ontouchstart" in window
    ) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      rawPos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseEnter = () => setCursor((c) => ({ ...c, isVisible: true }));
    const handleMouseLeave = () => setCursor((c) => ({ ...c, isVisible: false }));

    // Delegate hover detection to data-cursor attributes
    const handleOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-cursor]");
      if (target) {
        const label = (target as HTMLElement).dataset.cursor || "";
        setCursor((c) => ({ ...c, isHovering: true, label }));
      }
    };

    const handleOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-cursor]");
      if (target) {
        setCursor((c) => ({ ...c, isHovering: false, label: "" }));
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    const animate = () => {
      const ease = 0.14;
      smoothPos.current.x +=
        (rawPos.current.x - smoothPos.current.x) * ease;
      smoothPos.current.y +=
        (rawPos.current.y - smoothPos.current.y) * ease;

      setCursor((c) => ({
        ...c,
        x: smoothPos.current.x,
        y: smoothPos.current.y,
      }));

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { cursor, isTouchDevice };
}
