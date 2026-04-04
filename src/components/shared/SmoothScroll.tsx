"use client";

import { ReactNode, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const [allowSmoothScroll, setAllowSmoothScroll] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const updatePreference = () => setAllowSmoothScroll(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  if (reduceMotion || !allowSmoothScroll) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: false,
        touchMultiplier: 1,
        wheelMultiplier: 0.9,
      }}
    >
      {/* @ts-expect-error - React 19 / 18 ReactNode type conflict bypass */}
      {children}
    </ReactLenis>
  );
}
