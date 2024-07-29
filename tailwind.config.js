/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green: '#3B5D50',
        lightGreen: '#35736E',
        yellow: '#F9BF29',
        offWhite: '#FFFFFF4A',
        cream: '#EFF2F1',
        ash: '#6A6A6A',
        customBlack: '#2F2F2F',
        lightGray: '#C4C4C4',
        darkGray: '#D9D9D9'
      }
    },
  },
  plugins: [],
};
