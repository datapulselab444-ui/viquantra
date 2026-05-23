import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "DataPulse Lab | Data Analytics and Software Engineering Company",
  description:
    "DataPulse Lab builds intelligent analytics platforms, realtime data systems, Django-based software, API integrations, and custom financial technology solutions.",
  keywords: [
    "DataPulse Lab",
    "data analytics company",
    "software engineering",
    "Django development",
    "realtime dashboards",
    "financial technology software",
    "market analysis systems",
    "business intelligence",
    "API integrations",
    "pattern recognition"
  ],
  openGraph: {
    title: "DataPulse Lab | Intelligent Analytics Platforms and Realtime Data Systems",
    description:
      "Software engineering for analytics platforms, realtime data systems, custom dashboards, API integrations, and data-driven decision support.",
    type: "website"
  },
  metadataBase: new URL("https://datapulselabs.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
