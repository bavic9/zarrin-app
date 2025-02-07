/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#7c4ee4',
        black: '#333333',
        gray: '#666666',
        lightGray: '#999999'
      },
      fontFamily: {
        body: ['Roboto'],
        heading: ['Raleway'],
      },
    },
  },
  plugins: [],
};
