import PCATwitterFrame from "../src/components/PCATwitterFrame";
import About from "../src/components/About";
import PollutersMap from "../src/components/PollutersMap";

export default function Index({ contentClx }: { contentClx: string }) {
  return (
    <div className={[contentClx].join(" ")}>
      <div id="who_is_polluting" className="my-4">
        <h2 className="text-xl">Who is polluting in your neighborhood?</h2>
        <p>
          Portland industry is bustling. How you considered what pollutants may
          be in the air near your home?
        </p>
        <PollutersMap />
      </div>
      <About />
      <a id="Social" />
      <PCATwitterFrame className="w-2/5" />
    </div>
  );
}
