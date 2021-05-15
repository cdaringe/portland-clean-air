import SquareBox from "../components/SquareBox";

// import React from "react";
export default function Index({ contentClx }: { contentClx: string }) {
  return (
    <div className={[contentClx].join(" ")}>
      <h2 className="text-xl">Who is polluting in your neighborhood?</h2>
      <p>
        Portland industry is bustling. How you considered what pollutants may be
        in the air near your home?
      </p>
      <SquareBox className="w-full">
        <div className={`w-4/5 h-full bg-gray-200 inline-block`} />
        <div className={`w-1/5 h-full bg-blue-200 inline-block`} />
      </SquareBox>
    </div>
  );
}
