import WhoAreWe from "./WhoAreWe";
export default function About() {
  return (
    <div className="">
      <a id="About" />
      <h2 className="text-2xl my-4">About</h2>
      <p>
        Portland Clean Air is a registered Oregon Political Committee working to
        address industrial pollution in Multnomah and Washington Counties.
        Cascadia Action is a registered 501(c)(3) for education and outreach
        regarding air quality issues in the Cascadian bioregion.
      </p>
      <WhoAreWe />
    </div>
  );
}
