import React from "react";
import { Button } from "./atoms/Button";

const Donate: React.FC<React.HTMLProps<HTMLFormElement>> = function Donate({
  className = "",
  ...props
}) {
  return (
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
      className={`w-full md:max-w-sm py-4 px-4 ${className}`}
      {...props}
    >
      <div className="hidden md:flex justify-center -mt-16 mb-1">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-blue-500"
          src="https://www.paypalobjects.com/webstatic/mktg/logo-center/PP_Acceptance_Marks_for_LogoCenter_266x142.png"
        />
      </div>
      <Button
        className="w-full text-center shadow-white font-medium text-white bg-green-400 hover:bg-green-600"
        type="submit"
      >
        <p>Donate now!</p>
        <p className="text-xs">Cascadia Action 501(c)(3)</p>
      </Button>
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="PFZ9D8YUKY6AW" />
    </form>
  );
};

export default Donate;
