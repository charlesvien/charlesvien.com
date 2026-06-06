"use client";

import { type ReactNode, useEffect, useState } from "react";
import { useSequence } from "@/components/sequence";

const STAGGER_MS = 110;

// Reuses the `.reveal` classes so it inherits the no-JS and reduced-motion fallbacks.
export function CascadeItem({ order, children }: { order: number; children: ReactNode }) {
  const { armed } = useSequence();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!armed) return;
    const timer = setTimeout(() => setShown(true), order * STAGGER_MS);
    return () => clearTimeout(timer);
  }, [armed, order]);

  return <div className={`reveal${shown ? " is-visible" : ""}`}>{children}</div>;
}
