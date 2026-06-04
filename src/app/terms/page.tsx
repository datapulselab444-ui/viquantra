import { PageHero } from "@/components/PageHero";
import { brand } from "@/lib/site-data";

export const metadata = {
  title: "Terms | Viquantra Labs",
  description:
    "Terms for Viquantra Labs software engineering engagements, covering scope, delivery, ownership, support, and compliance boundaries.",
  alternates: {
    canonical: "/terms"
  }
};

export default function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Terms"
        description={`${brand.name} provides software engineering and analytics infrastructure services under project-specific scope, ownership, support, and compliance terms.`}
      />
      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl leading-8 text-slate-700">
          <p>
            Engagement scope, delivery milestones, intellectual property ownership,
            support terms, and confidentiality requirements should be defined in
            the final client agreement for each project.
          </p>
        </div>
      </section>
    </main>
  );
}
