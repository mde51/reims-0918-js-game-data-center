import React from "react";


const Players = ({}) => (
    <div>
      {Players.map(Player => (
        <Players
          name={Player.name}
          point={Player.score}
         
        />
      ))}
    </div>
  );
  
  export default Players;