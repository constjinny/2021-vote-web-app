import { css } from "@emotion/react";

export interface IButtonProps {
  theme: ButtonTheme;
  children?: any;
  isDisabled: boolean;
  onClick: (any: any) => any;
}

export interface ButtonStyleProps {
  themeStyle: string;
}

export enum ButtonTheme {
  Default = "DEFAULT",
  Full = "FULL",
}

export const ButtonThemeStyle: { [index: string]: any } = {
  [ButtonTheme.Default]: css`
    width: 100px;
    height: 30px;
  `,
  [ButtonTheme.Full]: css`
    width: 100%;
    height: 40px;
  `,
};
