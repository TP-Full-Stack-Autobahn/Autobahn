import React from "react";
import { Story } from "@storybook/react";
import { ButtonComponent, ButtonProps } from "./ButtonComponent";

export default {
  title: "Button",
  component: ButtonComponent
,
};

const Template: Story<ButtonProps> = args => <ButtonComponent{...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  variant: "primary",
  shape: "",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  variant: "secondary",
  shape: "",
};
