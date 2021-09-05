import NextLink from "next/link";
import React from "react";

export default function Link({
  children,
  target,
  className = "",
  ...rest
}: React.ComponentProps<typeof NextLink> & {
  className?: string;
  children: string;
  target?: string;
}) {
  return (
    <NextLink
      {...rest}
      children={
        <a
          {...{
            target,
            className: `text-blue-600 hover:text-blue-800 visited:text-purple-600 ${className}`,
          }}
        >
          {children}
        </a>
      }
    />
  );
}
