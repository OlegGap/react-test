import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Conditioner from "./components/Conditioner";
import Timer from "./components/Timer"


ReactDOM.render(
  <Fragment>
    <App name="Oleg" />
    <Conditioner />
    <p></p>
    <Timer />
  </Fragment>,
  document.getElementById("root")
);
