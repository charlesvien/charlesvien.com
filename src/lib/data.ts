export type Accent = "green" | "cyan" | "amber" | "purple" | "red" | "orange" | "blue";

export interface NavItem {
  id: string;
  label: string;
}

export interface Social {
  label: string;
  handle: string;
  href: string;
  command: string;
}

export type ProjectStatus = "live" | "building" | "archived";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  year: string;
  accent: Accent;
  metrics: ProjectMetric[];
  stack: string[];
  links: ProjectLink[];
}

export interface Stat {
  value: string;
  label: string;
  note: string;
  accent: Accent;
}

export interface NowItem {
  label: string;
  detail: string;
  accent: Accent;
}

export interface LogEntry {
  title: string;
  blurb: string;
}

export const profile = {
  name: "Charles Vien",
  handle: "charlesvien",
  shell: "charles@seattle",
  role: "product engineer @ posthog",
  location: "Seattle, WA",
  email: "hello@charlesvien.com",
  bio: [
    "Builder.",
    "A couple companies in - Vortex Games to a top-10 network, Branch to $14M raised, now building Applied AI at PostHog.",
    "Happiest talking to customers and shipping for them in a tight loop.",
  ],
} as const;

export const siteUrl = "https://charlesvien.com";

export const siteDescription =
  "Builder and founder based in Seattle. Co-founded Vortex Games (top-10 Minecraft network) and Branch ($14M raised), now building Applied AI at PostHog.";

export const socials: Social[] = [
  {
    label: "GitHub",
    handle: "@charlesvien",
    href: "https://github.com/charlesvien",
    command: "github",
  },
  { label: "X", handle: "@charlesvien", href: "https://x.com/charlesvien", command: "x" },
  {
    label: "LinkedIn",
    handle: "in/charlesvien",
    href: "https://linkedin.com/in/charlesvien",
    command: "linkedin",
  },
  {
    label: "Email",
    handle: profile.email,
    href: `mailto:${profile.email}`,
    command: "email",
  },
];

export const nav: NavItem[] = [
  { id: "projects", label: "projects" },
  { id: "now", label: "now" },
  { id: "about", label: "about" },
  { id: "logs", label: "logs" },
];

export const projects: Project[] = [
  {
    slug: "posthog",
    name: "PostHog",
    tagline: "Product Engineer, Applied AI",
    description:
      "Building PostHog Desktop, an agent-powered product workspace for building and managing your self-driving product. Agents run analyses, ship self-driven PRs and handle the busywork; you and your team review, decide and share the results.",
    status: "building",
    year: "2025-now",
    accent: "orange",
    metrics: [
      { label: "open source", value: "OSS" },
      { label: "hackathons nailed", value: "2" },
    ],
    stack: ["TypeScript", "React", "Python", "LLMs"],
    links: [
      { label: "posthog.com/code", href: "https://posthog.com/code" },
      {
        label: "my PRs",
        href: "https://github.com/PostHog/posthog/pulls?q=is%3Apr+is%3Amerged+author%3Acharlesvien",
      },
    ],
  },
  {
    slug: "branch",
    name: "Branch",
    tagline: "Co-founder & Engineering Lead",
    description:
      "Co-founded a game studio and led engineering from day one. I owned the full stack and cloud infrastructure, hired the team and scaled the platform to thousands of concurrent players.",
    status: "archived",
    year: "2021-25",
    accent: "green",
    metrics: [
      { label: "raised", value: "$14M" },
      { label: "concurrent users", value: "10k+" },
      { label: "eng team", value: "0->5" },
    ],
    stack: ["TypeScript", "React", "Cloud infra"],
    links: [],
  },
  {
    slug: "vortex-games",
    name: "Vortex Games",
    tagline: "Co-founder & CTO · top-10 Minecraft network",
    description:
      "Scaled a Minecraft server into a top-10 network worldwide. Built a hot-reload JS-on-JVM framework (24h to <1s deploys), Kubernetes game-server infra and a 50+ KPI analytics pipeline. Colocated our own racks as PoPs around the world, cutting infra cost 80% and latency for players everywhere.",
    status: "archived",
    year: "2019-23",
    accent: "red",
    metrics: [
      { label: "yearly revenue", value: "$1M+" },
      { label: "unique players", value: "3M+" },
      { label: "eng team", value: "0->3" },
    ],
    stack: ["Java", "JVM / Nashorn", "Kubernetes", "PostgreSQL"],
    links: [],
  },
  {
    slug: "early-days",
    name: "Figuring it out",
    tagline: "Self-taught - mods, freelance, first real products",
    description:
      "Everything before the companies. I modded Minecraft, freelanced for clients, shipped CMS systems and taught myself how software actually works by building it, selling it and keeping it running.",
    status: "archived",
    year: "2012-19",
    accent: "blue",
    metrics: [
      { label: "self-taught", value: "100%" },
      { label: "earned freelancing", value: "real $" },
    ],
    stack: ["Minecraft mods", "Freelance", "CMS"],
    links: [],
  },
];

export const stats: Stat[] = [
  { value: "10+", label: "years building", note: "fully self-taught", accent: "green" },
  { value: "3M+", label: "players reached", note: "at Vortex Games", accent: "amber" },
  { value: "$14M", label: "raised at Branch", note: "as co-founder", accent: "cyan" },
  { value: "millions", label: "users served", note: "systems I’ve shipped", accent: "purple" },
];

export const nowItems: NowItem[] = [
  {
    label: "shipping",
    detail:
      "PostHog Desktop, an agent-powered product workspace for building and managing your self-driving product.",
    accent: "green",
  },
  {
    label: "just shipped",
    detail: "PostHog's Roblox SDK for fun on a 3h car ride from Vancouver, BC to Seattle, WA.",
    accent: "cyan",
  },
  {
    label: "learning",
    detail: "Going deep on agentic AI and developer tooling.",
    accent: "amber",
  },
];

export const nowUpdated = "Jun 2026";

export const story: string[] = [
  "It started with Minecraft. I got obsessed with modding servers as a kid, reverse-engineering the server JAR to build a cross-version compatibility layer and writing anti-cheat from raw packet analysis. I taught myself everything as I went and never really stopped.",
  "That turned into Vortex Games, a top-10 Minecraft network worldwide with 3M+ players and $1M+ a year. I rebuilt the infrastructure from the ground up, colocating our own racks as PoPs around the world to cut latency for players everywhere. It taught me how to run something real at scale.",
  "Then I co-founded Branch and led engineering from 0 to 1: a platform for 10k+ concurrent users, an engineering team I grew from 0 to 5 and $14M raised from Homebrew, Dragonfly, Polychain and Coinbase Ventures.",
  "Today I’m a product engineer at PostHog, building PostHog Desktop: an agent-powered product workspace where agents do the work and humans steer. Bigger systems now, same instinct - find the hard problem and ship the thing that solves it.",
];

export const logEntries: LogEntry[] = [
  {
    title: "The silent plague",
    blurb:
      "On the creeping exhaustion of coding with agents all day and the bet we are making in PostHog Desktop to fix it.",
  },
];
