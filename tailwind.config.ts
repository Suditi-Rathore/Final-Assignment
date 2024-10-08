import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"; 

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".clip-custom": {
          "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%)",
        },
      };
      addUtilities(newUtilities);
    }),
  ],

};
export default config;
