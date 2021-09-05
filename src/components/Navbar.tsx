import Link from "./Link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="md:flex items-center flex-no-shrink mr-6">
        <svg
          className="h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="lightblue"
            fill="lightblue"
            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
          />
        </svg>
        <h1 className="block md:inline-block font-semibold text-xl tracking-tight mr-4">
          Portland Clean Air
        </h1>
        <h2 className="block md:inline-block md:text-1xl">
          Working to improve our air quality
        </h2>
      </div>
      <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
        <div className="text-sm md:flex md:flex-grow md:justify-end">
          {["Is My Air Clean?", "Data", "Get involved", "About"].map(
            (sectionName) => (
              <Link
                key={sectionName}
                href={`#${sectionName}`}
                className="block mt-4 md:inline-block md:mt-0 hover:text-white mr-4"
              >
                {sectionName}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
