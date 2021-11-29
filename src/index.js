import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import CssBaseline from '@mui/material/CssBaseline';

import { render } from "react-dom";
import App from "./components/App";

const root = document.getElementById("root");

render(
  <React.Fragment>
    <CssBaseline />
    <App />
  </React.Fragment>
, root);