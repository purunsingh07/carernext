/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Optional: disable default Tailwind styles if needed
  },
  experimental: {
    optimizeUniversalDefaults: true, // Ensures universal color defaults are optimized
    disableColorOpacityUtilitiesByDefault: true, // Prevents Tailwind from using `oklch()`
  },
};
