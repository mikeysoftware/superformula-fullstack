import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";

// Component
import Alert from "./Alert";
import AlertProps from "./Alert.types";

export default {
  title: "Components/Alert",
  component: Alert,
} as Meta;

// Template
const Template: Story<AlertProps> = (args) => <Alert {...args} />;

// Info / Default
export const Info = Template.bind({});
Info.args = { variant: "info", children: <p>Info/Default Alert Box</p> };

// Info / Default
export const Success = Template.bind({});
Success.args = { variant: "success", children: <p>Success Alert Box</p> };

// Error
export const Error = Template.bind({});
Error.args = { variant: "error", children: <p>Error Alert Box</p> };
