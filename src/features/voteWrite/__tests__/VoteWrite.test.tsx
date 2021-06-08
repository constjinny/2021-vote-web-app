import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../../../core/store";
import { Provider } from "react-redux";
import { shallow } from "enzyme";

import { VoteWrite } from "../VoteWrite";

describe("VoteWrite", () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  let component: any = null;

  it("renders VoteWrite component", () => {
    component = shallow(
      <Provider store={store}>
        <VoteWrite />
      </Provider>
    );
  });

  it("matches snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
