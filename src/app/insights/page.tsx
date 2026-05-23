import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { images } from "@/lib/site-data";

const insights = [
  {
    title: "How to plan a Django analytics platform",
    type: "Engineering note",
    summary:
      "Start with workflow, data ownership, permission boundaries, and reporting needs before designing screens."
  },
  {
    title: "Realtime dashboards need observability",
    type: "Architecture note",
    summary:
      "A realtime dashboard is only useful when teams can see data freshness, failed jobs, latency, and system health."
  },
  {
    title: "Why API integrations deserve their own layer",
    type: "Integration note",
    summary:
      "Separating external API connectors from core product logic makes systems easier to test, monitor, and extend."
  }
];

export const metadata = {
  title: "Insights | DataPulse Lab",
  description:
    "Engineering insights from DataPulse Lab on analytics platforms, realtime dashboards, Django systems, and API integrations."
};

export default function InsightsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Insights"
        title="Engineering thinking for analytics and data systems."
        description="A place for future articles, technical notes, architecture viewpoints, and project learnings that strengthen the company's credibility."
        image={images.systems}
        imageAlt="Technology circuit board representing engineering insights"
      />

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Editorial structure"
            title="Ready for thought leadership and detailed explanations."
            description="Like larger service companies, this area can hold articles, technical perspectives, project learnings, and future client education content."
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
                    Discuss this topic <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
