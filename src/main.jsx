import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { OpenModalProvider } from "./providers/ProviderOpenModal";
import { GlobalStyled } from "./style";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <OpenModalProvider>
      <GlobalStyled />
      <App />
    </OpenModalProvider>
  </React.StrictMode>
);
