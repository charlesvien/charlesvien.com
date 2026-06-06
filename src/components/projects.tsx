import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { Section } from "@/components/terminal";
import { accentHoverBorder, accentText } from "@/lib/accent";
import { type Project, type ProjectStatus, projects } from "@/lib/data";

const statusStyles: Record<ProjectStatus, { dot: string; text: string; label: string }> = {
  live: { dot: "bg-green", text: "text-green", label: "live" },
  building: { dot: "bg-amber animate-pulse", text: "text-amber", label: "building" },
  archived: { dot: "bg-faint", text: "text-faint", label: "archived" },
};

function MetricValue({ value }: { value: string }) {
  const match = value.match(/->|→/);
  if (!match || match.index === undefined) return <>{value}</>;
  return (
    <>
      {value.slice(0, match.index)}
      <ArrowRight aria-hidden className="mx-0.5 inline size-3.5 align-middle" />
      {value.slice(match.index + match[0].length)}
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const status = statusStyles[project.status];

  return (
    <article
      className={`group flex h-full flex-col rounded-xl border border-line bg-surface/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface hover:shadow-[0_18px_44px_-24px_rgba(0,0,0,0.75)] sm:p-6 ${accentHoverBorder[project.accent]}`}
    >
      <div className="flex items-center justify-between text-xs">
        <span className="inline-flex items-center gap-2">
          <span className={`size-2 rounded-full ${status.dot}`} />
          <span className={status.text}>{status.label}</span>
        </span>
        <span className="text-faint">{project.year}</span>
      </div>

      <h3 className="mt-4 flex items-center gap-1.5 text-lg font-semibold text-ink">
        <ChevronRight aria-hidden className={`size-5 shrink-0 ${accentText[project.accent]}`} />
        {project.name}
      </h3>
      <p className="mt-1 text-sm text-dim">{project.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-dim/90">{project.description}</p>

      <dl className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="flex items-baseline gap-1.5">
            <dt className="sr-only">{metric.label}</dt>
            <dd className={`text-base font-semibold ${accentText[project.accent]}`}>
              <MetricValue value={metric.value} />
            </dd>
            <span className="text-xs text-faint">{metric.label}</span>
          </div>
        ))}
      </dl>

      {project.links.length > 0 ? (
        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-1 rounded border border-line bg-elevated/50 px-2 py-0.5 text-[11px] text-dim transition-colors hover:border-line-bright hover:text-cyan"
            >
              {link.label}
              <ArrowUpRight aria-hidden className="size-3" />
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects" command="cat projects.json" comment="things I have shipped">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
