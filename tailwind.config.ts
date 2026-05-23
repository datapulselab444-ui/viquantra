import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#05070c",
        panel: "#0a111d",
        line: "rgba(148, 163, 184, 0.18)",
        cyanfire: "#35d6ff",
        pulseblue: "#4f8cff",
        mint: "#5ff0c7",
        amberline: "#f6c65b"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 40px rgba(53, 214, 255, 0.18)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.38)"
      },
      backgroundImage: {
        "radial-grid": "radial-gradient(circle at 50% 0%, rgba(53,214,255,0.18), transparent 34%), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        scan: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.45", transform: "scaleX(0.85)" },
          "50%": { opacity: "1", transform: "scaleX(1)" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        scan: "scan 6s linear infinite",
        pulseLine: "pulseLine 3.5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
