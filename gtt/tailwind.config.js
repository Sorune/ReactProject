/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT")
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl":"1400px",
        "3xl":"1600px",
        "4xl":"1800px"
      },
    },
  },
  
  plugins: [],
});

