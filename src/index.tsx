import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Routing from "./navigation/Routing";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import test from "./assets/test.png";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routing />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
