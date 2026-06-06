"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav } from "@/lib/data";

export function SiteHeader() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      // Active = the last section whose top has scrolled into the upper third.
      const line = window.innerHeight * 0.3;
      let current = "";
      for (const item of nav) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= line) {
          current = item.id;
        }
      }

      // At the very bottom, force the last item active (the last section can be short).
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        current = nav[nav.length - 1].id;
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Close the mobile menu on Escape, or once the user scrolls (incl. tapping a nav link).
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", close, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", close);
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled || open
            ? "border-line bg-bg/80 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between gap-4 px-5 sm:px-6">
          <a
            href="#top"
            className="group inline-flex shrink-0 items-baseline text-sm font-semibold tracking-tight"
            aria-label="Back to top"
          >
            <span className="text-purple">~</span>
            <span className="text-faint">/</span>
            <span className="text-green transition-colors group-hover:text-cyan">charles</span>
          </a>

          <ul className="hidden items-center gap-1 text-[13px] sm:flex">
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`whitespace-nowrap rounded-md px-2.5 py-1.5 transition-colors ${
                      isActive ? "text-cyan" : "text-dim hover:text-ink"
                    }`}
                  >
                    <span className={`transition-colors ${isActive ? "text-cyan" : "text-faint"}`}>
                      ./
                    </span>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="-mr-1.5 inline-flex size-9 items-center justify-center rounded-md text-dim transition-colors hover:text-ink sm:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {open ? (
          <div className="menu-drop absolute inset-x-0 top-14 border-b border-line bg-bg/95 backdrop-blur-md sm:hidden">
            <ul className="mx-auto flex max-w-4xl flex-col gap-0.5 px-3 py-3">
              {nav.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`block rounded-md px-3 py-2.5 text-sm transition-colors ${
                        isActive
                          ? "bg-elevated/60 text-cyan"
                          : "text-dim hover:bg-elevated/40 hover:text-ink"
                      }`}
                    >
                      <span className={isActive ? "text-cyan" : "text-faint"}>./</span>
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </header>

      {open ? (
        <button
          type="button"
          aria-hidden
          tabIndex={-1}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 cursor-default sm:hidden"
        />
      ) : null}
    </>
  );
}
