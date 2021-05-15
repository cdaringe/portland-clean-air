const { NODE_ENV } = process.env;
module.exports = {
  purge: {
    enabled: NODE_ENV === "production",
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {},
  variants: {},
  plugins: [],
};
