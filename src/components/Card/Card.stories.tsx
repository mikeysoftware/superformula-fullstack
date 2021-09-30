import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";

// Component
import Card from "./Card";
import CardProps from "./Card.types";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

// Template
const Template: Story<CardProps> = (args) => <Card {...args} />;

// Card Example
export const Example = Template.bind({});
Example.args = { children: "Card Body" };
