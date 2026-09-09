import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-links";
import { FEATURES } from "@/lib/feature-flags";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = FEATURES.minimalSite
    ? ["", "/contacto"]
    : [
        "",
        "/primeros-pasos",
        "/beneficio-empresarial",
        "/faq",
        "/contacto",
        "/enlaces",
      ];
  return paths.map((path) => ({
    url: siteUrl + path,
    changeFrequency: path ? "monthly" : "weekly",
    priority: path ? 0.7 : 1,
  }));
}
