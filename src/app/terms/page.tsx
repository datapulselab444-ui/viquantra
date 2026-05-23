import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Terms | DataPulse Lab",
  description: "Terms information for DataPulse Lab."
};

export default function TermsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Terms"
        description="A placeholder terms page ready for your final legal content."
      />
      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl leading-8 text-slate-700">
          <p>
            Engagement scope, delivery milestones, intellectual property ownership,
            support terms, and confidentiality requirements should be defined in
            the final client agreement. Replace this placeholder with your finalized
            terms.
          </p>
        </div>
      </section>
    </main>
  );
}
