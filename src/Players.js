import React from "react";


const Players = ({}) => (
    <div>
      {Players.map(Player => (
        <Players
          name={Player.name}
          score={Player.score}
          finalScore={Player.score}
        />
      ))}
    </div>
  );
  
  export default Players;