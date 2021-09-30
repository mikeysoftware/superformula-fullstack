import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";

// Component
import Button from "./Button";
import ButtonProps from "./Button.types";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

// Template
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Primary
export const Primary = Template.bind({});
Primary.args = { variant: "primary", children: "Primary" };

// Secondary
export const Secondary = Template.bind({});
Secondary.args = { variant: "secondary", children: "Secondary" };

// Loading
export const Loading = Template.bind({});
Loading.args = { loading: true, children: "Loading" };
