module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        height: {
          128: "33rem",
        },
        gridColumn: {
          'span-16': 'span 16 / span 16',
        }
      },
    },
    corePlugins: {
      aspectRatio: false,
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/line-clamp"),
    ],
  };
  