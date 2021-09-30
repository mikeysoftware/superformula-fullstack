import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";

// Component
import Modal from "./Modal";
import ModalProps from "./Modal.types";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

// Template
const Template: Story<ModalProps> = (args) => <Modal {...args} />;

// Modal Example
export const Example = Template.bind({});
Example.args = {
  isModalVisible: true,
  onModalClose: () => {},
  children: (
    <div>
      <h1>Example Modal Title</h1>
      <p>*Toggle modal using the "isModalVisible" boolean.</p>
    </div>
  ),
};
