import Link from "./Link";
import React from "react";
import SquareBox from "./SquareBox";
import { Button } from "./atoms/Button";

export default (function PollutersMap() {
  const [isLegendOpen, setLegendOpen] = React.useState(true);
  return (
    <>
      <SquareBox className="flex flex-row w-full md:max-w-4xl md:m-auto">
        {/* <div className={`flex-grow bg-green-300`}>a</div>
        <div className={`bg-blue-200`}>b</div> */}
        <div className={`flex-grow h-full bg-blue-300`}>
          <object
            className="w-full h-full"
            data="https://www.google.com/maps/d/embed?mid=1B0e1nQZznxSxi74R9Vsc-_B-G2SHiSc5&amp;ll=45.5563930204638075%2C-122.65440075039064&amp;z=12&amp;hl=en"
          ></object>
        </div>
        {!isLegendOpen && (
          <Button
            secondary
            className="absolute top-1 right-1 p-2"
            onClick={() => setLegendOpen(true)}
          >
            Open Legend
          </Button>
        )}
        {isLegendOpen && (
          <div
            className={`flex-shrink h-full bg-white border-black overflow-y-scroll p-1`}
          >
            <Button
              secondary
              className="float-right"
              onClick={() => setLegendOpen(false)}
            >
              Close
            </Button>
            <h3 className="text-xl mb-2">Legend</h3>
            <img
              width="400px"
              height="939px"
              // className="max-h-full"
              src="http://portlandcleanair.org/pcamapkey10.jpg"
            />
          </div>
        )}
      </SquareBox>
      <ul>
        <li>
          Learn about{" "}
          <Link
            target="blank"
            href="http://portlandcleanair.org/files/PCA-Guide-to-Industrial-Air-Pollution.pdf"
          >
            using this map
          </Link>
          .
        </li>
        <li>
          See the{" "}
          <Link
            target="blank"
            href="https://mesonet.smpc.tv/45.536974885126554,-122.67257775671168"
          >
            current wind direction
          </Link>
          .
        </li>
      </ul>
    </>
  );
} as React.FC);
