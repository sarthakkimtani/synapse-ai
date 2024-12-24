import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["md:col-span-1", "md:col-span-2"],
  theme: {
    extend: {
      colors: {
        primary: "#FFE9B4",
      },
    },
  },
  plugins: [],
} satisfies Config;
