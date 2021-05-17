import React from "react";

interface Props {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  secondary?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<Props & React.HTMLProps<HTMLButtonElement>> = ({
  primary = false,
  secondary = false,
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
        primary ? "bg-blue-400" : false,
        primary ? "hover:bg-blue-600" : false,
        primary ? "border-none" : false,
        secondary ? "text-black" : false,
        secondary ? "bg-white" : false,
        secondary ? "hover:bg-gray-100" : false,
        secondary ? "border-solid" : false,
        secondary ? "border border-black" : false,
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
