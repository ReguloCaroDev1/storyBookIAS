import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonExample } from "./IASButton";
import IASButtonDocumentation from "./IASButton.documentation.mdx";

export default {
  title: "IAS/Button",
  component: ButtonExample,
  parameters: {
    docs: { page: IASButtonDocumentation },
  },
} as ComponentMeta<typeof ButtonExample>;

const Template: ComponentStory<typeof ButtonExample> = (args) => (
  <ButtonExample {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
  typeButton: "primary",
  label: "Buy Both",
};

export const Secondary = Template.bind({});
Secondary.args = {
  typeButton: "secondary",
  label: "VIew details",
};

export const ButtonWhite = Template.bind({});
ButtonWhite.args = {
  typeButton: "buttonWhite",
  label: "Shop collection",
};
