import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { images, projects } from "@/lib/site-data";

export const metadata = {
  title: "Projects | Viquantra",
  description:
    "Explore Viquantra project examples across analytics platforms, realtime systems, pattern recognition, API integrations, BI dashboards, and Android apps."
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Project work"
        title="Detailed project pages for analytics and software systems."
        description="The project section is designed to scale as you add deeper explanations, architecture notes, screenshots, implementation decisions, and business context."
        image={images.team}
        imageAlt="Software team collaborating on analytics products"
      />

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Featured systems"
            title="Representative builds with room for long-form case studies."
            description="Each card opens a dedicated page with challenge, solution, modules, architecture, and stack details."
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
                      <img src={project.image} alt={project.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
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
