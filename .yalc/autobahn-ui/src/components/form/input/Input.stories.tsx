import React from "react";
import { Story } from "@storybook/react";
import { InputComponent, InputProps } from "./InputComponent";

export default {
  title: "Input",
  component: InputComponent
,
};

const Template: Story<InputProps> = args => <InputComponent{...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Custom label",
  type: "text",
  placeholder: "Custom placeholder",
  name: "custom",
};
