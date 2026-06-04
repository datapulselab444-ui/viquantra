import { CheckCircle2 } from "lucide-react";
import { ComplianceNotice } from "@/components/ComplianceNotice";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { brand, deliveryModel, images } from "@/lib/site-data";

export const metadata = {
  title: "Company | Viquantra Labs",
  description:
    "Learn about Viquantra Labs, an AI-driven analytics engineering company focused on realtime systems, custom platforms, data infrastructure, and workflow automation.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Company"
        title="An AI-driven analytics engineering studio for realtime systems."
        description={`${brand.name}, founded by G. Muralee Sharma, builds custom analytics platforms, technical intelligence systems, realtime dashboards, API integrations, and workflow automation tools for clients who need dependable data products.`}
        image={images.team}
        imageAlt="Software engineering team working together"
      />

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionIntro
            eyebrow="Who we are"
            title="Founder-led, engineering-driven, and built for client trust."
            description={`${brand.name} is positioned as a custom software and analytics infrastructure company. The focus is practical engineering: clean data models, reliable dashboards, AI-assisted workflows, integrations, deployment, and documentation.`}
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "AI-driven analytics engineering focus",
              "Django-based platform delivery",
              "Realtime dashboard and backend architecture expertise",
              "Market data analytics and technical intelligence systems",
              "API integrations and workflow automation",
              "Client-owned custom software platforms"
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

      <section className="bg-slate-50 px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionIntro
            eyebrow="Operating boundary"
            title="We build software systems, not regulated advice services."
            description="That boundary protects the brand and gives serious clients confidence. Market-related work is scoped as analytics infrastructure, informational dashboards, technical structure detection, data visualization, and automation."
          />
          <ComplianceNotice />
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-14 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
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
