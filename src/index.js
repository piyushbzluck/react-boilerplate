import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/app.scss";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </BrowserRouter>
);
reportWebVitals();
