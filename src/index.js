import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/reset.css";

import App from "./core/App";
import store from "./core/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
