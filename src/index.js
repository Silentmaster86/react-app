import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store }from "./app/store.js";
import App from "./App.js";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
