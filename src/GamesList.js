import React from "react";

import { CardColumns } from "reactstrap";

import GameThumbnail from "./GameThumbnail";

const GamesList = ({ list }) => (
  <section>
    <CardColumns className="mt-3">
      {list.map(game => (
        <GameThumbnail image={game.cover} nom={game.name} />
      ))}
    </CardColumns>
  </section>
);

export default GamesList;
