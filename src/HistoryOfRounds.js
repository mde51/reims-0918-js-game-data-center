import React from "react";
import OneRound from "./OneRound";

const HistoryOfRounds = ({ list }) => (
  <div>
    {list.map((round, indexRound) => (
      <OneRound round={round} key={indexRound} />
    ))}
  </div>
);

export default HistoryOfRounds;
