const { NODE_ENV } = process.env;
module.exports = {
  purge: {
    enabled: NODE_ENV === "production",
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        white: "0 4px 14px 0 rgba(255, 255, 255, 0.5)",
      },
    },
  },
  variants: {},
  plugins: [],
};
