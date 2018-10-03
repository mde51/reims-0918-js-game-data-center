import React from 'react';

import { CardColumns } from "reactstrap"

import GameThumbnail from "./GameThumbnail"

const GamesList = () => (
    <section>
      <CardColumns className="mt-3">
        <GameThumbnail />
        <GameThumbnail />
        <GameThumbnail />
        <GameThumbnail />
        <GameThumbnail />
        <GameThumbnail />
        <GameThumbnail />
        <GameThumbnail />
        <GameThumbnail />
        <GameThumbnail />
        <GameThumbnail />
        <GameThumbnail />
      </CardColumns>
    </section>
);

export default GamesList;