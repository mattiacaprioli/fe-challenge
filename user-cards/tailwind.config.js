module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transform: {
        "rotate-y-180": "rotateY(180deg)",
      },
      perspective: {
        "1000": "1000px",
      },
    },
  },
  plugins: [],
};
