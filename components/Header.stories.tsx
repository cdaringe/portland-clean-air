import React from "react";
import { Story, Meta } from "@storybook/react";

import Header from "./Header";

export default {
  title: "Example/Header",
  component: Header,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<React.ComponentProps<typeof Header>> = (args) => (
  <Header {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
