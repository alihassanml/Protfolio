import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: Array<[string, number, MetadataRoute.Sitemap[number]["changeFrequency"]]> = [
    ["", 1, "weekly"],
    ["/projects", 0.9, "weekly"],
    ["/services", 0.8, "monthly"],
    ["/about", 0.8, "monthly"],
    ["/contact", 0.7, "monthly"],
  ];

  return routes.map(([path, priority, changeFrequency]) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
