import React from "react";
import { Story } from "@storybook/react";
import { SelectComponent, SelectProps } from "./SelectComponent";

export default {
  title: "Select",
  component: SelectComponent
,
};

const Template: Story<SelectProps> = args => <SelectComponent{...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Custom label",
  options: [
    "options 1",
    "options 2",
    "options 3",
    "options 4"
  ],
  name: "custom",
};
