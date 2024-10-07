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
        background: "#0f141f",
        primary: "#161d2f",
        secondary: "#5b6a90",
        accent: "#fc4844",
      },
    },
    colors: {
      white: {
        DEFAULT: "#fefcfb",
      },
    },
  },
  plugins: [],
};
export default config;
