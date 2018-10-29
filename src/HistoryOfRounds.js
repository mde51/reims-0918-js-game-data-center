import React from "react";
import OneRound from "./OneRound";

const HistoryOfRounds = ({ list }) => (
  <div>
    {list.map((round, indexRound) => (
      <div key={indexRound}>
        <p>
          Round n°
          {indexRound + 1}
        </p>
        <OneRound round={round} />
      </div>
    ))}
  </div>
);

export default HistoryOfRounds;
