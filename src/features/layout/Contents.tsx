import { ReactElement } from "react";
import styled from "@emotion/styled";

interface IContentsProps {
  children: ReactElement;
}

export function Contents({ children }: IContentsProps) {
  return <ContentsWrapStyle>{children}</ContentsWrapStyle>;
}

const ContentsWrapStyle = styled.main`
  height: calc(100vh - 102px);
  padding: 20px 50px;
  box-sizing: border-box;
`;
