import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
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
          700: "#F4F4F4",
        }
    },
     fontFamily:{
        poppins:["Poppins", "sans-serif"],
        mochiy: ["Mochiy Pop One", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],

    },
      keyframes: {
         gradient: {
           '0%': { backgroundPosition: '0% 50%' },
           '50%': { backgroundPosition: '100% 50%' },
           '100%': { backgroundPosition: '0% 50%' },
         },
       },
       animation: {
         gradient: 'gradient 8s linear infinite'
       },
  },
  plugins: [],
};
export default config;
