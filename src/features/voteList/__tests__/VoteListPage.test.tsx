import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../../../core/store";
import { Provider } from "react-redux";
import { shallow } from "enzyme";

import { VoteListPage } from "../VoteListPage";

describe("VoteListPage", () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  let component: any = null;

  it("renders VoteListPage component", () => {
    component = shallow(
      <Provider store={store}>
        <VoteListPage />
      </Provider>
    );
  });

  it("matches snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
