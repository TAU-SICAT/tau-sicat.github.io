module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: () => ({
        "rice-field": "url('/assets/img/bg.png')",
      }),
    },
  },
  plugins: [],
};
