/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C92071",
        secondary: "#B5B6F2",
        tertiary: "#991956",
        quaternary: "#F9F8FE",
        error: "#EE4266",
        success: "#52CA76",
        warning: "#F6AA1C",
        discount: "#E7FF86",
  
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
  },
  plugins: [],
}

