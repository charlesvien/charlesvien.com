import { ChevronRight } from "lucide-react";
import { Section } from "@/components/terminal";
import { accentText } from "@/lib/accent";
import { nowItems, nowUpdated } from "@/lib/data";

export function Now() {
  return (
    <Section id="now" command="cat now.md" comment="what I am focused on">
      <div className="rounded-xl border border-line bg-surface/70 p-5 sm:p-7">
        <ul className="space-y-4">
          {nowItems.map((item) => (
            <li key={item.label} className="flex gap-3 text-sm leading-relaxed sm:text-[15px]">
              <ChevronRight
                aria-hidden
                className={`mt-1 size-4 shrink-0 ${accentText[item.accent]}`}
              />
              <p className="text-dim">
                <span className={`font-medium ${accentText[item.accent]}`}>{item.label}</span>
                <span className="text-faint"> - </span>
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-6 border-t border-line pt-4 text-xs text-faint">
          last updated {nowUpdated} · inspired by{" "}
          <a href="https://nownownow.com/about" className="link" target="_blank" rel="noreferrer">
            nownownow.com
          </a>
        </div>
      </div>
    </Section>
  );
}
