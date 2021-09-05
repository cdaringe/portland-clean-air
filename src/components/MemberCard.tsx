import { Member } from "../member";
import Link from "./Link";

export default function MemberCard({
  address,
  avatar,
  email,
  name,
  phone,
  roles,
}: Member) {
  return (
    <div className="py-6 flex flex-col justify-center">
      <div className="flex space-x-4 px-4 justify-around">
        <div
          className={[
            "bg-gradient-to-t",
            "duration-150",
            "flex-col",
            "flex",
            "from-blue-100",
            "h-48",
            // "items-center",
            "justify-between",
            // "md:items-start",
            // "md:p-5",
            // "md:rounded-3xl",
            // "md:w-96",
            "items-start",
            "p-5",
            "rounded-3xl",
            "min-w-min",
            "w-80",
            "md:w-96",
            "py-5",
            "relative",
            // "rounded-full",
            "shadow-md",
            "to-white",
            "transition-all",
            "w-28",
          ].join(" ")}
        >
          <img
            className="rounded-full w-16 h-16 shadow-sm absolute -top-8 transform scale-110 duration-700"
            src={avatar || `https://robohash.org/${name}`}
            alt={name}
          />
          <div className="transform rotate-0 text-2xl font-semibold m-0 mt-8">
            {name}
          </div>
          <ul className="text-lg font-light block">
            {roles && <li>&#129309; {roles.join(", ")}</li>}
            {email && (
              <li>
                {"\u2709 "} <Link href={`mailto:${email}`}>{email}</Link>
              </li>
            )}
            {phone && <li>&#128241; {phone}</li>}
            {address && (
              <li>
                {address.map((part, i) => (
                  <p className="text-sm" key={i}>
                    {!i ? <span className="mr-1">&#128235;</span> : null}
                    {i ? <span className="ml-4"></span> : null}
                    {part}
                  </p>
                ))}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
