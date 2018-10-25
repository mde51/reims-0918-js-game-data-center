export const scoreByPlayersByRound = round => {
  const result = {};
  const finalScores = (acc, player) => {
    acc[player.nom] = player.score;
    // console.log(player)
    return acc;
  };
  return round.reduce(finalScores, result);
};

export const createScoreTable = game => {
  const finalScores = {};
  const setFinalScores = (acc, round) => {
    const roundScore = scoreByPlayersByRound(round);
    for (let name in roundScore) {
      if (!acc[name]) {
        acc[name] = roundScore[name];
      } else {
        acc[name] += roundScore[name];
      }
      // console.log(roundScore[name])
    }
    return acc;
  };
  let objectPlayers = game.reduce(setFinalScores, finalScores);
  return Object.keys(objectPlayers).map(key => ({
    name: key,
    score: objectPlayers[key]
  }));
};
