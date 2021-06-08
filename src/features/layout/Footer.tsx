import { ReactElement } from "react";
import styled from "@emotion/styled";

export function Footer(): ReactElement {
  return (
    <FooterWrapStyle>
      <a
        href="https://github.com/constjinny/2021-vote-web-app"
        target="_blank"
        rel="noreferrer"
      >
        view github
      </a>
    </FooterWrapStyle>
  );
}

const FooterWrapStyle = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  border-top: 1px solid #cacaca;
  background: #fff;
`;
