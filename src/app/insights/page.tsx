import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { brand, images } from "@/lib/site-data";

const insights = [
  {
    title: "How to plan an AI-ready analytics platform",
    type: "Analytics Engineering",
    summary:
      "Start with workflow, data ownership, permission boundaries, AI use cases, and reporting needs before designing screens."
  },
  {
    title: "Realtime dashboards need observability",
    type: "Realtime Systems",
    summary:
      "A realtime dashboard is only useful when teams can see data freshness, failed jobs, latency, and system health."
  },
  {
    title: "Why API integrations deserve their own boundary",
    type: "API Integrations",
    summary:
      "Separating external API connectors from core product logic makes systems easier to test, monitor, extend, and review for regulated-use constraints."
  }
];

export const metadata = {
  title: "Insights | Viquantra Labs",
  description:
    "Engineering notes from Viquantra Labs on realtime systems, analytics platforms, AI-assisted workflows, dashboards, and API integrations.",
  alternates: {
    canonical: "/insights"
  }
};

export default function InsightsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="Engineering thinking for AI-driven analytics systems."
        description={`${brand.name} shares technical notes on realtime systems, analytics engineering, technical intelligence, workflow automation, dashboard engineering, and API integrations.`}
        image={images.systems}
        imageAlt="Technology circuit board representing engineering insights"
      />

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Editorial structure"
            title="A credible home for technical education."
            description="Future articles should focus on engineering, architecture, dashboard design, AI-assisted workflows, and compliance-safe analytics infrastructure."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {insights.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="enterprise-card h-full rounded-sm p-6">
                  <FileText className="h-7 w-7 text-blue-700" aria-hidden="true" />
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                    {item.type}
                  </p>
                  <h2 className="mt-3 text-xl font-bold text-slate-950">{item.title}</h2>
                  <p className="mt-4 leading-7 text-slate-600">{item.summary}</p>
                  <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                    Request Demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
