import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../core/store";
import { Provider } from "react-redux";
import { shallow } from "enzyme";

import Routes from "./Routes";

describe("Routes", () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  let component: any = null;

  it("renders Routes", () => {
    component = shallow(
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  });

  it("matches snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
