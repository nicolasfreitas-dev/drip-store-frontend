/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    colors: {
      // PRIMARY COLORS
      primary: "#C92071",
      secondary: "#B5B6F2",
      tertiary: "#991956",
      error: "#EE4266",
      success: "#52CA76",
      warning: "#F6AA1C",

      // GRAYSCALE
      darkGray: "#1F1F1F",
      darkGray2: "#474747",
      darkGray3: "#666666",
      lightGray: "#8F8F8F",
      lightGray2: "#CCCCCC",
      lightGray3: "#F5F5F5",
      white: "#FFFFFF",
    }
  },
  extend: {

  },
  plugins: [],
}