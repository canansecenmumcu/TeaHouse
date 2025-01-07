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
        cream: '#fcf3e1', // Krem rengi
        lightGreen: '#b9e0aa', // Açık yeşil
        softPink: '#f5afb8', // Yumuşak pembe
        brown:'#745b37',
        lightBrown: '#d4b19a', // Açık kahverengi
        darkBrown: '#4a362c', // Koyu kahverengi
        brown: '#745b37', // Kahverengi
        gold: '#e8bf67', // Altın sarısı
        green: '#8ac56b', // Yeşil
      },
      fontFamily: {
        times: ['"Times New Roman"', 'Times', 'serif'],
      },
    },
   
  },
  plugins: [],
};
