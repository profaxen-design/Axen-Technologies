"use client";

import { useLenis } from "@/hooks/useLenis";

/**
 * SmoothScrollProvider — Client component that initializes Lenis smooth scroll.
 * Must be inside the root layout.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useLenis();
  return <>{children}</>;
}
