import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import { ComplianceNotice } from "@/components/ComplianceNotice";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { brand, services } from "@/lib/site-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | Viquantra Labs`,
    description: service.summary,
    alternates: {
      canonical: `/services/${service.slug}`
    }
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <main>
      <PageHero
        eyebrow="Service capability"
        title={service.title}
        description={service.intro}
        image={service.image}
        imageAlt={service.imageAlt}
        primaryHref="/contact"
        primaryLabel="Request Demo"
        secondaryHref="/projects"
        secondaryLabel="See Related Work"
      />

      <section className="bg-slate-950 px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ComplianceNotice tone="dark" />
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <SectionIntro
              eyebrow="What we build"
              title="Client-owned software, built around your workflow."
              description={`${brand.name} turns data sources, user roles, internal logic, AI opportunities, and integration requirements into a maintainable analytics platform.`}
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {service.capabilities.map((item, index) => (
              <Reveal key={item} delay={index * 0.03}>
                <div className="h-full rounded-sm border border-slate-200 bg-slate-50 p-5">
                  <CheckCircle2 className="h-5 w-5 text-blue-700" aria-hidden="true" />
                  <p className="mt-4 font-bold text-slate-950">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            {service.pageSections.map((section, index) => (
              <Reveal key={section.heading} delay={index * 0.05}>
                <article className="enterprise-card h-full rounded-sm p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-slate-950">{section.heading}</h2>
                  <p className="mt-5 leading-8 text-slate-600">{section.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {service.demoVisuals ? (
        <section className="bg-slate-950 px-5 py-14 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Product visual"
              title="A public-safe look at the analytics interface."
              description="These visuals are prepared for public use with masked values, cropped application chrome, and informational review-state framing."
              tone="dark"
              align="center"
            />
            <div className="mt-10 grid gap-6">
              {service.demoVisuals.map((visual, index) => (
                <Reveal key={visual.src} delay={index * 0.05}>
                  <figure className="overflow-hidden rounded-sm border border-white/10 bg-white/[0.04] shadow-2xl">
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      width={visual.width}
                      height={visual.height}
                      sizes="(min-width: 1280px) 1180px, 100vw"
                      className="h-auto w-full"
                    />
                    <figcaption className="border-t border-white/10 p-5 sm:p-6">
                      <h3 className="text-xl font-bold text-white">{visual.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{visual.caption}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {service.externalExamples ? (
        <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Live example"
              title="Custom product work in production."
              description="Selected product examples show how workflow clarity, privacy, UX, and deployment readiness come together in a real web application."
              align="center"
            />
            <div className="mt-10 grid gap-6">
              {service.externalExamples.map((example, index) => (
                <Reveal key={example.href} delay={index * 0.05}>
                  <article className="rounded-sm border border-slate-200 bg-slate-50 p-6 sm:p-8">
                    <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                          Featured product
                        </p>
                        <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">
                          {example.title}
                        </h2>
                        <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                          {example.description}
                        </p>
                        <Link
                          href={example.href}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm bg-blue-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-950 focus-ring"
                        >
                          Visit Product <ExternalLink className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                      <div className="grid gap-3">
                        {example.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-center gap-3 rounded-sm border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
                          >
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-sm border border-slate-200 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-950">Typical deliverables</h2>
              <div className="mt-6 grid gap-3">
                {service.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-blue-700" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-sm border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
              <h2 className="text-2xl font-bold">Technology fit</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {service.technologies.map((tech) => (
                  <span key={tech} className="rounded-sm border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Next step
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Need a system like this?</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Share your workflow, data sources, AI-assisted features, and
              integration requirements. We will help translate them into a clear
              platform architecture.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-blue-600 hover:text-white focus-ring"
          >
            Request Demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
