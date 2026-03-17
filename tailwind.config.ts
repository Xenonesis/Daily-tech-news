import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        surface: "#12121a",
        surfaceHighlight: "#1a1a25",
        primary: "#00dc82",
        primaryDark: "#00a862",
        secondary: "#7c3aed",
        accent: "#f59e0b",
        text: "#f8fafc",
        textMuted: "#94a3b8",
        border: "#2d2d3a",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        body: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "linear-gradient(to bottom, rgba(10,10,15,0.8), rgba(10,10,15,1)), url('/grid-pattern.svg')",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "glow": "glow 2s ease-in-out infinite alternate",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0,220,130,0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(0,220,130,0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
