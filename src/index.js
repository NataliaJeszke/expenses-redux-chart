import indexStyle from './index.css'
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
// import { Provider } from "react-redux";
// import { store } from "./store/index";
// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
// let persistor = persistStore(store)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
