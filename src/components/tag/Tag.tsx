import { ReactElement } from "react";
import styled from "@emotion/styled";

interface ITagProps {
  text: string;
  isOn: boolean;
}

export function Tag({ text, isOn }: ITagProps): ReactElement {
  return <TagStyle isOn={isOn}>{text}</TagStyle>;
}

Tag.defaultProps = {
  isOn: false,
};

const TagStyle = styled.span<{ isOn: boolean }>`
  display: inline-block;
  margin: 3px 5px 0 0;
  padding: 2px 5px 0px;
  font-size: 12px;
  border-radius: 5px;
  background-color: ${({ isOn }) => (isOn ? "#5ea9e7" : "#eeeeee")};
  color: ${({ isOn }) => (isOn ? "#fff" : "#333")};
  vertical-align: top;
`;
