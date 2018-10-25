const saveCurrentRound = players =>
  players.map(player => ({ name: player.name, score: player.finalScore }));

export const newRound = (players, history) => [
  ...history,
  saveCurrentRound(players)
];
