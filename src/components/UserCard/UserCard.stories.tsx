import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";

// Component
import UserCard from "./UserCard";
import UserCardProps from "./UserCard.types";
import ApolloProvider from "../../providers/ApolloProvider";
import StyleProvider from "../../providers/StyleProvider";

export default {
  title: "Components/UserCard",
  component: UserCard,
  decorators: [
    (Story) => (
      <ApolloProvider>
        <StyleProvider />
        <Story />
      </ApolloProvider>
    ),
  ],
} as Meta;

// Template
const Template: Story<UserCardProps> = (args) => <UserCard {...args} />;

// UserCard Example
export const Example = Template.bind({});
Example.args = {
  user: {
    __typename: "User",
    id: "ecf4060f-cd30-49db-aaf3-93c3552d933e",
    name: "Michael Cowan",
    dob: "'1999-01-01T05:00:00.000Z",
    address: "Kingston, Jamaica",
    description: "Senior Software Engineer",
    createdAt: "2021-09-29T09:05:39.396Z",
    updatedAt: "2021-09-30T07:03:48.184Z",
  },
};
