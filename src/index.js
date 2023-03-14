import React from "react";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
const root = createRoot(document.querySelector("#root"));
import UnderDevelopment from "./components/UnderDevelopment";

root.render(
  <HashRouter>
    <UnderDevelopment />
    <App />
  </HashRouter>
);
