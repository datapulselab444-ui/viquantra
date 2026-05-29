type BrandMarkProps = {
  tone?: "dark" | "light";
  className?: string;
};

export function BrandMark({ tone = "dark", className = "" }: BrandMarkProps) {
  const shell = tone === "dark" ? "bg-slate-950 text-white" : "bg-white text-slate-950";
  const middleStroke = tone === "dark" ? "#ffffff" : "#0f172a";
  const gridStroke = tone === "dark" ? "rgba(255,255,255,0.12)" : "rgba(15,23,42,0.12)";

  return (
    <span
      aria-hidden="true"
      className={`relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-sm ${shell} ${className}`}
    >
      <span className="absolute inset-0 bg-gradient-to-br from-cyan-300/20 via-transparent to-blue-700/20" />
      <svg className="relative h-8 w-8" viewBox="0 0 44 44" fill="none">
        <path d="M9 9.5h26" stroke={gridStroke} strokeWidth="1.5" />
        <path d="M9 22h26" stroke={gridStroke} strokeWidth="1.5" />
        <path d="M9 34.5h26" stroke={gridStroke} strokeWidth="1.5" />
        <path
          d="M10 14h7.5c7 0 8.8 16 16.5 16"
          stroke="#22d3ee"
          strokeLinecap="round"
          strokeWidth="3.4"
        />
        <path
          d="M10 30h7.5c7 0 8.8-16 16.5-16"
          stroke="#2563eb"
          strokeLinecap="round"
          strokeWidth="3.4"
        />
        <path d="M10 22h24" stroke={middleStroke} strokeLinecap="round" strokeWidth="2.2" />
        {[10, 34].map((x) =>
          [14, 22, 30].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="2.8" fill={middleStroke} />
          ))
        )}
        <circle cx="34" cy="14" r="3.1" fill="#22d3ee" />
        <circle cx="34" cy="30" r="3.1" fill="#2563eb" />
      </svg>
    </span>
  );
}
