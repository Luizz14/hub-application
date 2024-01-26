/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        minecraft: ['Minecraft'],
        arcade: ['Arcade'],
      },
    },
  },
  plugins: [],
};
