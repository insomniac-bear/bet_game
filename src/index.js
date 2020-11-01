import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";

import store from "./store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/*Оборачивает приложение для предоставления доступа всем компонентам приложения к глобальному хранилищу*/}
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
