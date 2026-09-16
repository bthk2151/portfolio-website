import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://bthk2151.dev", changeFrequency: "monthly", priority: 1 },
  ];
}
