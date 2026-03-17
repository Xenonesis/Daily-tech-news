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
        // Deep space-inspired palette
        background: "#030014",
        surface: "#0a0a1a",
        surfaceHighlight: "#12122a",
        surfaceLight: "#1a1a3e",
        
        // Vibrant accent colors
        primary: "#00f0ff",
        primaryDark: "#00c8d4",
        secondary: "#ff00ff",
        secondaryDark: "#d400d4",
        accent: "#ffe600",
        accentOrange: "#ff6b00",
        
        // Text colors
        text: "#ffffff",
        textMuted: "#8892b0",
        textDim: "#5a6478",
        
        // Borders and dividers
        border: "#1e1e3f",
        borderLight: "#2d2d5a",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "monospace"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["5rem", { lineHeight: "1", letterSpacing: "-0.05em" }],
        "display-lg": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.04em" }],
        "display-md": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.03em" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse at center, rgba(0,240,255,0.15) 0%, transparent 70%)",
        "neon-grid": `
          linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px)
        `,
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-down": "slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "glow": "glow 2s ease-in-out infinite alternate",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "border-flow": "borderFlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glow: {
          "0%": { 
            boxShadow: "0 0 20px rgba(0,240,255,0.3), 0 0 40px rgba(0,240,255,0.1)",
          },
          "100%": { 
            boxShadow: "0 0 40px rgba(0,240,255,0.6), 0 0 80px rgba(0,240,255,0.2)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        borderFlow: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
      },
      boxShadow: {
        "neon": "0 0 20px rgba(0,240,255,0.3), 0 0 40px rgba(0,240,255,0.1)",
        "neon-lg": "0 0 40px rgba(0,240,255,0.4), 0 0 80px rgba(0,240,255,0.2)",
        "neon-xl": "0 0 60px rgba(0,240,255,0.5), 0 0 120px rgba(0,240,255,0.25)",
        "purple-glow": "0 0 30px rgba(255,0,255,0.3), 0 0 60px rgba(255,0,255,0.15)",
      },
      backdropBlur: {
        xs: "2px",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
    },
  },
  plugins: [],
};

export default config;
