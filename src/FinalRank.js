import React from "react";

const FinalRank = ({ name, i, score}) => {
  return (
    
    <tr>
      <th>{i=i+1}</th>
      <td>{name}</td>
      <td>{score}</td>
    </tr>
  );
};

export default FinalRank;
