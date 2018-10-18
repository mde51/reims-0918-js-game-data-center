import React from "react";
import { Table } from "reactstrap";

const rankingTable = ({ value }) => {
  return (
    <div>
      <Table bordered className="tableau">
        <thead>
          <tr>
            <th />
            <th>Rank</th>
            <th>Username</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">#</th>
            <td>1</td>
            <td>{value}</td>
            <td>14</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default rankingTable;
