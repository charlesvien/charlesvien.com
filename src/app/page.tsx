import { About } from "@/components/about";
import { CascadeItem } from "@/components/cascade-item";
import { Hero } from "@/components/hero";
import { Log } from "@/components/log";
import { Now } from "@/components/now";
import { Projects } from "@/components/projects";
import { SequenceProvider } from "@/components/sequence";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
// Stats section is hidden for now. To bring it back: re-add the import below,
// drop a <CascadeItem><Stats /></CascadeItem> after Projects, and re-add the
// { id: "stats" } entry to `nav` in src/lib/data.ts. The component + data still exist.
// import { Stats } from "@/components/stats";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl flex-1 px-5 pt-10 sm:px-6 sm:pt-16">
        <SequenceProvider>
          <div className="relative pb-16 pl-7 sm:pb-24 sm:pl-9">
            <span
              aria-hidden
              className="pointer-events-none absolute top-0 left-0 h-full w-px bg-line [mask-image:linear-gradient(to_bottom,#000_82%,transparent)]"
            />
            <Hero />
            <CascadeItem order={0}>
              <Projects />
            </CascadeItem>
            <CascadeItem order={1}>
              <Now />
            </CascadeItem>
            <CascadeItem order={2}>
              <About />
            </CascadeItem>
            <CascadeItem order={3}>
              <Log />
            </CascadeItem>
          </div>
        </SequenceProvider>
      </main>
      <SiteFooter />
    </>
  );
}
