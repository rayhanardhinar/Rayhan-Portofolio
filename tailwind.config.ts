import type { Config } from "tailwindcss";
import flowbiteReact from "flowbite-react/plugin/tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ".flowbite-react\\class-list.json",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#0A0F1C",
          DEFAULT: "#1E3A8A",
          light: "#60A5FA",
        },
        secondary: {
          light: "#F0F4F8",
          soft: "#D9E4E0",
          tint: "#EAF1F1",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [flowbiteReact],
};
export default config;
