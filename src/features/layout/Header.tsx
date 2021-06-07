import { ReactElement } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export function Header(): ReactElement {
  return (
    <HeaderWrapStyle>
      <h1>
        <Link to="/">VOTE WEB APP</Link>
      </h1>
    </HeaderWrapStyle>
  );
}

const HeaderWrapStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #cacaca;
  background: #fff;
  > h1 {
    font-weight: bold;
  }
`;
