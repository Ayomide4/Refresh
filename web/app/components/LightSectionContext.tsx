// components/LightSectionContext.tsx
'use client';
import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type LightCtx = {
  isOverLight: boolean;
  enter: () => void;
  exit: () => void;
};

const LightSectionContext = createContext<LightCtx>({
  isOverLight: false,
  enter: () => { },
  exit: () => { },
});

export function LightSectionProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  const enter = useCallback(() => setCount(c => c + 1), []);
  const exit = useCallback(() => setCount(c => Math.max(0, c - 1)), []);
  return (
    <LightSectionContext.Provider value={{ isOverLight: count > 0, enter, exit }}>
      {children}
    </LightSectionContext.Provider>
  );
}

export const useLightSection = () => useContext(LightSectionContext);
