import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import configStore from "./redux/config.store";
import { Provider as ReduxProvider } from "react-redux";
import "./index.css";

const store = configStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("app")
);
