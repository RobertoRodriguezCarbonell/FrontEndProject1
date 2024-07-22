/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#FAF9F6',
        sandpr: '#F2F0E9',
        sandse: '#DEDCD3',
        sandhard: '#8F8D80',
        graypr: '#848382',
        blackpr: '#2D2D2D',
        purplepr: '#7106FA',
        greenpr: '#348F1B',
      },
    },
  },
  plugins: [],
}