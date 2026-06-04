import { PageHero } from "@/components/PageHero";
import { brand } from "@/lib/site-data";

export const metadata = {
  title: "Privacy | Viquantra Labs",
  description:
    "Privacy practices for Viquantra Labs covering project context, data sources, technical requirements, and client-owned workflow information.",
  alternates: {
    canonical: "/privacy"
  }
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        description={`${brand.name} treats project context, data sources, technical requirements, and client-owned workflow information with care.`}
      />
      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl leading-8 text-slate-700">
          <p>
            {brand.name} respects client confidentiality and treats project
            information, technical requirements, and shared business data with care.
            Formal client work should be covered by project-specific confidentiality,
            data handling, and access-control terms.
          </p>
        </div>
      </section>
    </main>
  );
}
