import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/data";

const lastModified = new Date("2026-06-14");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
