import type { FC } from "react";
import "tailwindcss/tailwind.css";
import Banner from "../components/Banner";
import Donate from "../components/Donate";

const TOP_LEVEL_PADDING = "px-1 md:px-0";
const TOP_LEVEL_WIDTH = "m-auto max-w-screen-xl md:w-4/5";
const CONTENT_SIZING_CLX = `${TOP_LEVEL_PADDING} ${TOP_LEVEL_WIDTH}`;

function App({
  Component,
  pageProps,
}: {
  Component: FC<{ contentClx: string }>;
  pageProps: {};
}) {
  return (
    <>
      <Banner />
      <div id="sub_banner" className={`${TOP_LEVEL_PADDING} py-4 bg-gray-100`}>
        <div id="banner_guts" className={`${TOP_LEVEL_WIDTH}`}>
          <h1 className="text-1xl md:text-5xl font-black">
            Portland Clean Air
          </h1>
          <h2 className="md:text-1xl md:font-black">
            Working to improve our air quality
          </h2>
          <span className="text-sm md:text-base font-thin md:font-light">
            501(c)(3) Cascadia Action
          </span>
        </div>
      </div>
      <Donate className="sm:text-center md:text-left sm: md:absolute right-2 top-0" />
      <Component contentClx={CONTENT_SIZING_CLX} {...pageProps} />
    </>
  );
}

export default App;
