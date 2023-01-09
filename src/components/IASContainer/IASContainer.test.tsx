/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, RenderResult, screen } from "@testing-library/react";
import { IASContainer } from "./IASContainer";
import { IASContainerProps } from "./IASContainer";
import "@testing-library/jest-dom";

describe("IASContainer", () => {
  const TITLE = "testing";
  const SUBTITLE = "component";
  const CATEGORY = "this is subcategory";
  const BUTTONTYPE = "primary";
  const IMAGE = "this is a image";
  const BACKGROUND_IMAGE = "this is a background image";

  const props: IASContainerProps = {
    title: TITLE,
    subtitle: SUBTITLE,
    buttonType: BUTTONTYPE,
    image: IMAGE,
    backgroundImage: BACKGROUND_IMAGE,
    category: CATEGORY,
  };

  const renderComponent = (props: IASContainerProps): RenderResult =>
    render(<IASContainer {...props} />);

  it("Render of the IASContainer", () => {
    const { baseElement } = renderComponent(props);
    expect(baseElement).toBeTruthy();
  });

  it("should have title", () => {
    renderComponent(props);
    const title = screen.getByText(TITLE);
    expect(title).toBeInTheDocument();
  });

  it("should have subtitle", () => {
    renderComponent(props);
    const component = screen.getByText(SUBTITLE);
    expect(component).toBeInTheDocument();
  });

  it("should have category", () => {
    renderComponent(props);
    const subcategory = screen.getByText(CATEGORY);
    expect(subcategory).toBeInTheDocument();
  });

  it("should be a button", () => {
    const { container } = renderComponent(props);
    const button = container.querySelector("button");
    expect(button).toBeInTheDocument();
  });

  it("uses correct src image", () => {
    const { getByAltText } = renderComponent(props);
    const image = getByAltText("funkoPhoto");
    expect(image).toHaveAttribute("src", "this is a image");
  });

  it("the backgroundImage is in the document", () => {
    renderComponent(props);
    const background = screen.getByTestId("testingBackground");
    expect(background).toBeInTheDocument();
  });
});
