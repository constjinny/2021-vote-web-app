import { ReactElement } from "react";
import styled from "@emotion/styled";

export interface IInputProps {
  type: string;
  value?: string;
  placeholder?: string;
  min?: string | number;
  onChange: (value: string) => any;
}

export function Input({
  type,
  value,
  placeholder,
  onChange,
  min,
}: IInputProps): ReactElement {
  return (
    <InputStyle
      type={type}
      value={value}
      placeholder={placeholder}
      min={min}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

Input.defaultProps = {
  type: "text",
  value: "",
  placeholder: "",
};

const InputStyle = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 16px;
  border: 1px solid #cacaca;
  cursor: pointer;
  border-radius: 5px;
  outline: 0 none;
  box-sizing: border-box;
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.9) 0px 5px 10px;
  }
`;
