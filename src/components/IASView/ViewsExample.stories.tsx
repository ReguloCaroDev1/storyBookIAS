import { ComponentStory } from "@storybook/react";
import { Fragment, useState } from "react";
import { IASComponent } from "../IASComponent/IASComponent";

export default {
  title: "IAS/View",
};

const Template: ComponentStory<typeof Fragment> = () => {
  const onChangeHandler = () => {};
  return (
    <>
      <IASComponent onChange={onChangeHandler} />
    </>
  );
};
export const View = Template.bind({});
