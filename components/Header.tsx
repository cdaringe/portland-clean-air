import React, { FC } from "react";
import Donate from "./Donate";

export default (function Header() {
  return (
    <header className="w-full h-auto relative">
      <img
        className="w-full h-auto"
        height="200"
        width="800"
        src="http://portlandcleanair.org/bannerphoto.jpg"
      />
      <Donate className="sm:text-center md:text-left sm: md:absolute right-2 top-0" />
      {/* <div
        className={`max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 ${""}`}
      /> */}
      {/* <Donate className="absolute right-2 top-0" /> */}
    </header>
  );
} as FC);
