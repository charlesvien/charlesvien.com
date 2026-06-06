import { SocialIcon } from "@/components/social-icons";
import { Prompt } from "@/components/terminal";
import { profile, socials } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-line">
      <div className="mx-auto w-full max-w-4xl px-5 py-14 sm:px-6">
        <div className="flex select-text flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex select-none items-center gap-2 text-sm">
              <Prompt short />
              <span className="text-cyan">./contact</span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-ink sm:text-2xl">
              Building something hard?
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-dim">
              I love backing people who are. If that’s you, my inbox is open.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-green/40 bg-green/10 px-4 py-2.5 text-sm font-medium text-green transition-colors hover:bg-green/20"
            >
              <SocialIcon command="email" className="size-4" />
              {profile.email}
            </a>
          </div>

          <ul className="flex gap-2 sm:hidden">
            {socials.map((social) => (
              <li key={social.command}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={social.label}
                  title={social.label}
                  className="inline-flex size-10 items-center justify-center rounded-lg border border-line bg-elevated/40 text-dim transition-colors hover:border-line-bright hover:text-ink"
                >
                  <SocialIcon command={social.command} className="size-[18px]" />
                </a>
              </li>
            ))}
          </ul>

          <ul className="hidden sm:flex sm:flex-col sm:gap-2">
            {socials.map((social) => (
              <li key={social.command}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center justify-between gap-4 rounded-lg border border-line bg-elevated/40 px-3 py-2 text-sm transition-colors hover:border-line-bright"
                >
                  <span className="text-ink">{social.label}</span>
                  <span className="text-xs text-faint">{social.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex items-center justify-between gap-3 border-t border-line pt-6 text-xs text-faint">
          <span>
            © 2026 {profile.name} - {profile.location}
          </span>
          <span className="inline-flex shrink-0 items-baseline gap-1.5">
            <span className="text-green">exit 0</span>
            <span className="caret" aria-hidden />
          </span>
        </div>
      </div>
    </footer>
  );
}
