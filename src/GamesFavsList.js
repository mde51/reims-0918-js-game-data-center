import React from "react";

import { CardColumns } from "reactstrap";

import GameFavThumbnail from "./GameFavThumbnail";

const GamesFavsList = ({ favList, selectGame}) => (
  <section>
    <CardColumns className="mt-3">
      {favList.map(game => (
        <GameFavThumbnail {...game} selectGame={selectGame} key={game.id} />
      ))}
    </CardColumns>
  </section>
);

export default GamesFavsList;