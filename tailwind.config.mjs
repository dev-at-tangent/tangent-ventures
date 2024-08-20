/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      perspective: {
        '500': '500px',
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      screens: {
        pls: '898px',
        desktop: "1200px",
        hd: "1600px",
        uhd: "2000px",
        qhd: "3000px",
      },
      colors: {
        error: "#E00004",
        turq: "#00E0BA",
        grey: {
          90: "#1C1C1C",
          80: "#535353",
          60: "#9A9A9A",
          40: "#D9D9D9",
          30: "#E8E8E8",
          20: "#F0F0F0",
          10: "#F6F6F6",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
        ".perspective-500": {
          perspective: "500px",
        },
        ".rotate-x-180": {
          transform: "rotateX(180deg)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
