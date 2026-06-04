import type { MetadataRoute } from "next";
import { projects, services } from "@/lib/site-data";

const baseUrl = "https://viquantra.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/projects",
    "/industries",
    "/insights",
    "/about",
    "/contact",
    "/compliance",
    "/privacy",
    "/terms"
  ];

  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const projectRoutes = projects.map((project) => `/projects/${project.slug}`);
  const now = new Date();

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/services") || route === "/contact" ? 0.8 : 0.6
  }));
}

