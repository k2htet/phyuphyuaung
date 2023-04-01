/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbit: ["var(--font-orbit)"],
      },
      colors: {
        primary: "#e8e8e8",
        secondary: "#000000",
      },
      fontSize: {
        heroXl: "8.75rem",
      },
      boxShadow: {
        card: "5px 5px 0 0 rgba(0,0,0,1)",
        xl: "5px 5px 0 0 rgba(0,0,0,1)",
        lg: "5px 5px 0 0 #fff",
        "2xl": "10px 10px 0 0 rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
