import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";

import App from "./App";
import { theme } from "./Assets/Styles/theme";
import store from "./Services/Store";

import "./Assets/Styles/normalize.css";
import "./Assets/Styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Redux wrapper */}
    <Provider store={store}>
      {/* MUI Wrapper */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
