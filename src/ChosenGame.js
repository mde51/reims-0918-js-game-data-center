import React from "react";
import GameThumbnail from "./GameThumbnail";

const ChosenGame = ({ game }) => (
  <div>
    <GameThumbnail {...game} />
    <p>Résumé jeu sélectionné : {game.summary}</p>
    <p>Storyline : {game.storyline}</p>
  </div>
);

export default ChosenGame;
