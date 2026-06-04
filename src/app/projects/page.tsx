import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { brand, images, projects } from "@/lib/site-data";

export const metadata = {
  title: "Projects | Viquantra Labs",
  description:
    "Explore Viquantra Labs projects across realtime analytics, technical intelligence, API integrations, dashboards, workflow automation, and custom software.",
  alternates: {
    canonical: "/projects"
  }
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Project work"
        title="Analytics systems translated into real software architecture."
        description={`${brand.name} builds client-owned platforms with clear modules, data models, AI-assisted review layers, APIs, dashboards, and deployment-ready engineering.`}
        image={images.team}
        imageAlt="Software team collaborating on analytics products"
        primaryHref="/contact"
        primaryLabel="Request Demo"
        secondaryHref="/services"
        secondaryLabel="Explore Services"
      />

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Featured systems"
            title="Representative builds for analytics-driven workflows."
            description="Each card opens a dedicated page with challenge, solution, modules, architecture, stack details, and safe informational positioning."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Reveal key={project.slug} delay={index * 0.035}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="enterprise-card group grid h-full overflow-hidden rounded-sm transition hover:-translate-y-1 hover:border-blue-300 focus-ring md:grid-cols-[0.95fr_1.05fr]"
                  >
                    <div className="relative min-h-72">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 48vw, 100vw"
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
                      <h2 className="mt-3 text-2xl font-bold text-slate-950">{project.title}</h2>
                      <p className="mt-4 leading-7 text-slate-600">{project.summary}</p>
                      <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                        Open project page <ArrowRight className="h-4 w-4" aria-hidden="true" />
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
