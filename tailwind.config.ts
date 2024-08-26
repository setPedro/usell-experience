/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#292B4D",
        foreground: "#EAEDFF",
        lightpurple: "#E309F3",
        darkpurple: "#39429E",
        pink: "#F83BFF",
        navbutton: "#39419e44",
        indigo: "#38419D",
        darkbackground: "#0F1035",
        sidebarbackground: "#2B2C3C",
        skyblue: "#5B6AFF",
        gray: "#929292",
        appbackground: "#1E1E1E",
        signuploginbg: "#1C1C25",
      },
    },
  },
  plugins: [],
};