import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // custom_sky_blue: "#00c1b5",
        // custom_blue: "#1d3fbb",
        // custom_yellow: "#ffbe00",
        // custom_red: "#e30512",
        // custom_orange: "#ff651a",
      },
    },
  },
  plugins: [],
};
export default config;
