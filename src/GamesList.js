import React from 'react';

import { CardColumns } from "reactstrap"

import GamesThumbnail from "./GamesThumbnail"

const GamesList = () => (
    <section>
      <CardColumns>
        <GamesThumbnail />
        <GamesThumbnail />
        <GamesThumbnail />
        <GamesThumbnail />
        <GamesThumbnail />
        <GamesThumbnail />
        <GamesThumbnail />
        <GamesThumbnail />
        <GamesThumbnail />
        <GamesThumbnail />
        <GamesThumbnail />
        <GamesThumbnail />
      </CardColumns>
    </section>
);

export default GamesList;