import React from "react";
import { Button } from "./atoms/Button";

// <input class="donate dright" type="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="Donate" value="Donate to"><div class="smallprint"><br>501(c)(3) Cascadia Action</div></div>

const Donate: React.FC<React.HTMLProps<HTMLFormElement>> = function Donate({
  className = "",
  ...props
}) {
  return (
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
      className={`sm:w-full md:max-w-md py-4 px-4 md:shadow-lg bg-white md:rounded-lg md:my-20 ${className}`}
      {...props}
    >
      <div className="hidden md:flex justify-center md:justify-end -mt-16 mb-1">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-blue-500"
          src="https://www.paypalobjects.com/webstatic/mktg/logo-center/PP_Acceptance_Marks_for_LogoCenter_266x142.png"
        />
      </div>

      <Button className="w-full" primary type="submit">
        Donate now!
      </Button>
      {/* <input
        type="submit"
        className="bg-white block cursor-pointer mt-2 text-gray-800 text-center w-full text-sm"
        value="501(c)(3) Cascadia Action"
      /> */}

      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="PFZ9D8YUKY6AW" />
    </form>
  );
};

export default Donate;
