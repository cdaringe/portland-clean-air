import React, { FC } from "react";

export default (function Header() {
  return (
    <header className="w-full h-16 sm:h-32 md:h-64 overflow-hidden relative">
      <img
        // className="w-full h-auto absolute"
        style={{
          width: "100%",
          position: "absolute",
          top: "-100%; left:0; right: 0; bottom:-100%",
          margin: " auto",
        }}
        height="200"
        width="800"
        src="http://portlandcleanair.org/bannerphoto.jpg"
      />
    </header>
  );
} as FC);
