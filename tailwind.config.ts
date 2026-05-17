import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        brand: {
          blue: "#4f9cf9",
          purple: "#7c3aed",
          cyan: "#06b6d4",
        },
        dark: {
          900: "#050a15",
          800: "#0a1628",
          700: "#0d1f3c",
          600: "#0f2444",
          500: "#162d52",
          400: "#1e3a5f",
          300: "#254870",
        },
      },
      backgroundImage: {
        "grad-primary": "linear-gradient(135deg, #4f9cf9, #7c3aed)",
        "grad-secondary": "linear-gradient(135deg, #06b6d4, #4f9cf9)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
        "float": "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
