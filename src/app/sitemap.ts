import { MetadataRoute } from "next";
import { SHOWS, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/shows`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/reviews`, changeFrequency: "weekly", priority: 0.6 },
  ];

  const showPages: MetadataRoute.Sitemap = SHOWS.map((show) => ({
    url: `${SITE_URL}/shows/${show.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...showPages].map((page) => ({ ...page, lastModified }));
}
