import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";

// Component
import Loader from "./Loader";

export default {
  title: "Components/Loader",
  component: Loader,
} as Meta;

// Template
const Template: Story = (args) => <Loader {...args} />;

// Loader Example
export const Example = Template.bind({});
Example.args = { value: "Michael Cowan" };
