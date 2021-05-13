import type { FC } from "react";
import "tailwindcss/tailwind.css";

function App({ Component, pageProps }: { Component: FC; pageProps: {} }) {
  return <Component {...pageProps} />;
}

export default App;
