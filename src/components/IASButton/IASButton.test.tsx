import { fireEvent, render, screen } from "@testing-library/react";
import { ButtonExample } from "./IASButton";
import "@testing-library/jest-dom";
import { useState } from "react";

describe("Button testing", () => {
  const label = "Button";
  const mockFn = jest.fn();
  it("Render of the button example", () => {
    render(<ButtonExample label={label} />);
    const buttonElement = screen.getByText(label);
    expect(buttonElement).toBeInTheDocument();
  });
  it("Should do something when clicked", () => {
    render(<ButtonExample onClick={mockFn} label={label} />);
    const buttonElement = screen.getByText(`${label}`);
    expect(buttonElement).toBeEnabled();
    fireEvent.click(buttonElement);
    expect(mockFn).toBeCalledTimes(1);
  });
  it("Should be disabled if disabled is true", () => {
    render(<ButtonExample label={label} disabled />);
    const buttonElement = screen.getByText(label);
    expect(buttonElement).toHaveClass("disabled");
  });

  describe("Test disable flow", () => {
    it("Should be disabled when I click the button", () => {
      const TestComponent = () => {
        const [isDisabled, setIsDisabled] = useState(false);
        return (
          <ButtonExample
            label={label}
            onClick={() => setIsDisabled(!isDisabled)}
            disabled={isDisabled}
          />
        );
      };
      render(<TestComponent />);
      const button = screen.getByText(label);
      expect(button).not.toBeDisabled();
      fireEvent.click(button);
      expect(button).toBeDisabled();
    });
  });
});
