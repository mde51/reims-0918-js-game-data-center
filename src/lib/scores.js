export const scoreByPlayersByRound = round => {
  const result = {};
  const finalScores = (acc, player) => {
    acc[player.name] = player.score;
    return acc;
  };
  return round.reduce(finalScores, result);
};

export const createScoreTable = history => {
  const finalScores = {};
  const setFinalScores = (acc, round) => {
    const roundScore = scoreByPlayersByRound(round);
    for (let name in roundScore) {
      if (!acc[name]) {
        acc[name] = roundScore[name];
      } else {
        acc[name] += roundScore[name];
      }
    }
    return acc;
  };
  let objectPlayers = history.reduce(setFinalScores, finalScores);
  return Object.keys(objectPlayers).map(key => ({
    name: key,
    score: objectPlayers[key]
  }));
};
