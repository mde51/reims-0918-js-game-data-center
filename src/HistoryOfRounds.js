import React from "react";
import OneRound from "./OneRound";

const HistoryOfRounds = ({ history, gameId }) => (
  <div>
    {history[gameId] &&
      history[gameId].map((round, indexRound) => (
        <div key={indexRound}>
          <p className="title">
            Round n°
            {indexRound + 1}
          </p>
          <OneRound round={round} />
        </div>
      ))}
  </div>
);

export default HistoryOfRounds;
