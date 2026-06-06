import { Section } from "@/components/terminal";
import { logEntries } from "@/lib/data";

export function Log() {
  return (
    <Section id="logs" command="ls ./logs" comment="coming soon">
      <div className="overflow-hidden rounded-xl border border-line bg-surface/70">
        {logEntries.map((entry) => (
          <div key={entry.title} className="border-b border-line p-5 last:border-b-0 sm:p-6">
            <span className="inline-flex items-center gap-1.5 rounded border border-line bg-elevated/60 px-2 py-0.5 text-[11px] text-faint">
              <span className="size-1.5 rounded-full bg-amber/70" />
              coming soon
            </span>
            <h3 className="mt-2.5 font-medium text-dim">{entry.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-faint">{entry.blurb}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
