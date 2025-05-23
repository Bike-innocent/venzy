/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  important: true,
  theme: {
    extend: {
      colors: {
        // Backgrounds
        bg: "#f9fafb",
        

        text: "#111827",
        border: "#d1d5db",
       

       
         'tw-primary': '#e91e63',
        // primary: "#0167f3",
        secondary: "#10b981",
      },
    },
  },
  plugins: [],
};
