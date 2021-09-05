import PCATwitterFrame from "../src/components/PCATwitterFrame";
import About from "../src/components/About";
import PollutersMap from "../src/components/PollutersMap";
import Link from "../src/components/Link";

export default function Index({ contentClx }: { contentClx: string }) {
  return (
    <div className={[contentClx].join(" ")}>
      <div id="who_is_polluting" className="my-4">
        <h2 className="text-xl my-2">Who is polluting in your neighborhood?</h2>
        <p className="my-2">
          Portland industry is bustling. Have you considered what pollutants may
          be in the air near your home?
        </p>
        <PollutersMap />
      </div>
      <About />
      <a id="Data" />
      <h2 className="text-xl my-2">Data & Reports</h2>
      All of our pollution reports can be found by clicking below.
      <ul className="list-disc list-inside my-2">
        <li>
          <Link href="http://portlandcleanair.org/files/pcapubs.html">
            Portland Clean Air Reports
          </Link>
        </li>
        <li>
          <Link href="http://portlandcleanair.org/files/pcadata.html">
            Portland Clean Air Data
          </Link>
        </li>
      </ul>
      <hr />
      <a id="Social" />
      <PCATwitterFrame className="w-2/5" />
    </div>
  );
}
