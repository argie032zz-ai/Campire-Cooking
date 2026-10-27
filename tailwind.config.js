/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Neonderthaw': ['Neonderthaw', 'cursive'],
        'AlegreyaSC': ['AlegreyaSC', 'serif'],
        'CaveatT': ['CaveatT', 'cursive'],
      }
    },
  },
  plugins: [],
};
