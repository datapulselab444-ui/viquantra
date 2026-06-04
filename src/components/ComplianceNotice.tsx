import { complianceDisclaimer } from "@/lib/site-data";

type ComplianceNoticeProps = {
  tone?: "light" | "dark";
  compact?: boolean;
  className?: string;
};

export function ComplianceNotice({
  tone = "light",
  compact = false,
  className = ""
}: ComplianceNoticeProps) {
  const dark = tone === "dark";

  return (
    <aside
      className={`rounded-sm border ${
        dark
          ? "border-white/10 bg-white/[0.04] text-slate-300"
          : "border-blue-100 bg-blue-50 text-slate-700"
      } ${compact ? "p-4" : "p-6"} ${className}`}
    >
      <p
        className={`text-xs font-bold uppercase tracking-[0.2em] ${
          dark ? "text-cyan-300" : "text-blue-700"
        }`}
      >
        Compliance note
      </p>
      <p className={`${compact ? "mt-2 text-xs leading-6" : "mt-3 text-sm leading-7"}`}>
        {complianceDisclaimer}
      </p>
    </aside>
  );
}

