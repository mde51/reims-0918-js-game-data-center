import React from "react";

import { CardColumns } from "reactstrap";

import GameFavThumbnail from "./GameFavThumbnail";

const GamesFavsList = ({ listFavs, selectGame}) => (
  <section>
    <CardColumns className="mt-3">
      {listFavs.map(game => (
        <GameFavThumbnail {...game} selectGame={selectGame} key={game.name} />
      ))}
    </CardColumns>
  </section>
);

export default GamesFavsList;