import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { deliveryModel, images } from "@/lib/site-data";

export const metadata = {
  title: "Company | DataPulse Lab",
  description:
    "Learn about DataPulse Lab, a software engineering and data analytics company focused on Django platforms, realtime systems, and custom analytics products."
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Company"
        title="A software engineering company focused on intelligent data systems."
        description="DataPulse Lab builds analytics platforms, realtime dashboards, API integrations, and workflow-specific software for clients who need dependable data products."
        image={images.team}
        imageAlt="Software engineering team working together"
      />

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionIntro
            eyebrow="Who we are"
            title="Engineering-led, data-focused, and built for client trust."
            description="The company positioning is intentionally service-based: clear capability pages, strong project documentation, and a practical delivery model for custom software."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "Pure data analytics and software engineering focus",
              "Django-based platform delivery",
              "Realtime dashboard and backend architecture expertise",
              "Market analysis and business intelligence systems",
              "API integrations and automation workflows",
              "Custom web and mobile applications"
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.03}>
                <div className="rounded-sm border border-slate-200 bg-slate-50 p-5">
                  <CheckCircle2 className="h-5 w-5 text-blue-700" aria-hidden="true" />
                  <p className="mt-4 font-bold text-slate-950">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Delivery model"
            title="A structured path from workflow to working platform."
            description="Trust grows when clients can see how the work will move from idea to architecture, implementation, and scale."
            tone="dark"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {deliveryModel.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.04}>
                <article className="h-full rounded-sm border border-white/10 bg-white/5 p-6">
                  <p className="text-sm font-bold text-cyan-300">0{index + 1}</p>
                  <h3 className="mt-4 text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
