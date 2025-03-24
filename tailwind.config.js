/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}" ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        rubik: ['Rubik-Rugular', 'sans-Serif'],
        "rubik-Bold": ['Rubik-Nold', 'sans-Serif'],
        "rubik-ExtraBold": ['Rubik-ExtraBold', 'sans-Serif'],
        "rubik-Medium": ['Rubik-Medium', 'sans-Serif'],
        "rubik-SemiBold": ['Rubik-SemiBold', 'sans-Serif'],
        "rubik-Light": ['Rubik-Light', 'sans-Serif'],
      },
      colors :{
        primary: {
          100: "#0061FF0A",
          200: "#0061FF1A",
          300: "#0061FF",
        },
        accent: {
          100: "#FBFBFD",
        },
        Black: {
          Default: "#000000",
          100: "#Bc8E98",
          200: "#666876",
          300: "#191d31",
        },
        danger: {
          100: "#F75555",
        },

      }
    },
  },
  plugins: [],
}
