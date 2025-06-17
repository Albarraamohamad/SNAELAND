/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // or wherever your files are located
  ],
  theme: {
    extend: {
      screens: {
        xs: "300px",       // Extra small devices
        sm: "640px",       // Small devices
        md: "768px",       // Medium devices
        lg: "1024px",      // Large devices
        xl: "1280px",      // Extra large
        "2xl": "1536px",   // 2x extra large
      },
    },
  },
  plugins: [],
}
