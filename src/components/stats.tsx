import { Section } from "@/components/terminal";
import { accentText } from "@/lib/accent";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <Section id="stats" command="./stats --summary" comment="the receipts">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="h-full bg-surface/80 p-5 sm:p-6">
            <div
              className={`text-3xl font-bold tracking-tight sm:text-4xl ${accentText[stat.accent]}`}
            >
              {stat.value}
            </div>
            <div className="mt-2 text-sm text-ink">{stat.label}</div>
            <div className="mt-0.5 text-xs text-faint">{stat.note}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
