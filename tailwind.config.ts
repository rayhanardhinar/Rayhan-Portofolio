import type { Config } from "tailwindcss";
import flowbiteReact from "flowbite-react/plugin/tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ".flowbite-react\\class-list.json"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#0E1720FF",
          DEFAULT: "#3F4E4F",
          light: "#A5C8D6",
        },
        secondary: {
          light: "#F0F4F8",
          soft: "#D9E4E0",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [flowbiteReact],
};
export default config;