import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Database } from "lucide-react";
import { ComplianceNotice } from "@/components/ComplianceNotice";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { brand, deliveryModel, images, industries, projects, services, techStack } from "@/lib/site-data";

export default function Home() {
  return (
    <main>
      <PageHero
        eyebrow={brand.descriptor}
        title="Realtime Analytics Infrastructure for Modern Trading Workflows"
        description="Custom-built AI-driven technical intelligence platforms, realtime dashboards, pattern recognition systems, workflow automation tools, and analytics infrastructure engineered for modern analytics-driven workflows."
        image={images.dashboard}
        imageAlt="Realtime analytics dashboard displayed on a laptop"
        primaryHref="/contact"
        primaryLabel="Request Demo"
        secondaryHref="/services"
        secondaryLabel="Explore Services"
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            "AI-assisted analytics",
            "Realtime dashboards",
            "API and webhook integrations",
            "Compliance-aware boundaries"
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
              <span className="text-sm font-bold text-slate-800">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <SectionIntro
                eyebrow="Positioning"
                title="AI-driven analytics infrastructure with clear boundaries."
                description={`${brand.name} builds client-owned software systems for technical intelligence, realtime analytics, automation, integration, reporting, and workflow visibility. Market-related work is delivered as informational software infrastructure.`}
              />
              <div className="mt-8 rounded-sm border-l-4 border-blue-700 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                  Clear boundary
                </p>
                <p className="mt-3 leading-7 text-slate-700">
                  This is a software-only engagement model. {brand.name} builds
                  analytics infrastructure, not regulated advice, research, or
                  decision-making services.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "AI-ready architecture",
                  text: "Data models, event logs, dashboard states, and workflow history are structured so AI-assisted search, summaries, and classifications can be added responsibly."
                },
                {
                  title: "Realtime engineering",
                  text: "Django platforms, APIs, queues, databases, WebSockets, and deployments are structured for maintainability, observability, and scale."
                },
                {
                  title: "Workflow-specific systems",
                  text: "Every build is tailored to the client's data sources, users, review process, internal logic, and operational rhythm."
                },
                {
                  title: "Regulated-use clarity",
                  text: "Public market-data projects are scoped with clear language, synthetic demo data, client-owned methods, and defined compliance boundaries."
                }
              ].map((item, index) => (
                <Reveal key={item.title} delay={index * 0.04}>
                  <article className="enterprise-card h-full rounded-sm p-6">
                    <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                    <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Services"
            title="Five focused services for AI-driven analytics products."
            description="Each service is built around client-owned software: realtime analytics platforms, technical intelligence systems, custom applications, workflow automation, and secure API integrations."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={index * 0.035}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="enterprise-card group flex h-full flex-col rounded-sm p-6 transition hover:-translate-y-1 hover:border-blue-300 focus-ring"
                  >
                    <Icon className="h-8 w-8 text-blue-700" aria-hidden="true" />
                    <h3 className="mt-5 text-xl font-bold text-slate-950">{service.title}</h3>
                    <p className="mt-4 flex-1 leading-7 text-slate-600">{service.summary}</p>
                    <span className="mt-6 text-sm font-bold text-blue-700 link-arrow">
                      Explore capability
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-14 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Engineering backbone
              </p>
              <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-4xl">
                Built on reliable data architecture, not decorative dashboard screens.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Serious analytics products need ingestion, validation, event
                processing, permissions, observability, AI-ready data flows, and
                clear compliance boundaries before the interface can be trusted.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ["Data layer", "schemas, ingestion, validation"],
                  ["AI layer", "summaries, classification, retrieval"],
                  ["Realtime layer", "queues, sockets, workers"],
                  ["Experience layer", "dashboards, workspaces, review"]
                ].map(([title, text]) => (
                  <div key={title} className="rounded-sm border border-white/10 bg-white/5 p-5">
                    <p className="font-bold text-white">{title}</p>
                    <p className="mt-2 text-sm text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="blueprint-grid rounded-sm border border-white/10 bg-white/[0.03] p-5">
                <div className="grid gap-4">
                  {deliveryModel.map((step, index) => (
                    <div key={step.title} className="grid gap-4 rounded-sm border border-white/10 bg-slate-950/80 p-5 sm:grid-cols-[72px_1fr]">
                      <div className="grid h-14 w-14 place-items-center rounded-sm bg-blue-600 text-lg font-bold">
                        0{index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <p className="mt-2 leading-7 text-slate-300">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionIntro
              eyebrow="Project depth"
              title="Representative builds for analytics-driven clients."
              description="Project pages show how workflows can be translated into dashboards, data models, APIs, AI-assisted review layers, and operational software."
            />
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-slate-950 focus-ring rounded-sm"
            >
              View all projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => {
              const Icon = project.icon;
              return (
                <Reveal key={project.slug} delay={index * 0.05}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="enterprise-card group block h-full overflow-hidden rounded-sm transition hover:-translate-y-1 hover:border-blue-300 focus-ring"
                  >
                    <div className="relative h-56">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                      <div className="absolute bottom-5 left-5 grid h-12 w-12 place-items-center rounded-sm bg-white text-blue-700">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-700">
                        {project.category}
                      </p>
                      <h3 className="mt-3 text-xl font-bold text-slate-950">{project.title}</h3>
                      <p className="mt-4 leading-7 text-slate-600">{project.summary}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
              eyebrow="Industries and workflows"
            title="Anchored in market analytics, flexible beyond it."
            description={`${brand.name} serves analytics-focused teams that need custom systems rather than generic templates: realtime dashboards, technical intelligence, data workflows, AI-assisted reporting, and automation platforms.`}
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <Reveal key={industry.title} delay={index * 0.04}>
                <article className="h-full rounded-sm border border-slate-200 bg-white p-6">
                  <Database className="h-7 w-7 text-blue-700" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-bold text-slate-950">{industry.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{industry.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <SectionIntro
              eyebrow="Technology"
              title="A practical stack for AI-driven analytics products."
              description="The stack supports Django platforms, Python analytics, realtime dashboards, API integrations, AI-ready data flows, mobile interfaces, and cloud deployment."
            />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <Reveal key={tech.name} delay={index * 0.02}>
                    <div className="rounded-sm border border-slate-200 bg-slate-50 p-5">
                      <Icon className="h-6 w-6 text-blue-700" aria-hidden="true" />
                      <p className="mt-4 text-sm font-bold text-slate-950">{tech.name}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-700 px-5 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
              Request Demo
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Have an analytics platform or workflow to build?</h2>
            <p className="mt-3 max-w-2xl text-blue-50">
              Share the workflow, data sources, integrations, users, and AI-assisted features you want to explore.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3.5 text-sm font-bold text-blue-800 transition hover:bg-slate-950 hover:text-white focus-ring"
          >
            Request Demo
          </Link>
        </div>
      </section>
      <section className="bg-slate-950 px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ComplianceNotice tone="dark" />
        </div>
      </section>
    </main>
  );
}
