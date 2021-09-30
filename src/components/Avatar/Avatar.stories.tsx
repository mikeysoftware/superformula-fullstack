import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";

// Component
import Avatar from "./Avatar";
import AvatarProps from "./Avatar.types";

export default {
  title: "Components/Avatar",
  component: Avatar,
} as Meta;

// Template
const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

// Avatar Example
export const Example = Template.bind({});
Example.args = { src: "https://source.unsplash.com/random/192x192" };
