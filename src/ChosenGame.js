import React from "react";
import DisplayChosenGame from "./DisplayChosenGame";

const ChosenGame = ({ game }) => (
  <div>
    <DisplayChosenGame {...game} />
  </div>
);

export default ChosenGame;
