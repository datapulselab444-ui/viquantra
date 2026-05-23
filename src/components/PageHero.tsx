import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {image ? (
        <img
          src={image}
          alt={imageAlt ?? ""}
          className="absolute inset-0 h-full w-full object-cover opacity-28"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/92 to-slate-950/45" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.26em] text-cyan-300">{eyebrow}</p>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{description}</p>
          {(primaryHref && primaryLabel) || (secondaryHref && secondaryLabel) ? (
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {primaryHref && primaryLabel ? (
                <Link
                  href={primaryHref}
                  className="inline-flex items-center justify-center rounded-sm bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500 focus-ring"
                >
                  {primaryLabel}
                </Link>
              ) : null}
              {secondaryHref && secondaryLabel ? (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center justify-center rounded-sm border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-slate-950 focus-ring"
                >
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
