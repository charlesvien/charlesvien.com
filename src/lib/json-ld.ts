import { profile, siteDescription, siteUrl, socials } from "@/lib/data";

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      alternateName: profile.handle,
      url: siteUrl,
      image: {
        "@type": "ImageObject",
        url: `${siteUrl}/charles-vien.jpg`,
        width: 1000,
        height: 1000,
        caption: profile.name,
      },
      jobTitle: "Product Engineer",
      description: siteDescription,
      email: `mailto:${profile.email}`,
      worksFor: {
        "@type": "Organization",
        name: "PostHog",
        url: "https://posthog.com",
      },
      homeLocation: {
        "@type": "Place",
        name: profile.location,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Seattle",
        addressRegion: "WA",
        addressCountry: "US",
      },
      knowsAbout: [
        "Software engineering",
        "Applied AI",
        "Developer tools",
        "Distributed systems",
        "Startups",
      ],
      sameAs: socials
        .filter((social) => social.href.startsWith("http"))
        .map((social) => social.href),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: profile.name,
      description: siteDescription,
      inLanguage: "en-US",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Charles Vien · builder & founder",
      description: siteDescription,
      isPartOf: { "@id": websiteId },
      about: { "@id": personId },
      mainEntity: { "@id": personId },
    },
  ],
};
