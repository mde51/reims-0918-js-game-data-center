import React from "react";

import { CardColumns } from "reactstrap";

import GameThumbnail from "./GameThumbnail";

const GamesList = ({ list }) => (
  <section>
    <CardColumns className="mt-3">
      {list.map(game => (
        <GameThumbnail {...game}/>
        
      ))}
    </CardColumns>
  </section>
);

export default GamesList;
