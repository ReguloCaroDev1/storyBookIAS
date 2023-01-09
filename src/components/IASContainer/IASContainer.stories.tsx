import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IASContainer } from "./IASContainer";
import IASContainerDocumentation from "./IASContainer.documentation.mdx";

export default {
  title: "IAS/Container",
  component: IASContainer,
  parameters: {
    docs: { page: IASContainerDocumentation },
  },
} as ComponentMeta<typeof IASContainer>;

const Template: ComponentStory<typeof IASContainer> = (args) => (
  <IASContainer {...args} />
);
export const View = Template.bind({});
View.args = {
  title: "Join the band",
  category: "TV Movies",
  buttonType: "secondary",
  subtitle:
    "A One-Of-A-Kind Performance Is Taking the Stage! Shop South Park and Other Animated TV Collectibles.",
  image:
    "https://www.funko.com/craftmin/assets/Feature-Product_Funko_StrangerThings-Mike-47113aca65d30325aa05a602ea086efa.png?",
  backgroundImage:
    "https://www.funko.com/craftmin/backgrounds/Background-Asset-Funko_SnoopDogg-cc7efe0cae26215266cc4b919b1ce54d.png?",
  /* button: (
    <a href="https://www.google.com">
      <ButtonExample label="hola" typeButton="primary"></ButtonExample>
    </a>
  ), */
};
