import React from "react";
import { Story, Meta } from "@storybook/react";

import Banner from "./Banner";

export default {
  title: "Example/Banner",
  component: Banner,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<React.ComponentProps<typeof Banner>> = (args) => (
  <Banner {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
