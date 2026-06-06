import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Background } from "@/components/background";
import { profile, siteDescription, siteUrl } from "@/lib/data";
import { structuredData } from "@/lib/json-ld";
import "./globals.css";

const mono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Charles Vien · builder & founder",
    template: "%s · Charles Vien",
  },
  description: siteDescription,
  applicationName: "charlesvien.com",
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: ["Charles Vien", "founder", "builder", "PostHog", "Seattle", "software engineer"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Charles Vien",
    title: "Charles Vien · builder & founder",
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charles Vien · builder & founder",
    description: siteDescription,
    site: "@charlesvien",
    creator: "@charlesvien",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#08090c",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${mono.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD must be injected as a raw script per schema.org
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <noscript>
          {/* Without JS, never hide reveal content */}
          <style>{".reveal{opacity:1 !important;transform:none !important;}"}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <Background />
        {children}
      </body>
    </html>
  );
}
