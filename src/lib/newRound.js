const saveCurrentRound = players =>
  players.map(player => ({ name: player.name, score: player.finalScore }));

export const newRound = (players, history, gameId) =>
  history[gameId]
    ? {
        ...history, [gameId]: [...history[gameId], saveCurrentRound(players)]
      }
    : { ...history, [gameId]: [saveCurrentRound(players)] };
