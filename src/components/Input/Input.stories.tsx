import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";

// Component
import Input from "./Input";
import InputProps from "./Input.types";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

// Template
const Template: Story<InputProps> = (args) => <Input {...args} />;

// Input Example
export const Example = Template.bind({});
Example.args = { value: "Superformula" };
