import React from "react";

export default function PCATwitterFrame(
  props: React.HTMLProps<HTMLDivElement>
) {
  return (
    <div {...props}>
      <a
        className="twitter-timeline"
        href="https://twitter.com/PDXCleanAir?ref_src=twsrc%5Etfw"
      >
        Tweets by PDXCleanAir
      </a>{" "}
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </div>
  );
}
