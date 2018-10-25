import React from "react";
import RankingPlayer from "./RankingPlayer";
import { Table } from "reactstrap";

const PlayersList = ({ list, handleNewScoreChange, submitScorePlayers }) => (
  <section className="mt-4">
    <Table bordered className="tableau">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Username</th>
          <th>Score</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {list.map((player, index) => (
          <RankingPlayer
            {...player}
            handleChange={handleNewScoreChange}
            handleScoreChange={submitScorePlayers}
            i={index}
          />
        ))}
      </tbody>
    </Table>
  </section>
);

export default PlayersList;
