export const saveCurrentRound = players =>
  players.map(player => ({ name: player.name, score: player.finalScore }));

export const toNewRound = (players, history) => [
  ...history,
  saveCurrentRound(players)
];
