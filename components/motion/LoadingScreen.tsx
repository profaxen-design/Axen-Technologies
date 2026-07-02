"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * LoadingScreen — Animated logo build-in on first visit only.
 * Uses sessionStorage to prevent replaying on internal navigation.
 * Skips animation if prefers-reduced-motion is set.
 */
export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const hasLoaded = sessionStorage.getItem("axen-loaded");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!hasLoaded && !prefersReducedMotion) {
      setIsLoading(true);
      // Lock scroll during loading
      document.body.style.overflow = "hidden";

      const timer = setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "";
        sessionStorage.setItem("axen-loaded", "true");
      }, 1800);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    } else {
      sessionStorage.setItem("axen-loaded", "true");
    }
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9998] bg-[#080808] flex flex-col items-center justify-center"
        >
          {/* Logo build animation */}
          <div className="relative flex flex-col items-center gap-4">
            {/* Animated A mark */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Logo mark */}
              <div className="w-16 h-16 relative">
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-primary"
                  initial={{ borderColor: "rgba(204,0,0,0)" }}
                  animate={{ borderColor: "rgba(204,0,0,1)" }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-3xl font-display font-bold text-white"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    A
                  </span>
                </div>
                {/* Red corner accent */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.3, ease: "backOut" }}
                />
              </div>
            </motion.div>

            {/* Wordmark */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div
                className="text-2xl font-display font-bold tracking-widest text-white"
                style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "0.15em" }}
              >
                AXEN
              </div>
              <div className="text-xs text-text-muted tracking-[0.2em] uppercase mt-0.5">
                Technology
              </div>
            </motion.div>
          </div>

          {/* Loading bar */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-white/10 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-primary"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
