"use client";

import { useEffect, useState } from "react";
import { useSequence } from "@/components/sequence";
import { Prompt, RailBranch } from "@/components/terminal";
import { profile, socials } from "@/lib/data";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

type Step =
  | { kind: "cmd"; text: string }
  | { kind: "out"; text: string; className?: string }
  | { kind: "links" };

const steps: Step[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: profile.name, className: "text-2xl font-semibold text-green sm:text-3xl" },
  {
    kind: "out",
    text: `${profile.role} · ${profile.location}`,
    className: "text-dim",
  },
  { kind: "cmd", text: "cat bio.txt" },
  ...profile.bio.map((line): Step => ({ kind: "out", text: line, className: "text-ink" })),
  { kind: "cmd", text: "ls ./social" },
  { kind: "links" },
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function Caret() {
  return <span className="caret" aria-hidden />;
}

function StepLine({ step, withGap }: { step: Step; withGap: boolean }) {
  const gap = withGap ? "mt-8 sm:mt-12" : "";
  if (step.kind === "cmd") {
    return (
      <div className={`relative flex flex-wrap items-baseline gap-x-2 ${gap}`}>
        <RailBranch />
        <Prompt />
        <span className="text-cyan">{step.text}</span>
      </div>
    );
  }
  if (step.kind === "links") {
    return (
      <div className="step-in flex flex-wrap gap-2 pt-1">
        {socials.map((social) => (
          <a
            key={social.command}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={social.href.startsWith("http") ? "noreferrer" : undefined}
            className="rounded-md border border-line bg-elevated/60 px-2.5 py-1 text-dim transition-colors hover:border-line-bright hover:text-cyan"
          >
            <span className="text-faint">[</span>
            {social.command}
            <span className="text-faint">]</span>
          </a>
        ))}
      </div>
    );
  }
  return <div className={`step-in select-text ${step.className ?? "text-ink"}`}>{step.text}</div>;
}

export function Hero() {
  const reduced = usePrefersReducedMotion();
  const { arm } = useSequence();
  const [done, setDone] = useState(0);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    if (reduced) {
      setDone(steps.length);
      arm();
      return;
    }

    let cancelled = false;
    setDone(0);
    setTyping("");

    const run = async () => {
      await sleep(350);
      for (let i = 0; i < steps.length; i++) {
        if (cancelled) return;
        const step = steps[i];
        if (step.kind === "cmd") {
          for (let c = 1; c <= step.text.length; c++) {
            if (cancelled) return;
            setTyping(step.text.slice(0, c));
            await sleep(34);
          }
          await sleep(220);
        } else {
          await sleep(140);
        }
        if (cancelled) return;
        setTyping("");
        setDone(i + 1);
      }
      if (!cancelled) arm();
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [reduced, arm]);

  const current = done < steps.length ? steps[done] : null;
  const isCmd = (i: number) => steps[i].kind === "cmd";

  return (
    <section id="top" className="scroll-mt-24">
      <h1 className="sr-only">
        Charles Vien - builder. Co-founder of Vortex Games and Branch, now building Applied AI at
        PostHog.
      </h1>
      <p className="sr-only">
        {profile.role} based in {profile.location}. {profile.bio.join(" ")}
      </p>
      <div className="space-y-2 text-[13px] leading-relaxed sm:text-[15px]">
        {steps.slice(0, done).map((step, i) => (
          <StepLine
            // biome-ignore lint/suspicious/noArrayIndexKey: static, ordered script
            key={i}
            step={step}
            withGap={i > 0 && isCmd(i)}
          />
        ))}

        {!reduced && current?.kind === "cmd" ? (
          <div
            className={`relative flex flex-wrap items-baseline gap-x-2 ${done > 0 ? "mt-8 sm:mt-12" : ""}`}
          >
            <RailBranch />
            <Prompt />
            <span className="text-cyan">{typing}</span>
            <Caret />
          </div>
        ) : null}
      </div>
    </section>
  );
}
