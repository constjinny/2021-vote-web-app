import { ReactElement } from "react";

interface IScreenOutProps {
  as: any;
  children: string;
}

export function ScreenOut({
  as: Tag,
  children,
}: IScreenOutProps): ReactElement {
  return (
    <Tag
      style={{
        overflow: "hidden",
        position: "absolute",
        width: 0,
        height: 0,
        lineHeight: 0,
        textIndent: "-9999px",
      }}
    >
      {children}
    </Tag>
  );
}

ScreenOut.defaultProps = {
  as: "strong",
};
