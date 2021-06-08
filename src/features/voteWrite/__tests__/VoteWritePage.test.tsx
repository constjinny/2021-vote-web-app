import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../../../core/store";
import { Provider } from "react-redux";
import { shallow } from "enzyme";

import { VoteWritePage } from "../VoteWritePage";

describe("VoteWritePage", () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  let component: any = null;

  it("renders VoteWritePage component", () => {
    component = shallow(
      <Provider store={store}>
        <VoteWritePage />
      </Provider>
    );
  });

  it("matches snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
