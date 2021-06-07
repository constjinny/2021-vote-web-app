import { ReactElement } from "react";
import styled from "@emotion/styled";
import {
  IButtonProps,
  ButtonStyleProps,
  ButtonTheme,
  ButtonThemeStyle,
} from "./types";

export function Button({
  theme,
  children,
  isDisabled,
  onClick,
}: IButtonProps): ReactElement {
  const themeStyle = ButtonThemeStyle[theme];

  return (
    <ButtonStyle
      type="button"
      disabled={isDisabled}
      onClick={onClick}
      themeStyle={themeStyle}
    >
      {children && children}
    </ButtonStyle>
  );
}

Button.defaultProps = {
  theme: ButtonTheme.Default,
  isDisabled: false,
};

const ButtonStyle = styled.button<ButtonStyleProps>`
  ${({ themeStyle }) => themeStyle};
  padding: 0;
  border: 0 none;
  cursor: pointer;
  border-radius: 5px;
  background-color: #5ea9e7;
  color: #fff;
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.9) 0px 5px 10px;
  }
  &:disabled {
    cursor: default;
    background-color: #8e9daa;
  }
`;
