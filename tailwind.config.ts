import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ── Colors ──────────────────────────────────────────────────────────────
      colors: {
        primary: {
          DEFAULT: "#CC0000",
          bright: "#FF2D2D",
          dark: "#8B0000",
        },
        surface: {
          DEFAULT: "#111111",
          2: "#1A1A1A",
        },
        background: "#080808",
        text: {
          DEFAULT: "#FFFFFF",
          muted: "#888888",
        },
        glass: {
          border: "rgba(255, 255, 255, 0.08)",
          red: "rgba(230, 48, 48, 0.08)",
        },
      },

      // ── Font Families ────────────────────────────────────────────────────────
      fontFamily: {
        display: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },

      // ── Font Sizes (Fluid) ───────────────────────────────────────────────────
      fontSize: {
        "display-2xl": ["clamp(3rem, 6vw + 0.5rem, 5.5rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-xl": ["clamp(2.5rem, 4.5vw + 0.5rem, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 3vw + 0.5rem, 3.5rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 2vw + 0.25rem, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "body-xl": ["clamp(1.125rem, 1.5vw, 1.25rem)", { lineHeight: "1.75" }],
        "body-lg": ["clamp(1rem, 1.25vw, 1.125rem)", { lineHeight: "1.7" }],
      },

      // ── Spacing ──────────────────────────────────────────────────────────────
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "container": "clamp(1.5rem, 5vw, 6rem)",
      },

      // ── Box Shadows ──────────────────────────────────────────────────────────
      boxShadow: {
        "glow-red": "0 0 20px rgba(204, 0, 0, 0.4), 0 0 60px rgba(204, 0, 0, 0.15)",
        "glow-red-sm": "0 0 12px rgba(204, 0, 0, 0.3), 0 0 30px rgba(204, 0, 0, 0.1)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.4), 0 1px 0 rgba(255, 255, 255, 0.03)",
        "card-hover": "0 8px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(204, 0, 0, 0.2)",
      },

      // ── Background Images ────────────────────────────────────────────────────
      backgroundImage: {
        "red-glow": "radial-gradient(ellipse at 50% -20%, rgba(204, 0, 0, 0.25) 0%, transparent 65%)",
        "grid-pattern": "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },

      // ── Border Radius ────────────────────────────────────────────────────────
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },

      // ── Animation ────────────────────────────────────────────────────────────
      animation: {
        "marquee": "marquee 25s linear infinite",
        "float-1": "float-1 6s ease-in-out infinite",
        "float-2": "float-2 8s ease-in-out infinite",
        "float-3": "float-3 7s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "scan": "scan 8s linear infinite",
        "gradient-shift": "gradient-shift 6s ease infinite",
        "spin-slow": "spin 8s linear infinite",
      },

      // ── Keyframes ────────────────────────────────────────────────────────────
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-1": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-8px) rotate(0.5deg)" },
          "66%": { transform: "translateY(-4px) rotate(-0.5deg)" },
        },
        "float-2": {
          "0%, 100%": { transform: "translateY(-4px)" },
          "50%": { transform: "translateY(4px)" },
        },
        "float-3": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(204,0,0,0.3), 0 0 60px rgba(204,0,0,0.1)" },
          "50%": { boxShadow: "0 0 30px rgba(204,0,0,0.5), 0 0 80px rgba(204,0,0,0.2)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },

      // ── Transition Timing ────────────────────────────────────────────────────
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },

      // ── Max Width ────────────────────────────────────────────────────────────
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },

      // ── Blur ─────────────────────────────────────────────────────────────────
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
