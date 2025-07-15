// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'lumma-gold': '#D4AF37',
        'lumma-beige': '#F5F1E9',
        'lumma-dark': '#5C4B29',
      },
      fontFamily: {
        sans: ["'Segoe UI'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
