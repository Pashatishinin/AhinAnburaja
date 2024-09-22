/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {zIndex: {
        '0': 0,
       '1': 1,
       '999' : 999,
       
      },
      mixBlendMode: ["difference"],
      fontFamily: {
        montserrat: ["Montserrat"],
        oswald: ["Oswald"],
      },
      fontSize: {
        head: ["13rem"],
      },
      content: {
        empty: '""',
      },
      willChange: {
        auto: "auto",
        scroll: "scroll-position",
        contents: "contents",
        transform: "transform",
      },
      letterSpacing: {
        huge: "0.4rem",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".will-change-auto": {
          willChange: "auto",
        },
        ".will-change-scroll": {
          willChange: "scroll-position",
        },
        ".will-change-contents": {
          willChange: "contents",
        },
        ".will-change-transform": {
          willChange: "transform",
        },
      });
    },
  ],
};

