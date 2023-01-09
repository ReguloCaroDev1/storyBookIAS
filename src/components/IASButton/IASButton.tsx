import { useEffect, useState } from "react";
import { StyledEngineProvider } from "@mui/material";

import Button from "@mui/material/Button";
import ButtonStyle from "./IASButton.module.scss";
import classNames from "classnames/bind";

interface ButtonProps {
  typeButton?: "primary" | "secondary" | "buttonWhite";
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}
let cx = classNames.bind(ButtonStyle);

export const ButtonExample = ({
  typeButton = "primary",
  size = "medium",
  label,
  disabled = false,
  onClick,
  ...props
}: ButtonProps) => {
  const [sized, setSized] = useState(size);
  const [values, setValues] = useState(typeButton);

  useEffect(() => {
    setSized(size);
    setValues(typeButton);
  }, [size, values]);

  let className = cx("button", {
    [size]: sized,
    [typeButton]: values,
    disabled: disabled,
  });

  const onClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!disabled) onClick?.(event);
  };
  return (
    <StyledEngineProvider injectFirst>
      <div>
        <Button
          type="button"
          disabled={disabled}
          className={className}
          onClick={onClickHandler}
          {...props}
        >
          {label}
        </Button>
      </div>
    </StyledEngineProvider>
  );
};
