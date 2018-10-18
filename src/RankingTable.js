import React from "react";
import { Table } from "reactstrap";

const RankingTable = ({ name, score }) => {
  return (
    <div>
      <Table bordered className="tableau">
        <tbody>
          <tr>
            <td>1</td>
            <td>{name}</td>
            <td>{score}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default RankingTable;
