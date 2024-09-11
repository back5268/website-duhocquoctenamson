import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        "blur-primary": "var(--blur-primary-color)",
        "light-primary": "var(--light-primary-color)",
        "dark-primary": "var(--dark-primary-color)",
        secondary: "var(--secondary-color)",
      },
      boxShadow: {
        custom:
          "rgba(0, 0, 0, 0.2) 0px 5px 15px",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
