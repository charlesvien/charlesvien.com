import type { ReactNode } from "react";

export function Prompt({ short = false }: { short?: boolean }) {
  if (short) {
    return <span className="select-none text-green">$</span>;
  }
  return (
    <span className="select-none whitespace-nowrap">
      <span className="text-green">charles@seattle</span>
      <span className="text-faint">:</span>
      <span className="text-purple">~</span>
      <span className="text-faint">$</span>
    </span>
  );
}

// Must sit inside a `relative` element whose left edge aligns with the rail.
export function RailBranch() {
  return (
    <>
      <span
        aria-hidden
        className="absolute top-[0.55em] -left-7 h-px w-[22px] -translate-y-1/2 bg-line sm:-left-9 sm:w-[30px]"
      />
      <span
        aria-hidden
        className="absolute top-[0.55em] -left-7 size-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green/80 ring-2 ring-bg sm:-left-9"
      />
    </>
  );
}

interface SectionProps {
  id: string;
  command: string;
  comment?: string;
  children: ReactNode;
}

export function Section({ id, command, comment, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 pt-8 sm:pt-12">
      <div className="relative flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm sm:text-[15px]">
        <RailBranch />
        <Prompt />
        <span className="text-cyan">{command}</span>
        {comment ? <span className="text-faint">{`# ${comment}`}</span> : null}
      </div>
      <div className="mt-7 select-text sm:mt-9">{children}</div>
    </section>
  );
}
