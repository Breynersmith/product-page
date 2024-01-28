/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'tablet': '480px',
        'desktop': '720px',
        'desktop-md': '1080px',
        'desktop-lg': '1440px',
      }
    },
  },
  plugins: [],
}

