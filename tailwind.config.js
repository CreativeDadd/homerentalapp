/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F13A10",
        secondary: "#6B7280",
        tertiary: "#FF6347",
        quaternary: "#FF4500",
        quinary: "#FF8C00",
        senary: "#FFA500",
        septenary: "#FFA07A",
        octonary: "#FF69B4",
        nonary: "#FF1493",
        denary: "#FF00FF",
      },
    },
  },
  plugins: [],
};
