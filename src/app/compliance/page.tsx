import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { ComplianceNotice } from "@/components/ComplianceNotice";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionIntro } from "@/components/SectionIntro";
import { brand } from "@/lib/site-data";

export const metadata = {
  title: "Compliance | Viquantra Labs",
  description:
    "Compliance positioning for Viquantra Labs as a software engineering and analytics infrastructure provider, not an investment adviser or research analyst.",
  alternates: {
    canonical: "/compliance"
  }
};

const allowed = [
  "Custom analytics software",
  "Realtime informational dashboards",
  "Technical intelligence systems",
  "Pattern recognition tools",
  "Workflow automation",
  "API and webhook integrations",
  "AI-assisted summaries and review workflows",
  "Synthetic demo dashboards"
];

const avoided = [
  "Investment advice",
  "Research recommendations",
  "Trading calls",
  "Buy, sell, or hold recommendations",
  "Portfolio management",
  "Guaranteed returns or performance claims",
  "Public stock tips",
  "Unreviewed order-execution workflows"
];

const reviewItems = [
  "Does the project use securities-market data?",
  "Will the output be public or client-facing?",
  "Does it generate recommendations or ranking language?",
  "Does it connect to broker APIs or order execution?",
  "Is the client SEBI registered where registration is required?",
  "Can demos use synthetic data and generic labels?"
];

export default function CompliancePage() {
  return (
    <main>
      <PageHero
        eyebrow="Compliance"
        title="Software infrastructure with clear regulated-use boundaries."
        description={`${brand.name} builds AI-driven analytics systems and custom software. We do not provide investment advice, research recommendations, trading calls, or portfolio management services.`}
        primaryHref="/contact"
        primaryLabel="Request Demo"
        secondaryHref="/services"
        secondaryLabel="Explore Services"
      />

      <section className="bg-slate-950 px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ComplianceNotice tone="dark" />
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="enterprise-card h-full rounded-sm p-6 sm:p-8">
              <CheckCircle2 className="h-8 w-8 text-blue-700" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-bold text-slate-950">What we build</h2>
              <div className="mt-6 grid gap-3">
                {allowed.map((item) => (
                  <p key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-blue-700" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="enterprise-card h-full rounded-sm p-6 sm:p-8">
              <XCircle className="h-8 w-8 text-red-600" aria-hidden="true" />
              <h2 className="mt-5 text-2xl font-bold text-slate-950">What we do not provide</h2>
              <div className="mt-6 grid gap-3">
                {avoided.map((item) => (
                  <p key={item} className="flex items-center gap-3 text-slate-700">
                    <XCircle className="h-4 w-4 text-red-600" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <SectionIntro
            eyebrow="Project review"
            title="Market-related builds require careful scoping."
            description="Before accepting a market-data or broker-integrated project, we classify the workflow, public exposure, output language, execution risk, and client responsibilities."
          />
          <div className="grid gap-4">
            {reviewItems.map((item, index) => (
              <Reveal key={item} delay={index * 0.03}>
                <div className="flex items-start gap-4 rounded-sm border border-slate-200 bg-white p-5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-blue-50 text-sm font-bold text-blue-700">
                    0{index + 1}
                  </span>
                  <p className="font-semibold text-slate-800">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-cyan-300" aria-hidden="true" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Boundary first
              </p>
            </div>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Bring regulated-use questions early.</h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              If your project involves market data, broker APIs, public users, or
              automated workflows, mention it in the demo request so the scope can
              be reviewed before implementation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
