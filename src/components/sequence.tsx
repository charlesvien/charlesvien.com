"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface SequenceValue {
  armed: boolean;
  arm: () => void;
}

const SequenceContext = createContext<SequenceValue>({ armed: false, arm: () => {} });

export function SequenceProvider({ children }: { children: ReactNode }) {
  const [armed, setArmed] = useState(false);
  const arm = useCallback(() => setArmed(true), []);

  // Don't make scrollers wait for the typing animation: any scroll reveals the rest.
  useEffect(() => {
    if (armed) return;
    const onScroll = () => {
      if (window.scrollY > 24) setArmed(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [armed]);

  const value = useMemo(() => ({ armed, arm }), [armed, arm]);
  return <SequenceContext.Provider value={value}>{children}</SequenceContext.Provider>;
}

export function useSequence() {
  return useContext(SequenceContext);
}
