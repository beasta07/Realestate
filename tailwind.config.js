/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '567px',
      'md': '768px',
      'lg': '904px',
      'xl': '1000px',
      '2xl': '1200px',
    },
    extend: {},
  },
  plugins: [],
}

