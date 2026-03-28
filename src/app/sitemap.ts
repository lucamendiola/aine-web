import type { MetadataRoute } from "next";
import { conditions } from "@/lib/conditions";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aine.mx";

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/nosotros`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/servicios`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/condiciones`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/donativos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/quiero-participar`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/privacidad`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const conditionPages: MetadataRoute.Sitemap = conditions.map((c) => ({
    url: `${base}/condiciones/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...conditionPages];
}
