/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      animation: {
        cinematic: "cinematicDrift 22s ease-in-out infinite alternate",

        sunlight: "sunlightMove 16s ease-in-out infinite alternate",

        mist: "mistFloat 18s ease-in-out infinite alternate",

        "luxury-reveal":
          "luxuryReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },

  plugins: [],
};
