/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "'Poppins', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
  // Define custom utility classes
  variants: {
    extend: {
      // Customize line clamp
      lineClamp: ['responsive'], // Enable responsive variants if needed
    },
  },
  corePlugins: {
    // Enable line clamp core plugin
    lineClamp: true,
  },
  utilities: {
    // Define your custom line clamp utility
    '.line-clamp-3': {
      '-webkit-line-clamp': '3', // Number of lines to display
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
    },
    // Add more custom utilities if needed
  },
};
