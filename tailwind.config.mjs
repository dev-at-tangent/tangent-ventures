/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        desktop: "1200px",
        uhd: "2000px",
      },
      colors: {
        error: "#E00004",
        turq: "#00E0BA",
        grey: {
          90: "#1C1C1C",
          80: "#535353",
          60: "#9A9A9A",
          40: "#D9D9D9",
          20: "#F0F0F0",
          10: "#F6F6F6",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
