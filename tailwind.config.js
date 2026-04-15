/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#020617",
        surface: "#0B1220",
        primary: "#10B981",
        accent: "#34D399",
        textPrimary: "#E6EDF3",
        textSecondary: "#9BA3AF",
      }
    }
  },
  plugins: [],
}