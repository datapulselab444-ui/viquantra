export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light"
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`text-sm font-bold uppercase tracking-[0.22em] ${dark ? "text-cyan-300" : "text-blue-700"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${dark ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      <p className={`mt-5 text-base leading-8 ${dark ? "text-slate-300" : "text-slate-600"}`}>
        {description}
      </p>
    </div>
  );
}
