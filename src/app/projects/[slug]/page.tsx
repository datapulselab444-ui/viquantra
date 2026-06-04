import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ComplianceNotice } from "@/components/ComplianceNotice";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { projects } from "@/lib/site-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | Viquantra Labs Projects`,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`
    }
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const Icon = project.icon;

  return (
    <main>
      <PageHero
        eyebrow={project.category}
        title={project.title}
        description={project.summary}
        image={project.image}
        imageAlt={project.imageAlt}
        primaryHref="/contact"
        primaryLabel="Request Demo"
        secondaryHref="/projects"
        secondaryLabel="All Projects"
      />

      <section className="bg-slate-950 px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ComplianceNotice tone="dark" />
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="grid h-16 w-16 place-items-center rounded-sm bg-blue-700 text-white">
              <Icon className="h-8 w-8" aria-hidden="true" />
            </div>
            <SectionIntro
              eyebrow="Project narrative"
              title="From workflow problem to engineered analytics system."
              description="Each project explains the client-style challenge, software solution, modules, architecture, implementation choices, and compliance-aware boundaries."
            />
          </div>
          <div className="grid gap-5">
            <Reveal>
              <article className="enterprise-card rounded-sm p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-950">Challenge</h2>
                <p className="mt-5 leading-8 text-slate-600">{project.challenge}</p>
              </article>
            </Reveal>
            <Reveal delay={0.05}>
              <article className="enterprise-card rounded-sm p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-950">Solution</h2>
                <p className="mt-5 leading-8 text-slate-600">{project.solution}</p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {project.demoVisuals ? (
        <section className="bg-slate-950 px-5 py-14 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Sanitized demo"
              title="Public-safe product visual from the analytics workflow."
              description="The screenshots below use masked values, cropped application chrome, and informational interface language suitable for public marketing."
              tone="dark"
              align="center"
            />
            <div className="mt-10 grid gap-6">
              {project.demoVisuals.map((visual, index) => (
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

      {project.visuals ? (
        <section className="bg-slate-950 px-5 py-14 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Visual system"
              title="Product views for data readiness, review, and scenario tracking."
              description="These visuals show how the module presents technical readiness, workflow state, synthetic scenario data, and quality controls in an informational interface."
              tone="dark"
              align="center"
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {project.visuals.map((visual, index) => (
                <Reveal key={visual.title} delay={index * 0.05}>
                  <ProjectVisual visual={visual} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-slate-50 px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-sm border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-950">Core modules</h2>
              <div className="mt-6 grid gap-3">
                {project.modules.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-blue-700" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="rounded-sm border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-slate-950">Architecture highlights</h2>
              <div className="mt-6 grid gap-3">
                {project.architecture.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-blue-700" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-sm bg-slate-950 p-6 text-white sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                  Stack
                </p>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Technology used</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-sm border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-700 px-5 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Need a similar analytics platform?</h2>
            <p className="mt-3 max-w-2xl text-blue-50">
              Share your workflow, data sources, integrations, AI-assisted
              review needs, and deployment requirements.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-6 py-3.5 text-sm font-bold text-blue-800 transition hover:bg-slate-950 hover:text-white focus-ring"
          >
            Request Demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function ProjectVisual({
  visual
}: {
  visual: NonNullable<(typeof projects)[number]["visuals"]>[number];
}) {
  return (
    <article className="h-full overflow-hidden rounded-sm border border-white/10 bg-white/[0.04] shadow-2xl">
      <div className="border-b border-white/10 bg-slate-900 p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
            Demo UI
          </span>
        </div>
      </div>
      <div className="min-h-[310px] bg-slate-950 p-4">
        {visual.type === "dashboard" ? <DashboardMockup /> : null}
        {visual.type === "pipeline" ? <PipelineMockup /> : null}
        {visual.type === "quality" ? <QualityMockup /> : null}
      </div>
      <div className="border-t border-white/10 p-5">
        <h3 className="text-xl font-bold text-white">{visual.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{visual.caption}</p>
      </div>
    </article>
  );
}

function DashboardMockup() {
  const bars = [48, 72, 58, 86, 64, 92, 76, 68];

  return (
    <div className="grid h-full gap-4">
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          ["Ready", "18"],
          ["Blocked", "04"],
          ["Active", "07"]
        ].map(([label, value]) => (
          <div key={label} className="rounded-sm border border-white/10 bg-white/[0.04] p-3">
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{label}</p>
            <p className="mt-2 text-2xl font-bold text-white">{value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-sm border border-white/10 bg-white/[0.04] p-4">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-bold text-white">Tracked scenarios</p>
          <span className="rounded-sm bg-emerald-400/10 px-2 py-1 text-xs font-bold text-emerald-300">
            Fresh data
          </span>
        </div>
        <div className="flex h-28 items-end gap-2">
          {bars.map((bar, index) => (
            <span
              key={`${bar}-${index}`}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-700 to-cyan-300"
              style={{ height: `${bar}%` }}
            />
          ))}
        </div>
      </div>
      <div className="grid gap-2">
        {["Pattern reviewed", "Scenario updated", "Scan log attached"].map((item) => (
          <div key={item} className="flex items-center justify-between rounded-sm border border-white/10 bg-white/[0.04] px-3 py-2 text-sm">
            <span className="text-slate-300">{item}</span>
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
          </div>
        ))}
      </div>
    </div>
  );
}

function PipelineMockup() {
  const steps = ["Data sync", "Feature build", "Pattern scan", "Readiness check", "Human review"];

  return (
    <div className="flex min-h-[278px] flex-col justify-center gap-4">
      {steps.map((step, index) => (
        <div key={step} className="grid grid-cols-[42px_1fr] items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-sm bg-blue-600 text-sm font-bold text-white">
            {index + 1}
          </div>
          <div className="rounded-sm border border-white/10 bg-white/[0.04] p-3">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-bold text-white">{step}</p>
              <span className={index === 4 ? "text-xs font-bold text-emerald-300" : "text-xs font-bold text-cyan-300"}>
                {index === 4 ? "Gated" : "Verified"}
              </span>
            </div>
            <div className="mt-3 h-1.5 rounded-full bg-white/10">
              <span
                className="block h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-300"
                style={{ width: `${58 + index * 9}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function QualityMockup() {
  const checks = [
    ["Data freshness", "Pass", "text-emerald-300"],
    ["Indicator state", "Pass", "text-emerald-300"],
    ["Safety checks", "Blocked", "text-amber-300"],
    ["Sizing rule", "Ready", "text-cyan-300"]
  ];

  return (
    <div className="grid min-h-[278px] gap-4">
      <div className="rounded-sm border border-white/10 bg-white/[0.04] p-4">
        <p className="text-sm font-bold text-white">Quality monitor</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {[
            ["Freshness", "98%"],
            ["Review", "Open"],
            ["Rules", "Synced"],
            ["Alerts", "Armed"]
          ].map(([label, value]) => (
            <div key={label} className="rounded-sm bg-slate-900 p-3">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{label}</p>
              <p className="mt-2 font-bold text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-2">
        {checks.map(([label, value, color]) => (
          <div key={label} className="flex items-center justify-between rounded-sm border border-white/10 bg-white/[0.04] px-3 py-2 text-sm">
            <span className="text-slate-300">{label}</span>
            <span className={`font-bold ${color}`}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
