import React from "react";

const Donate: React.FC<React.HTMLProps<HTMLDivElement>> = function Donate({
  className = "",
  ...props
}) {
  return (
    <div
      className={`sm:w-full md:max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 ${className}`}
      {...props}
    >
      <div className="flex justify-center md:justify-end -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-blue-500"
          src="https://www.paypalobjects.com/webstatic/mktg/logo-center/PP_Acceptance_Marks_for_LogoCenter_266x142.png"
        />
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">Donate to</h2>
        <p className="mt-2 text-gray-600">501(c)(3) Cascadia Action</p>
      </div>
      {/* <div className="flex justify-end mt-4">
        <a href="#" className="text-xl font-medium text-indigo-500">
          John Doe
        </a>
      </div> */}
    </div>
  );
};

export default Donate;
