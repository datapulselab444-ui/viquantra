import { Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ComplianceNotice } from "@/components/ComplianceNotice";
import { DemoRequestForm } from "@/components/DemoRequestForm";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { contactLinks, images } from "@/lib/site-data";

export const metadata = {
  title: "Request Demo | Viquantra Labs",
  description:
    "Request a demo for AI-driven realtime analytics platforms, technical intelligence systems, workflow automation, API integrations, and custom software.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Request Demo"
        title="Plan an AI-driven analytics platform with clear boundaries."
        description="Tell us about the workflow, data sources, users, integrations, dashboards, AI-assisted features, and compliance-sensitive areas you want to discuss."
        image={images.analytics}
        imageAlt="Analytics dashboard for a business software project"
      />

      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="grid gap-6">
              <div className="enterprise-card rounded-sm p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-slate-950">Contact details</h2>
                <p className="mt-4 leading-7 text-slate-600">
                  Share enough context for us to classify the project correctly:
                  workflow, data sources, users, AI needs, integrations, and
                  whether securities-market data is involved.
                </p>
                <div className="mt-8 grid gap-5">
                  <ContactItem icon={Mail} label="Email" value={contactLinks.email} />
                  <ContactItem icon={Phone} label="Call" value="Scheduled after inquiry" />
                  <ContactItem icon={MapPin} label="Studio" value="India, remote-first engineering studio" />
                </div>
              </div>
              <ComplianceNotice />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <DemoRequestForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm bg-blue-50 text-blue-700">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{label}</p>
        <p className="mt-1 font-semibold text-slate-950">{value}</p>
      </div>
    </div>
  );
}
