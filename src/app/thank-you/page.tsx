import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ComplianceNotice } from "@/components/ComplianceNotice";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Thank You | Viquantra Labs",
  description: "Thank you for requesting a demo from Viquantra Labs.",
  alternates: {
    canonical: "/thank-you"
  }
};

export default function ThankYouPage() {
  return (
    <main>
      <PageHero
        eyebrow="Request received"
        title="Thank you. Your demo request has been submitted."
        description="We will review the workflow, data sources, integrations, AI-assisted requirements, and regulated-use notes before responding."
        primaryHref="/services"
        primaryLabel="Explore Services"
        secondaryHref="/compliance"
        secondaryLabel="Compliance Boundary"
      />

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="enterprise-card rounded-sm p-6 sm:p-8">
            <CheckCircle2 className="h-8 w-8 text-blue-700" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-bold text-slate-950">What happens next</h2>
            <p className="mt-4 leading-7 text-slate-600">
              Your submission is captured through Netlify Forms. We will classify
              the project scope, identify any market-data or broker-integration
              boundaries, and respond with a suitable discussion path.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-slate-950 focus-ring rounded-sm"
            >
              Submit another request <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <ComplianceNotice />
        </div>
      </section>
    </main>
  );
}
