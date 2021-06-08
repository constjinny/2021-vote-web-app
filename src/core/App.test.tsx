import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../core/store";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/github/i);
  expect(linkElement).toBeInTheDocument();
});
