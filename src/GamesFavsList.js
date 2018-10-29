import React from "react";

import { CardColumns } from "reactstrap";

import GameFavThumbnail from "./GameFavThumbnail";

const GamesFavsList = ({ list, selectGame}) => (
  <section>
    <CardColumns className="mt-3">
      {list.map(game => (
        <GameFavThumbnail {...game} selectGame={selectGame} key={game.name} />
      ))}
    </CardColumns>
  </section>
);

export default GamesFavsList;