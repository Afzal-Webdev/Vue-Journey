/** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports ={
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',  // Include all Vue and JavaScript files in the src directory
  ],
  theme: {
    extend: {
      colors:{
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71",
      }
    },
    fontFamily:{
      Roboto: ["Roboto", "sans-serif"],
    },
    container:{
      padding: "2rem",
      center:true,
    },
    screens:{
      sm:"640px",
      md:"768px",

    }
  },
  plugins: [],
}

