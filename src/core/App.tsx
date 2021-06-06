import { ReactElement } from "react";
import styled from "@emotion/styled";

import Routes from "../routes/Routes";
import { Header, Contents, Footer } from "../features/layout";

function App(): ReactElement {
  return (
    <WrapStyle>
      <Header />
      <Contents>
        <Routes />
      </Contents>
      <Footer />
    </WrapStyle>
  );
}

export default App;

const WrapStyle = styled.div`
  height: 100%;
`;
