/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0b0b0d",
        gold: "#c9a96e",
        "gold-soft": "#e7d4a8",
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(135deg, #c9a96e 0%, #e7d4a8 50%, #c9a96e 100%)",
        "gradient-dark": "linear-gradient(135deg, #0b0b0d 0%, #1a1a1f 100%)",
      },
      boxShadow: {
        luxe: "0 20px 60px -20px rgba(0,0,0,0.4)",
        card: "0 10px 30px -10px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
