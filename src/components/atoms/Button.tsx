import React from "react";

interface Props {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<Props & React.HTMLProps<HTMLButtonElement>> = ({
  primary = false,
  size = "medium",
  label,
  children,
  className,
  type,
  ...rest
}) => {
  return (
    <button
      type={(type as "button") || "button"}
      className={[
        "p-2",
        "br-2",
        "rounded",
        primary ? "text-white" : false,
        primary ? "bg-blue-400" : "bg-white",
        primary ? "hover:bg-blue-600" : "hover:bg-gray-100",
        primary ? "border-none" : "border-solid",
        primary ? false : "border border-black",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
};
