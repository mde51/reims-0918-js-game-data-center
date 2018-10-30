const saveCurrentRound = players =>
  players.map(player => ({ name: player.name, score: player.finalScore }));

export const newRound = (round, history) => {
  const curRound = saveCurrentRound(round);
  return history.gameId[curRound];
};
// history.gameId[...gameId, ]
// return [...history.gameId, saveCurrentRound(round)];
export const newRound = (round, history) => [
  ...history,
  saveCurrentRound(round)
];
