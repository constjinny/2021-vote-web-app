import { ReactElement } from "react";
import styled from "@emotion/styled";

interface IContentsProps {
  children: ReactElement;
}

export function Contents({ children }: IContentsProps) {
  return <ContentsWrapStyle>{children}</ContentsWrapStyle>;
}

const ContentsWrapStyle = styled.main`
  overflow-y: auto;
  max-width: 1200px;
  height: calc(100vh - 102px);
  margin: 0 auto;
  padding: 20px 50px;
  box-sizing: border-box;
`;
