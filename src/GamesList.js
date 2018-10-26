import React from "react";

import { CardColumns } from "reactstrap";

import GameThumbnail from "./GameThumbnail";

const GamesList = ({ list, selectGame }) => (
  <section>
    <CardColumns className="gamelist">
      {list.map(game => (
        <GameThumbnail {...game} selectGame={selectGame} key={game.id} />
      ))}
    </CardColumns>
  </section>
);

export default GamesList;
