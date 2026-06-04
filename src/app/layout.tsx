import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { brand, images, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Viquantra Labs | AI-Driven Realtime Analytics Infrastructure",
  applicationName: "Viquantra Labs",
  creator: "Viquantra Labs",
  publisher: "Viquantra Labs",
  category: "Technology",
  description:
    "AI-driven software engineering for realtime analytics platforms, technical intelligence systems, workflow automation, dashboards, API integrations, and custom software.",
  alternates: {
    canonical: "/"
  },
  keywords: [
    "Viquantra Labs",
    "realtime analytics platform",
    "technical intelligence systems",
    "analytics engineering",
    "custom software development",
    "workflow automation",
    "dashboard engineering",
    "market analytics platform",
    "data analytics software",
    "AI-driven analytics",
    "API integrations"
  ],
  openGraph: {
    title: "Viquantra Labs | AI-Driven Realtime Analytics Infrastructure",
    description:
      "AI-driven software engineering for realtime analytics platforms, technical intelligence systems, custom dashboards, workflow automation, and API integrations.",
    url: "https://viquantra.com",
    siteName: "Viquantra Labs",
    images: [
      {
        url: images.dashboard,
        width: 1400,
        height: 933,
        alt: "AI-driven analytics dashboard interface"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Viquantra Labs | AI-Driven Realtime Analytics Infrastructure",
    description:
      "Custom software engineering for realtime analytics platforms, technical intelligence systems, workflow automation, dashboards, and API integrations.",
    images: [images.dashboard]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  metadataBase: new URL("https://viquantra.com")
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: brand.name,
  url: "https://viquantra.com",
  email: "hello@viquantra.com",
  slogan: brand.tagline,
  areaServed: "IN",
  description:
    "AI-driven analytics engineering studio building realtime analytics platforms, technical intelligence systems, workflow automation, API integrations, and custom software."
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: brand.name,
  url: "https://viquantra.com",
  description:
    "AI-driven realtime analytics infrastructure, technical intelligence systems, workflow automation, and custom software engineering."
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Viquantra Labs Services",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: `https://viquantra.com/services/${service.slug}`
  }))
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd, servicesJsonLd])
          }}
        />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
