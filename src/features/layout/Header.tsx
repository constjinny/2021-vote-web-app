import { ReactElement } from "react";
import styled from "@emotion/styled";

export function Header(): ReactElement {
  return (
    <HeaderWrapStyle>
      <h1>VOTE WEB APP</h1>
    </HeaderWrapStyle>
  );
}

const HeaderWrapStyle = styled.header`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #cacaca;
  background: #fff;
`;
