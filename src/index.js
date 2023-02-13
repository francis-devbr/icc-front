import React from "react";
import { createRoot } from "react-dom/client";

import reportWebVitals from "reportWebVitals";

import "react-perfect-scrollbar/dist/css/styles.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

import "assets/vendor/nucleo/css/nucleo.css";

import "assets/scss/argon-dashboard-pro-react.scss?v1.2.1";

import "index.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

import App from "App";
import { Provider } from "react-redux";
import { store } from "app/store";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
