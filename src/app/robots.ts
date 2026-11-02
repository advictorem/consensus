import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const staging = process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production";
  return {
    rules: staging ? { userAgent: "*", disallow: "/" } : { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${SITE.url.replace(/\/$/, "")}/sitemap.xml`,
  };
}
