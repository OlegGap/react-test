import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/Heder";
import Cardlist from "./components/cards/CardList";
import cards from "./components/cards/cards.json";
import "./index.css";

ReactDOM.render(
  <Fragment>
      <Header/>
    <Cardlist cards={cards}/>
  </Fragment>,
  document.getElementById("root")
);
