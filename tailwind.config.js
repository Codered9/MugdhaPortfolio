/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          syne: ['"Syne Serif"', 'serif'],
          tans: ['"Tan-Harmoni"', 'tans'],
          harmoni: ['"Harmoni"', 'harmoni']
        }
      },
    },
    plugins: [],
  }
  