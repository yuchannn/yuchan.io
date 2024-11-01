import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        'base': '0.75rem',    // 12px
        'lg': '0.875rem',     // 14px
        '4xl': '1.75rem',     // Smaller h1
        'xl': '1rem',         // 16px for section headers
        'sm': '0.7rem',       // Even smaller for small text
      }
    },
  },
  plugins: [typography],
};

export default config;
