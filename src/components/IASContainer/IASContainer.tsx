import React from "react";
import ContainerStyle from "./IASContainer.module.scss";
import classNames from "classnames/bind";
import { ButtonExample } from "../IASButton/IASButton";

export interface IASContainerProps {
  title: string;
  subtitle: string;
  buttonType: "primary" | "secondary" | "buttonWhite";
  image: string;
  backgroundImage: string;
  category?: string;
  button?: React.ReactNode;
}
let cx = classNames.bind(ContainerStyle);

export const IASContainer = ({
  title,
  subtitle,
  buttonType,
  image,
  backgroundImage,
  category,
  button,
}: IASContainerProps) => {
  return (
    <div
      className={cx("container")}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      data-testid={"testingBackground"}
    >
      {button && button}
      <a href="?path=/story/ias-button--primary">
        <div className={cx("main-container")}>
          <div className={cx("left-container")}>
            {category ? (
              <div className={cx("title-container")}>
                <h3 className={cx("category")}>{category}</h3>
                <h1 className={cx("title")}>
                  <strong>{title}</strong>
                </h1>
                <h2 className={cx("subtitle")}>{subtitle}</h2>
                <ButtonExample
                  label={"Shop collection"}
                  typeButton={buttonType}
                />
              </div>
            ) : (
              <>
                <h1 className={cx("title")}>{title}</h1>
                <p className={cx("subtitle")}>{subtitle}</p>
                <ButtonExample
                  label={"Shop collection"}
                  typeButton={buttonType}
                />
              </>
            )}
          </div>
          <div className={cx("right-container")}>
            <img className={cx("image-src")} src={image} alt="funkoPhoto" />
          </div>
        </div>
      </a>
    </div>
  );
};
