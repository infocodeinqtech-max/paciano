/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      keyframes: {
        "paciano-experiences-enter": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 45px, 0) scale(.97)",
          },

          "60%": {
            opacity: "1",
            transform: "translate3d(0, -3px, 0) scale(1.005)",
          },

          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0) scale(1)",
          },
        },

        "paciano-image-cinema": {
          "0%": {
            transform: "scale(1.08)",
          },

          "100%": {
            transform: "scale(1)",
          },
        },

        "paciano-icon-arrive": {
          "0%": {
            opacity: "0",
            transform: "scale(.72) translateY(8px)",
          },

          "70%": {
            opacity: "1",
            transform: "scale(1.04) translateY(-1px)",
          },

          "100%": {
            opacity: "1",
            transform: "scale(1) translateY(0)",
          },
        },
      },

      animation: {
        "paciano-experiences-enter":
          "paciano-experiences-enter 1.35s cubic-bezier(.22,1,.36,1) forwards",

        "paciano-image-cinema":
          "paciano-image-cinema 2.8s cubic-bezier(.22,1,.36,1) forwards",

        "paciano-icon-arrive":
          "paciano-icon-arrive 1s cubic-bezier(.22,1,.36,1) forwards",
      },
    },
  },

  plugins: [],
};
