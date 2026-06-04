import Link from "next/link";
import { ArrowRight, Database } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { brand, images, industries } from "@/lib/site-data";

export const metadata = {
  title: "Industries and Workflows | Viquantra Labs",
  description:
    "Viquantra Labs supports retail trading analytics, market data analytics, workflow automation, AI systems, enterprise dashboards, and custom data engineering.",
  alternates: {
    canonical: "/industries"
  }
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Industries and workflows"
        title="AI-driven analytics systems for data-heavy workflows."
        description="We focus on workflows where data quality, realtime dashboards, API integrations, AI-assisted review, and workflow automation are core to the product."
        image={images.infrastructure}
        imageAlt="Infrastructure and servers representing data-heavy systems"
        primaryHref="/contact"
        primaryLabel="Request Demo"
        secondaryHref="/services"
        secondaryLabel="Explore Services"
      />

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Focus areas"
            title={`Where ${brand.name} fits best.`}
            description="The positioning is intentionally focused: AI-driven analytics engineering, realtime systems, technical intelligence, and workflow-specific software platforms."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {industries.map((industry, index) => (
              <Reveal key={industry.title} delay={index * 0.04}>
                <article className="enterprise-card h-full rounded-sm p-6 sm:p-8">
                  <Database className="h-8 w-8 text-blue-700" aria-hidden="true" />
                  <h2 className="mt-5 text-2xl font-bold text-slate-950">{industry.title}</h2>
                  <p className="mt-5 leading-8 text-slate-600">{industry.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Need a custom analytics workflow mapped?</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              We can translate your workflow into modules, data models, APIs,
              AI-assisted review layers, dashboards, and a phased roadmap.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-blue-700 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-950 focus-ring"
          >
            Request Demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
