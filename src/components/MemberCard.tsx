import { Member } from "../member";

export default function MemberCard({
  address,
  avatar,
  email,
  name,
  phone,
  roles,
}: Member) {
  return (
    <div className="py-6 flex flex-col justify-center sm:py-12">
      <div className="flex space-x-4 px-4 justify-around">
        <div className="bg-gradient-to-t from-black via-pink-900 to-pink-700  h-72 w-28 md:w-96 md:rounded-3xl rounded-full shadow-md relative flex flex-col items-center justify-between md:items-start py-5 md:p-5 transition-all duration-150">
          <img
            className="rounded-full w-16 h-16 shadow-sm absolute -top-8 transform md:scale-110 duration-700"
            src={avatar || `https://robohash.org/${name}`}
            alt={name}
          />
          <div className="transform -rotate-90 md:rotate-0 align-middle text-2xl font-semibold text-gray-200 text-center m-auto md:m-0 md:mt-8">
            {name}
          </div>
          <ul className="text-lg text-gray-300 font-light hidden md:block">
            {roles && <li>{roles.join(", ")}</li>}
            {email && <li>email {email}</li>}
            {phone && <li>phone {email}</li>}
            {address && <li>address</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}
