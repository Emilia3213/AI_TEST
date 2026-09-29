"use client";

import { useEffect } from "react";

export default function ParallaxScene({ children }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      document.documentElement.style.setProperty("--scroll-y", "0px");
      return undefined;
    }

    let frame = 0;

    const updateScroll = () => {
      frame = 0;
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateScroll);
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return <>{children}</>;
}
