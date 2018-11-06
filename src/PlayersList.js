import React from "react";
import RankingPlayer from "./RankingPlayer";
import { Table } from "reactstrap";

const PlayersList = ({
  list,
  handleInputScoreChange,
  submitFinalScorePlayer,
  gameStarted
}) => (
  <section className="mt-4">
    <Table>
      <table className="table table-striped">
        <thead className="tableau">
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="table-striped">
          {list.map((player, index) => (
            <RankingPlayer
              {...player}
              handleInputScoreChange={handleInputScoreChange}
              submitFinalScorePlayer={submitFinalScorePlayer}
              gameStarted={gameStarted}
              rank={index}
              key={index}
            />
          ))}
        </tbody>
      </table>
    </Table>
  </section>
);

export default PlayersList;
