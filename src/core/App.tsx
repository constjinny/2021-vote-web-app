import { ReactElement, useEffect } from "react";
import styled from "@emotion/styled";
import { CommAPI } from "../api/sample.api";

import Routes from "../routes/Routes";

function App(): ReactElement {
  useEffect(() => {
    // NOTI: 임시 API사용으로 최초 진입 시 세션에 데이터 별도 세팅
    CommAPI.setInitData();
  }, []);

  return (
    <WrapStyle>
      <Routes />
    </WrapStyle>
  );
}

export default App;

const WrapStyle = styled.div`
  height: 100%;
`;
