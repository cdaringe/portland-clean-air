import React from "react";
import { Story, Meta } from "@storybook/react";

import Donate from "./Donate";

export default {
  title: "Example/Donate",
  component: Donate,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<React.ComponentProps<typeof Donate>> = (args) => (
  <Donate {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
