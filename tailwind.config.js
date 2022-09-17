/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "space-primary": "#D0D6F9",
        "space-secondary": "#616476",
        "space-black": "#0B0D17",
        "space-white": "#FFFFFF",
      },
      fontFamily: {
        "space-heading": ["Bellefair", "serif"],
        "space-text": ["Barlow", "serif"],
      },
      fontSize: {
        "space-sx": "1.75rem",
        "space-sm": "2rem",
        "space-md": "3.5rem",
        "space-lg": "6.25rem",
        "space-xl": "9.375rem",
      },
      backgroundImage: theme => ({
        "home-desktop":
          "url('../public/assets/home/background-home-desktop.jpg')",
        // "home-tablet": "url('/src/assets/home/background-home-tablet.jpg')",
        // "home-mobile": "url('/src/assets/home/background-home-mobile.jpg')",
      }),
    },
  },
  plugins: [],
}
