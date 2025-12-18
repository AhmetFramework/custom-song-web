import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#6D5BD0",
        secondary: "#5DA9E2",
        textPrimary: "#1F2937",
        textSecondary: "#6B7280",
        accent: "#F4C430",
      },
    },
  },
  plugins: [],
};

export default config;
