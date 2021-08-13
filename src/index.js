import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import DisplayToast from './components/Toast/DisplayToast';
import { Provider } from "react-redux";
import store from "./redux/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <DisplayToast />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
