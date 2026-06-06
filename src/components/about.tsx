import { Section } from "@/components/terminal";
import { story } from "@/lib/data";

export function About() {
  return (
    <Section id="about" command="cat about.md" comment="how I got here">
      <div className="rounded-xl border border-line bg-surface/70 p-6 sm:p-8">
        <div className="space-y-5 text-[15px] leading-7 text-dim">
          {story.map((paragraph, index) => (
            <p key={paragraph.slice(0, 24)} className={index === 0 ? "text-ink" : undefined}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
