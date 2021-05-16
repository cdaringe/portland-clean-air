import SquareBox from "../src/components/SquareBox";
import PCATwitterFrame from "../src/components/PCATwitterFrame";
import Link from "../src/components/Link";
import About from "../src/components/About";

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
      <About />
      <a id="Social" />
      <PCATwitterFrame className="w-2/5" />
    </div>
  );
}
