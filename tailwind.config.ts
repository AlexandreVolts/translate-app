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
        black: "#040711",
        white: "#F9FAFB",
        blue: "#3662E3",
        cyan: "#7CA9F3",
        "dark-gray": "#212936cc",
        "darker-gray": "#121826cc",
        "gray": "#394150",
        "light-gray": "#4D5562",
      },
      backgroundImage: {
        space: "url('/hero_img.jpg')",
      },
      fontSize: {
        "md": "1rem",
        "sm": "0.875rem",
        "xs": "0.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
