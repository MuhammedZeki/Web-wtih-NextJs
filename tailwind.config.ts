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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
     colors:{
        mycolor:{
          100: "#5FB0CE",
          200: "#1F466F",
          300: "#364149",
          400: "#0D0D11",
          500: "#3E4548",
          600: "#323B44",
          700: "#F4F4F4"


        }
    },
     fontFamily:{
        poppins:["Poppins", "sans-serif"],
        mochiy: ["Mochiy Pop One", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],

      },
  },
  plugins: [],
};
export default config;
