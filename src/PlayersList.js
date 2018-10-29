import React from "react";
import RankingPlayer from "./RankingPlayer";
import { Table } from "reactstrap";

const PlayersList = ({ list, handleInputScoreChange, submitFinalScorePlayer }) => (
  <section className="mt-4">
    <Table>
    <table class="table table-striped">
      <thead className="tableau">
        <tr>
          <th>Rank</th>
          <th>Username</th>
          <th>Score</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody class="table tableau">
        {list.map((player, index) => (
          <RankingPlayer
            {...player}
            handleInputScoreChange={handleInputScoreChange}
            handleFinalScorePlayer={submitFinalScorePlayer}
            i={index}
          />
        ))}
      </tbody>
      </table>
    </Table>
  </section>
);

export default PlayersList;
