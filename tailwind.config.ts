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
        brand: {
          blue: "#0D86DA",   // Celeste principal [cite: 30]
          green: "#199B49",  // Verde secundario [cite: 34, 35]
          black: "#000000",  // Negro [cite: 31, 32]
          white: "#FFFFFF",  // Blanco [cite: 33]
        },
      },
      fontFamily: {
        zain: ['var(--font-zain)', 'sans-serif'], // Tipografía principal 
      },
    },
  },
  plugins: [],
};
export default config;