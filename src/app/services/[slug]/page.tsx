import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { services } from "@/lib/site-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) return {};

  return {
    title: `${service.title} | DataPulse Lab`,
    description: service.summary
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);
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
        primaryLabel="Discuss this service"
        secondaryHref="/projects"
        secondaryLabel="See related work"
      />

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <SectionIntro
              eyebrow="What we build"
              title="A practical service page for deep explanation."
              description="Use this page as a long-form service profile. It can grow with methodology, project examples, screenshots, architecture diagrams, and client-specific content."
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

      <section className="bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2">
            {service.pageSections.map((section, index) => (
              <Reveal key={section.heading} delay={index * 0.05}>
                <article className="enterprise-card h-full rounded-sm p-8">
                  <h2 className="text-2xl font-bold text-slate-950">{section.heading}</h2>
                  <p className="mt-5 leading-8 text-slate-600">{section.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-sm border border-slate-200 p-8">
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
            <div className="rounded-sm border border-slate-200 bg-slate-950 p-8 text-white">
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

      <section className="bg-slate-950 px-5 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Next step
            </p>
            <h2 className="mt-3 text-3xl font-bold">Need a system like this?</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Share your workflow, data sources, and project goals. We will help
              translate them into a clear platform architecture.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-blue-600 hover:text-white focus-ring"
          >
            Contact us <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
