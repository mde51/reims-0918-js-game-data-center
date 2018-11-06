const scoreByPlayersByRound = round => {
  let result = {};
  let finalScores = (acc, player) => {
    acc[player.name] = player.score;
    return acc;
  };
  return round.reduce(finalScores, result);
};

export const scoreTable = (history, gameId) => {
  let finalScores = {};
  let setFinalScores = (acc, round) => {
    let roundScore = scoreByPlayersByRound(round);
    for (let name in roundScore) {
      if (!acc[name]) {
        acc[name] = roundScore[name];
      } else {
        acc[name] += roundScore[name];
      }
    }
    return acc;
  };
  let objectPlayers = history[gameId].reduce(setFinalScores, finalScores);
  const result = Object.keys(objectPlayers).map(key => ({
    name: key,
    score: objectPlayers[key]
  }));
  return ({[gameId] : result});
};
