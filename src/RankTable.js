import React, { Component } from "react";
import { Table } from "reactstrap";

// const RankTable = ({player}) => (

class RankTable extends Component {
  render() {
    return (
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Rank</th>
            <th>Username</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">#</th>
            <td>1</td>
            <td>{this.props.player}</td>
            <td>14</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default RankTable;
