'use client';
import { RefObject, useEffect } from 'react';
import { useLightSection } from '../components/LightSectionContext';

export function useLightObserver(ref: RefObject<HTMLElement | null>) {
  const { enter, exit } = useLightSection();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let wasIntersecting = false;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !wasIntersecting) {
          wasIntersecting = true;
          enter();
        } else if (!entry.isIntersecting && wasIntersecting) {
          wasIntersecting = false;
          exit();
        }
      },
      { threshold: 0.2 }  // require 20% of the section in view
    );

    obs.observe(el);
    return () => void obs.unobserve(el);
  }, [ref, enter, exit]);
}
