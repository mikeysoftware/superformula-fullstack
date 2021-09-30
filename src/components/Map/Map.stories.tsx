import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";

// Component
import Map from "./Map";
import MapProps from "./Map.types";

export default {
  title: "Components/Map",
  component: Map,
  decorators: [
    (Story) => (
      <div style={{ height: "30rem", width: "50rem" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

// Template
const Template: Story<MapProps> = (args) => <Map {...args} />;

// Input Example
export const Example = Template.bind({});
Example.args = { mapCenter: [-76.80273, 18.017589] };
