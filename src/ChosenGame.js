import React from "react";
import ChosenGameThumbnail from "./ChosenGameThumbnail";

const ChosenGame = ({ game }) => (
  <div>
    <ChosenGameThumbnail {...game} />
  </div>
);

export default ChosenGame;
