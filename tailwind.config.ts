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
        background: "#FAF8F3",
        surface: "#F3F0E8",
        card: "#FFFFFF",
        primary: {
          DEFAULT: "#44564A",
          foreground: "#FAF8F3",
        },
        forest: {
          DEFAULT: "#44564A",
          dark: "#141A16",
        },
        gold: {
          DEFAULT: "#BFA875",
          light: "#D4C4A0",
        },
        sage: "#8A9A8E",
        green: "#6B9B7A",
        border: "rgba(68, 86, 74, 0.18)",
        muted: {
          foreground: "#5C6B61",
        },
        accent: {
          DEFAULT: "#BFA875",
          light: "#D4C4A0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      maxWidth: {
        luxe: "1280px",
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
