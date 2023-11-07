/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#FF6B6B",
                   
          "secondary": "#4CAF50",
                   
          "accent": "#FFD700",
                   
          "neutral": "#FFFFFF",
                   
          "base-100": "#87CEEB",
                   
          "info": "#B873A2",
                   
          "success": "#4BB543",
                   
          "warning": "#FFD700",
                   
          "error": "#FF4444",
                   },
      }
    ],
  },
  plugins: [require("daisyui")],
  // theme: {
  //   extend: {},
  // },
 
} 
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }