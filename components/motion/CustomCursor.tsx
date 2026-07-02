"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useCustomCursor } from "@/hooks/useCustomCursor";

/**
 * CustomCursor — Custom animated cursor for desktop devices.
 * Auto-hidden on touch devices. Morphs over interactive elements.
 */
export default function CustomCursor() {
  const { cursor, isTouchDevice } = useCustomCursor();
  const shouldReduceMotion = useReducedMotion();

  if (isTouchDevice || shouldReduceMotion) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: cursor.x - (cursor.isHovering ? 24 : 20),
          y: cursor.y - (cursor.isHovering ? 24 : 20),
          scale: cursor.isHovering ? 1.4 : 1,
          opacity: cursor.isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35, mass: 0.5 }}
      >
        <div
          className={`
            relative flex items-center justify-center
            rounded-full border transition-all duration-300
            ${cursor.isHovering
              ? "w-12 h-12 border-primary bg-primary/10 backdrop-blur-sm"
              : "w-10 h-10 border-white/30 bg-transparent"
            }
          `}
        >
          {cursor.label && (
            <span className="text-white text-[9px] font-mono font-medium uppercase tracking-wider whitespace-nowrap">
              {cursor.label}
            </span>
          )}
        </div>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: cursor.x - 3,
          y: cursor.y - 3,
          scale: cursor.isHovering ? 0 : 1,
          opacity: cursor.isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 1500, damping: 40, mass: 0.3 }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
      </motion.div>
    </>
  );
}
