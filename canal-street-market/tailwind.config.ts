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

      },
      colors: {
        custom_blue: "#5ea3ec",
        custom_red: "#f64444",
        custom_yellow: "#ffb400",
      },
      // custom transition for project
      transitionProperty: {
        "custom-transition": "all",
      },
      transitionDuration: {
        "custom-transition": "300",
      },
      transitionTimingFunction: {
        "custom-transition": "linear",
      },
      keyframes: {
        wave: {
          to: {
            'margin-left': '-51%',
          },
        },
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-104%)" }
        }
      },
      animation: {
        wave: 'wave 1.5s ease-in-out infinite',
        "loop-scroll": "loop-scroll 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
