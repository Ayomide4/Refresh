// useSmoothScroll.ts
import { useEffect } from "react";
import Lenis from "lenis";

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      // Lenis options
      duration: 1.2, // duration of the scroll easing (in seconds)
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Lenis's API now doesn't include a property called "smooth",
      // so we rely on its default behavior.
      autoRaf: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up on unmount
    };
  }, []);
}
