import Link from "next/link";
import { ArrowRight, CheckCircle2, Database } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { deliveryModel, images, industries, projects, services, techStack } from "@/lib/site-data";

export default function Home() {
  return (
    <main>
      <PageHero
        eyebrow="Data analytics and software engineering"
        title="Intelligent analytics platforms for data-driven organizations."
        description="DataPulse Lab is a software engineering company focused on building intelligent analytics platforms, realtime data systems, and custom financial technology solutions. We specialize in scalable web and mobile applications for market analysis, pattern recognition, business intelligence, and decision support."
        image={images.dashboard}
        imageAlt="Analytics dashboard displayed on a laptop"
        primaryHref="/services"
        primaryLabel="Explore services"
        secondaryHref="/projects"
        secondaryLabel="View project work"
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            "Django-based platforms",
            "Realtime dashboards",
            "API integrations",
            "High-performance architecture"
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-700" aria-hidden="true" />
              <span className="text-sm font-bold text-slate-800">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <SectionIntro
                eyebrow="Positioning"
                title="A pure data analytics engineering company, not an advisory desk."
                description="We build client-owned software systems for analysis, automation, integration, reporting, and workflow-specific decision support. Financial technology work is delivered as technical infrastructure and analytics tooling."
              />
              <div className="mt-8 rounded-sm border-l-4 border-blue-700 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                  Clear boundary
                </p>
                <p className="mt-3 leading-7 text-slate-700">
                  This is a software-only engagement model. DataPulse Lab builds
                  client-owned analytics infrastructure, not recommendation services.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Analytics-first thinking",
                  text: "Data models, dashboards, reporting flows, and user roles are designed around the questions each client needs to answer."
                },
                {
                  title: "Architecture-led delivery",
                  text: "Django platforms, APIs, queues, databases, and deployments are structured for maintainability and scale."
                },
                {
                  title: "Workflow-specific software",
                  text: "Every build is tailored to a client's data sources, users, operational rhythm, and decision process."
                },
                {
                  title: "Enterprise credibility",
                  text: "Clear scope, documentation, security-aware implementation, performance reviews, and long-term extensibility."
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

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Services"
            title="Engineering services for analytics platforms and data systems."
            description="The site is now structured like a service-based technology company: broad capabilities, dedicated service pages, and deeper project detail pages for long descriptions."
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

      <section className="bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Engineering backbone
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Built on reliable data architecture, not decorative dashboards.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Enterprise clients trust service companies when the site explains how
                systems are understood, designed, built, and maintained. DataPulse
                Lab now presents engineering depth first.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ["Data layer", "schemas, ingestion, validation"],
                  ["Application layer", "Django, APIs, permissions"],
                  ["Realtime layer", "queues, sockets, workers"],
                  ["Experience layer", "dashboards, portals, mobile"]
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

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionIntro
              eyebrow="Project depth"
              title="Project pages ready for long explanations."
              description="Featured work is now separated into individual pages with problem, solution, modules, architecture, and stack sections."
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
                      <img src={project.image} alt={project.imageAlt} className="h-full w-full object-cover" />
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

      <section className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Industries and workflows"
            title="Focused on data-heavy products and operational decision systems."
            description="DataPulse Lab serves teams that need custom systems rather than generic templates: analytics products, BI systems, research tools, and workflow applications."
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

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <SectionIntro
              eyebrow="Technology"
              title="A practical stack for analytics products."
              description="The technology stack is now aligned with the requested positioning: Django-based platforms, Python analytics, realtime dashboards, mobile applications, APIs, and cloud deployment."
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

      <section className="bg-blue-700 px-5 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
              Build with confidence
            </p>
            <h2 className="mt-3 text-3xl font-bold">Have a data platform or project to explain in detail?</h2>
            <p className="mt-3 max-w-2xl text-blue-50">
              The new structure gives every service and project its own page, so your future work can be documented with depth.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3.5 text-sm font-bold text-blue-800 transition hover:bg-slate-950 hover:text-white focus-ring"
          >
            Contact DataPulse Lab
          </Link>
        </div>
      </section>
    </main>
  );
}
