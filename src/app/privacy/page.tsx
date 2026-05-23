import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Privacy | DataPulse Lab",
  description: "Privacy information for DataPulse Lab."
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        description="A placeholder privacy page ready for your final legal content."
      />
      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl leading-8 text-slate-700">
          <p>
            DataPulse Lab respects client confidentiality and treats project
            information, technical requirements, and shared business data with care.
            Replace this placeholder with your finalized privacy policy.
          </p>
        </div>
      </section>
    </main>
  );
}
