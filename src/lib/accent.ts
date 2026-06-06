import type { Accent } from "@/lib/data";

// Full class strings so Tailwind can statically detect them.
export const accentText: Record<Accent, string> = {
  green: "text-green",
  cyan: "text-cyan",
  amber: "text-amber",
  purple: "text-purple",
  red: "text-red",
  orange: "text-orange",
  blue: "text-blue",
};

export const accentHoverBorder: Record<Accent, string> = {
  green: "hover:border-green/30",
  cyan: "hover:border-cyan/30",
  amber: "hover:border-amber/30",
  purple: "hover:border-purple/30",
  red: "hover:border-red/30",
  orange: "hover:border-orange/30",
  blue: "hover:border-blue/30",
};
