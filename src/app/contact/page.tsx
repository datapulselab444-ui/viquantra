import { Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/site-data";

export const metadata = {
  title: "Contact | DataPulse Lab",
  description:
    "Contact DataPulse Lab to discuss analytics platforms, realtime data systems, Django applications, API integrations, and custom software projects."
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation about your data platform."
        description="Tell us about the workflow, data sources, users, integrations, dashboards, or mobile product you want to build."
        image={images.analytics}
        imageAlt="Analytics dashboard for a business software project"
      />

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="enterprise-card rounded-sm p-8">
              <h2 className="text-2xl font-bold text-slate-950">Contact details</h2>
              <div className="mt-8 grid gap-5">
                <ContactItem icon={Mail} label="Email" value="hello@datapulselabs.com" />
                <ContactItem icon={Phone} label="Phone" value="+91 00000 00000" />
                <ContactItem icon={MapPin} label="Office" value="India, remote-first engineering studio" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <form className="enterprise-card rounded-sm p-8" aria-label="Project inquiry form">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Name" name="name" placeholder="Your name" />
                <FormField label="Work email" name="email" placeholder="you@company.com" type="email" />
                <FormField label="Company" name="company" placeholder="Company name" />
                <FormField label="Project type" name="projectType" placeholder="Analytics, realtime, API, app" />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-bold text-slate-800">
                  Project brief
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="Share the workflow, data sources, current tools, users, and the system you want to build."
                  className="focus-ring w-full resize-none rounded-sm border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400"
                />
              </div>
              <button
                type="submit"
                className="mt-6 rounded-sm bg-blue-700 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-950 focus-ring"
              >
                Send inquiry
              </button>
            </form>
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

function FormField({
  label,
  name,
  placeholder,
  type = "text"
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-bold text-slate-800">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="focus-ring w-full rounded-sm border border-slate-300 bg-white px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400"
      />
    </div>
  );
}
