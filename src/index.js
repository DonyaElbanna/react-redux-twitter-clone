import 'react-tooltip/dist/react-tooltip.css'
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";
import middleware from "./middleware";

const store = createStore(reducer, middleware);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
