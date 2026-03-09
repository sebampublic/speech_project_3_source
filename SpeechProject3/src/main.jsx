import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import App from "./App";
import Password from "./Password";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "rgba(10, 40, 100, 0.3)",
    },
    primary: {
      main: "#3a7bd5",
    },
    text: {
      primary: "#c8e4ff",
      secondary: "#7aaddd",
    },
  },
  shape: {
    borderRadius: 12,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Password>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Password>
    </ThemeProvider>
  </React.StrictMode>
);