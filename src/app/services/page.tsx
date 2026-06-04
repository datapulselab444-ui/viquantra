import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ComplianceNotice } from "@/components/ComplianceNotice";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { brand, images, services } from "@/lib/site-data";

export const metadata = {
  title: "Services | Viquantra Labs",
  description:
    "Explore Viquantra Labs services across AI-driven realtime analytics platforms, technical intelligence systems, custom software, workflow automation, and API integrations.",
  alternates: {
    canonical: "/services"
  }
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="AI-driven software engineering for analytics infrastructure."
        description={`${brand.name} combines Django platform engineering, realtime data architecture, technical intelligence systems, integrations, dashboards, AI-assisted workflows, and compliance-aware delivery into custom client-owned software.`}
        image={images.analytics}
        imageAlt="Analytics platform with dashboards and data visualizations"
        primaryHref="/contact"
        primaryLabel="Request Demo"
        secondaryHref="/projects"
        secondaryLabel="View Projects"
      />

      <section className="bg-slate-950 px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ComplianceNotice tone="dark" />
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Capabilities"
            title="Designed for clients who need serious analytics systems."
            description="Each capability is scoped as software infrastructure: dashboards, data pipelines, AI-assisted inspection, workflow automation, API integrations, and operational tooling."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={index * 0.035}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="enterprise-card group grid h-full overflow-hidden rounded-sm transition hover:-translate-y-1 hover:border-blue-300 focus-ring md:grid-cols-[0.92fr_1.08fr]"
                  >
                    <div className="relative min-h-64">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 46vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 to-transparent" />
                      <div className="absolute bottom-5 left-5 grid h-12 w-12 place-items-center rounded-sm bg-white text-blue-700">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-slate-950">{service.title}</h2>
                      <p className="mt-4 leading-7 text-slate-600">{service.summary}</p>
                      <div className="mt-6 grid gap-2">
                        {service.capabilities.slice(0, 3).map((item) => (
                          <div key={item} className="flex items-center gap-3 text-sm text-slate-700">
                            <CheckCircle2 className="h-4 w-4 text-blue-700" aria-hidden="true" />
                            {item}
                          </div>
                        ))}
                      </div>
                      <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                        Read service details <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
