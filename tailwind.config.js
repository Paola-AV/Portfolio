/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily : {
      'lucida': ['Lucida Bright', 'Georgia', 'serif']
    },
    extend: {
      colors: {
        "darkBlue": "#171C28",
        "white":"#FFFFFF",
        "textW":"#CFD0E5",
        "purple":"#895CA7"
    },
    },
  },
  plugins: [],
}

