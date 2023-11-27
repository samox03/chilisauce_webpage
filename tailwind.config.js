/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#f9f8f7",
        "gray-50": "#EFE6E6",
       // "gray-100": "#DFCCCC",
        "gray-100": "#db4442",
       // "gray-500": "#5E0000",
        "gray-500": "#d62725",  
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
       // "mobile-home": "url('./assets/BG_redwavey.png')",
       "mobile-home": "url('./assets/Logo_main.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        text: ["Gutter"]
      },
      content: {
        evolvetext: "url('./assets/bubble_handmade.png')",
        abstractwaves: "url('./assets/bubble_handmade.png')",
        sparkles: "url('./assets/bubble_handmade.png')",
        circles: "url('./assets/bubble_handmade.png')",
      }, 
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
    boxShadow: {
      '3xl': '0 1px 0 1px  #db4442'
    }
  },
  plugins: [],
}

